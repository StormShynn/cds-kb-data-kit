---
name: I_CNSLDTNCONTROLLINGAREATEXTTP
description: Cnsldtncontrollingareatexttp
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
# I_CNSLDTNCONTROLLINGAREATEXTTP

**Cnsldtncontrollingareatexttp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `_Text.Language` |
| key `ControllingArea` | `_Text.ControllingArea` |
| `ControllingAreaName` | `_Text.ControllingAreaName` |
| `CnsldtnIsAdditionalMasterData` | `_Text.CnsldtnIsAdditionalMasterData` |
| `I_CnsldtnControllingAreaTP` | `_ControllingArea as _ControllingArea : redirected to parent I_CnsldtnControllingAreaTP` |

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
//    name: 'CnsldtnControllingAreaText'
//  },
  semanticKey: [
    'Language',
    'ControllingArea'
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
@EndUserText.label: 'Consolidation Controlling Area - Text TP'
define view entity I_CnsldtnControllingAreaTextTP
  as projection on R_CnsldtnControllingAreaTextTP as _Text

{
      @Semantics.language
  key _Text.Language,

  key _Text.ControllingArea,

      @Semantics.text
      _Text.ControllingAreaName,

      _Text.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _ControllingArea as _ControllingArea : redirected to parent I_CnsldtnControllingAreaTP

}
```
