---
name: I_SESWORKFLOWEMAILDEADLINE
description: "Sesworkflowemaildeadline"
app_component: MM-PUR-SVC-SES-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkflowTaskInternalID` | ✓ | | `_WorkflowTask` | `WorkflowTaskInternalID` |  |  |
| `SAPObjectNodeRepresentation` |  | | `_WorkflowTaskApplObject` | `SAPObjectNodeRepresentation` |  |  |
| `SuplrInvcWrkflwTaskDesc` |  | |  | `_WorkflowTask._TaskTitle[1:Language=$session.system_language].WorkflowTaskName` |  |  |
| `SuplrInvcWrkflwTaskType` |  | | `_WorkflowTask` | `WorkflowTaskType` |  |  |
| `SuplrInvcWrkflwTskTypeDesc` |  | |  | `_WorkflowTask._TaskType._Text[1:Language=$session.system_language].WorkflowTaskTypeDesc` |  |  |
| `SuplrInvcWrkflwTaskStatus` |  | | `_WorkflowTask` | `WorkflowTaskStatus` |  |  |
| `SuplrInvcWrkflwTskStatusDesc` |  | |  | `_WorkflowTask._TaskStatus._Text[1:Language=$session.system_language].WorkflowTaskStatusDesc` |  |  |
| `WorkflowTaskCreatedByUser` |  | | `_WorkflowTask` | `WorkflowTaskCreatedByUser` |  |  |
| `SuplrInvcWrkflwTskCrtnDateTime` |  | | `_WorkflowTask` | `WrkflwTskCreationUTCDateTime` |  |  |
| `WorkflowTaskCurrentUser` |  | | `_WorkflowTask` | `WorkflowTaskCurrentUser` |  |  |
| `FullName` |  | | `_User` | `UserDescription` |  |  |
| `WorkflowTaskDefinition` |  | | `_WorkflowTask` | `WorkflowTaskDefinition` |  |  |
| `WorkflowTaskDueUTCDateTime` |  | | `_TaskDueDate` | `WorkflowTaskDueUTCDateTime` |  |  |
| `ServiceEntrySheet` |  | | `_ServiceEntrySheet` | `ServiceEntrySheet` |  |  |
| `ServiceEntrySheetName` |  | | `_ServiceEntrySheet` | `ServiceEntrySheetName` |  |  |
| `PurchasingOrganization` |  | | `_ServiceEntrySheet` | `PurchasingOrganization` |  |  |
| `PurchasingGroup` |  | | `_ServiceEntrySheet` | `PurchasingGroup` |  |  |

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
