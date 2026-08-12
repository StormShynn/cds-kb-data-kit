---
name: I_PRAPRODUCT
description: "PRA Product"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAPRODUCT')/$value
semantic_en: "PRA Product"
semantic_vi: "PRA Product — CDS view giao diện dựa trên I_MinorProduct."
keywords:
  - "pra"
  - "product"
  - "major"
  - "minor"
tags:
  - IS
  - bo:material
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - product
---
# I_PRAPRODUCT

**PRA Product**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAPRODUCT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  | `cast(concat(MajorProduct, MinorProduct) as oiu_full_pd_cd )` | `CHAR(3)` | Full three char. product code (Major and Detail Products) |
| `MajorProduct` |  | |  |  | `CHAR(1)` | Major product code |
| `MinorProduct` |  | |  |  | `CHAR(2)` | Minor Product Code |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MajorProduct` | `I_MajorProduct` | [0..1] |
| `_MinorProduct` | `I_MinorProduct` | [0..1] |
| `_Text` | `I_PRAProductText` | [1..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAPRODUCT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAPRODUCT')/$value)*

```abap
@EndUserText.label: 'PRA Product'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVPRODUCT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'Product'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.sapObjectNodeType.name: 'PRAProduct'

@Search.searchable: false
define view I_PRAProduct
  as select from I_MinorProduct
  association [0..1] to I_MajorProduct   as _MajorProduct on  $projection.MajorProduct = _MajorProduct.MajorProduct
  association [0..1] to I_MinorProduct   as _MinorProduct on  $projection.MajorProduct = _MinorProduct.MajorProduct
                                                          and $projection.MinorProduct = _MinorProduct.MinorProduct
  association [1..*] to I_PRAProductText as _Text         on  $projection.Product = _Text.Product
{
      @ObjectModel.text.association: '_Text'
      @Search                         : {ranking: #HIGH, defaultSearchElement: true, fuzzinessThreshold: 0.8}      
  key cast(concat(MajorProduct, MinorProduct) as oiu_full_pd_cd )  as Product,
        @Search                         : {ranking: #HIGH, defaultSearchElement: true, fuzzinessThreshold: 0.8}
      MajorProduct,
      MinorProduct,
      _Text
}
```
