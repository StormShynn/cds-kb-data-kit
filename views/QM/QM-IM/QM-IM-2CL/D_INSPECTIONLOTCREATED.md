---
name: D_INSPECTIONLOTCREATED
description: D Inspectionlotcreated
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
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
