---
name: I_PRICINGSCALETYPE
description: Pricingscaletype
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
# I_PRICINGSCALETYPE

**Pricingscaletype**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PricingScaleType` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as stfkz )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PricingScaleTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRCGSCALETYPE'
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter:true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #META
@EndUserText.label: 'Pricing Scale Type'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.representativeKey: 'PricingScaleType'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.sapObjectNodeType.name: 'PricingScaleType'
define view I_PricingScaleType
  as select from dd07l
  association [0..*] to I_PricingScaleTypeText as _Text on $projection.PricingScaleType = _Text.PricingScaleType
{

      @ObjectModel.text.association: '_Text'
  key cast ( substring( domvalue_l, 1, 1 ) as stfkz ) as PricingScaleType,
      _Text

}

where
      domname  = 'STFKZ'
  and as4local = 'A'
```
