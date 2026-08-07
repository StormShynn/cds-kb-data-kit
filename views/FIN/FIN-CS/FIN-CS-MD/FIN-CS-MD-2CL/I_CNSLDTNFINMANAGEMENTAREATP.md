---
name: I_CNSLDTNFINMANAGEMENTAREATP
description: "Cnsldtnfinmanagementareatp"
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
# I_CNSLDTNFINMANAGEMENTAREATP

**Cnsldtnfinmanagementareatp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialManagementArea` | ✓ | | `_Source` | `FinancialManagementArea` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_Source` | `CnsldtnIsAdditionalMasterData` |  |  |
| `i_cnsldtnfinmgmtareatexttp` |  | |  | `_Text as _Text : redirected to composition child i_cnsldtnfinmgmtareatexttp` |  |  |

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
    name: 'CnsldtnFinancialManagementArea'
  },
  semanticKey: [
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

@EndUserText.label: 'Cnsldtn Financial Management Area - TP'
define root view entity I_CnsldtnFinManagementAreaTP
  provider contract transactional_interface
  as projection on R_CnsldtnFinManagementAreaTP as _Source

{

  key _Source.FinancialManagementArea,

      _Source.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _Text as _Text : redirected to composition child i_cnsldtnfinmgmtareatexttp

}
```
