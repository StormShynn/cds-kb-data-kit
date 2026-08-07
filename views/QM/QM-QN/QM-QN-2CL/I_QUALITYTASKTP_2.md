---
name: I_QUALITYTASKTP_2
description: "Qualitytasktp 2"
app_component: QM-QN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-QN
  - interface-view
  - transactional-processing
  - component:QM-QN-2CL
  - lob:Quality Management
---
# I_QUALITYTASKTP_2

**Qualitytasktp 2**

| Property | Value |
|---|---|
| App Component | `QM-QN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `QualityTaskInternalId` | ✓ | | `_QualityTask` | `QualityTaskInternalId` |  |  |
| `QualityTask` |  | | `_QualityTask` | `QualityTask` |  |  |
| `QualityTaskOrigin` |  | | `_QualityTask` | `QualityTaskOrigin` |  |  |
| `QualityTaskText` |  | | `_QualityTask` | `QualityTaskText` |  |  |
| `IsDeleted` |  | | `_QualityTask` | `IsDeleted` |  |  |
| `QualityTaskProcessor` |  | | `_QualityTask` | `QualityTaskProcessor` |  |  |
| `MasterLanguage` |  | | `_QualityTask` | `MasterLanguage` |  |  |
| `NotifTaskCompletedByUser` |  | | `_QualityTask` | `NotifTaskCompletedByUser` |  |  |
| `QualityTaskType` |  | | `_QualityTask` | `QualityTaskType` |  |  |
| `QualityTaskCodeCatalog` |  | | `_QualityTask` | `QualityTaskCodeCatalog` |  |  |
| `QualityTaskCodeGroup` |  | | `_QualityTask` | `QualityTaskCodeGroup` |  |  |
| `QualityTaskCode` |  | | `_QualityTask` | `QualityTaskCode` |  |  |
| `NotifTaskTimeZone` |  | | `_QualityTask` | `NotifTaskTimeZone` |  |  |
| `NotifTaskPlannedEndDate` |  | | `_QualityTask` | `NotifTaskPlannedEndDate` |  |  |
| `NotifTaskPlannedEndTime` |  | | `_QualityTask` | `NotifTaskPlannedEndTime` |  |  |
| `NotifTaskCompletionDate` |  | | `_QualityTask` | `NotifTaskCompletionDate` |  |  |
| `NotifTaskCompletionTime` |  | | `_QualityTask` | `NotifTaskCompletionTime` |  |  |
| `NotifTaskResubmissionDate` |  | | `_QualityTask` | `NotifTaskResubmissionDate` |  |  |
| `NotifTaskResubmissionTime` |  | | `_QualityTask` | `NotifTaskResubmissionTime` |  |  |
| `DefectInternalID` |  | | `_QualityTask` | `DefectInternalID` |  |  |
| `PredecessorQltyTaskIntNumber` |  | | `_QualityTask` | `PredecessorQltyTaskIntNumber` |  |  |
| `ProbSolvingProc` |  | | `_QualityTask` | `ProbSolvingProc` |  |  |
| `ProbSolvingProcStp` |  | | `_QualityTask` | `ProbSolvingProcStp` |  |  |
| `ProbSolvingProcCause` |  | | `_QualityTask` | `ProbSolvingProcCause` |  |  |
| `QltyTaskFollowUpAction` |  | | `_QualityTask` | `QltyTaskFollowUpAction` |  |  |
| `QualityTaskLifecycleStatus` |  | | `_QualityTask` | `QualityTaskLifecycleStatus` |  |  |
| `QualityTaskArchivingStatus` |  | | `_QualityTask` | `QualityTaskArchivingStatus` |  |  |
| `QltyTaskFllwUpActionSts` |  | | `_QualityTask` | `QltyTaskFllwUpActionSts` |  |  |
| `CreatedByUser` |  | | `_QualityTask` | `CreatedByUser` |  |  |
| `CreationDate` |  | | `_QualityTask` | `CreationDate` |  |  |
| `CreationTime` |  | | `_QualityTask` | `CreationTime` |  |  |
| `ChangedDateTime` |  | | `_QualityTask` | `ChangedDateTime` |  |  |
| `LastChangeDate` |  | | `_QualityTask` | `LastChangeDate` |  |  |
| `LastChangeTime` |  | | `_QualityTask` | `LastChangeTime` |  |  |
| `LastChangedByUser` |  | | `_QualityTask` | `LastChangedByUser` |  |  |
| `QltyTskProcgIsCtrldByTskOrigin` |  | | `_QualityTask` | `QltyTskProcgIsCtrldByTskOrigin` |  |  |
| `QltyTaskTimeBasedEffort` |  | | `_QualityTask` | `QltyTaskTimeBasedEffort` |  |  |
| `QltyTaskTimeBasedEffortUoM` |  | | `_QualityTask` | `QltyTaskTimeBasedEffortUoM` |  |  |
| `_QualityTaskLongText` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Quality Task - TP'
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.usage.type: [ #TRANSACTIONAL_PROCESSING_SERVICE ]
@ObjectModel.sapObjectNodeType: { name: 'QualityTask' }
@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType: {
    dataClass: #TRANSACTIONAL,
    sizeCategory: #L,
    serviceQuality: #A
  },
  representativeKey: 'QualityTaskInternalId',
  semanticKey: ['QualityTask']
}
@Metadata.ignorePropagatedAnnotations: true

define root view entity I_QualityTaskTP_2
  provider contract transactional_interface
  as projection on R_QualityTaskTP as _QualityTask
  
{
  key _QualityTask.QualityTaskInternalId,
  
      @ObjectModel.sapObjectNodeTypeReference: 'QualityTask'
      _QualityTask.QualityTask,
      _QualityTask.QualityTaskOrigin,
      _QualityTask.QualityTaskText,
      @Semantics.booleanIndicator: true
      _QualityTask.IsDeleted,
      _QualityTask.QualityTaskProcessor,
      _QualityTask.MasterLanguage,
      _QualityTask.NotifTaskCompletedByUser,
      _QualityTask.QualityTaskType,
  
//=== Code
      _QualityTask.QualityTaskCodeCatalog,
      _QualityTask.QualityTaskCodeGroup,
      _QualityTask.QualityTaskCode,
  
//=== Time Zone dependent fields
      _QualityTask.NotifTaskTimeZone,
      _QualityTask.NotifTaskPlannedEndDate,
      _QualityTask.NotifTaskPlannedEndTime,
      _QualityTask.NotifTaskCompletionDate,
      _QualityTask.NotifTaskCompletionTime,
      _QualityTask.NotifTaskResubmissionDate,
      _QualityTask.NotifTaskResubmissionTime,

//=== Reference Object Fields
      _QualityTask.DefectInternalID,
      _QualityTask.PredecessorQltyTaskIntNumber,
      _QualityTask.ProbSolvingProc,
      _QualityTask.ProbSolvingProcStp,
      _QualityTask.ProbSolvingProcCause,
      
//=== Follow-Up Action
      _QualityTask.QltyTaskFollowUpAction,
      -- 'transient' field
      //_QualityTask.QltyTskFllwUpActnConfignVal,
  
//=== Status
      _QualityTask.QualityTaskLifecycleStatus,
      _QualityTask.QualityTaskArchivingStatus,
      _QualityTask.QltyTaskFllwUpActionSts,
      
//=== Administrative Data
      _QualityTask.CreatedByUser,
      _QualityTask.CreationDate,
      _QualityTask.CreationTime,
      _QualityTask.ChangedDateTime,
      _QualityTask.LastChangeDate,
      _QualityTask.LastChangeTime,
      _QualityTask.LastChangedByUser,
      _QualityTask.QltyTskProcgIsCtrldByTskOrigin,
      
//=== Time Recording for Task
      @Semantics.quantity.unitOfMeasure: 'QltyTaskTimeBasedEffortUoM'
      _QualityTask.QltyTaskTimeBasedEffort,
      _QualityTask.QltyTaskTimeBasedEffortUoM,
      
      /* Associations */
      _QualityTaskLongText : redirected to composition child I_QualityTaskLongTextTP_2

}
```
