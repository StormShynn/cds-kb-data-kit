---
name: I_CNSLDTNDIVISIONHIERARCHYNODE
description: Cnsldtndivisionhierarchynode
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
# I_CNSLDTNDIVISIONHIERARCHYNODE

**Cnsldtndivisionhierarchynode**

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
  dataExtraction.enabled: true,
    technicalName: 'ICSDIVISIONHIERARCHYNODE'
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
  sapObjectNodeType.name: 'CnsldtnDivisionHierarchyNode'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Division Hierarchy Node'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_CnsldtnDivisionHierarchyNode
  as select from P_CnsldtnUnivHierNode_3(P_HierarchyType : 'CS29', P_MasterDataType : 'SPART' ) as _HierarchyNode

  association [0..1] to I_CnsldtnDivision          as _Division  on  $projection.Division = _Division.Division

  association [1..1] to I_CnsldtnDivisionHierarchy as _Hierarchy on  $projection.CnsldtnDivisionHierarchy = _Hierarchy.CnsldtnDivisionHierarchy
                                                                 and $projection.ValidityEndDate          = _Hierarchy.ValidityEndDate

  association [0..*] to I_CnsldtnDivisionHierNodeT as _Text      on  $projection.CnsldtnDivisionHierarchy = _Text.CnsldtnDivisionHierarchy
                                                                 and $projection.HierarchyNode            = _Text.HierarchyNode
                                                                 and $projection.Division                 = ''
{

      @Consumption.filter: {
        mandatory : true,
        selectionType : #SINGLE,
        multipleSelections : false
      }
      @ObjectModel: {
        foreignKey.association: '_Hierarchy',
        sapObjectNodeTypeReference: 'CnsldtnDivisionHierarchy'
      }
  key cast(_HierarchyNode.UniversalHierarchy as fincs_divisionhierarchy preserving type ) as CnsldtnDivisionHierarchy,

      @ObjectModel.text.association: '_Text'
  key _HierarchyNode.HierarchyNode                                                        as HierarchyNode,

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
        foreignKey.association: '_Division',
        sapObjectNodeTypeReference: 'CnsldtnDivision'
      }
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnDivisionVH',
          element: 'Division'
        }
      }]
      _HierarchyNode.Division,
      
      _HierarchyNode.HierarchyNodeSequence,
      _HierarchyNode.HierarchyNodeLevel,
      _HierarchyNode.NodeType,


      /* associations */
      _Text,
      _Division,
      _Hierarchy
}
```
