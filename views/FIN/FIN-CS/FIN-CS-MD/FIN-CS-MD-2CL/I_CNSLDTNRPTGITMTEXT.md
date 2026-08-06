---
name: I_CNSLDTNRPTGITMTEXT
description: Cnsldtnrptgitmtext
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
  - text-view
  - text
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNRPTGITMTEXT

**Cnsldtnrptgitmtext**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ConsolidationChartOfAccounts` | `fincs_fsitemt.itclg` |
| key `ConsolidationReportingItem` | `cast( fincs_fsitemt.item as fc_item)` |
| key `Language` | `langu` |
| `ConsolidationReportingItemText` | `txtsh` |
| `ConsolidationRptgItemMdmText` | `txtmi` |
| `_Language` | *Association* |
| `_ChartOfAccounts` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_ChartOfAccounts` | `I_CnsldtnChartOfAccounts` | [0..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICNSLDTNRITEMT',
  compiler.compareFilter: true,
  preserveKey: true,
  buffering:{
    status: #ACTIVE,
    type: #GENERIC,
    numberOfKeyFields: 1 }
  }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #M },
  representativeKey: 'ConsolidationReportingItem',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ]
  }
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Reporting Item - Text'

@VDM.lifecycle:{
  status: #DEPRECATED,
  successor: 'I_CnsldtnRptgItemText_2'
  }

define view I_CnsldtnRptgItmText
  as select from fincs_fsitemt

    inner join   fincs_fsitem on  fincs_fsitem.itclg   = fincs_fsitemt.itclg
                              and fincs_fsitem.item    = fincs_fsitemt.item
                              and fincs_fsitem.itclass = 'REPT'

  association [0..1] to I_Language               as _Language        on $projection.Language = _Language.Language

  association [0..1] to I_CnsldtnChartOfAccounts as _ChartOfAccounts on $projection.ConsolidationChartOfAccounts = _ChartOfAccounts.ConsolidationChartOfAccounts
{

      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
  key fincs_fsitemt.itclg                  as ConsolidationChartOfAccounts,

  key cast( fincs_fsitemt.item as fc_item) as ConsolidationReportingItem,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key langu                                as Language,

      txtsh                                as ConsolidationReportingItemText,

      @Semantics.text
      txtmi                                as ConsolidationRptgItemMdmText,

      _ChartOfAccounts,

      _Language
};
```
