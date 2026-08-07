---
name: I_CNSLDTNSUBITEMHIERNODE_2
description: "Cnsldtnsubitemhiernode 2"
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
# I_CNSLDTNSUBITEMHIERNODE_2

**Cnsldtnsubitemhiernode 2**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `['ParentNode']` |  | |  | `parent: ['ParentNode']` |  |  |
| `['HierarchyNode']` |  | |  | `child: ['HierarchyNode']` |  |  |

## Source Code

```abap
@Analytics: {
  dataExtraction.enabled: true
}
@Hierarchy.parentChild: [{
  recurse: {
    parent: ['ParentNode'],
    child:     ['HierarchyNode']
  },
  siblingsOrder: [{
    by: 'HierarchyNodeSequence',
    direction: #ASC
  }],
  directory: '_Hierarchy'
}]
@AccessControl:{
  authorizationCheck: #MANDATORY
}
@Metadata:{
  ignorePropagatedAnnotations: true
}
@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #M
  },
  dataCategory: #HIERARCHY,
  representativeKey: 'HierarchyNode',
  modelingPattern: #ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE
                          ],
  sapObjectNodeType.name: 'CnsldtnSubitemHierarchyNode'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@EndUserText.label: 'Consolidation Subitem - Hierarchy Node'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_CnsldtnSubitemHierNode_2
  as select from P_CnsldtnUnivHierNode_3(P_HierarchyType : 'CS18', P_MasterDataType : 'SITEM' ) as _HierarchyNode

  association [1..1] to I_CnsldtnSubitemCategory_2  as _SubitemCategory on  $projection.CnsldtnSubitemCategory = _SubitemCategory.CnsldtnSubitemCategory

  association [0..1] to I_CnsldtnSubitem_2          as _Subitem         on  $projection.CnsldtnSubitemCategory = _Subitem.CnsldtnSubitemCategory
                                                                        and $projection.CnsldtnSubitem         = _Subitem.CnsldtnSubitem

  association [1..1] to I_CnsldtnSubitemHierarchy   as _Hierarchy       on  $projection.CnsldtnSubitemCategory        = _Hierarchy.CnsldtnSubitemCategory
                                                                        and $projection.ConsolidationSubitemHierarchy = _Hierarchy.ConsolidationSubitemHierarchy
                                                                        and $projection.ValidityEndDate               = _Hierarchy.ValidityEndDate

  association [0..*] to I_CnsldtnSubitemHierNodeT_2 as _Text            on  $projection.CnsldtnSubitemCategory        = _Text.CnsldtnSubitemCategory
                                                                        and $projection.ConsolidationSubitemHierarchy = _Text.ConsolidationSubitemHierarchy
                                                                        and $projection.HierarchyNode                 = _Text.HierarchyNode
                                                                        and $projection.CnsldtnSubitem                = ''

{

         @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
         @ObjectModel.foreignKey.association: '_SubitemCategory'
         @Consumption.valueHelpDefinition: [{
           entity: {
             name: 'I_CnsldtnSubitemCategoryVH_2',
             element: 'CnsldtnSubitemCategory' }
         }]
  key    _HierarchyNode.CnsldtnSubitemCategory,

         @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
         @ObjectModel.foreignKey.association: '_Hierarchy'
  key    cast( _HierarchyNode.CnsldtnUniversalHierarchy as fincs_subitemhierarchy preserving type ) as ConsolidationSubitemHierarchy,

         @ObjectModel.text.association: '_Text'
  key    _HierarchyNode.HierarchyNode,

         @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
         @Semantics.businessDate.to: true
  key    _HierarchyNode.ValidityEndDate,

         @Semantics.businessDate.from: true
         _HierarchyNode.ValidityStartDate,

         _HierarchyNode.ParentNode,

         _HierarchyNode.HierarchyVersion,

         @ObjectModel: {
           foreignKey.association: '_Subitem',
           sapObjectNodeTypeReference: 'ConsolidationSubitem'
           }
         @Consumption.valueHelpDefinition: [{
           entity: {
             name: 'I_CnsldtnSubitemVH_2',
             element: 'CnsldtnSubitem' },
           additionalBinding: [{
             localElement: 'CnsldtnSubitem',
             element: 'CnsldtnSubitem',
             usage: #FILTER_AND_RESULT }]
         }]
         _HierarchyNode.CnsldtnSubitem,

         _HierarchyNode.HierarchyNodeSequence,

         _HierarchyNode.HierarchyNodeLevel,

         _HierarchyNode.NodeType,


         _Text,
         _Subitem,
         _Hierarchy,
         _SubitemCategory
};
```
