---
name: I_CNSLDTNSEGMENTTP
description: "Cnsldtnsegmenttp"
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
# I_CNSLDTNSEGMENTTP

**Cnsldtnsegmenttp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Segment` | ✓ | | `_CnsldtnSegment` | `Segment` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_CnsldtnSegment` | `CnsldtnIsAdditionalMasterData` |  |  |
| `I_CnsldtnSegmentTextTP` |  | |  | `_Text as _Text : redirected to composition child I_CnsldtnSegmentTextTP` |  |  |

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
    name: 'CnsldtnSegment'
  },
  semanticKey: [
    'Segment'
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
@EndUserText.label: 'Consolidation Segment - TP'
define root view entity I_CnsldtnSegmentTP
  provider contract transactional_interface
  as projection on R_CnsldtnSegmentTP as _CnsldtnSegment

{

  key _CnsldtnSegment.Segment,

      _CnsldtnSegment.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _Text as _Text : redirected to composition child I_CnsldtnSegmentTextTP

}
```
