---
name: I_CNSLDTNFSITEMVH
description: "Cnsldtnfsitemvh"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - value-help
  - item-level
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNFSITEMVH

**Cnsldtnfsitemvh**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationChartOfAccounts` | ✓ | | `_CnsldtnFSItem` | `ConsolidationChartOfAccounts` |  |  |
| `CnsldtnFinancialStatementItem` | ✓ | | `_CnsldtnFSItem` | `CnsldtnFinancialStatementItem` |  |  |

## Source Code

```abap
@AccessControl : {
  authorizationCheck: #MANDATORY
}
@Metadata : {
  ignorePropagatedAnnotations: true
}
@ObjectModel : {
  dataCategory: #VALUE_HELP,
  representativeKey: 'CnsldtnFinancialStatementItem',
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #L
  },
  modelingPattern: #VALUE_HELP_PROVIDER,
  supportedCapabilities: [
    #CDS_MODELING_DATA_SOURCE,
    #SQL_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #VALUE_HELP_PROVIDER ]
}
@Search.searchable: true
@Consumption.ranked: true
@VDM : {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText : {
  label: 'Consolidation Financial Statement Item'
}
define view entity I_CnsldtnFSItemVH
  as select from I_CnsldtnFSItem_2 as _CnsldtnFSItem

{

      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CnsldtnChartOfAccountsVH',
                                           element: 'ConsolidationChartOfAccounts' } }]
  key _CnsldtnFSItem.ConsolidationChartOfAccounts,


      @ObjectModel : {
        text.element: ['CnsldtnFSItemText']
      }
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #HIGH }
  key _CnsldtnFSItem.CnsldtnFinancialStatementItem,


      @Semantics.text: true
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #LOW }
      _CnsldtnFSItem._Text[1: Language=$session.system_language].CnsldtnFSItemText
};
```
