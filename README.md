# Seller Center Scraper Extension

Chrome extension noi bo de chay API backfill ngay trong tab
`seller-vn.tiktok.com` da dang nhap.

## Cai dat / reload

1. Mo Chrome -> `chrome://extensions`.
2. Bat **Developer mode**.
3. Chon **Load unpacked** neu cai moi, hoac bam reload tren card extension neu da cai.
4. Thu muc extension:

   `D:\CODEX\TOOL\SP TIKTOK\seller-scraper-handoff\extension`

5. Mo hoac reload tab Seller Center da dang nhap.
6. Bam icon **Seller Scraper** tren thanh extension. Extension se mo Chrome Side Panel
   ben phai va khong bi mat khi click ra ngoai trang.

## Presets

- **Run Market**: lay tong toan san theo window dang chon, mac dinh 14 ngay.
- **Run L1 Scan**: lay rieng 30 L1 theo window dang chon, khong kem `Tat ca`. CamHung lay `Doanh thu cao`; TopSelling lay tat ca tab hien co.
- **Run L2 Scan**: lay toan bo TopSelling theo tung L2 trong `core/config.js`; preset nay tu dong bo qua CamHung.
- **Deep Scan Multi-Category**: chon nhieu L1/L2/L3 trong bo chon 3 cot. Co the gop
  tat ca lua chon vao mot filter nhu Seller, tach tung nganh da chon, mo rong ra tung
  L1/L2/L3, hoac chay Market + L1 + L2 + L3.
- **Daily Queue**: van dung dung cac preset cu `market`, `l1-scan` va tung
  `deep-scan L1 -> all_l2`; thay doi Deep Scan moi khong thay doi queue hang ngay.

L1, L2 va L3 da duoc bundle san trong `core/config.js`, nen Deep Scan khong can
quet lai cay nganh tren UI Seller. Cay bundle giu lai cac L1/L2 da xac nhan va bo
sung 1.884 L3 tu file
`tiktok_category_tree_vn_full.json` (nguon Get Categories, ngay 2026-08-06).

Cap nhat lai L3 bundle tu file nguon:

```powershell
node scripts/sync_category_tree_vn.js "D:\CLAUDE\solo-company\02-engines\affiliate\tiktok_category_tree_vn_full.json"
```

Endpoint TopSelling hien chi nhan ba mang filter `lv1_cate_ids`, `lv2_cate_ids`,
`lv3_cate_ids`. File nguon co them 361 node L4, 149 node L5 va 2 node L6, nhung
khong co `lv4/lv5/lv6_cate_ids` trong request cua Seller. Vi vay UI chi cho dao
den L3 de tranh hien mot lua chon ma API khong loc that. L4-L6 chi nen dung lam
taxonomy enrichment neu mot endpoint chi tiet san pham sau nay tra duoc category ID.

## Export

CSV export tu dong dat ten theo preset/scope/category/range, vi du:

`seller_vn__topselling__l1-scan__l1-only__all-tabs__2026-06-03_to_2026-06-16.csv`

Neu tab `Video` co `creator_recap`, extension se export them mot bang snapshot rieng:

`seller_vn__topselling-video-detail__...csv`

Bang nay la danh sach cac video/creator gan voi san pham trong ngay do. Khong dung bang nay de cong GMV hay dem san pham; moi phep tinh quy mo van phai lay tu bang `topselling` chinh.

TopSelling CSV cung xuat link media san co trong API, khong tu tai file anh:

- Anh san pham: URL uu tien, thumbnail, va toan bo CDN URL.
- Anh/logo shop: URL uu tien, thumbnail, va toan bo CDN URL.
- Avatar creator: URL uu tien theo thu tu creator va JSON giu nguyen tung danh sach CDN.
- Bang video detail: anh san pham, avatar creator, va `video_cover_url`.

Nhieu URL trong mot `url_list` co the la CDN mirror cua cung mot anh, khong phai nhieu anh san pham khac nhau.

