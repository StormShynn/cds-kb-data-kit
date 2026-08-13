---
name: D_INSPECTIONLOTCHANGED
description: "D Inspectionlotchanged"
semantic_vi: "View D_INSPECTIONLOTCHANGED hiển thị dữ liệu thay đổi lô kiểm tra, có thể sử dụng khi phân tích thay đổi lô kiểm tra trong quản lý chất lượng."
keywords:
  - "inspection"
  - "lot"
  - "change"
  - "quality management"
  - "qm"
  - "inspection lot"
  - "d_inspectionlotchanged"
  - "thay đổi lô kiểm tra"
  - "quản lý chất lượng"
semantic_en: "The D_INSPECTIONLOTCHANGED CDS view exposes inspection lot change data, which is useful when analyzing changes to inspection lots in quality management."
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-IM
  - inspection
  - component:QM-IM-2CL
  - lob:Quality Management
---
# D_INSPECTIONLOTCHANGED

**D Inspectionlotchanged**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Plant` |  | |  | `werks_d` |  |  |

## Source Code

```abap
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.sapObjectNodeType.name : 'InspectionLot'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions: true
define abstract entity D_InspectionLotChanged {
      Plant : werks_d;
}
```
