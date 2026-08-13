---
name: D_INSPECTIONLOTCANCELED
description: "D Inspectionlotcanceled"
semantic_vi: "View D_INSPECTIONLOTCANCELED cung cấp dữ liệu về lô kiểm tra đã bị hủy bỏ trong Quản lý Chất lượng. Nó được sử dụng để phân tích và báo cáo về lô kiểm tra bị hủy bỏ."
keywords:
  - "inspection lot"
  - "canceled inspection lot"
  - "quality management"
  - "qm-im-2cl"
  - "plant"
  - "đô kiểm tra"
  - "lô kiểm tra bị hủy bỏ"
  - "quản lý chất lượng"
semantic_en: "The D_INSPECTIONLOTCANCELED view provides data on inspection lots that have been canceled in Quality Management. It is used to analyze and report on canceled inspection lots."
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
# D_INSPECTIONLOTCANCELED

**D Inspectionlotcanceled**

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
define abstract entity D_InspectionLotCanceled {
  Plant : werks_d;
}
```
