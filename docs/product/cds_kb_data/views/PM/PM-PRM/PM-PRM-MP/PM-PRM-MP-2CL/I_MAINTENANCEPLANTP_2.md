---
name: I_MAINTENANCEPLANTP_2
description: "Maintenance PlanTP 2"
app_component: PM-PRM-MP-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-PRM
  - PM-PRM-MP
  - interface-view
  - transactional-processing
  - plant
  - maintenance-plan
  - component:PM-PRM-MP-2CL
  - lob:Plant Maintenance
  - bo:Plant
---
# I_MAINTENANCEPLANTP_2

**Maintenance PlanTP 2**

| Property | Value |
|---|---|
| App Component | `PM-PRM-MP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenancePlan` | ✓ | |  |  |  |  |
| `MaintenancePlanDesc` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `MaintenanceStrategy` |  | |  |  |  |  |
| `SchedulingDuration` |  | |  |  |  |  |
| `SchedulingDurationUnit` |  | |  |  |  |  |
| `NumberOfMaintenanceItems` |  | |  |  |  |  |
| `CycleModificationRatio` |  | |  |  |  |  |
| `MaintPlanSchedgIndicator` |  | |  |  |  |  |
| `MaintenancePlanType` |  | |  |  |  |  |
| `CallHorizonPercent` |  | |  |  |  |  |
| `CallHorizonInDays` |  | |  |  |  |  |
| `MaintenanceCallHorizonCalcType` |  | |  |  |  |  |
| `AuthorizationGroup` |  | |  |  |  |  |
| `MaintenancePlanInternalID` |  | |  |  |  |  |
| `MaintenanceCall` |  | |  |  |  |  |
| `MaintenancePlanCategory` |  | |  |  |  |  |
| `MaintPlanFreeDefinedAttrib` |  | |  |  |  |  |
| `BasicStartDate` |  | |  |  |  |  |
| `SchedulingStartDate` |  | |  |  |  |  |
| `SchedulingStartTime` |  | |  |  |  |  |
| `MaintPlanStartCntrReadingValue` |  | |  |  |  |  |
| `MaintPlnStrtBufDurationInDays` |  | |  |  |  |  |
| `MaintPlanStartBufferUnit` |  | |  |  |  |  |
| `FactoryCalendar` |  | |  |  |  |  |
| `LateCompletionShiftInPercent` |  | |  |  |  |  |
| `LateCompletionTolerancePercent` |  | |  |  |  |  |
| `EarlyCompletionShiftInPercent` |  | |  |  |  |  |
| `EarlyCompletionTolerancePct` |  | |  |  |  |  |
| `PrdcssrCallObjCompltnIsRqd` |  | |  |  |  |  |
| `MaintPlanLogicalOperatorCode` |  | |  |  |  |  |
| `SchedulingEndDate` |  | |  |  |  |  |
| `MaintPlanEndCntrReadingValue` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `MultipleCounterPlanShiftFactor` |  | |  |  |  |  |
| `MaintenanceLeadFloatInDays` |  | |  |  |  |  |
| `MaintenancePlanCallObject` |  | |  |  |  |  |
| `SystemStatus` |  | |  |  |  |  |
| `_MaintenanceCycle` | | ✓ | | | | |
| `_Item` | | ✓ | | | | |
| `_LongText` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Interface for Maintenance Plan - TP'
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #XL,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['MaintenancePlan']
 }
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

@ObjectModel.sapObjectNodeType.name: 'MaintenancePlan'

define root view entity I_MaintenancePlanTP_2
provider contract transactional_interface
  as projection on R_MaintenancePlanTP as MaintenancePlan {
  key MaintenancePlan,
      MaintenancePlanDesc,
      CreationDate,
      CreatedByUser,
      LastChangeDate,
      LastChangedByUser,
      MaintenanceStrategy,
      SchedulingDuration,
      SchedulingDurationUnit,
      NumberOfMaintenanceItems,
      CycleModificationRatio,
      MaintPlanSchedgIndicator,
      MaintenancePlanType,      
      CallHorizonPercent,
      CallHorizonInDays,
      MaintenanceCallHorizonCalcType,
      AuthorizationGroup,
      MaintenancePlanInternalID,
      MaintenanceCall,
      MaintenancePlanCategory,
      MaintPlanFreeDefinedAttrib,
      BasicStartDate,
      SchedulingStartDate,
      SchedulingStartTime,
      MaintPlanStartCntrReadingValue,
      MaintPlnStrtBufDurationInDays,
      MaintPlanStartBufferUnit,
      FactoryCalendar,
      LateCompletionShiftInPercent,
      LateCompletionTolerancePercent,
      EarlyCompletionShiftInPercent,
      EarlyCompletionTolerancePct,
      @Semantics.booleanIndicator: true
      PrdcssrCallObjCompltnIsRqd,
      MaintPlanLogicalOperatorCode,
      SchedulingEndDate,
      MaintPlanEndCntrReadingValue,
      LastChangeDateTime,
      MultipleCounterPlanShiftFactor,
      MaintenanceLeadFloatInDays,
      MaintenancePlanCallObject,
      SystemStatus,
      /* Associations */
      _MaintenanceCycle : redirected to composition child I_MaintenancePlanCycleTP,
      _Item             : redirected to I_MaintenanceItemTP_2,
      _LongText         : redirected to composition child I_MaintenancePlanTextTP

  
}
```
