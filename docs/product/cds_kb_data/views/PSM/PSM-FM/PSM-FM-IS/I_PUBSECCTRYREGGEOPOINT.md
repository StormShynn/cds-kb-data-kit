---
name: I_PUBSECCTRYREGGEOPOINT
description: "Country Region Geo Point"
app_component: PSM-FM-IS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRYREGGEOPOINT')/$value
semantic_en: "Country Region Geo Point"
semantic_vi: "Country Region Geo Point — CDS view giao diện dựa trên I_PubSecAddressGeoLocation."
keywords:
  - "country"
  - "region"
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
# I_PUBSECCTRYREGGEOPOINT

**Country Region Geo Point**

| Property | Value |
|---|---|
| App Component | `PSM-FM-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRYREGGEOPOINT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CountryRegion` | ✓ | |  | `(concat( Country,Region))` | `CHAR(6)` |  |
| `AddressLocationGeoPoint` |  | |  |  |  |  |
| `_PubSecCtryRegGeoPointT` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PubSecCtryRegGeoPointT` | `I_PubSecCtryRegGeoPointT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRYREGGEOPOINT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCTRYREGGEOPOINT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICNTRYREGGEO'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@AccessControl.authorizationCheck: #NOT_REQUIRED  
@Analytics.internalName:#LOCAL
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: false
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Country Region Geo Point'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.representativeKey: 'CountryRegion'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.compositionRoot:true
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true 
@Metadata.allowExtensions:true 
@VDM.viewType: #BASIC

define view I_PubSecCtryRegGeoPoint as select from I_PubSecAddressGeoLocation
association [0..*] to I_PubSecCtryRegGeoPointT  as _PubSecCtryRegGeoPointT  on  $projection.CountryRegion = _PubSecCtryRegGeoPointT.CountryRegion

{

   
   @Search.defaultSearchElement: true
   @Search.ranking: #HIGH
   @Search.fuzzinessThreshold: 0.8
   @ObjectModel.text.association: '_PubSecCtryRegGeoPointT'
   @EndUserText.label: 'Country Region'
  key (concat( Country,Region)) as CountryRegion,
    
    
   @Semantics.spatialData.srid.value: '3857' 
   @Semantics.spatialData.type: [ #POINT ]
   AddressLocationGeoPoint,
   
//   @API.element.releaseState: #DEPRECATED
//   @API.element.successor:   'AddressLocationGeoPoint'
//   @VDM.lifecycle.status:    #DEPRECATED
//   @VDM.lifecycle.successor: 'AddressLocationGeoPoint'
//   @Semantics.spatialData.srid.value: '3857' 
//   @Semantics.spatialData.type: [ #POINT ]
//   AddressLocationGeoPoint as CountryCenterGeoPoint,
   
   @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
   _PubSecCtryRegGeoPointT

}   where Region <> '' and CityNumber = ''
```
