---
name: I_LANGUAGETEXT
description: "Languagetext"
app_component: BC-DOC-TTL
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
  - BC
  - BC-DOC
  - BC-DOC-TTL
  - interface-view
  - text-view
  - language
  - text
  - component:BC-DOC-TTL
  - lob:Basis Components
---
# I_LANGUAGETEXT

**Languagetext**

| Property | Value |
|---|---|
| App Component | `BC-DOC-TTL` |
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
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `LanguageCode` | ✓ | |  | `sprsl` | `LANG(1)` | Language Key |
| `LanguageName` |  | |  | `sptxt` | `CHAR(16)` | Name of Language |
| `_Language` | | ✓ | | | | |
| `_LanguageCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_LanguageCode` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ILANGUAGETEXT'
@EndUserText.label: 'Language Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled : true
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'LanguageCode'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #B
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Search.searchable: true

define view I_LanguageText as select from t002t 
    association[0..1] to I_Language as _Language 
        on $projection.Language = _Language.Language
    association[0..1] to I_Language as _LanguageCode 
        on $projection.LanguageCode = _LanguageCode.Language
{
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    _Language,
    
    @ObjectModel.foreignKey.association: '_LanguageCode'
    key sprsl as LanguageCode,
    _LanguageCode,
    
    @Search.defaultSearchElement: true
//    @Search.fuzzinessThreshold: 0.8       Fuzzyness should be set in a ValueHelp-View
    @Semantics.text: true
    sptxt as LanguageName
    
}
```
