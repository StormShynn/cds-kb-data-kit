---
name: D_MAINTORDERSTSDONOTEXECUTEP
description: "D Maintorderstsdonotexecutep"
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
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
