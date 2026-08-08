---
name: I_CNSLDTNDISTRCHANNELTEXTTP
description: "Cnsldtndistrchanneltexttp"
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
# I_CNSLDTNDISTRCHANNELTEXTTP

**Cnsldtndistrchanneltexttp**

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
| `DistributionChannel` | ✓ | | `_Text` | `DistributionChannel` |  |  |
| `DistributionChannelName` |  | | `_Text` | `DistributionChannelName` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_Text` | `CnsldtnIsAdditionalMasterData` |  |  |
| `I_CnsldtnDistributionChannelTP` |  | |  | `_DistributionChannel as _DistributionChannel : redirected to parent I_CnsldtnDistributionChannelTP` |  |  |

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
//    name: 'CnsldtnDistributionChannelText'
//  },
  semanticKey: [
    'Language',
    'DistributionChannel'
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
@EndUserText.label: 'Cnsldtn Distribution Channel - Text TP'
define view entity I_CnsldtnDistrChannelTextTP
  as projection on R_CnsldtnDistrChannelTextTP as _Text

{
      @Semantics.language
  key _Text.Language,

  key _Text.DistributionChannel,

      @Semantics.text
      _Text.DistributionChannelName,

      _Text.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _DistributionChannel as _DistributionChannel : redirected to parent I_CnsldtnDistributionChannelTP

}
```
