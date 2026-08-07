---
name: I_CNSLDTNGRPSTRUCMETHASSGMTTP
description: "Cnsldtngrpstrucmethassgmttp"
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
# I_CNSLDTNGRPSTRUCMETHASSGMTTP

**Cnsldtngrpstrucmethassgmttp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationGroup` | ✓ | | `_Source` | `ConsolidationGroup` |  |  |
| `ConsolidationUnit` | ✓ | | `_Source` | `ConsolidationUnit` |  |  |
| `ConsolidationVersion` | ✓ | | `_Source` | `ConsolidationVersion` |  |  |
| `GroupStrucFromFiscalYearPeriod` | ✓ | | `_Source` | `GroupStrucFromFiscalYearPeriod` |  |  |
| `MethAssgmtFromFiscalYearPeriod` | ✓ | | `_Source` | `MethAssgmtFromFiscalYearPeriod` |  |  |
| `MethAssgmtToFiscalYearPeriod` |  | | `_Source` | `MethAssgmtToFiscalYearPeriod` |  |  |
| `ConsolidationInvestmentMethod` |  | | `_Source` | `ConsolidationInvestmentMethod` |  |  |
| `MethChangeIsAtBeginOfPeriod` |  | | `_Source` | `MethChangeIsAtBeginOfPeriod` |  |  |
| `I_CnsldtnGroupStructureTP` |  | |  | `_CnsldtnGroupStructure as _CnsldtnGroupStructure : redirected to parent I_CnsldtnGroupStructureTP` |  |  |

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
//  sapObjectNodeType:{
//    name: 'CnsldtnGroupStrucMethAssgmt'
//  },
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
    serviceQuality: #B,
    sizeCategory: #S
  }
}
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@EndUserText.label: 'Cnsldtn Group Struc Method Assgmt - TP'
define view entity I_CnsldtnGrpStrucMethAssgmtTP
  as projection on R_CnsldtnGrpStrucMethAssgmtTP as _Source

{

  key _Source.ConsolidationGroup,

  key _Source.ConsolidationUnit,

  key _Source.ConsolidationVersion,

      @Semantics.fiscal.yearPeriod: true
  key _Source.GroupStrucFromFiscalYearPeriod,

      @Semantics.fiscal.yearPeriod: true
  key _Source.MethAssgmtFromFiscalYearPeriod,

      @Semantics.fiscal.yearPeriod: true
      _Source.MethAssgmtToFiscalYearPeriod,

      _Source.ConsolidationInvestmentMethod,

      _Source.MethChangeIsAtBeginOfPeriod,


      /* associations for transactional processing */
      _CnsldtnGroupStructure as _CnsldtnGroupStructure : redirected to parent I_CnsldtnGroupStructureTP

}
```
