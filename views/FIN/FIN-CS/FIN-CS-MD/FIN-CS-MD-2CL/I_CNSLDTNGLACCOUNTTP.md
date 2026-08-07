---
name: I_CNSLDTNGLACCOUNTTP
description: Cnsldtngl AccountTP
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
  - gl-account
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNGLACCOUNTTP

**Cnsldtngl AccountTP**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ChartOfAccounts` | ✓ | | `_CnsldtnGLAccount` | `ChartOfAccounts` |
| `GLAccount` | ✓ | | `_CnsldtnGLAccount` | `GLAccount` |
| `CnsldtnIsAdditionalMasterData` |  | | `_CnsldtnGLAccount` | `CnsldtnIsAdditionalMasterData` |
| `I_CnsldtnGLAccountTextTP` |  | |  | `_Text as _Text : redirected to composition child I_CnsldtnGLAccountTextTP` |

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
    name: 'CnsldtnGLAccount'
  },
  semanticKey: [
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
@EndUserText.label: 'Consolidation G/L Account - TP'
define root view entity I_CnsldtnGLAccountTP
  provider contract transactional_interface
  as projection on R_CnsldtnGLAccountTP as _CnsldtnGLAccount

{

  key _CnsldtnGLAccount.ChartOfAccounts,
  
  key _CnsldtnGLAccount.GLAccount,

      _CnsldtnGLAccount.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _Text as _Text : redirected to composition child I_CnsldtnGLAccountTextTP

}
```
