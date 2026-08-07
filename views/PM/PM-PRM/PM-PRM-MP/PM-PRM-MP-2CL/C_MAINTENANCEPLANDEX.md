---
name: C_MAINTENANCEPLANDEX
description: "This CDS view provides the prerequisites for answering the following business questions: What is the description of the maintenance plan? What is the category of the maintenance plan? What is the creation date of the maintenance plan? Who created the maintenance plan? When was the last time the maintenance plan changed? Who changed the maintenance plan? What is the related maintenance strategy type if the maintenance plan is a strategy plan? What are the details of the maintenance cycle? How many maintenance items are in the maintenance plan? What are the scheduling parameters of the maintenance plan?"
app_component: PM-PRM-MP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTENANCEPLANDEX')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What is the description of the maintenance plan? What is the category of the maintenance plan? What is the creation date of the maintenance plan? Who created the maintenance plan? When was the last time the maintenance plan changed? Who changed the maintenance plan? What is the related maintenance strategy type if the maintenance plan is a strategy plan? What are the details of the maintenance cycle? How many maintenance items are in the maintenance plan? What are the scheduling parameters of the maintenance plan?"
semantic_vi: "Maintenance Plan Data Extractor — CDS view tiêu dùng dựa trên I_MaintenancePlanCycle."
keywords:
  - "Maintenance Plan Data Extractor"
  - "maintenance"
  - "plan"
  - "data"
  - "extractor"
  - "cycle"
  - "desc"
  - "creation"
  - "date"
  - "created"
  - "user"
tags:
  - PM
  - bo:plant
  - component:PM-PRM-MP-2CL
  - consumption-view
  - lob:plant maintenance
  - plan
  - PM-PRM
  - PM-PRM-MP
  - PM-PRM-MP-2CL
---
# C_MAINTENANCEPLANDEX

**This CDS view provides the prerequisites for answering the following business questions: What is the description of the maintenance plan? What is the category of the maintenance plan? What is the creation date of the maintenance plan? Who created the maintenance plan? When was the last time the maintenance plan changed? Who changed the maintenance plan? What is the related maintenance strategy type if the maintenance plan is a strategy plan? What are the details of the maintenance cycle? How many maintenance items are in the maintenance plan? What are the scheduling parameters of the maintenance plan?**

