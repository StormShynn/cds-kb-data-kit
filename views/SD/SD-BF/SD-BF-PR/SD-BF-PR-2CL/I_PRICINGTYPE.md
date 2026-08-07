---
name: I_PRICINGTYPE
description: Pricingtype
app_component: SD-BF-PR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BF
  - SD-BF-PR
  - interface-view
  - pricing
  - component:SD-BF-PR-2CL
  - lob:Sales & Distribution
---
# I_PRICINGTYPE

**Pricingtype**

| Property | Value |
|---|---|
| App Component | `SD-BF-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PricingType` | ✓ | |  | `cast ( SUBSTRING( domvalue_l, 1, 1) as knprs preserving type)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PricingTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRICINGTYPE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@EndUserText.label: 'Pricing Type'
@Metadata.ignorePropagatedAnnotations:true
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'PricingType'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]

define view I_PricingType
  as select from dd07l

  association [0..*] to I_PricingTypeText as _Text on $projection.PricingType = _Text.PricingType

{

      @ObjectModel.text.association: '_Text'
  key cast ( SUBSTRING( domvalue_l, 1, 1) as knprs preserving type) as PricingType,

      _Text

}

where
      domname  = 'KNPRS'
  and as4local = 'A'
```
