---
name: I_CNSLDTNGROUPTEXTTP
description: "Cnsldtngrouptexttp"
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
  - text
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNGROUPTEXTTP

**Cnsldtngrouptexttp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | | `_Source` | `Language` |  |  |
| `ConsolidationGroup` | ✓ | | `_Source` | `ConsolidationGroup` |  |  |
| `ConsolidationGroupText` |  | | `_Source` | `ConsolidationGroupText` |  |  |
| `ConsolidationGroupMediumText` |  | | `_Source` | `ConsolidationGroupMediumText` |  |  |
| `I_CnsldtnGroupTP` |  | |  | `_ConsolidationGroup as _ConsolidationGroup : redirected to parent I_CnsldtnGroupTP` |  |  |

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
//    name: 'ConsolidationGroupText'
//  },
  semanticKey: [
    'Language',
    'ConsolidationGroup'
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
@EndUserText.label: 'Consolidation Group - Text TP'
define view entity I_CnsldtnGroupTextTP
  as projection on R_CnsldtnGroupTextTP as _Source

{
      @Semantics.language
  key _Source.Language,

  key _Source.ConsolidationGroup,

      @Semantics.text
      _Source.ConsolidationGroupText,

      @Semantics.text
      _Source.ConsolidationGroupMediumText,


      /* associations for transactional processing */
      _ConsolidationGroup as _ConsolidationGroup : redirected to parent I_CnsldtnGroupTP

}
```
