---
name: I_CNSLDTNMATERIALGROUPTEXTTP
description: CNSLDTNMaterial GroupTEXTTP
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
  - text
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:Material
---
# I_CNSLDTNMATERIALGROUPTEXTTP

**CNSLDTNMaterial GroupTEXTTP**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `_Text.Language` |
| key `MaterialGroup` | `_Text.MaterialGroup` |
| `MaterialGroupName` | `_Text.MaterialGroupName` |
| `CnsldtnIsAdditionalMasterData` | `_Text.CnsldtnIsAdditionalMasterData` |
| `I_CnsldtnMaterialGroupTP` | `_MaterialGroup as _MaterialGroup : redirected to parent I_CnsldtnMaterialGroupTP` |

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
//    name: 'CnsldtnMaterialGroupText'
//  },
  semanticKey: [
    'Language',
    'MaterialGroup'
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
@EndUserText.label: 'Consolidation Material Group - Text TP'
define view entity I_CnsldtnMaterialGroupTextTP
  as projection on R_CnsldtnMaterialGroupTextTP as _Text

{
      @Semantics.language
  key _Text.Language,

  key _Text.MaterialGroup,

      @Semantics.text
      _Text.MaterialGroupName,

      _Text.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _MaterialGroup as _MaterialGroup : redirected to parent I_CnsldtnMaterialGroupTP

}
```
