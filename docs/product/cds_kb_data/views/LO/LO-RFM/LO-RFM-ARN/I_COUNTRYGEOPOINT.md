---
name: I_COUNTRYGEOPOINT
description: "Geographical Location of a Country/Region"
app_component: LO-RFM-ARN
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COUNTRYGEOPOINT')/$value
semantic_en: "Geographical Location of a Country/Region"
semantic_vi: "Geographical Location of a Country/Region — CDS view giao diện dựa trên geot005_loc."
keywords:
  - "geographical"
  - "location"
  - "country/region"
  - "country"
  - "center"
  - "point"
tags:
  - LO
  - bo:purchaseorder
  - component:LO-RFM-ARN
  - interface-view
  - LO-RFM
  - LO-RFM-ARN
  - lob:logistics general
---
# I_COUNTRYGEOPOINT

**Geographical Location of a Country/Region**

| Property | Value |
|---|---|
| App Component | `LO-RFM-ARN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COUNTRYGEOPOINT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Country` | ✓ | |  | `land1` | `CHAR(3)` | Country/Region Key |
| `CountryCenterGeoPoint` |  | |  | `geo_location` |  |  |
| `_Country` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [1..1] |
| `_Text` | `I_CountryText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COUNTRYGEOPOINT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COUNTRYGEOPOINT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICTYGEOPOINT'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@AccessControl.authorizationCheck: #NOT_REQUIRED   // #CHECK
@Analytics.internalName:#LOCAL
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: false
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Geographical Location of a Country/Region'
@ObjectModel.representativeKey: 'Country'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.compositionRoot:true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, 
                                      #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@VDM.viewType: #BASIC
define view I_CountryGeoPoint
  as select from geot005_loc
  association [1..1] to I_Country     as _Country on $projection.Country = _Country.Country
  association [0..*] to I_CountryText as _Text    on $projection.Country = _Text.Country
{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
      @ObjectModel.text.association: '_Text'
  key land1        as Country,

      @Semantics.spatialData.srid.value: '3857'
      @Semantics.spatialData.type: [ #POINT ]
      geo_location as CountryCenterGeoPoint,

      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text,
      _Country
}
```
