---
name: I_CNSLDTNMATERIALTEXTTP
description: Cnsldtnmaterialtexttp
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
# I_CNSLDTNMATERIALTEXTTP

**Cnsldtnmaterialtexttp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | | `_Text` | `Language` |
| `Material` | ✓ | | `_Text` | `Material` |
| `MaterialName` |  | | `_Text` | `MaterialName` |
| `CnsldtnIsAdditionalMasterData` |  | | `_Text` | `CnsldtnIsAdditionalMasterData` |
| `I_CnsldtnMaterialTP` |  | |  | `_Material as _Material : redirected to parent I_CnsldtnMaterialTP` |

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
//    name: 'CnsldtnMaterialText'
//  },
  semanticKey: [
    'Language',
    'Material'
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
@EndUserText.label: 'Consolidation Material - Text TP'
define view entity I_CnsldtnMaterialTextTP
  as projection on R_CnsldtnMaterialTextTP as _Text

{
      @Semantics.language
  key _Text.Language,

  key _Text.Material,

      @Semantics.text
      _Text.MaterialName,

      _Text.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _Material as _Material : redirected to parent I_CnsldtnMaterialTP

}
```
