---
name: C_EHSTASKINSTANCEDEX
description: "EHS Task Instance Data Extractor"
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSTASKINSTANCEDEX')/$value
semantic_en: "EHS Task Instance Data Extractor"
semantic_vi: "EHS Task Instance Data Extractor — CDS view tiêu dùng dựa trên I_EHSTaskPlannedInstance."
keywords:
  - "ehs"
  - "task"
  - "instance"
  - "data"
  - "extractor"
  - "planned"
  - "date"
  - "start"
  - "instce"
  - "completion"
tags:
  - EHS
  - component:EHS-SUS-FND-EHS
  - consumption-view
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - task
---
# C_EHSTASKINSTANCEDEX

**EHS Task Instance Data Extractor**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSTASKINSTANCEDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSPlannedTaskUUID` | ✓ | |  |  | `RAW(16)` | Planned Task UUID |
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
| `EHSTaskDefinitionType` |  | |  | `EHSTaskWorkflowEvent` | `CHAR(32)` | Task Type |
| `EHSLocationID` |  | |  |  | `CHAR(20)` | Location ID |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `EHSTaskHostSemanticObject` |  | |  | `EHSSemanticObject` | `CHAR(30)` | Semantic Object |
| `EHSTaskIsRecurrent` |  | |  | `case when EHSTaskDefinition.EHSTaskRecurrenceType = '001' then cast( '' as ehfnd_task_def_is_recurrent preserving type ) else cast( 'X' as ehfnd_task_def_is_recurrent preserving type ) end` | `CHAR(1)` | Recurrence |
| `EHSTaskHasWorkflow` |  | |  | `case when EHSPlannedInstance.WorkflowTaskInternalID is initial then cast ( '' as ehfnd_task_has_workflow preserving type ) else cast ( 'X' as ehfnd_task_has_workflow preserving type ) end` | `CHAR(1)` | Workflow Exists |
| `_EHSLocationRevisionBasic` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EHSLocationRevisionBasic` | `I_EHSLocationRevisionBasic` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSTASKINSTANCEDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSTASKINSTANCEDEX')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'EHS Task Instance Data Extractor'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #D,
  sizeCategory: #XL,
  dataClass: #MIXED
}
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'EHSPlannedTaskUUID'
@ObjectModel.sapObjectNodeType.name: 'EHSTaskDefinitionPlanned'
@VDM.viewType: #CONSUMPTION
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      mapping: [
      {
        table: 'ehfndd_task_plan',
        role: #MAIN,
        viewElement: ['EHSPlannedTaskUUID'],
        tableElement: ['EHSPlannedTaskUUID']
      },
      {
        table: 'ehfndd_tdef_root',
        role: #LEFT_OUTER_TO_ONE_JOIN,
        viewElement: ['EHSTaskDefinitionUUID'],
        tableElement: ['EHSTaskDefinitionUUID']
      },
      {
        table: 'ehfndd_loc_root',
        role: #LEFT_OUTER_TO_ONE_JOIN,
        viewElement: ['EHSLocationUUID'],
        tableElement: ['db_key']
      },
      {
        table: 'ehfndc_classdef',
        role: #LEFT_OUTER_TO_ONE_JOIN,
        viewElement: ['EHSTaskHostSemanticObject'],
        tableElement: ['class_name']
      }]
    }
  }
}
@Metadata.allowExtensions: true

define view entity C_EHSTaskInstanceDEX
  as select from           I_EHSTaskPlannedInstance as EHSPlannedInstance
    left outer to one join I_EHSTaskDefinition      as EHSTaskDefinition   on EHSPlannedInstance.EHSTaskDefinitionUUID = EHSTaskDefinition.EHSTaskDefinitionUUID
    left outer to one join I_EHSTaskAdapterClass    as EHSTaskAdapterClass on EHSTaskDefinition.EHSTaskHostObjectAdapterClass = EHSTaskAdapterClass.EHSTaskAdapterClass
    left outer to one join I_EHSLocationRoot        as EHSLocationRoot     on EHSTaskDefinition.EHSLocationUUID = EHSLocationRoot.EHSLocationUUID
  association [0..*] to I_EHSLocationRevisionBasic as _EHSLocationRevisionBasic on $projection.EHSLocationUUID = _EHSLocationRevisionBasic.EHSLocationUUID
{

  key EHSPlannedInstance.EHSPlannedTaskUUID,
      EHSPlannedInstance.EHSPlannedTaskID,
      EHSPlannedInstance.EHSTaskDueDate,
      EHSPlannedInstance.EHSTaskStartDate,
      EHSPlannedInstance.EHSTaskInstceCompletionDate,
      EHSTaskDefinition.EHSTaskDefinitionUUID,
      EHSTaskDefinition.EHSTaskTitle,
      EHSTaskDefinition.EHSTaskPriority,
      EHSTaskDefinition.EHSTaskDefinitionStatus,
      EHSTaskDefinition.EHSTaskAssignedUser,
      EHSTaskDefinition.EHSTaskApprovingUser,
      EHSTaskDefinition.EHSTaskWorkflowEvent as EHSTaskDefinitionType,
      EHSLocationRoot.EHSLocationID,
      EHSLocationRoot.EHSLocationUUID,
      EHSTaskAdapterClass.EHSSemanticObject  as EHSTaskHostSemanticObject,

      case
        when EHSTaskDefinition.EHSTaskRecurrenceType = '001'
        then cast( '' as ehfnd_task_def_is_recurrent preserving type )
        else cast( 'X' as ehfnd_task_def_is_recurrent preserving type )
      end                                    as EHSTaskIsRecurrent,

      case
        when EHSPlannedInstance.WorkflowTaskInternalID is initial then cast ( '' as ehfnd_task_has_workflow preserving type )
        else cast ( 'X' as ehfnd_task_has_workflow preserving type )
      end                                    as EHSTaskHasWorkflow,

      // Needed for DCL
      _EHSLocationRevisionBasic

}
```
