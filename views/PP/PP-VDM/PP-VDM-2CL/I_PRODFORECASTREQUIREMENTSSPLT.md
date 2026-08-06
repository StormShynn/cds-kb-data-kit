---
name: I_PRODFORECASTREQUIREMENTSSPLT
description: Prodforecastrequirementssplt
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_PRODFORECASTREQUIREMENTSSPLT

**Prodforecastrequirementssplt**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Plant` | `werks` |
| key `ForecastPeriodType` | `cast(perkz as periotype preserving type)` |
| key `ProdFcstRequirementsSplitCode` | `auftl` |
| `NumberOfDailyFcstRequirements` | `anztg` |
| `NumberOfWeeklyFcstRequirements` | `anzwo` |
| `_Plant` | *Association* |
| `_ForecastPeriodType` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |
| `_ForecastPeriodType` | `I_ForecastPeriodType` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFCSTREQMTSPLIT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.sapObjectNodeType.name: 'ProdForecastRequirementsSplit' 
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'ProdFcstRequirementsSplitCode'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Product Forecast Requirements Split'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_ProdForecastRequirementsSplt
  as select from t439p
  
  association [1..1] to I_Plant              as _Plant              on $projection.Plant = _Plant.Plant
  association [1..1] to I_ForecastPeriodType as _ForecastPeriodType on $projection.ForecastPeriodType = _ForecastPeriodType.ForecastPeriodType   

  {
      @ObjectModel.foreignKey.association: '_Plant'
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
  key werks                                    as Plant,
      @ObjectModel.foreignKey.association: '_ForecastPeriodType'
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
  key cast(perkz as periotype preserving type) as ForecastPeriodType,  
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key auftl                                    as ProdFcstRequirementsSplitCode,

      // Split requirements
      anztg as NumberOfDailyFcstRequirements,
      anzwo as NumberOfWeeklyFcstRequirements,
/*    anzpr as tbd */      

      // Associations
      _Plant,
      _ForecastPeriodType
  };
```
