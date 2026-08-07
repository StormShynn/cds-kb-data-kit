---
name: I_CNSLDTNPRODUCTGROUPHIERNODE
description: Cnsldtnproductgrouphiernode
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
  - product
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNPRODUCTGROUPHIERNODE

**Cnsldtnproductgrouphiernode**

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
@Analytics: {
  dataExtraction.enabled: true,
  technicalName: 'ICSPRODUCTGROUPHIERNODE'
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
  sapObjectNodeType.name: 'CnsldtnProductGroupHierNode'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Product Group Hierarchy Node'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_CnsldtnProductGroupHierNode
  as select from P_CnsldtnUnivHierNode_3(P_HierarchyType : 'CS33', P_MasterDataType : 'MATKL' ) as _HierarchyNode

  association [0..1] to I_CnsldtnProductGroup          as _ProductGroup on  $projection.ProductGroup = _ProductGroup.ProductGroup

  association [1..1] to I_CnsldtnProductGroupHierarchy as _Hierarchy    on  $projection.CnsldtnProductGroupHierarchy = _Hierarchy.CnsldtnProductGroupHierarchy
                                                                        and $projection.ValidityEndDate              = _Hierarchy.ValidityEndDate

  association [0..*] to I_CnsldtnProductGroupHierNodeT as _Text         on  $projection.CnsldtnProductGroupHierarchy = _Text.CnsldtnProductGroupHierarchy
                                                                        and $projection.HierarchyNode                = _Text.HierarchyNode
                                                                        and $projection.ProductGroup                 = ''
{

      @Consumption.filter: {
        mandatory : true,
        selectionType : #SINGLE,
        multipleSelections : false
      }
      @ObjectModel: {
        foreignKey.association: '_Hierarchy',
        sapObjectNodeTypeReference: 'CnsldtnProductGroupHierarchy'
      }
  key cast(_HierarchyNode.UniversalHierarchy as fincs_productgrouphierarchy preserving type ) as CnsldtnProductGroupHierarchy,

      @ObjectModel.text.association: '_Text'
  key _HierarchyNode.HierarchyNode                                                            as HierarchyNode,

      @Consumption.filter: {
        mandatory : true,
        selectionType : #SINGLE,
        multipleSelections : false
      }
      @Semantics.businessDate.to: true
  key _HierarchyNode.ValidityEndDate,

      @Semantics.businessDate.from: true
      _HierarchyNode.ValidityStartDate,

      _HierarchyNode.ParentNode,

      _HierarchyNode.HierarchyVersion,

      @ObjectModel: {
        foreignKey.association: '_ProductGroup',
        sapObjectNodeTypeReference: 'CnsldtnProductGroup'
      }
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnProductGroupVH',
          element: 'ProductGroup'
        }
      }]
      _HierarchyNode.ProductGroup,
      
      _HierarchyNode.HierarchyNodeSequence,
      _HierarchyNode.HierarchyNodeLevel,
      _HierarchyNode.NodeType,


      /* associations */
      _Text,
      _ProductGroup,
      _Hierarchy
}
```
