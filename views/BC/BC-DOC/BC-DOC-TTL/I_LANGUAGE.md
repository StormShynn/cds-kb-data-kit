---
name: I_LANGUAGE
description: Language
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
  - language
  - component:BC-DOC-TTL
  - lob:Basis Components
---
# I_LANGUAGE

**Language**

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
| `LanguageISOCode` | `laiso` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_LanguageText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ILanguage'
@EndUserText.label: 'Language'
@Analytics : {dataCategory: #DIMENSION, dataExtraction.enabled : true}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC 
@ObjectModel.representativeKey: 'Language'
@Search.searchable: true

define view I_Language as select from t002
    association [0..*] to I_LanguageText as _Text 
        on $projection.Language = _Text.LanguageCode
{
    @ObjectModel.text.association: '_Text'
    key spras as Language,
    _Text,
    
    @Search.defaultSearchElement: true
    laiso as LanguageISOCode
    
}
```
