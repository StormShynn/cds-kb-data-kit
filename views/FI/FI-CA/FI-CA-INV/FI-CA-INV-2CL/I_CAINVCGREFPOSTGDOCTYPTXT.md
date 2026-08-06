---
name: I_CAINVCGREFPOSTGDOCTYPTXT
description: Cainvcgrefpostgdoctyptxt
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - FI-CA-INV
  - interface-view
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CAINVCGREFPOSTGDOCTYPTXT

**Cainvcgrefpostgdoctyptxt**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CAInvcgRefPostingDocType` | `cast(_tfk2605t.cadoctype as cadoctype_gfn_kk preserving type )` |
| key `Language` | `_tfk2605t.langu` |
| `CAInvcgRefPostgDocTypeTxt` | `cast(_tfk2605t.text as cadoctype_txt_gfn_kk preserving type )` |
| `_CAInvcgRefPostgDocType` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgRefPostgDocType` | `I_CAInvcgRefPostgDocTyp` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Ref.belegarten für Buchungsbel. (Texte)'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CAInvcgRefPostingDocType',
  sapObjectNodeType.name: 'CAInvcgRefPostgDocTypeTxt',
  supportedCapabilities: [
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #LANGUAGE_DEPENDENT_TEXT,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@VDM.viewType: #BASIC

define view entity I_CAInvcgRefPostgDocTypTxt
  as select from tfk2605t as _tfk2605t
  association [0..1] to I_CAInvcgRefPostgDocTyp as _CAInvcgRefPostgDocType on $projection.CAInvcgRefPostingDocType = _CAInvcgRefPostgDocType.CAInvcgRefPostingDocType
  association [0..1] to I_Language              as _Language              on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CAInvcgRefPostgDocType'
  key cast(_tfk2605t.cadoctype as cadoctype_gfn_kk preserving type ) as CAInvcgRefPostingDocType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key _tfk2605t.langu                                                as Language,
      @Semantics.text: true
      cast(_tfk2605t.text as cadoctype_txt_gfn_kk preserving type )  as CAInvcgRefPostgDocTypeTxt,

      _CAInvcgRefPostgDocType,
      _Language
}
```
