---
name: I_LGLTRANSWRKFLWEMLDEADLINE
description: Lgltranswrkflwemldeadline
app_component: CM-LT-2CL
software_component: SAPSCORE
release_state: released
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
# I_LGLTRANSWRKFLWEMLDEADLINE

**Lgltranswrkflwemldeadline**

| Property | Value |
|---|---|
| App Component | `CM-LT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
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
| `FullName` |  | | `_User` | `UserDescription` |  |  |
| `WorkflowTaskDefinition` |  | | `_WorkflowTask` | `WorkflowTaskDefinition` |  |  |
| `WorkflowTaskDueUTCDateTime` |  | | `_TaskDueDate` | `WorkflowTaskDueUTCDateTime` |  |  |
| `_LegalTransactionBase` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LegalTransactionBase` | `I_LegalTransactionBase` | [1..1] |

## Source Code

```abap
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.sqlViewName: 'ILTWFEMLDL'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck:#CHECK
@VDM.viewType : #COMPOSITE
@AccessControl.personalData.blocking: #REQUIRED

@ObjectModel: {
  usageType.serviceQuality: #C,
  usageType.sizeCategory: #L,
  usageType.dataClass: #MIXED
}

@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]

@EndUserText.label: 'Email Template for Workflow Deadline'
define view I_LglTransWrkflwEmlDeadLine
  as select from    I_WorkflowTask             as _WorkflowTask
    left outer join I_WorkflowTaskApplObject   as _WorkflowTaskApplObject   on  _WorkflowTaskApplObject.WorkflowTaskInternalID        = _WorkflowTask.WorkflowTaskInternalID
                                                                            and _WorkflowTaskApplObject.WorkflowObjectRole            = '99'
    //                                                                            SAP node type after 2008
                                                                            and (
                                                                               _WorkflowTaskApplObject.SAPObjectNodeRepresentation    = 'LegalTransactionApproval'
                                                                               // SAP node type before 2008
                                                                               or _WorkflowTaskApplObject.SAPObjectNodeRepresentation = 'LegalTransaction'
                                                                             )
                                                                            and _WorkflowTaskApplObject.TechnicalWrkflwObjectCategory = 'CL'
    left outer join I_LegalTransactionWorkflow as _LegalTransactionWorkflow on  _LegalTransactionWorkflow.LglTransWrkFlwModInstce = _WorkflowTaskApplObject.TechnicalWrkflwObject
                                                                            and _WorkflowTaskApplObject.WorkflowTaskInternalID    is not null
    left outer join I_User                     as _User                     on _WorkflowTask.WorkflowTaskCurrentUser = _User.UserID
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

       _User.UserDescription                                                                                                  as FullName,

       _WorkflowTask.WorkflowTaskDefinition,

       _TaskDueDate.WorkflowTaskDueUTCDateTime,

       _LegalTransactionBase
}
```
