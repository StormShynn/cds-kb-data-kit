---
name: D_MAINTORDERSTSDONOTEXECUTEP
description: "D Maintorderstsdonotexecutep"
semantic_vi: "View này hiển thị các hành động hủy đơn bảo trì và thông báo không được thực hiện, thường được sử dụng để lọc ra dữ liệu không mong muốn hoặc đã lỗi thời trong quản lý đơn bảo trì."
keywords:
  - "maintenance order"
  - "đơn bảo trì"
  - "cancellation action"
  - "hành động hủy"
  - "notification"
  - "thông báo"
  - "pm"
  - "pm-woc"
  - "pm-woc-mo"
  - "note"
  - "plant maintenance"
semantic_en: "This view exposes maintenance order cancellation actions and notifications that should not be executed, typically used to filter out unwanted or obsolete data in maintenance order management."
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
  - note
  - component:PM-WOC-MO-2CL
  - lob:Plant Maintenance
---
# D_MAINTORDERSTSDONOTEXECUTEP

**D Maintorderstsdonotexecutep**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintOrderReferenceDateTime` |  | |  | `timestamp` |  |  |
| `MaintOrdCancellationAction` |  | |  | `maintordcancellationaction` |  |  |
| `AssignedMaintNotifIsToBeClosed` |  | |  | `abap_boolean` |  |  |
| `AssgdMaintNotifIsToBeRsetAlloc` |  | |  | `abap_boolean` |  |  |

## Source Code

```abap
@EndUserText.label: 'Maintenance Order SetDoNotExe Parameters'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]

define abstract entity D_MaintOrderStsDoNotExecuteP
{


  @EndUserText.label: 'Reference Date/Time'
  MaintOrderReferenceDateTime : timestamp;
  @Consumption.valueHelpDefinition: [{entity: {name : 'I_MaintOrdCancellationAction' ,
  element: 'MaintOrdCancellationAction'} }]
  @EndUserText.label: 'What should happen to assigned notifications'
  MaintOrdCancellationAction : maintordcancellationaction; //new common parameter, it is prioritized
  
  @EndUserText.label             : 'Complete All Assigned Notifications'
  AssignedMaintNotifIsToBeClosed : abap_boolean; //depricated due to MaintOrdCancellationAction, but still valid for public API
  @EndUserText.label             : 'Complete Header Notification and Unassign Others'
  AssgdMaintNotifIsToBeRsetAlloc : abap_boolean; //depricated due to MaintOrdCancellationAction, but still valid for public API

}
```
