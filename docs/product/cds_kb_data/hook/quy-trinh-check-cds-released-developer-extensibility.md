# Quy trình kiểm tra CDS Entity có được Released cho Developer Extensibility (S/4HANA Cloud) trước khi dùng trong Custom CDS View

Dùng quy trình này **trước khi** viết `association to <Entity>` hoặc `select from <Entity>` tới một CDS Entity chuẩn (`I_*`, `A_*`) trong bất kỳ custom Data Definition (`Z*`/`Y*`) nào ở S/4HANA Cloud Developer Extensibility (ABAP Environment).

## 1. Vấn đề

Lỗi ADT syntax check:
```
The use of CDS Entity <X> is not permitted.
```
xảy ra ngay cả khi entity đó hiển thị "Released" trên SAP API Business Accelerator Hub (api.sap.com). Nguyên nhân: SAP quản lý **nhiều loại "Released"/"Extensible" độc lập nhau** cho cùng một entity — kiểm tra sai loại sẽ dẫn tới kết luận sai.

## 2. Phân biệt các loại "Released"/"Extensible" — không dùng lẫn cho nhau

Với mỗi kiểu extensibility (Key User hay Developer), SAP tách ra **hai câu hỏi hoàn toàn độc lập**, dễ nhầm với nhau:

- **"Release State"** — entity này có dùng được làm **data source** khi build một custom CDS view / custom view MỚI không?
- **"Extensible"** — có thể gắn **custom field** trực tiếp vào CHÍNH entity này không (khác hẳn câu hỏi trên)?

| Loại | Kiểm tra ở đâu | Ý nghĩa | Đảm bảo dùng được trong Developer Extensibility? |
|---|---|---|---|
| Released API (OData/Business API) | api.sap.com — API Business Accelerator Hub | API/Service được phép tích hợp ra hệ thống ngoài | **Không** — không liên quan đến việc dùng trong CDS DDL |
| Release State (Key User Extensibility) | App "Custom CDS Views" (Fiori) khi chọn data source | Entity dùng được làm data source cho custom view kiểu no-code/low-code | **Không** — whitelist riêng, layer khác |
| Release State (Developer Extensibility) | ADT compiler khi activate; content-assist khi gõ `association to` / `select from`; hoặc field `ReleaseStateDeveloperExtensibility` qua SAP API Hub OData (`CdsViewsContent.CdsViews`, **không phải** badge hiển thị trên UI Hub) — xem mục 3, bước 0 | Entity được phép dùng trực tiếp làm data source trong custom CDS DDL viết bằng ABAP | **Đây là loại cần kiểm tra** — nếu không có ở đây, activate sẽ lỗi |
| Extensible (Key User Extensibility) | Field `ExtensibleWithKeyUserExtensibility` qua cùng Hub OData | Có thể gắn custom field trực tiếp vào CHÍNH entity này qua Key User Extensibility (câu hỏi khác hẳn "dùng làm data source" ở trên) | Không liên quan trực tiếp đến việc `association to`, nhưng liên quan nếu bạn cần custom field trên chính entity chuẩn đó |
| Extensible (Developer Extensibility) | Field `ExtensibleWithDeveloperExtensibility` qua cùng Hub OData | Có thể gắn custom field trực tiếp vào CHÍNH entity này qua ABAP Developer Extensibility | Không liên quan trực tiếp đến việc `association to`, nhưng liên quan nếu bạn cần custom field trên chính entity chuẩn đó |

Năm dòng trên hoàn toàn tách biệt — một entity có thể "released" ở dòng này nhưng **không** ở dòng khác, theo mọi tổ hợp.

**Cập nhật 2026-08-12:** api.sap.com thực ra lộ ra **hai thứ khác nhau**, dễ nhầm với nhau:

