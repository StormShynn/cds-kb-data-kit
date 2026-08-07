---
name: I_QLTYNOTIFICATIONTASKTP
description: Qltynotificationtasktp
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
# I_QLTYNOTIFICATIONTASKTP

**Qltynotificationtasktp**

| Property | Value |
|---|---|
| App Component | `QM-QN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `QualityNotification` | ✓ | | `_QualityNotificationTask` | `QualityNotification` |
| `NotificationTask` | ✓ | | `_QualityNotificationTask` | `NotificationTask` |
| `NotificationTaskText` |  | | `_QualityNotificationTask` | `NotificationTaskText` |
| `IsDeleted` |  | | `_QualityNotificationTask` | `IsDeleted` |
| `NotifTaskPlannedStartDate` |  | | `_QualityNotificationTask` | `NotifTaskPlannedStartDate` |
| `NotifTaskPlannedStartTime` |  | | `_QualityNotificationTask` | `NotifTaskPlannedStartTime` |
| `NotifTaskPlannedEndDate` |  | | `_QualityNotificationTask` | `NotifTaskPlannedEndDate` |
| `NotifTaskPlannedEndTime` |  | | `_QualityNotificationTask` | `NotifTaskPlannedEndTime` |
| `StatusObject` |  | | `_QualityNotificationTask` | `StatusObject` |
| `NotifTaskCompletedByUser` |  | | `_QualityNotificationTask` | `NotifTaskCompletedByUser` |
| `NotifTaskCompletionDate` |  | | `_QualityNotificationTask` | `NotifTaskCompletionDate` |
| `NotifTaskCompletionTime` |  | | `_QualityNotificationTask` | `NotifTaskCompletionTime` |
| `ResponsiblePersonFunctionCode` |  | | `_QualityNotificationTask` | `ResponsiblePersonFunctionCode` |
| `PersonResponsible` |  | | `_QualityNotificationTask` | `PersonResponsible` |
| `NotificationTaskSortNumber` |  | | `_QualityNotificationTask` | `NotificationTaskSortNumber` |
| `NotificationItem` |  | | `_QualityNotificationTask` | `NotificationItem` |
| `NotificationCauseID` |  | | `_QualityNotificationTask` | `NotificationCauseID` |
| `QualityTaskCodeCatalog` |  | | `_QualityNotificationTask` | `QualityTaskCodeCatalog` |
| `QualityTaskCodeGroup` |  | | `_QualityNotificationTask` | `QualityTaskCodeGroup` |
| `QualityTaskCode` |  | | `_QualityNotificationTask` | `QualityTaskCode` |
| `QltyTaskTimeBasedEffort` |  | | `_QualityNotificationTask` | `QltyTaskTimeBasedEffort` |
| `QltyTaskTimeBasedEffortUoM` |  | | `_QualityNotificationTask` | `QltyTaskTimeBasedEffortUoM` |
| `CreatedByUser` |  | | `_QualityNotificationTask` | `CreatedByUser` |
| `CreationDate` |  | | `_QualityNotificationTask` | `CreationDate` |
| `CreationTime` |  | | `_QualityNotificationTask` | `CreationTime` |
| `LastChangedByUser` |  | | `_QualityNotificationTask` | `LastChangedByUser` |
| `LastChangeDate` |  | | `_QualityNotificationTask` | `LastChangeDate` |
| `LastChangeTime` |  | | `_QualityNotificationTask` | `LastChangeTime` |
| `NotificationType` |  | | `_QualityNotificationTask` | `NotificationType` |
| `Plant` |  | | `_QualityNotificationTask` | `Plant` |
| `IsBusinessPurposeCompleted` |  | | `_QualityNotificationTask` | `IsBusinessPurposeCompleted` |
| `I_QltyNotificationTP` |  | |  | `_QualityNotificationTask._QltyNotification : redirected to parent I_QltyNotificationTP` |
| `I_QltyNotifTaskLongTextTP` |  | |  | `_QualityNotificationTask._QltyNotificationTaskLongText : redirected to composition child I_QltyNotifTaskLongTextTP` |

## Source Code

```abap
@EndUserText.label: 'Quality Notification Task - TP'
@AccessControl.authorizationCheck: #MANDATORY

