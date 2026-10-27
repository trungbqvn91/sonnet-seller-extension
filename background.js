// Tự chạy hằng ngày (09/10/2026): xem auto-hang-ngay.js
importScripts('auto-hang-ngay.js');

chrome.runtime.onInstalled.addListener(() => {
  chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true }).catch(() => {});
});

chrome.runtime.onStartup.addListener(() => {
  chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true }).catch(() => {});
});

chrome.action.onClicked.addListener((tab) => {
  if (!tab?.windowId) return;
  chrome.sidePanel.open({ windowId: tab.windowId }).catch(() => {});
});

const LOCAL_HELPER_BASE = "http://127.0.0.1:8765";

function escapeRegex(value) {
  return String(value || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

async function findExistingDownload(filename) {
  const regex = `${escapeRegex(filename)}$`;
  const items = await chrome.downloads.search({
    filenameRegex: regex,
    state: "complete",
    limit: 20,
  });
  return items.find((item) => item.filename && item.filename.replace(/\\/g, "/").endsWith(filename)) || null;
}

function downloadUrl(url, filename) {
  return new Promise((resolve, reject) => {
    chrome.downloads.download(
      {
        url,
        filename,
        conflictAction: "uniquify",
        saveAs: false,
      },
      (downloadId) => {
        if (chrome.runtime.lastError) {
          reject(new Error(chrome.runtime.lastError.message));
          return;
        }
        resolve(downloadId);
      }
    );
  });
}

async function queueMediaDownloads(tasks) {
  const summary = {
    requested: Array.isArray(tasks) ? tasks.length : 0,
    queued: 0,
    skippedExisting: 0,
    failed: 0,
    files: [],
    failures: [],
  };
  for (const task of tasks || []) {
    const filename = String(task?.filename || "").trim();
    const relativeDir = String(task?.relativeDir || "").trim().replace(/^\/+|\/+$/g, "");
    const downloadPath = relativeDir ? `${relativeDir}/${filename}` : filename;
    const primaryUrl = String(task?.url || "").trim();
    const fallbackUrl = String(task?.fallbackUrl || "").trim();
    if (!filename || !primaryUrl) {
      summary.failed += 1;
      summary.failures.push({ filename, error: "Missing filename or URL." });
      continue;
    }
    const existing = await findExistingDownload(downloadPath);
    if (existing) {
      summary.skippedExisting += 1;
      summary.files.push({ filename: downloadPath, status: "exists", downloadId: existing.id || null });
      continue;
    }
    try {
      const downloadId = await downloadUrl(primaryUrl, downloadPath);
      summary.queued += 1;
      summary.files.push({ filename: downloadPath, status: "queued", downloadId });
    } catch (error) {
      if (fallbackUrl && fallbackUrl !== primaryUrl) {
        try {
          const downloadId = await downloadUrl(fallbackUrl, downloadPath);
          summary.queued += 1;
          summary.files.push({ filename: downloadPath, status: "queued_backup", downloadId });
          continue;
        } catch (fallbackError) {
          summary.failed += 1;
          summary.failures.push({
            filename,
            error: fallbackError.message || String(fallbackError),
          });
          continue;
        }
      }
      summary.failed += 1;
      summary.failures.push({ filename, error: error.message || String(error) });
    }
  }
  return summary;
}

async function helperRequest(path, options = {}) {
  const response = await fetch(`${LOCAL_HELPER_BASE}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });
  if (!response.ok) {
    throw new Error(`Helper HTTP ${response.status}`);
  }
  return response.json();
}

async function helperHealth() {
  try {
    const data = await helperRequest("/health", { method: "GET", headers: {} });
    return { ok: true, data };
  } catch (error) {
    return { ok: false, error: error.message || String(error) };
  }
}

async function helperProcess(payload) {
  return helperRequest("/process", {
    method: "POST",
    body: JSON.stringify(payload || {}),
  });
}

chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
  if (request?.type === "SELLER_SCRAPER_BG_DOWNLOAD_MEDIA") {
    queueMediaDownloads(request.tasks || [])
      .then((summary) => sendResponse({ ok: true, summary }))
      .catch((error) => sendResponse({ ok: false, error: error.message || String(error) }));
    return true;
  }
  if (request?.type === "SELLER_SCRAPER_BG_HELPER_HEALTH") {
    helperHealth().then(sendResponse);
    return true;
  }
  if (request?.type === "SELLER_SCRAPER_BG_HELPER_PROCESS") {
    helperProcess(request.payload || {})
      .then((data) => sendResponse({ ok: true, data }))
      .catch((error) => sendResponse({ ok: false, error: error.message || String(error) }));
    return true;
  }
  return false;
});
