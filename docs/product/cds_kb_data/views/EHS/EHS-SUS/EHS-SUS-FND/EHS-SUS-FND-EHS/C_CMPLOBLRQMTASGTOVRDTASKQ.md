---
name: C_CMPLOBLRQMTASGTOVRDTASKQ
description: "Cmpl Obl Rqmt Asgt Ovrd Task - Query"
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMPLOBLRQMTASGTOVRDTASKQ')/$value
semantic_en: "Cmpl Obl Rqmt Asgt Ovrd Task - Query"
semantic_vi: "Cmpl Obl Rqmt Asgt Ovrd Task - Query — CDS view tiêu dùng dựa trên Cmpl Obl Rqmt Asgt Ovrd Task - Query."
keywords:
  - "cmpl"
  - "obl"
  - "rqmt"
  - "asgt"
  - "ovrd"
  - "task"
  - "query"
  - "planned"
  - "cmplnc"
  - "oblgn"
  - "assignment"
  - "obligation"
  - "compliance"
  - "requirement"
  - "location"
tags:
  - EHS
  - component:EHS-SUS-FND-EHS
  - consumption-view
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - task
---
# C_CMPLOBLRQMTASGTOVRDTASKQ

**Cmpl Obl Rqmt Asgt Ovrd Task - Query**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMPLOBLRQMTASGTOVRDTASKQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSPlannedTaskUUID` |  | |  |  | `RAW(16)` | Planned Task UUID |
| `CmplncOblgnRqmtAssignmentUUID` |  | |  |  | `RAW(16)` | Obligation Requirement Assignment UUID |
| `CmplncObligationAssignmentUUID` |  | |  |  | `RAW(16)` | Compliance Obligation Assignment UUID |
| `ComplianceOblgnRequirementUUID` |  | |  |  | `RAW(16)` | Compliance Obligation Requirement |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `EHSLocationName` |  | |  |  | `CHAR(60)` | Location Revision Text |
| `EHSTaskStatusValueForSorting` |  | |  | `EHSTaskStatus` | `CHAR(2)` | Status of Task Instance (Without Conversion Exit) |
| `EHSTaskStatusName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `EHSTaskHostSemanticObject` |  | |  |  | `CHAR(30)` | Semantic Object |
| `EHSNumberOfOverdueTasks` |  | |  |  | `INT4(10)` | Number of Overdue Tasks |
| `EHSNumberOfDueTasks` |  | |  |  | `INT4(10)` | Number of Due Tasks |
| `EHSNumberOfTasks` |  | |  |  | `INT4(10)` | Number of Due Tasks |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMPLOBLRQMTASGTOVRDTASKQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMPLOBLRQMTASGTOVRDTASKQ')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@VDM.viewType: #CONSUMPTION
@EndUserText.label: 'Cmpl Obl Rqmt Asgt Ovrd Task - Query'
@AccessControl.authorizationCheck: #NOT_ALLOWED
@OData.publish: true

@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]

@ObjectModel.usageType:{
serviceQuality: #D,
sizeCategory: #XL,
dataClass: #MIXED
}
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations:true

define transient view entity C_CmplOblRqmtAsgtOvrdTaskQ
  provider contract analytical_query
  as projection on I_CmplOblRqmtAsgtTaskCube
{
  EHSPlannedTaskUUID,
  CmplncOblgnRqmtAssignmentUUID,
  CmplncObligationAssignmentUUID,
  ComplianceOblgnRequirementUUID,
  EHSLocationUUID,
  EHSLocationName,
  
  /* Since we need to have correct set filters for EHSTaskStatus during navigation to MonitoringTasks app
  the field has been returned to its original name */
  EHSTaskStatus as EHSTaskStatusValueForSorting,
  EHSTaskStatusName,
  EHSTaskHostSemanticObject,
  EHSNumberOfOverdueTasks,
  EHSNumberOfDueTasks,
  EHSNumberOfTasks

}
where
  (
       EHSTaskStatus             = '02'
    or EHSTaskStatus             = '03'
  )
  and  EHSTaskHostSemanticObject = 'ComplianceRegister'
```
