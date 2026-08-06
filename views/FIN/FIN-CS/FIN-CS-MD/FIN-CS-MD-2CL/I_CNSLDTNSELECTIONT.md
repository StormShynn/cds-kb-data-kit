---
name: I_CNSLDTNSELECTIONT
description: Cnsldtnselectiont
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
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNSELECTIONT

**Cnsldtnselectiont**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `_Source.Language` |
| key `ConsolidationSelection` | `cast(left(_Source.FinancialSelection, 20) as fincs_consolidationselection preserving type)` |
| `ConsolidationSelectionText` | `cast(_Source.FinancialSelectionText as fincs_cnsldtnselection_desc preserving type)` |
| `FinancialSelection` | `_Source.FinancialSelection` |
| `_Selection` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Selection` | `I_CnsldtnSelection` | [1..1] |

## Source Code

```abap
@Analytics: {
  technicalName: 'ICNSLDTNSELT',
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
    serviceQuality: #B,
    sizeCategory: #M },
  representativeKey: 'ConsolidationSelection',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'ConsolidationSelectionText'
}
@Search.searchable: true
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Selection - Text'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CnsldtnSelectionT
  as select from I_FinancialSelectionT as _Source

    inner join   I_FinancialSelection  as _Main
      on  _Main.FinancialSelection             = _Source.FinancialSelection
      and _Main.FinancialSelectionCategory     = 'CS_SEL'
      and _Main.FinancialSelectionIsActive     = 'X'
      and _Main.FinancialSelectionIsGenerated is initial

  association [1..1] to I_CnsldtnSelection as _Selection on $projection.ConsolidationSelection = _Selection.ConsolidationSelection

{
      @Semantics.language
  key _Source.Language,

      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CnsldtnSelectionVH', element: 'ConsolidationSelection' } } ]
      @ObjectModel.foreignKey.association: '_Selection'
  key cast(left(_Source.FinancialSelection, 20) as fincs_consolidationselection preserving type) as ConsolidationSelection,

      @Semantics.text
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      cast(_Source.FinancialSelectionText as fincs_cnsldtnselection_desc preserving type)        as ConsolidationSelectionText,

      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      _Source.FinancialSelection,

      /* Associations */
      _Source._Language,

      _Selection
}

where _Source.FinancialSelectionCategory = 'CS_SEL';
```
