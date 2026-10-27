(function () {
  const config = window.SELLER_SCRAPER_CONFIG;
  let stopRequested = false;

  const ALL_CATEGORY = {
    scope: "all",
    level: "all",
    id: "-1",
    name: "Tất cả",
    slug: "all",
    l1: null,
    l2: null,
    l3: null,
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const RETRYABLE_API_CODES = new Set([98001001]);
  const CHALLENGE_API_CODES = new Set([-9999, 36009002, 98001001]);

  function defaultLatestDate() {
    return new Date(Date.now() - config.latestLagDays * 86400000).toISOString().slice(0, 10);
  }

  function addDays(dateStr, days) {
    const d = new Date(`${dateStr}T00:00:00Z`);
    d.setUTCDate(d.getUTCDate() + days);
    return d.toISOString().slice(0, 10);
  }

  function rangeForDays(endDate, days) {
    const count = Math.max(1, parseInt(days, 10) || 1);
    return { startDate: addDays(endDate, -(count - 1)), endDate };
  }

  function dateRange(start, end) {
    const out = [];
    let d = new Date(`${start}T00:00:00Z`);
    const last = new Date(`${end}T00:00:00Z`);
    while (d <= last) {
      out.push(d.toISOString().slice(0, 10));
      d.setUTCDate(d.getUTCDate() + 1);
    }
    return out;
  }

  function dayToMsRange(dateStr) {
    const begin = new Date(`${dateStr}T00:00:00.000Z`).getTime();
    return { begin, end: begin + 86400000 - 1 };
  }

  function nextDate(dateStr) {
    return addDays(dateStr, 1);
  }

  function slugify(value) {
    return String(value || "unknown")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "d")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "unknown";
  }

  function csvEscape(value) {
    return `"${String(value ?? "").replace(/"/g, '""')}"`;
  }

  function idText(value) {
    const text = String(value ?? "");
    return text ? `'${text}` : "";
  }

  function rawId(value) {
    return String(value ?? "").replace(/^'/, "");
  }

  // ID video công khai trên TikTok là dãy 15-20 chữ số; `video.id` kiểu "v14044g5..." là mã nội bộ của Seller Center, KHÔNG dùng dựng link.
  function publicVideoId(...candidates) {
    for (const c of candidates) {
      const text = String(c ?? "").trim();
      if (/^\d{15,20}$/.test(text)) return text;
    }
    return "";
  }

  // Lưu NGUYÊN KHỐI video_meta (bỏ link tải có chữ ký — dài, hết hạn) vào manifest để truy vết sau: công cụ khớp video
  // (script-factory) cần giờ đăng chính xác, mô tả và ID công khai nếu API có trả. Lỗi thì trả rỗng, không làm hỏng lượt quét.
  function metaJson(meta) {
    try {
      const copy = JSON.parse(JSON.stringify(meta || {}));
      if (copy.video && typeof copy.video === "object") delete copy.video.video_infos;
      return JSON.stringify(copy);
    } catch (error) {
      return "";
    }
  }

  function num(value) {
    const n = parseFloat(String(value ?? "").replace(/,/g, ""));
    return Number.isFinite(n) ? n : "";
  }

  function intNum(value) {
    const n = parseInt(String(value ?? "").replace(/[^\d-]/g, ""), 10);
    return Number.isFinite(n) ? n : "";
  }

  function moneyValue(range, key) {
    return num(range?.[key]?.value);
  }

  function scaledThousand(range, key) {
    const n = moneyValue(range, key);
    if (n === "") return "";
    const display = String(range?.[key]?.display || "").toUpperCase();
    if (display.includes("M")) return Math.round(n * 1000000);
    if (display.includes("K")) return Math.round(n * 1000);
    return Math.round(n);
  }

  function imageUrlList(image, key = "url_list") {
    const values = image?.[key];
    if (!Array.isArray(values)) return [];
    return values.map((value) => String(value || "").trim()).filter(Boolean);
  }

  function firstImageUrl(image, key = "url_list") {
    return imageUrlList(image, key)[0] || "";
  }

  function joinedImageUrls(image, key = "url_list") {
    return imageUrlList(image, key).join(" | ");
  }

  function tabSlug(tabNames) {
    const names = tabNames?.length ? tabNames : Object.keys(config.topSellingTabs);
    const all = Object.keys(config.topSellingTabs);
    if (names.length === all.length && all.every((name) => names.includes(name))) return "all-tabs";
    return names.map((name) => config.topSellingTabs[name]?.slug || slugify(name)).join("-");
  }

  function categoryName(category) {
    return category?.name || "";
  }

  function findL1(id) {
    return config.lv1Categories.find((category) => category.id === String(id));
  }

  function findL2(id) {
    return (config.categoryTree.l2 || []).find((category) => category.id === String(id));
  }

  function findL3(id) {
    return (config.categoryTree.l3 || []).find((category) => category.id === String(id));
  }

  function categoryFromLevel(level, id) {
    if (level === "all") return ALL_CATEGORY;
    if (level === "l1") {
      const l1 = findL1(id);
      if (!l1) throw new Error(`Unknown L1 category: ${id}`);
      return {
        scope: "l1",
        level: "l1",
        id: l1.id,
        name: l1.name,
        slug: l1.slug || slugify(l1.name),
        l1,
        l2: null,
        l3: null,
      };
    }
    if (level === "l2") {
      const l2 = findL2(id);
      if (!l2) throw new Error(`Unknown L2 category: ${id}`);
      const l1 = findL1(l2.l1_id);
      return {
        scope: "l2",
        level: "l2",
        id: l2.id,
        name: l2.name,
        slug: l2.slug || slugify(l2.name),
        l1,
        l2,
        l3: null,
      };
    }
    if (level === "l3") {
      const l3 = findL3(id);
      if (!l3) throw new Error(`Unknown L3 category: ${id}`);
      const l2 = findL2(l3.l2_id);
      const l1 = findL1(l3.l1_id || l2?.l1_id);
      return {
        scope: "l3",
        level: "l3",
        id: l3.id,
        name: l3.name,
        slug: l3.slug || slugify(l3.name),
        l1,
        l2,
        l3,
      };
    }
    throw new Error(`Unknown category level: ${level}`);
  }

  function l1ScanCategories(includeAll = false) {
    const categories = config.lv1Categories.map((category) => categoryFromLevel("l1", category.id));
    return includeAll ? [ALL_CATEGORY, ...categories] : categories;
  }

  function childrenOf(category, target) {
    const l2 = config.categoryTree.l2 || [];
    const l3 = config.categoryTree.l3 || [];
    if (target === "self") return [category];

    if (category.level === "l1") {
      if (target === "direct_children" || target === "all_l2") {
        return l2.filter((item) => item.l1_id === category.id).map((item) => categoryFromLevel("l2", item.id));
      }
      if (target === "all_l3") {
        return l3.filter((item) => item.l1_id === category.id).map((item) => categoryFromLevel("l3", item.id));
      }
    }

    if (category.level === "l2") {
      if (target === "direct_children" || target === "all_l3") {
        return l3.filter((item) => item.l2_id === category.id).map((item) => categoryFromLevel("l3", item.id));
      }
    }

    throw new Error(`No ${target} categories found for ${category.level} ${category.id}`);
  }

  function uniqueCategories(categories) {
    const out = [];
    const seen = new Set();
    for (const category of categories || []) {
      if (!category) continue;
      const key = `${category.level}:${category.id}`;
      if (seen.has(key)) continue;
      seen.add(key);
      out.push(category);
    }
    return out;
  }

  function selectedCategoryRoots(options) {
    const refs = Array.isArray(options?.categorySelection) ? options.categorySelection : [];
    return uniqueCategories(refs.map((item) => {
      const level = String(item?.level || "").trim().toLowerCase();
      const id = String(item?.id || "").trim();
      if (!id || !["l1", "l2", "l3"].includes(level)) {
        throw new Error("Each selected category needs level l1/l2/l3 and id.");
      }
      return categoryFromLevel(level, id);
    }));
  }

  function categoriesAtLevel(roots, targetLevel) {
    const out = [];
    for (const root of roots) {
      if (targetLevel === "l1") {
        if (root.level === "l1") out.push(root);
        else if (root.l1?.id) out.push(categoryFromLevel("l1", root.l1.id));
      } else if (targetLevel === "l2") {
        if (root.level === "l1") {
          out.push(...(config.categoryTree.l2 || [])
            .filter((item) => item.l1_id === root.id)
            .map((item) => categoryFromLevel("l2", item.id)));
        } else if (root.level === "l2") {
          out.push(root);
        } else if (root.l2?.id) {
          out.push(categoryFromLevel("l2", root.l2.id));
        }
      } else if (targetLevel === "l3") {
        if (root.level === "l1") {
          out.push(...(config.categoryTree.l3 || [])
            .filter((item) => item.l1_id === root.id)
            .map((item) => categoryFromLevel("l3", item.id)));
        } else if (root.level === "l2") {
          out.push(...(config.categoryTree.l3 || [])
            .filter((item) => item.l2_id === root.id)
            .map((item) => categoryFromLevel("l3", item.id)));
        } else {
          out.push(root);
        }
      }
    }
    return uniqueCategories(out);
  }

  function categorySelectionText(roots) {
    return roots.map((category) => `${category.level}:${category.id}`).join(" | ");
  }

  function decorateMultiCategories(categories, mode, roots) {
    const selectionIds = categorySelectionText(roots);
    return categories.map((category) => ({
      ...category,
      selectionMode: mode,
      selectionCount: roots.length,
      selectionIds,
    }));
  }

  function mixedCategory(roots) {
    const idsFor = (level) => roots
      .filter((category) => category.level === level)
      .map((category) => category.id);
    return {
      scope: "mixed",
      level: "mixed",
      id: "",
      name: `${roots.length} selected categories`,
      slug: "mixed-selection",
      l1: null,
      l2: null,
      l3: null,
      filter: {
        country_code: config.countryCode,
        favorite_only: false,
        lv1_cate_ids: idsFor("l1"),
        lv2_cate_ids: idsFor("l2"),
        lv3_cate_ids: idsFor("l3"),
      },
      selectionMode: "combined",
      selectionCount: roots.length,
      selectionIds: categorySelectionText(roots),
    };
  }

  function multiDeepScanCategories(options) {
    const mode = String(options?.multiScanMode || "combined");
    if (mode === "market") {
      return decorateMultiCategories([ALL_CATEGORY], mode, []);
    }
    const roots = selectedCategoryRoots(options);
    if (!roots.length) throw new Error("Choose at least one category for Deep Scan.");
    if (mode === "combined") return [mixedCategory(roots)];
    if (mode === "selected") return decorateMultiCategories(roots, mode, roots);
    if (["l1", "l2", "l3"].includes(mode)) {
      return decorateMultiCategories(categoriesAtLevel(roots, mode), mode, roots);
    }
    if (mode === "all_levels") {
      const categories = uniqueCategories([
        ALL_CATEGORY,
        ...categoriesAtLevel(roots, "l1"),
        ...categoriesAtLevel(roots, "l2"),
        ...categoriesAtLevel(roots, "l3"),
      ]);
      return decorateMultiCategories(categories, mode, roots);
    }
    throw new Error(`Unknown multi Deep Scan mode: ${mode}`);
  }

  function categoryTargetsFromOptions(options) {
    const preset = options?.preset || "market";
    if (preset === "market") return [ALL_CATEGORY];
    if (preset === "l1-scan") return l1ScanCategories(Boolean(options?.includeAllInL1Scan));
    if (preset === "l2-scan") {
      return (config.categoryTree.l2 || []).map((category) => categoryFromLevel("l2", category.id));
    }
    if (preset === "multi-deep-scan") return multiDeepScanCategories(options);
    if (preset === "deep-scan") {
      const root = categoryFromLevel(options.rootLevel, options.rootId);
      const targets = childrenOf(root, options.targetMode || "self");
      if (!targets.length) {
        throw new Error(`No category targets for ${root.name} / ${options.targetMode}`);
      }
      return targets.map((target) => ({ ...target, root }));
    }
    return [ALL_CATEGORY];
  }

  function rowMeta(source, preset, category, root, rankTypeName = "") {
    const effectiveRoot = root || category.root || category;
    return {
      source,
      preset,
      category_scope: category.scope,
      root_level: effectiveRoot.level || "",
      root_id: effectiveRoot.id === "-1" ? "-1" : idText(effectiveRoot.id || ""),
      root_name: effectiveRoot.name || "",
      target_level: category.level || "",
      target_id: category.id === "-1" ? "-1" : idText(category.id || ""),
      target_name: category.name || "",
      l1_id: idText(category.l1?.id || ""),
      l1_name: category.l1?.name || "",
      l2_id: idText(category.l2?.id || ""),
      l2_name: category.l2?.name || "",
      l3_id: idText(category.l3?.id || ""),
      l3_name: category.l3?.name || "",
      rank_type_name: rankTypeName,
      selection_mode: category.selectionMode || "",
      selection_count: category.selectionCount || "",
      selection_ids: category.selectionIds || "",
    };
  }

  function topSellingFilter(category) {
    if (category?.filter) return { ...category.filter };
    if (!category || category.level === "all") {
      return {
        country_code: config.countryCode,
        favorite_only: false,
        lv1_cate_ids: config.lv1CategoryIdsAll,
        lv2_cate_ids: [],
        lv3_cate_ids: [],
      };
    }
    return {
      country_code: config.countryCode,
      favorite_only: false,
      lv1_cate_ids: category.l1?.id ? [category.l1.id] : [],
      lv2_cate_ids: category.l2?.id ? [category.l2.id] : [],
      lv3_cate_ids: category.l3?.id ? [category.l3.id] : [],
    };
  }

  function apiError(message, details = {}) {
    const error = new Error(message);
    Object.assign(error, details);
    return error;
  }

  function isChallengeError(error) {
    if (error?.isChallenge) return true;
    if (CHALLENGE_API_CODES.has(Number(error?.apiCode))) return true;
    if ([401, 403, 429].includes(Number(error?.status))) return true;
    const text = String(error?.message || error || "").toLowerCase();
    return [
      "captcha", "challenge", "verify", "verification", "risk control",
      "security verification", "too many requests", "access denied",
      "login expired", "session expired", "xác minh",
    ].some((keyword) => text.includes(keyword));
  }

  async function fetchJson(url, body) {
    const absoluteUrl = new URL(url, location.origin).href;
    const res = await fetch(absoluteUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(body),
    });
    let json = null;
    let rawText = "";
    if (typeof res.text === "function") {
      rawText = await res.text();
      try {
        json = rawText ? JSON.parse(rawText) : null;
      } catch (_error) {
        json = null;
      }
    } else {
      json = await res.json();
    }
    const apiCode = json?.code;
    const detail = String(json?.message || json?.msg || rawText || "").trim().slice(0, 500);
    if (!json && rawText) {
      const error = apiError(`API trả về nội dung không phải JSON từ ${url}: ${detail}`, {
        status: res.status,
        apiCode,
      });
      error.isChallenge = /<!doctype|<html|captcha|challenge|verify/i.test(rawText) || isChallengeError(error);
      throw error;
    }
    if (!res.ok) {
      const error = apiError(`HTTP ${res.status} từ ${url}${detail ? `: ${detail}` : ""}`, {
        status: res.status,
        apiCode,
      });
      error.isChallenge = isChallengeError(error);
      throw error;
    }
    if (json?.code !== 0 && json?.code !== undefined) {
      const error = apiError(`API code ${json.code} từ ${url}: ${detail}`, {
        status: res.status,
        apiCode: json.code,
      });
      error.isChallenge = isChallengeError(error);
      throw error;
    }
    return json;
  }

  function isRetryableError(error) {
    const text = String(error?.message || error || "");
    return text.includes("HTTP 5") ||
      text.includes("Failed to fetch") ||
      text.includes("NetworkError") ||
      [...RETRYABLE_API_CODES].some((code) => text.includes(`API code ${code}`));
  }

  async function fetchJsonWithRetry(url, body, retryOptions = {}, progress) {
    const attemptMax = Math.max(1, retryOptions.attemptMax || 1);
    const retryBaseMs = Math.max(250, retryOptions.retryBaseMs || 800);
    const challengePollMs = Math.max(2000, retryOptions.challengePollMs || config.challengePollMs || 5000);
    const challengeMaxWaitMs = Math.max(challengePollMs, retryOptions.challengeMaxWaitMs || config.challengeMaxWaitMs || 600000);
    let challengeStartedAt = 0;
    let challengeChecks = 0;
    for (let attempt = 1; attempt <= attemptMax;) {
      try {
        const result = await fetchJson(url, body);
        if (challengeStartedAt) {
          progress?.({
            step: "challenge_resolved",
            url,
            waitedMs: Date.now() - challengeStartedAt,
            context: retryOptions.context || null,
          });
        }
        return result;
      } catch (error) {
        if (isChallengeError(error)) {
          if (!challengeStartedAt) {
            challengeStartedAt = Date.now();
            progress?.({
              step: "challenge_required",
              url,
              error: String(error?.message || error),
              context: retryOptions.context || null,
            });
          }
          const waitedMs = Date.now() - challengeStartedAt;
          if (waitedMs >= challengeMaxWaitMs) {
            throw apiError(
              `CAPTCHA_TIMEOUT: Chưa hoàn tất xác minh Seller sau ${Math.round(waitedMs / 1000)} giây. ${error.message || error}`,
              { isChallenge: true, status: error?.status, apiCode: error?.apiCode }
            );
          }
          challengeChecks += 1;
          progress?.({
            step: "challenge_wait",
            url,
            check: challengeChecks,
            waitedMs,
            nextRetryMs: challengePollMs,
            context: retryOptions.context || null,
          });
          await sleep(challengePollMs);
          throwIfStopped();
          continue;
        }
        if (!isRetryableError(error) || attempt >= attemptMax) throw error;
        const waitMs = retryBaseMs * attempt;
        progress?.({
          step: "api_retry",
          url,
          attempt,
          waitMs,
          error: String(error?.message || error),
          context: retryOptions.context || null,
        });
        await sleep(waitMs);
        attempt += 1;
      }
    }
    throw new Error(`Retry loop ended unexpectedly for ${url}`);
  }

  function throwIfStopped() {
    if (stopRequested) throw new Error("Stopped by user");
  }

  async function fetchCamHungDay(dateStr, rankType, category, options, progress) {
    const body = {
      request: {
        params: [
          {
            filter: { category_id: category.id, rank_type: rankType },
            time_descriptor: {
              start: dateStr,
              end: nextDate(dateStr),
              timezone_offset: 25200,
              scenario: 7,
              granularity: "1D",
              with_previous_period: false,
            },
          },
        ],
      },
    };

    const json = await fetchJsonWithRetry(
      "/api/v2/insights/seller/shop/rank/video/list",
      body,
      {
        attemptMax: options?.retryAttempts || 3,
        retryBaseMs: options?.retryBaseMs || 1000,
        challengePollMs: options?.challengePollMs,
        challengeMaxWaitMs: options?.challengeMaxWaitMs,
        context: { source: "camhung", date: dateStr, rankType, category: category.name },
      },
      progress
    );
    const stats = json?.data?.video_lists?.[0]?.stats || [];
    const rankTypeName = config.rankTypes[rankType] || String(rankType);
    return stats.map((v) => {
      const meta = v.video_meta || {};
      const video = meta.video || {};
      const creator = v.creator_meta || {};
      return {
        data_date: dateStr,
        ...rowMeta("camhung", options.preset, category, category.root, rankTypeName),
        rank_type: rankType,
        tab: "",
        hang: v.rank ?? "",
        video_id: idText(video.id || meta.id || ""),
        tieu_de: meta.name || "",
        creator_handle: creator.handle || "",
        creator_alias: creator.alias || "",
        creator_id: idText(creator.id || ""),
        publish_time: meta.publish_time ?? "",
        duration_sec: video.duration ?? "",
        post_url: video.post_url || "",
        // Sửa 08/10/2026: trước đây ghép từ `video.id` (mã nội bộ v14044g5...) nên link sai; chỉ dựng khi có ID công khai dạng số
        public_video_url: creator.handle && publicVideoId(meta.id, video.id, meta.item_id, video.item_id)
          ? `https://www.tiktok.com/@${creator.handle}/video/${publicVideoId(meta.id, video.id, meta.item_id, video.item_id)}`
          : "",
        meta_id: idText(meta.id || ""),
        video_meta_json: metaJson(meta),
        video_main_url: Array.isArray(video.video_infos) && video.video_infos[0]?.main_url
          ? video.video_infos[0].main_url
          : "",
        video_backup_url: Array.isArray(video.video_infos) && video.video_infos[0]?.backup_url
          ? video.video_infos[0].backup_url
          : "",
        cover_thumb_uri: meta.cover_image?.thumb_uri || "",
        media_type: video.media_type || "",
        revenue_score: v.revenue_score ?? "",
        orders_score: v.orders_score ?? "",
        views_score: v.views_score ?? "",
        gpm_score: v.gpm_score ?? "",
        ctr_score: v.ctr_score ?? "",
        co_score: v.co_score ?? "",
        finish_rate_score: v.finish_rate_score ?? "",
        interaction_rate_score: v.interaction_rate_score ?? "",
        likes_score: v.likes_score ?? "",
        comments_score: v.comments_score ?? "",
        shares_score: v.shares_score ?? "",
        new_follower_score: v.new_follower_score ?? "",
      };
    });
  }

  async function fetchTopSellingPage(tabName, dateStr, pageNo, category, options) {
    const tab = config.topSellingTabs[tabName];
    if (!tab) throw new Error(`Unknown top-selling tab: ${tabName}`);
    const { begin, end } = dayToMsRange(dateStr);
    const body = {
      time_selector: { begin_time: begin, end_time: end },
      filter: topSellingFilter(category),
      pagination: { page_no: pageNo, page_size: config.pageSizeTopSelling },
    };

    const json = await fetchJsonWithRetry(
      tab.endpoint,
      body,
      {
        attemptMax: options?.retryAttempts || 3,
        retryBaseMs: options?.retryBaseMs || 1000,
        challengePollMs: options?.challengePollMs,
        challengeMaxWaitMs: options?.challengeMaxWaitMs,
        context: { source: "topselling", tab: tabName, date: dateStr, page: pageNo, category: category.name },
      },
      options?.progress
    );
    const rows = json?.data?.rows || [];
    const topSellingRows = rows.map((item) => {
      const meta = item.product_meta || {};
      const creators = item.creator_meta_list || [];
      const productImage = meta.product_image || {};
      const shopImage = item.shop_meta?.shop_image || {};
      return {
        data_date: dateStr,
        ...rowMeta("topselling", options.preset, category, category.root, ""),
        rank_type: "",
        tab: tabName,
        hang: item.product_rank?.rank_number || "",
        rank_change: intNum(item.product_rank?.rank_change),
        unique_id: item.unique_id || "",
        product_id: idText(meta.product_id || ""),
        ten_san_pham: meta.product_name || "",
        product_image_url: firstImageUrl(productImage),
        product_image_thumb_url: firstImageUrl(productImage, "thumb_url_list"),
        product_image_urls: joinedImageUrls(productImage),
        product_image_thumb_urls: joinedImageUrls(productImage, "thumb_url_list"),
        gia_min_vnd: moneyValue(item.product_price, "min_value"),
        gia_max_vnd: moneyValue(item.product_price, "max_value"),
        gia_min_display: item.product_price?.min_value?.display || "",
        gia_max_display: item.product_price?.max_value?.display || "",
        gmv_min_usd: scaledThousand(item.transac_amt, "min_value"),
        gmv_max_usd: scaledThousand(item.transac_amt, "max_value"),
        gmv_min_display: item.transac_amt?.min_value?.display || "",
        gmv_max_display: item.transac_amt?.max_value?.display || "",
        clicks_min: scaledThousand(item.click_cnt, "min_value"),
        clicks_max: scaledThousand(item.click_cnt, "max_value"),
        clicks_min_display: item.click_cnt?.min_value?.display || "",
        clicks_max_display: item.click_cnt?.max_value?.display || "",
        ctr_min: moneyValue(item.ctr, "min_value"),
        ctr_max: moneyValue(item.ctr, "max_value"),
        ctr_min_display: item.ctr?.min_value?.display || "",
        ctr_max_display: item.ctr?.max_value?.display || "",
        diem_sp: item.product_score || "",
        luot_danh_gia: item.product_review_cnt || "",
        san_pham_tuong_tu: item.on_site_similar_cnt?.value ?? "",
        shop_name: item.shop_meta?.shop_name || "",
        shop_id: idText(item.shop_meta?.shop_id || ""),
        shop_image_url: firstImageUrl(shopImage),
        shop_image_thumb_url: firstImageUrl(shopImage, "thumb_url_list"),
        shop_image_urls: joinedImageUrls(shopImage),
        shop_image_thumb_urls: joinedImageUrls(shopImage, "thumb_url_list"),
        creator_count: creators.length,
        creator_names: creators.map((creator) => creator.creator_name || "").join(" | "),
        creator_ids: creators.map((creator) => creator.creator_id || "").join(" | "),
        creator_avatar_urls: creators
          .map((creator) => firstImageUrl(creator.creator_avatar))
          .join(" | "),
        creator_avatar_thumb_urls: creators
          .map((creator) => firstImageUrl(creator.creator_avatar, "thumb_url_list"))
          .join(" | "),
        creator_avatar_url_lists_json: JSON.stringify(
          creators.map((creator) => imageUrlList(creator.creator_avatar))
        ),
        creator_avatar_thumb_url_lists_json: JSON.stringify(
          creators.map((creator) => imageUrlList(creator.creator_avatar, "thumb_url_list"))
        ),
        is_favorite: item.is_favorite === true ? "true" : "false",
      };
    });
    const topSellingVideoRows = tabName === "video"
      ? rows.flatMap((item) => {
          const meta = item.product_meta || {};
          const creators = item.creator_meta_list || [];
          const productImage = meta.product_image || {};
          return creators
            .map((creator, index) => {
              const recap = creator.creator_recap || {};
              const contentId = recap.content_id || "";
              const createTime = recap.create_time ?? "";
              const title = recap.title || "";
              if (!contentId && !createTime && !title) return null;
              return {
                data_date: dateStr,
                ...rowMeta("topselling_video_detail", options.preset, category, category.root, ""),
                rank_type: "",
                tab: tabName,
                product_id: idText(meta.product_id || ""),
                product_image_url: firstImageUrl(productImage),
                product_image_thumb_url: firstImageUrl(productImage, "thumb_url_list"),
                product_image_urls: joinedImageUrls(productImage),
                product_image_thumb_urls: joinedImageUrls(productImage, "thumb_url_list"),
                parent_unique_id: item.unique_id || "",
                parent_product_rank: item.product_rank?.rank_number || "",
                parent_rank_change: intNum(item.product_rank?.rank_change),
                video_position: index + 1,
                content_id: idText(contentId),
                creator_id: idText(creator.creator_id || ""),
                creator_name: creator.creator_name || "",
                creator_avatar_url: firstImageUrl(creator.creator_avatar),
                creator_avatar_thumb_url: firstImageUrl(creator.creator_avatar, "thumb_url_list"),
                creator_avatar_urls: joinedImageUrls(creator.creator_avatar),
                creator_avatar_thumb_urls: joinedImageUrls(creator.creator_avatar, "thumb_url_list"),
                video_cover_url: typeof recap.video_image === "string"
                  ? recap.video_image
                  : firstImageUrl(recap.video_image),
                create_time: createTime,
                title,
                // 27/10/2026: ID video CÔNG KHAI (recap.id, dãy số) → link xem lâu dài https://www.tiktok.com/@/video/<id> (tự chuyển về kênh đúng).
                // content_id ở trên là mã nội bộ Seller, KHÔNG dựng link được. Hai cột đặt Ở CUỐI để pipeline đọc theo tên cột không bị ảnh hưởng.
                public_video_id: publicVideoId(recap.id),
                public_video_url: publicVideoId(recap.id) ? `https://www.tiktok.com/@/video/${publicVideoId(recap.id)}` : "",
              };
            })
            .filter(Boolean);
        })
      : [];
    return { topSellingRows, topSellingVideoRows };
  }

  async function fetchTopSellingDay(tabName, dateStr, category, options, progress) {
    const topSellingRows = [];
    const topSellingVideoRows = [];
    for (let page = 1; page <= config.maxTopSellingPages; page += 1) {
      throwIfStopped();
      progress?.({
        step: "top_selling_page",
        tab: tabName,
        date: dateStr,
        page,
        category: category.name,
      });
      const pageResult = await fetchTopSellingPage(tabName, dateStr, page, category, {
        ...options,
        progress,
      });
      topSellingRows.push(...pageResult.topSellingRows);
      topSellingVideoRows.push(...pageResult.topSellingVideoRows);
      if (pageResult.topSellingRows.length < config.pageSizeTopSelling) break;
      await sleep(config.delayMs);
    }
    return { topSellingRows, topSellingVideoRows };
  }

  function normalizeOptions(options) {
    const preset = options?.preset || "market";
    const endDate = options?.endDate || defaultLatestDate();
    const days = parseInt(options?.windowDays || "", 10);
    const range = options?.startDate
      ? { startDate: options.startDate, endDate }
      : rangeForDays(endDate, Number.isFinite(days) ? days : 14);
    return {
      ...options,
      preset,
      startDate: range.startDate,
      endDate: range.endDate,
      includeCamHung: preset === "l2-scan" ? false : options?.includeCamHung !== false,
      includeTopSelling: options?.includeTopSelling !== false,
      camHungRankTypes: options?.camHungRankTypes?.length ? options.camHungRankTypes : [1],
      topSellingTabs: options?.topSellingTabs?.length
        ? options.topSellingTabs
        : Object.keys(config.topSellingTabs),
      retryAttempts: Math.max(1, parseInt(options?.retryAttempts || "", 10) || 3),
      retryBaseMs: Math.max(250, parseInt(options?.retryBaseMs || "", 10) || 1000),
      challengePollMs: Math.max(2000, parseInt(options?.challengePollMs || "", 10) || config.challengePollMs || 5000),
      challengeMaxWaitMs: Math.max(10000, parseInt(options?.challengeMaxWaitMs || "", 10) || config.challengeMaxWaitMs || 600000),
    };
  }

  function camHungDownloadCategories(options) {
    const ids = Array.isArray(options?.camHungL1Ids)
      ? options.camHungL1Ids.map((value) => String(value || "").trim()).filter(Boolean)
      : [String(options?.camHungL1Id || "").trim()].filter(Boolean);
    if (!ids.length || ids.includes("-1")) return [ALL_CATEGORY];
    const seen = new Set();
    return ids
      .filter((id) => {
        if (seen.has(id)) return false;
        seen.add(id);
        return true;
      })
      .map((id) => categoryFromLevel("l1", id));
  }

  async function collectCamHungRows(options, progress) {
    stopRequested = false;
    const opts = normalizeOptions({
      ...options,
      includeCamHung: true,
      includeTopSelling: false,
      camHungRankTypes: [1],
    });
    const dates = dateRange(opts.startDate, opts.endDate);
    const categories = camHungDownloadCategories(opts);
    const camHungRows = [];
    const skipped = [];

    progress?.({ step: "download_prepare", dates: dates.length, categories: categories.length, options: opts });

    try {
      for (const dateStr of dates) {
        throwIfStopped();
        progress?.({ step: "date_start", date: dateStr });
        for (const category of categories) {
          throwIfStopped();
          progress?.({ step: "category_start", date: dateStr, category: category.name });
          progress?.({ step: "camhung_rank", date: dateStr, rankType: 1, category: category.name });
          try {
            camHungRows.push(...await fetchCamHungDay(dateStr, 1, category, opts, progress));
          } catch (error) {
            if (isChallengeError(error)) throw error;
            const item = {
              source: "camhung",
              date: dateStr,
              category: category.name,
              rankType: 1,
              error: String(error?.message || error),
            };
            skipped.push(item);
            progress?.({ step: "api_skip", ...item });
          }
          await sleep(config.delayMs);
        }
        progress?.({
          step: "date_done",
          date: dateStr,
          camHungRows: camHungRows.length,
          topSellingRows: 0,
        });
      }
    } catch (error) {
      if (String(error?.message || error).includes("Stopped by user")) {
        progress?.({ step: "stopped", camHungRows: camHungRows.length, topSellingRows: 0 });
      } else {
        throw error;
      }
    }

    return {
      rows: camHungRows,
      skipped,
      summary: {
        preset: "camhung-download",
        startDate: opts.startDate,
        endDate: opts.endDate,
        dates: dates.length,
        categories: categories.length,
        camHungRows: camHungRows.length,
        skippedCount: skipped.length,
        l1Ids: Array.isArray(opts.camHungL1Ids) ? opts.camHungL1Ids : [opts.camHungL1Id || "-1"],
      },
    };
  }

  // Cảm hứng chỉ có mã nội bộ (v14044g5…); top-selling có cả mã nội bộ (content_id) lẫn mã công khai cho cùng video → nối bằng mã nội bộ.
  // Chỉ điền khi khớp CHÍNH XÁC mã nội bộ; video không nằm trong top-selling thì để trống (không đoán).
  function linkPublicIds(camHungRows, topSellingVideoRows) {
    const byContent = new Map();
    for (const r of topSellingVideoRows) {
      const id = rawId(r.content_id);
      if (id && r.public_video_id) byContent.set(id, r.public_video_id);
    }
    for (const r of camHungRows) {
      if (r.public_video_url) continue;
      const pub = byContent.get(rawId(r.video_id)) || byContent.get(rawId(r.meta_id));
      if (pub) {
        r.public_video_id = pub;
        r.public_video_url = `https://www.tiktok.com/@/video/${pub}`;
      }
    }
  }

  async function runBackfill(options, progress) {
    stopRequested = false;
    const opts = normalizeOptions(options || {});
    const dates = dateRange(opts.startDate, opts.endDate);
    const categories = categoryTargetsFromOptions(opts);
    const camHungRows = [];
    const topSellingRows = [];
    const topSellingVideoRows = [];
    let partial = false;
    const skipped = [];

    progress?.({ step: "start", dates: dates.length, categories: categories.length, options: opts });

    try {
      for (const dateStr of dates) {
        throwIfStopped();
        progress?.({ step: "date_start", date: dateStr });
        for (const category of categories) {
          throwIfStopped();
          progress?.({ step: "category_start", date: dateStr, category: category.name });

          if (opts.includeCamHung) {
            for (const rankType of opts.camHungRankTypes) {
              throwIfStopped();
              progress?.({ step: "camhung_rank", date: dateStr, rankType, category: category.name });
              try {
                camHungRows.push(...await fetchCamHungDay(dateStr, rankType, category, opts, progress));
              } catch (error) {
                if (isChallengeError(error)) throw error;
                const item = {
                  source: "camhung",
                  date: dateStr,
                  category: category.name,
                  rankType,
                  error: String(error?.message || error),
                };
                skipped.push(item);
                progress?.({ step: "api_skip", ...item });
              }
              await sleep(config.delayMs);
            }
          }

          if (opts.includeTopSelling) {
            for (const tabName of opts.topSellingTabs) {
              throwIfStopped();
              try {
                const tabResult = await fetchTopSellingDay(tabName, dateStr, category, opts, progress);
                topSellingRows.push(...tabResult.topSellingRows);
                topSellingVideoRows.push(...tabResult.topSellingVideoRows);
              } catch (error) {
                if (isChallengeError(error)) throw error;
                const item = {
                  source: "topselling",
                  tab: tabName,
                  date: dateStr,
                  category: category.name,
                  error: String(error?.message || error),
                };
                skipped.push(item);
                progress?.({ step: "api_skip", ...item });
              }
              await sleep(config.delayMs);
            }
          }
        }

        progress?.({
          step: "date_done",
          date: dateStr,
          camHungRows: camHungRows.length,
          topSellingRows: topSellingRows.length,
        });
      }
    } catch (error) {
      if (String(error?.message || error).includes("Stopped by user")) {
        partial = true;
        progress?.({ step: "stopped", camHungRows: camHungRows.length, topSellingRows: topSellingRows.length });
      } else {
        throw error;
      }
    }

    linkPublicIds(camHungRows, topSellingVideoRows);

    return {
      camHungRows,
      topSellingRows,
      topSellingVideoRows,
      skipped,
      summary: {
        preset: opts.preset,
        startDate: opts.startDate,
        endDate: opts.endDate,
        dates: dates.length,
        categories: categories.length,
        camHungRows: camHungRows.length,
        topSellingRows: topSellingRows.length,
        topSellingVideoRows: topSellingVideoRows.length,
        skippedCount: skipped.length,
        partial,
        tabSlug: tabSlug(opts.topSellingTabs),
        scopeSlug: opts.preset === "market"
          ? "all"
          : opts.preset === "l1-scan"
            ? (opts.includeAllInL1Scan ? "all-plus-l1" : "l1-only")
            : opts.preset === "l2-scan"
              ? "all-l2"
            : opts.preset === "multi-deep-scan"
              ? `multi-${opts.multiScanMode || "combined"}`
              : "deep",
        deepRoot: opts.rootLevel && opts.rootId ? categoryFromLevel(opts.rootLevel, opts.rootId) : null,
        deepTargetMode: opts.targetMode || "",
        multiScanMode: opts.multiScanMode || "",
      },
    };
  }

  function toCsv(rows, columns) {
    return [
      columns.join(","),
      ...rows.map((row) => columns.map((column) => csvEscape(row[column])).join(",")),
    ].join("\n");
  }

  function stop() {
    stopRequested = true;
  }

  function categoryOptions(level) {
    if (level === "l1") return config.lv1Categories;
    if (level === "l2") return config.categoryTree.l2 || [];
    if (level === "l3") return config.categoryTree.l3 || [];
    return [];
  }

  function filename(kind, summary) {
    const source = kind === "camhung"
      ? "camhung"
      : kind === "topSellingVideo"
        ? "topselling-video-detail"
        : "topselling";
    const range = summary.startDate === summary.endDate
      ? summary.startDate
      : `${summary.startDate}_to_${summary.endDate}`;
    const partial = summary.partial ? "__partial" : "";
    if (summary.preset === "market") {
      const detail = kind === "camhung" ? "revenue" : kind === "topSellingVideo" ? "video-snapshots" : summary.tabSlug;
      return `seller_vn__${source}__market__all__${detail}__${range}${partial}.csv`;
    }
    if (summary.preset === "l1-scan") {
      const detail = kind === "camhung" ? "revenue" : kind === "topSellingVideo" ? "video-snapshots" : summary.tabSlug;
      return `seller_vn__${source}__l1-scan__${summary.scopeSlug || "l1-only"}__${detail}__${range}${partial}.csv`;
    }
    if (summary.preset === "l2-scan") {
      const detail = kind === "camhung" ? "revenue" : kind === "topSellingVideo" ? "video-snapshots" : summary.tabSlug;
      return `seller_vn__${source}__l2-scan__${summary.scopeSlug || "all-l2"}__${detail}__${range}${partial}.csv`;
    }
    if (summary.preset === "multi-deep-scan") {
      const mode = slugify(summary.multiScanMode || "combined");
      const detail = kind === "camhung" ? "revenue" : kind === "topSellingVideo" ? "video-snapshots" : summary.tabSlug;
      return `seller_vn__${source}__deep-scan__multi-${mode}__${summary.categories || 0}-scopes__${detail}__${range}${partial}.csv`;
    }
    const root = summary.deepRoot;
    const rootSlug = root ? `root-${root.level}-${rawId(root.id)}` : "root-unknown";
    const targetSlug = summary.deepTargetMode ? summary.deepTargetMode.replace(/_/g, "-") : "target-self";
    const nameSlug = root?.slug || slugify(root?.name);
    const detail = kind === "camhung" ? "revenue" : kind === "topSellingVideo" ? "video-snapshots" : summary.tabSlug;
    return `seller_vn__${source}__deep-scan__${rootSlug}__target-${targetSlug}__${nameSlug}__${detail}__${range}${partial}.csv`;
  }

  const baseColumns = [
    "data_date", "source", "preset", "category_scope", "root_level", "root_id", "root_name",
    "target_level", "target_id", "target_name", "l1_id", "l1_name", "l2_id", "l2_name",
    "l3_id", "l3_name", "tab", "rank_type", "rank_type_name",
  ];

  const camHungColumns = [
    ...baseColumns,
    "hang", "video_id", "tieu_de", "creator_handle", "creator_alias", "creator_id",
    "publish_time", "duration_sec", "post_url", "video_main_url",
    "video_backup_url", "cover_thumb_uri", "media_type", "revenue_score",
    "orders_score", "views_score", "gpm_score", "ctr_score", "co_score",
    "finish_rate_score", "interaction_rate_score", "likes_score", "comments_score",
    "shares_score", "new_follower_score", "meta_id", "video_meta_json",
    // Cột MỚI luôn ở CUỐI: link xem công khai (giống extension của hub)
    "public_video_id", "public_video_url",
  ];

  const topSellingColumns = [
    ...baseColumns,
    "hang", "rank_change", "unique_id", "product_id", "ten_san_pham",
    "gia_min_vnd", "gia_max_vnd", "gia_min_display", "gia_max_display",
    "gmv_min_usd", "gmv_max_usd", "gmv_min_display", "gmv_max_display",
    "clicks_min", "clicks_max", "clicks_min_display", "clicks_max_display",
    "ctr_min", "ctr_max", "ctr_min_display", "ctr_max_display", "diem_sp",
    "luot_danh_gia", "san_pham_tuong_tu", "shop_name", "shop_id",
    "creator_count", "creator_names", "creator_ids", "is_favorite",
    "product_image_url", "product_image_thumb_url", "product_image_urls",
    "product_image_thumb_urls", "shop_image_url", "shop_image_thumb_url",
    "shop_image_urls", "shop_image_thumb_urls", "creator_avatar_urls",
    "creator_avatar_thumb_urls", "creator_avatar_url_lists_json",
    "creator_avatar_thumb_url_lists_json", "selection_mode", "selection_count", "selection_ids",
  ];

  const topSellingVideoColumns = [
    ...baseColumns,
    "product_id", "parent_unique_id", "parent_product_rank", "parent_rank_change",
    "video_position", "content_id", "creator_id", "creator_name", "create_time", "title",
    "product_image_url", "product_image_thumb_url", "product_image_urls",
    "product_image_thumb_urls", "creator_avatar_url",
    "creator_avatar_thumb_url", "creator_avatar_urls", "creator_avatar_thumb_urls",
    "video_cover_url", "selection_mode", "selection_count", "selection_ids",
    "public_video_id", "public_video_url",
  ];

  window.SellerScraperCore = {
    config,
    defaultLatestDate,
    addDays,
    rangeForDays,
    runBackfill,
    collectCamHungRows,
    stop,
    toCsv,
    filename,
    categoryOptions,
    planCategoryTargets: categoryTargetsFromOptions,
    isChallengeError,
    slugify,
    columns: {
      camHung: camHungColumns,
      topSelling: topSellingColumns,
      topSellingVideo: topSellingVideoColumns,
    },
  };
})();
