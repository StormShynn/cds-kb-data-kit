---
name: I_QUALITYNOTIFICATIONPARTNERTP
description: "Quality NotificationICATIONPARTNERTP"
app_component: QM-QN-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-QN
  - interface-view
  - transactional-processing
  - quality-notification
  - partner
  - component:QM-QN-2CL
  - lob:Quality Management
---
# I_QUALITYNOTIFICATIONPARTNERTP

**Quality NotificationICATIONPARTNERTP**

| Property | Value |
|---|---|
| App Component | `QM-QN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `QualityNotification` | ✓ | | `_QualityNotificationPartner` | `QualityNotification` |  |  |
| `PartnerFunction` | ✓ | | `_QualityNotificationPartner` | `PartnerFunction` |  |  |
| `NotificationPartnerObjectNmbr` | ✓ | | `_QualityNotificationPartner` | `NotificationPartnerObjectNmbr` |  |  |
| `NotificationPartnerObject` |  | | `_QualityNotificationPartner` | `NotificationPartnerObject` |  |  |
| `NotificationObjectType` |  | | `_QualityNotificationPartner` | `NotificationObjectType` |  |  |
| `NotificationPartner` |  | | `_QualityNotificationPartner` | `NotificationPartner` |  |  |
| `CreatedByUser` |  | | `_QualityNotificationPartner` | `CreatedByUser` |  |  |
| `CreationDate` |  | | `_QualityNotificationPartner` | `CreationDate` |  |  |
| `CreationTime` |  | | `_QualityNotificationPartner` | `CreationTime` |  |  |
| `LastChangedByUser` |  | | `_QualityNotificationPartner` | `LastChangedByUser` |  |  |
| `LastChangeTime` |  | | `_QualityNotificationPartner` | `LastChangeTime` |  |  |
| `LastChangeDate` |  | | `_QualityNotificationPartner` | `LastChangeDate` |  |  |
| `IsDeleted` |  | | `_QualityNotificationPartner` | `IsDeleted` |  |  |
| `I_QltyNotificationTP` |  | |  | `_QualityNotificationPartner._QltyNotification : redirected to parent I_QltyNotificationTP` |  |  |

## Source Code

```abap
@EndUserText.label: 'Quality Notification Partner - TP'
@AccessControl.authorizationCheck: #MANDATORY

@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.usage.type: [ #TRANSACTIONAL_PROCESSING_SERVICE ]

@ObjectModel:{
  modelingPattern: #TRANSACTIONAL_INTERFACE,
//  modelingPattern: #TRANSACTIONAL_PROJECTED_ENTITY,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType:{
    serviceQuality: #C,
    sizeCategory: #L,
    dataClass: #TRANSACTIONAL },
  representativeKey: 'NotificationPartnerObjectNmbr'
}

@Metadata.ignorePropagatedAnnotations: true

define view entity I_QualityNotificationPartnerTP
  as projection on R_QualityNotificationPartnerTP as _QualityNotificationPartner 
{
      @ObjectModel.foreignKey.association: '_QltyNotification'
  key _QualityNotificationPartner.QualityNotification,

      @ObjectModel.foreignKey.association: '_PartnerFunction'
  key _QualityNotificationPartner.PartnerFunction,

  key _QualityNotificationPartner.NotificationPartnerObjectNmbr,

      _QualityNotificationPartner.NotificationPartnerObject,
      _QualityNotificationPartner.NotificationObjectType,
      _QualityNotificationPartner.NotificationPartner,
      _QualityNotificationPartner.CreatedByUser,
      _QualityNotificationPartner.CreationDate,
      _QualityNotificationPartner.CreationTime,
      _QualityNotificationPartner.LastChangedByUser,
      _QualityNotificationPartner.LastChangeTime,
      _QualityNotificationPartner.LastChangeDate,

      @Semantics.booleanIndicator: true
      _QualityNotificationPartner.IsDeleted,

      /* Associations */
      _QualityNotificationPartner._QltyNotification : redirected to parent I_QltyNotificationTP,

      // For auth check mapping role
      _QualityNotificationPartner._Notification,
      _QualityNotificationPartner._PartnerFunction
}
```
