---
name: I_CMPLOBLRQMTASGTTASKCUBE
description: "Tasks for compl obl rqmt asgt - Cube"
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMPLOBLRQMTASGTTASKCUBE')/$value
semantic_en: "Tasks for compl obl rqmt asgt - Cube"
semantic_vi: "Tasks for compl obl rqmt asgt - Cube — CDS view giao diện dựa trên I_EHSCombinedTaskDefAndInstce."
keywords:
  - "tasks"
  - "for"
  - "compl"
  - "obl"
  - "rqmt"
  - "asgt"
  - "cube"
  - "planned"
  - "task"
  - "cmplnc"
  - "oblgn"
  - "assignment"
  - "obligation"
  - "compliance"
  - "requirement"
tags:
  - EHS
  - component:EHS-SUS-FND-EHS
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - interface-view
  - task
---
# I_CMPLOBLRQMTASGTTASKCUBE

**Tasks for compl obl rqmt asgt - Cube**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMPLOBLRQMTASGTTASKCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSPlannedTaskUUID` | ✓ | |  |  | `RAW(16)` | Planned Task UUID |
| `CmplncOblgnRqmtAssignmentUUID` |  | | `_CmplncOblgnRqmtAssignment` | `CmplncOblgnRqmtAssignmentUUID` | `RAW(16)` | Obligation Requirement Assignment UUID |
| `CmplncObligationAssignmentUUID` |  | | `_CmplncOblgnRqmtAssignment` | `CmplncObligationAssignmentUUID` | `RAW(16)` | Compliance Obligation Assignment UUID |
| `ComplianceOblgnRequirementUUID` |  | | `_CmplncOblgnRqmtAssignment` | `ComplianceOblgnRequirementUUID` | `RAW(16)` | Compliance Obligation Requirement |
| `EHSTaskHostSemanticObject` |  | |  |  | `CHAR(30)` | Semantic Object |
| `EHSTaskHostObjectInstanceUUID` |  | |  |  | `RAW(16)` | Task Host Object Instance Identifier |
| `EHSTaskStatus` |  | |  | `EHSTaskStatusValueForSorting` | `CHAR(2)` | Status of Task Instance (Without Conversion Exit) |
| `EHSTaskStatusName` |  | | `_TaskStatusText` | `EHSTaskStatusName` | `CHAR(60)` | Short Text for Fixed Values |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `EHSLocationName` |  | | `_EHSLocNameFallbackLanguage` | `EHSLocationName` | `CHAR(60)` | Location Revision Text |
| `EHSNumberOfOverdueTasks` |  | |  | `cast( case when EHSTaskStatusValueForSorting = '02' then 1 else 0 end as ehfnd_number_of_overdue_tasks )` | `INT4(10)` | Number of Overdue Tasks |
| `EHSNumberOfDueTasks` |  | |  | `cast( case when EHSTaskStatusValueForSorting = '03' then 1 else 0 end as ehfnd_number_of_due_tasks )` | `INT4(10)` | Number of Due Tasks |
| `EHSNumberOfTasks` |  | |  | `cast( case when EHSTaskStatusValueForSorting = '03' or EHSTaskStatusValueForSorting = '02' then 1 else 0 end as ehfnd_number_of_due_tasks )` | `INT4(10)` | Number of Due Tasks |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CmplncOblgnRqmtAssignment` | `I_CmplncOblgnRqmtAssignment` | [0..1] |
| `_EHSLocNameFallbackLanguage` | `I_EHSLocNameFallbackLanguage` | [0..1] |
| `_TaskStatusText` | `I_EHSTaskSortingStatusText` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMPLOBLRQMTASGTTASKCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMPLOBLRQMTASGTTASKCUBE')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Tasks for compl obl rqmt asgt - Cube'
@Analytics: { dataCategory:#CUBE, internalName: #LOCAL }
@VDM.viewType: #COMPOSITE
@ObjectModel.usageType:{ serviceQuality: #D,
                         sizeCategory:  #XL,
                         dataClass: #MIXED }
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
// Mandatory since the participation of table BUT000 - BP: General data I
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true

define view entity I_CmplOblRqmtAsgtTaskCube
  as select from I_EHSCombinedTaskDefAndInstce
  association [0..1] to I_CmplncOblgnRqmtAssignment  as _CmplncOblgnRqmtAssignment  on  $projection.EHSTaskHostObjectInstanceUUID = _CmplncOblgnRqmtAssignment.CmplncOblgnRqmtAssignmentUUID
  association [0..1] to I_EHSLocNameFallbackLanguage as _EHSLocNameFallbackLanguage on  $projection.EHSLocationUUID = _EHSLocNameFallbackLanguage.EHSLocationUUID
  association [0..1] to I_EHSTaskSortingStatusText   as _TaskStatusText             on  $projection.EHSTaskStatus = _TaskStatusText.EHSTaskStatusValueForSorting
                                                                                    and _TaskStatusText.Language  = $session.system_language


{
  key EHSPlannedTaskUUID,
      _CmplncOblgnRqmtAssignment.CmplncOblgnRqmtAssignmentUUID,
      _CmplncOblgnRqmtAssignment.CmplncObligationAssignmentUUID,
      _CmplncOblgnRqmtAssignment.ComplianceOblgnRequirementUUID,
      EHSTaskHostSemanticObject,
      EHSTaskHostObjectInstanceUUID,
      /* Renamed since it is raising ATC:
         Fields for sorting and filtering may only be used in Fiori-UI consumption views and value help views */
      @ObjectModel.text.element: ['EHSTaskStatusName']
      EHSTaskStatusValueForSorting as EHSTaskStatus,
      @Semantics.text: true
      _TaskStatusText.EHSTaskStatusName,
      @ObjectModel.text.element: ['EHSLocationName']
      EHSLocationUUID,
      @Semantics.text: true
      _EHSLocNameFallbackLanguage.EHSLocationName,
      @Aggregation.default: #SUM
      cast(
      case when EHSTaskStatusValueForSorting = '02' then 1 else 0 end
      as ehfnd_number_of_overdue_tasks
      )                            as EHSNumberOfOverdueTasks,
      @Aggregation.default: #SUM
      cast(
        case when EHSTaskStatusValueForSorting = '03' then 1 else 0 end
        as ehfnd_number_of_due_tasks
      )                            as EHSNumberOfDueTasks,
      @Aggregation.default: #SUM
      cast(
        case when EHSTaskStatusValueForSorting = '03' or EHSTaskStatusValueForSorting = '02' then 1 else 0 end
        as ehfnd_number_of_due_tasks
      )                            as EHSNumberOfTasks

}

where
  EHSTaskHostSemanticObject = 'ComplianceRegister'
```
