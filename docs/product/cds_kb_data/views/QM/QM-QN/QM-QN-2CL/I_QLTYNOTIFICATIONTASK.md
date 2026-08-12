---
name: I_QLTYNOTIFICATIONTASK
description: "Qltynotificationtask"
app_component: QM-QN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-QN
  - interface-view
  - component:QM-QN-2CL
  - lob:Quality Management
---
# I_QLTYNOTIFICATIONTASK

**Qltynotificationtask**

| Property | Value |
|---|---|
| App Component | `QM-QN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `QualityNotification` | ✓ | |  | `Notification` |  |  |
| `NotificationTask` | ✓ | |  |  |  |  |
| `QualityTask` |  | |  | `cast( ' ' as char16 preserving type )` |  |  |
| `QualityTaskOrigin` |  | |  |  |  |  |
| `NotificationTaskText` |  | |  |  |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `NotifProcessingPhase` |  | |  |  |  |  |
| `NotifTaskPlannedStartDate` |  | |  |  |  |  |
| `NotifTaskPlannedStartTime` |  | |  |  |  |  |
| `NotifTaskPlannedEndDate` |  | |  |  |  |  |
| `NotifTaskPlannedEndTime` |  | |  |  |  |  |
| `StatusObject` |  | |  |  |  |  |
| `NotifTaskTimeZone` |  | |  |  |  |  |
| `NotifTaskCompletedByUser` |  | |  |  |  |  |
| `NotifTaskCompletionDate` |  | |  |  |  |  |
| `NotifTaskCompletionTime` |  | |  |  |  |  |
| `NotifTaskResubmissionDate` |  | |  |  |  |  |
| `NotifTaskResubmissionTime` |  | |  |  |  |  |
| `ResponsiblePersonFunctionCode` |  | |  | `cast(I_NotificationTask.ResponsiblePersonFunctionCode as qmsm_parvw preserving type )` |  |  |
| `ResponsiblePerson` |  | |  |  |  |  |
| `NotificationTaskSortNumber` |  | |  |  |  |  |
| `NotificationItem` |  | |  |  |  |  |
| `NotificationCauseID` |  | |  |  |  |  |
| `NotificationType` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `IsBusinessPurposeCompleted` |  | |  |  |  |  |
| `QualityTaskCodeCatalog` |  | |  | `cast( I_NotificationTask.NotificationTaskCatalog as vdm_qn_makat preserving type )` |  |  |
| `QualityTaskCodeGroup` |  | |  | `cast( I_NotificationTask.NotificationTaskCodeGroup as vdm_qn_magrp preserving type )` |  |  |
| `QualityTaskCode` |  | |  | `NotificationTaskCode` |  |  |
| `QltyTaskTimeBasedEffort` |  | |  |  |  |  |
| `QltyTaskTimeBasedEffortUoM` |  | |  |  |  |  |
| `ChangedDateTime` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangeTime` |  | |  |  |  |  |
| `_Notification` | | ✓ | | | | |
| `_QltyTskCodeGroup` | | ✓ | | | | |
| `_QltyTskCode` | | ✓ | | | | |
| `_QltyNotificationTaskLongText` | | ✓ | | | | |
| `_QltyTskProcTimeUnit` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Notification` | `I_QltyNotification` | [0..1] |
| `_QltyTskCodeGroup` | `I_QltyTskCodeGroup` | [0..1] |
| `_QltyTskCode` | `I_QltyTskCode` | [0..1] |
| `_QltyNotificationTaskLongText` | `I_QltyNotificationTaskLongText` | [0..*] |
| `_QltyTskProcTimeUnit` | `I_UnitOfMeasure` | [0..1] |
| `_Extension` | `E_NotificationTask` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.privilegedAssociations: ['_CreatedByUserContactCard', '_LastChangedByUserContactCard', '_StsObjConcatActiveStsILL' ]

@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@EndUserText.label: 'Quality Notification Task'
@ObjectModel: {
    representativeKey: 'NotificationTask',
    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
    usageType: {
        dataClass: #TRANSACTIONAL,
        sizeCategory: #L,
        serviceQuality: #A }
}
@Analytics.technicalName: 'IQNOTIFTSK'
@Metadata.ignorePropagatedAnnotations: true
define view entity I_QltyNotificationTask
  as select from I_NotificationTask
    inner join   I_QltyNotification on I_NotificationTask.Notification = I_QltyNotification.QualityNotification

  association [0..1] to I_QltyNotification             as _Notification                 on  $projection.QualityNotification = _Notification.QualityNotification

  association [0..1] to I_QltyTskCodeGroup             as _QltyTskCodeGroup             on  $projection.QualityTaskCodeGroup = _QltyTskCodeGroup.QualityTaskCodeGroup
  association [0..1] to I_QltyTskCode                  as _QltyTskCode                  on  $projection.QualityTaskCodeGroup = _QltyTskCode.QualityTaskCodeGroup
                                                                                        and $projection.QualityTaskCode      = _QltyTskCode.QualityTaskCode

  association [0..*] to I_QltyNotificationTaskLongText as _QltyNotificationTaskLongText on  $projection.QualityNotification = _QltyNotificationTaskLongText.QualityNotification
                                                                                        and $projection.NotificationTask    = _QltyNotificationTaskLongText.NotificationTask

////=== Unit
  association [0..1] to I_UnitOfMeasure                as _QltyTskProcTimeUnit          on  $projection.QltyTaskTimeBasedEffortUoM      = _QltyTskProcTimeUnit.UnitOfMeasure
                                                                                        and _QltyTskProcTimeUnit.UnitOfMeasureDimension = 'TIME'
                                                                                   
  // === Extension
  association [1..1] to E_NotificationTask           as _Extension                    on  $projection.QualityNotification  = _Extension.Notification
                                                                                      and $projection.NotificationTask     = _Extension.NotificationTask

{
      //=== Key Fields
      @ObjectModel.foreignKey.association: '_Notification'
  key I_NotificationTask.Notification              as QualityNotification,
  key I_NotificationTask.NotificationTask,

//      I_NotificationTask.QualityTask,
      //@API.element.releaseState: #DEPRECATED
      cast( '                ' as char16 preserving type ) as QualityTask,
        
      //=== Common Fields
      @ObjectModel.foreignKey.association: '_QualityTaskOrigin'
      I_NotificationTask.QualityTaskOrigin,
      @Semantics.text: true
      I_NotificationTask.NotificationTaskText,
      @Semantics.booleanIndicator: true
      I_NotificationTask.IsDeleted,
      I_QltyNotification.NotifProcessingPhase,
      I_NotificationTask.NotifTaskPlannedStartDate,
      I_NotificationTask.NotifTaskPlannedStartTime,
      I_NotificationTask.NotifTaskPlannedEndDate,
      I_NotificationTask.NotifTaskPlannedEndTime,
      I_NotificationTask.StatusObject,
      I_NotificationTask.NotifTaskTimeZone,
      I_NotificationTask.NotifTaskCompletedByUser,
      I_NotificationTask.NotifTaskCompletionDate,
      I_NotificationTask.NotifTaskCompletionTime,
      I_NotificationTask.NotifTaskResubmissionDate,
      I_NotificationTask.NotifTaskResubmissionTime,
      //Unfortunately we have to stay compliant with conversion exit
      @ObjectModel.foreignKey.association: '_PartnerFunction'
      cast(I_NotificationTask.ResponsiblePersonFunctionCode as qmsm_parvw preserving type ) as ResponsiblePersonFunctionCode,
      I_NotificationTask.ResponsiblePerson,
      I_NotificationTask.NotificationTaskSortNumber,
      I_NotificationTask.NotificationItem,
      I_NotificationTask.NotificationCauseID,
      I_QltyNotification.NotificationType,
      I_QltyNotification.Plant,
      @Semantics.booleanIndicator: true
      I_QltyNotification.IsBusinessPurposeCompleted,
      cast( I_NotificationTask.NotificationTaskCatalog as vdm_qn_makat preserving type )   as QualityTaskCodeCatalog,
      @ObjectModel.foreignKey.association: '_QltyTskCodeGroup'
      cast( I_NotificationTask.NotificationTaskCodeGroup as vdm_qn_magrp preserving type ) as QualityTaskCodeGroup,
      @ObjectModel.foreignKey.association: '_QltyTskCode'
      I_NotificationTask.NotificationTaskCode      as QualityTaskCode,
      
      //====Time Recording for Task
      @Semantics.quantity.unitOfMeasure: 'QltyTaskTimeBasedEffortUoM'
      I_NotificationTask.QltyTaskTimeBasedEffort,
      @ObjectModel.foreignKey.association: '_QltyTskProcTimeUnit'
      I_NotificationTask.QltyTaskTimeBasedEffortUoM,

      //=== Administrative Data
      I_NotificationTask.ChangedDateTime,
      @ObjectModel.foreignKey.association: '_CreatedByUserContactCard'
      I_NotificationTask.CreatedByUser,
      @Semantics.systemDate.createdAt: true
      I_NotificationTask.CreationDate,
      I_NotificationTask.CreationTime,
      @ObjectModel.foreignKey.association: '_LastChangedByUserContactCard'
      I_NotificationTask.LastChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      I_NotificationTask.LastChangeDate,
      I_NotificationTask.LastChangeTime,
      //=== Expose Associations
      _Notification,
      I_NotificationTask._QualityTaskOrigin,
      _QltyTskCodeGroup,
      _QltyTskCode,
      I_QltyNotification._Plant,
      _QltyNotificationTaskLongText,
      I_NotificationTask._CreatedByUserContactCard,
      I_NotificationTask._LastChangedByUserContactCard,
      I_NotificationTask._StsObjConcatActiveStsILL,
      _QltyTskProcTimeUnit,
      //Only included because of authorization check with DPP
      @Consumption.hidden: true
      I_NotificationTask._PartnerFunction,
      @Consumption.hidden: true
      I_NotificationTask._ContactPerson,
      @Consumption.hidden: true
      I_NotificationTask._Employee,
      @Consumption.hidden: true
      I_NotificationTask._Customer,
      @Consumption.hidden: true
      I_NotificationTask._Supplier
}
```
