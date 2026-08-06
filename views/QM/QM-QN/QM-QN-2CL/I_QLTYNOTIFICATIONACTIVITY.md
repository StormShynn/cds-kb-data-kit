---
name: I_QLTYNOTIFICATIONACTIVITY
description: Qltynotificationactivity
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
  - component:QM-QN-2CL
  - lob:Quality Management
---
# I_QLTYNOTIFICATIONACTIVITY

**Qltynotificationactivity**

| Property | Value |
|---|---|
| App Component | `QM-QN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `QualityNotification` | `I_NotificationActivity.Notification` |
| key `NotificationActivity` | `I_NotificationActivity.NotificationActivity` |
| `NotificationItem` | `I_NotificationActivity.NotificationItem` |
| `NotificationActivitySortNumber` | `I_NotificationActivity.NotificationActivitySortNumber` |
| `IsDeleted` | `I_NotificationActivity.IsDeleted` |
| `MasterLanguage` | `I_NotificationActivity.MasterLanguage` |
| `NotifActivityCatalog` | `I_NotificationActivity.NotifActivityCatalog` |
| `NotifActivityCodeGroup` | `I_NotificationActivity.NotifActivityCodeGroup` |
| `NotifActivityCode` | `I_NotificationActivity.NotifActivityCode` |
| `NotifActivityText` | `I_NotificationActivity.NotifActivityText` |
| `NotifActivityStartDate` | `I_NotificationActivity.NotifActivityStartDate` |
| `NotifActivityStartTime` | `I_NotificationActivity.NotifActivityStartTime` |
| `NotifActivityEndDate` | `I_NotificationActivity.NotifActivityEndDate` |
| `NotifActivityEndTime` | `I_NotificationActivity.NotifActivityEndTime` |
| `NotifProcessingPhase` | `I_QltyNotification.NotifProcessingPhase` |
| `ChangedDateTime` | `I_NotificationActivity.ChangedDateTime` |
| `CreatedByUser` | `I_NotificationActivity.CreatedByUser` |
| `CreationDate` | `I_NotificationActivity.CreationDate` |
| `CreationTime` | `I_NotificationActivity.CreationTime` |
| `LastChangedByUser` | `I_NotificationActivity.LastChangedByUser` |
| `LastChangeDate` | `I_NotificationActivity.LastChangeDate` |
| `LastChangeTime` | `I_NotificationActivity.LastChangeTime` |
| `IsBusinessPurposeCompleted` | `I_QltyNotification.IsBusinessPurposeCompleted` |
| `_Notification` | *Association* |
| `_QltyNotifActivityLongText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Notification` | `I_QltyNotification` | [0..1] |
| `_QltyNotifActivityLongText` | `I_QltyNotifActivityLongText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.privilegedAssociations: ['_CreatedByUserContactCard', '_LastChangedByUserContactCard']

@VDM.viewType: #COMPOSITE

@ObjectModel: {
    representativeKey: 'NotificationActivity',
    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
    usageType: {
        dataClass: #TRANSACTIONAL,
        sizeCategory: #L,
        serviceQuality: #A }
}
@Analytics.technicalName: 'IQNOTIFACT'
@EndUserText.label: 'Quality Notification Activity'
@Metadata.ignorePropagatedAnnotations: true
define view entity I_QltyNotificationActivity
  as select from I_NotificationActivity
    inner join   I_QltyNotification on I_NotificationActivity.Notification = I_QltyNotification.QualityNotification

  association [0..1] to I_QltyNotification          as _Notification              on  $projection.QualityNotification = _Notification.QualityNotification

  association [0..*] to I_QltyNotifActivityLongText as _QltyNotifActivityLongText on  $projection.QualityNotification  = _QltyNotifActivityLongText.QualityNotification
                                                                                  and $projection.NotificationActivity = _QltyNotifActivityLongText.NotificationActivity

{
                          //=== Key Fields
                          @ObjectModel.foreignKey.association: '_Notification'
  key                     I_NotificationActivity.Notification as QualityNotification,
  key                     I_NotificationActivity.NotificationActivity,
                          I_NotificationActivity.NotificationItem,
                          //=== Common Fields
                          I_NotificationActivity.NotificationActivitySortNumber,
                          @Semantics.booleanIndicator: true
                          I_NotificationActivity.IsDeleted,
                          I_NotificationActivity.MasterLanguage,
                          @ObjectModel.foreignKey.association: '_NotifActivityCatalog'
                          I_NotificationActivity.NotifActivityCatalog,
                          @ObjectModel.foreignKey.association: '_NotifActivityCodeGroup'
                          I_NotificationActivity.NotifActivityCodeGroup,
                          @ObjectModel.foreignKey.association: '_NotifActivityCode'
                          I_NotificationActivity.NotifActivityCode,

                          I_NotificationActivity.NotifActivityText,
                          I_NotificationActivity.NotifActivityStartDate,
                          I_NotificationActivity.NotifActivityStartTime,
                          I_NotificationActivity.NotifActivityEndDate,
                          I_NotificationActivity.NotifActivityEndTime,
                          I_QltyNotification.NotifProcessingPhase,

                          //=== Administrative Data
                          I_NotificationActivity.ChangedDateTime,
                          @ObjectModel.foreignKey.association: '_CreatedByUserContactCard'
                          I_NotificationActivity.CreatedByUser,
                          @Semantics.systemDate.createdAt: true
                          I_NotificationActivity.CreationDate,
                          I_NotificationActivity.CreationTime,
                          @ObjectModel.foreignKey.association: '_LastChangedByUserContactCard'
                          I_NotificationActivity.LastChangedByUser,
                          @Semantics.systemDate.lastChangedAt: true
                          I_NotificationActivity.LastChangeDate,
                          I_NotificationActivity.LastChangeTime,
                          @Consumption.hidden: true
                          @Semantics.booleanIndicator: true
                          I_QltyNotification.IsBusinessPurposeCompleted,

                          /* Associations */
                          _Notification,
                          I_NotificationActivity._CreatedByUserContactCard,
                          I_NotificationActivity._LastChangedByUserContactCard,
                          I_NotificationActivity._Language,
                          I_NotificationActivity._NotifActivityCatalog,
                          I_NotificationActivity._NotifActivityCodeGroup,
                          I_NotificationActivity._NotifActivityCode,
                          _QltyNotifActivityLongText
}
```
