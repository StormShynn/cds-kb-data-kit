---
name: I_CNSLDTNFUNCTIONALAREATP
description: Cnsldtnfunctionalareatp
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
# I_CNSLDTNFUNCTIONALAREATP

**Cnsldtnfunctionalareatp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `FunctionalArea` | `_CnsldtnFunctionalArea.FunctionalArea` |
| `CnsldtnIsAdditionalMasterData` | `_CnsldtnFunctionalArea.CnsldtnIsAdditionalMasterData` |
| `I_CnsldtnFunctionalAreaTextTP` | `_Text as _Text : redirected to composition child I_CnsldtnFunctionalAreaTextTP` |

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
    name: 'CnsldtnFunctionalArea'
  },
  semanticKey: [
    'FunctionalArea'
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
@EndUserText.label: 'Consolidation Functional Area - TP'
define root view entity I_CnsldtnFunctionalAreaTP
  provider contract transactional_interface
  as projection on R_CnsldtnFunctionalAreaTP as _CnsldtnFunctionalArea

{

  key _CnsldtnFunctionalArea.FunctionalArea,

      _CnsldtnFunctionalArea.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _Text as _Text : redirected to composition child I_CnsldtnFunctionalAreaTextTP

}
```
