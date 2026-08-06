---
name: I_CNSLDTNBREAKDOWNCATEGORYVH
description: Cnsldtnbreakdowncategoryvh
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
# I_CNSLDTNBREAKDOWNCATEGORYVH

**Cnsldtnbreakdowncategoryvh**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ConsolidationChartOfAccounts` | `ConsolidationChartOfAccounts` |
| key `ConsolidationBreakdownCategory` | `ConsolidationBreakdownCategory` |
| `CnsldtnBreakdownCategoryText` | `cast(_BreakdownCategory._Text[1: Language=$session.system_language].CnsldtnBreakdownCategoryText as fincs_description_text_30 preserving type )` |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSBRKDWNCATVH',
  compiler.compareFilter: true,
  preserveKey: true
  }
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  ignorePropagatedAnnotations: true
  }
@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S},
  representativeKey: 'ConsolidationBreakdownCategory',
  semanticKey: ['ConsolidationChartOfAccounts', 'ConsolidationBreakdownCategory'],
  dataCategory: #VALUE_HELP,
  modelingPattern: #VALUE_HELP_PROVIDER,
  supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #VALUE_HELP_PROVIDER]
}
@Search.searchable: true
@Consumption.ranked: true
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Consolidation Breakdown Category'

define view I_CnsldtnBreakdownCategoryVH
  as select from I_CnsldtnBreakdownCategory as _BreakdownCategory

{
       @Consumption.valueHelpDefinition: [{
         entity: {  name: 'I_CnsldtnChartOfAccountsVH',
                    element: 'ConsolidationChartOfAccounts' } }]
  key  ConsolidationChartOfAccounts,

       @ObjectModel.text.element: ['CnsldtnBreakdownCategoryText']
       @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
  key  ConsolidationBreakdownCategory,


       @Semantics.text
       @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }
       cast(_BreakdownCategory._Text[1: Language=$session.system_language].CnsldtnBreakdownCategoryText as fincs_description_text_30 preserving type ) as CnsldtnBreakdownCategoryText
};
```