- Badge "Released" hiển thị trên trang Hub cho người đọc, ứng với field `State` (dòng "Released API") — **vẫn không đáng tin** cho các dòng Developer/Key User Extensibility, xem điểm 4 ở mục 3.
- Các field riêng `ReleaseStateDeveloperExtensibility`, `ReleaseStateKeyUserExtensibility`, `ExtensibleWithKeyUserExtensibility`, `ExtensibleWithDeveloperExtensibility` — chỉ lấy được qua OData `CdsViewsContent.CdsViews` (không hiển thị badge nào tương ứng trên UI Hub). Bốn field này ứng đúng 1:1 với 4 dòng cuối trong bảng trên. KB `cds_kb_mcp` đã fetch cả bốn và lưu thành `dev_ext_status` / `key_user_ext_status` / `extensible_key_user` / `extensible_dev_ext` (frontmatter mỗi view) — coi là **SAP-confirmed** cho các câu hỏi tương ứng (xem `scripts/lib/hub-extensibility.mjs`, `server.mjs` hàm `releaseSignalWarnings`).
- *(Chưa verify độc lập trong tài liệu này)* Chưa có lần đối chiếu trực tiếp các field này với kết quả activate ADT thật để xác nhận luôn khớp 100%. Vì vậy bước 0 ở mục 3 chỉ là pre-filter nhanh, không thay thế bước 1/2 khi cần độ tin cậy tuyệt đối — đặc biệt với hai field `Extensible*` vì tài liệu này chưa từng verify chúng bằng thực nghiệm ADT (chỉ mới lấy từ Hub, chưa ai thử gắn custom field thật để đối chiếu).

## 3. Cách kiểm tra đúng — ưu tiên theo độ tin cậy

0. **Nhanh nhất, làm trước để lọc sớm (không phải kết luận cuối cùng):** tra `dev_ext_status` / `key_user_ext_status` / `extensible_key_user` / `extensible_dev_ext` qua `cds-kb-mcp` (`get_cds_view`, hoặc filter tương ứng trên `search_cds`/`suggest_base_views`) hoặc đọc trực tiếp frontmatter của view trong `views/**/*.md`.
   - `not_released` (cho `dev_ext_status`/`key_user_ext_status`) → coi là chặn, không cần thử ADT nữa (SAP-confirmed qua field Hub tương ứng).
   - `released`/`yes` → khả năng dùng được cao; nếu là dependency quan trọng của một custom view sẽ build/ship, vẫn nên xác nhận lại bằng bước 1/2 trước khi chốt (các field này chưa được đối chiếu thực nghiệm với ADT compiler thật).
   - `unknown`/không có field trong KB (Hub chưa có record) → bỏ qua bước này, làm thẳng bước 1/2.
1. **Đáng tin nhất — để ADT compiler tự xác nhận:** viết thử `association to <Entity>` / `select from <Entity>`, activate (Ctrl+F3). Nếu ra đúng lỗi "The use of CDS Entity X is not permitted" → chắc chắn KHÔNG released cho Developer Extensibility, bất kể badge/field ở đâu khác nói gì khác.
2. **Content-assist trong ADT:** gõ `association to ` hoặc `select from `, nhấn Ctrl+Space — danh sách gợi ý chỉ hiện các entity **được whitelist cho layer hiện tại (Developer Extensibility)**. Entity không xuất hiện trong list = không released cho context này.
3. *(Chưa tự verify được cách này trên hệ thống thật — khuyến nghị đối chiếu thêm)* Right-click entity trong ADT Project Explorer, tìm icon/label "Release State" nếu phiên bản ADT hỗ trợ hiển thị; so sánh với một entity đã biết chắc dùng được (ví dụ entity đang hoạt động tốt trong project hiện tại) để đối chiếu icon.
4. **Tuyệt đối không dùng làm bằng chứng cho các dòng Extensibility:** badge "Released" hiển thị trên trang Hub (api.sap.com), tức field `State`/"Released API". Badge này chỉ nói lên khả năng tích hợp external (OData/API), không nói lên khả năng dùng trong ABAP CDS custom view hay khả năng gắn custom field. **Không nhầm với** các field `ReleaseState*`/`Extensible*` ở bước 0 — khác field, một cái không đáng tin cho các câu hỏi extensibility, một cái là chính tín hiệu của các câu hỏi đó.

## 4. Khi phát hiện entity KHÔNG released cho Developer Extensibility

