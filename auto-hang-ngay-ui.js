'use strict';
var $ = function (id) { return document.getElementById(id); };
var gui = function (m) { return new Promise(function (ok) { chrome.runtime.sendMessage(m, function (r) { ok(chrome.runtime.lastError ? { ok: false, loi: chrome.runtime.lastError.message } : r); }); }); };
var gio = function (ms) { if (!ms) return '—'; var d = new Date(ms); return d.toLocaleString('vi-VN'); };
async function tai() {
  var r = await gui({ type: 'SELLER_AUTO_GET' }); if (!r || !r.ok) { $('tt').textContent = 'Không đọc được trạng thái'; return; }
  var s = r.s;
  if (!window.__daDien) { $('bat').checked = !!s.bat; $('gio').value = s.gio; $('soNgay').value = String(s.soNgay); $('thuLai').value = String(s.thuLaiPhut); window.__daDien = true; }
  var l = s.lanCuoi, h = [];
  h.push(s.bat ? '<span class="ok">ĐANG BẬT</span>' : 'đang tắt');
  h.push('Hôm nay (' + r.homNay + '): ' + (s.lanChayNgay === r.homNay ? '<span class="ok">đã chạy xong</span>' : 'chưa chạy'));
  if (s.dangChay) h.push('🔄 Đang chạy từ ' + gio(s.dangChay.batDau));
  if (s.tiepTheoLuc && s.tiepTheoLuc > Date.now()) h.push('Thử lại lúc ' + gio(s.tiepTheoLuc));
  if (l) h.push('Lần gần nhất (' + gio(l.luc) + '): <b class="' + (l.kq === 'xong' ? 'ok' : 'er') + '">' + l.kq + '</b> — ' + String(l.tomTat || '').replace(/[<>&]/g, ''));
  $('tt').innerHTML = h.join('<br>');
}
$('luu').onclick = async function () {
  var r = await gui({ type: 'SELLER_AUTO_SET', cau: { bat: $('bat').checked, gio: $('gio').value, soNgay: Number($('soNgay').value), thuLaiPhut: Number($('thuLai').value) } });
  $('msg').textContent = r && r.ok ? 'Đã lưu.' : 'Lỗi: ' + ((r && r.loi) || ''); tai();
};
$('chayNgay').onclick = async function () {
  $('msg').textContent = 'Đang chạy… (có thể vài phút, xem Trạng thái)'; $('chayNgay').disabled = true;
  var r = await gui({ type: 'SELLER_AUTO_RUN_NOW' });
  $('msg').textContent = r && r.ok ? 'Xong: ' + (r.tomTat || '') : 'Chưa xong: ' + ((r && (r.loi || r.error)) || ''); $('chayNgay').disabled = false; tai();
};
tai(); setInterval(tai, 5000);