---
name: I_CMPLOBLRQMTASGTTASKCUBE
description: Tasks for compl obl rqmt asgt - Cube
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMPLOBLRQMTASGTTASKCUBE')/$value
semantic_en: Tasks for compl obl rqmt asgt - Cube
tags:
  - EHS
  - component:EHS-SUS-FND-EHS
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - interface-view
  - task
  - metadata-only
---
# I_CMPLOBLRQMTASGTTASKCUBE

**Tasks for compl obl rqmt asgt - Cube**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMPLOBLRQMTASGTTASKCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSPlannedTaskUUID` |  | |  |  | `RAW(16)` | Planned Task UUID |
| `CmplncOblgnRqmtAssignmentUUID` |  | |  |  | `RAW(16)` | Obligation Requirement Assignment UUID |
| `CmplncObligationAssignmentUUID` |  | |  |  | `RAW(16)` | Compliance Obligation Assignment UUID |
| `ComplianceOblgnRequirementUUID` |  | |  |  | `RAW(16)` | Compliance Obligation Requirement |
| `EHSTaskHostSemanticObject` |  | |  |  | `CHAR(30)` | Semantic Object |
| `EHSTaskHostObjectInstanceUUID` |  | |  |  | `RAW(16)` | Task Host Object Instance Identifier |
| `EHSTaskStatus` |  | |  |  | `CHAR(2)` | Status of Task Instance (Without Conversion Exit) |
| `EHSTaskStatusName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `EHSLocationName` |  | |  |  | `CHAR(60)` | Location Revision Text |
| `EHSNumberOfOverdueTasks` |  | |  |  | `INT4(10)` | Number of Overdue Tasks |
| `EHSNumberOfDueTasks` |  | |  |  | `INT4(10)` | Number of Due Tasks |
| `EHSNumberOfTasks` |  | |  |  | `INT4(10)` | Number of Due Tasks |
