---
name: C_MAINTENANCEPLANSCHEDULEDEX
description: MaintenancePlan Schedule Data Extractor
app_component: PM-PRM-MP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTENANCEPLANSCHEDULEDEX')/$value
semantic_en: MaintenancePlan Schedule Data Extractor
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
# C_MAINTENANCEPLANSCHEDULEDEX

**MaintenancePlan Schedule Data Extractor**

| Property | Value |
|---|---|
| App Component | `PM-PRM-MP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTENANCEPLANSCHEDULEDEX')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `MaintenancePlan` | `CHAR(12)` | Maintenance Plan |
| `MaintenancePlanCallNumber` | `INT4(10)` | Maintenance Plan Call Number |
| `MaintenancePackage` | `NUMC(2)` | Maintenance Package Number |
| `SchedulingType` | `CHAR(1)` | Scheduling type |
| `SchedulingStatus` | `CHAR(1)` | Single-Character Flag |
| `MeasuringPoint` | `CHAR(12)` | Measuring Point |
| `MaintenanceTaskPerformanceUnit` | `UNIT(3)` | Unit for the performance of maintenance tasks |
| `MaintenanceCallNextPlannedDate` | `DATS(8)` | Next planned date |
| `MaintenanceCallDate` | `DATS(8)` | Call date |
| `CompletionDate` | `DATS(8)` | Date of last completion in maintenance plan |
| `CompletionTime` | `TIMS(6)` |  |
| `CycleSetSequence` | `NUMC(2)` | Cycle Set Sequence |
| `MaintCallCompltnCntrRdng` | `FLTP(16)` | Counter reading confirmation |
| `MaintenanceCallIsOutstanding` | `CHAR(1)` | Scheduling status: call outstanding |
| `MaintCallIsInvokedOnPlndDate` | `CHAR(1)` | Scheduling status: planned date called |
| `MaintCallHorizonIsNotReached` | `CHAR(1)` | Scheduling status: call horizon not reached |
| `MaintPlanLastScheduledDate` | `DATS(8)` | Date of the call |
| `ReleasedByUserName` | `CHAR(12)` | Name of the person who made the call |
| `MaintPlnCnctntdDuePackagesTxt` | `CHAR(256)` |  |
| `MaintPlanPrdcssrCallCompltnDte` | `DATS(8)` | Completion for Predecessor |
| `MaintenancePlanManualCallDate` | `DATS(8)` | Manual call date |
| `MaintenanceCallLastPlannedDate` | `DATS(8)` | Last planned date |
