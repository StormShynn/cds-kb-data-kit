---
name: C_EHSTASKINSTANCEDEX
description: "EHS Task Instance Data Extractor"
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSTASKINSTANCEDEX')/$value
semantic_en: "EHS Task Instance Data Extractor"
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
# C_EHSTASKINSTANCEDEX

**EHS Task Instance Data Extractor**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSTASKINSTANCEDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSPlannedTaskUUID` |  | |  |  | `RAW(16)` | Planned Task UUID |
| `EHSPlannedTaskID` |  | |  |  | `CHAR(20)` | Planned Task ID |
| `EHSTaskDueDate` |  | |  |  | `DATS(8)` | Due Date of a Planned Task |
| `EHSTaskStartDate` |  | |  |  | `DATS(8)` | Start Date of a Planned Task |
| `EHSTaskInstceCompletionDate` |  | |  |  | `DATS(8)` | Completion Date of a Planned Task |
| `EHSTaskDefinitionUUID` |  | |  |  | `RAW(16)` | Task Identifier |
| `EHSTaskTitle` |  | |  |  | `CHAR(60)` | Task Title |
| `EHSTaskPriority` |  | |  |  | `NUMC(1)` | Task Definition - Priority |
| `EHSTaskDefinitionStatus` |  | |  |  | `CHAR(2)` | Task Status |
| `EHSTaskAssignedUser` |  | |  |  | `CHAR(10)` | Task Assignee (Business Partner) |
| `EHSTaskApprovingUser` |  | |  |  | `CHAR(10)` | Task Approver (Business Partner) |
| `EHSTaskDefinitionType` |  | |  |  | `CHAR(32)` | Task Type |
| `EHSLocationID` |  | |  |  | `CHAR(20)` | Location ID |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `EHSTaskHostSemanticObject` |  | |  |  | `CHAR(30)` | Semantic Object |
| `EHSTaskIsRecurrent` |  | |  |  | `CHAR(1)` | Recurrence |
| `EHSTaskHasWorkflow` |  | |  |  | `CHAR(1)` | Workflow Exists |
