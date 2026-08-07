---
name: I_CNSLDTNPLANTTEXTTP
description: Cnsldtnplanttexttp
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
  - text
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:Plant
---
# I_CNSLDTNPLANTTEXTTP

**Cnsldtnplanttexttp**

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
| `Plant` | ✓ | | `_Text` | `Plant` |  |  |
| `PlantName` |  | | `_Text` | `PlantName` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_Text` | `CnsldtnIsAdditionalMasterData` |  |  |
| `I_CnsldtnPlantTP` |  | |  | `_Plant as _Plant : redirected to parent I_CnsldtnPlantTP` |  |  |

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
//    name: 'CnsldtnPlantText'
//  },
  semanticKey: [
    'Language',
    'Plant'
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
@EndUserText.label: 'Consolidation Plant - Text TP'
define view entity I_CnsldtnPlantTextTP
  as projection on R_CnsldtnPlantTextTP as _Text

{
      @Semantics.language
  key _Text.Language,

  key _Text.Plant,

      @Semantics.text
      _Text.PlantName,

      _Text.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _Plant as _Plant : redirected to parent I_CnsldtnPlantTP

}
```
