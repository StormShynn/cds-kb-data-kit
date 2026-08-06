---
name: I_CNSLDTNGROUPSTRUCTURETP
description: Cnsldtngroupstructuretp
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
# I_CNSLDTNGROUPSTRUCTURETP

**Cnsldtngroupstructuretp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ConsolidationGroup` | `_Source.ConsolidationGroup` |
| key `ConsolidationUnit` | `_Source.ConsolidationUnit` |
| key `ConsolidationVersion` | `_Source.ConsolidationVersion` |
| key `GroupStrucFromFiscalYearPeriod` | `_Source.GroupStrucFromFiscalYearPeriod` |
| `GroupStrucToFiscalYearPeriod` | `_Source.GroupStrucToFiscalYearPeriod` |
| `FirstCnsldtnFiscalYearPeriod` | `_Source.FirstCnsldtnFiscalYearPeriod` |
| `FirstCnsldtnIsAtEndOfPeriod` | `_Source.FirstCnsldtnIsAtEndOfPeriod` |
| `DivestitureFiscalYearPeriod` | `_Source.DivestitureFiscalYearPeriod` |
| `DivestitureIsAtBeginOfPeriod` | `_Source.DivestitureIsAtBeginOfPeriod` |
| `DivestitureIsDueToMerger` | `_Source.DivestitureIsDueToMerger` |
| `I_CnsldtnGrpStrucMethAssgmtTP` | `_CnsldtnGrpStrucMethAssgmt as _CnsldtnGrpStrucMethAssgmt : redirected to composition child I_CnsldtnGrpStrucMethAssgmtTP` |

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
    name: 'ConsolidationGroupStructure'
  },
  semanticKey: [
    'ConsolidationGroup',
    'ConsolidationUnit',
    'ConsolidationVersion'
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
@EndUserText.label: 'Consolidation Group Structure - TP'
define root view entity I_CnsldtnGroupStructureTP
  provider contract transactional_interface
  as projection on R_CnsldtnGroupStructureTP as _Source

{

  key _Source.ConsolidationGroup,

  key _Source.ConsolidationUnit,

  key _Source.ConsolidationVersion,

      @Semantics.fiscal.yearPeriod: true
  key _Source.GroupStrucFromFiscalYearPeriod,

      @Semantics.fiscal.yearPeriod: true
      _Source.GroupStrucToFiscalYearPeriod,

      @Semantics.fiscal.yearPeriod: true
      _Source.FirstCnsldtnFiscalYearPeriod,

      _Source.FirstCnsldtnIsAtEndOfPeriod,

      @Semantics.fiscal.yearPeriod: true
      _Source.DivestitureFiscalYearPeriod,

      _Source.DivestitureIsAtBeginOfPeriod,

      _Source.DivestitureIsDueToMerger,


      /* associations for transactional processing */
      _CnsldtnGrpStrucMethAssgmt as _CnsldtnGrpStrucMethAssgmt : redirected to composition child I_CnsldtnGrpStrucMethAssgmtTP

}
```
