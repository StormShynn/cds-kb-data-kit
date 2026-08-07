---
name: C_EHSOVRDTSKTRNDFORLOCIDQ
description: EHS Overdue Task Instance Trend - Query
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSOVRDTSKTRNDFORLOCIDQ')/$value
semantic_en: EHS Overdue Task Instance Trend - Query
tags:
  - EHS
  - bo:salesorder
  - component:EHS-SUS-FND-EHS
  - consumption-view
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - task
  - metadata-only
---
# C_EHSOVRDTSKTRNDFORLOCIDQ

**EHS Overdue Task Instance Trend - Query**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSOVRDTSKTRNDFORLOCIDQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `EHSTaskDueDate` |  | |  |  | `DATS(8)` | Due Date of a Planned Task |
| `EHSTaskStartDate` |  | |  |  | `DATS(8)` | Start Date of a Planned Task |
| `EHSTaskInstceCompletionDate` |  | |  |  | `DATS(8)` | Completion Date of a Planned Task |
| `EHSTaskPriority` |  | |  |  | `NUMC(1)` | Task Definition - Priority |
| `EHSTaskPriorityName` |  | |  |  | `CHAR(60)` | Task Definition Priority Description |
| `EHSSemanticObjectName` |  | |  |  | `CHAR(60)` | Task Origin |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `NumberOfRecords` |  | |  |  | `INT4(10)` | Number of Records |
