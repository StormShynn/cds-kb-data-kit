---
name: I_CNSLDTNMATERIALGROUPTP
description: CNSLDTNMaterial GroupTP
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
# I_CNSLDTNMATERIALGROUPTP

**CNSLDTNMaterial GroupTP**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `MaterialGroup` | `_CnsldtnMaterialGroup.MaterialGroup` |
| `CnsldtnIsAdditionalMasterData` | `_CnsldtnMaterialGroup.CnsldtnIsAdditionalMasterData` |
| `I_CnsldtnMaterialGroupTextTP` | `_Text as _Text : redirected to composition child I_CnsldtnMaterialGroupTextTP` |

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
    name: 'CnsldtnMaterialGroup'
  },
  semanticKey: [
    'MaterialGroup'
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
@EndUserText.label: 'Consolidation Material Group - TP'
define root view entity I_CnsldtnMaterialGroupTP
  provider contract transactional_interface
  as projection on R_CnsldtnMaterialGroupTP as _CnsldtnMaterialGroup

{

  key _CnsldtnMaterialGroup.MaterialGroup,

      _CnsldtnMaterialGroup.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _Text as _Text : redirected to composition child I_CnsldtnMaterialGroupTextTP

}
```
