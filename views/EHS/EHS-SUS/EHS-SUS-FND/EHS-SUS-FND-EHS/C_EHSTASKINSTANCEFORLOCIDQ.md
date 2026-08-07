---
name: C_EHSTASKINSTANCEFORLOCIDQ
description: This CDS view retrieves and counts the number of task instances. It allows filtering by task characteristics and by related objects, such as location, compliance scenario, incident, deviation incident and compliance requirement. This CDS view provides the data to answer the following business questions: What data is available for tasks and related objects, such as location, compliance requirement, scenario, and others? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSTASKINSTANCEFORLOCIDQ')/$value
semantic_en: This CDS view retrieves and counts the number of task instances. It allows filtering by task characteristics and by related objects, such as location, compliance scenario, incident, deviation incident and compliance requirement. This CDS view provides the data to answer the following business questions: What data is available for tasks and related objects, such as location, compliance requirement, scenario, and others? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND-EHS
  - consumption-view
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - task
  - metadata-only
---
# C_EHSTASKINSTANCEFORLOCIDQ

**This CDS view retrieves and counts the number of task instances. It allows filtering by task characteristics and by related objects, such as location, compliance scenario, incident, deviation incident and compliance requirement. This CDS view provides the data to answer the following business questions: What data is available for tasks and related objects, such as location, compliance requirement, scenario, and others? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSTASKINSTANCEFORLOCIDQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `EHSPlannedTaskUUID` |  | |  |  | `RAW(16)` | Planned Task UUID |
| `TaskFollowRefObjUUID` |  | |  |  | `RAW(16)` | UUID of Follow-Up Object of Task |
| `EHSPlannedTaskID` |  | |  |  | `CHAR(20)` | Planned Task ID |
| `EHSTaskDueDate` |  | |  |  | `DATS(8)` | Due Date of a Planned Task |
| `EHSTaskStartDate` |  | |  |  | `DATS(8)` | Start Date of a Planned Task |
| `EHSTaskInstceCompletionDate` |  | |  |  | `DATS(8)` | Completion Date of a Planned Task |
| `EHSTaskIsRecurrent` |  | |  |  | `CHAR(1)` | Recurrence |
| `EHSTaskHasDeviation` |  | |  |  | `CHAR(1)` | EHS Task has deviation |
| `EHSTaskStatus` |  | |  |  | `CHAR(2)` | Status of Task Instance (Without Conversion Exit) |
| `EHSTaskOwnerBP` |  | |  |  | `CHAR(10)` | Owner |
| `EHSTaskOwnerUserName` |  | |  |  | `CHAR(80)` | User Description |
| `EHSTaskDefinitionUUID` |  | |  |  | `RAW(16)` | Task Identifier |
| `EHSTaskTitle` |  | |  |  | `CHAR(60)` | Task Title |
| `EHSTaskPriority` |  | |  |  | `NUMC(1)` | Task Definition - Priority |
| `EHSTaskPriorityName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `EHSTaskDefinitionStatus` |  | |  |  | `CHAR(2)` | Task Status |
| `EHSTaskAssignedUser` |  | |  |  | `CHAR(10)` | Assignee |
| `EHSTaskAssignedUserName` |  | |  |  | `CHAR(80)` | User Description |
| `EHSTaskApprovingUser` |  | |  |  | `CHAR(10)` | Approver |
| `EHSTaskApprovingUserName` |  | |  |  | `CHAR(80)` | User Description |
| `EHSSemanticObjectName` |  | |  |  | `CHAR(60)` | Task Origin |
| `EHSTaskDefinitionType` |  | |  |  | `CHAR(32)` | Task Type |
| `EHSTaskDefinitionTypeName` |  | |  |  | `CHAR(132)` | Description of the Task Type |
| `EHSTriggerCategoryDesc` |  | |  |  | `CHAR(40)` | Description (Extra Short) |
| `DeviationUUID` |  | |  |  | `RAW(16)` | NodeID |
| `IncidentRefUUID` |  | |  |  | `RAW(16)` | Incident Key |
| `IncidentID` |  | |  |  | `CHAR(20)` | Incident ID |
| `IsOverdue` |  | |  |  | `CHAR(1)` | Overdue Task |
| `NumberOfRecords` |  | |  |  | `INT1(3)` |  |
