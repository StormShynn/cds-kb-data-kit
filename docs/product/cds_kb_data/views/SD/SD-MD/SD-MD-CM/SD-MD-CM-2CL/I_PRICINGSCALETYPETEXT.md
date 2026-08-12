---
name: I_PRICINGSCALETYPETEXT
description: "Pricingscaletypetext"
app_component: SD-MD-CM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-MD
  - SD-MD-CM
  - interface-view
  - text-view
  - pricing
  - text
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
---
# I_PRICINGSCALETYPETEXT

**Pricingscaletypetext**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` |  |  |
| `PricingScaleType` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as stfkz )` |  |  |
| `PricingScaleTypeName` |  | |  | `cast ( ddtext as price_element_scale_type_descr )` |  |  |
| `_PricingScaleType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PricingScaleType` | `I_PricingScaleType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRCGSCALETYPET'
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter:true
@ObjectModel.dataCategory: #TEXT
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #META
@EndUserText.label: 'Pricing Scale Type - Text'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.representativeKey: 'PricingScaleType'
@Metadata.ignorePropagatedAnnotations:true
define view I_PricingScaleTypeText
  as select from dd07t
  association [0..1] to I_PricingScaleType as _PricingScaleType on $projection.PricingScaleType = _PricingScaleType.PricingScaleType
  association [0..1] to I_Language         as _Language         on $projection.Language = _Language.Language
{
      @Semantics.language:true
  key cast( ddlanguage as spras )                       as Language,
      @ObjectModel.foreignKey.association: '_PricingScaleType'
  key cast ( substring( domvalue_l, 1, 1 ) as stfkz )   as PricingScaleType,
      @Semantics.text:true
      cast ( ddtext as price_element_scale_type_descr ) as PricingScaleTypeName,
      _PricingScaleType,
      _Language
}
where
      domname  = 'STFKZ'
  and as4local = 'A'
```
