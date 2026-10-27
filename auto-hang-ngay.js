// Tự chạy HẰNG NGÀY cho Seller Center Scraper (thêm 09/10/2026 theo yêu cầu anh Trung — không cần ngồi cào tay):
// mỗi ngày đến giờ đặt (mặc định 08:00, giờ máy) tự mở/dùng tab seller-vn.tiktok.com ĐÃ ĐĂNG NHẬP, chạy đúng lệnh "Tải video Cảm hứng"
// (SELLER_SCRAPER_DOWNLOAD_CAMHUNG_MEDIA — cùng đường chạy của nút trong khung bên) cho N ngày gần nhất; tải video + xuất manifest vào thư mục
// tải xuống như khi bấm tay. Video đã tải rồi thì tự bỏ qua (queueMediaDownloads kiểm trùng). Cần người: hết phiên đăng nhập hoặc CAPTCHA
// -> hiện THÔNG BÁO và thử lại sau (30 phút / 1 giờ), KHÔNG tự vượt xác minh. Bật/tắt + chạy thử ở trang Tùy chọn của tiện ích.
// Không đụng popup/content.js. Trạng thái trong chrome.storage.local["sellerAutoDaily"].
'use strict';

var AUTO_KEY = 'sellerAutoDaily';
var AUTO_SELLER_URL = 'https://seller-vn.tiktok.com/';
var AUTO_ALARM = 'seller-auto-daily';
var AUTO_MAC_DINH = { bat: false, gio: '08:00', soNgay: 2, l1Ids: ['-1'], thuLaiPhut: 30 };
var AUTO_QUA_GIO_MS = 40 * 60e3;       // một lượt chạy quá 40 phút coi như treo -> bỏ
var AUTO_ICON = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAAAQklEQVR4nO3OQQ0AIAwAsZlBGfIxgQuOR5MK6Kx9vjL5QEhISKgeCAkJCdUDISEhoXogJCQkVA+EhISE6oGQkNBjFxDvC8TEOtTeAAAAAElFTkSuQmCC';

