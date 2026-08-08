---
name: I_CNSLDTNFINTRANSACTIONTYPETP
description: "Cnsldtnfintransactiontypetp"
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
# I_CNSLDTNFINTRANSACTIONTYPETP

**Cnsldtnfintransactiontypetp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialTransactionType` | ✓ | | `_CnsldtnFinTransType` | `FinancialTransactionType` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_CnsldtnFinTransType` | `CnsldtnIsAdditionalMasterData` |  |  |
| `I_CnsldtnFinTransTypeTextTP` |  | |  | `_Text as _Text : redirected to composition child I_CnsldtnFinTransTypeTextTP` |  |  |

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
    name: 'CnsldtnFinTransactionType'
  },
  semanticKey: [
    'FinancialTransactionType'
  ],
  supportedCapabilities: [
    #TRANSACTIONAL_PROVIDER
  ],
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #S
  }
}
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@EndUserText.label: 'Cnsldtn Financial Transaction Type - TP'
define root view entity I_CnsldtnFinTransactionTypeTP
  provider contract transactional_interface
  as projection on R_CnsldtnFinTransactionTypeTP as _CnsldtnFinTransType

{

  key _CnsldtnFinTransType.FinancialTransactionType,

      _CnsldtnFinTransType.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _Text as _Text : redirected to composition child I_CnsldtnFinTransTypeTextTP

}
```
