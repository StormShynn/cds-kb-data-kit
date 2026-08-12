---
name: I_PRAROYTYWYPRODUCTTYPE
description: "Royalty Wyoming Product Type"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAROYTYWYPRODUCTTYPE')/$value
semantic_en: "Royalty Wyoming Product Type"
semantic_vi: "Royalty Wyoming Product Type — CDS view giao diện dựa trên dd07l."
keywords:
  - "royalty"
  - "wyoming"
  - "product"
  - "type"
tags:
  - IS
  - bo:material
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - product
---
# I_PRAROYTYWYPRODUCTTYPE

**Royalty Wyoming Product Type**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAROYTYWYPRODUCTTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductType` | ✓ | |  | `cast (domvalue_l as oiuy6_wy_product_code )` | `NUMC(3)` | Royalty 2.0 - Wyoming - Product Code |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PRARoytyWYProductTypeT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAROYTYWYPRODUCTTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAROYTYWYPRODUCTTYPE')/$value)*

```abap
@EndUserText.label: 'Royalty Wyoming Product Type'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVROYWYPRODTP'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'ProductType'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'PRAWyomingRoyaltyProductType'

define view I_PRARoytyWYProductType
  as select from dd07l
  association [0..*] to I_PRARoytyWYProductTypeT as _Text on $projection.ProductType = _Text.ProductType
{
      @ObjectModel.text.association: '_Text'
  key cast (domvalue_l as oiuy6_wy_product_code ) as ProductType,
      _Text
} 
where
      domname  = 'OIUY6_WY_PRODUCT_CODE'
  and as4local = 'A';
```
