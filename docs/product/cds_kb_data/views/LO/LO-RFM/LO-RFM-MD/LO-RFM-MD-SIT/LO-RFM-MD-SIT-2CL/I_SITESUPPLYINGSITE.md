---
name: I_SITESUPPLYINGSITE
description: "Supplying Site Assignment to Site"
app_component: LO-RFM-MD-SIT-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITESUPPLYINGSITE')/$value
semantic_en: "Supplying Site Assignment to Site"
semantic_vi: "I_SITESUPPLYINGSITE — CDS view cơ bản dựa trên wrf3."
keywords:
  - "sitesupplyingsite"
  - "site"
  - "customer"
  - "product"
  - "group"
  - "validity"
  - "date"
  - "start"
  - "supplying"
tags:
  - LO
  - bo:plant
  - component:LO-RFM-MD-SIT-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-SIT
  - LO-RFM-MD-SIT-2CL
  - lob:logistics general
---
# I_SITESUPPLYINGSITE

**Supplying Site Assignment to Site**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-SIT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITESUPPLYINGSITE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SiteCustomer` | ✓ | |  | `locnr` | `CHAR(10)` | Customer Number |
| `ProductGroup` | ✓ | |  | `cast(matkl as productgroup preserving type)` | `CHAR(9)` | Product Group |
| `ValidityEndDate` | ✓ | |  | `datbi` | `DATS(8)` | Valid to date |
| `ValidityStartDate` | ✓ | |  | `datab` | `DATS(8)` | Valid-from date |
| `SupplyingSite` | ✓ | |  | `loclb` | `CHAR(4)` | Supplying Site (Source of Supply) |
| `MerchandiseCategory` |  | |  | `matkl` | `CHAR(9)` | Material Group |
| `SupplyingSitePriority` |  | |  | `prioritaet` | `NUMC(2)` | Supplying Site Priority |
| `_ProductGroup` | | ✓ | | | | |
| `_Site` | | ✓ | | | | |
| `_SupplyingSite` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductGroup` | `I_ProductGroup_2` | [1..1] |
| `_Site` | `I_Site` | [1..1] |
| `_SupplyingSite` | `I_Site` | [1..1] |
| `_Customer` | `I_Customer` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITESUPPLYINGSITE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITESUPPLYINGSITE')/$value)*

```abap
@EndUserText: {label: 'Supplying Site Assignment to Site'}
@AbapCatalog: {
    sqlViewName: 'ISITESPLYNGSITE',
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
//@VDM: {viewType: #BASIC}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
          automatic: true
        }
    }
}

@ObjectModel: {
   representativeKey: 'SupplyingSite',
   supportedCapabilities: [ #SQL_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #EXTRACTION_DATA_SOURCE ,
                            #ANALYTICAL_DIMENSION,
                            #CDS_MODELING_ASSOCIATION_TARGET],
   modelingPattern: [ #ANALYTICAL_DIMENSION ],
   sapObjectNodeType: {                
                     name: 'RetailSiteSupplyingSite'  
                   },                                
   usageType: {
        serviceQuality: #A,
        sizeCategory : #M,
        dataClass: #MASTER
   }
 }

@Metadata.ignorePropagatedAnnotations:true
@Metadata.allowExtensions:true

define view I_SiteSupplyingSite
  as select from wrf3
 //  association [1..1] to I_MaterialGroup as _MerchandiseCategory on $projection.MerchandiseCategory = _MerchandiseCategory.MaterialGroup
 // Replaced I_MaterialGroup from I_ProductGroup_2 as I_MaterialGroup is not C1 released
 // association [1..1] to I_MaterialGroup as _ProductGroup  on $projection.ProductGroup = _ProductGroup.MaterialGroup
  association [1..1] to I_ProductGroup_2 as _ProductGroup  on $projection.ProductGroup = _ProductGroup.ProductGroup
  /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ]  } */
  association [1..1] to I_Site          as _Site          on $projection.SiteCustomer = _Site.SiteCustomer
  association [1..1] to I_Site          as _SupplyingSite on $projection.SupplyingSite = _SupplyingSite.Site
  association [1..1] to I_Customer      as _Customer      on $projection.SiteCustomer = _Customer.Customer
{
      @ObjectModel: {foreignKey: {association: '_Customer'}}
  key locnr       as SiteCustomer,
      @ObjectModel: {foreignKey: {association: '_ProductGroup'}}
  key cast(matkl as productgroup preserving type) as ProductGroup,

      @Semantics: {businessDate: {to: true}}
  key datbi       as ValidityEndDate,
      @Semantics: {businessDate: {from: true}}
  key datab       as ValidityStartDate,
 //     @ObjectModel: {foreignKey: {association: '_SupplyingSite'}}
  key loclb       as SupplyingSite,
    //      @ObjectModel: {foreignKey: {association: '_MerchandiseCategory'}}
         matkl       as MerchandiseCategory,
      
      prioritaet  as SupplyingSitePriority,

      //      _MerchandiseCategory,
     _ProductGroup,
      @ObjectModel: {association: {type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]}}
      _Site,
      _SupplyingSite,
      _Customer
}
```
