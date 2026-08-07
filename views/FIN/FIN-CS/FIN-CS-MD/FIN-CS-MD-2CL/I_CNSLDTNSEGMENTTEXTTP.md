---
name: I_CNSLDTNSEGMENTTEXTTP
description: Cnsldtnsegmenttexttp
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
# I_CNSLDTNSEGMENTTEXTTP

**Cnsldtnsegmenttexttp**

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
| `Segment` | ✓ | | `_Text` | `Segment` |
| `SegmentName` |  | | `_Text` | `SegmentName` |
| `CnsldtnIsAdditionalMasterData` |  | | `_Text` | `CnsldtnIsAdditionalMasterData` |
| `I_CnsldtnSegmentTP` |  | |  | `_Segment as _Segment : redirected to parent I_CnsldtnSegmentTP` |

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
//    name: 'CnsldtnSegmentText'
//  },
  semanticKey: [
    'Language',
    'Segment'
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
@EndUserText.label: 'Consolidation Segment - Text TP'
define view entity I_CnsldtnSegmentTextTP
  as projection on R_CnsldtnSegmentTextTP as _Text

{
      @Semantics.language
  key _Text.Language,

  key _Text.Segment,

      @Semantics.text
      _Text.SegmentName,

      _Text.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _Segment as _Segment : redirected to parent I_CnsldtnSegmentTP

}
```
