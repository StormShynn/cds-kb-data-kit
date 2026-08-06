---
name: I_LANGUAGETEXT
description: Languagetext
app_component: BC-DOC-TTL
software_component: SAP_BASIS
release_state: released
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
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `spras` |
| key `LanguageCode` | `sprsl` |
| `LanguageName` | `sptxt` |
| `_Language` | *Association* |
| `_LanguageCode` | *Association* |

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
