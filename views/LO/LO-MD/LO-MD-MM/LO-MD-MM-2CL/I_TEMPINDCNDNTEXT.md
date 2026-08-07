---
name: I_TEMPINDCNDNTEXT
description: Tempindcndntext
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
  - text-view
  - text
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_TEMPINDCNDNTEXT

**Tempindcndntext**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TemperatureConditionInd` | ✓ | |  | `tempb` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `TemperatureConditionIndName` |  | |  | `tbtxt` |  |  |
| `_TemperatureConditionInd` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TemperatureConditionInd` | `I_Tempindcndn` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ITEMPCONDINDTXT',
  preserveKey: true,
  compiler.compareFilter: true,
  buffering: {
    status: #ACTIVE,
    type: #FULL
  }  
}

@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Temperature Condition Indicator - Text'

@ObjectModel:{
  dataCategory: #TEXT,
  representativeKey: 'TemperatureConditionInd',
  usageType:{
    serviceQuality: #A,
    sizeCategory : #S,
    dataClass: #CUSTOMIZING
  }
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #LANGUAGE_DEPENDENT_TEXT
                                    ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
define view I_Tempindcndntext
  as select from t143t
  
  association [1..1] to I_Tempindcndn as _TemperatureConditionInd on $projection.TemperatureConditionInd = _TemperatureConditionInd.TemperatureConditionInd
{

      @ObjectModel.foreignKey.association: '_TemperatureConditionInd'
  key tempb       as TemperatureConditionInd,
      @Semantics.language: true
  key t143t.spras as Language,
      @Semantics.text: true
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.8
      }
      @EndUserText.label: 'Description'
      tbtxt       as TemperatureConditionIndName,
      _TemperatureConditionInd
}
```
