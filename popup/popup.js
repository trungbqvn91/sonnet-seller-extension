const statusEl = document.getElementById("status");
const logEl = document.getElementById("log");
const startDateEl = document.getElementById("startDate");
const endDateEl = document.getElementById("endDate");
const includeCamHungEl = document.getElementById("includeCamHung");
const includeTopSellingEl = document.getElementById("includeTopSelling");
const camHungL1PickerEl = document.getElementById("camHungL1Picker");
const camHungL1SummaryEl = document.getElementById("camHungL1Summary");
const camHungDownloadL1ListEl = document.getElementById("camHungDownloadL1List");
const camHungOutputModeEl = document.getElementById("camHungOutputMode");
const camHungRevenueMinEl = document.getElementById("camHungRevenueMin");
const camHungOrdersMinEl = document.getElementById("camHungOrdersMin");
const camHungViewsMinEl = document.getElementById("camHungViewsMin");
const camHungPublishAfterEl = document.getElementById("camHungPublishAfter");
const downloadCamHungMediaEl = document.getElementById("downloadCamHungMedia");
const helperStatusEl = document.getElementById("helperStatus");
const runMarketEl = document.getElementById("runMarket");
const runL1ScanEl = document.getElementById("runL1Scan");
const runL2ScanEl = document.getElementById("runL2Scan");
const runDeepScanEl = document.getElementById("runDeepScan");
const runMultiDeepScanEl = document.getElementById("runMultiDeepScan");
const deepScanModeEl = document.getElementById("deepScanMode");
const deepCategorySearchEl = document.getElementById("deepCategorySearch");
const deepL1ListEl = document.getElementById("deepL1List");
const deepL2ListEl = document.getElementById("deepL2List");
const deepL3ListEl = document.getElementById("deepL3List");
const deepSelectionSummaryEl = document.getElementById("deepSelectionSummary");
const deepSelectedChipsEl = document.getElementById("deepSelectedChips");
const deepScanEstimateEl = document.getElementById("deepScanEstimate");
const clearDeepSelectionEl = document.getElementById("clearDeepSelection");
const stopJobEl = document.getElementById("stopJob");
const queueIncludeMarketEl = document.getElementById("queueIncludeMarket");
const queueIncludeL1ScanEl = document.getElementById("queueIncludeL1Scan");
const queueL1SummaryEl = document.getElementById("queueL1Summary");
const queueL1ListEl = document.getElementById("queueL1List");
const queueDefaultL1El = document.getElementById("queueDefaultL1");
const runQueueEl = document.getElementById("runQueue");
const exportCamHungEl = document.getElementById("exportCamHung");
const exportTopSellingEl = document.getElementById("exportTopSelling");
const exportTopSellingVideoEl = document.getElementById("exportTopSellingVideo");
const exportAllEl = document.getElementById("exportAll");
const rootLevelEl = document.getElementById("rootLevel");
const rootCategoryEl = document.getElementById("rootCategory");
const targetModeEl = document.getElementById("targetMode");
const scanCurrentL1El = document.getElementById("scanCurrentL1");
const scanCurrentL2El = document.getElementById("scanCurrentL2");
const scanAllL2El = document.getElementById("scanAllL2");
const exportL2CatalogEl = document.getElementById("exportL2Catalog");
const useScannedL2El = document.getElementById("useScannedL2");
const categoryTreeInputEl = document.getElementById("categoryTreeInput");
const saveCategoryTreeEl = document.getElementById("saveCategoryTree");
const clearCategoryTreeEl = document.getElementById("clearCategoryTree");
const treeSummaryEl = document.getElementById("treeSummary");

let activeTabId = null;
let selectedWindowDays = 14;
let categories = {
  l1: window.SellerScraperCore?.categoryOptions("l1") || [],
  l2: window.SellerScraperCore?.categoryOptions("l2") || [],
  l3: window.SellerScraperCore?.categoryOptions("l3") || [],
};
let selectedCamHungL1Ids = new Set(["-1"]);
let selectedQueueL1Ids = new Set();
let selectedDeepCategories = new Map();
let activeDeepL1Id = "";
let activeDeepL2Id = "";
let isQueueRunning = false;
let queueStopRequested = false;
let isScrapeRunning = false;

const QUEUE_SETTINGS_KEY = "sellerScraperRunQueue";
const DEEP_SETTINGS_KEY = "sellerScraperDeepSelection";
const DEFAULT_QUEUE_L1_IDS = ["601152", "802184", "600001", "824328", "602284", "601450"];

function optionalNumber(value) {
  const text = String(value ?? "").trim();
  if (!text) return null;
  const num = Number(text);
  return Number.isFinite(num) ? num : null;
}

function deepScanTargetLevel() {
  const rootLevel = rootLevelEl.value;
  const targetMode = targetModeEl.value;
  if (rootLevel === "l1") {
    if (targetMode === "self") return "l1";
    if (targetMode === "direct_children" || targetMode === "all_l2") return "l2";
    if (targetMode === "all_l3") return "l3";
  }
  if (rootLevel === "l2") {
    if (targetMode === "self") return "l2";
    if (targetMode === "direct_children" || targetMode === "all_l3") return "l3";
  }
  return "";
}

function syncDeepScanDataMode() {
  const targetLevel = deepScanTargetLevel();
  const disableCamHung = targetLevel === "l2" || targetLevel === "l3";
  includeCamHungEl.disabled = disableCamHung;
  if (disableCamHung) includeCamHungEl.checked = false;
}

function currentTreeFromTextarea() {
  const text = categoryTreeInputEl.value.trim();
  if (!text) return { l2: [], l3: [] };
  return normalizeCategoryTree(text);
}

function summarizeTree(tree) {
  const l2Count = Array.isArray(tree?.l2) ? tree.l2.length : 0;
  const l3Count = Array.isArray(tree?.l3) ? tree.l3.length : 0;
  if (!l2Count && !l3Count) return "Đang dùng cây ngành tích hợp sẵn.";
  return `Cây đã lưu: ${l2Count} L2, ${l3Count} L3.`;
}

function normalizeCategoryTree(rawText) {
  const parsed = JSON.parse(rawText);
  const tree = {
    l2: Array.isArray(parsed?.l2) ? parsed.l2 : [],
    l3: Array.isArray(parsed?.l3) ? parsed.l3 : [],
  };

  const normalizedL2 = tree.l2.map((item, index) => {
    const id = String(item?.id || "").trim();
    const name = String(item?.name || "").trim();
    const l1Id = String(item?.l1_id || "").trim();
    if (!id || !name || !l1Id) {
      throw new Error(`Mục L2 số ${index + 1} cần có id, name và l1_id.`);
    }
    return {
      id,
      name,
      l1_id: l1Id,
      slug: item?.slug ? String(item.slug).trim() : "",
    };
  });

  const normalizedL3 = tree.l3.map((item, index) => {
    const id = String(item?.id || "").trim();
    const name = String(item?.name || "").trim();
    const l1Id = String(item?.l1_id || "").trim();
    const l2Id = String(item?.l2_id || "").trim();
    if (!id || !name || !l1Id || !l2Id) {
      throw new Error(`Mục L3 số ${index + 1} cần có id, name, l1_id và l2_id.`);
    }
    return {
      id,
      name,
      l1_id: l1Id,
      l2_id: l2Id,
      slug: item?.slug ? String(item.slug).trim() : "",
    };
  });

  return { l2: normalizedL2, l3: normalizedL3 };
}

