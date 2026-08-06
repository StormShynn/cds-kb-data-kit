---
name: I_CNSLDTNCOSTCENTERHIERNODE
description: CNSLDTNCost CenterHIERNODE
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
  - cost-center
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:CostCenter
---
# I_CNSLDTNCOSTCENTERHIERNODE

**CNSLDTNCost CenterHIERNODE**

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
  sqlViewName: 'ICCCOSTCENTERHN',
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
    serviceQuality: #A,
    sizeCategory: #L},
  dataCategory: #HIERARCHY,
  representativeKey: 'HierarchyNode',
  modelingPattern: #ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE
                          ],
  sapObjectNodeType.name: 'CnsldtnCostCenterHierarchyNode'
  }
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Consolidation Cost Center - Hier Node'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_CnsldtnCostCenterHierNode
  as select from P_CnsldtnUnivHierNode_3(P_HierarchyType : 'CS03', P_MasterDataType : 'RCNTR' ) as _HierarchyNode

  association [1..1] to I_CnsldtnControllingArea     as _ControllingArea on  $projection.ControllingArea = _ControllingArea.ControllingArea

  association [0..1] to I_CnsldtnCostCenter          as _CostCenter      on  $projection.CostCenter      = _CostCenter.CostCenter
                                                                         and $projection.ControllingArea = _CostCenter.ControllingArea

  association [1..1] to I_CnsldtnCostCenterHierarchy as _Hierarchy       on  $projection.CnsldtnCostCenterHierarchy = _Hierarchy.CnsldtnCostCenterHierarchy
                                                                         and $projection.ControllingArea            = _Hierarchy.ControllingArea
                                                                         and $projection.ValidityEndDate            = _Hierarchy.ValidityEndDate

  association [0..*] to I_CnsldtnCostCenterHierNodeT as _Text            on  $projection.ControllingArea            = _Text.ControllingArea
                                                                         and $projection.CnsldtnCostCenterHierarchy = _Text.CnsldtnCostCenterHierarchy
                                                                         and $projection.HierarchyNode              = _Text.HierarchyNode
                                                                         and $projection.CostCenter                 = ''

{
      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @ObjectModel:{
        sapObjectNodeTypeReference: 'CnsldtnControllingArea',
        foreignKey.association: '_ControllingArea' }
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnControllingAreaVH',
          element: 'ControllingArea'
        }
      }]
  key _HierarchyNode.ControllingArea,

      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @ObjectModel:{
        sapObjectNodeTypeReference: 'CnsldtnCostCenterHierarchy',
        foreignKey.association: '_Hierarchy' }
  key cast(_HierarchyNode.CnsldtnUniversalHierarchy as fincs_costcenterhierarchy preserving type ) as CnsldtnCostCenterHierarchy,

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
        sapObjectNodeTypeReference: 'CnsldtnCostCenter',
        foreignKey.association: '_CostCenter' }
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnCostCenterVH',
          element: 'CostCenter' },
        additionalBinding: [{ localElement: 'ControllingArea', element: 'ControllingArea', usage: #FILTER_AND_RESULT }]
      }]
      _HierarchyNode.CostCenter,

      _HierarchyNode.HierarchyNodeSequence,
      _HierarchyNode.HierarchyNodeLevel,
      _HierarchyNode.NodeType,


      _Text,
      _CostCenter,
      _Hierarchy,
      _ControllingArea
};
```
