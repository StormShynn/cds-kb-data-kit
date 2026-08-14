---
name: I_BPMARITALPROPERTYREGIMETEXT
description: "Bpmaritalpropertyregimetext"
semantic_vi: "View Bpmaritalpropertyregimetext cung cấp mô tả văn bản của chế độ tài sản hôn nhân trong các ngôn ngữ khác nhau, có thể được sử dụng để hiển thị chi tiết chế độ trong ứng dụng."
keywords:
  - "marital property regime"
  - "chế độ tài sản hôn nhân"
  - "text view"
  - "interface view"
  - "fs-bp"
  - "sap cds"
  - "language"
  - "description"
  - "bpmaritalpropertyregime"
  - "bpmaritalpropertyregimedesc"
semantic_en: "The Bpmaritalpropertyregimetext view provides text descriptions of marital property regimes in different languages, which can be used to display regime details in applications."
app_component: FS-BP
software_component: SAP_BASIS
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
  - FS
  - FS-BP
  - interface-view
  - text-view
  - text
  - component:FS-BP
  - lob:Other
---
# I_BPMARITALPROPERTYREGIMETEXT

**Bpmaritalpropertyregimetext**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast(tp04t.langu as langu preserving type)` |  |  |
| `BPMaritalPropertyRegime` | ✓ | |  | `cast(tp04t.proprty_st as bp_proprty_old preserving type)` |  |  |
| `BPMaritalPropertyRegimeDesc` |  | |  | `proprty_t` |  |  |
| `_BPMaritalPropertyRegime` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BPMaritalPropertyRegime` | `I_BPMaritalPropertyRegime` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'BP: Marital Property Regime - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { dataCategory: #TEXT,
                representativeKey: 'BPMaritalPropertyRegime',
                usageType : { dataClass: #CUSTOMIZING,
                              serviceQuality: #A,
                              sizeCategory: #S
                            },
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [  #LANGUAGE_DEPENDENT_TEXT,
                                          #CDS_MODELING_DATA_SOURCE,
                                          #CDS_MODELING_ASSOCIATION_TARGET,
                                          #SQL_DATA_SOURCE,
                                          #EXTRACTION_DATA_SOURCE,
                                          #SEARCHABLE_ENTITY  ]
              }
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@Search.searchable: true

define view entity I_BPMaritalPropertyRegimeText
  as select from tp04t
  association [0..1] to I_BPMaritalPropertyRegime as _BPMaritalPropertyRegime on $projection.BPMaritalPropertyRegime = _BPMaritalPropertyRegime.BPMaritalPropertyRegime
  association [0..1] to I_Language                as _Language                on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast(tp04t.langu as langu preserving type)               as Language,
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.foreignKey.association: '_BPMaritalPropertyRegime'
  key cast(tp04t.proprty_st as bp_proprty_old preserving type) as BPMaritalPropertyRegime,

      @Semantics.text: true
      tp04t.proprty_t                                        as BPMaritalPropertyRegimeDesc,

      _BPMaritalPropertyRegime,
      _Language
}
```
