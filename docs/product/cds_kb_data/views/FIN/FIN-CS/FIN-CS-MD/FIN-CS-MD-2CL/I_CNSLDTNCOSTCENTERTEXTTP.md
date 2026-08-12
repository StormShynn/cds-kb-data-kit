---
name: I_CNSLDTNCOSTCENTERTEXTTP
description: "CNSLDTNCost CenterTEXTTP"
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
  - cost-center
  - text
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:CostCenter
---
# I_CNSLDTNCOSTCENTERTEXTTP

**CNSLDTNCost CenterTEXTTP**

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
| `ControllingArea` | ✓ | | `_Text` | `ControllingArea` |  |  |
| `CostCenter` | ✓ | | `_Text` | `CostCenter` |  |  |
| `CostCenterName` |  | | `_Text` | `CostCenterName` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_Text` | `CnsldtnIsAdditionalMasterData` |  |  |
| `I_CnsldtnCostCenterTP` |  | |  | `_CostCenter as _CostCenter : redirected to parent I_CnsldtnCostCenterTP` |  |  |

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
//    name: 'CnsldtnCostCenterText'
//  },
  semanticKey: [
    'Language',
    'ControllingArea',
    'CostCenter'
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
@EndUserText.label: 'Consolidation Cost Center - Text TP'
define view entity I_CnsldtnCostCenterTextTP
  as projection on R_CnsldtnCostCenterTextTP as _Text

{
      @Semantics.language
  key _Text.Language,

  key _Text.ControllingArea,
  
  key _Text.CostCenter,

      @Semantics.text
      _Text.CostCenterName,

      _Text.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _CostCenter as _CostCenter : redirected to parent I_CnsldtnCostCenterTP

}
```
