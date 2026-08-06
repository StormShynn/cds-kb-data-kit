---
name: I_CNSLDTNCUSTOMERTP
description: Cnsldtncustomertp
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
  - customer
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:Customer
---
# I_CNSLDTNCUSTOMERTP

**Cnsldtncustomertp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Customer` | `_CnsldtnCustomer.Customer` |
| `CnsldtnIsAdditionalMasterData` | `_CnsldtnCustomer.CnsldtnIsAdditionalMasterData` |
| `I_CnsldtnCustomerTextTP` | `_Text as _Text : redirected to composition child I_CnsldtnCustomerTextTP` |

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
    name: 'CnsldtnCustomer'
  },
  semanticKey: [
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
@EndUserText.label: 'Consolidation Customer - TP'
define root view entity I_CnsldtnCustomerTP
  provider contract transactional_interface
  as projection on R_CnsldtnCustomerTP as _CnsldtnCustomer

{

  key _CnsldtnCustomer.Customer,

      _CnsldtnCustomer.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _Text as _Text : redirected to composition child I_CnsldtnCustomerTextTP

}
```
