---
name: I_CNSLDTNFSITEMTEXTTP
description: Cnsldtnfsitemtexttp
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
  - item-level
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNFSITEMTEXTTP

**Cnsldtnfsitemtexttp**

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
| `ConsolidationChartOfAccounts` | ✓ | | `_Source` | `ConsolidationChartOfAccounts` |  |  |
| `CnsldtnFinancialStatementItem` | ✓ | | `_Source` | `CnsldtnFinancialStatementItem` |  |  |
| `CnsldtnFSItemText` |  | | `_Source` | `CnsldtnFSItemText` |  |  |
| `CnsldtnFSItemMediumText` |  | | `_Source` | `CnsldtnFSItemMediumText` |  |  |
| `CnsldtnFSItemLongText` |  | | `_Source` | `CnsldtnFSItemLongText` |  |  |
| `_CnsldtnFSItem` | | ✓ | | | | |

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
  semanticKey: [
    'Language',
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
@EndUserText.label: 'Consolidation FS Item - Text TP'
define view entity I_CnsldtnFSItemTextTP
  as projection on R_CnsldtnFSItemTextTP as _Source

{

      @Semantics.language
  key _Source.Language,

  key _Source.ConsolidationChartOfAccounts,

  key _Source.CnsldtnFinancialStatementItem,

      @Semantics.text
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.7 }
      _Source.CnsldtnFSItemText,

      @Semantics.text
      _Source.CnsldtnFSItemMediumText,

      @Semantics.text
      _Source.CnsldtnFSItemLongText,


      /* associations for transactional processing */
      _CnsldtnFSItem : redirected to parent I_CnsldtnFSItemTP

}
```
