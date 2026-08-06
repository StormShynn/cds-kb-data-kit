---
name: I_CNSLDTNFSITEMHIERNODE_2
description: Cnsldtnfsitemhiernode 2
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
# I_CNSLDTNFSITEMHIERNODE_2

**Cnsldtnfsitemhiernode 2**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `['ParentNode']` | `parent: ['ParentNode']` |
| `['HierarchyNode']` | `child: ['HierarchyNode']` |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICCFSITMHIER2',
  compiler.compareFilter: true
  }
@Analytics: {
  dataExtraction.enabled: true
  }
@Hierarchy.parentChild: [{
  recurse:          { parent:    ['ParentNode'],
                      child:     ['HierarchyNode']   },
  siblingsOrder:    [{ by:       'HierarchyNodeSequence',
                      direction: #ASC   }],
  directory:        '_Hierarchy'
}]
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  ignorePropagatedAnnotations:true
  }
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #XL},
  dataCategory: #HIERARCHY,
  representativeKey: 'HierarchyNode',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION ],
    sapObjectNodeType.name: 'CnsldtnFSItemHierarchyNode'
  }
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Consolidation FS Item - Hierarchy Node'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view I_CnsldtnFSItemHierNode_2
  as select from P_CnsldtnUnivHierNode_3(P_HierarchyType : 'CS15', P_MasterDataType : 'RITEM' ) as _HierarchyNode

  association [0..1] to I_CnsldtnFSItem_2             as _FSItem                 on  $projection.ConsolidationChartOfAccounts  = _FSItem.ConsolidationChartOfAccounts
                                                                                 and $projection.CnsldtnFinancialStatementItem = _FSItem.CnsldtnFinancialStatementItem

  association [1..1] to I_CnsldtnChartOfAccounts      as _CnsldtnChartOfAccounts on  $projection.ConsolidationChartOfAccounts = _CnsldtnChartOfAccounts.ConsolidationChartOfAccounts

  association [1..1] to I_CnsldtnFSItemHierarchy_2    as _Hierarchy              on  $projection.ConsolidationChartOfAccounts = _Hierarchy.ConsolidationChartOfAccounts
                                                                                 and $projection.CnsldtnFSItemHierarchy       = _Hierarchy.CnsldtnFSItemHierarchy
                                                                                 and $projection.ValidityEndDate              = _Hierarchy.ValidityEndDate

  association [0..*] to I_CnsldtnFSItemHierNodeText_2 as _Text                   on  $projection.ConsolidationChartOfAccounts  = _Text.ConsolidationChartOfAccounts
                                                                                 and $projection.CnsldtnFSItemHierarchy        = _Text.CnsldtnFSItemHierarchy
                                                                                 and $projection.HierarchyNode                 = _Text.HierarchyNode
                                                                                 and $projection.CnsldtnFinancialStatementItem = ''

  association [1..1] to I_CnsldtnGlobalSetting        as _GlobalSetting          on  _GlobalSetting.SequenceNumber = '1'

{
      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @ObjectModel: {
        foreignKey.association: '_CnsldtnChartOfAccounts',
        sapObjectNodeTypeReference: 'ConsolidationChartOfAccounts' }
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CnsldtnChartOfAccountsVH',
                                                     element: 'ConsolidationChartOfAccounts' } }]
  key _HierarchyNode.ConsolidationChartOfAccounts,

      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @ObjectModel: {
        foreignKey.association: '_Hierarchy',
        sapObjectNodeTypeReference: 'ConsolidationFSItemHierarchy' }
  key cast( substring( _HierarchyNode.UniversalHierarchy, 9, 10 ) as fincs_fsitemhierarchy preserving type ) as CnsldtnFSItemHierarchy,

      @ObjectModel.text.association: '_Text'
  key _HierarchyNode.HierarchyNode,

      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @Semantics.businessDate.to: true
  key _HierarchyNode.ValidityEndDate,

      @Semantics.businessDate.from: true
      _HierarchyNode.ValidityStartDate,

      _HierarchyNode.ParentNode,

      _HierarchyNode.HierarchyVersion,

      @ObjectModel:{
         foreignKey.association: '_FSItem',
         sapObjectNodeTypeReference: 'CnsldtnFinancialStatementItem' }
      @Consumption.valueHelpDefinition: [{
        entity: { name: 'I_CnsldtnFSItemVH',
                  element: 'CnsldtnFinancialStatementItem' },
        additionalBinding: [{ localElement: 'ConsolidationChartOfAccounts', element: 'ConsolidationChartOfAccounts', usage: #FILTER_AND_RESULT }]
      }]
      _HierarchyNode.CnsldtnFinancialStatementItem,

      _HierarchyNode.HierarchyNodeSequence,

      _HierarchyNode.HierarchyNodeLevel,

      _HierarchyNode.NodeType,

      //  CE2011 sign reversal
      @Semantics.signReversalIndicator: true
      cast(
        case when _GlobalSetting.CnsldtnCustomSignLogicIsActive = 'X'
             then ''
             else _HierarchyNode.SignIsInverted 
        end as fincs_signisinverted ) as SignIsInverted,
      
      
      /* associations */
      _Text,
      _FSItem,
      _Hierarchy,
      _CnsldtnChartOfAccounts
};
```
