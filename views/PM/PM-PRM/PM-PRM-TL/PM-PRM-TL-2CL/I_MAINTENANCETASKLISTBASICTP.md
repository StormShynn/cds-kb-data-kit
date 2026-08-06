---
name: I_MAINTENANCETASKLISTBASICTP
description: Maintenancetasklistbasictp
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
# I_MAINTENANCETASKLISTBASICTP

**Maintenancetasklistbasictp**

| Property | Value |
|---|---|
| App Component | `PM-PRM-TL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TaskListType` | `TaskListType` |
| key `TaskListGroup` | `TaskListGroup` |
| key `TaskListGroupCounter` | `TaskListGroupCounter` |
| key `TaskListVersionCounter` | `TaskListVersionCounter` |
| `MaintenancePlanningPlant` | `MaintenancePlanningPlant` |
| `TaskListStatus` | `TaskListStatus` |
| `TaskListStatusDesc` | `TaskListStatusDesc` |
| `TechnicalObject` | `TechnicalObject` |
| `TaskListUsage` | `TaskListUsage` |
| `TaskListDesc` | `TaskListDesc` |
| `WorkCenter` | `WorkCenter` |
| `MaintenanceStrategy` | `MaintenanceStrategy` |
| `OperationSystemCondition` | `OperationSystemCondition` |
| `Assembly` | `Assembly` |
| `ChangeNumber` | `ChangeNumber` |
| `ValidityStartDate` | `ValidityStartDate` |
| `ValidityEndDate` | `ValidityEndDate` |
| `IsMarkedForDeletion` | `IsMarkedForDeletion` |
| `LastChangeDate` | `LastChangeDate` |
| `LastChangedByUser` | `LastChangedByUser` |
| `CreatedByUser` | `CreatedByUser` |
| `CreationDate` | `CreationDate` |
| `Plant` | `Plant` |
| `ResponsiblePlannerGroup` | `ResponsiblePlannerGroup` |
| `Equipment` | `Equipment` |
| `FunctionalLocationLabelName` | `FunctionalLocationLabelName` |
| `TaskListIsHierarchical` | `TaskListIsHierarchical` |
| `TechObjIsEquipOrFuncnlLoc` | `TechObjIsEquipOrFuncnlLoc` |
| `AuthorizationGroup` | `AuthorizationGroup` |
| `MaintenancePlannerGroup` | `MaintenancePlannerGroup` |
| `ControllingArea` | `ControllingArea` |
| `CostCenter` | `CostCenter` |
| `MaintenancePlant` | `MaintenancePlant` |
| `_Header` | *Association* |
| `_Operation` | *Association* |
| `_MaintPackage` | *Association* |
| `_LongText` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Header - TP'
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
define view entity I_MaintenanceTaskListBasicTP
  as projection on R_MaintenanceTaskListBasicTP
{
  key TaskListType,
  key TaskListGroup,
  key TaskListGroupCounter,
  key TaskListVersionCounter,

      MaintenancePlanningPlant,
      TaskListStatus,
      TaskListStatusDesc,
      TechnicalObject,
      TaskListUsage,
      @Semantics.text: true
      TaskListDesc,
      WorkCenter,
      MaintenanceStrategy,
      OperationSystemCondition,
      Assembly,
//      @Consumption.hidden: true
      ChangeNumber,
      @Semantics.businessDate.from: true
      ValidityStartDate,
      @Semantics.businessDate.to: true
      ValidityEndDate,
      IsMarkedForDeletion,
      LastChangeDate,
      LastChangedByUser,
      CreatedByUser,
      CreationDate,
      Plant,
      ResponsiblePlannerGroup,
      Equipment,
      FunctionalLocationLabelName,
      TaskListIsHierarchical,
//      TL_Reference,
      @Consumption.hidden: true
      TechObjIsEquipOrFuncnlLoc,
      @Consumption.hidden: true
      AuthorizationGroup,
      @Consumption.hidden: true
      MaintenancePlannerGroup,
      @Consumption.hidden: true
      ControllingArea,
      @Consumption.hidden: true
      CostCenter,
      @Consumption.hidden: true
      MaintenancePlant,
      _Header       : redirected to parent I_MaintenanceTaskListTP_2,
      _Operation    : redirected to I_MaintTaskListOpBasicTP,
      _MaintPackage : redirected to I_MaintTskListStrgyPackageTP,
      _LongText     : redirected to I_TaskListLongTextTP
}
```
