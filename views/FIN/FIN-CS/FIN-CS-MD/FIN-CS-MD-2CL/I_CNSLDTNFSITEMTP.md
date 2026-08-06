---
name: I_CNSLDTNFSITEMTP
description: Cnsldtnfsitemtp
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
  - item-level
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNFSITEMTP

**Cnsldtnfsitemtp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ConsolidationChartOfAccounts` | `_Source.ConsolidationChartOfAccounts` |
| key `CnsldtnFinancialStatementItem` | `_Source.CnsldtnFinancialStatementItem` |
| `ConsolidationFSItemType` | `_Source.ConsolidationFSItemType` |
| `ConsolidationBreakdownCategory` | `_Source.ConsolidationBreakdownCategory` |
| `CnsldtnFSItemIsForCnsldtnOnly` | `_Source.CnsldtnFSItemIsForCnsldtnOnly` |
| `CnsldtnFSItemPostingIsBlocked` | `_Source.CnsldtnFSItemPostingIsBlocked` |
| `CnsldtnFSItemIsNetBalCarryFwd` | `_Source.CnsldtnFSItemIsNetBalCarryFwd` |
| `CnsldtnFSItemLink` | `_Source.CnsldtnFSItemLink` |
| `CnsldtnFSItemLinkLabel` | `_Source.CnsldtnFSItemLinkLabel` |
| `CnsldtnSignLogicIsFSItemSpcfc` | `_Source.CnsldtnSignLogicIsFSItemSpcfc` |
| `ConsolidationSignLogicType` | `_Source.ConsolidationSignLogicType` |
| `_Text` | *Association* |
| `_CnsldtnFSItemByTimeVersion` | *Association* |

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
    name: 'CnsldtnFinancialStatementItem'
  },
  semanticKey: [
    'ConsolidationChartOfAccounts',
    'CnsldtnFinancialStatementItem'
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
@EndUserText.label: 'Consolidation FS Item - TP'
define root view entity I_CnsldtnFSItemTP
  provider contract transactional_interface
  as projection on R_CnsldtnFSItemTP as _Source

{

  key _Source.ConsolidationChartOfAccounts,

      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
  key _Source.CnsldtnFinancialStatementItem,

      _Source.ConsolidationFSItemType,

      _Source.ConsolidationBreakdownCategory,

      _Source.CnsldtnFSItemIsForCnsldtnOnly,

      _Source.CnsldtnFSItemPostingIsBlocked,

      _Source.CnsldtnFSItemIsNetBalCarryFwd,

      _Source.CnsldtnFSItemLink,

      _Source.CnsldtnFSItemLinkLabel,
      
      _Source.CnsldtnSignLogicIsFSItemSpcfc,
      
      _Source.ConsolidationSignLogicType,


      /* associations for transactional processing */
      _Text                       : redirected to composition child I_CnsldtnFSItemTextTP,
      _CnsldtnFSItemByTimeVersion : redirected to composition child I_CnsldtnFSItemByTimeVersionTP

}
```
