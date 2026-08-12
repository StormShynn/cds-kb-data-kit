---
name: I_CNSLDTNRPTGITEM
description: "Cnsldtnrptgitem"
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
  - item-level
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNRPTGITEM

**Cnsldtnrptgitem**

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
| `ConsolidationChartOfAccounts` | ✓ | |  | `itclg` |  |  |
| `ConsolidationReportingItem` | ✓ | |  | `cast( item as fc_item )` |  |  |
| `_Text` | | ✓ | | | | |
| `_RptgItmHierNode` | | ✓ | | | | |
| `_ConsChartOfAccounts` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnRptgItmText` | [0..*] |
| `_RptgItmHierNode` | `I_CnsldtnRptgItmHierNode` | [0..*] |
| `_ConsChartOfAccounts` | `I_CnsldtnChartOfAccounts` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICNSLDTNRITEM',
  compiler.compareFilter: true,
  buffering:{
    status: #ACTIVE,
    type: #FULL }
}
@AccessControl:{
  authorizationCheck: #MANDATORY,
  privilegedAssociations: [ '_RptgItmHierNode' ]
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations: true
  }
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #M},
  representativeKey: 'ConsolidationReportingItem',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'ConsolidationReportingItem'
}
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Reporting Item'

@VDM.lifecycle:{
  status: #DEPRECATED,
  successor: 'I_CnsldtnRptgItem_2'
  }

define view I_CnsldtnRptgItem
  as select from fincs_fsitem

  association [0..*] to I_CnsldtnRptgItmText     as _Text                on  $projection.ConsolidationChartOfAccounts = _Text.ConsolidationChartOfAccounts
                                                                         and $projection.ConsolidationReportingItem   = _Text.ConsolidationReportingItem

  association [0..*] to I_CnsldtnRptgItmHierNode as _RptgItmHierNode     on  $projection.ConsolidationChartOfAccounts = _RptgItmHierNode.ConsolidationChartOfAccounts
                                                                         and $projection.ConsolidationReportingItem   = _RptgItmHierNode.ConsolidationReportingItem

  association [1..1] to I_CnsldtnChartOfAccounts as _ConsChartOfAccounts on  $projection.ConsolidationChartOfAccounts = _ConsChartOfAccounts.ConsolidationChartOfAccounts

{

      @ObjectModel.foreignKey.association: '_ConsChartOfAccounts'
  key itclg                   as ConsolidationChartOfAccounts,

      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy.association: '_RptgItmHierNode'
  key cast( item as fc_item ) as ConsolidationReportingItem,

      _ConsChartOfAccounts,

      _RptgItmHierNode,

      _Text
}
where
  itclass = 'REPT'
```