| Tình huống | Hướng xử lý |
|---|---|
| Chỉ cần field khóa (key fields), không cần toàn bộ master data của entity đó | Lấy key field từ một entity liên quan đã released (ví dụ lấy `BankNumber`/`BankCountryKey` từ `I_BusinessPartnerBank` thay vì join sang `I_Bank`), bỏ association tới entity chưa released. |
| Cần hiển thị thêm thông tin mô tả (tên, địa chỉ...) cho end-user | Gắn `@Consumption.valueHelpDefinition` trên field khóa, trỏ tới một CDS Value-Help view khác **đã released riêng** (nhiều view "VH" được release độc lập với view gốc — kiểm tra qua content-assist ở bước 3.2 để tìm view VH nào released). |
| Bắt buộc phải join server-side dữ liệu từ entity chưa released | Submit yêu cầu SAP release qua SAP for Me / Customer Influence; hoặc chuyển logic join sang tầng ứng dụng, gọi OData API đã released tương đương (không qua CDS association). |
| Cần gắn custom field lên CHÍNH entity chuẩn đó nhưng `extensible_key_user`/`extensible_dev_ext` = `no` | SAP không cho extend entity đó trực tiếp — cân nhắc lưu field bổ sung ở entity tùy biến riêng (Z table/CDS) và join thủ công ở tầng ứng dụng, hoặc submit yêu cầu SAP qua Customer Influence. |

## 5. Checklist nhanh (áp dụng lại cho mọi CDS view khác)

- [ ] Xác định entity chuẩn (`I_*`/`A_*`) cần dùng trong custom CDS view
- [ ] Xác định rõ đang cần trả lời câu hỏi nào: dùng entity làm **data source** (Release State) hay gắn **custom field** lên chính entity đó (Extensible) — hai câu hỏi khác nhau, xem mục 2
- [ ] Tra field tương ứng trong KB (`cds-kb-mcp`, hoặc frontmatter view) trước — nếu `not_released`/`no` thì coi như chặn, chuyển thẳng sang mục 4; nếu `released`/`yes`/`unknown` thì tiếp tục các bước dưới để xác nhận
- [ ] KHÔNG kết luận "released cho Developer Extensibility" chỉ dựa trên badge chung của api.sap.com (field `State`) — các field riêng `ReleaseState*`/`Extensible*` (lưu thành `dev_ext_status`/`key_user_ext_status`/`extensible_key_user`/`extensible_dev_ext`) mới là tín hiệu đúng, xem mục 2
- [ ] Test bằng content-assist (Ctrl+Space) trong ADT khi viết `association to` / `select from`
- [ ] Nếu không chắc, activate thử để compiler xác nhận (lỗi "not permitted" = chưa released cho layer này)
- [ ] Nếu không released/extensible → áp dụng 1 trong các hướng ở mục 4
- [ ] Ghi lại kết quả kiểm tra (entity nào released / chưa released, extensible hay không) để tái sử dụng cho các view khác dùng cùng entity này, tránh phải test lại từ đầu

## 6. Số liệu tham khảo (snapshot KB, đếm trực tiếp từ frontmatter 10.617 view, 2026-08-12)

| Field | `released`/`yes` | `not_released`/`no` | Không có record trên Hub |
|---|---|---|---|
| `dev_ext_status` | 5.995 | 2.705 | 1.917 |
| `key_user_ext_status`, `extensible_key_user`, `extensible_dev_ext` | (xem coverage-report.html / search_cds filter — số liệu 3 field này biến động theo lần fetch Hub gần nhất) | | 1.917 |

Trong 10.532 view có `release_state: released` (badge chung, "Released API"), có **2.705 view** đồng thời `dev_ext_status: not_released` — đây là ví dụ thực tế cho đúng cái trap ở mục 1: `release_state` "released" không đảm bảo dùng được trong Developer Extensibility. Module có tỷ lệ trap cao: LO, FIN, FS, IS, FI. [Unverified] Số liệu này chỉ phản ánh những gì Hub trả về tại thời điểm backfill (`scripts/backfill-dev-ext-status.mjs`, `scripts/backfill-extensibility-signals.mjs`), chưa được đối chiếu lại với ADT compiler thật.
