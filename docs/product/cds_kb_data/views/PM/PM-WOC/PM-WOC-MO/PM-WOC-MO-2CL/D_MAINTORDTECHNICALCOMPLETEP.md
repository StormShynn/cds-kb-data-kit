---
name: D_MAINTORDTECHNICALCOMPLETEP
description: "D Maintordtechnicalcompletep"
semantic_vi: "View này hiển thị dữ liệu kỹ thuật hoàn chỉnh của đơn bảo trì, được sử dụng để theo dõi trạng thái của đơn bảo trì từ khi tạo đến khi hoàn thành."
keywords:
  - "maintenance order"
  - "đơn bảo trì"
  - "technical data"
  - "data"
  - "pm"
  - "plant maintenance"
  - "pm-woc"
  - "pm-woc-mo"
  - "component pm-woc-mo-2cl"
  - "lob plant maintenance"
semantic_en: "This view exposes complete maintenance order technical data, which is used to track the status of maintenance orders from creation to completion."
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MO
  - component:PM-WOC-MO-2CL
  - lob:Plant Maintenance
---
# D_MAINTORDTECHNICALCOMPLETEP

**D Maintordtechnicalcompletep**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MainWrkCmpltdDateTimeIsUsed` |  | |  | `abap_boolean` |  |  |
| `MaintOrderReferenceDateTime` |  | |  | `timestamp` |  |  |
| `AssignedMaintNotifIsToBeClosed` |  | |  | `abap_boolean` |  |  |

## Source Code

```abap
@EndUserText.label: 'MaintOrder TechCompleted Parameters'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]

define root abstract entity D_MaintOrdTechnicalCompleteP
{
  @EndUserText.label             : 'Use Main Work Completed Date and Time'
  MainWrkCmpltdDateTimeIsUsed    : abap_boolean;
  @EndUserText.label             : 'Completion Date/Time'
  //@ObjectModel.mandatory         : true //incompatable changes for public API
  MaintOrderReferenceDateTime    : timestamp;
  @EndUserText.label             : 'Complete Assigned Notifications'
  AssignedMaintNotifIsToBeClosed : abap_boolean;

}
```
