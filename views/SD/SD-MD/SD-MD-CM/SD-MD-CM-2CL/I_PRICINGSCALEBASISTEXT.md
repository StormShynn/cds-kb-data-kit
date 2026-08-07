---
name: I_PRICINGSCALEBASISTEXT
description: Pricingscalebasistext
app_component: SD-MD-CM-2CL
software_component: SAPSCORE
release_state: released
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
# I_PRICINGSCALEBASISTEXT

**Pricingscalebasistext**

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
| `PricingScaleBasis` | ✓ | |  | `cast ( substring( domvalue_l, 1, 3 ) as kzbzg_long )` |  |  |
| `PricingScaleBasisName` |  | |  | `cast ( ddtext as price_element_scbasetype_descr )` |  |  |
| `_PricingScaleBasis` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PricingScaleBasis` | `I_PricingScaleBasis` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRCGSCALEBASIST'
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter:true
@ObjectModel.dataCategory: #TEXT
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #META
@EndUserText.label: 'Pricing Scale Basis - Text'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.representativeKey: 'PricingScaleBasis'
@Metadata.ignorePropagatedAnnotations:true
define view I_PricingScaleBasisText
  as select from dd07t
  association [0..1] to I_PricingScaleBasis as _PricingScaleBasis on $projection.PricingScaleBasis = _PricingScaleBasis.PricingScaleBasis
  association [0..1] to I_Language          as _Language          on $projection.Language = _Language.Language
{
      @Semantics.language:true
  key cast( ddlanguage as spras )                          as Language,
      @ObjectModel.foreignKey.association: '_PricingScaleBasis'
  key cast ( substring( domvalue_l, 1, 3 ) as kzbzg_long ) as PricingScaleBasis,
      @Semantics.text:true
      cast ( ddtext as price_element_scbasetype_descr )    as PricingScaleBasisName,
      _PricingScaleBasis,
      _Language
}
where
      domname  = 'KZBZG_LONG'
  and as4local = 'A'
```
