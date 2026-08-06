---
name: I_CNSLDTNRPTGITEMTEXT_2
description: Cnsldtnrptgitemtext 2
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
  - text
  - item-level
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNRPTGITEMTEXT_2

**Cnsldtnrptgitemtext 2**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `_CnsldtnFSItemText_2.Language` |
| key `ConsolidationChartOfAccounts` | `_CnsldtnFSItemText_2.ConsolidationChartOfAccounts` |
| key `ConsolidationReportingItem` | `cast ( _CnsldtnFSItemText_2.CnsldtnFinancialStatementItem as fincs_reportingitem preserving type )` |
| `ConsolidationReportingItemText` | `_CnsldtnFSItemText_2.CnsldtnFSItemText` |
| `ConsolidationRptgItemMdmText` | `_CnsldtnFSItemText_2.CnsldtnFSItemMediumText` |
| `ConsolidationRptgItemLongText` | `_CnsldtnFSItemText_2.CnsldtnFSItemLongText` |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICNSLDTNRITEMT2',
  compiler.compareFilter: true,
  preserveKey: true
  }
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #CHECK
@Metadata:{
  ignorePropagatedAnnotations: true
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #L },
  representativeKey: 'ConsolidationReportingItem',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ]
  }
@Search.searchable: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Reporting Item - Text'

define view I_CnsldtnRptgItemText_2
  as select from I_CnsldtnFSItemText_2 as _CnsldtnFSItemText_2

    inner join   fincs_fsitem on  fincs_fsitem.itclg   = _CnsldtnFSItemText_2.ConsolidationChartOfAccounts
                              and fincs_fsitem.item    = _CnsldtnFSItemText_2.CnsldtnFinancialStatementItem
                              and fincs_fsitem.itclass = 'REPT'

{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key _CnsldtnFSItemText_2.Language                                                                       as Language,

      @ObjectModel.foreignKey.association: '_CnsldtnChartOfAccounts'
      @Search:{
        ranking: #MEDIUM,
        fuzzinessThreshold: 0.8
        }
  key _CnsldtnFSItemText_2.ConsolidationChartOfAccounts                                                   as ConsolidationChartOfAccounts,

      @Search:{
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.8
        }
  key cast ( _CnsldtnFSItemText_2.CnsldtnFinancialStatementItem as fincs_reportingitem  preserving type ) as ConsolidationReportingItem,

      @Semantics.text
      @Search:{
        ranking: #MEDIUM,
        fuzzinessThreshold: 0.8
        }
      _CnsldtnFSItemText_2.CnsldtnFSItemText                                                              as ConsolidationReportingItemText,

      @Semantics.text
      _CnsldtnFSItemText_2.CnsldtnFSItemMediumText                                                        as ConsolidationRptgItemMdmText,

      // intentionally no @Semantics.text
      _CnsldtnFSItemText_2.CnsldtnFSItemLongText                                                          as ConsolidationRptgItemLongText,


      _CnsldtnFSItemText_2._Language,
      _CnsldtnFSItemText_2._CnsldtnChartOfAccounts
};
```
