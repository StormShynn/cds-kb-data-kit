---
name: I_QLTYNOTIFITEMLONGTEXT
description: "Qltynotifitemlongtext"
app_component: QM-QN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-QN
  - interface-view
  - text-view
  - text
  - item-level
  - component:QM-QN-2CL
  - lob:Quality Management
---
# I_QLTYNOTIFITEMLONGTEXT

**Qltynotifitemlongtext**

| Property | Value |
|---|---|
| App Component | `QM-QN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `QualityNotification` | ✓ | |  | `Notification` |  |  |
| `NotificationItem` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `LongTextInternalNumber` | ✓ | |  |  |  |  |
| `LongTextID` |  | |  |  |  |  |
| `NotificationItemLongText` |  | |  |  |  |  |
| `MimeType` |  | |  | `cast( I_NotificationItemLongText.MimeType as w3conttype )` |  |  |
| `LongTextCreatedByUser` |  | |  |  |  |  |
| `LongTextCreatedAt` |  | |  |  |  |  |
| `LongTextLastChangedByUser` |  | |  |  |  |  |
| `LongTextLastChangedAt` |  | |  |  |  |  |
| `_QltyNotification` | | ✓ | | | | |
| `_QualityNotificationItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_QltyNotification` | `I_QltyNotification` | [1] |
| `_QualityNotificationItem` | `I_QualityNotificationItem` | [1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@VDM: {
    viewType: #COMPOSITE,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities: 
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #NONE
@EndUserText.label: 'Quality Notification Item Long Text'
@ObjectModel: {
    usageType: {
        dataClass: #TRANSACTIONAL,
        sizeCategory: #L,
        serviceQuality: #A },
    representativeKey: 'LongTextInternalNumber',
    dataCategory: #TEXT
}
@Analytics.technicalName: 'IQLTYNTFITMLTXT'
@Metadata.ignorePropagatedAnnotations: true

define view entity I_QltyNotifItemLongText as select from I_NotificationItemLongText 
   inner join I_QltyNotification // inner join ensures that only items of quality notifications are selected
      on  I_QltyNotification.QualityNotification = I_NotificationItemLongText.Notification
     and ( I_QltyNotification.NotificationOrigin = 'Q1' or I_QltyNotification.NotificationOrigin = 'Q2' or I_QltyNotification.NotificationOrigin = 'Q3' )

    // Define own association for parent and root in the QM layer
    association [1] to I_QltyNotification          as _QltyNotification         on  $projection.QualityNotification = _QltyNotification.QualityNotification
    association [1] to I_QualityNotificationItem   as _QualityNotificationItem  on  $projection.QualityNotification = _QualityNotificationItem.QualityNotification
                                                                                and $projection.NotificationItem    = _QualityNotificationItem.NotificationItem
                                                                                
{
    @ObjectModel.foreignKey.association: '_QltyNotification'
    key I_NotificationItemLongText.Notification as QualityNotification,
    
    @ObjectModel.foreignKey.association: '_QualityNotificationItem'
    key I_NotificationItemLongText.NotificationItem,
    
    @ObjectModel.foreignKey.association: '_Language'
    @Semantics.language: true
    key I_NotificationItemLongText.Language,
    
    key I_NotificationItemLongText.LongTextInternalNumber,
    
    
    I_NotificationItemLongText.LongTextID,
    
    @Semantics.text
    I_NotificationItemLongText.NotificationItemLongText,
    cast( I_NotificationItemLongText.MimeType as w3conttype  ) as MimeType,
    
    I_NotificationItemLongText.LongTextCreatedByUser,
    I_NotificationItemLongText.LongTextCreatedAt,
    I_NotificationItemLongText.LongTextLastChangedByUser,
    I_NotificationItemLongText.LongTextLastChangedAt,
    
    /* Associations */
    _QltyNotification,
    _QualityNotificationItem,
    @VDM.lifecycle: { status: #DEPRECATED, successor: '_QltyNotification' }
    I_NotificationItemLongText._Notification,
    @VDM.lifecycle: { status: #DEPRECATED, successor: '_QualityNotificationItem' }
    I_NotificationItemLongText._NotificationItem,
    I_NotificationItemLongText._Language
}
```
