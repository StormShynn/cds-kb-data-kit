---
name: I_CNSLDTNDIVISIONTP
description: Cnsldtndivisiontp
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
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNDIVISIONTP

**Cnsldtndivisiontp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Division` | ✓ | | `_CnsldtnDivision` | `Division` |
| `CnsldtnIsAdditionalMasterData` |  | | `_CnsldtnDivision` | `CnsldtnIsAdditionalMasterData` |
| `I_CnsldtnDivisionTextTP` |  | |  | `_Text as _Text : redirected to composition child I_CnsldtnDivisionTextTP` |

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
    name: 'CnsldtnDivision'
  },
  semanticKey: [
    'Division'
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
@EndUserText.label: 'Consolidation Division - TP'
define root view entity I_CnsldtnDivisionTP
  provider contract transactional_interface
  as projection on R_CnsldtnDivisionTP as _CnsldtnDivision

{

  key _CnsldtnDivision.Division,

      _CnsldtnDivision.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _Text as _Text : redirected to composition child I_CnsldtnDivisionTextTP

}
```
