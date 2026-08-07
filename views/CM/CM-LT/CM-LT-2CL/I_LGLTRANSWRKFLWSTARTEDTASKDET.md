---
name: I_LGLTRANSWRKFLWSTARTEDTASKDET
description: Lgltranswrkflwstartedtaskdet
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
# I_LGLTRANSWRKFLWSTARTEDTASKDET

**Lgltranswrkflwstartedtaskdet**

| Property | Value |
|---|---|
| App Component | `CM-LT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `LegalTransactionTask` | ✓ | |  |  |
| `LegalTransactionUUID` | ✓ | |  |  |
| `LegalTransaction` |  | |  |  |
| `LegalTransactionTitle` |  | |  |  |
| `LglTransTskCrtnUTCDteTme` |  | |  |  |
| `LglCntntMTaskCompltnUTCDteTme` |  | |  |  |
| `LegalTransactionTaskStatus` |  | |  |  |
| `LegalTransactionTaskStatusName` |  | |  |  |
| `LegalTransactionTaskCurUsr` |  | |  |  |
| `LegalTransactionTaskCurUsrName` |  | | `_User` | `UserDescription` |
| `WorkflowTaskResult` |  | |  |  |
| `WorkflowStepResultText` |  | |  | `_WorkflowTaskStepResult[1:Language=$session.system_language].WorkflowStepResultText` |
| `WorkflowTaskResultComment` |  | |  |  |
| `_LegalTransaction` | | ✓ | | |

## Source Code

```abap
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]
@AbapCatalog.sqlViewName: 'ILGLTRANSWFTDET'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType : #COMPOSITE
@ObjectModel: {
  usageType.serviceQuality: #C,
  usageType.sizeCategory: #XL,
  usageType.dataClass:  #MIXED,
  modelingPattern: #NONE
}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.personalData.blocking: #REQUIRED
@EndUserText.label: 'Legal Transaction Workflow Task Details'
define view I_LglTransWrkflwStartedTaskDet
  as select from P_LglCntntMWorkflowTaskDetail
{
  key LegalTransactionTask,
  key LegalTransactionUUID,
      LegalTransaction,
      LegalTransactionTitle,
      LglTransTskCrtnUTCDteTme,
      LglCntntMTaskCompltnUTCDteTme,
      LegalTransactionTaskStatus,
      LegalTransactionTaskStatusName,
      LegalTransactionTaskCurUsr,
      _User.UserDescription                                                               as LegalTransactionTaskCurUsrName,
      WorkflowTaskResult,
      _WorkflowTaskStepResult[1:Language=$session.system_language].WorkflowStepResultText as WorkflowStepResultText,

      WorkflowTaskResultComment,

      //Associations
      _LegalTransaction
}
```