@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.usage.type: [ #TRANSACTIONAL_PROCESSING_SERVICE ]

@ObjectModel: {
    modelingPattern: #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    usageType: {
        dataClass: #TRANSACTIONAL,
        sizeCategory: #L,
        serviceQuality: #A },
    representativeKey: 'NotificationTask'
}

@Metadata.ignorePropagatedAnnotations: true

define view entity I_QltyNotificationTaskTP 
  as projection on R_QltyNotificationTaskTP as _QualityNotificationTask
  
{
      @ObjectModel.foreignKey.association: '_QltyNotification'      
  key _QualityNotificationTask.QualityNotification,
  key _QualityNotificationTask.NotificationTask,
  
      _QualityNotificationTask.NotificationTaskText,
      @Semantics.booleanIndicator: true
      _QualityNotificationTask.IsDeleted,
      _QualityNotificationTask.NotifTaskPlannedStartDate,
      _QualityNotificationTask.NotifTaskPlannedStartTime,
      _QualityNotificationTask.NotifTaskPlannedEndDate,
      _QualityNotificationTask.NotifTaskPlannedEndTime,
      _QualityNotificationTask.StatusObject,
//      _QualityNotificationTask.NotifTaskTimeZone,
      _QualityNotificationTask.NotifTaskCompletedByUser,
      _QualityNotificationTask.NotifTaskCompletionDate,
      _QualityNotificationTask.NotifTaskCompletionTime,

//    Not supported
//      _QualityNotificationTask.NotifTaskResubmissionDate,
//      _QualityNotificationTask.NotifTaskResubmissionTime,

      _QualityNotificationTask.ResponsiblePersonFunctionCode,
      _QualityNotificationTask.PersonResponsible,
      _QualityNotificationTask.NotificationTaskSortNumber,
      _QualityNotificationTask.NotificationItem,
      _QualityNotificationTask.NotificationCauseID,
      
      //=== Task Code  
      _QualityNotificationTask.QualityTaskCodeCatalog,
      _QualityNotificationTask.QualityTaskCodeGroup,
      _QualityNotificationTask.QualityTaskCode,
      
      //====Time Recording for Task
      @Semantics.quantity.unitOfMeasure: 'QltyTaskTimeBasedEffortUoM'
      _QualityNotificationTask.QltyTaskTimeBasedEffort,
      _QualityNotificationTask.QltyTaskTimeBasedEffortUoM,
      
      //=== Administrative Data
      _QualityNotificationTask.CreatedByUser,
      _QualityNotificationTask.CreationDate,
      _QualityNotificationTask.CreationTime,
      _QualityNotificationTask.LastChangedByUser,
      _QualityNotificationTask.LastChangeDate,
      _QualityNotificationTask.LastChangeTime,
      
      //=== Fields of quality notification header used in DCL for authorization check
      _QualityNotificationTask.NotificationType,
      _QualityNotificationTask.Plant,
      @Semantics.booleanIndicator: true
      _QualityNotificationTask.IsBusinessPurposeCompleted,
  
      //=== Associations
      _QualityNotificationTask._QltyNotification             : redirected to parent            I_QltyNotificationTP,
      
      @Semantics.valueRange.maximum: '1'
      _QualityNotificationTask._QltyNotificationTaskLongText : redirected to composition child I_QltyNotifTaskLongTextTP,
  
      /* Associations *///Only included because of authorization check with DPP
      _QualityNotificationTask._PartnerFunction,
      _QualityNotificationTask._ContactPerson,
      _QualityNotificationTask._Employee,
      _QualityNotificationTask._Customer,
      _QualityNotificationTask._Supplier
      
}
```
