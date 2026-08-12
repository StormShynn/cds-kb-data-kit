---
name: I_CNSLDTNSELECTION
description: "Cnsldtnselection"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_CNSLDTNSELECTION

**Cnsldtnselection**

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
| `FinancialSelection` |  | | `_Source` | `FinancialSelection` |  |  |
| `_Text` | | ✓ | | | | |
| `_SelectionCondition` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnSelectionT` | [0..*] |
| `_SelectionCondition` | `I_CnsldtnSelectionCondition` | [1..*] |

## Source Code

```abap
@Analytics: {
  technicalName: 'ICNSLDTNSEL',
  dataExtraction.enabled: true,
  dataCategory: #DIMENSION,
  internalName: #LOCAL
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
  representativeKey: 'ConsolidationSelection',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION ],
  sapObjectNodeType.name: 'ConsolidationSelection'
}
@Search.searchable: true
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Selection'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CnsldtnSelection
  as select from I_FinancialSelection as _Source

  association [0..*] to I_CnsldtnSelectionT         as _Text               on $projection.ConsolidationSelection = _Text.ConsolidationSelection
  association [1..*] to I_CnsldtnSelectionCondition as _SelectionCondition on $projection.ConsolidationSelection = _SelectionCondition.ConsolidationSelection

{
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CnsldtnSelectionVH', element: 'ConsolidationSelection' } } ]
      @ObjectModel.text.association: '_Text'
  key cast(left(_Source.FinancialSelection, 20) as fincs_consolidationselection preserving type) as ConsolidationSelection,

      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      _Source.FinancialSelection,

      /* Associations */
      _Text,
      _SelectionCondition
}

where _Source.FinancialSelectionCategory     = 'CS_SEL'
  and _Source.FinancialSelectionIsActive     = 'X'
  and _Source.FinancialSelectionIsGenerated is initial;
```
