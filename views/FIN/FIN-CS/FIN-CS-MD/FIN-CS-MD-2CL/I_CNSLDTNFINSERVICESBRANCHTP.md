---
name: I_CNSLDTNFINSERVICESBRANCHTP
description: Cnsldtnfinservicesbranchtp
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
  - service
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNFINSERVICESBRANCHTP

**Cnsldtnfinservicesbranchtp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialServicesBranch` | ✓ | | `_Source` | `FinancialServicesBranch` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_Source` | `CnsldtnIsAdditionalMasterData` |  |  |
| `I_CnsldtnFinSrvcsBranchTextTP` |  | |  | `_Text as _Text : redirected to composition child I_CnsldtnFinSrvcsBranchTextTP` |  |  |

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
    name: 'CnsldtnFinancialServicesBranch'
  },
  semanticKey: [
    'FinancialServicesBranch'
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
@EndUserText.label: 'Cnsldtn Financial Services Branch - TP'
define root view entity I_CnsldtnFinServicesBranchTP
  provider contract transactional_interface
  as projection on R_CnsldtnFinServicesBranchTP as _Source

{

  key _Source.FinancialServicesBranch,

      _Source.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _Text as _Text : redirected to composition child I_CnsldtnFinSrvcsBranchTextTP

}
```
