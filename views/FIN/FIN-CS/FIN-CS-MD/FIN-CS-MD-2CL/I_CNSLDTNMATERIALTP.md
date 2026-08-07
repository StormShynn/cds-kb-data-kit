---
name: I_CNSLDTNMATERIALTP
description: Cnsldtnmaterialtp
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
  - material
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:Material
---
# I_CNSLDTNMATERIALTP

**Cnsldtnmaterialtp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Material` | ✓ | | `_CnsldtnMaterial` | `Material` |
| `CnsldtnIsAdditionalMasterData` |  | | `_CnsldtnMaterial` | `CnsldtnIsAdditionalMasterData` |
| `I_CnsldtnMaterialTextTP` |  | |  | `_Text as _Text : redirected to composition child I_CnsldtnMaterialTextTP` |

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
    name: 'CnsldtnMaterial'
  },
  semanticKey: [
    'Material'
  ],
  supportedCapabilities: [
    #TRANSACTIONAL_PROVIDER
  ],
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #L
  }
}
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@EndUserText.label: 'Consolidation Material - TP'
define root view entity I_CnsldtnMaterialTP
  provider contract transactional_interface
  as projection on R_CnsldtnMaterialTP as _CnsldtnMaterial

{

  key _CnsldtnMaterial.Material,

      _CnsldtnMaterial.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _Text as _Text : redirected to composition child I_CnsldtnMaterialTextTP

}
```
