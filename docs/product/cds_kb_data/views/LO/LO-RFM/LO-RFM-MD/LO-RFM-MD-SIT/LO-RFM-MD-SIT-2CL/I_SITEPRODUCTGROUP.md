---
name: I_SITEPRODUCTGROUP
description: "Product Group Assignment to Site"
app_component: LO-RFM-MD-SIT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEPRODUCTGROUP')/$value
semantic_en: "Product Group Assignment to Site"
semantic_vi: "I_SITEPRODUCTGROUP — CDS view cơ bản dựa trên wrf6."
keywords:
  - "siteproductgroup"
  - "site"
  - "customer"
  - "product"
  - "group"
  - "contact"
  - "person"
  - "department"
  - "assortment"
  - "grade"
  - "prod"
  - "excld"
  - "outbound"
tags:
  - LO
  - bo:material
  - component:LO-RFM-MD-SIT-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-SIT
  - LO-RFM-MD-SIT-2CL
  - lob:logistics general
  - product
---
# I_SITEPRODUCTGROUP

**Product Group Assignment to Site**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-SIT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEPRODUCTGROUP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SiteCustomer` | ✓ | |  | `locnr` | `CHAR(10)` | Customer Number |
| `ProductGroup` | ✓ | |  | `cast(matkl as productgroup preserving type)` | `CHAR(9)` | Product Group |
| `ContactPersonStdDepartment` |  | |  | `abtnr` | `CHAR(4)` | Department number |
| `AssortmentGrade` |  | |  | `sstuf` | `CHAR(2)` | Assortment grade |
| `ProdGroupIsExcldFrmPOSOutbound` |  | |  | `wdaus` | `CHAR(1)` | Exclude material group from POS outbound processing |
| `ProdReplnmtRqmtGroup` |  | |  | `rqgrp` | `CHAR(2)` | Replenishment: requirement group |
| `StoreProcurementProfile` |  | |  | `fbpro` | `CHAR(4)` | Store procurement profile for store order, replenishment |
| `PriceListType` |  | |  | `pltyp_p` | `CHAR(2)` | Price determination: Item-based price list type |
| `RevaluationProfile` |  | |  | `uprof` | `CHAR(4)` | Retail revalution profile |
| `PriceIsIncludingSalesTax` |  | |  | `primw` | `CHAR(1)` | Price including sales tax |
| `_ProductGroup` | | ✓ | | | | |
| `_ContactPersonStdDepartment` | | ✓ | | | | |
| `_Site` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductGroup` | `I_MaterialGroup` | [1..1] |
| `_ContactPersonStdDepartment` | `I_ContactPersonStdDepartment` | [0..1] |
| `_Site` | `I_Site` | [1..1] |
| `_Customer` | `I_Customer` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEPRODUCTGROUP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEPRODUCTGROUP')/$value)*

```abap
@EndUserText: {label: 'Product Group Assignment to Site'}
@AbapCatalog: {
    sqlViewName: 'ISTEPRODUCTGROUP',
    compiler: {
        compareFilter: true
    }
}
@AbapCatalog.preserveKey: true
@AccessControl: {
    authorizationCheck: #CHECK,
    personalData.blocking: #NOT_REQUIRED
}

@ClientHandling: {algorithm: #SESSION_VARIABLE}
@VDM: {viewType: #BASIC}

@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        automatic: true
        }
    }
}

@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true

@ObjectModel: {
    representativeKey: 'ProductGroup',
    supportedCapabilities: [ #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #EXTRACTION_DATA_SOURCE ],
   sapObjectNodeType: {                
                     name: 'RetailSiteMerchandiseCategory'  
                   },                                
    usageType: {
        serviceQuality: #A,
        sizeCategory: #M,
        dataClass: #MASTER
   }
}

define view I_SiteProductGroup
  as select from wrf6
  association [1..1] to I_MaterialGroup              as _ProductGroup               on $projection.ProductGroup = _ProductGroup.MaterialGroup
  association [0..1] to I_ContactPersonStdDepartment as _ContactPersonStdDepartment on $projection.ContactPersonStdDepartment = _ContactPersonStdDepartment.ContactPersonStdDepartment
  /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ]  } */
  association [1..1] to I_Site                       as _Site                       on $projection.SiteCustomer = _Site.SiteCustomer
  association [1..1] to I_Customer                   as _Customer                   on $projection.SiteCustomer = _Customer.Customer
{
      @ObjectModel: {foreignKey: {association: '_Customer'}}
  key locnr                                       as SiteCustomer,
  key cast(matkl as productgroup preserving type) as ProductGroup,
      @ObjectModel: {foreignKey: {association: '_ContactPersonStdDepartment'}}
      @EndUserText: {quickInfo: 'Contact Person''s Standard Department'}
      abtnr                                       as ContactPersonStdDepartment,
      sstuf                                       as AssortmentGrade,
      wdaus                                       as ProdGroupIsExcldFrmPOSOutbound,
      rqgrp                                       as ProdReplnmtRqmtGroup,
      fbpro                                       as StoreProcurementProfile,
      pltyp_p                                     as PriceListType,
//      sorbr                                       as ProductGroupAsstmtLength,
      uprof                                       as RevaluationProfile,
      primw                                       as PriceIsIncludingSalesTax,
      _ProductGroup,
      _ContactPersonStdDepartment,
      @ObjectModel: {association: {type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]}}
      _Site,
      _Customer
}
```
