---
name: I_CNSLDTNPROFITCENTERTEXTTP
description: CNSLDTNProfit CenterTEXTTP
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
  - text
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:ProfitCenter
---
# I_CNSLDTNPROFITCENTERTEXTTP

**CNSLDTNProfit CenterTEXTTP**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | | `_Text` | `Language` |
| `ControllingArea` | ✓ | | `_Text` | `ControllingArea` |
| `ProfitCenter` | ✓ | | `_Text` | `ProfitCenter` |
| `ProfitCenterName` |  | | `_Text` | `ProfitCenterName` |
| `CnsldtnIsAdditionalMasterData` |  | | `_Text` | `CnsldtnIsAdditionalMasterData` |
| `I_CnsldtnProfitCenterTP` |  | |  | `_ProfitCenter as _ProfitCenter : redirected to parent I_CnsldtnProfitCenterTP` |

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
//    name: 'CnsldtnProfitCenterText'
//  },
  semanticKey: [
    'Language',
    'ControllingArea',
    'ProfitCenter'
  ],
  supportedCapabilities: [
    #TRANSACTIONAL_PROVIDER
  ],
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #M
  }
}
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@EndUserText.label: 'Consolidation Profit Center - Text TP'
define view entity I_CnsldtnProfitCenterTextTP
  as projection on R_CnsldtnProfitCenterTextTP as _Text

{
      @Semantics.language
  key _Text.Language,

  key _Text.ControllingArea,
  
  key _Text.ProfitCenter,

      @Semantics.text
      _Text.ProfitCenterName,

      _Text.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _ProfitCenter as _ProfitCenter : redirected to parent I_CnsldtnProfitCenterTP

}
```
