---
name: I_CNSLDTNGROUPTP
description: "Cnsldtngrouptp"
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
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNGROUPTP

**Cnsldtngrouptp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationGroup` | ✓ | | `_Source` | `ConsolidationGroup` |  |  |
| `I_CnsldtnGroupTextTP` |  | |  | `_Text as _Text : redirected to composition child I_CnsldtnGroupTextTP` |  |  |

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
    name: 'ConsolidationGroup'
  },
  semanticKey: [
    'ConsolidationGroup'
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
@EndUserText.label: 'Consolidation Group - TP'
define root view entity I_CnsldtnGroupTP
  provider contract transactional_interface
  as projection on R_CnsldtnGroupTP as _Source

{

  key _Source.ConsolidationGroup,


      /* associations for transactional processing */
      _Text as _Text : redirected to composition child I_CnsldtnGroupTextTP

}
```
