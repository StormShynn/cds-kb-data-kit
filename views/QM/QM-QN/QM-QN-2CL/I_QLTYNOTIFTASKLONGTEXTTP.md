---
name: I_QLTYNOTIFTASKLONGTEXTTP
description: Qltynotiftasklongtexttp
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
  - text
  - component:QM-QN-2CL
  - lob:Quality Management
---
# I_QLTYNOTIFTASKLONGTEXTTP

**Qltynotiftasklongtexttp**

| Property | Value |
|---|---|
| App Component | `QM-QN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `QualityNotification` | ✓ | | `_QltyNotificationTaskLongText` | `QualityNotification` |
| `NotificationTask` | ✓ | | `_QltyNotificationTaskLongText` | `NotificationTask` |
| `Language` | ✓ | | `_QltyNotificationTaskLongText` | `Language` |
| `LongTextInternalNumber` | ✓ | | `_QltyNotificationTaskLongText` | `LongTextInternalNumber` |
| `LongTextID` |  | | `_QltyNotificationTaskLongText` | `LongTextID` |
| `QltyNotificationTaskLongText` |  | | `_QltyNotificationTaskLongText` | `QltyNotificationTaskLongText` |
| `MimeType` |  | | `_QltyNotificationTaskLongText` | `MimeType` |
| `LongTextCreatedByUser` |  | | `_QltyNotificationTaskLongText` | `LongTextCreatedByUser` |
| `LongTextCreatedAt` |  | | `_QltyNotificationTaskLongText` | `LongTextCreatedAt` |
| `LongTextLastChangedByUser` |  | | `_QltyNotificationTaskLongText` | `LongTextLastChangedByUser` |
| `LongTextLastChangedAt` |  | | `_QltyNotificationTaskLongText` | `LongTextLastChangedAt` |
| `I_QltyNotificationTaskTP` |  | |  | `_QltyNotificationTaskLongText._QltyNotificationTask : redirected to parent I_QltyNotificationTaskTP` |
| `I_QltyNotificationTP` |  | |  | `_QltyNotificationTaskLongText._QltyNotification : redirected to I_QltyNotificationTP` |

## Source Code

```abap
@EndUserText.label: 'Quality Notification Task Long Text - TP'
@AccessControl.authorizationCheck: #MANDATORY

@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.usage.type: [ #TRANSACTIONAL_PROCESSING_SERVICE ]

@ObjectModel: {
    modelingPattern: #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    usageType: {
        serviceQuality: #C,
        sizeCategory: #L,
        dataClass: #TRANSACTIONAL },
    representativeKey: 'LongTextInternalNumber'
}

@ObjectModel.dataCategory:#TEXT

@Metadata.ignorePropagatedAnnotations: true

define view entity I_QltyNotifTaskLongTextTP 
  as projection on R_QltyNotifTaskLongTextTP as _QltyNotificationTaskLongText 
{
      @ObjectModel.foreignKey.association: '_QltyNotification'
  key _QltyNotificationTaskLongText.QualityNotification,
      @ObjectModel.foreignKey.association: '_QltyNotificationTask'
  key _QltyNotificationTaskLongText.NotificationTask,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key _QltyNotificationTaskLongText.Language,

  key _QltyNotificationTaskLongText.LongTextInternalNumber,
  
        _QltyNotificationTaskLongText.LongTextID,

      @Semantics.text: true
      _QltyNotificationTaskLongText.QltyNotificationTaskLongText,
      _QltyNotificationTaskLongText.MimeType,

      // Admin Data
      @Semantics.user.createdBy: true
      _QltyNotificationTaskLongText.LongTextCreatedByUser,
      @Semantics.systemDate.createdAt: true
      _QltyNotificationTaskLongText.LongTextCreatedAt,
      @Semantics.user.lastChangedBy: true
      _QltyNotificationTaskLongText.LongTextLastChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      _QltyNotificationTaskLongText.LongTextLastChangedAt,
      
      // Associations
      _QltyNotificationTaskLongText._QltyNotificationTask : redirected to parent I_QltyNotificationTaskTP,
      _QltyNotificationTaskLongText._QltyNotification     : redirected to        I_QltyNotificationTP,

      _QltyNotificationTaskLongText._Language
      
}
```