| Property | Value |
|---|---|
| App Component | `PM-PRM-MP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTENANCEPLANDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenancePlan` | ✓ | |  |  | `CHAR(12)` | Maintenance Plan |
| `MaintenancePlanCycle` | ✓ | |  |  | `NUMC(2)` | Counter in Control Tables |
| `MaintenancePlanDesc` |  | | `_MaintenancePlan` | `MaintenancePlanDesc` | `CHAR(40)` | Maintenance Plan Text |
| `CreationDate` |  | | `_MaintenancePlan` | `CreationDate` | `DATS(8)` | Date of creation |
| `CreatedByUser` |  | | `_MaintenancePlan` | `CreatedByUser` | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `LastChangeDate` |  | | `_MaintenancePlan` | `LastChangeDate` | `DATS(8)` | Last Changed On |
| `LastChangedByUser` |  | | `_MaintenancePlan` | `LastChangedByUser` | `CHAR(12)` | Name of Person Who Changed Object |
| `MaintenanceStrategy` |  | | `_MaintenancePlan` | `MaintenanceStrategy` | `CHAR(6)` | Maintenance Strategy |
| `SchedulingDuration` |  | | `_MaintenancePlan` | `SchedulingDuration` | `NUMC(3)` | Scheduling Period |
| `MaintPlanIsLockedAgainstCalls` |  | | `_MaintenancePlan` | `MaintPlanIsLockedAgainstCalls` | `CHAR(1)` | Indicator: maintenance plan locked against calls |
| `NumberOfMaintenanceItems` |  | | `_MaintenancePlan` | `NumberOfMaintenanceItems` | `NUMC(4)` | Number of maintenance items in the maintenance plan |
| `MaintenanceCall` |  | | `_MaintenancePlan` | `MaintenanceCall` | `INT4(10)` | Maintenance Plan Call Number |
| `LateCompletionShiftInPercent` |  | | `_MaintenancePlan` | `LateCompletionShiftInPercent` | `NUMC(3)` | Shift Factor for Late Completion |
| `EarlyCompletionShiftInPercent` |  | | `_MaintenancePlan` | `EarlyCompletionShiftInPercent` | `NUMC(3)` | Shift Factor for Early Completion |
| `LateCompletionTolerancePercent` |  | | `_MaintenancePlan` | `LateCompletionTolerancePercent` | `NUMC(3)` | Tolerance for Late Completion (%) |
| `EarlyCompletionTolerancePct` |  | | `_MaintenancePlan` | `EarlyCompletionTolerancePct` | `NUMC(3)` | Tolerance for Early Completion (%) |
| `CycleModificationRatio` |  | | `_MaintenancePlan` | `CycleModificationRatio` | `DEC(3)` | Cycle modification factor |
| `MaintPlanSchedgIndicator` |  | | `_MaintenancePlan` | `MaintPlanSchedgIndicator` | `CHAR(1)` | Scheduling indicator |
| `CallHorizonPercent` |  | |  | `cast( _MaintenancePlan.CallHorizonPercent as callhorizonpercent preserving type)` | `NUMC(3)` | Call horizon for maintenance plan calls in percentage |
| `CallHorizonInDays` |  | |  | `cast( _MaintenancePlan.CallHorizonInDays as callhorizonindays preserving type)` | `NUMC(3)` | Call horizon for maintenance plan calls in days |
| `MaintenanceCallHorizonCalcType` |  | | `_MaintenancePlan` | `MaintenanceCallHorizonCalcType` | `CHAR(1)` | Calculation Type of Call Horizon |
| `MaintPlanLogicalOperatorCode` |  | | `_MaintenancePlan` | `MaintPlanLogicalOperatorCode` | `CHAR(1)` | Indicator for OR or AND link |
| `AuthorizationGroup` |  | | `_MaintenancePlan` | `AuthorizationGroup` | `CHAR(4)` | Technical Object Authorization Group |
| `MaintenancePlanCategory` |  | | `_MaintenancePlan` | `MaintenancePlanCategory` | `CHAR(2)` | Maintenance Plan Category |
| `SchedulingDurationUnit` |  | | `_MaintenancePlan` | `SchedulingDurationUnit` | `UNIT(3)` | Unit for Scheduling Period |
| `BasicStartDate` |  | | `_MaintenancePlan` | `BasicStartDate` | `DATS(8)` | Start date |
| `MaintPlanStartCntrReadingValue` |  | | `_MaintenancePlan` | `MaintPlanStartCntrReadingValue` | `CHAR(22)` | Start counter reading |
| `PrdcssrCallObjCompltnIsRqd` |  | | `_MaintenancePlan` | `PrdcssrCallObjCompltnIsRqd` | `CHAR(1)` | Only Create New Call Object After Completing Predecessor |
| `MaintPlanFreeDefinedAttrib` |  | | `_MaintenancePlan` | `MaintPlanFreeDefinedAttrib` | `CHAR(20)` | Sort field for maintenance plans |
| `FactoryCalendar` |  | | `_MaintenancePlan` | `FactoryCalendar` | `CHAR(2)` | Factory calendar key |
| `MaintenanceLeadFloatInDays` |  | | `_MaintenancePlan` | `MaintenanceLeadFloatInDays` | `NUMC(3)` | Lead Float in Days |
| `SchedulingStartDate` |  | | `_MaintenancePlan` | `SchedulingStartDate` | `DATS(8)` | Start Date for Scheduling |
| `SchedulingStartTime` |  | | `_MaintenancePlan` | `SchedulingStartTime` | `TIMS(6)` | Start Time for Scheduling |
| `MultipleCounterPlanShiftFactor` |  | | `_MaintenancePlan` | `MultipleCounterPlanShiftFactor` | `CHAR(1)` | Shift Factor for Multiple Counter Plan |
| `MaintPlanEndCntrReadingValue` |  | | `_MaintenancePlan` | `MaintPlanEndCntrReadingValue` | `CHAR(22)` | End Counter for Scheduling |
| `SchedulingEndDate` |  | | `_MaintenancePlan` | `SchedulingEndDate` | `DATS(8)` | End Date for Scheduling |
| `LastChangeDateTime` |  | | `_MaintenancePlan` | `LastChangeDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `ComparisonOperator` |  | |  |  | `CHAR(2)` | Comparison operator for maint. package cycle duration |
| `MaintPlanCycRcrrcIntervalQty` |  | |  |  | `FLTP(16)` | Maintenance package cycle/offset |
| `MaintPlanCycRcrrcIntervalUnit` |  | |  |  | `UNIT(3)` | Unit for the performance of maintenance tasks |
| `MaintPlanCycleDesc` |  | |  |  | `CHAR(30)` | Text for maintenance package/cycle (time/performance) |
| `Language` |  | |  |  | `LANG(1)` | Primary language for object texts |
| `MeasuringPoint` |  | |  |  | `CHAR(12)` | Measuring Point |
| `MaintPlanCycleStartOffsetValue` |  | |  |  | `FLTP(16)` | Start offset of a time-based maintenance package |
| `MaintenancePlanCycleIsInactive` |  | |  |  | `CHAR(1)` | Indicator: event scheduling inactive |
| `CycleSetSequence` |  | |  |  | `NUMC(2)` | Cycle Set Sequence |
| `CycleSetSequenceRepeatFactor` |  | |  |  | `NUMC(2)` | Repeat Factor for Cycle Set Sequence |
| `_MaintenancePlan` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_MeasuringPoint` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MaintenancePlan` | `I_MaintenancePlanBasic` | [1..1] |
| `_MaintenancePlanExtension` | `E_MaintenancePlan` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTENANCEPLANDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTENANCEPLANDEX')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CMAINTPLANDEX'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Maintenance Plan Data Extractor'

@VDM.viewType: #CONSUMPTION
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'MaintenancePlanCycle'
@ObjectModel.semanticKey: [ 'MaintenancePlan','MaintenancePlanCycle' ]
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true

@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction: {
    enabled: true,
    delta.byElement: {
      name: 'LastChangeDateTime'
    }
  }
}
@Analytics.internalName:#LOCAL
@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #S
  }
}
@AbapCatalog.preserveKey:true
@ObjectModel.modelingPattern:             #NONE
@ObjectModel.supportedCapabilities:     [ #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name:      'MaintenancePlan'

define view C_MaintenancePlanDEX
  as select from I_MaintenancePlanCycle
  association [1..1] to I_MaintenancePlanBasic as _MaintenancePlan          on $projection.MaintenancePlan = _MaintenancePlan.MaintenancePlan
  //                                                                               and $projection.MaintenancePlanCycle  = MaintenancePlanCycle
  -- Extensions, do not expose as association:
  association [0..1] to E_MaintenancePlan      as _MaintenancePlanExtension on $projection.MaintenancePlan = _MaintenancePlanExtension.MaintenancePlan
{
      @ObjectModel.text.element: 'MaintenancePlanDesc'
      @ObjectModel.foreignKey.association: '_MaintenancePlan'
  key I_MaintenancePlanCycle.MaintenancePlan                                           as MaintenancePlan,
      //      @Analytics.internalName: #LOCAL
      //@ObjectModel.foreignKey.association: '_MaintenancePlanCycle'
  key I_MaintenancePlanCycle.MaintenancePlanCycle                                      as MaintenancePlanCycle,

      @Semantics.text: true
      _MaintenancePlan.MaintenancePlanDesc,

      @Semantics.systemDate.createdAt: true
      _MaintenancePlan.CreationDate,

      @Semantics.user.createdBy: true
      _MaintenancePlan.CreatedByUser,

      @Semantics.systemDate.lastChangedAt: true
      _MaintenancePlan.LastChangeDate,

      @Semantics.user.lastChangedBy: true
      _MaintenancePlan.LastChangedByUser,

      _MaintenancePlan.MaintenanceStrategy,

      _MaintenancePlan.SchedulingDuration,

      _MaintenancePlan.MaintPlanIsLockedAgainstCalls,

      _MaintenancePlan.NumberOfMaintenanceItems,

      _MaintenancePlan.MaintenanceCall,


      _MaintenancePlan.LateCompletionShiftInPercent,

      _MaintenancePlan.EarlyCompletionShiftInPercent,

      _MaintenancePlan.LateCompletionTolerancePercent,

      _MaintenancePlan.EarlyCompletionTolerancePct,

      _MaintenancePlan.CycleModificationRatio,

      _MaintenancePlan.MaintPlanSchedgIndicator,

      cast( _MaintenancePlan.CallHorizonPercent as callhorizonpercent preserving type) as CallHorizonPercent,

      cast( _MaintenancePlan.CallHorizonInDays as callhorizonindays preserving type)   as CallHorizonInDays,

      _MaintenancePlan.MaintenanceCallHorizonCalcType,


      _MaintenancePlan.MaintPlanLogicalOperatorCode,

      _MaintenancePlan.AuthorizationGroup,

      @ObjectModel.foreignKey.association: '_MaintenancePlanCatParam'
      _MaintenancePlan.MaintenancePlanCategory,

      _MaintenancePlan.SchedulingDurationUnit,

      _MaintenancePlan.BasicStartDate,

      //        @Semantics.quantity.unitOfMeasure: 'MaintSchedgStartCounterUnit'
      _MaintenancePlan.MaintPlanStartCntrReadingValue,

      //       @ObjectModel.foreignKey.association: '_MeasuringPoint._UnitOfMeasure'
      //        _MeasuringPoint.MeasurementRangeUnit as MaintSchedgStartCounterUnit,

      @Semantics.booleanIndicator
      _MaintenancePlan.PrdcssrCallObjCompltnIsRqd,

      _MaintenancePlan.MaintPlanFreeDefinedAttrib,

      _MaintenancePlan.FactoryCalendar,

      _MaintenancePlan.MaintenanceLeadFloatInDays,

      _MaintenancePlan.SchedulingStartDate,

      _MaintenancePlan.SchedulingStartTime,

      _MaintenancePlan.MultipleCounterPlanShiftFactor,


      //       @Semantics.quantity.unitOfMeasure: 'MaintSchedgEndCounterUnit'
      _MaintenancePlan.MaintPlanEndCntrReadingValue,

      //       @ObjectModel.foreignKey.association: '_MeasuringPoint._UnitOfMeasure'
      //        _MeasuringPoint.MeasurementRangeUnit as MaintSchedgEndCounterUnit,

      _MaintenancePlan.SchedulingEndDate,

      @Semantics.systemDateTime.lastChangedAt: true
      _MaintenancePlan.LastChangeDateTime,


      ComparisonOperator,

      @Semantics.quantity.unitOfMeasure: 'MaintPlanCycRcrrcIntervalUnit'
      MaintPlanCycRcrrcIntervalQty                                                     as MaintPlanCycRcrrcIntervalQty,

      //        @ObjectModel.foreignKey.association: '_UnitOfMeasure'

      //         @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      MaintPlanCycRcrrcIntervalUnit                                                    as MaintPlanCycRcrrcIntervalUnit,

      MaintPlanCycleDesc,

      @ObjectModel.foreignKey.association: '_Language'
      Language,

      //        @ObjectModel.foreignKey.association: '_MeasuringPoint'
      MeasuringPoint,

      MaintPlanCycleStartOffsetValue,

      @Semantics.booleanIndicator:true
      MaintenancePlanCycleIsInactive,

      CycleSetSequence,

      CycleSetSequenceRepeatFactor,

      /* Associations */
      _MaintenancePlan._MaintenancePlanCatParam,
      _UnitOfMeasure,
      _Language,
      _MeasuringPoint,
      _MaintenancePlan
}
```
