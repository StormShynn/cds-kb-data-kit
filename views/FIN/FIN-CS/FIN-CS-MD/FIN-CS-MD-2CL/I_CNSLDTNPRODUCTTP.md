---
name: I_CNSLDTNPRODUCTTP
description: Cnsldtnproducttp
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
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNPRODUCTTP

**Cnsldtnproducttp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Product` | ✓ | | `_CnsldtnProduct` | `Product` |
| `CnsldtnIsAdditionalMasterData` |  | | `_CnsldtnProduct` | `CnsldtnIsAdditionalMasterData` |
| `I_CnsldtnProductTextTP` |  | |  | `_Text as _Text : redirected to composition child I_CnsldtnProductTextTP` |

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
    name: 'CnsldtnProduct'
  },
  semanticKey: [
    'Product'
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
@EndUserText.label: 'Consolidation Product - TP'
define root view entity I_CnsldtnProductTP
  provider contract transactional_interface
  as projection on R_CnsldtnProductTP as _CnsldtnProduct

{

  key _CnsldtnProduct.Product,

      _CnsldtnProduct.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _Text as _Text : redirected to composition child I_CnsldtnProductTextTP

}
```
