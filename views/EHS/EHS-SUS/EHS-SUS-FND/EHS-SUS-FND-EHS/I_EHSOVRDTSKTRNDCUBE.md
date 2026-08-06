---
name: I_EHSOVRDTSKTRNDCUBE
description: EHS Overdue Task Instance Trend - Cube
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSOVRDTSKTRNDCUBE')/$value
semantic_en: EHS Overdue Task Instance Trend - Cube
tags:
  - EHS
  - bo:salesorder
  - component:EHS-SUS-FND-EHS
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - interface-view
  - task
  - metadata-only
---
# I_EHSOVRDTSKTRNDCUBE

**EHS Overdue Task Instance Trend - Cube**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSOVRDTSKTRNDCUBE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `EHSPlannedTaskUUID` | `RAW(16)` | Planned Task UUID |
| `EHSLocationID` | `CHAR(20)` | Location ID |
| `CalendarYear` | `NUMC(4)` | Calendar Year |
| `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `EHSTaskDueDate` | `DATS(8)` | Due Date of a Planned Task |
| `EHSTaskStartDate` | `DATS(8)` | Start Date of a Planned Task |
| `EHSTaskInstceCompletionDate` | `DATS(8)` | Completion Date of a Planned Task |
| `EHSTaskPriority` | `NUMC(1)` | Task Definition - Priority |
| `EHSTaskPriorityName` | `CHAR(60)` | Task Definition Priority Description |
| `EHSSemanticObjectName` | `CHAR(60)` | Task Origin |
| `EHSLocationUUID` | `RAW(16)` | Location |
| `EHSSemanticObject` | `CHAR(30)` | Semantic Object |
| `EHSTaskHostObjectInstanceUUID` | `RAW(16)` | Task Host Object Instance Identifier |
| `EHSTaskHostObjectInstance` | `CHAR(70)` | Instance Ident. in BOR Compat. Persistent Object References |
| `IncdntTskRefAccessRestriction` | `CHAR(1)` | Restricted Access to Person Information |
| `NumberOfRecords` | `INT4(10)` | Number of Records |
