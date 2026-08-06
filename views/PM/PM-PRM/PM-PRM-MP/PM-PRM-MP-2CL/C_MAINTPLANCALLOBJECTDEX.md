---
name: C_MAINTPLANCALLOBJECTDEX
description: MaintenancePlan Call Obj Data Extractor
app_component: PM-PRM-MP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTPLANCALLOBJECTDEX')/$value
semantic_en: MaintenancePlan Call Obj Data Extractor
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
# C_MAINTPLANCALLOBJECTDEX

**MaintenancePlan Call Obj Data Extractor**

| Property | Value |
|---|---|
| App Component | `PM-PRM-MP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTPLANCALLOBJECTDEX')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `MaintenancePlan` | `CHAR(12)` | Maintenance Plan |
| `MaintenancePlanCallNumber` | `INT4(10)` | Maintenance Plan Call Number |
| `MaintenanceItem` | `CHAR(16)` | Maintenance Item |
| `MaintenanceOrder` | `CHAR(12)` | Order Number |
| `MaintenanceNotification` | `CHAR(12)` | Notification Number |
| `MaintCallHorizonIsNotReached` | `CHAR(1)` | Scheduling status: call horizon not reached |
| `SchedulingStatus` | `CHAR(1)` | Scheduling status |
| `PlannedStartDate` | `DATS(8)` | Basic start date |
| `ReleasedByUserName` | `CHAR(1)` | Scheduling determined by user |
| `ServiceOrder` | `CHAR(10)` | Transaction ID |
| `CompletionDate` | `DATS(8)` | Completion Date for Call Object |
| `CompletionTime` | `TIMS(6)` | Completion Time for Call Object |
| `ServiceEntrySheet` | `CHAR(10)` | Entry Sheet Number |
| `RevisionNumber` | `NUMC(3)` | Revision Number |
