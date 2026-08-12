---
name: I_SEASONASSIGNMENT
description: "Season Assignment"
app_component: LO-RFM-CA-SE-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEASONASSIGNMENT')/$value
semantic_en: "Season Assignment"
semantic_vi: "Season Assignment — CDS view tổng hợp dựa trên I_Season."
keywords:
  - "season"
  - "assignment"
  - "internal"
  - "identifier"
  - "product"
  - "year"
  - "collection"
  - "theme"
tags:
  - LO
  - bo:salesorder
  - component:LO-RFM-CA-SE-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-CA
  - LO-RFM-CA-SE
  - LO-RFM-CA-SE-2CL
  - lob:cross_application components
  - lob:logistics general
---
# I_SEASONASSIGNMENT

**Season Assignment**

| Property | Value |
|---|---|
| App Component | `LO-RFM-CA-SE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEASONASSIGNMENT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SeasonInternalIdentifier` | ✓ | |  |  | `RAW(16)` | Season Internal Unique Identifier |
| `ProductSeasonYear` |  | |  |  | `CHAR(4)` | Season Year |
| `ProductSeason` |  | |  |  | `CHAR(10)` | Season |
| `ProductCollection` |  | |  |  | `CHAR(10)` | Fashion Collection |
| `ProductTheme` |  | |  |  | `CHAR(10)` | Fashion Theme |
| `ProductSeasonValidFrom` |  | |  |  | `DATS(8)` | Valid From Date |
| `ProductSeasonValidTo` |  | |  |  | `DATS(8)` | Valid To Date |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | User Who Created the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Date on Which the Object Was Created |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time at Which the Object Was Created |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Last User to Change the Object |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Date on Which the Object Was Last Changed |
| `LastChangeTime` |  | |  |  | `TIMS(6)` | Time at Which the Object Was Last Changed |
| `_CreatedByUser` | | ✓ | | | | |
| `_ChangedByUser` | | ✓ | | | | |
| `_SeasonText` | | ✓ | | | | |
| `_SeasonSalesPeriod` | | ✓ | | | | |
| `_SeasonPurchasePeriod` | | ✓ | | | | |
| `_SeasonProduct` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CreatedByUser` | `I_User` | [0..1] |
| `_ChangedByUser` | `I_User` | [0..1] |
| `_SeasonText` | `I_SeasonText` | [1..*] |
| `_SeasonSalesPeriod` | `I_SeasonSalesPeriod_2` | [0..*] |
| `_SeasonPurchasePeriod` | `I_SeasonPurchasePeriod_2` | [0..*] |
| `_SeasonProduct` | `I_SeasonProduct_2` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEASONASSIGNMENT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEASONASSIGNMENT')/$value)*

```abap
@VDM: {
  viewType                          : #COMPOSITE,
  lifecycle.contract.type           : #PUBLIC_LOCAL_API
}

@Analytics:{
  dataCategory                      : #DIMENSION,
  internalName                      : #LOCAL,
  dataExtraction                    : {
  enabled                           : true
} }

@AccessControl.authorizationCheck   : #MANDATORY

@ObjectModel: {
   representativeKey: 'SeasonInternalIdentifier',
   supportedCapabilities            : [ #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #EXTRACTION_DATA_SOURCE,
                                        #ANALYTICAL_DIMENSION
                                        ],
   modelingPattern                  :  #ANALYTICAL_DIMENSION ,
   usageType: {
     dataClass:      #MASTER,
     serviceQuality: #C,
     sizeCategory:   #M
   }
}

@ObjectModel.sapObjectNodeType.name: 'Season'

@Metadata :{
   ignorePropagatedAnnotations      : true,
   allowExtensions                  : true
}
@AccessControl.personalData.blocking: #REQUIRED
@EndUserText.label: 'Season Assignment'

define view entity I_SeasonAssignment
  as select from I_Season
  association [0..1] to I_User                   as _CreatedByUser        on  $projection.CreatedByUser = _CreatedByUser.UserID
  association [0..1] to I_User                   as _ChangedByUser        on  $projection.LastChangedByUser = _ChangedByUser.UserID
  association [1..*] to I_SeasonText             as _SeasonText           on  $projection.SeasonInternalIdentifier = _SeasonText.SeasonInternalIdentifier
  association [0..*] to I_SeasonSalesPeriod_2    as _SeasonSalesPeriod    on  $projection.ProductSeasonYear = _SeasonSalesPeriod.ProductSeasonYear
                                                                          and $projection.ProductSeason     = _SeasonSalesPeriod.ProductSeason
                                                                          and $projection.ProductCollection = _SeasonSalesPeriod.ProductCollection
                                                                          and $projection.ProductTheme      = _SeasonSalesPeriod.ProductTheme
  association [0..*] to I_SeasonPurchasePeriod_2 as _SeasonPurchasePeriod on  $projection.ProductSeasonYear = _SeasonPurchasePeriod.ProductSeasonYear
                                                                          and $projection.ProductSeason     = _SeasonPurchasePeriod.ProductSeason
                                                                          and $projection.ProductCollection = _SeasonPurchasePeriod.ProductCollection
                                                                          and $projection.ProductTheme      = _SeasonPurchasePeriod.ProductTheme
  association [0..*] to I_SeasonProduct_2        as _SeasonProduct        on  $projection.ProductSeasonYear = _SeasonProduct.ProductSeasonYear
                                                                          and $projection.ProductSeason     = _SeasonProduct.ProductSeason
                                                                          and $projection.ProductCollection = _SeasonProduct.ProductCollection
                                                                          and $projection.ProductTheme      = _SeasonProduct.ProductTheme
{
  key SeasonInternalIdentifier,
      ProductSeasonYear,
      ProductSeason,
      ProductCollection,
      ProductTheme,
      ProductSeasonValidFrom,
      ProductSeasonValidTo,
      CreatedByUser,
      CreationDate,
      CreationTime,
      LastChangedByUser,
      LastChangeDate,
      LastChangeTime,
      /* Associations */

      _CreatedByUser,
      _ChangedByUser,
      _SeasonText,
      _SeasonSalesPeriod,
      _SeasonPurchasePeriod,
      _SeasonProduct
}
```
