---
name: I_CNSLDTNMATLGRPHIERNODE
description: Cnsldtnmatlgrphiernode
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
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNMATLGRPHIERNODE

**Cnsldtnmatlgrphiernode**

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
@Analytics: {
  dataExtraction.enabled: true,
  technicalName: 'ICSMATERIALGROUPHIERNODE'
}
@Hierarchy.parentChild: [{
  recurse: {
    parent: ['ParentNode'],
    child:  ['HierarchyNode']
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
    sizeCategory: #L
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
  sapObjectNodeType.name: 'CnsldtnMaterialGroupHierNode'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Material Group - Hierarchy Node'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_CnsldtnMatlGrpHierNode
  as select from P_CnsldtnUnivHierNode_3(P_HierarchyType : 'CS22', P_MasterDataType : 'MATKL_MM' ) as _HierarchyNode

  association [0..1] to I_CnsldtnMaterialGroup     as _MaterialGroup on  $projection.MaterialGroup = _MaterialGroup.MaterialGroup

  association [1..1] to I_CnsldtnMaterialGroupHier as _Hierarchy     on  $projection.CnsldtnMaterialGroupHierarchy = _Hierarchy.CnsldtnMaterialGroupHierarchy
                                                                     and $projection.ValidityEndDate               = _Hierarchy.ValidityEndDate

  association [0..*] to I_CnsldtnMatlGrpHierNodeT  as _Text          on  $projection.CnsldtnMaterialGroupHierarchy = _Text.CnsldtnMaterialGroupHierarchy // no validity date condition due to limitation in analytic engine
                                                                     and $projection.HierarchyNode                 = _Text.HierarchyNode
                                                                     and $projection.MaterialGroup                 = ''

{

         @Consumption.filter: {
           mandatory : true,
           selectionType : #SINGLE,
           multipleSelections : false
         }
         @ObjectModel: {
           foreignKey.association: '_Hierarchy',
           sapObjectNodeTypeReference: 'CnsldtnMaterialGroupHierarchy'
         }
  key    cast( _HierarchyNode.UniversalHierarchy as fincs_materialgrouphierarchy preserving type ) as CnsldtnMaterialGroupHierarchy,

         @ObjectModel.text.association: '_Text'
  key    _HierarchyNode.HierarchyNode,

         @Consumption.filter: {
           mandatory : true,
           selectionType : #SINGLE,
           multipleSelections : false
         }
         @Semantics.businessDate.to: true
  key    _HierarchyNode.ValidityEndDate,

         @Semantics.businessDate.from: true
         _HierarchyNode.ValidityStartDate,

         _HierarchyNode.ParentNode,

         _HierarchyNode.HierarchyVersion,

         @ObjectModel: {
           foreignKey.association: '_MaterialGroup',
           sapObjectNodeTypeReference: 'CnsldtnMaterialGroup'
         }
         @Consumption.valueHelpDefinition: [{
           entity: {
             name: 'I_CnsldtnMaterialGroupVH',
             element: 'MaterialGroup'}
         }]
         _HierarchyNode.MaterialGroup,

         _HierarchyNode.HierarchyNodeSequence,
         _HierarchyNode.HierarchyNodeLevel,
         _HierarchyNode.NodeType,


         /* associations */
         _Text,
         _MaterialGroup,
         _Hierarchy
};
```
