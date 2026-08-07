---
name: I_CNSLDTNRPTGITEM
description: Cnsldtnrptgitem
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
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ConsolidationChartOfAccounts` | ✓ | |  | `itclg` |
| `ConsolidationReportingItem` | ✓ | |  | `cast( item as fc_item )` |
| `_Text` | | ✓ | | |
| `_RptgItmHierNode` | | ✓ | | |
| `_ConsChartOfAccounts` | | ✓ | | |

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
