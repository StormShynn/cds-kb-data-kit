---
name: I_CNSLDTNFINMGMTAREATEXTTP
description: Cnsldtnfinmgmtareatexttp
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
# I_CNSLDTNFINMGMTAREATEXTTP

**Cnsldtnfinmgmtareatexttp**

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
| key `FinancialManagementArea` | `_Text.FinancialManagementArea` |
| `FinancialManagementAreaName` | `_Text.FinancialManagementAreaName` |
| `CnsldtnIsAdditionalMasterData` | `_Text.CnsldtnIsAdditionalMasterData` |
| `I_CnsldtnFinManagementAreaTP` | `_FinancialManagementArea as _FinancialManagementArea : redirected to parent I_CnsldtnFinManagementAreaTP` |

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
  semanticKey: [
    'Language',
    'FinancialManagementArea'
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

@EndUserText.label: 'Cnsldtn Fin Management Area - Text TP'
define view entity I_CnsldtnFinMgmtAreaTextTP
  as projection on R_CnsldtnFinMgmtAreaTextTP as _Text

{
      @Semantics.language
  key _Text.Language,

  key _Text.FinancialManagementArea,

      @Semantics.text
      _Text.FinancialManagementAreaName,

      _Text.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _FinancialManagementArea as _FinancialManagementArea : redirected to parent I_CnsldtnFinManagementAreaTP

}
```
