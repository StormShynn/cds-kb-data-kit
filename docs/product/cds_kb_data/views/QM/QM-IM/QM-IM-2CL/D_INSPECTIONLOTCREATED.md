---
name: D_INSPECTIONLOTCREATED
description: "D Inspectionlotcreated"
semantic_vi: "View D_INSPECTIONLOTCREATED hiển thị dữ liệu tạo lô kiểm tra, có liên quan khi theo dõi việc tạo lô kiểm tra trong quy trình quản lý chất lượng."
keywords:
  - "inspection"
  - "lot"
  - "creation"
  - "quality management"
  - "qm"
  - "inspection lot"
  - "plant"
  - "business object"
  - "sap business object type"
  - "business object item"
semantic_en: "The D_INSPECTIONLOTCREATED view exposes inspection lot creation data, which is relevant when tracking the creation of inspection lots in quality management processes."
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
# D_INSPECTIONLOTCREATED

**D Inspectionlotcreated**

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
| `BusinessObject` |  | |  | `poc_bo_id` |  |  |
| `SAPBusinessObjectType` |  | |  | `poc_bo_type` |  |  |
| `BusinessObjectItem` |  | |  | `poc_item_id` |  |  |

## Source Code

```abap
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.sapObjectNodeType.name : 'InspectionLot'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions: true
define abstract entity D_InspectionLotCreated {
  Plant : werks_d;    
  BusinessObject : poc_bo_id;
  SAPBusinessObjectType : poc_bo_type;
  BusinessObjectItem : poc_item_id;
}
```
