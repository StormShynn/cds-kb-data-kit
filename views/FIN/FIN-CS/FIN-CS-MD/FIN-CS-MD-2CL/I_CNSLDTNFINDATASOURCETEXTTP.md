---
name: I_CNSLDTNFINDATASOURCETEXTTP
description: Cnsldtnfindatasourcetexttp
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
  - transactional-processing
  - text
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNFINDATASOURCETEXTTP

**Cnsldtnfindatasourcetexttp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `_Text.Language` |
| key `FinancialDataSource` | `_Text.FinancialDataSource` |
| `FinancialDataSourceName` | `_Text.FinancialDataSourceName` |
| `CnsldtnIsAdditionalMasterData` | `_Text.CnsldtnIsAdditionalMasterData` |
| `I_CnsldtnFinancialDataSourceTP` | `_FinancialDataSource as _FinancialDataSource : redirected to parent I_CnsldtnFinancialDataSourceTP` |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY
}
@Metadata: {
  ignorePropagatedAnnotations: true
}
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #TRANSACTIONAL_INTERFACE,
//  sapObjectNodeType:{
//    name: 'CnsldtnFinancialDataSourceText'
//  },
  semanticKey: [
    'Language',
    'FinancialDataSource'
  ],
  supportedCapabilities: [
    #TRANSACTIONAL_PROVIDER
  ],
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #M
  }
}
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@EndUserText.label: 'Cnsldtn Financial Data Source - Text TP'
define view entity I_CnsldtnFinDataSourceTextTP
  as projection on R_CnsldtnFinDataSourceTextTP as _Text

{
      @Semantics.language
  key _Text.Language,

  key _Text.FinancialDataSource,

      @Semantics.text
      _Text.FinancialDataSourceName,

      _Text.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _FinancialDataSource as _FinancialDataSource : redirected to parent I_CnsldtnFinancialDataSourceTP

}
```
