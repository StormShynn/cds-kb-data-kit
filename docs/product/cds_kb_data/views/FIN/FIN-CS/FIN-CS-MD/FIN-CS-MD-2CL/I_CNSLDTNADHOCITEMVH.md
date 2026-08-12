---
name: I_CNSLDTNADHOCITEMVH
description: "Cnsldtnadhocitemvh"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - value-help
  - item-level
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNADHOCITEMVH

**Cnsldtnadhocitemvh**

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
| `CnsldtnAdhocItem` | ✓ | |  |  |  |  |
| `CnsldtnAdhocItemText` |  | |  | `cast(_AdhocItem._Text[1: Language=$session.system_language].CnsldtnAdhocItemText as fincs_description_text_60 preserving type)` |  |  |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSADHITMVH',
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
  representativeKey: 'CnsldtnAdhocItem',
  semanticKey: ['ConsolidationChartOfAccounts', 'CnsldtnAdhocItem'],
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
@EndUserText.label: 'Consolidation Ad Hoc Item'

define view I_CnsldtnAdhocItemVH
  as select from I_CnsldtnAdhocItem as _AdhocItem
{

      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnChartOfAccountsVH',
          element: 'ConsolidationChartOfAccounts'
        }
      }]
  key ConsolidationChartOfAccounts,

      @ObjectModel.text.element: ['CnsldtnAdhocItemText']
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
  key CnsldtnAdhocItem,

      @Semantics.text
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.7 }
      cast(_AdhocItem._Text[1: Language=$session.system_language].CnsldtnAdhocItemText as fincs_description_text_60 preserving type) as CnsldtnAdhocItemText
};
```
