---
name: I_PRATIERTAXTYPE
description: "PRA Tier Tax Type"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATIERTAXTYPE')/$value
semantic_en: "PRA Tier Tax Type"
semantic_vi: "PRA Tier Tax Type — CDS view giao diện dựa trên dd07l."
keywords:
  - "pra"
  - "tier"
  - "tax"
  - "type"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRATIERTAXTYPE

**PRA Tier Tax Type**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATIERTAXTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TierTaxType` | ✓ | |  | `cast( domvalue_l as oiux3_tier_tax_indicator )` | `CHAR(1)` | Tier Tax |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PRATierTaxTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATIERTAXTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATIERTAXTYPE')/$value)*

```abap
@EndUserText.label: 'PRA Tier Tax Type'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTIERTAXTYP'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'TierTaxType'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'PRATexasTaxTierTaxType'

define view I_PRATierTaxType
  as select from dd07l
  association [0..*] to I_PRATierTaxTypeText as _Text on $projection.TierTaxType = _Text.TierTaxType
{
      @ObjectModel.text.association: '_Text'
  key cast( domvalue_l as oiux3_tier_tax_indicator )   as TierTaxType,
      _Text
}
where
      domname  = 'OIUX3_TIER_TAX_INDICATOR'
  and as4local = 'A';
```
