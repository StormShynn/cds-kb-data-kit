---
name: C_MAINTENANCEPLANDEX
description: This CDS view provides the prerequisites for answering the following business questions: What is the description of the maintenance plan? What is the category of the maintenance plan? What is the creation date of the maintenance plan? Who created the maintenance plan? When was the last time the maintenance plan changed? Who changed the maintenance plan? What is the related maintenance strategy type if the maintenance plan is a strategy plan? What are the details of the maintenance cycle? How many maintenance items are in the maintenance plan? What are the scheduling parameters of the maintenance plan?
app_component: PM-PRM-MP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTENANCEPLANDEX')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: What is the description of the maintenance plan? What is the category of the maintenance plan? What is the creation date of the maintenance plan? Who created the maintenance plan? When was the last time the maintenance plan changed? Who changed the maintenance plan? What is the related maintenance strategy type if the maintenance plan is a strategy plan? What are the details of the maintenance cycle? How many maintenance items are in the maintenance plan? What are the scheduling parameters of the maintenance plan?
keywords:
  - Maintenance Plan Data Extractor
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
  - metadata-only
---
# C_MAINTENANCEPLANDEX

**This CDS view provides the prerequisites for answering the following business questions: What is the description of the maintenance plan? What is the category of the maintenance plan? What is the creation date of the maintenance plan? Who created the maintenance plan? When was the last time the maintenance plan changed? Who changed the maintenance plan? What is the related maintenance strategy type if the maintenance plan is a strategy plan? What are the details of the maintenance cycle? How many maintenance items are in the maintenance plan? What are the scheduling parameters of the maintenance plan?**

| Property | Value |
|---|---|
| App Component | `PM-PRM-MP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTENANCEPLANDEX')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `MaintenancePlan` | `CHAR(12)` | Maintenance Plan |
| `MaintenancePlanCycle` | `NUMC(2)` | Counter in Control Tables |
| `MaintenancePlanDesc` | `CHAR(40)` | Maintenance Plan Text |
| `CreationDate` | `DATS(8)` | Date of creation |
| `CreatedByUser` | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `LastChangeDate` | `DATS(8)` | Last Changed On |
| `LastChangedByUser` | `CHAR(12)` | Name of Person Who Changed Object |
| `MaintenanceStrategy` | `CHAR(6)` | Maintenance Strategy |
| `SchedulingDuration` | `NUMC(3)` | Scheduling Period |
| `MaintPlanIsLockedAgainstCalls` | `CHAR(1)` | Indicator: maintenance plan locked against calls |
| `NumberOfMaintenanceItems` | `NUMC(4)` | Number of maintenance items in the maintenance plan |
| `MaintenanceCall` | `INT4(10)` | Maintenance Plan Call Number |
| `LateCompletionShiftInPercent` | `NUMC(3)` | Shift Factor for Late Completion |
| `EarlyCompletionShiftInPercent` | `NUMC(3)` | Shift Factor for Early Completion |
| `LateCompletionTolerancePercent` | `NUMC(3)` | Tolerance for Late Completion (%) |
| `EarlyCompletionTolerancePct` | `NUMC(3)` | Tolerance for Early Completion (%) |
| `CycleModificationRatio` | `DEC(3)` | Cycle modification factor |
| `MaintPlanSchedgIndicator` | `CHAR(1)` | Scheduling indicator |
| `CallHorizonPercent` | `NUMC(3)` | Call horizon for maintenance plan calls in percentage |
| `CallHorizonInDays` | `NUMC(3)` | Call horizon for maintenance plan calls in days |
| `MaintenanceCallHorizonCalcType` | `CHAR(1)` | Calculation Type of Call Horizon |
| `MaintPlanLogicalOperatorCode` | `CHAR(1)` | Indicator for OR or AND link |
| `AuthorizationGroup` | `CHAR(4)` | Technical Object Authorization Group |
| `MaintenancePlanCategory` | `CHAR(2)` | Maintenance Plan Category |
| `SchedulingDurationUnit` | `UNIT(3)` | Unit for Scheduling Period |
| `BasicStartDate` | `DATS(8)` | Start date |
| `MaintPlanStartCntrReadingValue` | `CHAR(22)` | Start counter reading |
| `PrdcssrCallObjCompltnIsRqd` | `CHAR(1)` | Only Create New Call Object After Completing Predecessor |
| `MaintPlanFreeDefinedAttrib` | `CHAR(20)` | Sort field for maintenance plans |
| `FactoryCalendar` | `CHAR(2)` | Factory calendar key |
| `MaintenanceLeadFloatInDays` | `NUMC(3)` | Lead Float in Days |
| `SchedulingStartDate` | `DATS(8)` | Start Date for Scheduling |
| `SchedulingStartTime` | `TIMS(6)` | Start Time for Scheduling |
| `MultipleCounterPlanShiftFactor` | `CHAR(1)` | Shift Factor for Multiple Counter Plan |
| `MaintPlanEndCntrReadingValue` | `CHAR(22)` | End Counter for Scheduling |
| `SchedulingEndDate` | `DATS(8)` | End Date for Scheduling |
| `LastChangeDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `ComparisonOperator` | `CHAR(2)` | Comparison operator for maint. package cycle duration |
| `MaintPlanCycRcrrcIntervalQty` | `FLTP(16)` | Maintenance package cycle/offset |
| `MaintPlanCycRcrrcIntervalUnit` | `UNIT(3)` | Unit for the performance of maintenance tasks |
| `MaintPlanCycleDesc` | `CHAR(30)` | Text for maintenance package/cycle (time/performance) |
| `Language` | `LANG(1)` | Primary language for object texts |
| `MeasuringPoint` | `CHAR(12)` | Measuring Point |
| `MaintPlanCycleStartOffsetValue` | `FLTP(16)` | Start offset of a time-based maintenance package |
| `MaintenancePlanCycleIsInactive` | `CHAR(1)` | Indicator: event scheduling inactive |
| `CycleSetSequence` | `NUMC(2)` | Cycle Set Sequence |
| `CycleSetSequenceRepeatFactor` | `NUMC(2)` | Repeat Factor for Cycle Set Sequence |
