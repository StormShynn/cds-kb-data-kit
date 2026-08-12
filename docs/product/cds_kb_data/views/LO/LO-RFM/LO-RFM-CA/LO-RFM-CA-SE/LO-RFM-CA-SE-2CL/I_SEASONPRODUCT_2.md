---
name: I_SEASONPRODUCT_2
description: "Product Assignment to Season"
app_component: LO-RFM-CA-SE-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEASONPRODUCT_2')/$value
semantic_en: "Product Assignment to Season"
semantic_vi: "Product Assignment to Season — CDS view cơ bản dựa trên fsh_seasons_mat."
keywords:
  - "product"
  - "assignment"
  - "season"
  - "year"
  - "collection"
  - "theme"
tags:
  - LO
  - bo:material
  - component:LO-RFM-CA-SE-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-CA
  - LO-RFM-CA-SE
  - LO-RFM-CA-SE-2CL
  - lob:cross_application components
  - lob:logistics general
  - product
---
# I_SEASONPRODUCT_2

**Product Assignment to Season**

| Property | Value |
|---|---|
| App Component | `LO-RFM-CA-SE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEASONPRODUCT_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  | `matnr` | `CHAR(40)` | Material Number |
| `ProductSeasonYear` | ✓ | |  | `fsh_season_year` | `CHAR(4)` | Season Year |
| `ProductSeason` | ✓ | |  | `fsh_season` | `CHAR(10)` | Season |
| `ProductCollection` | ✓ | |  | `fsh_collection` | `CHAR(10)` | Fashion Collection |
| `ProductTheme` | ✓ | |  | `fsh_theme` | `CHAR(10)` | Fashion Theme |
| `CrossPlantConfigurableProduct` |  | |  | `satnr` | `CHAR(40)` | Cross-Plant Configurable Material |
| `ProductSeasonInternalUUID` |  | |  | `rfm_suid` | `RAW(16)` | Season Internal Unique Identifier |
| `ProductSeasonName` |  | |  | `destext` | `CHAR(80)` | Description of Season Assigned to Article |
| `_Season` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_CrossPlantConfigurableProduct` | | ✓ | | | | |
| `_ProductText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Season` | `I_Season` | [1..1] |
| `_Product` | `I_Product` | [1..1] |
| `_CrossPlantConfigurableProduct` | `I_Product` | [0..1] |
| `_ProductText` | `I_ProductText` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEASONPRODUCT_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEASONPRODUCT_2')/$value)*

```abap
@VDM: {
  viewType                          : #BASIC,
  lifecycle.contract.type           : #PUBLIC_LOCAL_API
}

@AccessControl.authorizationCheck   : #MANDATORY

@ObjectModel: {
   supportedCapabilities            : [ #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #EXTRACTION_DATA_SOURCE

                                        ],
   usageType: {
     dataClass:      #MASTER,
     serviceQuality: #C,
     sizeCategory:   #M
   }
}
@Analytics.dataExtraction.enabled:true
@Analytics.internalName:#LOCAL

@ObjectModel.sapObjectNodeType.name: 'ProductSeason'
@Metadata :{
   ignorePropagatedAnnotations      : true,
   allowExtensions                  : true
}
@EndUserText.label: 'Product Assignment to Season'

define view entity I_SeasonProduct_2
  as select from fsh_seasons_mat
  association [1..1] to I_Season      as _Season                        on  $projection.ProductSeasonYear = _Season.ProductSeasonYear
                                                                        and $projection.ProductSeason     = _Season.ProductSeason
                                                                        and $projection.ProductCollection = _Season.ProductCollection
                                                                        and $projection.ProductTheme      = _Season.ProductTheme
  association [1..1] to I_Product     as _Product                       on  $projection.Product = _Product.Product
  association [0..1] to I_Product     as _CrossPlantConfigurableProduct on  $projection.CrossPlantConfigurableProduct = _CrossPlantConfigurableProduct.Product
  association [0..1] to I_ProductText as _ProductText                   on  $projection.Product   = _ProductText.Product
                                                                        and _ProductText.Language = $session.system_language
{
  key    matnr           as Product,
  key    fsh_season_year as ProductSeasonYear,
  key    fsh_season      as ProductSeason,
  key    fsh_collection  as ProductCollection,
  key    fsh_theme       as ProductTheme,
         satnr           as CrossPlantConfigurableProduct,

         rfm_suid        as ProductSeasonInternalUUID,
         destext         as ProductSeasonName,


         /*Associations */

         @ObjectModel.association.type: [#TO_COMPOSITION_ROOT,#TO_COMPOSITION_PARENT]
         _Season,
         @ObjectModel.association.type: [#TO_COMPOSITION_ROOT,#TO_COMPOSITION_PARENT]
         _Product,
         _CrossPlantConfigurableProduct,
         _ProductText
}
```
