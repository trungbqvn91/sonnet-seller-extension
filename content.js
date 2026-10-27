(function () {
  const CONTENT_VERSION = "0.4.0";
  if (window.__SELLER_SCRAPER_CONTENT_VERSION__ === CONTENT_VERSION) return;
  window.__SELLER_SCRAPER_CONTENT_VERSION__ = CONTENT_VERSION;

  let lastResult = null;
  let lastCatalogResult = null;
  let running = false;
  document.getElementById("seller-scraper-autorun-status")?.remove();

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  function isVisible(el) {
    if (!el) return false;
    const style = getComputedStyle(el);
    const rect = el.getBoundingClientRect();
    return style.visibility !== "hidden" && style.display !== "none" && rect.width > 0 && rect.height > 0;
  }

  function normalizeText(text) {
    return String(text || "").replace(/\s+/g, " ").trim();
  }

  function selectorVisible(selectors) {
    for (const selector of selectors) {
      const candidates = Array.from(document.querySelectorAll(selector)).filter(isVisible);
      if (candidates.length) return candidates[0];
    }
    return null;
  }

  function findCategoryTrigger() {
    const direct = selectorVisible([
      ".rank-arco-cascader-label",
      ".rank-arco-cascader",
      ".rank-arco-cascader-view",
      ".rank-arco-cascader-view-value",
      ".arco-cascader",
      ".arco-cascader-view",
      ".arco-cascader-view-value",
      "[class*='cascader-label']",
      "[class*='cascader']",
    ]);
    if (direct) return direct;

    const textNodes = [...document.querySelectorAll("div, span, input")]
      .filter((el) => isVisible(el) && normalizeText(el.textContent || el.value || "") === "Tất cả");
    return textNodes[0] || null;
  }

  function openCategoryPanel() {
    const existing = categoryPanelRoot();
    if (existing) return existing;
    const trigger = findCategoryTrigger();
    if (!trigger) throw new Error("Could not find category dropdown trigger.");
    const targets = [
      trigger,
      trigger.closest("label, div, span"),
      trigger.parentElement,
    ].filter(Boolean);
    for (const target of targets) {
      target.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));
      target.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }));
      target.click();
      const opened = categoryPanelRoot();
      if (opened) return opened;
    }
    return null;
  }

  function categoryPanelRoot() {
    const candidates = [
      ...document.querySelectorAll(
        ".rank-arco-cascader-panel, .rank-arco-cascader-popup, .arco-cascader-panel, .arco-cascader-popup, [class*='cascader-panel'], [class*='cascader-popup']"
      ),
    ].filter(isVisible);
    if (!candidates.length) return null;
    const scored = candidates
      .map((el) => ({
        el,
        score:
          el.querySelectorAll("input[type='checkbox']").length * 10 +
          el.querySelectorAll("[role='menuitemcheckbox'], [role='option']").length,
      }))
      .sort((a, b) => b.score - a.score);
    return scored[0]?.el || null;
  }

  function categoryColumns(root) {
    if (!root) return [];
    const candidates = [...root.querySelectorAll("*")]
      .filter((el) => isVisible(el) && el.querySelectorAll("input[type='checkbox']").length >= 2);
    const columns = [];
    for (const el of candidates) {
      const rect = el.getBoundingClientRect();
      const left = Math.round(rect.left);
      if (columns.some((entry) => Math.abs(entry.left - left) < 20)) continue;
      columns.push({ el, left, top: rect.top });
    }
    return columns
      .sort((a, b) => a.left - b.left || a.top - b.top)
      .slice(0, 3)
      .map((entry) => entry.el);
  }

  function columnPreview(column) {
    return extractColumnItems(column).slice(0, 6).map((item) => item.name);
  }

  function normalizeCompare(text) {
    return normalizeText(text)
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  function findNumericId(el) {
    if (!el) return "";
    const seen = new Set();
    const queue = [el];
    while (queue.length) {
      const node = queue.shift();
      if (!node || seen.has(node)) continue;
      seen.add(node);
      for (const attr of node.getAttributeNames?.() || []) {
        const value = node.getAttribute(attr);
        if (typeof value !== "string") continue;
        const match = value.match(/\b\d{5,}\b/);
        if (match) return match[0];
      }
      queue.push(...node.children);
    }
    return "";
  }

  function itemRows(column) {
    if (!column) return [];
    const rows = new Set();

    const checkboxRows = [...column.querySelectorAll("input[type='checkbox']")]
      .map((checkbox) => checkbox.closest("label, li, .rank-arco-cascader-panel-column-item, .arco-cascader-panel-column-item, div"))
      .filter((row) => row && isVisible(row));
    checkboxRows.forEach((row) => rows.add(row));

    const directCandidates = [...column.querySelectorAll(":scope > *, li, [role='option'], [class*='column-item']")]
      .filter((el) => isVisible(el) && normalizeText(el.textContent).length > 0);
    directCandidates.forEach((row) => rows.add(row));

    const scored = [...rows]
      .map((row) => {
        const text = normalizeText(row.textContent);
        const rect = row.getBoundingClientRect();
        return {
          row,
          text,
          top: rect.top,
          height: rect.height,
          checkboxCount: row.querySelectorAll("input[type='checkbox']").length,
        };
      })
      .filter((entry) => {
        if (!entry.text.length || entry.height < 18) return false;
        if (entry.checkboxCount > 1 && entry.text.length > 80) return false;
        return true;
      })
      .sort((a, b) => a.top - b.top);

    const deduped = [];
    for (const entry of scored) {
      const prev = deduped[deduped.length - 1];
      if (prev && Math.abs(prev.top - entry.top) < 4 && prev.text === entry.text) continue;
      deduped.push(entry);
    }
    return deduped.map((entry) => entry.row);
  }

  function itemText(row) {
    const cloned = row.cloneNode(true);
    cloned.querySelectorAll("input, svg, button").forEach((node) => node.remove());
    return normalizeText(cloned.textContent);
  }

  function extractColumnItems(column, fallbackLevel = "") {
    return itemRows(column)
      .map((row) => {
        const name = itemText(row);
        if (!name) return null;
        const id = findNumericId(row);
        const hasChildren = Boolean(row.querySelector("[class*='icon'], svg, [aria-hidden='true']"));
        return {
          id,
          name,
          hasChildren,
          row,
          level: fallbackLevel,
        };
      })
      .filter(Boolean);
  }

  function isRowSelected(row) {
    if (!row) return false;
    const checkbox = row.querySelector("input[type='checkbox']");
    if (checkbox?.checked) return true;
    const nodes = [row, ...row.querySelectorAll("*")];
    return nodes.some((node) => {
      const ariaChecked = node.getAttribute?.("aria-checked");
      const ariaSelected = node.getAttribute?.("aria-selected");
      const className = String(node.className || "");
      return ariaChecked === "true" ||
        ariaSelected === "true" ||
        /\b(selected|active|checked|current)\b/i.test(className);
    });
  }

  function selectedItemFromColumn(column, level = "") {
    return extractColumnItems(column, level).find((item) => isRowSelected(item.row)) || null;
  }

  function matchL1ByName(name) {
    const target = normalizeCompare(name);
    return (window.SELLER_SCRAPER_CONFIG.lv1Categories || []).find((item) => normalizeCompare(item.name) === target) || null;
  }

  function knownL1Ids() {
    return new Set((window.SELLER_SCRAPER_CONFIG.lv1Categories || []).map((item) => String(item.id)));
  }

  function finalizeCatalogResult(payload, summary) {
    lastCatalogResult = {
      l1: payload.l1 || [],
      l2: payload.l2 || [],
      l3: payload.l3 || [],
      summary,
    };
    return summary;
  }

  function resolveL1IdForL2(l2Id, fallbackName = "") {
    const sources = [
      lastCatalogResult?.l2 || [],
      window.SELLER_SCRAPER_CONFIG.categoryTree?.l2 || [],
    ];
    for (const rows of sources) {
      const hit = rows.find((row) => String(row.id) === String(l2Id) && row.l1_id);
      if (hit) return hit.l1_id;
    }
    const matched = matchL1ByName(fallbackName);
    return matched?.id || "";
  }

  function resolveL1NameById(l1Id, fallbackName = "") {
    const hit = (window.SELLER_SCRAPER_CONFIG.lv1Categories || []).find((item) => String(item.id) === String(l1Id));
    return hit?.name || fallbackName;
  }

  function inferActiveL1(columns) {
    const ids = knownL1Ids();
    for (const item of extractColumnItems(columns[0] || null, "l1")) {
      if (isRowSelected(item.row) && ids.has(String(item.id))) return item;
    }
    for (const name of columnPreview(columns[0] || null)) {
      const match = matchL1ByName(name);
      if (match) return { id: match.id, name: match.name };
    }
    return null;
  }

  async function ensurePanelOpen() {
    openCategoryPanel();
    for (let i = 0; i < 20; i += 1) {
      const root = categoryPanelRoot();
      if (root) return root;
      await sleep(250);
      if (i === 7 || i === 14) openCategoryPanel();
    }
    throw new Error("Category panel did not open.");
  }

  async function clearCategorySelection() {
    await ensurePanelOpen();
    for (let i = 0; i < 40; i += 1) {
      const removeButtons = [
        ...document.querySelectorAll(".rank-arco-tag-close-btn, .arco-tag-close-btn, [class*='tag-close'], [class*='tag-close-btn']"),
      ].filter(isVisible);
      if (!removeButtons.length) return;
      removeButtons[0].click();
      await sleep(120);
    }
  }

  async function findItemInScrollableColumn(column, matcher) {
    if (!column) return null;
    column.scrollTop = 0;
    let lastTop = -1;
    for (let i = 0; i < 40; i += 1) {
      const items = extractColumnItems(column);
      const found = items.find(matcher);
      if (found) return found;
      if (column.scrollTop === lastTop) break;
      lastTop = column.scrollTop;
      column.scrollTop += Math.max(120, Math.floor(column.clientHeight * 0.85));
      await sleep(160);
    }
    return null;
  }

  async function collectScrollableItems(column) {
    if (!column) return [];
    const found = new Map();
    column.scrollTop = 0;
    let sameCount = 0;
    let lastSize = 0;
    for (let i = 0; i < 60; i += 1) {
      for (const item of extractColumnItems(column)) {
        const key = `${item.id || ""}::${item.name}`;
        if (!found.has(key)) {
          found.set(key, { id: item.id, name: item.name, hasChildren: item.hasChildren });
        }
      }
      if (found.size === lastSize) sameCount += 1;
      else sameCount = 0;
      lastSize = found.size;
      const atBottom = column.scrollTop + column.clientHeight >= column.scrollHeight - 4;
      if (atBottom && sameCount >= 2) break;
      column.scrollTop = Math.min(column.scrollTop + Math.max(120, Math.floor(column.clientHeight * 0.85)), column.scrollHeight);
      await sleep(180);
    }
    return [...found.values()];
  }

  async function collectScrollableRows(column) {
    if (!column) return [];
    const found = new Map();
    column.scrollTop = 0;
    let sameCount = 0;
    let lastSize = 0;
    for (let i = 0; i < 60; i += 1) {
      for (const item of extractColumnItems(column, "l1")) {
        const key = `${item.id || ""}::${item.name}`;
        if (!found.has(key)) {
          found.set(key, item);
        }
      }
      if (found.size === lastSize) sameCount += 1;
      else sameCount = 0;
      lastSize = found.size;
      const atBottom = column.scrollTop + column.clientHeight >= column.scrollHeight - 4;
      if (atBottom && sameCount >= 2) break;
      column.scrollTop = Math.min(column.scrollTop + Math.max(120, Math.floor(column.clientHeight * 0.85)), column.scrollHeight);
      await sleep(180);
    }
    return [...found.values()];
  }

  async function scanAllL2Catalog(progress) {
    if (!location.href.includes("/compass/video-analytics/video-top-selling")) {
      throw new Error("Open the TikTok TopSelling page before running Scan All L2.");
    }
    const lv1Categories = window.SELLER_SCRAPER_CONFIG.lv1Categories || [];
    const results = [];
    progress?.({ step: "catalog_start", total: lv1Categories.length });
    for (const l1 of lv1Categories) {
      await clearCategorySelection();
      const root = await ensurePanelOpen();
      const initialColumns = categoryColumns(root);
      const [l1Column] = initialColumns;
      if (!l1Column) throw new Error("Could not find L1 column in category panel.");
      const allL1Rows = await collectScrollableRows(l1Column);
      progress?.({
        step: "catalog_debug",
        l1Name: l1.name,
        seen: allL1Rows.slice(0, 8).map((entry) => entry.name),
        totalSeen: allL1Rows.length,
      });
      const item = allL1Rows.find((entry, index) =>
        entry.id === l1.id ||
        normalizeText(entry.name) === normalizeText(l1.name) ||
        (index < lv1Categories.length && lv1Categories[index]?.id === l1.id)
      );
      if (!item?.row) throw new Error(`Could not find L1 item: ${l1.name}`);
      l1Column.scrollTop = Math.max(0, item.row.offsetTop - Math.floor(l1Column.clientHeight * 0.35));
      await sleep(120);
      const clickTargets = [item.row, item.row.querySelector("span, div, label"), item.row.parentElement].filter(Boolean);
      for (const target of clickTargets) {
        target.dispatchEvent(new MouseEvent("mouseenter", { bubbles: true }));
        target.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));
        target.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }));
        target.click();
        await sleep(120);
      }
      progress?.({ step: "catalog_l1_start", l1Id: l1.id, l1Name: l1.name });
      await sleep(350);
      const updatedRoot = categoryPanelRoot() || root;
      const updatedColumns = categoryColumns(updatedRoot);
      progress?.({
        step: "catalog_columns",
        l1Name: l1.name,
        count: updatedColumns.length,
        previews: updatedColumns.map((column) => columnPreview(column)),
      });
      const [, l2Column] = updatedColumns;
      if (!l2Column) {
        progress?.({ step: "catalog_l1_done", l1Id: l1.id, l1Name: l1.name, l2Count: 0 });
        continue;
      }
      const l2Items = await collectScrollableItems(l2Column);
      if (!l2Items.length) {
        progress?.({
          step: "catalog_l2_debug",
          l1Name: l1.name,
          seen: extractColumnItems(l2Column).slice(0, 8).map((entry) => entry.name),
        });
      }
      for (const l2 of l2Items) {
        if (!l2.name) continue;
        results.push({
          id: l2.id || "",
          name: l2.name,
          l1_id: l1.id,
          slug: "",
        });
      }
      progress?.({ step: "catalog_l1_done", l1Id: l1.id, l1Name: l1.name, l2Count: l2Items.length });
      await sleep(120);
    }

    const deduped = [];
    const seen = new Set();
    for (const row of results) {
      const key = `${row.id}::${row.name}::${row.l1_id}`;
      if (seen.has(key)) continue;
      seen.add(key);
      deduped.push(row);
    }

    const summary = {
      scannedL1: lv1Categories.length,
      l2Count: deduped.length,
      missingIds: deduped.filter((row) => !row.id).length,
      capturedAt: new Date().toISOString(),
    };
    finalizeCatalogResult({
      l1: lv1Categories.map((item) => ({ id: item.id, name: item.name })),
      l2: deduped,
      l3: [],
    }, summary);
    progress?.({ step: "catalog_done", summary });
    return summary;
  }

  async function scanCurrentL1(progress) {
    if (!location.href.includes("/compass/video-analytics/video-top-selling")) {
      throw new Error("Open the TikTok TopSelling page before running Scan Current L1.");
    }
    const root = await ensurePanelOpen();
    const columns = categoryColumns(root);
    if (columns.length < 2) throw new Error("Open one L1 in the category dropdown before scanning Current L1.");
    const l1Item = inferActiveL1(columns);
    if (!l1Item) throw new Error("No active L1 found. Click one L1 manually first.");
    const l1Matched = matchL1ByName(l1Item.name);
    const l1Id = l1Matched?.id || l1Item.id;
    if (!l1Id) throw new Error(`Could not resolve L1 id for ${l1Item.name}.`);
    progress?.({ step: "catalog_current_l1", l1Name: l1Item.name, l1Id, previews: columns.map((column) => columnPreview(column)) });
    const l2Items = await collectScrollableItems(columns[1]);
    const l2 = l2Items
      .filter((item) => item.name)
      .map((item) => ({ id: item.id || "", name: item.name, l1_id: l1Id, slug: "" }));
    const summary = {
      mode: "current-l1",
      l1Id,
      l1Name: l1Matched?.name || l1Item.name,
      l2Count: l2.length,
      missingIds: l2.filter((row) => !row.id).length,
      capturedAt: new Date().toISOString(),
    };
    finalizeCatalogResult({
      l1: [{ id: l1Id, name: l1Matched?.name || l1Item.name }],
      l2,
      l3: [],
    }, summary);
    progress?.({ step: "catalog_done", summary });
    return summary;
  }

  async function scanCurrentL2(progress, options = {}) {
    if (!location.href.includes("/compass/video-analytics/video-top-selling")) {
      throw new Error("Open the TikTok TopSelling page before running Scan Current L2.");
    }
    const root = await ensurePanelOpen();
    const columns = categoryColumns(root);
    if (columns.length < 3) throw new Error("Open one L2 with its L3 column visible before scanning Current L2.");
    const l2Item = selectedItemFromColumn(columns[1], "l2");
    const expectedL2Id = String(options.expectedL2Id || "").trim();
    const expectedL2Name = String(options.expectedL2Name || "").trim();
    const resolvedL2Id = expectedL2Id || l2Item?.id || "";
    const resolvedL2Name = expectedL2Name || l2Item?.name || "";
    if (!resolvedL2Id || !resolvedL2Name) {
      throw new Error("No selected L2 found. Click one L2 manually first, or pass an explicit L2 from the side panel.");
    }
    const activeL1 = inferActiveL1(columns);
    const l1LabelGuess = activeL1?.name || columnPreview(columns[0]).find((name) => matchL1ByName(name)) || "";
    const l1Id = resolveL1IdForL2(resolvedL2Id, l1LabelGuess);
    const l1Name = resolveL1NameById(l1Id, l1LabelGuess);
    if (!l1Id) throw new Error(`Could not resolve L1 id for L2 ${resolvedL2Name}. Run Scan Current L1 first or save L2 tree.`);
    progress?.({
      step: "catalog_current_l2",
      l1Name,
      l1Id,
      l2Name: resolvedL2Name,
      l2Id: resolvedL2Id,
      previews: columns.map((column) => columnPreview(column)),
    });
    const l3Items = await collectScrollableItems(columns[2]);
    const l3 = l3Items
      .filter((item) => item.name)
      .map((item) => ({ id: item.id || "", name: item.name, l1_id: l1Id, l2_id: resolvedL2Id, slug: "" }));
    const summary = {
      mode: "current-l2",
      l1Id,
      l1Name,
      l2Id: resolvedL2Id,
      l2Name: resolvedL2Name,
      l3Count: l3.length,
      missingIds: l3.filter((row) => !row.id).length,
      capturedAt: new Date().toISOString(),
    };
    finalizeCatalogResult({
      l1: [{ id: l1Id, name: l1Name }],
      l2: [{ id: resolvedL2Id, name: resolvedL2Name, l1_id: l1Id, slug: "" }],
      l3,
    }, summary);
    progress?.({ step: "catalog_done", summary });
    return summary;
  }

  async function downloadCatalogJson() {
    if (!lastCatalogResult) throw new Error("No scanned L2 catalog in this tab yet.");
    const payload = JSON.stringify(lastCatalogResult, null, 2);
    const mode = lastCatalogResult.summary?.mode || "l2-scan";
    const scope = lastCatalogResult.summary?.l2Name
      ? `${mode}__${window.SellerScraperCore.slugify(lastCatalogResult.summary.l2Name)}`
      : lastCatalogResult.summary?.l1Name
        ? `${mode}__${window.SellerScraperCore.slugify(lastCatalogResult.summary.l1Name)}`
        : mode;
    const filename = `seller_vn__category-tree__${scope}__${new Date().toISOString().slice(0, 10)}.json`;
    const blob = new Blob([payload], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.style.display = "none";
    document.documentElement.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    return { filename, rows: lastCatalogResult.l2.length };
  }

  function mergeTreeRows(baseRows, extraRows, keyFields) {
    const out = [];
    const seen = new Set();
    for (const row of [...(baseRows || []), ...(extraRows || [])]) {
      if (!row || typeof row !== "object") continue;
      const normalized = {
        ...row,
        id: String(row.id || "").trim(),
        name: String(row.name || "").trim(),
        l1_id: String(row.l1_id || "").trim(),
        l2_id: String(row.l2_id || "").trim(),
        slug: typeof row.slug === "string" ? row.slug : "",
      };
      const key = keyFields.map((field) => normalized[field] || "").join("::");
      if (!key || seen.has(key)) continue;
      seen.add(key);
      out.push(normalized);
    }
    return out;
  }

  async function applyStoredCategoryTree() {
    try {
      const stored = await chrome.storage.local.get(["sellerScraperCategoryTree"]);
      const categoryTree = stored?.sellerScraperCategoryTree;
      const bundledTree = window.SELLER_SCRAPER_CONFIG.categoryTree || { l2: [], l3: [] };
      if (categoryTree && typeof categoryTree === "object") {
        window.SELLER_SCRAPER_CONFIG.categoryTree = {
          l2: mergeTreeRows(
            Array.isArray(bundledTree.l2) ? bundledTree.l2 : [],
            Array.isArray(categoryTree.l2) ? categoryTree.l2 : [],
            ["id", "l1_id"]
          ),
          l3: mergeTreeRows(
            Array.isArray(bundledTree.l3) ? bundledTree.l3 : [],
            Array.isArray(categoryTree.l3) ? categoryTree.l3 : [],
            ["id", "l1_id", "l2_id"]
          ),
        };
      } else {
        window.SELLER_SCRAPER_CONFIG.categoryTree = {
          l2: Array.isArray(bundledTree.l2) ? bundledTree.l2 : [],
          l3: Array.isArray(bundledTree.l3) ? bundledTree.l3 : [],
        };
      }
    } catch (_error) {
      // Ignore storage errors and keep bundled config.
    }
  }

  function progress(message) {
    chrome.runtime.sendMessage({ type: "SELLER_SCRAPER_PROGRESS", message }).catch(() => {});
  }

  async function run(options) {
    if (running) throw new Error("A scraper job is already running in this tab.");
    running = true;
    lastResult = null;
    progress({ step: "job_reset" });
    try {
      await applyStoredCategoryTree();
      const result = await window.SellerScraperCore.runBackfill(options, progress);
      lastResult = result;
      progress({ step: "done", summary: result.summary });
      return result.summary;
    } finally {
      running = false;
    }
  }

  function rowsForKind(kind) {
    if (kind === "camhung") return lastResult.camHungRows;
    if (kind === "topSellingVideo") return lastResult.topSellingVideoRows || [];
    return lastResult.topSellingRows;
  }

  function localDateFromUnix(seconds, timezoneOffsetSeconds = 25200) {
    const raw = parseInt(String(seconds || ""), 10);
    if (!Number.isFinite(raw) || raw <= 0) return "";
    return new Date((raw + timezoneOffsetSeconds) * 1000).toISOString().slice(0, 10);
  }

  function sanitizeFilePart(value, fallback = "unknown") {
    const text = String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z0-9._-]+/g, "_")
      .replace(/^_+|_+$/g, "");
    return text || fallback;
  }

  function normalizeVideoId(value) {
    return String(value || "").replace(/^'/, "").trim();
  }

  function camHungDownloadFilename(row) {
    const creator = sanitizeFilePart(row.creator_handle || row.creator_alias || row.creator_id || "creator");
    const publishDate = sanitizeFilePart(localDateFromUnix(row.publish_time) || "unknown-date", "unknown-date");
    const videoId = sanitizeFilePart(normalizeVideoId(row.video_id), "unknown-video");
    return `${creator}_${publishDate}_${videoId}.mp4`;
  }

  function camHungAssetStem(row) {
    return camHungDownloadFilename(row).replace(/\.mp4$/i, "");
  }

  function camHungMediaScopeSlug(l1Ids) {
    const ids = Array.isArray(l1Ids) ? l1Ids.map((value) => String(value || "").trim()).filter(Boolean) : [String(l1Ids || "").trim()].filter(Boolean);
    if (!ids.length || ids.includes("-1")) return "market-all";
    if (ids.length === 1) {
      const category = (window.SELLER_SCRAPER_CONFIG.lv1Categories || []).find((item) => String(item.id) === ids[0]);
      return category?.slug || window.SellerScraperCore.slugify(category?.name || `l1-${ids[0]}`);
    }
    return `multi-l1-${ids.length}`;
  }

  function camHungMediaManifestFilename(options) {
    const range = options.startDate === options.endDate
      ? options.startDate
      : `${options.startDate}_to_${options.endDate}`;
    const scopeSlug = camHungMediaScopeSlug(options.camHungL1Ids || options.camHungL1Id || "-1");
    const modeSlug = String(options.outputMode || "video").replace(/[^a-z0-9_]+/gi, "-").toLowerCase();
    return `seller_vn__camhung-media-manifest__${scopeSlug}__${modeSlug}__${range}.csv`;
  }

  function camHungMediaManifestColumns() {
    return [
      "source",
      "scope_type",
      "output_mode",
      "data_date",
      "publish_date",
      "rank",
      "rank_type_name",
      "l1_id",
      "l1_name",
      "video_id",
      "creator_handle",
      "creator_alias",
      "creator_id",
      "duration_sec",
      "revenue_score",
      "orders_score",
      "views_score",
      "media_type",
      "asset_stem",
      "video_file",
      "temp_media_file",
      "transcript_file",
      "transcript_json_file",
      "hook_frame_1_file",
      "hook_frame_2_file",
      "hook_frame_3_file",
      "download_status",
      "download_source",
      "video_main_url_present",
      "video_backup_url_present",
      // Thêm 08/10/2026 (script-factory khớp video với TikTok): giờ đăng CHÍNH XÁC (Unix giây), mô tả, link/ID công khai, video_meta thô
      "publish_time",
      "tieu_de",
      "meta_id",
      "post_url",
      "public_video_url",
      "video_meta_json",
    ];
  }

  async function triggerBlobDownload(filename, text, mimeType) {
    const blob = new Blob([text], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.style.display = "none";
    document.documentElement.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    return filename;
  }

  function buildCamHungManifestRows(rows, options, downloadSummary) {
    const outputMode = String(options.outputMode || "video").trim();
    const relativeDir = outputMode === "video"
      ? ""
      : outputMode === "transcript_frames"
        ? "_temp_media/transcript_hook_frames"
        : "_temp_media/transcript_only";
    const statusMap = new Map((downloadSummary?.files || []).map((item) => [String(item.filename || ""), String(item.status || "")]));
    return rows.map((row) => {
      const assetStem = camHungAssetStem(row);
      const videoFilename = `${assetStem}.mp4`;
      const tempMediaFile = relativeDir ? `${relativeDir}/${videoFilename}` : videoFilename;
      const transcriptFile = outputMode === "video" ? "" : `${assetStem}.txt`;
      const transcriptJsonFile = outputMode === "video" ? "" : `${assetStem}.json`;
      const hook1 = outputMode === "transcript_frames" ? `${assetStem}__hook_01.jpg` : "";
      const hook2 = outputMode === "transcript_frames" ? `${assetStem}__hook_02.jpg` : "";
      const hook3 = outputMode === "transcript_frames" ? `${assetStem}__hook_03.jpg` : "";
      return {
        source: "camhung_media",
        scope_type: row.l1_name ? "l1" : "market",
        output_mode: outputMode,
        data_date: row.data_date || "",
        publish_date: localDateFromUnix(row.publish_time),
        rank: row.hang || "",
        rank_type_name: row.rank_type_name || "",
        l1_id: normalizeVideoId(row.l1_id),
        l1_name: row.l1_name || "Tat ca",
        video_id: normalizeVideoId(row.video_id),
        creator_handle: row.creator_handle || "",
        creator_alias: row.creator_alias || "",
        creator_id: normalizeVideoId(row.creator_id),
        duration_sec: row.duration_sec || "",
        revenue_score: row.revenue_score || "",
        orders_score: row.orders_score || "",
        views_score: row.views_score || "",
        media_type: row.media_type || "",
        asset_stem: assetStem,
        video_file: outputMode === "video" ? videoFilename : "",
        temp_media_file: outputMode === "video" ? "" : tempMediaFile,
        transcript_file: transcriptFile,
        transcript_json_file: transcriptJsonFile,
        hook_frame_1_file: hook1,
        hook_frame_2_file: hook2,
        hook_frame_3_file: hook3,
        download_status: statusMap.get(tempMediaFile) || statusMap.get(videoFilename) || "",
        download_source: row.video_main_url ? "video_main_url" : row.video_backup_url ? "video_backup_url" : "",
        video_main_url_present: row.video_main_url ? "true" : "false",
        video_backup_url_present: row.video_backup_url ? "true" : "false",
        publish_time: row.publish_time ?? "",
        tieu_de: row.tieu_de || "",
        meta_id: normalizeVideoId(row.meta_id),
        post_url: row.post_url || "",
        public_video_url: row.public_video_url || "",
        video_meta_json: row.video_meta_json || "",
      };
    });
  }

  async function downloadCamHungManifest(rows, options, downloadSummary) {
    const manifestRows = buildCamHungManifestRows(rows, options, downloadSummary);
    const csv = "\uFEFF" + window.SellerScraperCore.toCsv(manifestRows, camHungMediaManifestColumns());
    const filename = camHungMediaManifestFilename(options);
    await triggerBlobDownload(filename, csv, "text/csv;charset=utf-8");
    return { filename, rows: manifestRows.length };
  }

  function filterCamHungMediaRows(rows, options = {}) {
    const revenueMin = Number.isFinite(Number(options.revenueMin)) ? Number(options.revenueMin) : null;
    const ordersMin = Number.isFinite(Number(options.ordersMin)) ? Number(options.ordersMin) : null;
    const viewsMin = Number.isFinite(Number(options.viewsMin)) ? Number(options.viewsMin) : null;
    const publishAfter = String(options.publishAfter || "").trim();
    return rows.filter((row) => {
      if (!row.video_main_url && !row.video_backup_url) return false;
      if (revenueMin !== null && Number(row.revenue_score || 0) < revenueMin) return false;
      if (ordersMin !== null && Number(row.orders_score || 0) < ordersMin) return false;
      if (viewsMin !== null && Number(row.views_score || 0) < viewsMin) return false;
      if (publishAfter) {
        const publishDate = localDateFromUnix(row.publish_time);
        if (!publishDate || publishDate < publishAfter) return false;
      }
      return true;
    });
  }

  async function downloadCamHungMedia(options) {
    const fetchOptions = {
      startDate: options.startDate,
      endDate: options.endDate,
      windowDays: options.windowDays,
      camHungL1Ids: Array.isArray(options.camHungL1Ids) ? options.camHungL1Ids : [options.camHungL1Id || "-1"],
      retryAttempts: options.retryAttempts,
      retryBaseMs: options.retryBaseMs,
    };
    const collected = await window.SellerScraperCore.collectCamHungRows(fetchOptions, progress);
    const filtered = filterCamHungMediaRows(collected.rows, options);
    const uniqueTasks = [];
    const seen = new Set();
    const outputMode = String(options.outputMode || "video").trim();
    const relativeDir = outputMode === "video"
      ? ""
      : outputMode === "transcript_frames"
        ? "_temp_media/transcript_hook_frames"
        : "_temp_media/transcript_only";
    for (const row of filtered) {
      const filename = camHungDownloadFilename(row);
      if (seen.has(filename)) continue;
      seen.add(filename);
      uniqueTasks.push({
        url: row.video_main_url || row.video_backup_url,
        fallbackUrl: row.video_backup_url || "",
        filename,
        relativeDir,
        meta: {
          data_date: row.data_date,
          rank: row.hang,
          creator_handle: row.creator_handle,
          creator_alias: row.creator_alias,
          publish_date: localDateFromUnix(row.publish_time),
          video_id: normalizeVideoId(row.video_id),
          l1_name: row.l1_name || row.target_name || "Tat ca",
        },
      });
    }
    if (!uniqueTasks.length) {
      throw new Error("No matching Cam hung videos after filters.");
    }
    if (uniqueTasks.length > 50 && !options.allowLargeBatch) {
      return {
        requiresConfirmation: true,
        summary: {
          totalRows: collected.rows.length,
          filteredRows: filtered.length,
          uniqueFiles: uniqueTasks.length,
          outputMode,
        },
      };
    }
    progress({
      step: "media_download_queue",
      totalRows: collected.rows.length,
      filteredRows: filtered.length,
      uniqueFiles: uniqueTasks.length,
    });
    const response = await chrome.runtime.sendMessage({
      type: "SELLER_SCRAPER_BG_DOWNLOAD_MEDIA",
      tasks: uniqueTasks,
    });
    if (!response?.ok) throw new Error(response?.error || "Background download failed.");
    const manifestResult = await downloadCamHungManifest(filtered, options, response.summary);
    if (outputMode !== "video") {
      const helperHealth = await chrome.runtime.sendMessage({ type: "SELLER_SCRAPER_BG_HELPER_HEALTH" });
      let helperHint = "Queue xong file temp. Chay helper transcript de doi MP4 sang text/frame va xoa temp.";
      let helperAutoTriggered = false;
      if (helperHealth?.ok) {
        const helperProcess = await chrome.runtime.sendMessage({
          type: "SELLER_SCRAPER_BG_HELPER_PROCESS",
          payload: {
            downloads_dir: String(location.href).includes("seller-vn")
              ? "D:\\CODEX\\TOOL\\SP TIKTOK\\seller-scraper-handoff\\downloads"
              : "",
          },
        });
        if (helperProcess?.ok) {
          helperAutoTriggered = true;
          helperHint = "Local helper dang chay. Transcript se tu dong duoc xu ly tu _temp_media.";
        } else {
          helperHint = "Khong goi duoc local helper. Chay scripts\\start_local_helper.cmd roi thu lai.";
        }
      } else {
        helperHint = "Helper chua chay. Bam scripts\\start_local_helper.cmd mot lan, sau do transcript se tu dong xu ly.";
      }
      response.summary = {
        ...response.summary,
        helperHint,
        helperAutoTriggered,
      };
    }
    response.summary = {
      ...response.summary,
      manifestFilename: manifestResult.filename,
      manifestRows: manifestResult.rows,
    };
    progress({
      step: "media_download_done",
      summary: response.summary,
    });
    return response.summary;
  }

  function columnsForKind(kind) {
    if (kind === "camhung") return window.SellerScraperCore.columns.camHung;
    if (kind === "topSellingVideo") return window.SellerScraperCore.columns.topSellingVideo;
    return window.SellerScraperCore.columns.topSelling;
  }

  async function downloadCsv(kind) {
    if (!lastResult) throw new Error("No completed result in this tab yet.");
    const rows = rowsForKind(kind);
    const columns = columnsForKind(kind);
    if (!rows.length) throw new Error(`No ${kind} rows to export.`);

    const core = window.SellerScraperCore;
    const csv = "\uFEFF" + core.toCsv(rows, columns);
    const filename = core.filename(kind, lastResult.summary);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.style.display = "none";
    document.documentElement.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    return { rows: rows.length, filename };
  }

  async function downloadAllCsv() {
    const out = [];
    if (lastResult?.camHungRows?.length) out.push(await downloadCsv("camhung"));
    if (lastResult?.topSellingRows?.length) out.push(await downloadCsv("topSelling"));
    if (lastResult?.topSellingVideoRows?.length) out.push(await downloadCsv("topSellingVideo"));
    if (!out.length) throw new Error("No rows to export.");
    return out;
  }

  function autorunOptions() {
    const params = new URLSearchParams(location.search);
    const days = parseInt(params.get("seller_scraper_autorun") || "", 10);
    if (!Number.isFinite(days) || days < 1) return null;
    const endDate = params.get("seller_scraper_end") || window.SellerScraperCore.defaultLatestDate();
    const range = window.SellerScraperCore.rangeForDays(endDate, days);
    const tabs = params.get("seller_scraper_tabs");
    return {
      preset: params.get("seller_scraper_preset") || "market",
      startDate: params.get("seller_scraper_start") || range.startDate,
      endDate,
      includeCamHung: params.get("seller_scraper_camhung") !== "0",
      includeTopSelling: params.get("seller_scraper_topselling") !== "0",
      topSellingTabs: tabs ? tabs.split(",").map((item) => item.trim()).filter(Boolean) : undefined,
      download: params.get("seller_scraper_download") === "1",
    };
  }

  async function maybeAutorun() {
    const options = autorunOptions();
    if (!options) return;
    progress({ step: "autorun_start", options });
    try {
      const summary = await run(options);
      if (options.download) await downloadAllCsv();
      progress({ step: "autorun_done", summary });
    } catch (error) {
      progress({ step: "autorun_error", error: error.message || String(error) });
    }
  }

  chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
    if (request?.type === "SELLER_SCRAPER_PING") {
      applyStoredCategoryTree()
        .then(() => sendResponse({
          ok: true,
          url: location.href,
          title: document.title,
          running,
          hasResult: Boolean(lastResult),
          hasCatalog: Boolean(lastCatalogResult),
          defaultLatestDate: window.SellerScraperCore.defaultLatestDate(),
          categories: {
            l1: window.SellerScraperCore.categoryOptions("l1"),
            l2: window.SellerScraperCore.categoryOptions("l2"),
            l3: window.SellerScraperCore.categoryOptions("l3"),
          },
        }))
        .catch((error) => sendResponse({ ok: false, error: error.message || String(error) }));
      return true;
    }

    if (request?.type === "SELLER_SCRAPER_RUN") {
      run(request.options || {})
        .then((summary) => sendResponse({ ok: true, summary }))
        .catch((error) => sendResponse({ ok: false, error: error.message || String(error) }));
      return true;
    }

    if (request?.type === "SELLER_SCRAPER_SCAN_L2_CATALOG") {
      if (running) {
        sendResponse({ ok: false, error: "A scraper job is already running in this tab." });
        return false;
      }
      running = true;
      progress({ step: "job_reset" });
      scanAllL2Catalog(progress)
        .then((summary) => sendResponse({ ok: true, summary }))
        .catch((error) => sendResponse({ ok: false, error: error.message || String(error) }))
        .finally(() => { running = false; });
      return true;
    }

    if (request?.type === "SELLER_SCRAPER_SCAN_CURRENT_L1") {
      if (running) {
        sendResponse({ ok: false, error: "A scraper job is already running in this tab." });
        return false;
      }
      running = true;
      progress({ step: "job_reset" });
      scanCurrentL1(progress)
        .then((summary) => sendResponse({ ok: true, summary }))
        .catch((error) => sendResponse({ ok: false, error: error.message || String(error) }))
        .finally(() => { running = false; });
      return true;
    }

    if (request?.type === "SELLER_SCRAPER_SCAN_CURRENT_L2") {
      if (running) {
        sendResponse({ ok: false, error: "A scraper job is already running in this tab." });
        return false;
      }
      running = true;
      progress({ step: "job_reset" });
      scanCurrentL2(progress, request.options || {})
        .then((summary) => sendResponse({ ok: true, summary }))
        .catch((error) => sendResponse({ ok: false, error: error.message || String(error) }))
        .finally(() => { running = false; });
      return true;
    }

    if (request?.type === "SELLER_SCRAPER_GET_CATALOG") {
      sendResponse({ ok: true, catalog: lastCatalogResult });
      return false;
    }

    if (request?.type === "SELLER_SCRAPER_STOP") {
      window.SellerScraperCore.stop();
      sendResponse({ ok: true });
      return false;
    }

    if (request?.type === "SELLER_SCRAPER_DOWNLOAD_CSV") {
      const action = request.kind === "all" ? downloadAllCsv() : downloadCsv(request.kind);
      action
        .then((result) => sendResponse({ ok: true, result }))
        .catch((error) => sendResponse({ ok: false, error: error.message || String(error) }));
      return true;
    }

    if (request?.type === "SELLER_SCRAPER_DOWNLOAD_CAMHUNG_MEDIA") {
      if (running) {
        sendResponse({ ok: false, error: "A scraper job is already running in this tab." });
        return false;
      }
      running = true;
      downloadCamHungMedia(request.options || {})
        .then((result) => {
          if (result?.requiresConfirmation) {
            sendResponse({ ok: true, requiresConfirmation: true, summary: result.summary });
            return;
          }
          sendResponse({ ok: true, summary: result });
        })
        .catch((error) => sendResponse({ ok: false, error: error.message || String(error) }))
        .finally(() => { running = false; });
      return true;
    }

    if (request?.type === "SELLER_SCRAPER_DOWNLOAD_CATALOG") {
      downloadCatalogJson()
        .then((result) => sendResponse({ ok: true, result }))
        .catch((error) => sendResponse({ ok: false, error: error.message || String(error) }));
      return true;
    }

    return false;
  });

  maybeAutorun();
})();
