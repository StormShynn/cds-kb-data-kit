---
name: I_PRICEFIXINGCATEGORY
description: "Price Fixing Category"
app_component: LO-RFM-MD-ART-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRICEFIXINGCATEGORY')/$value
semantic_en: "Price Fixing Category"
semantic_vi: "Price Fixing Category — CDS view giao diện dựa trên dd07l."
keywords:
  - "price"
  - "fixing"
  - "category"
  - "domain"
  - "value"
tags:
  - LO
  - bo:companycode
  - component:LO-RFM-MD-ART-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-ART
  - LO-RFM-MD-ART-2CL
  - lob:logistics general
---
# I_PRICEFIXINGCATEGORY

**Price Fixing Category**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-ART-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRICEFIXINGCATEGORY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PriceFixingCategory` | ✓ | |  | `cast( dd07l.domvalue_l as pricefixingcategory )` | `CHAR(1)` | Indicator for price fixing |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRICEFIXINGCATEGORY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRICEFIXINGCATEGORY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPRICEFIXINGCAT'
@EndUserText.label: 'Price Fixing Category'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'PriceFixingCategory'
@ObjectModel: {
    supportedCapabilities: #VALUE_HELP_PROVIDER,
    compositionRoot: true,
    representativeKey: 'PriceFixingCategory',
    usageType.serviceQuality: #A,
    usageType.sizeCategory: #S,
    resultSet.sizeCategory: #XS,
    usageType.dataClass: #META,
    dataCategory: #VALUE_HELP
}
@Search.searchable: true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] }*/
define root view I_PriceFixingCategory
  as select from dd07l
  composition [0..*] of I_PriceFixingCategoryText as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as pricefixingcategory ) as PriceFixingCategory,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                  as DomainValue,
      _Text

}
where
      domname  = 'PBIND'
  and as4local = 'A'
  and as4vers  = '0000';
```
