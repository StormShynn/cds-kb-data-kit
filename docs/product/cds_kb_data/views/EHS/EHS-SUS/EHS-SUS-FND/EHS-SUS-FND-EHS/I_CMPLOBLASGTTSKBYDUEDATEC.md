---
name: I_CMPLOBLASGTTSKBYDUEDATEC
description: "Tasks by Due Date - Cube"
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMPLOBLASGTTSKBYDUEDATEC')/$value
semantic_en: "Tasks by Due Date - Cube"
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
# I_CMPLOBLASGTTSKBYDUEDATEC

**Tasks by Due Date - Cube**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMPLOBLASGTTSKBYDUEDATEC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CmplncOblgnRqmtAssignmentUUID` |  | |  |  | `RAW(16)` | Obligation Requirement Assignment UUID |
| `CmplncObligationAssignmentUUID` |  | |  |  | `RAW(16)` | Compliance Obligation Assignment UUID |
| `ComplianceObligationUUID` |  | |  |  | `RAW(16)` | Compliance Obligation |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `EHSLocationName` |  | |  |  | `CHAR(60)` | Location Revision Text |
| `CmplncOblgnTypeDescription` |  | |  |  | `CHAR(60)` | Compliance Obligation Type Description |
| `ComplianceObligationTypeCode` |  | |  |  | `CHAR(2)` | Compliance Obligation Type |
| `ComplianceObligationDomainCode` |  | |  |  | `CHAR(21)` | Compliance Obligation Domain |
| `EHSTaskDueInValue` |  | |  |  | `INT4(10)` | Number of Records |
| `NumberOfRecords` |  | |  |  | `INT4(10)` | Number of Records |
| `EHSPlannedTaskUUID` |  | |  |  | `RAW(16)` | Planned Task UUID |
| `EHSTaskTitle` |  | |  |  | `CHAR(60)` | Task Title |
| `EHSTaskDueDate` |  | |  |  | `DATS(8)` | Due Date of a Planned Task |
| `EHSTaskHostSemanticObject` |  | |  |  | `CHAR(30)` | Semantic Object |
| `EHSTaskStatus` |  | |  |  | `CHAR(2)` | Status of Task Instance (Without Conversion Exit) |
| `EHSTaskAssignedUserName` |  | |  |  | `CHAR(80)` | User Description |
| `EHSTaskOwnerUser` |  | |  |  | `CHAR(12)` | User ID |
| `WorkflowTaskInternalID` |  | |  |  | `NUMC(12)` | Work item ID |
