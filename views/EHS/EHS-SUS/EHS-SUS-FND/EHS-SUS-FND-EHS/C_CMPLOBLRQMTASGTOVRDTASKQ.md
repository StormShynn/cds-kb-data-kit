---
name: C_CMPLOBLRQMTASGTOVRDTASKQ
description: "Cmpl Obl Rqmt Asgt Ovrd Task - Query"
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMPLOBLRQMTASGTOVRDTASKQ')/$value
semantic_en: "Cmpl Obl Rqmt Asgt Ovrd Task - Query"
tags:
  - EHS
  - component:EHS-SUS-FND-EHS
  - consumption-view
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - task
  - metadata-only
---
# C_CMPLOBLRQMTASGTOVRDTASKQ

**Cmpl Obl Rqmt Asgt Ovrd Task - Query**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMPLOBLRQMTASGTOVRDTASKQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSPlannedTaskUUID` |  | |  |  | `RAW(16)` | Planned Task UUID |
| `CmplncOblgnRqmtAssignmentUUID` |  | |  |  | `RAW(16)` | Obligation Requirement Assignment UUID |
| `CmplncObligationAssignmentUUID` |  | |  |  | `RAW(16)` | Compliance Obligation Assignment UUID |
| `ComplianceOblgnRequirementUUID` |  | |  |  | `RAW(16)` | Compliance Obligation Requirement |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `EHSLocationName` |  | |  |  | `CHAR(60)` | Location Revision Text |
| `EHSTaskStatusValueForSorting` |  | |  |  | `CHAR(2)` | Status of Task Instance (Without Conversion Exit) |
| `EHSTaskStatusName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `EHSTaskHostSemanticObject` |  | |  |  | `CHAR(30)` | Semantic Object |
| `EHSNumberOfOverdueTasks` |  | |  |  | `INT4(10)` | Number of Overdue Tasks |
| `EHSNumberOfDueTasks` |  | |  |  | `INT4(10)` | Number of Due Tasks |
| `EHSNumberOfTasks` |  | |  |  | `INT4(10)` | Number of Due Tasks |
