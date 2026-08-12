---
name: I_PUBSECCOUNTRYGEOPOINT
description: "Country Geo Point"
app_component: PSM-FM-IS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCOUNTRYGEOPOINT')/$value
semantic_en: "Country Geo Point"
semantic_vi: "Country Geo Point — CDS view giao diện dựa trên I_PubSecAddressGeoLocation."
keywords:
  - "country"
  - "geo"
  - "point"
  - "address"
  - "location"
tags:
  - PSM
  - bo:purchaseorder
  - component:PSM-FM-IS
  - interface-view
  - PSM-FM
  - PSM-FM-IS
---
# I_PUBSECCOUNTRYGEOPOINT

**Country Geo Point**

| Property | Value |
|---|---|
| App Component | `PSM-FM-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCOUNTRYGEOPOINT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Country` | ✓ | |  |  | `CHAR(3)` | Country |
| `AddressLocationGeoPoint` |  | |  |  |  |  |
| `_CountryText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CountryText` | `I_CountryText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCOUNTRYGEOPOINT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCOUNTRYGEOPOINT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICNTRYGEO'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@AccessControl.authorizationCheck: #NOT_REQUIRED  
@Analytics.internalName:#LOCAL
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: false
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Country Geo Point'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.representativeKey: 'Country'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.compositionRoot:true
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true 
@Metadata.allowExtensions:true 
@VDM.viewType: #BASIC

define view I_PubSecCountryGeoPoint as select from I_PubSecAddressGeoLocation
association [0..*] to I_CountryText as _CountryText     on $projection.Country = _CountryText.Country
{ 

   
   @Search.defaultSearchElement: true
   @Search.ranking: #HIGH
   @Search.fuzzinessThreshold: 0.8
   @ObjectModel.text.association: '_CountryText'
   @EndUserText.label: 'Country'
   key Country as Country,
    
   @Semantics.spatialData.srid.value: '3857' 
   @Semantics.spatialData.type: [ #POINT ]
   AddressLocationGeoPoint,

   @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
   _CountryText

}  where Region = '' and CityNumber = ''
```
