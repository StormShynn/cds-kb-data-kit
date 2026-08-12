---
name: I_SPONSOREDCLASSTYPECORE
description: "Sponsored Class Type"
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SPONSOREDCLASSTYPECORE')/$value
semantic_en: "Sponsored Class Type"
semantic_vi: "Sponsored Class Type — CDS view giao diện dựa trên dd07l."
keywords:
  - "sponsored"
  - "class"
  - "type"
  - "domain"
  - "value"
tags:
  - PSM
  - bo:purchaseorder
  - component:PSM-GM-GTE-MD
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-MD
---
# I_SPONSOREDCLASSTYPECORE

**Sponsored Class Type**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SPONSOREDCLASSTYPECORE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SponsoredClassType` | ✓ | |  | `cast ( cast ( substring( dd07l.domvalue_l, 1, 1 ) as abap.char( 1 ) ) as gm_class_type )` | `CHAR(1)` | Sponsored Class Type |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SPONSOREDCLASSTYPECORE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SPONSOREDCLASSTYPECORE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IGMSPCLASSTYPECE'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Sponsored Class Type'

@VDM.viewType: #BASIC
@Analytics: {
     dataCategory: #DIMENSION,
     dataExtraction.enabled: true,
     internalName: #LOCAL
}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: {
     dataCategory: #VALUE_HELP,
     representativeKey: 'SponsoredClassType',
     usageType: {
         dataClass: #META,
         serviceQuality: #A,
         sizeCategory: #S
     },
     resultSet.sizeCategory: #XS,
     supportedCapabilities: [ #ANALYTICAL_DIMENSION,#EXTRACTION_DATA_SOURCE ]
}
@ObjectModel.sapObjectNodeType.name: 'SponsoredClassType'
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@ObjectModel.modelingPattern:#ANALYTICAL_DIMENSION
define root view I_SponsoredClassTypeCore
  as select from dd07l

  composition [0..*] of I_SponsoredClassTypeTextCore as _Text

{

      @ObjectModel.text.association: '_Text'
  key cast ( cast ( substring( dd07l.domvalue_l, 1, 1 )
                    as abap.char( 1 ) ) as gm_class_type ) as SponsoredClassType,

      @Consumption.hidden: true
      @Analytics.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                     as DomainValue,

      _Text
}



where
      domname    =  'GM_CLASS_TYPE'
  and domvalue_l <> 'P'
  and as4local   =  'A'
```
