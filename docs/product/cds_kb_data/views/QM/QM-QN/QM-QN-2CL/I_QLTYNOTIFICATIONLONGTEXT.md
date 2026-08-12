---
name: I_QLTYNOTIFICATIONLONGTEXT
description: "Qltynotificationlongtext"
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
  - text-view
  - text
  - component:QM-QN-2CL
  - lob:Quality Management
---
# I_QLTYNOTIFICATIONLONGTEXT

**Qltynotificationlongtext**

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
| `}` |  | |  | `usageType: { dataClass: #TRANSACTIONAL, sizeCategory: #L, serviceQuality: #C }` |  |  |
| `'ItemCounter'` |  | |  | `representativeKey: 'ItemCounter'` |  |  |
| `]` |  | |  | `supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]` |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #BASIC
@ObjectModel:
    { usageType: {
        dataClass: #TRANSACTIONAL,
        sizeCategory: #L,
        serviceQuality: #C
    },
    representativeKey: 'ItemCounter',
    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],    
    dataCategory: #TEXT
}
@Analytics.technicalName: 'IQNOTIFLT'
@EndUserText.label: 'Quality Notification Longtext'
@Metadata.ignorePropagatedAnnotations:true
define view entity I_QltyNotificationLongText
  as select from qmelltext

  association [1..1] to I_QltyNotification as _QltyNotification on $projection.QualityNotification = _QltyNotification.QualityNotification
  association [1..1] to I_Language         as _Language         on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_QltyNotification'
  key qmnum      as QualityNotification,
  key counter    as ItemCounter,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key langu      as Language,

      textid     as LongTextID,

      @EndUserText:{  label: 'Detailed Description',
                      quickInfo: 'Detailed Description of Quality Notification'
      }/* normally you should build a vdm_q* data element and cast the field to it to get the label, but casting of STRING is not allowed */
      @Semantics.text: true
      content    as QltyNotificationLongText,

      created_by as LongTextCreatedByUser,
      created_at as LongTextCreatedAt,
      changed_by as LongTextLastChangedByUser,
      changed_at as LongTextLastChangedAt,
      mimetype   as MimeType,

      //    //field necessary for authorization check
      //    @Consumption.hidden: true
      //    _QltyNotification.NotificationType,
      //    @Consumption.hidden: true
      //    _QltyNotification.Plant,
      //    @Consumption.hidden: true
      //    _QltyNotification.IsBusinessPurposeCompleted,

      _QltyNotification,
      _Language

}
where textid = 'LTQM'
```
