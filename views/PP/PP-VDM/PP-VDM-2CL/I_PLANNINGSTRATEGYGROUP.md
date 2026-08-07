---
name: I_PLANNINGSTRATEGYGROUP
description: Planningstrategygroup
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
# I_PLANNINGSTRATEGYGROUP

**Planningstrategygroup**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `PlanningStrategyGroup` | ✓ | |  | `strgr` |
| `MainPlanningStrategy` |  | |  | `hptst` |
| `_Text` | | ✓ | | |
| `_MainPlanningStrategy` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PlanningStrategyGroupText` | [0..*] |
| `_MainPlanningStrategy` | `I_ProductPlanningStrategy` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPPLNGSTRATGRP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.compositionRoot: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'PlanningStrategyGroup'
@ObjectModel.sapObjectNodeType.name: 'ProductPlanningStrategyGroup'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Planning Strategy Group'

define view I_PlanningStrategyGroup
  as select from t461p as grp
  association [0..*] to I_PlanningStrategyGroupText as _Text                 on $projection.PlanningStrategyGroup = _Text.PlanningStrategyGroup
  association [0..1] to I_ProductPlanningStrategy   as _MainPlanningStrategy on $projection.MainPlanningStrategy = _MainPlanningStrategy.ProductPlanningStrategy
{
      // Key
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      @ObjectModel.text.association: '_Text'
  key grp.strgr as PlanningStrategyGroup,

      @ObjectModel.foreignKey.association: '_MainPlanningStrategy'
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8} 
      grp.hptst as MainPlanningStrategy,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD] -- kept for compatibility reasons
      _MainPlanningStrategy

};
```
