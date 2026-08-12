# Quy trình kiểm tra CDS Entity có được Released cho Developer Extensibility (S/4HANA Cloud) trước khi dùng trong Custom CDS View

Dùng quy trình này **trước khi** viết `association to <Entity>` hoặc `select from <Entity>` tới một CDS Entity chuẩn (`I_*`, `A_*`) trong bất kỳ custom Data Definition (`Z*`/`Y*`) nào ở S/4HANA Cloud Developer Extensibility (ABAP Environment).

## 1. Vấn đề

Lỗi ADT syntax check:
```
The use of CDS Entity <X> is not permitted.
```
xảy ra ngay cả khi entity đó hiển thị "Released" trên SAP API Business Accelerator Hub (api.sap.com). Nguyên nhân: SAP quản lý **nhiều loại "Released" độc lập nhau** cho cùng một entity — kiểm tra sai loại sẽ dẫn tới kết luận sai.

## 2. Phân biệt các loại "Released" — không dùng lẫn cho nhau

| Loại Released | Kiểm tra ở đâu | Ý nghĩa | Có đảm bảo dùng được trong Developer Extensibility? |
|---|---|---|---|
| Released API (OData/Business API) | api.sap.com — API Business Accelerator Hub | API/Service được phép tích hợp ra hệ thống ngoài | **Không** — không liên quan đến việc dùng trong CDS DDL |
| Released for Key User Extensibility | App "Custom CDS Views" (Fiori) khi chọn data source | Entity dùng được cho custom view kiểu no-code/low-code | **Không** — whitelist riêng, layer khác |
| Released for Developer Extensibility (ABAP Environment) | ADT compiler khi activate; hoặc content-assist khi gõ `association to` / `select from` | Entity được phép dùng trực tiếp trong custom CDS DDL viết bằng ABAP | **Đây là loại cần kiểm tra** — nếu không có ở đây, activate sẽ lỗi |

Ba loại trên hoàn toàn tách biệt. Một entity có thể released ở loại 1–2 nhưng **không** released ở loại 3, hoặc ngược lại.

## 3. Cách kiểm tra đúng — ưu tiên theo độ tin cậy

1. **Đáng tin nhất — để ADT compiler tự xác nhận:** viết thử `association to <Entity>` / `select from <Entity>`, activate (Ctrl+F3). Nếu ra đúng lỗi "The use of CDS Entity X is not permitted" → chắc chắn KHÔNG released cho Developer Extensibility, bất kể badge ở đâu khác nói gì khác.
2. **Content-assist trong ADT:** gõ `association to ` hoặc `select from `, nhấn Ctrl+Space — danh sách gợi ý chỉ hiện các entity **được whitelist cho layer hiện tại (Developer Extensibility)**. Entity không xuất hiện trong list = không released cho context này.
3. *(Chưa tự verify được cách này trên hệ thống thật — khuyến nghị đối chiếu thêm)* Right-click entity trong ADT Project Explorer, tìm icon/label "Release State" nếu phiên bản ADT hỗ trợ hiển thị; so sánh với một entity đã biết chắc dùng được (ví dụ entity đang hoạt động tốt trong project hiện tại) để đối chiếu icon.
4. **Tuyệt đối không dùng làm bằng chứng:** badge "Released" trên api.sap.com. Badge này chỉ nói lên khả năng tích hợp external (OData/API), không nói lên khả năng dùng trong ABAP CDS custom view.

## 4. Khi phát hiện entity KHÔNG released cho Developer Extensibility

| Tình huống | Hướng xử lý |
|---|---|
| Chỉ cần field khóa (key fields), không cần toàn bộ master data của entity đó | Lấy key field từ một entity liên quan đã released (ví dụ lấy `BankNumber`/`BankCountryKey` từ `I_BusinessPartnerBank` thay vì join sang `I_Bank`), bỏ association tới entity chưa released. |
| Cần hiển thị thêm thông tin mô tả (tên, địa chỉ...) cho end-user | Gắn `@Consumption.valueHelpDefinition` trên field khóa, trỏ tới một CDS Value-Help view khác **đã released riêng** (nhiều view "VH" được release độc lập với view gốc — kiểm tra qua content-assist ở bước 3.2 để tìm view VH nào released). |
| Bắt buộc phải join server-side dữ liệu từ entity chưa released | Submit yêu cầu SAP release qua SAP for Me / Customer Influence; hoặc chuyển logic join sang tầng ứng dụng, gọi OData API đã released tương đương (không qua CDS association). |

## 5. Checklist nhanh (áp dụng lại cho mọi CDS view khác)

- [ ] Xác định entity chuẩn (`I_*`/`A_*`) cần dùng trong custom CDS view
- [ ] KHÔNG kết luận "released" chỉ dựa trên api.sap.com
- [ ] Test bằng content-assist (Ctrl+Space) trong ADT khi viết `association to` / `select from`
- [ ] Nếu không chắc, activate thử để compiler xác nhận (lỗi "not permitted" = chưa released cho layer này)
- [ ] Nếu không released → áp dụng 1 trong 3 hướng ở mục 4
- [ ] Ghi lại kết quả kiểm tra (entity nào released / chưa released) để tái sử dụng cho các view khác dùng cùng entity này, tránh phải test lại từ đầu
