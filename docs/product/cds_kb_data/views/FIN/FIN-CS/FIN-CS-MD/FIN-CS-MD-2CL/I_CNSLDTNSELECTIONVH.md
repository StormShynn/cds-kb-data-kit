---
name: I_CNSLDTNSELECTIONVH
description: "Cnsldtnselectionvh"
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
  - value-help
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNSELECTIONVH

**Cnsldtnselectionvh**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationSelection` | ✓ | |  |  |  |  |
| `FinancialSelection` |  | |  |  |  |  |
| `ConsolidationSelectionText` |  | |  | `cast(_Text[1: Language=$session.system_language].ConsolidationSelectionText as fincs_description_text_80 preserving type )` |  |  |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICNSLDTNSELVH',
  compiler.compareFilter: true
  }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  ignorePropagatedAnnotations: true
  }
@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #B,
    sizeCategory: #M},
  representativeKey: 'ConsolidationSelection',
  semanticKey: ['ConsolidationSelection'],
  dataCategory: #VALUE_HELP,
  modelingPattern: #VALUE_HELP_PROVIDER,
  supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #VALUE_HELP_PROVIDER]
}
@Search.searchable: true
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Consolidation Selection'

define view I_CnsldtnSelectionVH
  as select from I_CnsldtnSelection

{
      @ObjectModel.text.element: ['ConsolidationSelectionText']
  key ConsolidationSelection,
  
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      FinancialSelection,

      @Semantics.text
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      cast(_Text[1: Language=$session.system_language].ConsolidationSelectionText as fincs_description_text_80 preserving type ) as ConsolidationSelectionText
};
```
