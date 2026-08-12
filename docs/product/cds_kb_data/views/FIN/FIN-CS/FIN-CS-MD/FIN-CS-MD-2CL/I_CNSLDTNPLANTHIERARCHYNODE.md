---
name: I_CNSLDTNPLANTHIERARCHYNODE
description: "Cnsldtnplanthierarchynode"
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
  - plant
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:Plant
---
# I_CNSLDTNPLANTHIERARCHYNODE

**Cnsldtnplanthierarchynode**

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
  sapObjectNodeType.name: 'CnsldtnPlantHierarchyNode'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Plant Hierarchy Node'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_CnsldtnPlantHierarchyNode
  as select from P_CnsldtnUnivHierNode_3(P_HierarchyType : 'CS31', P_MasterDataType : 'WERKS' ) as _HierarchyNode

  association [0..1] to I_CnsldtnPlant               as _Plant     on  $projection.Plant = _Plant.Plant

  association [1..1] to I_CnsldtnPlantHierarchy      as _Hierarchy on  $projection.CnsldtnPlantHierarchy = _Hierarchy.CnsldtnPlantHierarchy
                                                                   and $projection.ValidityEndDate       = _Hierarchy.ValidityEndDate

  association [0..*] to I_CnsldtnPlantHierarchyNodeT as _Text      on  $projection.CnsldtnPlantHierarchy = _Text.CnsldtnPlantHierarchy
                                                                   and $projection.HierarchyNode         = _Text.HierarchyNode
                                                                   and $projection.Plant                 = ''
{

      @Consumption.filter: {
        mandatory : true,
        selectionType : #SINGLE,
        multipleSelections : false
      }
      @ObjectModel: {
        foreignKey.association: '_Hierarchy',
        sapObjectNodeTypeReference: 'CnsldtnPlantHierarchy'
      }
  key cast(_HierarchyNode.UniversalHierarchy as fincs_planthierarchy preserving type ) as CnsldtnPlantHierarchy,

      @ObjectModel.text.association: '_Text'
  key _HierarchyNode.HierarchyNode                                                     as HierarchyNode,

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
        foreignKey.association: '_Plant',
        sapObjectNodeTypeReference: 'CnsldtnPlant'
      }
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnPlantVH',
          element: 'Plant'
        }
      }]
      _HierarchyNode.Plant,
      
      _HierarchyNode.HierarchyNodeSequence,
      _HierarchyNode.HierarchyNodeLevel,
      _HierarchyNode.NodeType,


      /* associations */
      _Text,
      _Plant,
      _Hierarchy
}
```
