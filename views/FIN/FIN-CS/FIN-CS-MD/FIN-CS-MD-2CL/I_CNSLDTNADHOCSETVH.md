---
name: I_CNSLDTNADHOCSETVH
description: "Cnsldtnadhocsetvh"
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
  - value-help
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNADHOCSETVH

**Cnsldtnadhocsetvh**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationChartOfAccounts` | ✓ | |  |  |  |  |
| `CnsldtnAdhocSet` | ✓ | |  |  |  |  |
| `CnsldtnAdhocSetText` |  | |  | `cast(_AdhocSet._Text[1: Language=$session.system_language].CnsldtnAdhocSetText as fincs_description_text_60 preserving type)` |  |  |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSADHSETVH',
  compiler.compareFilter: true,
  preserveKey: true
  }
@AccessControl:{
  authorizationCheck: #MANDATORY
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  allowExtensions: true,
  ignorePropagatedAnnotations: true
  }
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #S},
  representativeKey: 'CnsldtnAdhocSet',
  semanticKey: ['ConsolidationChartOfAccounts', 'CnsldtnAdhocSet'],
  dataCategory: #VALUE_HELP,
  modelingPattern: #VALUE_HELP_PROVIDER,
  supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #VALUE_HELP_PROVIDER ]
}
@Search.searchable: true
@Consumption.ranked: true
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Consolidation Ad Hoc Set'

define view I_CnsldtnAdhocSetVH
  as select from I_CnsldtnAdhocSet as _AdhocSet
{

      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnChartOfAccountsVH',
          element: 'ConsolidationChartOfAccounts'
        }
      }]
  key ConsolidationChartOfAccounts,

      @ObjectModel.text.element: ['CnsldtnAdhocSetText']
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
  key CnsldtnAdhocSet,

      @Semantics.text
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.7 }
      cast(_AdhocSet._Text[1: Language=$session.system_language].CnsldtnAdhocSetText as fincs_description_text_60 preserving type) as CnsldtnAdhocSetText
};
```
