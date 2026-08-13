---
name: D_BILLGDOCCRTEFRMBILLGDOCREFIP
description: "D Billgdoccrtefrmbillgdocrefip"
semantic_vi: "Chỉ ra các mục tham chiếu hóa đơn thanh toán cho các phiếu giảm giá được tạo từ hóa đơn bán hàng. Sử dụng để truy cập và chỉnh sửa các mục này trong quá trình phân phối và bán hàng."
keywords:
  - "reference billing document"
  - "credit memo"
  - "billing document"
  - "sales and distribution"
  - "đơn thanh toán tham chiếu"
  - "phiếu giảm giá"
  - "hóa đơn bán hàng"
  - "phân phối và bán hàng"
semantic_en: "Exposes reference billing document items for credit memos created from billing documents. Used to access and manipulate these items in sales and distribution processes."
app_component: SD-BIL-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - component:SD-BIL-2CL
  - lob:Sales & Distribution
---
# D_BILLGDOCCRTEFRMBILLGDOCREFIP

**D Billgdoccrtefrmbillgdocrefip**

| Property | Value |
|---|---|
| App Component | `SD-BIL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ReferenceBillingDocument` |  | |  | `vbeln_vf` |  |  |
| `D_BlgDcCrteFrmBillgDocRefItmIP` |  | |  | `_Item : composition [0..*] of D_BlgDcCrteFrmBillgDocRefItmIP` |  |  |
| `_DummyAssociation` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Bill Doc Create from Bill Doc Ref Parameter'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_BillgDocCrteFrmBillgDocRefIP
{
      ReferenceBillingDocument   : vbeln_vf;

      _Item               : composition [0..*] of D_BlgDcCrteFrmBillgDocRefItmIP;
      _DummyAssociation   : association to parent D_BillgDocCrteFrmBillgDocIP;
}
```
