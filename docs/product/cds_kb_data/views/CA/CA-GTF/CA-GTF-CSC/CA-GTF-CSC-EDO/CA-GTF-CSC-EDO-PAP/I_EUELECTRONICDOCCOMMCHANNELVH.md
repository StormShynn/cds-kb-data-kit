---
name: I_EUELECTRONICDOCCOMMCHANNELVH
description: "Euelectronicdoccommchannelvh"
app_component: CA-GTF-CSC-EDO-PAP
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - value-help
  - component:CA-GTF-CSC-EDO-PAP
  - lob:Cross-Application Components
---
# I_EUELECTRONICDOCCOMMCHANNELVH

**Euelectronicdoccommchannelvh**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-PAP` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EU_EDocCommChannel` | ✓ | |  | `cast(dd07t.domvalue_l as edoc_eu_comm_channel)` | `CHAR(1)` | Exchange Channel |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `EU_EDocCommChannelText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Exchange Channel'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'EU_EDocCommChannel'
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel:{
usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #META
},
  supportedCapabilities: [#SQL_DATA_SOURCE,
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET],
  modelingPattern: #NONE
}
@VDM.viewType: #BASIC
@Search.searchable:true
@Analytics.technicalName: 'IEUEDOCOMMCHANNELVH'
define view entity I_EUElectronicDocCommChannelVH
  as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{

      @ObjectModel: { text.element:  [ 'EU_EDocCommChannelText' ]}
  key cast(dd07t.domvalue_l as edoc_eu_comm_channel) as EU_EDocCommChannel,
      @Semantics.language
      @UI.hidden: true
  key ddlanguage                                     as Language,
      @Semantics.text: true
      @Search: {
       defaultSearchElement: true,
       ranking: #HIGH,
       fuzzinessThreshold: 0.8 }
      ddtext                                         as EU_EDocCommChannelText,

      _Language
}

where
      domname    = 'EDOC_EU_COMM_CHANNEL'
  and as4local   = 'A'
  and ddlanguage = $session.system_language
```
