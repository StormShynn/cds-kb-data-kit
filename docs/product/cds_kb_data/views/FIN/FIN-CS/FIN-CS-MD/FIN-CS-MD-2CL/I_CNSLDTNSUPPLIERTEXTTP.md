---
name: I_CNSLDTNSUPPLIERTEXTTP
description: "Cnsldtnsuppliertexttp"
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
  - supplier
  - text
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:Supplier
---
# I_CNSLDTNSUPPLIERTEXTTP

**Cnsldtnsuppliertexttp**

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
| `Supplier` | ✓ | | `_Text` | `Supplier` |  |  |
| `SupplierName` |  | | `_Text` | `SupplierName` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_Text` | `CnsldtnIsAdditionalMasterData` |  |  |
| `I_CnsldtnSupplierTP` |  | |  | `_Supplier as _Supplier : redirected to parent I_CnsldtnSupplierTP` |  |  |

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
//    name: 'CnsldtnSupplierText'
//  },
  semanticKey: [
    'Language',
    'Supplier'
  ],
  supportedCapabilities: [
    #TRANSACTIONAL_PROVIDER
  ],
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #XL
  }
}
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@EndUserText.label: 'Consolidation Supplier - Text TP'
define view entity I_CnsldtnSupplierTextTP
  as projection on R_CnsldtnSupplierTextTP as _Text

{
      @Semantics.language
  key _Text.Language,

  key _Text.Supplier,

      @Semantics.text
      _Text.SupplierName,

      _Text.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _Supplier as _Supplier : redirected to parent I_CnsldtnSupplierTP

}
```
