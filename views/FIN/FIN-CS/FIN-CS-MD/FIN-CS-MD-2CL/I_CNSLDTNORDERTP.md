---
name: I_CNSLDTNORDERTP
description: Cnsldtnordertp
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
# I_CNSLDTNORDERTP

**Cnsldtnordertp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `OrderID` | `_CnsldtnOrder.OrderID` |
| `CnsldtnIsAdditionalMasterData` | `_CnsldtnOrder.CnsldtnIsAdditionalMasterData` |
| `I_CnsldtnOrderTextTP` | `_Text as _Text : redirected to composition child I_CnsldtnOrderTextTP` |

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
    name: 'CnsldtnOrder'
  },
  semanticKey: [
    'OrderID'
  ],
  supportedCapabilities: [
    #TRANSACTIONAL_PROVIDER
  ],
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #L
  }
}
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@EndUserText.label: 'Consolidation Order - TP'
define root view entity I_CnsldtnOrderTP
  provider contract transactional_interface
  as projection on R_CnsldtnOrderTP as _CnsldtnOrder

{

  key _CnsldtnOrder.OrderID,

      _CnsldtnOrder.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _Text as _Text : redirected to composition child I_CnsldtnOrderTextTP

}
```