async function loadSavedCategoryTree() {
  const stored = await chrome.storage.local.get(["sellerScraperCategoryTree"]);
  const tree = stored?.sellerScraperCategoryTree || { l2: [], l3: [] };
  categoryTreeInputEl.value = tree.l2?.length || tree.l3?.length
    ? JSON.stringify(tree, null, 2)
    : "";
  treeSummaryEl.textContent = summarizeTree(tree);
}

function log(line) {
  const ts = new Date().toLocaleTimeString();
  logEl.textContent += `[${ts}] ${line}\n`;
  logEl.scrollTop = logEl.scrollHeight;
}

function setStatus(text, bad = false) {
  const labels = {
    Checking: "Đang kiểm tra",
    Running: "Đang chạy",
    Ready: "Sẵn sàng",
    Error: "Có lỗi",
    Partial: "Chưa hoàn tất",
    "No tab": "Chưa kết nối",
    Verification: "Cần xác minh",
  };
  statusEl.dataset.state = text;
  statusEl.textContent = labels[text] || text;
  statusEl.classList.toggle("bad", bad);
}

function isoAddDays(dateStr, days) {
  const d = new Date(`${dateStr}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

function applyWindow(days) {
  selectedWindowDays = days;
  document.querySelectorAll(".windowBtn").forEach((button) => {
    button.classList.toggle("active", parseInt(button.dataset.days, 10) === days);
  });
  const endDate = endDateEl.value || startDateEl.value;
  if (endDate) startDateEl.value = isoAddDays(endDate, -(days - 1));
  renderDeepSelectionSummary();
}

async function activeSellerTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab?.id || !tab.url?.startsWith("https://seller-vn.tiktok.com/")) {
    throw new Error("Hãy mở và chọn tab seller-vn.tiktok.com trước.");
  }
  activeTabId = tab.id;
  return tab;
}

async function injectContentScript() {
  await chrome.scripting.executeScript({
    target: { tabId: activeTabId },
    files: ["core/config.js", "core/scraper-core.js", "content.js"],
  });
}

function selectedTabs() {
  return Array.from(document.querySelectorAll(".tab:checked")).map((el) => el.value);
}

async function sendToContent(message) {
  await activeSellerTab();
  try {
    return await chrome.tabs.sendMessage(activeTabId, message);
  } catch (error) {
    const text = error?.message || String(error);
    if (!text.includes("Receiving end does not exist")) throw error;
    await injectContentScript();
    return chrome.tabs.sendMessage(activeTabId, message);
  }
}

async function helperHealth() {
  try {
    return await chrome.runtime.sendMessage({ type: "SELLER_SCRAPER_BG_HELPER_HEALTH" });
  } catch (error) {
    return { ok: false, error: error?.message || String(error) };
  }
}

async function refreshHelperStatus() {
  const result = await helperHealth();
  if (result?.ok) {
    const status = result.data?.status || {};
    helperStatusEl.textContent = `Bộ xử lý cục bộ: đang chạy (${status.model || "small"}), kiểm tra mỗi ${status.interval_sec || 5} giây.`;
  } else {
    helperStatusEl.textContent = "Bộ xử lý cục bộ chưa chạy. Mở scripts\\start_local_helper.cmd một lần để tự xử lý bản chép lời.";
  }
}

function fillRootCategories() {
  const level = rootLevelEl.value;
  const list = categories[level] || [];
  rootCategoryEl.textContent = "";
  if (!list.length) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = level === "l1" ? "Không có danh mục L1" : `Không có danh mục ${level.toUpperCase()} trong cấu hình`;
    rootCategoryEl.appendChild(option);
    rootCategoryEl.disabled = true;
    return;
  }
  rootCategoryEl.disabled = false;
  for (const category of list) {
    const option = document.createElement("option");
    option.value = category.id;
    option.textContent = `${category.name} (${category.id})`;
    rootCategoryEl.appendChild(option);
  }
}

function deepCategoryKey(level, id) {
  return `${level}:${id}`;
}

function normalizedSearchText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function deepCategoryRef(level, category) {
  return {
    level,
    id: String(category.id),
    name: category.name || "",
    l1_id: level === "l1" ? String(category.id) : String(category.l1_id || ""),
    l2_id: level === "l2" ? String(category.id) : String(category.l2_id || ""),
  };
}

function hasSelectedDeepDescendant(level, category) {
  const id = String(category.id);
  for (const selected of selectedDeepCategories.values()) {
    if (level === "l1" && selected.level !== "l1" && selected.l1_id === id) return true;
    if (level === "l2" && selected.level === "l3" && selected.l2_id === id) return true;
  }
  return false;
}

async function saveDeepSettings() {
  await chrome.storage.local.set({
    [DEEP_SETTINGS_KEY]: {
      mode: deepScanModeEl.value,
      selected: [...selectedDeepCategories.values()].map(({ level, id }) => ({ level, id })),
      activeL1Id: activeDeepL1Id,
      activeL2Id: activeDeepL2Id,
    },
  });
}

async function loadDeepSettings() {
  const stored = await chrome.storage.local.get([DEEP_SETTINGS_KEY]);
  const settings = stored?.[DEEP_SETTINGS_KEY] || {};
  if (settings.mode) deepScanModeEl.value = settings.mode;
  activeDeepL1Id = String(settings.activeL1Id || "");
  activeDeepL2Id = String(settings.activeL2Id || "");
  selectedDeepCategories = new Map(
    (Array.isArray(settings.selected) ? settings.selected : [])
      .filter((item) => item?.level && item?.id)
      .map((item) => [deepCategoryKey(item.level, item.id), {
        level: String(item.level),
        id: String(item.id),
      }])
  );
}

function hydrateDeepSelection() {
  const byLevel = {
    l1: new Map((categories.l1 || []).map((item) => [String(item.id), item])),
    l2: new Map((categories.l2 || []).map((item) => [String(item.id), item])),
    l3: new Map((categories.l3 || []).map((item) => [String(item.id), item])),
  };
  const hydrated = new Map();
  for (const selected of selectedDeepCategories.values()) {
    const category = byLevel[selected.level]?.get(String(selected.id));
    if (!category) continue;
    const ref = deepCategoryRef(selected.level, category);
    hydrated.set(deepCategoryKey(ref.level, ref.id), ref);
  }
  selectedDeepCategories = hydrated;
  if (!byLevel.l1.has(activeDeepL1Id)) activeDeepL1Id = String(categories.l1?.[0]?.id || "");
  const visibleL2 = (categories.l2 || []).filter((item) => String(item.l1_id) === activeDeepL1Id);
  if (!visibleL2.some((item) => String(item.id) === activeDeepL2Id)) {
    activeDeepL2Id = String(visibleL2[0]?.id || "");
  }
}

function toggleDeepCategory(level, category, checked) {
  const ref = deepCategoryRef(level, category);
  const key = deepCategoryKey(level, ref.id);
  if (checked) {
    selectedDeepCategories.set(key, ref);
    if (level === "l1") {
      activeDeepL1Id = ref.id;
      const firstL2 = (categories.l2 || []).find((item) => String(item.l1_id) === ref.id);
      activeDeepL2Id = String(firstL2?.id || "");
    } else if (level === "l2") {
      activeDeepL1Id = ref.l1_id;
      activeDeepL2Id = ref.id;
    } else if (level === "l3") {
      activeDeepL1Id = ref.l1_id;
      activeDeepL2Id = ref.l2_id;
    }
  } else {
    selectedDeepCategories.delete(key);
  }
  renderDeepPicker();
  saveDeepSettings().catch((error) => log(`Lỗi lưu lựa chọn quét sâu: ${error.message || String(error)}`));
}

function navigateDeepCategory(level, category) {
  if (level === "l1") {
    activeDeepL1Id = String(category.id);
    const firstL2 = (categories.l2 || []).find((item) => String(item.l1_id) === activeDeepL1Id);
    activeDeepL2Id = String(firstL2?.id || "");
  } else if (level === "l2") {
    activeDeepL1Id = String(category.l1_id || activeDeepL1Id);
    activeDeepL2Id = String(category.id);
  } else if (level === "l3") {
    activeDeepL1Id = String(category.l1_id || activeDeepL1Id);
    activeDeepL2Id = String(category.l2_id || activeDeepL2Id);
  }
  renderDeepPicker();
  saveDeepSettings().catch((error) => log(`Lỗi lưu lựa chọn quét sâu: ${error.message || String(error)}`));
}

function renderDeepCategoryList(container, level, list) {
  container.textContent = "";
  if (!list.length) {
    const note = document.createElement("p");
    note.className = "hint";
    note.textContent = "Không có danh mục.";
    container.appendChild(note);
    return;
  }
  for (const category of list) {
    const id = String(category.id);
    const row = document.createElement("div");
    row.className = "category-row";
    if ((level === "l1" && id === activeDeepL1Id) || (level === "l2" && id === activeDeepL2Id)) {
      row.classList.add("active");
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = selectedDeepCategories.has(deepCategoryKey(level, id));
    checkbox.indeterminate = !checkbox.checked && hasSelectedDeepDescendant(level, category);
    checkbox.title = `Chọn ${level.toUpperCase()} ${category.name}`;
    checkbox.addEventListener("change", () => toggleDeepCategory(level, category, checkbox.checked));

    const name = document.createElement("button");
    name.type = "button";
    name.className = "category-name";
    name.textContent = `${category.name} (${id})`;
    name.title = name.textContent;
    name.addEventListener("click", () => navigateDeepCategory(level, category));

    const next = document.createElement("button");
    next.type = "button";
    next.className = "category-next";
    next.textContent = level === "l3" ? "" : ">";
    next.disabled = level === "l3";
    if (level !== "l3") next.addEventListener("click", () => navigateDeepCategory(level, category));

    row.appendChild(checkbox);
    row.appendChild(name);
    row.appendChild(next);
    container.appendChild(row);
  }
}

function deepScopesAtLevel(level) {
  const selected = [...selectedDeepCategories.values()];
  const ids = new Set();
  if (level === "l1") {
    selected.forEach((item) => ids.add(item.level === "l1" ? item.id : item.l1_id));
  } else if (level === "l2") {
    for (const item of selected) {
      if (item.level === "l1") {
        (categories.l2 || []).filter((row) => String(row.l1_id) === item.id).forEach((row) => ids.add(String(row.id)));
      } else {
        ids.add(item.level === "l2" ? item.id : item.l2_id);
      }
    }
  } else if (level === "l3") {
    for (const item of selected) {
      if (item.level === "l1") {
        (categories.l3 || []).filter((row) => String(row.l1_id) === item.id).forEach((row) => ids.add(String(row.id)));
      } else if (item.level === "l2") {
        (categories.l3 || []).filter((row) => String(row.l2_id) === item.id).forEach((row) => ids.add(String(row.id)));
      } else {
        ids.add(item.id);
      }
    }
  }
  ids.delete("");
  return ids.size;
}

function plannedDeepScopeCount() {
  const mode = deepScanModeEl.value;
  if (mode === "market" || mode === "combined") return 1;
  if (mode === "selected") return selectedDeepCategories.size;
  if (["l1", "l2", "l3"].includes(mode)) return deepScopesAtLevel(mode);
  if (mode === "all_levels") {
    return 1 + deepScopesAtLevel("l1") + deepScopesAtLevel("l2") + deepScopesAtLevel("l3");
  }
  return 0;
}

function deepDayCount() {
  const start = new Date(`${startDateEl.value}T00:00:00Z`);
  const end = new Date(`${endDateEl.value}T00:00:00Z`);
  if (!Number.isFinite(start.getTime()) || !Number.isFinite(end.getTime()) || end < start) return 0;
  return Math.floor((end - start) / 86400000) + 1;
}

function renderDeepSelectionSummary() {
  const selected = [...selectedDeepCategories.values()];
  deepSelectionSummaryEl.textContent = selected.length
    ? `Đã chọn ${selected.length} ngành`
    : "Chưa chọn ngành";
  deepSelectedChipsEl.textContent = "";
  for (const item of selected) {
    const chip = document.createElement("span");
    chip.className = "selected-chip";
    const text = document.createElement("span");
    text.textContent = `${item.level.toUpperCase()} ${item.name}`;
    const remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = "×";
    remove.title = "Bỏ chọn";
    remove.addEventListener("click", () => toggleDeepCategory(item.level, item, false));
    chip.appendChild(text);
    chip.appendChild(remove);
    deepSelectedChipsEl.appendChild(chip);
  }

  const scopes = plannedDeepScopeCount();
  const days = deepDayCount();
  const tabs = selectedTabs().length;
  const maxRequests = scopes * days * tabs * 4;
  const selectionRequired = deepScanModeEl.value !== "market";
  runMultiDeepScanEl.disabled = isScrapeRunning || (selectionRequired && !selected.length);
  deepScanEstimateEl.textContent = `${scopes} phạm vi × ${days || 0} ngày × ${tabs} mục; tối đa ${maxRequests} yêu cầu (4 trang/phạm vi).`;
  deepScanEstimateEl.classList.toggle("bad", scopes > 200 || maxRequests > 5000);
}

function renderDeepPicker() {
  hydrateDeepSelection();
  const query = normalizedSearchText(deepCategorySearchEl.value);
  const matches = (item) => !query || normalizedSearchText(`${item.name} ${item.id}`).includes(query);
  const l1 = (categories.l1 || []).filter(matches);
  const l2 = (categories.l2 || []).filter((item) => (query || String(item.l1_id) === activeDeepL1Id) && matches(item));
  const l3 = (categories.l3 || []).filter((item) => (query || String(item.l2_id) === activeDeepL2Id) && matches(item));
  renderDeepCategoryList(deepL1ListEl, "l1", l1);
  renderDeepCategoryList(deepL2ListEl, "l2", l2);
  renderDeepCategoryList(deepL3ListEl, "l3", l3);
  renderDeepSelectionSummary();
}

function summarizeCamHungSelection() {
  if (selectedCamHungL1Ids.has("-1")) return "Phạm vi L1: Tất cả (50 video toàn thị trường)";
  const chosen = (categories.l1 || []).filter((item) => selectedCamHungL1Ids.has(String(item.id)));
  if (!chosen.length) return "Phạm vi L1: chưa chọn";
  if (chosen.length === 1) return `Phạm vi L1: ${chosen[0].name}`;
  return `Phạm vi L1: đã chọn ${chosen.length} ngành L1`;
}

function syncCamHungL1Summary() {
  camHungL1SummaryEl.textContent = summarizeCamHungSelection();
}

function camHungSelectedIds() {
  if (selectedCamHungL1Ids.has("-1")) return ["-1"];
  return [...selectedCamHungL1Ids];
}

function onCamHungL1Toggle(id, checked) {
  const value = String(id);
  if (value === "-1") {
    selectedCamHungL1Ids = checked ? new Set(["-1"]) : new Set();
  } else {
    if (checked) {
      selectedCamHungL1Ids.delete("-1");
      selectedCamHungL1Ids.add(value);
    } else {
      selectedCamHungL1Ids.delete(value);
    }
    if (!selectedCamHungL1Ids.size) selectedCamHungL1Ids = new Set(["-1"]);
  }
  fillCamHungDownloadL1();
}

function fillCamHungDownloadL1() {
  const availableIds = new Set(["-1", ...(categories.l1 || []).map((item) => String(item.id))]);
  selectedCamHungL1Ids = new Set([...selectedCamHungL1Ids].filter((id) => availableIds.has(id)));
  if (!selectedCamHungL1Ids.size) selectedCamHungL1Ids = new Set(["-1"]);

  camHungDownloadL1ListEl.textContent = "";

  const renderItem = (id, labelText, checked) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = checked;
    input.addEventListener("change", () => onCamHungL1Toggle(id, input.checked));
    const text = document.createElement("span");
    text.textContent = labelText;
    label.appendChild(input);
    label.appendChild(text);
    camHungDownloadL1ListEl.appendChild(label);
  };

  renderItem("-1", "Tất cả (50 video toàn thị trường)", selectedCamHungL1Ids.has("-1"));
  for (const category of categories.l1 || []) {
    renderItem(String(category.id), `${category.name} (${category.id})`, selectedCamHungL1Ids.has(String(category.id)));
  }
  syncCamHungL1Summary();
}

function queueSelectedIds() {
  return [...selectedQueueL1Ids];
}

function syncQueueL1Summary() {
  const count = selectedQueueL1Ids.size;
  queueL1SummaryEl.textContent = count ? `Hàng đợi: đã chọn ${count} ngành L1` : "Hàng đợi: chưa chọn L1";
}

async function saveQueueSettings() {
  await chrome.storage.local.set({
    [QUEUE_SETTINGS_KEY]: {
      includeMarket: queueIncludeMarketEl.checked,
      includeL1Scan: queueIncludeL1ScanEl.checked,
      l1Ids: queueSelectedIds(),
    },
  });
}

async function loadQueueSettings() {
  const stored = await chrome.storage.local.get([QUEUE_SETTINGS_KEY]);
  const settings = stored?.[QUEUE_SETTINGS_KEY] || {};
  queueIncludeMarketEl.checked = settings.includeMarket !== false;
  queueIncludeL1ScanEl.checked = settings.includeL1Scan !== false;
  const savedIds = Array.isArray(settings.l1Ids) ? settings.l1Ids.map((id) => String(id)) : DEFAULT_QUEUE_L1_IDS;
  selectedQueueL1Ids = new Set(savedIds);
  syncQueueL1Summary();
}

function onQueueL1Toggle(id, checked) {
  const value = String(id);
  if (checked) {
    selectedQueueL1Ids.add(value);
  } else {
    selectedQueueL1Ids.delete(value);
  }
  syncQueueL1Summary();
  saveQueueSettings().catch((error) => log(`Lỗi lưu hàng đợi: ${error.message || String(error)}`));
}

function fillQueueL1List() {
  queueL1ListEl.textContent = "";

  if (!categories.l1?.length) {
    const note = document.createElement("p");
    note.className = "hint";
    note.textContent = "Chưa có danh mục L1.";
    queueL1ListEl.appendChild(note);
    syncQueueL1Summary();
    return;
  }

  const availableIds = new Set((categories.l1 || []).map((item) => String(item.id)));
  selectedQueueL1Ids = new Set([...selectedQueueL1Ids].filter((id) => availableIds.has(id)));

  for (const category of categories.l1) {
    const id = String(category.id);
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = selectedQueueL1Ids.has(id);
    input.addEventListener("change", () => onQueueL1Toggle(id, input.checked));
    const text = document.createElement("span");
    text.textContent = `${category.name} (${id})`;
    label.appendChild(input);
    label.appendChild(text);
    queueL1ListEl.appendChild(label);
  }
  syncQueueL1Summary();
}

function selectDefaultQueueL1() {
  const availableIds = new Set((categories.l1 || []).map((item) => String(item.id)));
  selectedQueueL1Ids = new Set(DEFAULT_QUEUE_L1_IDS.filter((id) => availableIds.has(id)));
  fillQueueL1List();
  saveQueueSettings().catch((error) => log(`Lỗi lưu hàng đợi: ${error.message || String(error)}`));
}

async function ping() {
  try {
    const result = await sendToContent({ type: "SELLER_SCRAPER_PING" });
    if (!result?.ok) throw new Error(result?.error || "Tab Seller không trả về dữ liệu cho extension.");
    setStatus(result.running ? "Running" : "Ready");
    if (!startDateEl.value) startDateEl.value = result.defaultLatestDate;
    if (!endDateEl.value) endDateEl.value = result.defaultLatestDate;
    categories = {
      l1: result.categories?.l1?.length ? result.categories.l1 : categories.l1,
      l2: result.categories?.l2?.length ? result.categories.l2 : categories.l2,
      l3: result.categories?.l3?.length ? result.categories.l3 : categories.l3,
    };
    fillRootCategories();
    fillCamHungDownloadL1();
    fillQueueL1List();
    applyWindow(selectedWindowDays);
    renderDeepPicker();
    await refreshHelperStatus();
    exportCamHungEl.disabled = !result.hasResult;
    exportTopSellingEl.disabled = !result.hasResult;
    exportTopSellingVideoEl.disabled = !result.hasResult;
    exportAllEl.disabled = !result.hasResult;
    exportL2CatalogEl.disabled = !result.hasCatalog;
    useScannedL2El.disabled = !result.hasCatalog;
    log(`Đã kết nối: ${result.title}`);
  } catch (error) {
    setStatus("No tab", true);
    log(error.message || String(error));
  }
}

function initializeBundledPicker() {
  const latestDate = window.SellerScraperCore?.defaultLatestDate?.() || "";
  if (!endDateEl.value) endDateEl.value = latestDate;
  if (!startDateEl.value) startDateEl.value = latestDate;
  fillRootCategories();
  fillCamHungDownloadL1();
  fillQueueL1List();
  applyWindow(selectedWindowDays);
  renderDeepPicker();
  log(`Cây ngành sẵn sàng: ${categories.l1.length} L1, ${categories.l2.length} L2, ${categories.l3.length} L3.`);
}

function baseOptions(preset) {
  return {
    preset,
    startDate: startDateEl.value,
    endDate: endDateEl.value,
    windowDays: selectedWindowDays,
    includeCamHung: includeCamHungEl.checked,
    includeTopSelling: includeTopSellingEl.checked,
    topSellingTabs: selectedTabs(),
  };
}

function deepOptions() {
  const rootLevel = rootLevelEl.value;
  const rootId = rootCategoryEl.value;
  if (!rootId) throw new Error(`Chưa chọn ngành ${rootLevel.toUpperCase()}.`);
  const targetLevel = deepScanTargetLevel();
  return {
    ...baseOptions("deep-scan"),
    rootLevel,
    rootId,
    targetMode: targetModeEl.value,
    includeCamHung: targetLevel === "l2" || targetLevel === "l3" ? false : includeCamHungEl.checked,
  };
}

function l2ScanOptions() {
  return {
    ...baseOptions("l2-scan"),
    includeCamHung: false,
    includeTopSelling: true,
  };
}

function multiDeepOptions() {
  const mode = deepScanModeEl.value;
  const selection = [...selectedDeepCategories.values()].map(({ level, id }) => ({ level, id }));
  const tabs = selectedTabs();
  if (mode !== "market" && !selection.length) {
    throw new Error("Hãy chọn ít nhất một ngành hoặc chuyển sang chế độ Chỉ toàn thị trường.");
  }
  if (!tabs.length) throw new Error("Hãy chọn ít nhất một mục Bán chạy.");
  return {
    ...baseOptions("multi-deep-scan"),
    preset: "multi-deep-scan",
    multiScanMode: mode,
    categorySelection: selection,
    includeCamHung: false,
    includeTopSelling: true,
    topSellingTabs: tabs,
  };
}

async function runMultiDeepScan() {
  const options = multiDeepOptions();
  const scopes = plannedDeepScopeCount();
  const days = deepDayCount();
  const maxRequests = scopes * days * options.topSellingTabs.length * 4;
  if (scopes > 200 || maxRequests > 5000) {
    const accepted = confirm(
      `Phạm vi lớn: ${scopes} phạm vi, tối đa ${maxRequests} yêu cầu. Tiếp tục quét sâu?`
    );
    if (!accepted) return;
  }
  await run(options);
}

function setRunningUi(isRunning) {
  isScrapeRunning = isRunning;
  if (isRunning) {
    setStatus("Running");
  } else if (statusEl.dataset.state === "Running") {
    setStatus("Ready");
  }
  runMarketEl.disabled = isRunning;
  runL1ScanEl.disabled = isRunning;
  runL2ScanEl.disabled = isRunning;
  runDeepScanEl.disabled = isRunning;
  runMultiDeepScanEl.disabled = isRunning;
  deepScanModeEl.disabled = isRunning;
  deepCategorySearchEl.disabled = isRunning;
  clearDeepSelectionEl.disabled = isRunning;
  document.querySelectorAll(".category-cascade input, .category-cascade button, .selected-chip button").forEach((control) => {
    control.disabled = isRunning;
  });
  runQueueEl.disabled = isRunning;
  queueDefaultL1El.disabled = isRunning;
  queueIncludeMarketEl.disabled = isRunning;
  queueIncludeL1ScanEl.disabled = isRunning;
  queueL1ListEl.querySelectorAll("input").forEach((input) => {
    input.disabled = isRunning;
  });
  scanCurrentL1El.disabled = isRunning;
  scanCurrentL2El.disabled = isRunning;
  scanAllL2El.disabled = isRunning;
  downloadCamHungMediaEl.disabled = isRunning;
  stopJobEl.disabled = !isRunning;
  exportCamHungEl.disabled = isRunning;
  exportTopSellingEl.disabled = isRunning;
  exportTopSellingVideoEl.disabled = isRunning;
  exportAllEl.disabled = isRunning;
  if (isRunning) {
    exportL2CatalogEl.disabled = true;
    useScannedL2El.disabled = true;
  } else {
    renderDeepSelectionSummary();
  }
}

async function runOnce(options) {
  log(`Bắt đầu ${options.preset}: ${options.startDate} → ${options.endDate}`);
  const response = await sendToContent({ type: "SELLER_SCRAPER_RUN", options });
  if (!response.ok) throw new Error(response.error);
  log(`Hoàn tất: ${JSON.stringify(response.summary)}`);
  if (!isQueueRunning) {
    exportCamHungEl.disabled = false;
    exportTopSellingEl.disabled = false;
    exportTopSellingVideoEl.disabled = false;
    exportAllEl.disabled = false;
  }
  setStatus(response.summary.partial ? "Partial" : "Ready");
  return response;
}

async function run(options) {
  setRunningUi(true);
  try {
    await runOnce(options);
  } catch (error) {
    const message = error.message || String(error);
    setStatus(isVerificationErrorText(message) ? "Verification" : "Error", true);
    log(`Lỗi: ${message}`);
  } finally {
    setRunningUi(false);
  }
}

async function stopJob() {
  if (isQueueRunning) {
    queueStopRequested = true;
    log("Đã yêu cầu dừng hàng đợi. Các mục còn lại sẽ được bỏ qua.");
  }
  try {
    const response = await sendToContent({ type: "SELLER_SCRAPER_STOP" });
    if (!response.ok) throw new Error(response.error);
    log("Đã yêu cầu dừng. Yêu cầu hiện tại sẽ hoàn thành trước.");
  } catch (error) {
    log(`Lỗi khi dừng: ${error.message || String(error)}`);
  }
}

async function exportCsv(kind, options = {}) {
  try {
    const response = await sendToContent({ type: "SELLER_SCRAPER_DOWNLOAD_CSV", kind });
    if (!response.ok) throw new Error(response.error);
    const result = Array.isArray(response.result) ? response.result : [response.result];
    for (const item of result) log(`Đã xuất ${item.filename}: ${item.rows} dòng`);
    return result;
  } catch (error) {
    log(`Lỗi xuất dữ liệu: ${error.message || String(error)}`);
    if (options.throwOnError) throw error;
    return [];
  }
}

function queueItemLabel(item) {
  if (item.type === "market") return "toàn thị trường";
  if (item.type === "l1-scan") return "toàn bộ L1";
  return `quét sâu L1 ${item.rootId}`;
}

function isVerificationErrorText(value) {
  const text = String(value || "").toLowerCase();
  return text.includes("captcha") || text.includes("challenge") || text.includes("xác minh") ||
    text.includes("verification") || text.includes("too many requests") ||
    text.includes("api code -9999") || text.includes("api code 36009002") ||
    text.includes("api code 98001001") || text.includes("http 403") || text.includes("http 429");
}

function buildRunQueue() {
  const items = [];
  if (queueIncludeMarketEl.checked) {
    items.push({ type: "market", options: baseOptions("market") });
  }
  if (queueIncludeL1ScanEl.checked) {
    items.push({
      type: "l1-scan",
      options: {
        ...baseOptions("l1-scan"),
        includeAllInL1Scan: false,
      },
    });
  }

  const l1ById = new Map((categories.l1 || []).map((item) => [String(item.id), item]));
  for (const rootId of queueSelectedIds()) {
    const category = l1ById.get(String(rootId));
    if (!category) continue;
    items.push({
      type: "deep-scan",
      rootId: String(rootId),
      rootName: category.name,
      options: {
        ...baseOptions("deep-scan"),
        rootLevel: "l1",
        rootId: String(rootId),
        targetMode: "all_l2",
        includeCamHung: false,
      },
    });
  }
  return items;
}

async function runQueue() {
  const items = buildRunQueue();
  if (!items.length) {
    setStatus("Error", true);
    log("Lỗi hàng đợi: hãy chọn ít nhất một phạm vi.");
    return;
  }

  const failures = [];
  let verificationTimedOut = false;
  isQueueRunning = true;
  queueStopRequested = false;
  setRunningUi(true);
  log(`Bắt đầu hàng đợi: ${items.length} mục.`);

  try {
    for (let index = 0; index < items.length; index += 1) {
      if (queueStopRequested) break;
      const item = items[index];
      const label = queueItemLabel(item);
      log(`Hàng đợi ${index + 1}/${items.length}: ${label}`);
      try {
        const response = await runOnce(item.options);
        if (queueStopRequested) {
          log(`Đã dừng sau ${label}. Bỏ qua các mục còn lại.`);
          break;
        }
        await exportCsv("all", { throwOnError: true });
      } catch (error) {
        if (queueStopRequested) {
          log(`Đã dừng trong khi chạy ${label}. Bỏ qua các mục còn lại.`);
          break;
        }
        const message = error.message || String(error);
        failures.push(`${label}: ${message}`);
        log(`Lỗi mục hàng đợi ${label}: ${message}`);
        if (isVerificationErrorText(message)) {
          verificationTimedOut = true;
          log("Hàng đợi đã dừng tại phạm vi hiện tại để không bỏ qua các phạm vi còn lại. Hãy hoàn tất CAPTCHA trên trang Seller rồi chạy lại hàng đợi.");
          break;
        }
      }
    }

    if (verificationTimedOut) {
      setStatus("Verification", true);
    } else if (queueStopRequested) {
      setStatus("Ready");
      log("Người dùng đã dừng hàng đợi.");
    } else if (failures.length) {
      setStatus("Partial", true);
      log(`Hàng đợi hoàn tất nhưng có ${failures.length} mục lỗi:`);
      failures.forEach((item) => log(` - ${item}`));
    } else {
      setStatus("Ready");
      log("Hàng đợi hoàn tất: đã xuất tất cả dữ liệu.");
    }
  } finally {
    isQueueRunning = false;
    queueStopRequested = false;
    setRunningUi(false);
  }
}

async function downloadCamHungMedia() {
  setRunningUi(true);
  log(`Bắt đầu tải media Cảm hứng: ${startDateEl.value} → ${endDateEl.value}`);
  try {
    const options = {
      startDate: startDateEl.value,
      endDate: endDateEl.value,
      windowDays: selectedWindowDays,
      camHungL1Ids: camHungSelectedIds(),
      outputMode: camHungOutputModeEl.value || "video",
      revenueMin: optionalNumber(camHungRevenueMinEl.value),
      ordersMin: optionalNumber(camHungOrdersMinEl.value),
      viewsMin: optionalNumber(camHungViewsMinEl.value),
      publishAfter: camHungPublishAfterEl.value || "",
    };
    let response = await sendToContent({
      type: "SELLER_SCRAPER_DOWNLOAD_CAMHUNG_MEDIA",
      options,
    });
    if (response?.requiresConfirmation) {
      const summary = response.summary || {};
      const ok = confirm(
        `Có ${summary.uniqueFiles || 0} tệp sẽ được đưa vào hàng đợi. Trên 50 tệp có thể làm Chrome hoặc máy chậm. Vẫn tiếp tục?`
      );
      if (!ok) {
        log("Đã hủy tải sau cảnh báo số lượng lớn.");
        setStatus("Ready");
        return;
      }
      response = await sendToContent({
        type: "SELLER_SCRAPER_DOWNLOAD_CAMHUNG_MEDIA",
        options: { ...options, allowLargeBatch: true },
      });
    }
    if (!response.ok) throw new Error(response.error);
    const summary = response.summary || {};
    log(`Đã xếp hàng tải: ${summary.queued || 0}; đã có sẵn: ${summary.skippedExisting || 0}; lỗi: ${summary.failed || 0}.`);
    if (summary.manifestFilename) log(`Tệp kê khai: ${summary.manifestFilename} (${summary.manifestRows || 0} dòng)`);
    if (summary.helperHint) log(summary.helperHint);
    setStatus("Ready");
  } catch (error) {
    setStatus("Error", true);
    log(`Lỗi tải xuống: ${error.message || String(error)}`);
  } finally {
    setRunningUi(false);
  }
}

async function scanAllL2Catalog() {
  setRunningUi(true);
  log("Bắt đầu quét danh mục L2 trên toàn bộ L1.");
  try {
    const response = await sendToContent({ type: "SELLER_SCRAPER_SCAN_L2_CATALOG" });
    if (!response.ok) throw new Error(response.error);
    exportL2CatalogEl.disabled = false;
    useScannedL2El.disabled = false;
    setStatus("Ready");
    log(`Hoàn tất danh mục L2: ${JSON.stringify(response.summary)}`);
  } catch (error) {
    setStatus("Error", true);
    log(`Lỗi quét L2: ${error.message || String(error)}`);
  } finally {
    setRunningUi(false);
  }
}

async function scanCurrentL1() {
  setRunningUi(true);
  log("Bắt đầu quét L1 hiện tại.");
  try {
    const response = await sendToContent({ type: "SELLER_SCRAPER_SCAN_CURRENT_L1" });
    if (!response.ok) throw new Error(response.error);
    exportL2CatalogEl.disabled = false;
    useScannedL2El.disabled = false;
    setStatus("Ready");
    log(`Hoàn tất L1 hiện tại: ${JSON.stringify(response.summary)}`);
  } catch (error) {
    setStatus("Error", true);
    log(`Lỗi quét L1 hiện tại: ${error.message || String(error)}`);
  } finally {
    setRunningUi(false);
  }
}

async function scanCurrentL2() {
  if (rootLevelEl.value !== "l2" || !rootCategoryEl.value) {
    setStatus("Error", true);
    log("Lỗi quét L2 hiện tại: hãy đặt Cấp gốc = L2 và chọn đúng L2 đang mở trên TikTok.");
    return;
  }
  setRunningUi(true);
  log("Bắt đầu quét L2 hiện tại.");
  try {
    let options = {};
    const selected = (categories.l2 || []).find((item) => item.id === rootCategoryEl.value);
    if (selected) {
      options = { expectedL2Id: selected.id, expectedL2Name: selected.name };
    }
    const response = await sendToContent({ type: "SELLER_SCRAPER_SCAN_CURRENT_L2", options });
    if (!response.ok) throw new Error(response.error);
    exportL2CatalogEl.disabled = false;
    useScannedL2El.disabled = false;
    setStatus("Ready");
    log(`Hoàn tất L2 hiện tại: ${JSON.stringify(response.summary)}`);
  } catch (error) {
    setStatus("Error", true);
    log(`Lỗi quét L2 hiện tại: ${error.message || String(error)}`);
  } finally {
    setRunningUi(false);
  }
}

async function exportL2Catalog() {
  try {
    const response = await sendToContent({ type: "SELLER_SCRAPER_DOWNLOAD_CATALOG" });
    if (!response.ok) throw new Error(response.error);
    log(`Đã xuất ${response.result.filename}: ${response.result.rows} dòng`);
  } catch (error) {
    log(`Lỗi xuất danh mục: ${error.message || String(error)}`);
  }
}

async function useScannedL2() {
  try {
    const response = await sendToContent({ type: "SELLER_SCRAPER_GET_CATALOG" });
    if (!response.ok) throw new Error(response.error);
    if (!response.catalog?.l2?.length && !response.catalog?.l3?.length) {
      throw new Error("Không có cây ngành vừa quét.");
    }
    const currentTree = currentTreeFromTextarea();
    const mergedL2 = [...(currentTree.l2 || []), ...(response.catalog.l2 || [])];
    const mergedL3 = [...(currentTree.l3 || []), ...(response.catalog.l3 || [])];
    const dedupe = (rows, keys) => {
      const out = [];
      const seen = new Set();
      for (const row of rows) {
        const key = keys.map((field) => row[field] || "").join("::");
        if (seen.has(key)) continue;
        seen.add(key);
        out.push(row);
      }
      return out;
    };
    const merged = {
      l2: dedupe(mergedL2, ["id", "l1_id"]),
      l3: dedupe(mergedL3, ["id", "l1_id", "l2_id"]),
    };
    categoryTreeInputEl.value = JSON.stringify(merged, null, 2);
    await saveCategoryTree();
    log(`Đã nạp cây vừa quét: ${merged.l2.length} L2, ${merged.l3.length} L3.`);
  } catch (error) {
    setStatus("Error", true);
    log(`Lỗi dùng cây vừa quét: ${error.message || String(error)}`);
  }
}

async function saveCategoryTree() {
  try {
    const text = categoryTreeInputEl.value.trim();
    const tree = text ? normalizeCategoryTree(text) : { l2: [], l3: [] };
    await chrome.storage.local.set({ sellerScraperCategoryTree: tree });
    treeSummaryEl.textContent = summarizeTree(tree);
    log(`Đã lưu cây ngành: ${tree.l2.length} L2, ${tree.l3.length} L3.`);
    await ping();
  } catch (error) {
    setStatus("Error", true);
    log(`Lỗi cây ngành: ${error.message || String(error)}`);
  }
}

async function clearCategoryTree() {
  await chrome.storage.local.remove(["sellerScraperCategoryTree"]);
  categoryTreeInputEl.value = "";
  treeSummaryEl.textContent = "Đang dùng cây ngành tích hợp sẵn.";
  log("Đã xóa cây ngành lưu thêm.");
  await ping();
}

chrome.runtime.onMessage.addListener((request) => {
  if (request?.type !== "SELLER_SCRAPER_PROGRESS") return;
  const msg = request.message || {};
  if (msg.step === "job_reset") {
    log("Đã bắt đầu lượt chạy mới và xóa trạng thái xuất trước đó.");
  } else if (msg.step === "catalog_start") {
    log(`Bắt đầu quét danh mục L2 cho ${msg.total} ngành L1.`);
  } else if (msg.step === "catalog_l1_start") {
    log(`Đang quét L2 của ${msg.l1Name} (${msg.l1Id})`);
  } else if (msg.step === "catalog_l1_done") {
    log(`Đã quét xong ${msg.l1Name}: ${msg.l2Count} dòng L2`);
  } else if (msg.step === "catalog_current_l1") {
    log(`L1 hiện tại ${msg.l1Name} (${msg.l1Id}); xem trước=${JSON.stringify(msg.previews)}`);
  } else if (msg.step === "catalog_current_l2") {
    log(`L2 hiện tại ${msg.l2Name} (${msg.l2Id}) thuộc ${msg.l1Name}; xem trước=${JSON.stringify(msg.previews)}`);
  } else if (msg.step === "catalog_debug") {
    log(`Kiểm tra L2 ${msg.l1Name}: thấy ${msg.totalSeen} dòng; đầu tiên=${JSON.stringify(msg.seen)}`);
  } else if (msg.step === "catalog_columns") {
    log(`Cột L2 ${msg.l1Name}: số lượng=${msg.count}; xem trước=${JSON.stringify(msg.previews)}`);
  } else if (msg.step === "catalog_l2_debug") {
    log(`Kiểm tra cột L2 ${msg.l1Name}: ${JSON.stringify(msg.seen)}`);
  } else if (msg.step === "catalog_done") {
    log(`Tổng kết danh mục L2: ${JSON.stringify(msg.summary)}`);
  } else if (msg.step === "date_start") {
    log(`Bắt đầu ngày ${msg.date}`);
  } else if (msg.step === "category_start") {
    log(`${msg.date} ${msg.category}`);
  } else if (msg.step === "date_done") {
    log(`${msg.date}: Cảm hứng ${msg.camHungRows}, Bán chạy ${msg.topSellingRows}`);
  } else if (msg.step === "top_selling_page") {
    log(`${msg.date} ${msg.category} ${msg.tab}, trang ${msg.page}`);
  } else if (msg.step === "camhung_rank") {
    log(`${msg.date} ${msg.category} Cảm hứng, kiểu xếp hạng ${msg.rankType}`);
  } else if (msg.step === "api_retry") {
    const ctx = msg.context || {};
    const scope = ctx.source === "topselling"
      ? `${ctx.date} ${ctx.category} ${ctx.tab}, trang ${ctx.page}`
      : `${ctx.date} ${ctx.category} Cảm hứng, kiểu xếp hạng ${ctx.rankType}`;
    log(`Thử lại lần ${msg.attempt}: ${scope} sau ${msg.waitMs} mili giây`);
  } else if (msg.step === "api_skip") {
    const reason = msg.error ? ` — ${msg.error}` : "";
    if (msg.source === "topselling") {
      log(`Đã bỏ qua: ${msg.date} ${msg.category} ${msg.tab}${reason}`);
    } else {
      log(`Đã bỏ qua: ${msg.date} ${msg.category} Cảm hứng, kiểu xếp hạng ${msg.rankType}${reason}`);
    }
  } else if (msg.step === "challenge_required") {
    setStatus("Verification", true);
    log(`Seller yêu cầu CAPTCHA/xác minh. Extension đang tạm dừng tại yêu cầu này; hãy hoàn tất xác minh trên trang Seller. Chi tiết: ${msg.error || "không có"}`);
  } else if (msg.step === "challenge_wait") {
    if (msg.check === 1 || msg.check % 6 === 0) {
      log(`Đang chờ xác minh... ${Math.round((msg.waitedMs || 0) / 1000)} giây. Sẽ tự thử lại sau ${Math.round((msg.nextRetryMs || 0) / 1000)} giây.`);
    }
  } else if (msg.step === "challenge_resolved") {
    setStatus("Running");
    log(`Xác minh đã hoàn tất sau ${Math.round((msg.waitedMs || 0) / 1000)} giây. Đang tiếp tục đúng phạm vi bị tạm dừng.`);
  } else if (msg.step === "stopped") {
    log(`Đã dừng: Cảm hứng ${msg.camHungRows}, Bán chạy ${msg.topSellingRows}`);
  } else if (msg.step === "done") {
    log(`Tổng kết: ${JSON.stringify(msg.summary)}`);
  } else if (msg.step === "download_prepare") {
    log(`Đang chuẩn bị tải Cảm hứng cho ${msg.dates} ngày / ${msg.categories} phạm vi.`);
  } else if (msg.step === "media_download_queue") {
    log(`Hàng đợi media: ${msg.uniqueFiles} tệp duy nhất từ ${msg.filteredRows}/${msg.totalRows} dòng phù hợp.`);
  } else if (msg.step === "media_download_done") {
    const summary = msg.summary || {};
    log(`Media hoàn tất: ${summary.queued || 0} đã xếp hàng, ${summary.skippedExisting || 0} đã có sẵn, ${summary.failed || 0} lỗi.`);
    if (summary.manifestFilename) log(`Tệp kê khai sẵn sàng: ${summary.manifestFilename} (${summary.manifestRows || 0} dòng)`);
  }
});

document.querySelectorAll(".windowBtn").forEach((button) => {
  button.addEventListener("click", () => applyWindow(parseInt(button.dataset.days, 10)));
});

rootLevelEl.addEventListener("change", () => {
  fillRootCategories();
  syncDeepScanDataMode();
});
targetModeEl.addEventListener("change", syncDeepScanDataMode);
endDateEl.addEventListener("change", () => {
  applyWindow(selectedWindowDays);
});
startDateEl.addEventListener("change", renderDeepSelectionSummary);
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("change", renderDeepSelectionSummary);
});
deepScanModeEl.addEventListener("change", () => {
  renderDeepSelectionSummary();
  saveDeepSettings().catch((error) => log(`Lỗi lưu lựa chọn quét sâu: ${error.message || String(error)}`));
});
deepCategorySearchEl.addEventListener("input", renderDeepPicker);
clearDeepSelectionEl.addEventListener("click", () => {
  selectedDeepCategories.clear();
  renderDeepPicker();
  saveDeepSettings().catch((error) => log(`Lỗi lưu lựa chọn quét sâu: ${error.message || String(error)}`));
});
runMultiDeepScanEl.addEventListener("click", () => {
  runMultiDeepScan().catch((error) => {
    setStatus("Error", true);
    log(`Lỗi: ${error.message || String(error)}`);
  });
});
runMarketEl.addEventListener("click", () => run(baseOptions("market")));
runL1ScanEl.addEventListener("click", () => run({
  ...baseOptions("l1-scan"),
  includeAllInL1Scan: false,
}));
runL2ScanEl.addEventListener("click", () => {
  if (includeCamHungEl.checked) {
    log("Quét toàn bộ L2 chỉ dùng dữ liệu Bán chạy, nên Cảm hứng sẽ được bỏ qua.");
  }
  run(l2ScanOptions());
});
runDeepScanEl.addEventListener("click", () => {
  try {
    run(deepOptions());
  } catch (error) {
    setStatus("Error", true);
    log(`Lỗi: ${error.message || String(error)}`);
  }
});
queueIncludeMarketEl.addEventListener("change", () => {
  saveQueueSettings().catch((error) => log(`Lỗi lưu hàng đợi: ${error.message || String(error)}`));
});
queueIncludeL1ScanEl.addEventListener("change", () => {
  saveQueueSettings().catch((error) => log(`Lỗi lưu hàng đợi: ${error.message || String(error)}`));
});
queueDefaultL1El.addEventListener("click", selectDefaultQueueL1);
runQueueEl.addEventListener("click", runQueue);
stopJobEl.addEventListener("click", stopJob);
exportCamHungEl.addEventListener("click", () => exportCsv("camhung"));
exportTopSellingEl.addEventListener("click", () => exportCsv("topSelling"));
exportTopSellingVideoEl.addEventListener("click", () => exportCsv("topSellingVideo"));
exportAllEl.addEventListener("click", () => exportCsv("all"));
downloadCamHungMediaEl.addEventListener("click", downloadCamHungMedia);
scanCurrentL1El.addEventListener("click", scanCurrentL1);
scanCurrentL2El.addEventListener("click", scanCurrentL2);
scanAllL2El.addEventListener("click", scanAllL2Catalog);
exportL2CatalogEl.addEventListener("click", exportL2Catalog);
useScannedL2El.addEventListener("click", useScannedL2);
saveCategoryTreeEl.addEventListener("click", saveCategoryTree);
clearCategoryTreeEl.addEventListener("click", clearCategoryTree);

Promise.all([loadSavedCategoryTree(), loadQueueSettings(), loadDeepSettings()]).then(() => {
  initializeBundledPicker();
  return ping();
});
