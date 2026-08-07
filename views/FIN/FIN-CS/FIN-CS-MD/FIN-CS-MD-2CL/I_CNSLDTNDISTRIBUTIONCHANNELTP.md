---
name: I_CNSLDTNDISTRIBUTIONCHANNELTP
description: Cnsldtndistributionchanneltp
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
# I_CNSLDTNDISTRIBUTIONCHANNELTP

**Cnsldtndistributionchanneltp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DistributionChannel` | ✓ | | `_CnsldtnDistributionChannel` | `DistributionChannel` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_CnsldtnDistributionChannel` | `CnsldtnIsAdditionalMasterData` |  |  |
| `I_CnsldtnDistrChannelTextTP` |  | |  | `_Text as _Text : redirected to composition child I_CnsldtnDistrChannelTextTP` |  |  |

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
    name: 'CnsldtnDistributionChannel'
  },
  semanticKey: [
    'DistributionChannel'
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
@EndUserText.label: 'Consolidation Distribution Channel - TP'
define root view entity I_CnsldtnDistributionChannelTP
  provider contract transactional_interface
  as projection on R_CnsldtnDistributionChannelTP as _CnsldtnDistributionChannel

{

  key _CnsldtnDistributionChannel.DistributionChannel,

      _CnsldtnDistributionChannel.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _Text as _Text : redirected to composition child I_CnsldtnDistrChannelTextTP

}
```
