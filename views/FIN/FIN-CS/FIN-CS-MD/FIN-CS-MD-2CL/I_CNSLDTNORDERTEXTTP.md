---
name: I_CNSLDTNORDERTEXTTP
description: "Cnsldtnordertexttp"
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
  - text
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNORDERTEXTTP

**Cnsldtnordertexttp**

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
| `OrderID` | ✓ | | `_Text` | `OrderID` |  |  |
| `OrderDescription` |  | | `_Text` | `OrderDescription` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_Text` | `CnsldtnIsAdditionalMasterData` |  |  |
| `I_CnsldtnOrderTP` |  | |  | `_Order as _Order : redirected to parent I_CnsldtnOrderTP` |  |  |

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
//    name: 'CnsldtnOrderText'
//  },
  semanticKey: [
    'Language',
    'OrderID'
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
@EndUserText.label: 'Consolidation Order - Text TP'
define view entity I_CnsldtnOrderTextTP
  as projection on R_CnsldtnOrderTextTP as _Text

{
      @Semantics.language
  key _Text.Language,

  key _Text.OrderID,

      @Semantics.text
      _Text.OrderDescription,

      _Text.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _Order as _Order : redirected to parent I_CnsldtnOrderTP

}
```
