---
name: I_CNSLDTNCUSTOMERTEXTTP
description: "Cnsldtncustomertexttp"
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
  - customer
  - text
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:Customer
---
# I_CNSLDTNCUSTOMERTEXTTP

**Cnsldtncustomertexttp**

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
| `Customer` | ✓ | | `_Text` | `Customer` |  |  |
| `CustomerName` |  | | `_Text` | `CustomerName` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_Text` | `CnsldtnIsAdditionalMasterData` |  |  |
| `I_CnsldtnCustomerTP` |  | |  | `_Customer as _Customer : redirected to parent I_CnsldtnCustomerTP` |  |  |

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
//    name: 'CnsldtnCustomerText'
//  },
  semanticKey: [
    'Language',
    'Customer'
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
@EndUserText.label: 'Consolidation Customer - Text TP'
define view entity I_CnsldtnCustomerTextTP
  as projection on R_CnsldtnCustomerTextTP as _Text

{
      @Semantics.language
  key _Text.Language,

  key _Text.Customer,

      @Semantics.text
      _Text.CustomerName,

      _Text.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _Customer as _Customer : redirected to parent I_CnsldtnCustomerTP

}
```
