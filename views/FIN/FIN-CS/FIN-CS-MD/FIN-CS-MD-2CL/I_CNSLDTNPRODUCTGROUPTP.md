---
name: I_CNSLDTNPRODUCTGROUPTP
description: "Cnsldtnproductgrouptp"
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
# I_CNSLDTNPRODUCTGROUPTP

**Cnsldtnproductgrouptp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductGroup` | ✓ | | `_CnsldtnProductGroup` | `ProductGroup` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_CnsldtnProductGroup` | `CnsldtnIsAdditionalMasterData` |  |  |
| `I_CnsldtnProductGroupTextTP` |  | |  | `_Text as _Text : redirected to composition child I_CnsldtnProductGroupTextTP` |  |  |

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
    name: 'CnsldtnProductGroup'
  },
  semanticKey: [
    'ProductGroup'
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
@EndUserText.label: 'Consolidation Product Group - TP'
define root view entity I_CnsldtnProductGroupTP
  provider contract transactional_interface
  as projection on R_CnsldtnProductGroupTP as _CnsldtnProductGroup

{

  key _CnsldtnProductGroup.ProductGroup,

      _CnsldtnProductGroup.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _Text as _Text : redirected to composition child I_CnsldtnProductGroupTextTP

}
```