var autoHang = Promise.resolve();
function autoDoc() { return chrome.storage.local.get(AUTO_KEY).then(function (r) { return Object.assign({}, AUTO_MAC_DINH, r[AUTO_KEY] || {}); }); }
function autoSua(fn) {
  var lam = function () { return autoDoc().then(function (s) { var kq = fn(s); return chrome.storage.local.set({ sellerAutoDaily: s }).then(function () { return kq; }); }); };
  autoHang = autoHang.then(lam, lam);
  return autoHang;
}
function autoHomNay() { var d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
function autoGioDat(s) { var m = /^(\d{1,2}):(\d{2})$/.exec(String(s.gio || '')); var d = new Date(); d.setHours(m ? Math.min(23, Number(m[1])) : 8, m ? Math.min(59, Number(m[2])) : 0, 0, 0); return d.getTime(); }
function autoLuiNgay(iso, soNgay) { var t = Date.parse(iso + 'T00:00:00Z') - (Math.max(1, soNgay) - 1) * 864e5; return new Date(t).toISOString().slice(0, 10); }
function autoBao(id, tieuDe, noiDung) {
  try { chrome.notifications.create(id, { type: 'basic', iconUrl: AUTO_ICON, title: tieuDe, message: noiDung, priority: 2, requireInteraction: true }); } catch (e) { /* không có quyền thông báo: bỏ qua */ }
}

function autoTaoAlarm() {
  chrome.alarms.get(AUTO_ALARM).then(function (a) { if (!a) chrome.alarms.create(AUTO_ALARM, { periodInMinutes: 10, delayInMinutes: 1 }); });
}

function autoChoTai(tabId, ms) {
  return new Promise(function (ok) {
    var xong = false, hen = setTimeout(function () { if (!xong) { xong = true; chrome.tabs.onUpdated.removeListener(ls); ok(false); } }, ms);
    function ls(id, info) { if (id === tabId && info.status === 'complete' && !xong) { xong = true; clearTimeout(hen); chrome.tabs.onUpdated.removeListener(ls); ok(true); } }
    chrome.tabs.onUpdated.addListener(ls);
    chrome.tabs.get(tabId).then(function (t) { if (t.status === 'complete' && !xong) { xong = true; clearTimeout(hen); chrome.tabs.onUpdated.removeListener(ls); ok(true); } }).catch(function () {});
  });
}

async function autoPing(tabId) {
  for (var i = 0; i < 12; i++) { // trang vừa tải: content script cần vài giây để sẵn sàng
    try { var r = await chrome.tabs.sendMessage(tabId, { type: 'SELLER_SCRAPER_PING' }); if (r && r.ok) return r; } catch (e) { /* chưa sẵn sàng */ }
    await new Promise(function (ok) { setTimeout(ok, 5000); });
  }
  return null;
}

var autoDangChay = false;
async function autoChay(thuCong) {
  if (autoDangChay) return { ok: false, loi: 'Đang chạy rồi' };
  autoDangChay = true;
  var tabMoi = null, quaGio = false, hen = null;
  // Service worker bị Chrome tắt sau ~30 giây "rảnh": việc chờ phản hồi dài (CAPTCHA tới 10 phút, tải nhiều ngày) cần giữ nó sống
  var giu = setInterval(function () { try { chrome.runtime.getPlatformInfo(function () {}); } catch (e) { /* bỏ */ } }, 20000);
  try {
    var s = await autoDoc();
    await autoSua(function (x) { x.dangChay = { batDau: Date.now() }; });
    var tabs = await chrome.tabs.query({ url: AUTO_SELLER_URL + '*' });
    var tab = tabs[0];
    if (!tab) { tab = await chrome.tabs.create({ url: AUTO_SELLER_URL, active: false }); tabMoi = tab; await autoChoTai(tab.id, 60000); }
    else if (tab.discarded) { await chrome.tabs.reload(tab.id); await autoChoTai(tab.id, 60000); } // Chrome (Memory Saver) đã cho tab này ngủ
    var ping = await autoPing(tab.id);
    var tNow = await chrome.tabs.get(tab.id).catch(function () { return null; });
    var urlTab = (tNow && tNow.url) || '';
    // PING chỉ cho biết content script có mặt, KHÔNG chứng minh đã đăng nhập: trang đăng nhập cũng thuộc seller-vn. Nhận diện qua địa chỉ.
    var trangDangNhap = !!urlTab && (!/^https:\/\/seller-vn\.tiktok\.com\//.test(urlTab) || /\/(login|passport|sso|signin)(\/|\?|$)/i.test(urlTab));
    if (!ping || trangDangNhap) {
      var ketQua = 'can-dang-nhap';
      await autoSua(function (x) { x.lanCuoi = { luc: Date.now(), kq: ketQua, tomTat: 'Không đọc được Seller Center (cần đăng nhập?)' + (urlTab ? ' — trang: ' + urlTab.slice(0, 120) : '') }; x.tiepTheoLuc = Date.now() + 60 * 60e3; });
      autoBao('seller-auto-login', 'Seller Center cần đăng nhập', 'Tự chạy hằng ngày không đọc được Seller Center. Mở tab seller-vn.tiktok.com và đăng nhập; tiện ích sẽ tự thử lại sau 1 giờ.');
      if (tabMoi) { /* giữ tab để người dùng đăng nhập */ tabMoi = null; await chrome.tabs.update(tab.id, { active: true }).catch(function () {}); }
      return { ok: false, loi: ketQua };
    }
    // Khoảng ngày: mặc định N ngày gần nhất; máy/Chrome tắt vài ngày thì lấy BÙ từ ngày kết thúc của lần chạy thành công trước (tối đa 14 ngày)
    var denNgay = ping.defaultLatestDate;
    var tuNgay = autoLuiNgay(denNgay, s.soNgay), sanBu = autoLuiNgay(denNgay, 14);
    if (s.lanChayDen && /^\d{4}-\d{2}-\d{2}$/.test(s.lanChayDen) && s.lanChayDen < denNgay && s.lanChayDen < tuNgay) tuNgay = s.lanChayDen;
    if (tuNgay < sanBu) tuNgay = sanBu;
    var options = { startDate: tuNgay, endDate: denNgay, windowDays: 14, camHungL1Ids: s.l1Ids && s.l1Ids.length ? s.l1Ids : ['-1'], outputMode: 'video', allowLargeBatch: true };
    var hanChot = new Promise(function (ok) { hen = setTimeout(function () { quaGio = true; ok({ ok: false, error: 'TIMEOUT: quá 40 phút chưa xong' }); }, AUTO_QUA_GIO_MS); });
    var res = await Promise.race([chrome.tabs.sendMessage(tab.id, { type: 'SELLER_SCRAPER_DOWNLOAD_CAMHUNG_MEDIA', options: options }), hanChot]);
    clearTimeout(hen);
    var loi = String((res && res.error) || '');
    var khongCoVideo = /No matching Cam hung videos/i.test(loi); // bộ lọc không còn video nào: coi là XONG (không có gì để tải), không phải lỗi
    if ((res && res.ok) || khongCoVideo) {
      var sm = (res && res.summary) || {};
      var tomTat = 'Khoảng ' + options.startDate + ' → ' + options.endDate + ': ' + (khongCoVideo ? 'không có video nào khớp bộ lọc (không có gì để tải)'
        : 'xếp hàng tải ' + (sm.queued || 0) + ', đã có sẵn ' + (sm.skippedExisting || 0) + ', lỗi ' + (sm.failed || 0) + (sm.manifestFilename ? ', kê khai ' + (sm.manifestRows || 0) + ' dòng' : '')
        + (sm.failed ? ' (video lỗi sẽ được tải lại ở lượt sau nhờ khoảng ngày chồng nhau)' : ''));
      await autoSua(function (x) { x.lanChayNgay = autoHomNay(); x.lanChayDen = options.endDate; x.lanCuoi = { luc: Date.now(), kq: 'xong', tomTat: tomTat }; x.tiepTheoLuc = 0; x.soLoiLienTiep = 0; x.soCaptcha = 0; });
      return { ok: true, tomTat: tomTat };
    }
    loi = loi || 'Lỗi không rõ';
    var captcha = /CAPTCHA|captcha|xác minh|verification|challenge/i.test(loi);
    var nLoi = 0, nCaptcha = 0;
    await autoSua(function (x) {
      x.soLoiLienTiep = (x.soLoiLienTiep || 0) + 1; nLoi = x.soLoiLienTiep;
      if (captcha) { x.soCaptcha = (x.soCaptcha || 0) + 1; nCaptcha = x.soCaptcha; }
      x.lanCuoi = { luc: Date.now(), kq: captcha ? 'captcha' : 'loi', tomTat: loi.slice(0, 300) };
      // CAPTCHA 3 lần liên tiếp: nghỉ 6 giờ thay vì cứ 30 phút lại đập vào Seller Center (mỗi lượt đã chờ ~10 phút)
      x.tiepTheoLuc = Date.now() + (captcha ? (nCaptcha >= 3 ? 360 : x.thuLaiPhut) : 60) * 60e3;
    });
    if (captcha) autoBao('seller-auto-captcha', 'Seller Center đòi xác minh (CAPTCHA)', 'Mở tab seller-vn.tiktok.com và hoàn tất xác minh. Tiện ích sẽ tự thử lại sau ' + (nCaptcha >= 3 ? '6 giờ (đã thử 3 lần)' : s.thuLaiPhut + ' phút') + '.');
    else if (nLoi <= 2) autoBao('seller-auto-loi', 'Tự chạy Seller Center bị lỗi', loi.slice(0, 180));
    return { ok: false, loi: loi };
  } catch (e) {
    var m = String(e && e.message || e);
    await autoSua(function (x) { x.lanCuoi = { luc: Date.now(), kq: 'loi', tomTat: m.slice(0, 300) }; x.tiepTheoLuc = Date.now() + 60 * 60e3; });
    return { ok: false, loi: m };
  } finally {
    clearInterval(giu); if (hen) clearTimeout(hen);
    await autoSua(function (x) { x.dangChay = null; });
    // tab do chính mô-đun mở và chạy xong thì đóng (video đã giao cho chrome.downloads); hết giờ thì KHÔNG đóng vì công cụ có thể còn đang xuất kê khai; tab người dùng đang mở thì giữ nguyên
    if (tabMoi && !quaGio) chrome.tabs.remove(tabMoi.id).catch(function () {});
    autoDangChay = false;
  }
}

async function autoTick() {
  var s = await autoDoc();
  if (!s.bat || autoDangChay) return;
  var now = Date.now();
  if (s.dangChay) { // lượt trước còn ghi dở (vd service worker bị tắt giữa chừng): còn trong hạn thì ĐỪNG chạy chồng, quá hạn mới coi là treo
    if (now - s.dangChay.batDau <= AUTO_QUA_GIO_MS) return;
    await autoSua(function (x) { x.dangChay = null; });
  }
  if (s.tiepTheoLuc && now < s.tiepTheoLuc) return;
  if (s.lanChayNgay === autoHomNay()) return;       // hôm nay đã xong
  if (now < autoGioDat(s)) return;                  // chưa tới giờ đặt
  await autoChay(false);
}

chrome.alarms.onAlarm.addListener(function (a) { if (a && a.name === AUTO_ALARM) autoTick(); });
chrome.runtime.onStartup.addListener(autoTaoAlarm);
chrome.runtime.onInstalled.addListener(autoTaoAlarm);
autoTaoAlarm();

// Công cụ quét chờ CAPTCHA tới 10 phút (challenge_wait) rồi mới báo lỗi: báo NGAY khi phát hiện để người dùng kịp xử lý, hết thì xoá thông báo
chrome.runtime.onMessage.addListener(function (req) {
  if (!autoDangChay || !req || req.type !== 'SELLER_SCRAPER_PROGRESS' || !req.message) return false;
  var buoc = req.message.step;
  if (buoc === 'challenge_required') autoBao('seller-auto-captcha', 'Seller Center đòi xác minh (CAPTCHA)', 'Mở tab seller-vn.tiktok.com và hoàn tất xác minh — tiện ích đang chờ và sẽ chạy tiếp ngay khi xong.');
  else if (buoc === 'challenge_resolved') { try { chrome.notifications.clear('seller-auto-captcha'); } catch (e) { /* bỏ */ } }
  return false;
});

// Trang Tùy chọn: đọc/ghi cấu hình + chạy thử ngay
chrome.runtime.onMessage.addListener(function (req, _sender, tra) {
  if (!req || typeof req.type !== 'string' || req.type.indexOf('SELLER_AUTO_') !== 0) return false;
  (async function () {
    if (req.type === 'SELLER_AUTO_GET') return { ok: true, s: await autoDoc(), homNay: autoHomNay() };
    if (req.type === 'SELLER_AUTO_SET') {
      var c = req.cau || {};
      await autoSua(function (x) {
        if (typeof c.bat === 'boolean') x.bat = c.bat;
        if (/^\d{1,2}:\d{2}$/.test(String(c.gio || ''))) x.gio = c.gio;
        var n = Number(c.soNgay); if (Number.isInteger(n) && n >= 1 && n <= 14) x.soNgay = n;
        var p = Number(c.thuLaiPhut); if (Number.isInteger(p) && p >= 5 && p <= 240) x.thuLaiPhut = p;
        if (c.bat === true) { x.tiepTheoLuc = 0; x.soLoiLienTiep = 0; }
      });
      return { ok: true, s: await autoDoc() };
    }
    if (req.type === 'SELLER_AUTO_RUN_NOW') { var kq = await autoChay(true); return Object.assign({ ok: false }, kq); }
    return { ok: false, loi: 'Lệnh không hợp lệ' };
  })().then(tra, function (e) { tra({ ok: false, loi: String(e && e.message || e) }); });
  return true;
});