---
name: I_CNSLDTNFINTRANSTYPETEXTTP
description: Cnsldtnfintranstypetexttp
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
# I_CNSLDTNFINTRANSTYPETEXTTP

**Cnsldtnfintranstypetexttp**

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
| `FinancialTransactionType` | ✓ | | `_Text` | `FinancialTransactionType` |  |  |
| `FinancialTransactionTypeName` |  | | `_Text` | `FinancialTransactionTypeName` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_Text` | `CnsldtnIsAdditionalMasterData` |  |  |
| `I_CnsldtnFinTransactionTypeTP` |  | |  | `_FinancialTransactionType as _FinancialTransactionType : redirected to parent I_CnsldtnFinTransactionTypeTP` |  |  |

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
//    name: 'CnsldtnFinTransactionTypeText'
//  },
  semanticKey: [
    'Language',
    'FinancialTransactionType'
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
@EndUserText.label: 'Cnsldtn Fin Transaction Type - Text TP'
define view entity I_CnsldtnFinTransTypeTextTP
  as projection on R_CnsldtnFinTransTypeTextTP as _Text

{
      @Semantics.language
  key _Text.Language,

  key _Text.FinancialTransactionType,

      @Semantics.text
      _Text.FinancialTransactionTypeName,

      _Text.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _FinancialTransactionType as _FinancialTransactionType : redirected to parent I_CnsldtnFinTransactionTypeTP

}
```
