---
name: I_CNSLDTNCOSTCENTERTP
description: "CNSLDTNCost CenterTP"
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
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:CostCenter
---
# I_CNSLDTNCOSTCENTERTP

**CNSLDTNCost CenterTP**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ControllingArea` | ✓ | | `_CnsldtnCostCenter` | `ControllingArea` |  |  |
| `CostCenter` | ✓ | | `_CnsldtnCostCenter` | `CostCenter` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_CnsldtnCostCenter` | `CnsldtnIsAdditionalMasterData` |  |  |
| `I_CnsldtnCostCenterTextTP` |  | |  | `_Text as _Text : redirected to composition child I_CnsldtnCostCenterTextTP` |  |  |

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
    name: 'CnsldtnCostCenter'
  },
  semanticKey: [
    'ControllingArea',
    'CostCenter'
  ],
  supportedCapabilities: [
    #TRANSACTIONAL_PROVIDER
  ],
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #L
  }
}
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@EndUserText.label: 'Consolidation Cost Center - TP'
define root view entity I_CnsldtnCostCenterTP
  provider contract transactional_interface
  as projection on R_CnsldtnCostCenterTP as _CnsldtnCostCenter

{

  key _CnsldtnCostCenter.ControllingArea,
  
  key _CnsldtnCostCenter.CostCenter,

      _CnsldtnCostCenter.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _Text as _Text : redirected to composition child I_CnsldtnCostCenterTextTP

}
```
