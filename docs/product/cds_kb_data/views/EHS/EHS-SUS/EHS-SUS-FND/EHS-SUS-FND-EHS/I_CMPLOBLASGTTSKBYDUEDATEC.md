---
name: I_CMPLOBLASGTTSKBYDUEDATEC
description: "Tasks by Due Date - Cube"
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMPLOBLASGTTSKBYDUEDATEC')/$value
semantic_en: "Tasks by Due Date - Cube"
semantic_vi: "Tasks by Due Date - Cube — CDS view giao diện dựa trên I_CmplncOblgnRqmtAssignment."
keywords:
  - "tasks"
  - "due"
  - "date"
  - "cube"
  - "cmplnc"
  - "oblgn"
  - "rqmt"
  - "assignment"
  - "obligation"
  - "compliance"
  - "location"
  - "name"
tags:
  - EHS
  - component:EHS-SUS-FND-EHS
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - interface-view
  - task
---
# I_CMPLOBLASGTTSKBYDUEDATEC

**Tasks by Due Date - Cube**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMPLOBLASGTTSKBYDUEDATEC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CmplncOblgnRqmtAssignmentUUID` | ✓ | |  |  | `RAW(16)` | Obligation Requirement Assignment UUID |
| `CmplncObligationAssignmentUUID` |  | |  |  | `RAW(16)` | Compliance Obligation Assignment UUID |
| `ComplianceObligationUUID` |  | | `_ObligationAssignment` | `ComplianceObligationUUID` | `RAW(16)` | Compliance Obligation |
| `EHSLocationUUID` |  | | `_ObligationAssignment` | `EHSLocationUUID` | `RAW(16)` | Location |
| `EHSLocationName` |  | | `_ObligationAssignment` | `EHSLocationName` | `CHAR(60)` | Location Revision Text |
| `CmplncOblgnTypeDescription` |  | | `_ObligationAssignment` | `CmplncOblgnTypeDescription` | `CHAR(60)` | Compliance Obligation Type Description |
| `ComplianceObligationTypeCode` |  | | `_ObligationAssignment` | `ComplianceObligationTypeCode` | `CHAR(2)` | Compliance Obligation Type |
| `ComplianceObligationDomainCode` |  | | `_ObligationAssignment` | `ComplianceObligationDomainCode` | `CHAR(21)` | Compliance Obligation Domain |
| `EHSTaskDueInValue` |  | |  | `cast ( abs(dats_days_between( $session.system_date, _ObligationTask.EHSTaskDueDate )) as ehfnd_number_of_records preserving type )` | `INT4(10)` | Number of Records |
| `NumberOfRecords` |  | |  | `cast ( abs(dats_days_between( $session.system_date, _ObligationTask.EHSTaskDueDate )) as ehfnd_number_of_records preserving type )` | `INT4(10)` | Number of Records |
| `EHSPlannedTaskUUID` |  | | `_ObligationTask` | `EHSPlannedTaskUUID` | `RAW(16)` | Planned Task UUID |
| `EHSTaskTitle` |  | | `_ObligationTask` | `EHSTaskTitle` | `CHAR(60)` | Task Title |
| `EHSTaskDueDate` |  | | `_ObligationTask` | `EHSTaskDueDate` | `DATS(8)` | Due Date of a Planned Task |
| `EHSTaskHostSemanticObject` |  | | `_ObligationTask` | `EHSTaskHostSemanticObject` | `CHAR(30)` | Semantic Object |
| `EHSTaskStatus` |  | | `_ObligationTask` | `EHSTaskStatusValueForSorting` | `CHAR(2)` | Status of Task Instance (Without Conversion Exit) |
| `EHSTaskAssignedUserName` |  | | `_ObligationTask` | `EHSTaskAssignedUserName` | `CHAR(80)` | User Description |
| `EHSTaskOwnerUser` |  | | `_ObligationTask` | `EHSTaskOwnerUser` | `CHAR(12)` | User ID |
| `WorkflowTaskInternalID` |  | | `_ObligationTask` | `WorkflowTaskInternalID` | `NUMC(12)` | Work item ID |
| `_ObligationAssignment` | | ✓ | | | | |
| `_ObligationTask` | | ✓ | | | | |
| `_ObligationDomain` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ObligationAssignment` | `I_CmplncOblgnAssignmentCube` | [1..1] |
| `_ObligationTask` | `I_EHSCombinedTaskDefAndInstce` | [0..*] |
| `_ObligationDomain` | `I_ComplianceObligationDomain` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMPLOBLASGTTSKBYDUEDATEC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMPLOBLASGTTSKBYDUEDATEC')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@EndUserText.label: 'Tasks by Due Date - Cube'
@Analytics: { dataCategory:#CUBE, internalName: #LOCAL }
@VDM.viewType: #COMPOSITE
@ObjectModel.usageType:{ serviceQuality: #D,
                         sizeCategory:  #L,
                         dataClass: #MIXED }
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true

define view entity I_CmplOblAsgtTskByDueDateC
  as select from I_CmplncOblgnRqmtAssignment

  association [1..1] to I_CmplncOblgnAssignmentCube   as _ObligationAssignment on  $projection.CmplncObligationAssignmentUUID = _ObligationAssignment.CmplncObligationAssignmentUUID
  association [0..*] to I_EHSCombinedTaskDefAndInstce as _ObligationTask       on  $projection.CmplncOblgnRqmtAssignmentUUID = _ObligationTask.EHSTaskHostObjectInstanceUUID
                                                                               and ( _ObligationTask.EHSTaskStatusValueForSorting = '02'
                                                                                or _ObligationTask.EHSTaskStatusValueForSorting = '03'
                                                                                or _ObligationTask.EHSTaskStatusValueForSorting = '04' )
  association [0..*] to I_ComplianceObligationDomain  as _ObligationDomain     on  $projection.complianceobligationuuid = _ObligationDomain.ComplianceObligationUUID
{
  key   CmplncOblgnRqmtAssignmentUUID,

        CmplncObligationAssignmentUUID,

        _ObligationAssignment.ComplianceObligationUUID,

        @ObjectModel.text.element: ['EHSLocationName']
        _ObligationAssignment.EHSLocationUUID,
        
        @Semantics.text: true
        _ObligationAssignment.EHSLocationName,

        @Semantics.text: true
        _ObligationAssignment.CmplncOblgnTypeDescription,

        @ObjectModel.text.element: ['CmplncOblgnTypeDescription']
        _ObligationAssignment.ComplianceObligationTypeCode,

        _ObligationAssignment.ComplianceObligationDomainCode,

        @Aggregation.default:#SUM
        cast ( abs(dats_days_between( $session.system_date, _ObligationTask.EHSTaskDueDate ))
          as ehfnd_number_of_records  preserving type ) as EHSTaskDueInValue,
          
        cast ( abs(dats_days_between( $session.system_date, _ObligationTask.EHSTaskDueDate ))
          as ehfnd_number_of_records  preserving type ) as NumberOfRecords,      

        _ObligationTask.EHSPlannedTaskUUID,

        @Semantics.text: true
        _ObligationTask.EHSTaskTitle,
        
        _ObligationTask.EHSTaskDueDate,

        _ObligationTask.EHSTaskHostSemanticObject,

        _ObligationTask.EHSTaskStatusValueForSorting    as EHSTaskStatus,
        
        @Semantics.text: true
        _ObligationTask.EHSTaskAssignedUserName,
        
        @ObjectModel.text.element: ['EHSTaskAssignedUserName']
        _ObligationTask.EHSTaskOwnerUser,

        _ObligationTask.WorkflowTaskInternalID,
  
        _ObligationAssignment,
        _ObligationTask,
        _ObligationDomain
}
```
