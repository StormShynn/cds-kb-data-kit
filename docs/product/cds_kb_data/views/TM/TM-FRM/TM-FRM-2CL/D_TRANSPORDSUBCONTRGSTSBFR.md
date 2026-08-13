---
name: D_TRANSPORDSUBCONTRGSTSBFR
description: "D Transpordsubcontrgstsbfr"
semantic_vi: "View D_TRANSPORDSUBCONTRGSTSBFR hiển thị dữ liệu trạng thái nhà thầu phụ vận tải, có liên quan khi quản lý đơn hàng vận tải và mối quan hệ nhà thầu phụ."
keywords:
  - "transportation"
  - "subcontractor"
  - "status"
  - "transport order"
  - "đơn vận tải"
  - "nhà thầu phụ"
  - "trạng thái"
  - "tm-frm"
  - "tm"
semantic_en: "The D_TRANSPORDSUBCONTRGSTSBFR view exposes transportation subcontractor status data, which is relevant when managing transportation orders and subcontractor relationships."
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
# D_TRANSPORDSUBCONTRGSTSBFR

**D Transpordsubcontrgstsbfr**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrderSubcontrgSts` |  | |  | `/scmtms/tor_subcontr_status` |  |  |
| `_DummyAssociation` | | ✓ | | | | |

## Source Code

```abap
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_TranspOrdSubcontrgStsBfr
{
  TranspOrderSubcontrgSts : /scmtms/tor_subcontr_status;
  _DummyAssociation       : association to parent D_TranspOrdSubcontrgStsChgd;
}
```
