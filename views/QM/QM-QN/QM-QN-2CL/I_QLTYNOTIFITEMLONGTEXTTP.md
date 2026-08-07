---
name: I_QLTYNOTIFITEMLONGTEXTTP
description: Qltynotifitemlongtexttp
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
  - item-level
  - component:QM-QN-2CL
  - lob:Quality Management
---
# I_QLTYNOTIFITEMLONGTEXTTP

**Qltynotifitemlongtexttp**

| Property | Value |
|---|---|
| App Component | `QM-QN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `QualityNotification` | ✓ | | `_QltyNotifItemLongText` | `QualityNotification` |
| `NotificationItem` | ✓ | | `_QltyNotifItemLongText` | `NotificationItem` |
| `LongTextInternalNumber` | ✓ | | `_QltyNotifItemLongText` | `LongTextInternalNumber` |
| `Language` | ✓ | | `_QltyNotifItemLongText` | `Language` |
| `LongTextID` |  | | `_QltyNotifItemLongText` | `LongTextID` |
| `NotificationItemLongText` |  | | `_QltyNotifItemLongText` | `NotificationItemLongText` |
| `LongTextCreatedByUser` |  | | `_QltyNotifItemLongText` | `LongTextCreatedByUser` |
| `LongTextCreatedAt` |  | | `_QltyNotifItemLongText` | `LongTextCreatedAt` |
| `LongTextLastChangedByUser` |  | | `_QltyNotifItemLongText` | `LongTextLastChangedByUser` |
| `LongTextLastChangedAt` |  | | `_QltyNotifItemLongText` | `LongTextLastChangedAt` |
| `I_QualityNotificationItemTP` |  | |  | `_QltyNotifItemLongText._QualityNotificationItem : redirected to parent I_QualityNotificationItemTP` |
| `I_QltyNotificationTP` |  | |  | `_QltyNotifItemLongText._QltyNotification : redirected to I_QltyNotificationTP` |

## Source Code

```abap
@EndUserText.label: 'Quality Notification Item Long Text - TP'
@AccessControl.authorizationCheck: #MANDATORY

@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.usage.type: [ #TRANSACTIONAL_PROCESSING_SERVICE ]

@ObjectModel:{
  modelingPattern: #TRANSACTIONAL_INTERFACE,
//  modelingPattern: #TRANSACTIONAL_PROJECTED_ENTITY,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType:{
    serviceQuality: #A,
    sizeCategory: #L,
    dataClass: #TRANSACTIONAL },
  representativeKey: 'LongTextInternalNumber'
}

@ObjectModel.dataCategory:#TEXT

@Metadata.ignorePropagatedAnnotations: true

define view entity I_QltyNotifItemLongTextTP
  as projection on R_QltyNotifItemLongTextTP as _QltyNotifItemLongText
{
      @ObjectModel.foreignKey.association: '_QltyNotification'
  key _QltyNotifItemLongText.QualityNotification,
      @ObjectModel.foreignKey.association: '_QualityNotificationItem'
  key _QltyNotifItemLongText.NotificationItem,
  key _QltyNotifItemLongText.LongTextInternalNumber,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key _QltyNotifItemLongText.Language,

      _QltyNotifItemLongText.LongTextID,

      @Semantics.text: true
      _QltyNotifItemLongText.NotificationItemLongText,
//      _QltyNotifItemLongText.MimeType,

      // Admin Data
      @Semantics.user.createdBy: true
      _QltyNotifItemLongText.LongTextCreatedByUser,
      @Semantics.systemDate.createdAt: true
      _QltyNotifItemLongText.LongTextCreatedAt,
      @Semantics.user.lastChangedBy: true
      _QltyNotifItemLongText.LongTextLastChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      _QltyNotifItemLongText.LongTextLastChangedAt,

      // Associations
      _QltyNotifItemLongText._QualityNotificationItem : redirected to parent I_QualityNotificationItemTP,
      _QltyNotifItemLongText._QltyNotification        : redirected to        I_QltyNotificationTP,       

      _QltyNotifItemLongText._Language,

      // For auth check mapping role
      _QltyNotifItemLongText._Notification

}
```
