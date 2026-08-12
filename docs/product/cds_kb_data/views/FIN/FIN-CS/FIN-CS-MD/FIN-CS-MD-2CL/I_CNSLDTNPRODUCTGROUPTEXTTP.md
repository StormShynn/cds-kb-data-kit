---
name: I_CNSLDTNPRODUCTGROUPTEXTTP
description: "Cnsldtnproductgrouptexttp"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - transactional-processing
  - product
  - text
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNPRODUCTGROUPTEXTTP

**Cnsldtnproductgrouptexttp**

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
| `ProductGroup` | ✓ | | `_Text` | `ProductGroup` |  |  |
| `ProductGroupName` |  | | `_Text` | `ProductGroupName` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_Text` | `CnsldtnIsAdditionalMasterData` |  |  |
| `I_CnsldtnProductGroupTP` |  | |  | `_ProductGroup as _ProductGroup : redirected to parent I_CnsldtnProductGroupTP` |  |  |

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
//    name: 'CnsldtnProductGroupText'
//  },
  semanticKey: [
    'Language',
    'ProductGroup'
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
@EndUserText.label: 'Consolidation Product Group - Text TP'
define view entity I_CnsldtnProductGroupTextTP
  as projection on R_CnsldtnProductGroupTextTP as _Text

{
      @Semantics.language
  key _Text.Language,

  key _Text.ProductGroup,

      @Semantics.text
      _Text.ProductGroupName,

      _Text.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _ProductGroup as _ProductGroup : redirected to parent I_CnsldtnProductGroupTP

}
```
