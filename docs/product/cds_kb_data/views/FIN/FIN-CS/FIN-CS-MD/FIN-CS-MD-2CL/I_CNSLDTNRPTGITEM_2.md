---
name: I_CNSLDTNRPTGITEM_2
description: "Cnsldtnrptgitem 2"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_CNSLDTNRPTGITEM_2

**Cnsldtnrptgitem 2**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationChartOfAccounts` | ✓ | | `_CnsldtnFSItem_2` | `ConsolidationChartOfAccounts` |  |  |
| `ConsolidationReportingItem` | ✓ | |  | `cast ( _CnsldtnFSItem_2.CnsldtnFinancialStatementItem as fincs_reportingitem preserving type )` |  |  |
| `CreationDateTime` |  | | `_CnsldtnFSItem_2` | `CreationDateTime` |  |  |
| `_Text` | | ✓ | | | | |
| `_HierarchyNode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnRptgItemText_2` | [0..*] |
| `_HierarchyNode` | `I_CnsldtnRptgItemHierNode_2` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICNSLDTNRITEM2',
  compiler.compareFilter: true
}
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@AccessControl:{
  authorizationCheck: #CHECK
  }
@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations: true
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
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
@Search.searchable: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Reporting Item'

define view I_CnsldtnRptgItem_2
  as select from I_CnsldtnFSItem_2 as _CnsldtnFSItem_2

  association [0..*] to I_CnsldtnRptgItemText_2     as _Text                   on  $projection.ConsolidationChartOfAccounts = _Text.ConsolidationChartOfAccounts
                                                                               and $projection.ConsolidationReportingItem   = _Text.ConsolidationReportingItem

  association [0..*] to I_CnsldtnRptgItemHierNode_2 as _HierarchyNode          on  $projection.ConsolidationChartOfAccounts = _HierarchyNode.ConsolidationChartOfAccounts
                                                                               and $projection.ConsolidationReportingItem   = _HierarchyNode.ConsolidationReportingItem
{
      @ObjectModel.foreignKey.association: '_CnsldtnChartOfAccounts'
      @Search:{
        ranking: #MEDIUM,
        fuzzinessThreshold: 0.8
        }
  key _CnsldtnFSItem_2.ConsolidationChartOfAccounts,

      @ObjectModel:{
        text.association: '_Text',
        hierarchy.association: '_HierarchyNode'
        }
      @Search:{
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.8
        }
  key cast ( _CnsldtnFSItem_2.CnsldtnFinancialStatementItem as fincs_reportingitem  preserving type ) as ConsolidationReportingItem,
      
      @Semantics.systemDateTime.createdAt
      _CnsldtnFSItem_2.CreationDateTime,


      _CnsldtnFSItem_2._CnsldtnChartOfAccounts,
      _HierarchyNode,
      _Text
}
where
  _CnsldtnFSItem_2.ConsolidationFSItemType = 'REPT';
```
