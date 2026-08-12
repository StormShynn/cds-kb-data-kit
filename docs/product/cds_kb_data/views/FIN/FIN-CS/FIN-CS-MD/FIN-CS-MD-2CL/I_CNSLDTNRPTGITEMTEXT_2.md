---
name: I_CNSLDTNRPTGITEMTEXT_2
description: "Cnsldtnrptgitemtext 2"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | | `_CnsldtnFSItemText_2` | `Language` |  |  |
| `ConsolidationChartOfAccounts` | ✓ | | `_CnsldtnFSItemText_2` | `ConsolidationChartOfAccounts` |  |  |
| `ConsolidationReportingItem` | ✓ | |  | `cast ( _CnsldtnFSItemText_2.CnsldtnFinancialStatementItem as fincs_reportingitem preserving type )` |  |  |
| `ConsolidationReportingItemText` |  | | `_CnsldtnFSItemText_2` | `CnsldtnFSItemText` |  |  |
| `ConsolidationRptgItemMdmText` |  | | `_CnsldtnFSItemText_2` | `CnsldtnFSItemMediumText` |  |  |
| `ConsolidationRptgItemLongText` |  | | `_CnsldtnFSItemText_2` | `CnsldtnFSItemLongText` |  |  |

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
