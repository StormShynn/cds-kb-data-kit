---
name: I_MAINTENANCETASKLISTTP_2
description: "Maintenancetasklisttp 2"
app_component: PM-PRM-TL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-PRM
  - PM-PRM-TL
  - interface-view
  - transactional-processing
  - component:PM-PRM-TL-2CL
  - lob:Plant Maintenance
---
# I_MAINTENANCETASKLISTTP_2

**Maintenancetasklisttp 2**

| Property | Value |
|---|---|
| App Component | `PM-PRM-TL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TaskListType` | ✓ | |  |  |  |  |
| `TaskListGroup` | ✓ | |  |  |  |  |
| `TaskListGroupCounter` | ✓ | |  |  |  |  |
| `BillOfOperationsVersionType` |  | |  |  |  |  |
| `BillOfOperationsSubtype` |  | |  |  |  |  |
| `LastUsageDate` |  | |  |  |  |  |
| `NumberOfUsages` |  | |  |  |  |  |
| `HasChangeNumber` |  | |  |  |  |  |
| `HasParameterEffectivity` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangeTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `RoutingIsReworkRouting` |  | |  |  |  |  |
| `ProdnProcgIsFlexible` |  | |  |  |  |  |
| `_TaskList` | | ✓ | | | | |
| `_NonHistOp` | | ✓ | | | | |
| `_LongText` | | ✓ | | | | |
| `_MaintPackage` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Maintenance Tasklist'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
   sapObjectNodeType:{
   name: 'MaintenanceTaskList'},
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #L,
     dataClass:      #MIXED
   }
 }
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define root view entity I_MaintenanceTaskListTP_2
  provider contract transactional_interface
  as projection on R_MaintenanceTaskListTP as MaintenanceTaskList
{
  key TaskListType,
  key TaskListGroup,
  key TaskListGroupCounter,
      BillOfOperationsVersionType,
      BillOfOperationsSubtype,
      LastUsageDate,
      NumberOfUsages,
      HasChangeNumber,
      HasParameterEffectivity,
      LastChangeDate,
      LastChangeTime,
      LastChangedByUser,
      RoutingIsReworkRouting,
      ProdnProcgIsFlexible,
      @Semantics.valueRange.maximum: '1'
      _TaskList     : redirected to composition child I_MaintenanceTaskListBasicTP,
      _NonHistOp    : redirected to composition child I_MaintTaskListOperationTP_2,
      @Semantics.valueRange.maximum: '1'
      _LongText     : redirected to composition child I_TaskListLongTextTP,
      _MaintPackage : redirected to composition child I_MaintTskListStrgyPackageTP
}
```
