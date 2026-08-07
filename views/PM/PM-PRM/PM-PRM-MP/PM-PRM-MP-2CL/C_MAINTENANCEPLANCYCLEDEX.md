---
name: C_MAINTENANCEPLANCYCLEDEX
description: Data Extraction for Maint Plan Cycle
app_component: PM-PRM-MP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTENANCEPLANCYCLEDEX')/$value
semantic_en: Data Extraction for Maint Plan Cycle
tags:
  - PM
  - component:PM-PRM-MP-2CL
  - consumption-view
  - lob:plant maintenance
  - plan
  - PM-PRM
  - PM-PRM-MP
  - PM-PRM-MP-2CL
  - metadata-only
---
# C_MAINTENANCEPLANCYCLEDEX

**Data Extraction for Maint Plan Cycle**

| Property | Value |
|---|---|
| App Component | `PM-PRM-MP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTENANCEPLANCYCLEDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenancePlan` |  | |  |  | `CHAR(12)` | Maintenance Plan |
| `MaintenancePlanCycle` |  | |  |  | `NUMC(2)` | Counter in Control Tables |
| `ComparisonOperator` |  | |  |  | `CHAR(2)` | Comparison operator for maint. package cycle duration |
| `MaintPlanCycRcrrcIntervalQty` |  | |  |  | `FLTP(16)` | Maintenance package cycle/offset |
| `MaintPlanCycRcrrcIntervalUnit` |  | |  |  | `UNIT(3)` | Unit for the performance of maintenance tasks |
| `MaintPlanCycleDesc` |  | |  |  | `CHAR(30)` | Text for maintenance package/cycle (time/performance) |
| `Language` |  | |  |  | `LANG(1)` | Primary language for object texts |
| `MeasuringPoint` |  | |  |  | `CHAR(12)` | Measuring Point |
| `MaintPlanCycleStartOffsetValue` |  | |  |  | `FLTP(16)` | Start offset of a time-based maintenance package |
| `MaintCycleNextPlndCntrRdng` |  | |  |  | `FLTP(16)` | Next planned counter reading |
| `CycleSetSequence` |  | |  |  | `NUMC(2)` | Cycle Set Sequence |
| `CycleSetSequenceRepeatFactor` |  | |  |  | `NUMC(2)` | Repeat Factor for Cycle Set Sequence |
