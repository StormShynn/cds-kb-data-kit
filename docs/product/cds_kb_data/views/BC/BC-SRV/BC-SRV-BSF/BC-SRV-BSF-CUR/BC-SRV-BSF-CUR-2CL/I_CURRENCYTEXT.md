---
name: I_CURRENCYTEXT
description: "Currencytext"
app_component: BC-SRV-BSF-CUR-2CL
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
  - BC-SRV
  - BC-SRV-BSF
  - interface-view
  - text-view
  - currency
  - text
  - component:BC-SRV-BSF-CUR-2CL
  - lob:Basis Components
---
# I_CURRENCYTEXT

**Currencytext**

| Property | Value |
|---|---|
| App Component | `BC-SRV-BSF-CUR-2CL` |
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
| `Currency` | ✓ | |  | `waers` | `CUKY(5)` | Currency Key |
| `CurrencyName` |  | |  | `cast(ltext as ltext_cds preserving type)` | `CHAR(40)` | Description |
| `CurrencyShortName` |  | |  | `ktext` | `CHAR(15)` | Short Text |
| `_Currency` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Currency` | `I_Currency` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Currency Text'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'Currency'
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFICURRENCYTEXT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Search.searchable: true

define view I_CurrencyText
  as select from tcurt

  association[1..1] to I_Currency as _Currency
    on $projection.Currency = _Currency.Currency
  association[0..1] to I_Language as _Language
    on $projection.Language = _Language.Language
{
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    _Language,

    @Semantics.currencyCode: true
    @ObjectModel.foreignKey.association: '_Currency'
    key waers as Currency,
    _Currency,

    @Semantics.text: true
    @Search.defaultSearchElement: true
    @Search.ranking: #HIGH
    @Search.fuzzinessThreshold: 0.8
    
    cast(ltext as ltext_cds preserving type) as CurrencyName,

    @Semantics.text: true
    ktext as CurrencyShortName


};
```
