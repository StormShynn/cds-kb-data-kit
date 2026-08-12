---
name: I_PLANNINGSTRATEGYGROUPTEXT
description: "Planningstrategygrouptext"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - text-view
  - text
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_PLANNINGSTRATEGYGROUPTEXT

**Planningstrategygrouptext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PlanningStrategyGroup` | ✓ | |  | `cast(txt.strgr as strgr preserving type)` |  |  |
| `Language` | ✓ | |  | `cast(txt.spras as spras preserving type)` |  |  |
| `PlanningStrategyGroupName` |  | |  | `cast(txt.text40 as planningstrategygroupname preserving type)` |  |  |
| `_StrategyGroup` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_StrategyGroup` | `I_PlanningStrategyGroup` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPPLNGSTRGRPTXT'
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'PlanningStrategyGroup'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Planning Strategy Group - Text'

define view I_PlanningStrategyGroupText
  as select from t461x as txt
  association [1..1] to I_PlanningStrategyGroup as _StrategyGroup on $projection.PlanningStrategyGroup = _StrategyGroup.PlanningStrategyGroup
  association [0..1] to I_Language              as _Language      on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_StrategyGroup'
      @ObjectModel.text.element: ['PlanningStrategyGroupName']
  key cast(txt.strgr as strgr preserving type)                      as PlanningStrategyGroup,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(txt.spras as spras preserving type)                      as Language,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      cast(txt.text40 as planningstrategygroupname preserving type) as PlanningStrategyGroupName,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _StrategyGroup,
      _Language
};
```
