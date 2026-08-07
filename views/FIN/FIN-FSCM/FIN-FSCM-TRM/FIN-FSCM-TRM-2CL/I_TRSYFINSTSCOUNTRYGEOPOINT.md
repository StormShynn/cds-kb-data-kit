---
name: I_TRSYFINSTSCOUNTRYGEOPOINT
description: Trsyfinstscountrygeopoint
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - country
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_TRSYFINSTSCOUNTRYGEOPOINT

**Trsyfinstscountrygeopoint**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Country` | ✓ | |  | `country` |  |  |
| `CountryCenterGeoPoint` |  | |  | `geo_location` |  |  |
| `_Country` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [1..1] |
| `_Text` | `I_CountryText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED   // #CHECK 
@Analytics.internalName:#LOCAL
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'ICOUNTGEOPOINT'
@Analytics.dataExtraction.enabled: false
@EndUserText.label: 'Geographical Center of a Country/Region'
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

define view entity I_TrsyFinStsCountryGeoPoint as select from ftrl_fs_geot005
association [1..1] to I_Country as _Country on $projection.Country = _Country.Country
association [0..*] to I_CountryText as _Text on $projection.Country = _Text.Country
{
   @Search.defaultSearchElement: true
   @Search.ranking: #HIGH
   @Search.fuzzinessThreshold: 0.8
   @ObjectModel.text.association: '_Text'
   key country as Country,
    
   @Semantics.spatialData.srid.value: '3857' 
   @Semantics.spatialData.type: [ #POINT ]
   geo_location as CountryCenterGeoPoint,

   @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
   _Text,
   _Country
       
}
```
