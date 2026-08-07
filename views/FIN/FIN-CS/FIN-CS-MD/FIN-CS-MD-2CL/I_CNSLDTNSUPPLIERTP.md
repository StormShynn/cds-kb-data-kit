---
name: I_CNSLDTNSUPPLIERTP
description: "Cnsldtnsuppliertp"
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
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:Supplier
---
# I_CNSLDTNSUPPLIERTP

**Cnsldtnsuppliertp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Supplier` | ✓ | | `_CnsldtnSupplier` | `Supplier` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_CnsldtnSupplier` | `CnsldtnIsAdditionalMasterData` |  |  |
| `I_CnsldtnSupplierTextTP` |  | |  | `_Text as _Text : redirected to composition child I_CnsldtnSupplierTextTP` |  |  |

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
    name: 'CnsldtnSupplier'
  },
  semanticKey: [
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
@EndUserText.label: 'Consolidation Supplier - TP'
define root view entity I_CnsldtnSupplierTP
  provider contract transactional_interface
  as projection on R_CnsldtnSupplierTP as _CnsldtnSupplier

{

  key _CnsldtnSupplier.Supplier,

      _CnsldtnSupplier.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _Text as _Text : redirected to composition child I_CnsldtnSupplierTextTP

}
```
