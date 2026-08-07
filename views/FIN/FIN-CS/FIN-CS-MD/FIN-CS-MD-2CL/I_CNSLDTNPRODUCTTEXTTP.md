---
name: I_CNSLDTNPRODUCTTEXTTP
description: Cnsldtnproducttexttp
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
  - product
  - text
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNPRODUCTTEXTTP

**Cnsldtnproducttexttp**

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
| `Product` | ✓ | | `_Text` | `Product` |
| `ProductName` |  | | `_Text` | `ProductName` |
| `CnsldtnIsAdditionalMasterData` |  | | `_Text` | `CnsldtnIsAdditionalMasterData` |
| `I_CnsldtnProductTP` |  | |  | `_Product as _Product : redirected to parent I_CnsldtnProductTP` |

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
//    name: 'CnsldtnProductText'
//  },
  semanticKey: [
    'Language',
    'Product'
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
@EndUserText.label: 'Consolidation Product - Text TP'
define view entity I_CnsldtnProductTextTP
  as projection on R_CnsldtnProductTextTP as _Text

{
      @Semantics.language
  key _Text.Language,

  key _Text.Product,

      @Semantics.text
      _Text.ProductName,

      _Text.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _Product as _Product : redirected to parent I_CnsldtnProductTP

}
```