Tuong thich file cu duoc giu nguyen: tat ca cot TopSelling va video-detail cu van
giu dung thu tu; cac cot URL anh va metadata lua chon moi chi duoc noi vao cuoi CSV.
CSV CamHung/Daily Queue khong bi bot cot hay bot nguon du lieu.

Moi row co metadata scope:

`source`, `preset`, `category_scope`, `root_*`, `target_*`, `l1_*`, `l2_*`,
`l3_*`, `tab`, `rank_type`.

## CamHung media / transcript

Side panel co khu rieng `Tai video Cam hung`.

- `Pham vi L1 = Tat ca`: lay 50 video market cua `data_date` trong range.
- `Pham vi L1 = 1 L1`: lay 50 video cua L1 do trong `data_date` trong range.
- `Output = Video only`: tai `.mp4` thang vao Downloads.
- `Output = Transcript only`: tai MP4 tam vao `Downloads/_temp_media/transcript_only/`, helper STT se tao `.txt` + `.json` roi xoa temp.
- `Output = Transcript + hook frames`: tai MP4 tam vao `Downloads/_temp_media/transcript_hook_frames/`, helper STT se tao `.txt` + `.json` + 3 frame dau roi xoa temp.

Moi batch download se sinh them 1 file manifest CSV:

`seller_vn__camhung-media-manifest__{scope}__{mode}__{range}.csv`

Manifest nay la hop dong du lieu de AI khac / may khac doc tiep.

Local helper transcript:

```powershell
scripts\start_local_helper.cmd
```

Neu helper dang chay, extension se tu ping helper sau khi queue transcript mode.

Tai lieu schema va workflow:

- `docs/camhung-media-manifest-schema.md`
- `docs/camhung-media-pipeline-workflow.md`

Phan loai transcript moi nhat:

```powershell
scripts\classify_latest_camhung.cmd
```

## Test an toan

1. Chon window `1d`.
2. Chay **Run Market** neu can toan san, **Run L1 Scan** neu can tung L1, hoac **Run L2 Scan** neu can quet toan bo L2 sau khi da doi window.
3. Kiem tra log `Done`.
4. Bam **Export All**.
5. Parse CSV bang PowerShell `Import-Csv` de kiem tra so dong va cot scope.

## CAPTCHA / xac minh Seller

Neu Seller bat CAPTCHA hoac xac minh bao mat trong luc chay, extension se tam dung
ngay tai request dang loi thay vi bo qua hang loat scope. Hoan tat CAPTCHA bang tay
tren tab Seller; extension tu thu lai moi 5 giay va tiep tuc dung scope dang do.

- Thoi gian cho toi da: 10 phut.
- Neu het thoi gian, Daily Queue dung tai muc hien tai va khong chay tiep cac muc
  con lai. Giai CAPTCHA xong thi bam chay lai hang doi.
- Log `Da bo qua` luon kem thong bao loi API that de chan doan, khong chi hien
  `No rows to export`.

## Deep Scan Multi-Category

1. Tick bat ky L1/L2/L3; tick hoac bam vao ten L1/L2 se mo ngay cot con tuong ung.
2. Chon che do dao. `Gop lua chon nhu Seller` tao mot request filter gom nhieu
   ID; cac che do `Tach` tao mot scope rieng cho tung nganh.
3. Xem uoc tinh scope/request. Job lon hon 200 scope hoac 5.000 request se hoi
   xac nhan truoc khi chay.
4. Bam **Run Deep Scan**, sau do export CSV nhu binh thuong.

Lua chon va che do duoc luu trong `chrome.storage.local`. Cac cong cu quet cay cu
van con trong code de tuong thich nguoc, nhung da an khoi UI vi cay bundle hien tai
la nguon chuan.

## Kien truc

- `manifest.json`: quyen extension.
- `content.js`: cau noi trong tab Seller Center, stop/export.
- `core/config.js`: endpoint, L1 catalog, category tree, preset config.
- `core/scraper-core.js`: fetch, category scope, pagination, normalize, CSV.
- `popup/`: UI presets/deep scan/export.
