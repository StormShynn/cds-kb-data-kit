---
name: I_CNSLDTNSELECTIONCONDITION
description: "Cnsldtnselectioncondition"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - pricing-condition
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNSELECTIONCONDITION

**Cnsldtnselectioncondition**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationSelection` | ✓ | |  | `cast(left(_Source.FinancialSelection, 20) as fincs_consolidationselection preserving type)` |  |  |
| `FinSelectionConditionSequence` | ✓ | | `_Source` | `FinSelectionConditionSequence` |  |  |
| `FinSelectionConditionDimension` |  | | `_Source` | `FinSelectionConditionDimension` |  |  |
| `FinSelCndnDimensionAccessPath` |  | | `_Source` | `FinSelCndnDimensionAccessPath` |  |  |
| `FinSelCndnDimensionAccessType` |  | | `_Source` | `FinSelCndnDimensionAccessType` |  |  |
| `FinSelectionConditionRangeSign` |  | | `_Source` | `FinSelectionConditionRangeSign` |  |  |
| `FinSelConditionRangeOption` |  | | `_Source` | `FinSelConditionRangeOption` |  |  |
| `FinSelConditionRangeLowValue` |  | | `_Source` | `FinSelConditionRangeLowValue` |  |  |
| `FinSelConditionRangeHighValue` |  | | `_Source` | `FinSelConditionRangeHighValue` |  |  |
| `FinancialSelection` |  | | `_Source` | `FinancialSelection` |  |  |
| `_Selection` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Selection` | `I_CnsldtnSelection` | [1..1] |

## Source Code

```abap
@Analytics: {
  technicalName: 'ICNSLDTNSELECTIONCONDITION',
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations: true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #M },
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE ],
  sapObjectNodeType.name: 'CnsldtnSelectionCondition'
}
@Search.searchable: true
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Selection Condition'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CnsldtnSelectionCondition
  as select from I_FinancialSelectionCondition as _Source

    inner join   I_FinancialSelection          as _Main
      on  _Main.FinancialSelection             = _Source.FinancialSelection
      and _Main.FinancialSelectionCategory     = 'CS_SEL'
      and _Main.FinancialSelectionIsActive     = 'X'
      and _Main.FinancialSelectionIsGenerated is initial

  association [1..1] to I_CnsldtnSelection as _Selection on $projection.ConsolidationSelection = _Selection.ConsolidationSelection

{
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CnsldtnSelectionVH', element: 'ConsolidationSelection' } } ]
      @ObjectModel.foreignKey.association: '_Selection'
  key cast(left(_Source.FinancialSelection, 20) as fincs_consolidationselection preserving type) as ConsolidationSelection,

  key _Source.FinSelectionConditionSequence,

      _Source.FinSelectionConditionDimension,
      _Source.FinSelCndnDimensionAccessPath,
      _Source.FinSelCndnDimensionAccessType,
      _Source.FinSelectionConditionRangeSign,
      _Source.FinSelConditionRangeOption,
      _Source.FinSelConditionRangeLowValue,
      _Source.FinSelConditionRangeHighValue,

      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      _Source.FinancialSelection,

      /* Associations */
      _Selection
}

where _Source.FinancialSelectionCategory = 'CS_SEL';
```
