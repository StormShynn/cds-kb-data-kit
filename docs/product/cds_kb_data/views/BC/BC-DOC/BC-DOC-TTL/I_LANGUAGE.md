---
name: I_LANGUAGE
description: "Language"
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `LanguageISOCode` |  | |  | `laiso` | `CHAR(2)` | 2-Character SAP Language Code |
| `_Text` | | ✓ | | | | |

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
