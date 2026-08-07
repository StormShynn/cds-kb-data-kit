---
name: I_CNSLDTNFINANCIALDATASOURCETP
description: Cnsldtnfinancialdatasourcetp
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
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNFINANCIALDATASOURCETP

**Cnsldtnfinancialdatasourcetp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `FinancialDataSource` | ✓ | | `_Source` | `FinancialDataSource` |
| `CnsldtnIsAdditionalMasterData` |  | | `_Source` | `CnsldtnIsAdditionalMasterData` |
| `I_CnsldtnFinDataSourceTextTP` |  | |  | `_Text as _Text : redirected to composition child I_CnsldtnFinDataSourceTextTP` |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY
}
@Metadata: {
  ignorePropagatedAnnotations: true
}
@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  sapObjectNodeType:{
    name: 'CnsldtnFinancialDataSource'
  },
  semanticKey: [
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
@EndUserText.label: 'Consolidation Financial Data Source - TP'
define root view entity I_CnsldtnFinancialDataSourceTP
  provider contract transactional_interface
  as projection on R_CnsldtnFinancialDataSourceTP as _Source

{

  key _Source.FinancialDataSource,

      _Source.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _Text as _Text : redirected to composition child I_CnsldtnFinDataSourceTextTP

}
```
