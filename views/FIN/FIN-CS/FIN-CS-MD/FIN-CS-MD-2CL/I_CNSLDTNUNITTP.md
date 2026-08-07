---
name: I_CNSLDTNUNITTP
description: Cnsldtnunittp
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
# I_CNSLDTNUNITTP

**Cnsldtnunittp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ConsolidationUnit` | ✓ | |  | `cast ( _Source.ConsolidationUnit as fincs_consolidationunit preserving type )` |
| `Country` |  | | `_Source` | `Country` |
| `ConsolidationUnitLink` |  | | `_Source` | `ConsolidationUnitLink` |
| `ConsolidationUnitLinkLabel` |  | | `_Source` | `ConsolidationUnitLinkLabel` |
| `I_CnsldtnUnitTextTP` |  | |  | `_Text as _Text : redirected to composition child I_CnsldtnUnitTextTP` |
| `I_CnsldtnUnitByTimeTP` |  | |  | `_CnsldtnUnitByTime as _CnsldtnUnitByTime : redirected to composition child I_CnsldtnUnitByTimeTP` |
| `I_CnsldtnUnitByTimeVersionTP` |  | |  | `_CnsldtnUnitByTimeVersion as _CnsldtnUnitByTimeVersion : redirected to composition child I_CnsldtnUnitByTimeVersionTP` |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #CHECK
}
@Metadata: {
  ignorePropagatedAnnotations: true
}
@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  sapObjectNodeType:{
    name: 'ConsolidationUnit'
  },
  semanticKey: [
    'ConsolidationUnit'
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
@Search.searchable: true
@EndUserText.label: 'Consolidation Unit - TP'
define root view entity I_CnsldtnUnitTP
  provider contract transactional_interface
  as projection on R_CnsldtnUnitTP as _Source

{

      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
  key cast ( _Source.ConsolidationUnit as fincs_consolidationunit preserving type ) as ConsolidationUnit,

      _Source.Country,

      _Source.ConsolidationUnitLink,

      _Source.ConsolidationUnitLinkLabel,


      /* associations for transactional processing */
      _Text                                                                         as _Text                     : redirected to composition child I_CnsldtnUnitTextTP,
      _CnsldtnUnitByTime                                                            as _CnsldtnUnitByTime        : redirected to composition child I_CnsldtnUnitByTimeTP,
      _CnsldtnUnitByTimeVersion                                                     as _CnsldtnUnitByTimeVersion : redirected to composition child I_CnsldtnUnitByTimeVersionTP

}
```
