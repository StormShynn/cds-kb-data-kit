---
name: I_LGLTRANSWRKFLWINSTCE
description: "Lgltranswrkflwinstce"
app_component: CM-LT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CM
  - CM-LT
  - interface-view
  - workflow
  - component:CM-LT-2CL
  - lob:Other
---
# I_LGLTRANSWRKFLWINSTCE

**Lgltranswrkflwinstce**

| Property | Value |
|---|---|
| App Component | `CM-LT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkflowTaskInternalID` | ✓ | | `_WorkflowTask` | `WorkflowTaskInternalID` |  |  |
| `LegalTransactionUUID` |  | |  |  |  |  |
| `LegalTransactionWrkflwSqnc` |  | |  |  |  |  |
| `LglTransWrkFlwModInstce` |  | |  |  |  |  |
| `LegalTransaction` |  | | `_LegalTransactionBase` | `LegalTransaction` |  |  |
| `LegalTransactionTitle` |  | | `_LegalTransactionBase` | `LegalTransactionTitle` |  |  |
| `LegalTransactionHealth` |  | | `_LegalTransactionBase` | `LegalTransactionHealth` |  |  |
| `LegalTransactionTaskName` |  | |  | `cast( _WorkflowTask._TaskTitle[1:Language=$session.system_language].WorkflowTaskName as sww_witext )` |  |  |
| `LegalTransactionTaskType` |  | | `_WorkflowTask` | `WorkflowTaskType` |  |  |
| `WorkflowTaskType` |  | | `_WorkflowTask` | `WorkflowTaskType` |  |  |
| `LegalTransactionTaskTypeName` |  | |  | `_WorkflowTask._TaskType._Text[1:Language=$session.system_language].WorkflowTaskTypeDesc` |  |  |
| `WorkflowTaskTypeDesc` |  | |  | `_WorkflowTask._TaskType._Text[1:Language=$session.system_language].WorkflowTaskTypeDesc` |  |  |
| `WorkflowTaskStepType` |  | | `_WorkflowTask` | `WorkflowTaskStepType` |  |  |
| `WorkflowStepTypeSubject` |  | |  | `_WorkflowTask._WorkflowStepType._WorkflowTaskStepTypeText[1:Language=$session.system_language].WorkflowStepTypeSubject` |  |  |
| `LegalTransactionTaskStatus` |  | | `_WorkflowTask` | `WorkflowTaskStatus` |  |  |
| `LegalTransactionTaskStatusName` |  | |  | `_WorkflowTask._TaskStatus._Text[1:Language=$session.system_language].WorkflowTaskStatusDesc` |  |  |
| `LegalTransactionTaskCrtedByUsr` |  | | `_WorkflowTask` | `WorkflowTaskCreatedByUser` |  |  |
| `LglTransTskCrtnUTCDteTme` |  | | `_WorkflowTask` | `WrkflwTskCreationUTCDateTime` |  |  |
| `LegalTransactionTaskCurUsr` |  | | `_WorkflowTask` | `WorkflowTaskCurrentUser` |  |  |
| `WorkflowTaskDefinition` |  | | `_WorkflowTask` | `WorkflowTaskDefinition` |  |  |
| `_LegalTransactionBase` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LegalTransactionBase` | `I_LegalTransactionBase` | [1..1] |

## Source Code

```abap
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.sqlViewName: 'ILTWFINSTCE'
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck:#CHECK
@VDM.viewType : #COMPOSITE
@AbapCatalog.preserveKey:true
@AccessControl.personalData.blocking: #REQUIRED

@ObjectModel: {
  usageType.serviceQuality: #C,
  usageType.sizeCategory: #L,
  usageType.dataClass: #MIXED
}

@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]

