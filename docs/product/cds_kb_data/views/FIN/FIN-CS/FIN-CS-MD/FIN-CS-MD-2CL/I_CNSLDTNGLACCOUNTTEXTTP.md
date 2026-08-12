---
name: I_CNSLDTNGLACCOUNTTEXTTP
description: "Cnsldtngl AccountTEXTTP"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - transactional-processing
  - gl-account
  - text
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNGLACCOUNTTEXTTP

**Cnsldtngl AccountTEXTTP**

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
| `GLAccount` | ✓ | | `_Text` | `GLAccount` |  |  |
| `GLAccountName` |  | | `_Text` | `GLAccountName` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_Text` | `CnsldtnIsAdditionalMasterData` |  |  |
| `I_CnsldtnGLAccountTP` |  | |  | `_GLAccount as _GLAccount : redirected to parent I_CnsldtnGLAccountTP` |  |  |

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
//    name: 'CnsldtnGLAccountText'
//  },
  semanticKey: [
    'Language',
    'ChartOfAccounts',
    'GLAccount'
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
@EndUserText.label: 'Consolidation G/L Account - Text TP'
define view entity I_CnsldtnGLAccountTextTP
  as projection on R_CnsldtnGLAccountTextTP as _Text

{
      @Semantics.language
  key _Text.Language,

  key _Text.ChartOfAccounts,
  
  key _Text.GLAccount,

      @Semantics.text
      _Text.GLAccountName,

      _Text.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _GLAccount as _GLAccount : redirected to parent I_CnsldtnGLAccountTP

}
```
