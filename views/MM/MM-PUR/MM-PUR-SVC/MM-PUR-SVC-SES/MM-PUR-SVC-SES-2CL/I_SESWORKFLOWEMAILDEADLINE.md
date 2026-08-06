---
name: I_SESWORKFLOWEMAILDEADLINE
description: Sesworkflowemaildeadline
app_component: MM-PUR-SVC-SES-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-SVC
  - interface-view
  - workflow
  - email
  - component:MM-PUR-SVC-SES-2CL
  - lob:Sourcing & Procurement
---
# I_SESWORKFLOWEMAILDEADLINE

**Sesworkflowemaildeadline**

| Property | Value |
|---|---|
| App Component | `MM-PUR-SVC-SES-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `WorkflowTaskInternalID` | `_WorkflowTask.WorkflowTaskInternalID` |
| `SAPObjectNodeRepresentation` | `_WorkflowTaskApplObject.SAPObjectNodeRepresentation` |
| `SuplrInvcWrkflwTaskDesc` | `_WorkflowTask._TaskTitle[1:Language=$session.system_language].WorkflowTaskName` |
| `SuplrInvcWrkflwTaskType` | `_WorkflowTask.WorkflowTaskType` |
| `SuplrInvcWrkflwTskTypeDesc` | `_WorkflowTask._TaskType._Text[1:Language=$session.system_language].WorkflowTaskTypeDesc` |
| `SuplrInvcWrkflwTaskStatus` | `_WorkflowTask.WorkflowTaskStatus` |
| `SuplrInvcWrkflwTskStatusDesc` | `_WorkflowTask._TaskStatus._Text[1:Language=$session.system_language].WorkflowTaskStatusDesc` |
| `WorkflowTaskCreatedByUser` | `_WorkflowTask.WorkflowTaskCreatedByUser` |
| `SuplrInvcWrkflwTskCrtnDateTime` | `_WorkflowTask.WrkflwTskCreationUTCDateTime` |
| `WorkflowTaskCurrentUser` | `_WorkflowTask.WorkflowTaskCurrentUser` |
| `FullName` | `_User.UserDescription` |
| `WorkflowTaskDefinition` | `_WorkflowTask.WorkflowTaskDefinition` |
| `WorkflowTaskDueUTCDateTime` | `_TaskDueDate.WorkflowTaskDueUTCDateTime` |
| `ServiceEntrySheet` | `_ServiceEntrySheet.ServiceEntrySheet` |
| `ServiceEntrySheetName` | `_ServiceEntrySheet.ServiceEntrySheetName` |
| `PurchasingOrganization` | `_ServiceEntrySheet.PurchasingOrganization` |
| `PurchasingGroup` | `_ServiceEntrySheet.PurchasingGroup` |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceEntrySheet` | `I_ServiceEntrySheetBasic` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISESWFEMLDL'
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck:#MANDATORY
@VDM.viewType : #COMPOSITE
@AccessControl.personalData.blocking: #REQUIRED

@ObjectModel: {
  usageType.serviceQuality: #C,
  usageType.sizeCategory: #XL,
  usageType.dataClass: #MIXED,
  supportedCapabilities: #OUTPUT_EMAIL_DATA_PROVIDER,
  modelingPattern: #OUTPUT_EMAIL_DATA_PROVIDER
}

@EndUserText.label: 'Email Template for Service Entry Sheet Workflow Deadline'
define view I_SESWorkflowEmailDeadline
  as select from    I_WorkflowTask           as _WorkflowTask
    inner join      I_WorkflowTaskApplObject as _WorkflowTaskApplObject on  _WorkflowTaskApplObject.WorkflowTaskInternalID        = _WorkflowTask.WorkflowTaskInternalID
                                                                        and _WorkflowTaskApplObject.WorkflowObjectRole            = '01'
                                                                        and _WorkflowTaskApplObject.SAPObjectNodeRepresentation   = 'ServiceEntrySheet'
                                                                        and _WorkflowTaskApplObject.TechnicalWrkflwObjectCategory = 'CL'
    left outer to one join I_User                   as _User            on _WorkflowTask.WorkflowTaskCurrentUser = _User.UserID

  association [0..1] to I_ServiceEntrySheetBasic as _ServiceEntrySheet
  on _ServiceEntrySheet.ServiceEntrySheet = _WorkflowTaskApplObject.SAPBusinessObjectNodeKey1
  and _WorkflowTaskApplObject.WorkflowTaskInternalID is not null

{

  key  _WorkflowTask.WorkflowTaskInternalID                                                        as WorkflowTaskInternalID,

       _WorkflowTaskApplObject.SAPObjectNodeRepresentation,

       _WorkflowTask._TaskTitle[1:Language=$session.system_language].WorkflowTaskName              as SuplrInvcWrkflwTaskDesc,

       _WorkflowTask.WorkflowTaskType                                                              as SuplrInvcWrkflwTaskType,

       _WorkflowTask._TaskType._Text[1:Language=$session.system_language].WorkflowTaskTypeDesc     as SuplrInvcWrkflwTskTypeDesc,

       _WorkflowTask.WorkflowTaskStatus                                                            as SuplrInvcWrkflwTaskStatus,

       @EndUserText.label: 'Task Status Name'
       _WorkflowTask._TaskStatus._Text[1:Language=$session.system_language].WorkflowTaskStatusDesc as SuplrInvcWrkflwTskStatusDesc,

       _WorkflowTask.WorkflowTaskCreatedByUser,

       _WorkflowTask.WrkflwTskCreationUTCDateTime                                                  as SuplrInvcWrkflwTskCrtnDateTime,

       _WorkflowTask.WorkflowTaskCurrentUser,

       _User.UserDescription                                                                       as FullName,

       _WorkflowTask.WorkflowTaskDefinition,

       _TaskDueDate.WorkflowTaskDueUTCDateTime,

       _ServiceEntrySheet.ServiceEntrySheet,

       _ServiceEntrySheet.ServiceEntrySheetName,

       _ServiceEntrySheet.PurchasingOrganization,

       _ServiceEntrySheet.PurchasingGroup

       //@Semantics.amount.currencyCode: 'DocumentCurrency'
       //_ServiceEntrySheet.Currency

}
where _WorkflowTask.WorkflowTaskType = 'W'
```
