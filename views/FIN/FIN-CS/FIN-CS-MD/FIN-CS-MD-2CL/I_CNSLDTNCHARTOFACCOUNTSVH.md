---
name: I_CNSLDTNCHARTOFACCOUNTSVH
description: Cnsldtnchartofaccountsvh
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
# I_CNSLDTNCHARTOFACCOUNTSVH

**Cnsldtnchartofaccountsvh**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ConsolidationChartOfAccounts` | `_CnsldtnChartOfAccounts.ConsolidationChartOfAccounts` |

## Source Code

```abap
@AbapCatalog : {
  compiler : {
    compareFilter: true
  },
  preserveKey: true,
  sqlViewName: 'ICSCONSCOAVH'
}
@AccessControl : {
  authorizationCheck: #MANDATORY
}
@ClientHandling : {
  algorithm: #SESSION_VARIABLE
}
@Metadata : {
  ignorePropagatedAnnotations: true
}
@ObjectModel : {
  dataCategory: #VALUE_HELP,
  representativeKey: 'ConsolidationChartOfAccounts',
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #S
  },
  modelingPattern: #VALUE_HELP_PROVIDER,
  supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                          #CDS_MODELING_DATA_SOURCE,
                          #SQL_DATA_SOURCE,
                          #VALUE_HELP_PROVIDER]
}
@Search.searchable: true
@Consumption.ranked: true
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText : {
  label: 'Consolidation Chart of Accounts'
}
define view I_CnsldtnChartOfAccountsVH
  as select from I_CnsldtnChartOfAccounts as _CnsldtnChartOfAccounts

{

      @ObjectModel.text.element: ['ConsolidationChartOfAcctsText']
      @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold: 0.8,
        ranking: #HIGH
      }
  key _CnsldtnChartOfAccounts.ConsolidationChartOfAccounts,


      @Semantics.text: true
      @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold: 0.7,
        ranking: #LOW
      }
      _CnsldtnChartOfAccounts._Text[1: Language=$session.system_language].ConsolidationChartOfAcctsText

}
```
