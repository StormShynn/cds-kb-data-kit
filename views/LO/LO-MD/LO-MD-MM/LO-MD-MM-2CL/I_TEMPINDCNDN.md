---
name: I_TEMPINDCNDN
description: Tempindcndn
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_TEMPINDCNDN

**Tempindcndn**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TemperatureConditionInd` | `tempb` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_Tempindcndntext` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ITEMPCONDIND',
  compiler.compareFilter: true,
  preserveKey: true,
  buffering: {
    status: #ACTIVE,
    type: #FULL 
  }
}
//@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Temperature Conditions'
@Search.searchable: true

@ObjectModel:{
  representativeKey:'TemperatureConditionInd',
  usageType:{
    serviceQuality: #A,
    sizeCategory : #S,
    dataClass: #CUSTOMIZING
  },
  dataCategory: #VALUE_HELP
}
@ObjectModel.sapObjectNodeType.name: 'ProdTemperatureConditionCode'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true 
@ObjectModel.modelingPattern:#ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #ANALYTICAL_DIMENSION,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,                                        
                                        #SEARCHABLE_ENTITY ]
@Metadata.ignorePropagatedAnnotations: true                   
                                        
define view I_Tempindcndn
  as select from t143
  association [0..*] to I_Tempindcndntext as _Text on $projection.TemperatureConditionInd = _Text.TemperatureConditionInd
{

      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key tempb as TemperatureConditionInd,
      //      @Search.defaultSearchElement: true
      //      @Search.fuzzinessThreshold: 0.8
      //      @Search.ranking: #HIGH
      _Text

}
```
