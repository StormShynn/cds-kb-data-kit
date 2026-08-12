---
name: I_QUALITYNOTIFICATIONPARTNER
description: "Quality NotificationICATIONPARTNER"
app_component: QM-QN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `NotificationPartnerObject` | ✓ | |  |  |  |  |
| `PartnerFunction` | ✓ | |  |  |  |  |
| `NotificationPartnerObjectNmbr` | ✓ | |  |  |  |  |
| `NotificationObjectType` |  | |  |  |  |  |
| `Partner` |  | |  |  |  |  |
| `NotificationPartner` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeTime` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `_Notification` | | ✓ | | | | |
| `_PartnerFunction` | | ✓ | | | | |
| `_ContactPerson` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_Employee` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_User` | | ✓ | | | | |

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
