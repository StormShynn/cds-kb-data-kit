---
name: I_MAINTENANCEPLANSCHEDULE
description: Maintenance PlanSCHEDULE
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
  - maintenance-plan
  - schedule-line
  - component:PM-PRM-MP-2CL
  - lob:Plant Maintenance
---
# I_MAINTENANCEPLANSCHEDULE

**Maintenance PlanSCHEDULE**

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
| key `MaintenancePlanCallNumber` | `MaintenancePlanCallNumber` |
| key `MaintenancePackage` | `MaintenancePackage` |
| `MaintenanceStrategy` | `MaintenanceStrategy` |
| `SchedulingType` | `SchedulingType` |
| `SchedulingStatus` | `SchedulingStatus` |
| `MeasuringPoint` | `_MaintenanceSingleCycle.MeasuringPoint` |
| `MaintenanceTaskPerformanceUnit` | `case _MaintenanceSingleCycle.MaintenanceTaskPerformanceUnit when '' then I_MaintPlanCallHistory._MaintenancePackage.MaintenanceTaskPerformanceUnit else _MaintenanceSingleCycle.MaintenanceTaskPerformanceUnit end` |
| `MaintenanceCallNextPlannedDate` | `MaintenanceCallNextPlannedDate` |
| `MaintenanceCallDate` | `MaintenanceCallDate` |
| `CompletionDate` | `case CompletionDate when '00000000' then _MaintCallCompltnDateTime.CompletionDate else CompletionDate end` |
| `CompletionTime` | `_MaintCallCompltnDateTime.CompletionTime` |
| `CycleSetSequence` | `CycleSetSequence` |
| `MaintCallCompltnCntrRdng` | `MaintCallCompltnCntrRdng` |
| `MaintCallNextPlndCntrRdng` | `MaintCallNextPlndCntrRdng` |
| `MaintenanceCallIsOutstanding` | `MaintenanceCallIsOutstanding` |
| `MaintCallIsInvokedOnPlndDate` | `MaintCallIsInvokedOnPlndDate` |
| `MaintCallHorizonIsNotReached` | `MaintCallHorizonIsNotReached` |
| `MaintPlanLastScheduledDate` | `MaintPlanLastScheduledDate` |
| `ReleasedByUserName` | `ReleasedByUserName` |
| `MaintPlnCnctntdDuePackagesTxt` | `cast ('' as abap.char(256) )` |
| `MaintenanceCallHorizonCalcType` | `_MaintenancePlan.MaintenanceCallHorizonCalcType` |
| `MaintPlanPrdcssrCallCompltnDte` | `MaintPlanPrdcssrCallCompltnDte` |
| `MaintenancePlanManualCallDate` | `MaintenancePlanManualCallDate` |
| `MaintenanceCallLastPlannedDate` | `MaintenanceCallLastPlannedDate` |
| `_SchedulingType` | *Association* |
| `_MaintTaskPerformanceUnit` | *Association* |
| `_MaintenancePlan` | *Association* |
| `_CallHrznCalcTypeTxt` | *Association* |
| `_ReleasedByUserName` | *Association* |
| `_MaintenancePackage` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SchedulingType` | `I_MaintCallSchedulingType` | [0..1] |
| `_MaintenanceSingleCycle` | `P_MaintenanceSingleCycle` | [0..1] |
| `_MaintTaskPerformanceUnit` | `I_UnitOfMeasure` | [0..1] |
| `_MaintCallCompltnDateTime` | `P_MaintCallCompltnDateTime` | [0..1] |
| `_MaintenancePlan` | `I_MaintenancePlanBasic` | [1..1] |
| `_CallHrznCalcTypeTxt` | `I_MaintPlanCallHrznCalcTypeTxt` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Scheduled calls for Maintenance Plan'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern:  #NONE,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE],
  semanticKey:  [ 'MaintenancePlan','MaintenancePlanCallNumber' ],
    usageType: {
        dataClass: #MASTER,
        serviceQuality: #C,
        sizeCategory: #M
    }
}
@VDM.viewType: #COMPOSITE
define view entity I_MaintenancePlanSchedule
  as select from I_MaintPlanCallHistory

  association [0..1] to I_MaintCallSchedulingType      as _SchedulingType           on  _SchedulingType.SchedulingType = $projection.SchedulingType

  association [0..1] to P_MaintenanceSingleCycle       as _MaintenanceSingleCycle   on  _MaintenanceSingleCycle.MaintenancePlan = $projection.MaintenancePlan

  association [0..1] to I_UnitOfMeasure                as _MaintTaskPerformanceUnit on  _MaintTaskPerformanceUnit.UnitOfMeasure = $projection.MaintenanceTaskPerformanceUnit

  association [0..1] to P_MaintCallCompltnDateTime     as _MaintCallCompltnDateTime on  _MaintCallCompltnDateTime.MaintenancePlan = $projection.MaintenancePlan
                                                                                    and _MaintCallCompltnDateTime.MaintenanceCall = $projection.MaintenancePlanCallNumber

  association [1..1] to I_MaintenancePlanBasic         as _MaintenancePlan          on  _MaintenancePlan.MaintenancePlan = $projection.MaintenancePlan
  association [1..*] to I_MaintPlanCallHrznCalcTypeTxt as _CallHrznCalcTypeTxt      on  _CallHrznCalcTypeTxt.MaintenanceCallHorizonCalcType = $projection.MaintenanceCallHorizonCalcType

{
  @ObjectModel.foreignKey.association: '_MaintenancePlan'  
  key MaintenancePlan,

  key MaintenancePlanCallNumber,
  key MaintenancePackage,

      MaintenanceStrategy                             as MaintenanceStrategy,
      @ObjectModel.foreignKey.association: '_SchedulingType'
      SchedulingType                                  as SchedulingType,

      SchedulingStatus                                as SchedulingStatus,

      _MaintenanceSingleCycle.MeasuringPoint          as MeasuringPoint,

      @ObjectModel.foreignKey.association: '_MaintTaskPerformanceUnit'
      case _MaintenanceSingleCycle.MaintenanceTaskPerformanceUnit
          when '' then I_MaintPlanCallHistory._MaintenancePackage.MaintenanceTaskPerformanceUnit
          else _MaintenanceSingleCycle.MaintenanceTaskPerformanceUnit
      end                                             as MaintenanceTaskPerformanceUnit,

      MaintenanceCallNextPlannedDate                  as MaintenanceCallNextPlannedDate,

      MaintenanceCallDate                             as MaintenanceCallDate,


      case CompletionDate
        when '00000000' then _MaintCallCompltnDateTime.CompletionDate
        else CompletionDate
       end                                            as CompletionDate,

      _MaintCallCompltnDateTime.CompletionTime        as CompletionTime,

      CycleSetSequence                                as CycleSetSequence,
      

      MaintCallCompltnCntrRdng                        as MaintCallCompltnCntrRdng,
      
      @Semantics.quantity.unitOfMeasure: 'MaintenanceTaskPerformanceUnit'
      MaintCallNextPlndCntrRdng                       as MaintCallNextPlndCntrRdng,

      MaintenanceCallIsOutstanding                    as MaintenanceCallIsOutstanding,

      MaintCallIsInvokedOnPlndDate                    as MaintCallIsInvokedOnPlndDate,

      MaintCallHorizonIsNotReached                    as MaintCallHorizonIsNotReached,

      MaintPlanLastScheduledDate                      as MaintPlanLastScheduledDate,

      ReleasedByUserName,

      cast ('' as abap.char(256) )                    as MaintPlnCnctntdDuePackagesTxt,
      _MaintenancePlan.MaintenanceCallHorizonCalcType as MaintenanceCallHorizonCalcType,

      MaintPlanPrdcssrCallCompltnDte,

      MaintenancePlanManualCallDate,     
      
      MaintenanceCallLastPlannedDate, 
      

      /* Associations - locally defined */
      _MaintenancePlan,
      _SchedulingType,
      _MaintTaskPerformanceUnit,
      _ReleasedByUserName,
      _CallHrznCalcTypeTxt,
      _MaintenancePackage
}
```
