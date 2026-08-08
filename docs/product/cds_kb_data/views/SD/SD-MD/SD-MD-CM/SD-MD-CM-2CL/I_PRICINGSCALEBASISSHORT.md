---
name: I_PRICINGSCALEBASISSHORT
description: "Pricingscalebasisshort"
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
# I_PRICINGSCALEBASISSHORT

**Pricingscalebasisshort**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PricingScaleBasisShort` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as kzbzg )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PricingScaleBasisShortText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRCGSCALEBS'
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
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.representativeKey: 'PricingScaleBasisShort'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.sapObjectNodeType.name: 'PricingScaleBasis'
define view I_PricingScaleBasisShort
  as select from dd07l
  association [0..*] to I_PricingScaleBasisShortText as _Text on $projection.PricingScaleBasisShort = _Text.PricingScaleBasisShort
{

      @ObjectModel.text.association: '_Text'
  key cast ( substring( domvalue_l, 1, 1 ) as kzbzg ) as PricingScaleBasisShort,
      _Text

}

where
      domname  = 'KZBZG' 
  and as4local = 'A'
  and as4vers  = '0000'
```
