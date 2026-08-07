---
name: I_MAINTTSKLISTSTRGYPACKAGETP
description: Mainttskliststrgypackagetp
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
# I_MAINTTSKLISTSTRGYPACKAGETP

**Mainttskliststrgypackagetp**

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
| `TaskListSequence` | ✓ | |  |  |  |  |
| `TaskListOperationInternalId` | ✓ | |  |  |  |  |
| `MaintenancePackage` | ✓ | |  |  |  |  |
| `MaintPckgTskListOpAllocIntNmbr` | ✓ | |  |  |  |  |
| `MaintenancePackageText` |  | |  |  |  |  |
| `MaintenanceTaskListOperation` |  | |  |  |  |  |
| `OperationText` |  | |  |  |  |  |
| `MaintTaskListSubOperation` |  | |  |  |  |  |
| `ChangeNumber` |  | |  |  |  |  |
| `TaskListStatus` |  | |  |  |  |  |
| `AuthorizationGroup` |  | |  |  |  |  |
| `MaintenancePlanningPlant` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `MaintenancePlant` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `ResponsiblePlannerGroup` |  | |  |  |  |  |
| `MaintenancePlannerGroup` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `_Header` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Tasklist Maintenance Strtgy Package - TP'
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   modelingPattern:        #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #L,
     dataClass:      #TRANSACTIONAL
   }
 }
 
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_MaintTskListStrgyPackageTP 
  as projection on R_MaintTskListStrgyPackageTP {
  key   TaskListType,
  key   TaskListGroup,
  key   TaskListGroupCounter,
  key   TaskListSequence,
  key   TaskListOperationInternalId,
  key   MaintenancePackage,
  key   MaintPckgTskListOpAllocIntNmbr,
        MaintenancePackageText,
        MaintenanceTaskListOperation,
        OperationText,
        MaintTaskListSubOperation,
        ChangeNumber,
        @Consumption.hidden: true
        TaskListStatus,
        @Consumption.hidden: true
        AuthorizationGroup,
        @Consumption.hidden: true
        MaintenancePlanningPlant,
        @Consumption.hidden: true
        ControllingArea,
        @Consumption.hidden: true
        MaintenancePlant,
        @Consumption.hidden: true
        CostCenter,
        @Consumption.hidden: true
        ResponsiblePlannerGroup,
        @Consumption.hidden: true
        MaintenancePlannerGroup,
        @Consumption.hidden: true
        Plant,

        _Header : redirected to parent I_MaintenanceTaskListTP_2

}
```
