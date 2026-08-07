---
name: C_MAINTPLANSCHEDULEDEX_2
description: Data Extraction for Maint Plan Schedule
app_component: PM-PRM-MP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTPLANSCHEDULEDEX_2')/$value
semantic_en: Data Extraction for Maint Plan Schedule
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
# C_MAINTPLANSCHEDULEDEX_2

**Data Extraction for Maint Plan Schedule**

| Property | Value |
|---|---|
| App Component | `PM-PRM-MP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTPLANSCHEDULEDEX_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenancePlan` |  | |  |  | `CHAR(12)` | Maintenance Plan |
| `MaintenancePlanCallNumber` |  | |  |  | `INT4(10)` | Maintenance Plan Call Number |
| `MaintenancePackage` |  | |  |  | `NUMC(2)` | Maintenance Package Number |
| `SchedulingType` |  | |  |  | `CHAR(1)` | Scheduling type |
| `SchedulingStatus` |  | |  |  | `CHAR(1)` | Single-Character Flag |
| `MeasuringPoint` |  | |  |  | `CHAR(12)` | Measuring Point |
| `MaintenanceCallNextPlannedDate` |  | |  |  | `DATS(8)` | Next planned date |
| `CompletionDate` |  | |  |  | `DATS(8)` | Date of last completion in maintenance plan |
| `CycleSetSequence` |  | |  |  | `NUMC(2)` | Cycle Set Sequence |
| `MaintCallCompltnCntrRdng` |  | |  |  | `FLTP(16)` | Counter reading confirmation |
| `MaintenanceCallIsOutstanding` |  | |  |  | `CHAR(1)` | Scheduling status: call outstanding |
| `MaintCallIsInvokedOnPlndDate` |  | |  |  | `CHAR(1)` | Scheduling status: planned date called |
| `MaintCallHorizonIsNotReached` |  | |  |  | `CHAR(1)` | Scheduling status: call horizon not reached |
| `MaintPlanLastScheduledDate` |  | |  |  | `DATS(8)` | Date of the call |
| `ReleasedByUserName` |  | |  |  | `CHAR(12)` | Name of the person who made the call |
| `MaintPlanPrdcssrCallCompltnDte` |  | |  |  | `DATS(8)` | Completion for Predecessor |
| `MaintenancePlanManualCallDate` |  | |  |  | `DATS(8)` | Manual call date |
| `MaintenanceCallLastPlannedDate` |  | |  |  | `DATS(8)` | Last planned date |
