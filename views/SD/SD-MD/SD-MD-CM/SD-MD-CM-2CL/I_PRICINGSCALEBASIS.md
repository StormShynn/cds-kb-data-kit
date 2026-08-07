---
name: I_PRICINGSCALEBASIS
description: Pricingscalebasis
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
  - pricing
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
---
# I_PRICINGSCALEBASIS

**Pricingscalebasis**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `PricingScaleBasis` | ✓ | |  | `cast ( substring( domvalue_l, 1, 3 ) as kzbzg_long )` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PricingScaleBasisText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRCGSCALEBASIS'
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter:true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #META
@EndUserText.label: 'Pricing Scale Basis'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.representativeKey: 'PricingScaleBasis'
@Metadata.ignorePropagatedAnnotations:true
define view I_PricingScaleBasis
  as select from dd07l
  association [0..*] to I_PricingScaleBasisText as _Text on $projection.PricingScaleBasis = _Text.PricingScaleBasis
{

      @ObjectModel.text.association: '_Text'
  key cast ( substring( domvalue_l, 1, 3 ) as kzbzg_long ) as PricingScaleBasis,
      _Text

}

where
      domname  = 'KZBZG_LONG'
  and as4local = 'A'
```
