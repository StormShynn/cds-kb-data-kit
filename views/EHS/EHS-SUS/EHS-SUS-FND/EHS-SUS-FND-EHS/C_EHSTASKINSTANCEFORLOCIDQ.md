---
name: C_EHSTASKINSTANCEFORLOCIDQ
description: EHS Task Instance - Query
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSTASKINSTANCEFORLOCIDQ')/$value
semantic_en: EHS Task Instance - Query
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
# C_EHSTASKINSTANCEFORLOCIDQ

**EHS Task Instance - Query**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSTASKINSTANCEFORLOCIDQ')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `EHSLocationUUID` | `RAW(16)` | Location |
| `EHSPlannedTaskUUID` | `RAW(16)` | Planned Task UUID |
| `TaskFollowRefObjUUID` | `RAW(16)` | UUID of Follow-Up Object of Task |
| `EHSPlannedTaskID` | `CHAR(20)` | Planned Task ID |
| `EHSTaskDueDate` | `DATS(8)` | Due Date of a Planned Task |
| `EHSTaskStartDate` | `DATS(8)` | Start Date of a Planned Task |
| `EHSTaskInstceCompletionDate` | `DATS(8)` | Completion Date of a Planned Task |
| `EHSTaskIsRecurrent` | `CHAR(1)` | Recurrence |
| `EHSTaskHasDeviation` | `CHAR(1)` | EHS Task has deviation |
| `EHSTaskStatus` | `CHAR(2)` | Status of Task Instance (Without Conversion Exit) |
| `EHSTaskOwnerBP` | `CHAR(10)` | Owner |
| `EHSTaskOwnerUserName` | `CHAR(80)` | User Description |
| `EHSTaskDefinitionUUID` | `RAW(16)` | Task Identifier |
| `EHSTaskTitle` | `CHAR(60)` | Task Title |
| `EHSTaskPriority` | `NUMC(1)` | Task Definition - Priority |
| `EHSTaskPriorityName` | `CHAR(60)` | Short Text for Fixed Values |
| `EHSTaskDefinitionStatus` | `CHAR(2)` | Task Status |
| `EHSTaskAssignedUser` | `CHAR(10)` | Assignee |
| `EHSTaskAssignedUserName` | `CHAR(80)` | User Description |
| `EHSTaskApprovingUser` | `CHAR(10)` | Approver |
| `EHSTaskApprovingUserName` | `CHAR(80)` | User Description |
| `EHSSemanticObjectName` | `CHAR(60)` | Task Origin |
| `EHSTaskDefinitionType` | `CHAR(32)` | Task Type |
| `EHSTaskDefinitionTypeName` | `CHAR(132)` | Description of the Task Type |
| `EHSTriggerCategoryDesc` | `CHAR(40)` | Description (Extra Short) |
| `DeviationUUID` | `RAW(16)` | NodeID |
| `IncidentRefUUID` | `RAW(16)` | Incident Key |
| `IncidentID` | `CHAR(20)` | Incident ID |
| `IsOverdue` | `CHAR(1)` | Overdue Task |
| `NumberOfRecords` | `INT1(3)` |  |