@EndUserText.label: 'Data for Workflow Instance'
define view I_LglTransWrkflwInstce
  as select from    I_WorkflowTask             as _WorkflowTask
    left outer join I_WorkflowTaskApplObject   as _WorkflowTaskApplObject   on  _WorkflowTaskApplObject.WorkflowTaskInternalID        = _WorkflowTask.WorkflowTaskInternalID
                                                                            and _WorkflowTaskApplObject.WorkflowObjectRole            = '01'
    //                                                                            SAP node type after 2008
                                                                            and (
                                                                               _WorkflowTaskApplObject.SAPObjectNodeRepresentation    = 'LegalTransactionApproval'
                                                                               // SAP node type before 2008
                                                                               or _WorkflowTaskApplObject.SAPObjectNodeRepresentation = 'LegalTransaction'
                                                                             )
                                                                            and _WorkflowTaskApplObject.TechnicalWrkflwObjectCategory = 'CL'

    left outer join I_LegalTransactionWorkflow as _LegalTransactionWorkflow on  _LegalTransactionWorkflow.LglTransWrkFlwModInstce = _WorkflowTaskApplObject.TechnicalWrkflwObject
                                                                            and _WorkflowTaskApplObject.WorkflowTaskInternalID    is not null
  association [1..1] to I_LegalTransactionBase as _LegalTransactionBase on _LegalTransactionWorkflow.LegalTransactionUUID = _LegalTransactionBase.LegalTransactionUUID
  //  association [1..1] to I_LglTransWorkflowTaskTitle as _LglTransWorkflowTaskTitle on $projection.WorkflowTaskInternalID = _LglTransWorkflowTaskTitle.WorkflowTaskInternalID
{

  key  _WorkflowTask.WorkflowTaskInternalID                                                                                   as WorkflowTaskInternalID,

       LegalTransactionUUID,

       LegalTransactionWrkflwSqnc,

       LglTransWrkFlwModInstce,

       _LegalTransactionBase.LegalTransaction,
       _LegalTransactionBase.LegalTransactionTitle,
       _LegalTransactionBase.LegalTransactionHealth,

       cast( _WorkflowTask._TaskTitle[1:Language=$session.system_language].WorkflowTaskName as sww_witext )                   as LegalTransactionTaskName,
       //       _LglTransWorkflowTaskTitle.WorkflowTaskName                                                 as LegalTransactionTaskName,

       @VDM.lifecycle.status: #DEPRECATED
       @VDM.lifecycle.successor: 'WorkflowTaskType'
       _WorkflowTask.WorkflowTaskType                                                                                         as LegalTransactionTaskType,
       _WorkflowTask.WorkflowTaskType                                                                                         as WorkflowTaskType,

       @VDM.lifecycle.status: #DEPRECATED
       @VDM.lifecycle.successor: 'WorkflowTaskTypeDesc'
       _WorkflowTask._TaskType._Text[1:Language=$session.system_language].WorkflowTaskTypeDesc                                as LegalTransactionTaskTypeName,
       _WorkflowTask._TaskType._Text[1:Language=$session.system_language].WorkflowTaskTypeDesc                                as WorkflowTaskTypeDesc,

       _WorkflowTask.WorkflowTaskStepType                                                                                     as WorkflowTaskStepType,

       _WorkflowTask._WorkflowStepType._WorkflowTaskStepTypeText[1:Language=$session.system_language].WorkflowStepTypeSubject as WorkflowStepTypeSubject,

       _WorkflowTask.WorkflowTaskStatus                                                                                       as LegalTransactionTaskStatus,

       _WorkflowTask._TaskStatus._Text[1:Language=$session.system_language].WorkflowTaskStatusDesc                            as LegalTransactionTaskStatusName,

       _WorkflowTask.WorkflowTaskCreatedByUser                                                                                as LegalTransactionTaskCrtedByUsr,

       _WorkflowTask.WrkflwTskCreationUTCDateTime                                                                             as LglTransTskCrtnUTCDteTme,

       _WorkflowTask.WorkflowTaskCurrentUser                                                                                  as LegalTransactionTaskCurUsr,

       _WorkflowTask.WorkflowTaskDefinition,

       _LegalTransactionBase
}
```
