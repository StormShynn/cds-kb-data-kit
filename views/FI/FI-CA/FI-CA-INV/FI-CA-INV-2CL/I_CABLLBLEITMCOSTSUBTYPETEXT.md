---
name: I_CABLLBLEITMCOSTSUBTYPETEXT
description: Cabllbleitmcostsubtypetext
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
# I_CABLLBLEITMCOSTSUBTYPETEXT

**Cabllbleitmcostsubtypetext**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CABllbleItmCostType` | `cast( co_type as co_type_gfn_kk preserving type )` |
| key `CABllbleItmCostSubType` | `cast( co_subtype as co_subtype_gfn_kk preserving type )` |
| key `Language` | `langu` |
| `CABllbleItmCostSubtypeText` | `cast( text as co_subtype_txt_gfn_kk preserving type )` |
| `_CABllbleItmCostType` | *Association* |
| `_CABllbleItmCostSubtype` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABllbleItmCostType` | `I_CABllbleItmCostType` | [0..1] |
| `_CABllbleItmCostSubtype` | `I_CABllbleItmCostSubtype` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Kostenart der abr Pos - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CABllbleItmCostSubtype',
  sapObjectNodeType.name: 'CABllbleItmCostSubtypeTxt',
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

define view entity I_CABllbleItmCostSubtypeText
  as select from tfk8260st as _tfk8260t
  association [0..1] to I_CABllbleItmCostType    as _CABllbleItmCostType    on  $projection.CABllbleItmCostType = _CABllbleItmCostType.CABllbleItmCostType
  association [1..1] to I_CABllbleItmCostSubtype as _CABllbleItmCostSubtype on  $projection.CABllbleItmCostType    = _CABllbleItmCostSubtype.CABllbleItmCostType
                                                                            and $projection.CABllbleItmCostSubType = _CABllbleItmCostSubtype.CABllbleItmCostSubType
  association [0..1] to I_Language               as _Language               on  $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CABllbleItmCostType'
  key cast( co_type as co_type_gfn_kk preserving type )       as CABllbleItmCostType,

      @ObjectModel.foreignKey.association: '_CABllbleItmCostSubtype'
  key cast( co_subtype as co_subtype_gfn_kk preserving type ) as CABllbleItmCostSubType,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu                                                   as Language,

      @Semantics.text: true
      cast( text as co_subtype_txt_gfn_kk preserving type )   as CABllbleItmCostSubtypeText,

      _CABllbleItmCostType,
      _CABllbleItmCostSubtype,
      _Language
}
```
