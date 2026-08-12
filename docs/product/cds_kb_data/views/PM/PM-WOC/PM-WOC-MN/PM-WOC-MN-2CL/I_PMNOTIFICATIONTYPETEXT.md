---
name: I_PMNOTIFICATIONTYPETEXT
description: "Pmnotificationtypetext"
app_component: PM-WOC-MN-2CL
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
  - PM
  - PM-WOC
  - PM-WOC-MN
  - interface-view
  - text-view
  - text
  - component:PM-WOC-MN-2CL
  - lob:Plant Maintenance
---
# I_PMNOTIFICATIONTYPETEXT

**Pmnotificationtypetext**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
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
| `NotificationType` | ✓ | |  | `qmart` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `NotificationTypeName` |  | |  | `qmartx` |  |  |
| `_PMNotificationType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PMNotificationType` | `I_PMNotificationType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Notification Type - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IPMNOTIFTYPETXT'
@VDM.viewType: #BASIC
@Analytics: { dataExtraction : { enabled: true , delta.changeDataCapture.automatic: true } }
@AccessControl.authorizationCheck:#CHECK
@ObjectModel.representativeKey: 'NotificationType'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
@ObjectModel.supportedCapabilities: [#EXTRACTION_DATA_SOURCE,#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

define view entity I_PMNotificationTypeText
  as select from tq80_t
  association [0..1] to I_PMNotificationType as _PMNotificationType on _PMNotificationType.NotificationType = $projection.NotificationType
  association [0..1] to I_Language           as _Language           on _Language.Language = $projection.Language
{

      @ObjectModel.foreignKey.association: '_PMNotificationType'
  key tq80_t.qmart  as NotificationType,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key tq80_t.spras  as Language,

      @Semantics.text: true
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      @EndUserText.label: 'Notification Type Text'
      tq80_t.qmartx as NotificationTypeName,

      // Propagate associations
      _PMNotificationType,
      _Language
}
```
