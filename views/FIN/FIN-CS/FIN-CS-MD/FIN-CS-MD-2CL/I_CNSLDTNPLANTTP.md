---
name: I_CNSLDTNPLANTTP
description: Cnsldtnplanttp
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
  - plant
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:Plant
---
# I_CNSLDTNPLANTTP

**Cnsldtnplanttp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Plant` | ✓ | | `_CnsldtnPlant` | `Plant` |
| `CnsldtnIsAdditionalMasterData` |  | | `_CnsldtnPlant` | `CnsldtnIsAdditionalMasterData` |
| `I_CnsldtnPlantTextTP` |  | |  | `_Text as _Text : redirected to composition child I_CnsldtnPlantTextTP` |

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
    name: 'CnsldtnPlant'
  },
  semanticKey: [
    'Plant'
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
@EndUserText.label: 'Consolidation Plant - TP'
define root view entity I_CnsldtnPlantTP
  provider contract transactional_interface
  as projection on R_CnsldtnPlantTP as _CnsldtnPlant

{

  key _CnsldtnPlant.Plant,

      _CnsldtnPlant.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _Text as _Text : redirected to composition child I_CnsldtnPlantTextTP

}
```
