---
name: I_CNSLDTNCUSTOMERGROUPTEXTTP
description: "Cnsldtncustomergrouptexttp"
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
  - text
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:Customer
---
# I_CNSLDTNCUSTOMERGROUPTEXTTP

**Cnsldtncustomergrouptexttp**

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
| `CustomerGroup` | ✓ | | `_Text` | `CustomerGroup` |  |  |
| `CustomerGroupName` |  | | `_Text` | `CustomerGroupName` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_Text` | `CnsldtnIsAdditionalMasterData` |  |  |
| `I_CnsldtnCustomerGroupTP` |  | |  | `_CustomerGroup as _CustomerGroup : redirected to parent I_CnsldtnCustomerGroupTP` |  |  |

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
//    name: 'CnsldtnCustomerGroupText'
//  },
  semanticKey: [
    'Language',
    'CustomerGroup'
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
@EndUserText.label: 'Consolidation Customer Group - Text TP'
define view entity I_CnsldtnCustomerGroupTextTP
  as projection on R_CnsldtnCustomerGroupTextTP as _Text

{
      @Semantics.language
  key _Text.Language,

  key _Text.CustomerGroup,

      @Semantics.text
      _Text.CustomerGroupName,

      _Text.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _CustomerGroup as _CustomerGroup : redirected to parent I_CnsldtnCustomerGroupTP

}
```
