---
name: I_CNSLDTNGLCHARTOFACCTSTEXTTP
description: Cnsldtnglchartofacctstexttp
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
# I_CNSLDTNGLCHARTOFACCTSTEXTTP

**Cnsldtnglchartofacctstexttp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | | `_Text` | `Language` |  |  |
| `ChartOfAccounts` | ✓ | | `_Text` | `ChartOfAccounts` |  |  |
| `ChartOfAccountsName` |  | | `_Text` | `ChartOfAccountsName` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_Text` | `CnsldtnIsAdditionalMasterData` |  |  |
| `I_CnsldtnGLChartOfAccountsTP` |  | |  | `_ChartOfAccounts as _ChartOfAccounts : redirected to parent I_CnsldtnGLChartOfAccountsTP` |  |  |

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
//    name: 'CnsldtnGLChartOfAccountsText'
//  },
  semanticKey: [
    'Language',
    'ChartOfAccounts'
  ],
  supportedCapabilities: [
    #TRANSACTIONAL_PROVIDER
  ],
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #S
  }
}
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@EndUserText.label: 'Cnsldtn G/L Chart Of Accounts - Text TP'
define view entity I_CnsldtnGLChartOfAcctsTextTP
  as projection on R_CnsldtnGLChartOfAcctsTextTP as _Text

{
      @Semantics.language
  key _Text.Language,

  key _Text.ChartOfAccounts,

      @Semantics.text
      _Text.ChartOfAccountsName,

      _Text.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _ChartOfAccounts as _ChartOfAccounts : redirected to parent I_CnsldtnGLChartOfAccountsTP

}
```
