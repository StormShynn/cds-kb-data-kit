---
name: D_TRANSPORDEXECUTIONSTSBFR
description: "D Transpordexecutionstsbfr"
semantic_vi: "View D_TRANSPORDEXECUTIONSTSBFR hiển thị dữ liệu trạng thái thực hiện vận chuyển, có thể được sử dụng để theo dõi trạng thái đơn hàng vận chuyển."
keywords:
  - "transportation execution status"
  - "trạng thái thực hiện vận chuyển"
  - "transportation order"
  - "đơn hàng vận chuyển"
  - "sap tm"
  - "tm frm"
  - "tm frm 2cl"
  - "transportation management"
  - "quản lý vận tải"
semantic_en: "The D_TRANSPORDEXECUTIONSTSBFR view exposes transportation execution status data, which can be used to track the status of transportation orders."
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
# D_TRANSPORDEXECUTIONSTSBFR

**D Transpordexecutionstsbfr**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationOrderExecSts` |  | |  | `/scmtms/tor_execution_status` |  |  |
| `_DummyAssociation` | | ✓ | | | | |

## Source Code

```abap
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_TranspOrdExecutionStsBfr
{
  TransportationOrderExecSts : /scmtms/tor_execution_status;
  _DummyAssociation           : association to parent D_TranspOrdExecutionStsChgd;
}
```
