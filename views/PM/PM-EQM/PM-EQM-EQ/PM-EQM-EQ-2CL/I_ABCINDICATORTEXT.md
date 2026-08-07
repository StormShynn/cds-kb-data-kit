---
name: I_ABCINDICATORTEXT
description: Abcindicatortext
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-EQ
  - interface-view
  - text-view
  - text
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
---
# I_ABCINDICATORTEXT

**Abcindicatortext**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ABCIndicator` | ✓ | |  | `abckz` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `ABCIndicatorDesc` |  | |  | `cast( t370c_t.abctx as eams_abctx preserving type )` |  |  |
| `_ABCIndicator` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ABCIndicator` | `I_ABCIndicator` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'ABC Indicator - Text'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IABCINDICTEXT'
@AbapCatalog.compiler.compareFilter: true
@Analytics: { dataExtraction.enabled: true }
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'ABCIndicator',
  semanticKey:  [ 'ABCIndicator' ],
  usageType: {
    dataClass: #CUSTOMIZING,
    sizeCategory: #S,
    serviceQuality: #A
  }
}

@Metadata.ignorePropagatedAnnotations
@Search.searchable: true
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]


define view I_ABCIndicatorText as select from t370c_t
association[0..1] to I_ABCIndicator as _ABCIndicator on $projection.ABCIndicator = _ABCIndicator.ABCIndicator
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language{
    
    @ObjectModel.foreignKey.association: '_ABCIndicator'
    @ObjectModel.text.element: ['ABCIndicatorDesc']
    key t370c_t.abckz as ABCIndicator,
    
    @ObjectModel.foreignKey.association: '_Language'
    @Semantics.language: true
    key t370c_t.spras as Language, 
    
    @Semantics.text: true
    @EndUserText.label: 'ABC Indicator Text'
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #HIGH
    
    cast( t370c_t.abctx as eams_abctx preserving type ) as ABCIndicatorDesc,
    
    _ABCIndicator,
    _Language
}
```
