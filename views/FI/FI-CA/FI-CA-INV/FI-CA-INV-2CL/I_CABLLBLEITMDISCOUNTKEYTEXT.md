---
name: I_CABLLBLEITMDISCOUNTKEYTEXT
description: Cabllbleitmdiscountkeytext
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
  - text-view
  - text
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CABLLBLEITMDISCOUNTKEYTEXT

**Cabllbleitmdiscountkeytext**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CABllbleItmDiscountKey` | `_tfk8117t.disckey` |
| key `Language` | `_tfk8117t.langu` |
| `CABllbleItmDiscountKeyText` | `cast(_tfk8117t.text as disckey_txt_gfn_kk preserving type )` |
| `_CABllbleItmDiscountKey` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABllbleItmDiscountKey` | `I_CABllbleItmDiscountKey` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Rabatt-/Zuschlagschlüssel abr. Pos. - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CABllbleItmDiscountKey',
  sapObjectNodeType.name: 'ContrAcctgBllbleItmDiscKeyText',
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

define view entity I_CABllbleItmDiscountKeyText
  as select from tfk8117t as _tfk8117t
  association [0..1] to I_CABllbleItmDiscountKey as _CABllbleItmDiscountKey on $projection.CABllbleItmDiscountKey = _CABllbleItmDiscountKey.CABllbleItmDiscountKey
  association [0..1] to I_Language               as _Language               on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CABllbleItmDiscountKey'
  key _tfk8117t.disckey                                           as CABllbleItmDiscountKey,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key _tfk8117t.langu                                             as Language,
      @Semantics.text: true
      cast(_tfk8117t.text as disckey_txt_gfn_kk preserving type ) as CABllbleItmDiscountKeyText,

      _CABllbleItmDiscountKey,
      _Language
}
```
