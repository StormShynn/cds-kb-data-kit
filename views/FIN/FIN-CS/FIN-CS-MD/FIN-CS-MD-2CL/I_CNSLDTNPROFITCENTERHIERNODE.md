---
name: I_CNSLDTNPROFITCENTERHIERNODE
description: CNSLDTNProfit CenterHIERNODE
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
  - profit-center
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:ProfitCenter
---
# I_CNSLDTNPROFITCENTERHIERNODE

**CNSLDTNProfit CenterHIERNODE**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `['ParentNode']` |  | |  | `parent: ['ParentNode']` |
| `['HierarchyNode']` |  | |  | `child: ['HierarchyNode']` |

## Source Code

```abap
@AbapCatalog: {
    sqlViewName: 'ICCPRFTCTRHN',
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
@AccessControl:{
  authorizationCheck: #MANDATORY
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  ignorePropagatedAnnotations: true
  }
@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #M},
  dataCategory: #HIERARCHY,
  representativeKey: 'HierarchyNode',
  modelingPattern: #ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE
                          ],
  sapObjectNodeType.name: 'CnsldtnProfitCenterHierNode'
  }
@VDM.viewType: #BASIC
@EndUserText.label: 'Cnsldtn Profit Center - Hierarchy Node'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_CnsldtnProfitCenterHierNode
  as select from P_CnsldtnUnivHierNode_3( P_HierarchyType: 'CS04', P_MasterDataType : 'PRCTR' ) as _HierarchyNode

  association [1..1] to I_CnsldtnControllingArea       as _ControllingArea on  $projection.ControllingArea = _ControllingArea.ControllingArea

  association [0..1] to I_CnsldtnProfitCenter          as _ProfitCenter    on  $projection.ProfitCenter    = _ProfitCenter.ProfitCenter
                                                                           and $projection.ControllingArea = _ProfitCenter.ControllingArea

  association [1..1] to I_CnsldtnProfitCenterHierarchy as _Hierarchy       on  $projection.ConsolidationPrftCtrHierarchy = _Hierarchy.ConsolidationPrftCtrHierarchy
                                                                           and $projection.ControllingArea               = _Hierarchy.ControllingArea
                                                                           and $projection.ValidityEndDate               = _Hierarchy.ValidityEndDate

  association [0..*] to I_CnsldtnProfitCenterHierNodeT as _Text            on  $projection.ControllingArea               = _Text.ControllingArea
                                                                           and $projection.ConsolidationPrftCtrHierarchy = _Text.ConsolidationPrftCtrHierarchy
                                                                           and $projection.HierarchyNode                 = _Text.HierarchyNode
                                                                           and $projection.ProfitCenter                  = ''

{
      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @ObjectModel: {
        sapObjectNodeTypeReference: 'CnsldtnControllingArea',
        foreignKey.association: '_ControllingArea' }
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnControllingAreaVH',
          element: 'ControllingArea'
        }
      }]
  key ControllingArea,

      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @ObjectModel: {
        sapObjectNodeTypeReference: 'CnsldtnProfitCenterHierarchy',
        foreignKey.association: '_Hierarchy' }
  key cast(_HierarchyNode.CnsldtnUniversalHierarchy as fincs_profitcenterhierarchy preserving type ) as ConsolidationPrftCtrHierarchy,

      @ObjectModel.text.association: '_Text'
  key _HierarchyNode.HierarchyNode                                                                   as HierarchyNode,

      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @Semantics.businessDate.to: true
  key _HierarchyNode.ValidityEndDate                                                                 as ValidityEndDate,

      @Semantics.businessDate.from: true
      _HierarchyNode.ValidityStartDate,

      _HierarchyNode.ParentNode,

      @VDM.lifecycle.status:    #DEPRECATED
      _HierarchyNode.HierarchyVersion,

      @ObjectModel: {
        sapObjectNodeTypeReference: 'CnsldtnProfitCenter',
        foreignKey.association: '_ProfitCenter' }
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnProfitCenterVH',
          element: 'ProfitCenter'},
        additionalBinding: [{ localElement: 'ControllingArea', element: 'ControllingArea', usage: #FILTER_AND_RESULT }]
      }]
      ProfitCenter,

      _HierarchyNode.HierarchyNodeSequence,
      _HierarchyNode.HierarchyNodeLevel,
      _HierarchyNode.NodeType,


      _Text,
      _ProfitCenter,
      _Hierarchy,
      _ControllingArea
};
```
