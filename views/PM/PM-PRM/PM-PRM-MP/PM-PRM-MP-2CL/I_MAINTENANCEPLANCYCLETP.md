---
name: I_MAINTENANCEPLANCYCLETP
description: Maintenance PlanCYCLETP
app_component: PM-PRM-MP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-PRM
  - PM-PRM-MP
  - interface-view
  - transactional-processing
  - maintenance-plan
  - component:PM-PRM-MP-2CL
  - lob:Plant Maintenance
---
# I_MAINTENANCEPLANCYCLETP

**Maintenance PlanCYCLETP**

| Property | Value |
|---|---|
| App Component | `PM-PRM-MP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `MaintenancePlan` | `MaintenancePlan` |
| key `MaintenancePlanCycle` | `MaintenancePlanCycle` |
| `MaintenanceStrategy` | `MaintenanceStrategy` |
| `MaintPlanCycRcrrcIntervalQty` | `MaintPlanCycRcrrcIntervalQty` |
| `MaintPlanCycRcrrcIntervalUnit` | `MaintPlanCycRcrrcIntervalUnit` |
| `MaintPlanCycleDesc` | `MaintPlanCycleDesc` |
| `MeasuringPoint` | `MeasuringPoint` |
| `MaintPlanCycleStartOffsetValue` | `MaintPlanCycleStartOffsetValue` |
| `MaintCycleNextPlndCntrRdng` | `MaintCycleNextPlndCntrRdng` |
| `MaintenancePlanCycleIsInactive` | `MaintenancePlanCycleIsInactive` |
| `CycleSetSequence` | `CycleSetSequence` |
| `CycleSetSequenceRepeatFactor` | `CycleSetSequenceRepeatFactor` |
| `MaintPlnStrtBufDurationInDays` | `MaintPlnStrtBufDurationInDays` |
| `CharcValueUnit` | `CharcValueUnit` |
| `_MaintenancePlan` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Maintenance Plan Cycle - TP'
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
   semanticKey: ['MaintenancePlan' , 'MaintenancePlanCycle']
 }
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_MaintenancePlanCycleTP
//provider contract transactional_interface
  as projection on R_MaintenancePlanCycleTP as MaintenancePlanCycle {
  key MaintenancePlan,
  key MaintenancePlanCycle,
      MaintenanceStrategy,
      @Semantics.quantity.unitOfMeasure: 'MaintPlanCycRcrrcIntervalUnit'
      MaintPlanCycRcrrcIntervalQty,
      MaintPlanCycRcrrcIntervalUnit,
      MaintPlanCycleDesc,
      MeasuringPoint,
      @EndUserText.label: 'Maintenance Plan Cycle Offset'
      MaintPlanCycleStartOffsetValue,
      @Semantics.quantity.unitOfMeasure: 'MaintPlanCycRcrrcIntervalUnit'
      MaintCycleNextPlndCntrRdng,
      MaintenancePlanCycleIsInactive,
      CycleSetSequence,
      CycleSetSequenceRepeatFactor,
      MaintPlnStrtBufDurationInDays,
      CharcValueUnit,
      /* Associations */

      _MaintenancePlan : redirected to parent I_MaintenancePlanTP_2
  
}
```
