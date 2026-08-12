---
name: I_CNSLDTNCUSTOMERGROUPTP
description: "Cnsldtncustomergrouptp"
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
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:Customer
---
# I_CNSLDTNCUSTOMERGROUPTP

**Cnsldtncustomergrouptp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustomerGroup` | ✓ | | `_CnsldtnCustomerGroup` | `CustomerGroup` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_CnsldtnCustomerGroup` | `CnsldtnIsAdditionalMasterData` |  |  |
| `I_CnsldtnCustomerGroupTextTP` |  | |  | `_Text as _Text : redirected to composition child I_CnsldtnCustomerGroupTextTP` |  |  |

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
    name: 'CnsldtnCustomerGroup'
  },
  semanticKey: [
    'CustomerGroup'
  ],
  supportedCapabilities: [
    #TRANSACTIONAL_PROVIDER
  ],
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #S
  }
}
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@EndUserText.label: 'Consolidation Customer Group - TP'
define root view entity I_CnsldtnCustomerGroupTP
  provider contract transactional_interface
  as projection on R_CnsldtnCustomerGroupTP as _CnsldtnCustomerGroup

{

  key _CnsldtnCustomerGroup.CustomerGroup,

      _CnsldtnCustomerGroup.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _Text as _Text : redirected to composition child I_CnsldtnCustomerGroupTextTP

}
```
