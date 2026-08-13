---
name: D_TRANSPORDGOODSMVTSTSBFR
description: "D Transpordgoodsmvtstsbfr"
semantic_vi: "View D_Transpordgoodsmvtstsbfr hiển thị dữ liệu trạng thái di chuyển hàng hóa trong đơn hàng vận chuyển, thường được sử dụng khi theo dõi trạng thái di chuyển hàng hóa trong đơn hàng vận chuyển."
keywords:
  - "transport order"
  - "đơn hàng vận chuyển"
  - "goods movement"
  - "trạng thái di chuyển hàng hóa"
  - "sap tm"
  - "tm-frm-2cl"
  - "ekko"
  - "transport order goods movement status"
semantic_en: "The D_Transpordgoodsmvtstsbfr view exposes transport order goods movement status data, typically used when tracking the status of goods movements in transport orders."
app_component: TM-FRM-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRM
  - component:TM-FRM-2CL
  - lob:Other
---
# D_TRANSPORDGOODSMVTSTSBFR

**D Transpordgoodsmvtstsbfr**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdGoodsMovementStatus` |  | |  | `/scmtms/dlv_goods_movem_status` |  |  |
| `_DummyAssociation` | | ✓ | | | | |

## Source Code

```abap
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_TranspOrdGoodsMvtStsBfr
{
  TranspOrdGoodsMovementStatus : /scmtms/dlv_goods_movem_status;
  _DummyAssociation            : association to parent D_TranspOrdGoodsMvtStsChgd;
}
```
