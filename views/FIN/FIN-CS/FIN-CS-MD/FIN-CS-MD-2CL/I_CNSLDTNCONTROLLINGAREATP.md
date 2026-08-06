---
name: I_CNSLDTNCONTROLLINGAREATP
description: Cnsldtncontrollingareatp
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
# I_CNSLDTNCONTROLLINGAREATP

**Cnsldtncontrollingareatp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ControllingArea` | `_CnsldtnControllingArea.ControllingArea` |
| `CnsldtnIsAdditionalMasterData` | `_CnsldtnControllingArea.CnsldtnIsAdditionalMasterData` |
| `I_CnsldtnControllingAreaTextTP` | `_Text as _Text : redirected to composition child I_CnsldtnControllingAreaTextTP` |

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
    name: 'CnsldtnControllingArea'
  },
  semanticKey: [
    'ControllingArea'
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
@EndUserText.label: 'Consolidation Controlling Area - TP'
define root view entity I_CnsldtnControllingAreaTP
  provider contract transactional_interface
  as projection on R_CnsldtnControllingAreaTP as _CnsldtnControllingArea

{

  key _CnsldtnControllingArea.ControllingArea,

      _CnsldtnControllingArea.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _Text as _Text : redirected to composition child I_CnsldtnControllingAreaTextTP

}
```
