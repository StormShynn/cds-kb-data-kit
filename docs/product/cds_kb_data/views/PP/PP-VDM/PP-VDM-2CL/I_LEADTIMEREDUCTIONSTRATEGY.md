---
name: I_LEADTIMEREDUCTIONSTRATEGY
description: "Leadtimereductionstrategy"
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
# I_LEADTIMEREDUCTIONSTRATEGY

**Leadtimereductionstrategy**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Plant` | ✓ | |  | `werks` |  |  |
| `LeadTimeReductionStrategy` | ✓ | |  | `rstra` |  |  |
| `_Plant` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |
| `_Text` | `I_LeadTimeReducnStrategyText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPLTREDSTRATEGY'
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.compositionRoot: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, 
                                     #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE, #VALUE_HELP_PROVIDER]
@ObjectModel.representativeKey: 'LeadTimeReductionStrategy'
@ObjectModel.sapObjectNodeType.name: 'LeadTimeReductionStrategy'
@ObjectModel.semanticKey: ['Plant', 'LeadTimeReductionStrategy']
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Lead Time Reduction Strategy'

define view I_LeadTimeReductionStrategy
  as select from t499q
  association [1..1] to I_Plant                      as _Plant on  $projection.Plant = _Plant.Plant
  association [0..*] to I_LeadTimeReducnStrategyText as _Text  on  $projection.LeadTimeReductionStrategy = _Text.LeadTimeReductionStrategy
                                                               and $projection.Plant                     = _Text.Plant
{
      // Key
      @ObjectModel.foreignKey.association: '_Plant'
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
  key werks       as Plant,
      @ObjectModel.text.association: '_Text'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key rstra       as LeadTimeReductionStrategy,

      // Associations
      _Plant,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text
};
```
