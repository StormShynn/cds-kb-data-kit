---
name: I_CNSLDTNRPTGITEMHIERNODE_2
description: "Cnsldtnrptgitemhiernode 2"
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
  - item-level
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNRPTGITEMHIERNODE_2

**Cnsldtnrptgitemhiernode 2**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationChartOfAccounts` | ✓ | |  | `cast( left( _HierarchyNode.HierarchyNodeClass, 2) as fincs_conschartofaccounts preserving type )` |  |  |
| `ConsolidationReportingItemHier` | ✓ | |  | `cast( substring( _HierarchyNode.UniversalHierHierarchyID, 9, 10 ) as fincs_reportingitemhierarchy preserving type )` |  |  |
| `HierarchyNode` | ✓ | | `_HierarchyNode` | `HierarchyNode` |  |  |
| `ValidityEndDate` | ✓ | | `_HierarchyNode` | `ValidityEndDate` |  |  |
| `ValidityStartDate` |  | | `_HierarchyNode` | `ValidityStartDate` |  |  |
| `ParentNode` |  | | `_HierarchyNode` | `ParentNode` |  |  |
| `HierarchyVersion` |  | | `_HierarchyNode` | `HierarchyVersion` |  |  |
| `ConsolidationReportingItem` |  | |  | `cast( left(_HierarchyNode.UniversalHierarchyLeafValue, 10) as fincs_reportingitem preserving type )` |  |  |
| `HierarchyNodeSequence` |  | | `_HierarchyNode` | `HierarchyNodeSequence` |  |  |
| `HierarchyNodeLevel` |  | | `_HierarchyNode` | `HierarchyNodeLevel` |  |  |
| `NodeType` |  | | `_HierarchyNode` | `NodeType` |  |  |
| `_ReportingItem` | | ✓ | | | | |
| `_Hierarchy` | | ✓ | | | | |
| `_CnsldtnChartOfAccounts` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ReportingItem` | `I_CnsldtnRptgItem_2` | [0..1] |
| `_Hierarchy` | `I_CnsldtnRptgItemHierarchy_2` | [1..1] |
| `_CnsldtnChartOfAccounts` | `I_CnsldtnChartOfAccounts` | [1..1] |
| `_Text` | `I_CnsldtnRptgItemHierNodeT_2` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICCRIHIERNODE2',
  compiler.compareFilter: true
}
@Analytics: {
  dataExtraction.enabled: true
  }
@Hierarchy.parentChild: {
  recurse:          { parent:    'ParentNode',
                      child:     'HierarchyNode'   },
  siblingsOrder:    [{ by:       'HierarchyNodeSequence',
                      direction: #ASC   }],
  directory:        '_Hierarchy'
}
@AccessControl:{
  authorizationCheck: #CHECK
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  ignorePropagatedAnnotations:true
  }
@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #XL
  },
  dataCategory: #HIERARCHY,
  representativeKey: 'HierarchyNode',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION ],
  sapObjectNodeType.name: 'CnsldtnRptgItemHierNode'
}
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Reporting Item - Hier Node'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_CnsldtnRptgItemHierNode_2
  as select from P_CnsldtnUnivHierNode(P_HierarchyType : 'CS16', P_MasterDataType : 'RITEM' ) as _HierarchyNode
  
  association [0..1] to I_CnsldtnRptgItem_2          as _ReportingItem          on  $projection.ConsolidationChartOfAccounts = _ReportingItem.ConsolidationChartOfAccounts
                                                                                and $projection.ConsolidationReportingItem   = _ReportingItem.ConsolidationReportingItem

  association [1..1] to I_CnsldtnRptgItemHierarchy_2 as _Hierarchy              on  $projection.ConsolidationChartOfAccounts   = _Hierarchy.ConsolidationChartOfAccounts
                                                                                and $projection.ConsolidationReportingItemHier = _Hierarchy.ConsolidationReportingItemHier
                                                                                and $projection.ValidityEndDate                = _Hierarchy.ValidityEndDate

  association [1..1] to I_CnsldtnChartOfAccounts     as _CnsldtnChartOfAccounts on  $projection.ConsolidationChartOfAccounts = _CnsldtnChartOfAccounts.ConsolidationChartOfAccounts

  association [0..*] to I_CnsldtnRptgItemHierNodeT_2 as _Text                   on  $projection.ConsolidationChartOfAccounts   = _Text.ConsolidationChartOfAccounts
                                                                                and $projection.ConsolidationReportingItemHier = _Text.ConsolidationReportingItemHier
                                                                                and $projection.HierarchyNode                  = _Text.HierarchyNode
                                                                                and $projection.ConsolidationReportingItem     = ''
{

      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @ObjectModel:{
        foreignKey.association: '_CnsldtnChartOfAccounts',
        sapObjectNodeTypeReference: 'ConsolidationChartOfAccounts' }
  key cast( left( _HierarchyNode.HierarchyNodeClass, 2) as fincs_conschartofaccounts preserving type )                    as ConsolidationChartOfAccounts,

      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @ObjectModel:{
        foreignKey.association: '_Hierarchy',
        sapObjectNodeTypeReference: 'CnsldtnRptgItemHierarchy' }
  key cast( substring( _HierarchyNode.UniversalHierHierarchyID, 9, 10 ) as fincs_reportingitemhierarchy preserving type ) as ConsolidationReportingItemHier,

      @ObjectModel.text.association: '_Text'
  key _HierarchyNode.HierarchyNode,

      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @Semantics.businessDate.to: true
  key _HierarchyNode.ValidityEndDate,

      @Semantics.businessDate.from: true
      _HierarchyNode.ValidityStartDate,

      _HierarchyNode.ParentNode,

      _HierarchyNode.HierarchyVersion,

      @ObjectModel: {
        foreignKey.association: '_ReportingItem',
        sapObjectNodeTypeReference: 'ConsolidationReportingItem' }
      cast( left(_HierarchyNode.UniversalHierarchyLeafValue, 10) as fincs_reportingitem preserving type )                 as ConsolidationReportingItem,

      _HierarchyNode.HierarchyNodeSequence,

      _HierarchyNode.HierarchyNodeLevel,

      _HierarchyNode.NodeType,


      _ReportingItem,
      _Hierarchy,
      _CnsldtnChartOfAccounts,
      _Text
}
where
  // 2108 HL, STS: to be removed if hierarchy is time dependent
     _HierarchyNode.ValidityEndDate = '99991231'
  or _HierarchyNode.ValidityEndDate = '00000000';
```
