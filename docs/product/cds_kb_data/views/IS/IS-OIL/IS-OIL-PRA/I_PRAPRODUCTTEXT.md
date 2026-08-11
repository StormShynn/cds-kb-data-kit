---
name: I_PRAPRODUCTTEXT
description: "PRA Product - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAPRODUCTTEXT')/$value
semantic_en: "PRA Product - Text"
semantic_vi: "PRA Product - Text — CDS view giao diện dựa trên I_MinorProductText."
keywords:
  - "pra"
  - "product"
  - "text"
  - "language"
  - "name"
tags:
  - IS
  - bo:material
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - product
---
# I_PRAPRODUCTTEXT

**PRA Product - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAPRODUCTTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  | `cast(CONCAT(MajorProduct, MinorProduct) as oiu_full_pd_cd )` | `CHAR(3)` | Full three char. product code (Major and Detail Products) |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `ProductName` |  | |  | `MinorProductName` | `CHAR(50)` | Minor Product Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAPRODUCTTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAPRODUCTTEXT')/$value)*

```abap
@EndUserText.label: 'PRA Product - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVPRODUCTT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'Product'
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MASTER

define view I_PRAProductText
  as select from I_MinorProductText
{
  key cast(CONCAT(MajorProduct, MinorProduct) as oiu_full_pd_cd )  as Product,
      @Semantics.language: true
  key Language,
      @Semantics.text: true
      MinorProductName  as ProductName
}
```
