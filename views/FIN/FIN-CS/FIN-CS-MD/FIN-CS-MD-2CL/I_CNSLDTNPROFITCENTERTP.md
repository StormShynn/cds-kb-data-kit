---
name: I_CNSLDTNPROFITCENTERTP
description: CNSLDTNProfit CenterTP
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
  - profit-center
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:ProfitCenter
---
# I_CNSLDTNPROFITCENTERTP

**CNSLDTNProfit CenterTP**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ControllingArea` | ✓ | | `_CnsldtnProfitCenter` | `ControllingArea` |
| `ProfitCenter` | ✓ | | `_CnsldtnProfitCenter` | `ProfitCenter` |
| `CnsldtnIsAdditionalMasterData` |  | | `_CnsldtnProfitCenter` | `CnsldtnIsAdditionalMasterData` |
| `I_CnsldtnProfitCenterTextTP` |  | |  | `_Text as _Text : redirected to composition child I_CnsldtnProfitCenterTextTP` |

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
    name: 'CnsldtnProfitCenter'
  },
  semanticKey: [
    'ControllingArea',
    'ProfitCenter'
  ],
  supportedCapabilities: [
    #TRANSACTIONAL_PROVIDER
  ],
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #M
  }
}
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@EndUserText.label: 'Consolidation Profit Center - TP'
define root view entity I_CnsldtnProfitCenterTP
  provider contract transactional_interface
  as projection on R_CnsldtnProfitCenterTP as _CnsldtnProfitCenter

{

  key _CnsldtnProfitCenter.ControllingArea,
  
  key _CnsldtnProfitCenter.ProfitCenter,

      _CnsldtnProfitCenter.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _Text as _Text : redirected to composition child I_CnsldtnProfitCenterTextTP

}
```
