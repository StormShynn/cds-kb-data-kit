---
name: D_TRANSPORDBLOCKSTSBFR
description: "D Transpordblockstsbfr"
semantic_vi: "View D_TRANSPORDBLOCKSTSBFR hiển thị dữ liệu trạng thái khối vận chuyển cho đơn hàng vận chuyển, có thể được sử dụng để xác định trạng thái thực hiện của đơn hàng vận chuyển."
keywords:
  - "transportation order"
  - "đơn hàng vận chuyển"
  - "transport block status"
  - "trạng thái khối vận chuyển"
  - "sap tm"
  - "tm-frm-2cl"
  - "sap cds view"
semantic_en: "The D_TRANSPORDBLOCKSTSBFR view exposes transport block status data for transportation orders, which can be used to determine the execution status of transportation orders."
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
# D_TRANSPORDBLOCKSTSBFR

**D Transpordblockstsbfr**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdExecutionIsBlocked` |  | |  | `/scmtms/block_execution` |  |  |
| `_DummyAssociation` | | ✓ | | | | |

## Source Code

```abap
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_TranspOrdBlockStsBfr
{
  TranspOrdExecutionIsBlocked : /scmtms/block_execution;
  _DummyAssociation        : association to parent D_TranspOrdBlockStsChgd;
}
```
