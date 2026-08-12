---
name: C_CMPLOBLASGTTSKBYDUEDATEQ
description: "Tasks by Due Date - Query"
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMPLOBLASGTTSKBYDUEDATEQ')/$value
semantic_en: "Tasks by Due Date - Query"
semantic_vi: "Tasks by Due Date - Query — CDS view tiêu dùng dựa trên Tasks by Due Date - Query."
keywords:
  - "tasks"
  - "due"
  - "date"
  - "query"
  - "cmplnc"
  - "oblgn"
  - "rqmt"
  - "assignment"
  - "planned"
  - "task"
  - "location"
  - "name"
  - "title"
tags:
  - EHS
  - component:EHS-SUS-FND-EHS
  - consumption-view
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - task
---
# C_CMPLOBLASGTTSKBYDUEDATEQ

**Tasks by Due Date - Query**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMPLOBLASGTTSKBYDUEDATEQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CmplncOblgnRqmtAssignmentUUID` |  | |  |  | `RAW(16)` | Obligation Requirement Assignment UUID |
| `EHSPlannedTaskUUID` |  | |  |  | `RAW(16)` | Planned Task UUID |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `EHSLocationName` |  | |  |  | `CHAR(60)` | Location Revision Text |
| `EHSTaskTitle` |  | |  |  | `CHAR(60)` | Task Title |
| `EHSTaskDueDate` |  | |  |  | `DATS(8)` | Due Date of a Planned Task |
| `EHSTaskStatus` |  | |  |  | `CHAR(2)` | Status of Task Instance (Without Conversion Exit) |
| `ComplianceObligationTypeCode` |  | |  |  | `CHAR(2)` | Compliance Obligation Type |
| `CmplncOblgnTypeDescription` |  | |  |  | `CHAR(60)` | Compliance Obligation Type Description |
| `ComplianceObligationDomainCode` |  | |  |  | `CHAR(21)` | Compliance Obligation Domain |
| `WorkflowTaskInternalID` |  | |  |  | `NUMC(12)` | Work item ID |
| `EHSTaskDueInValue` |  | |  |  | `INT4(10)` | Number of Records |
| `NumberOfRecords` |  | |  |  | `INT4(10)` | Number of Records |
| `EHSTaskHostSemanticObject` |  | |  |  | `CHAR(30)` | Semantic Object |
| `EHSTaskOwnerUser` |  | |  |  | `CHAR(12)` | User ID |
| `EHSTaskAssignedUserName` |  | |  |  | `CHAR(80)` | User Description |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMPLOBLASGTTSKBYDUEDATEQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMPLOBLASGTTSKBYDUEDATEQ')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@VDM.viewType: #CONSUMPTION
@EndUserText.label: 'Tasks by Due Date - Query'
@AccessControl.authorizationCheck: #NOT_ALLOWED
@AccessControl.personalData.blocking: #REQUIRED
@OData.publish: true

@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]

@ObjectModel.usageType:{
  serviceQuality: #D,
  sizeCategory: #L,
  dataClass: #MIXED
}
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions
define transient view entity C_CmplOblAsgtTskByDueDateQ
  provider contract analytical_query
  as projection on I_CmplOblAsgtTskByDueDateC
{ 
  CmplncOblgnRqmtAssignmentUUID,
  EHSPlannedTaskUUID,
  EHSLocationUUID,
  EHSLocationName,
  EHSTaskTitle,
  EHSTaskDueDate,
  EHSTaskStatus,
  ComplianceObligationTypeCode,
  CmplncOblgnTypeDescription,
  ComplianceObligationDomainCode,
  WorkflowTaskInternalID,
  EHSTaskDueInValue,
  @UI.hidden: true
  NumberOfRecords,
  EHSTaskHostSemanticObject,
  EHSTaskOwnerUser,
  EHSTaskAssignedUserName
  }
  where 
    EHSTaskDueDate <> '00000000'
    and EHSTaskHostSemanticObject = 'ComplianceRegister'
    and ( EHSTaskStatus = '03' or EHSTaskStatus = '04' )
```
