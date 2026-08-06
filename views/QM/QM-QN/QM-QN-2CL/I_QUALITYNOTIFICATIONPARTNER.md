---
name: I_QUALITYNOTIFICATIONPARTNER
description: Quality NotificationICATIONPARTNER
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
  - quality-notification
  - partner
  - component:QM-QN-2CL
  - lob:Quality Management
---
# I_QUALITYNOTIFICATIONPARTNER

**Quality NotificationICATIONPARTNER**

| Property | Value |
|---|---|
| App Component | `QM-QN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `NotificationPartnerObject` | `NotificationPartnerObject` |
| key `PartnerFunction` | `PartnerFunction` |
| key `NotificationPartnerObjectNmbr` | `NotificationPartnerObjectNmbr` |
| `NotificationObjectType` | `NotificationObjectType` |
| `Partner` | `Partner` |
| `NotificationPartner` | `NotificationPartner` |
| `CreatedByUser` | `CreatedByUser` |
| `CreationDate` | `CreationDate` |
| `CreationTime` | `CreationTime` |
| `LastChangedByUser` | `LastChangedByUser` |
| `LastChangeTime` | `LastChangeTime` |
| `LastChangeDate` | `LastChangeDate` |
| `IsDeleted` | `IsDeleted` |
| `_Notification` | *Association* |
| `_PartnerFunction` | *Association* |
| `_ContactPerson` | *Association* |
| `_Customer` | *Association* |
| `_Employee` | *Association* |
| `_Supplier` | *Association* |
| `_User` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Notification` | `I_QltyNotification` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_User']
@EndUserText.label: 'Quality Notification Partner'
@VDM.viewType: #BASIC

@ObjectModel: {
    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
    usageType: {
        dataClass: #TRANSACTIONAL,
        sizeCategory: #L,
        serviceQuality: #C }
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_QualityNotificationPartner
  as select from I_NotificationPartner

  /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }  */
  association [0..1] to I_QltyNotification as _Notification              on  $projection.NotificationPartnerObject = _Notification.NotificationStatusObject

{
      //=== key fields
  key NotificationPartnerObject,
      @ObjectModel.foreignKey.association: '_PartnerFunction'
  key PartnerFunction,
  key NotificationPartnerObjectNmbr,

      //=== common fields
      NotificationObjectType,
      Partner,
      NotificationPartner,
      CreatedByUser,
      CreationDate,
      CreationTime,
      LastChangedByUser,
      LastChangeTime,
      LastChangeDate,
      @Semantics.booleanIndicator: true
      IsDeleted,

      //=== expose relevant associations
      _Notification,
      _PartnerFunction,
      _ContactPerson,
      _Customer,
      _Employee,
      _Supplier,
      _User
}
where
  NotificationObjectType = 'QM1'
```
