---
name: I_CNSLDTNINDUSTRYHIERARCHYNODE
description: Cnsldtnindustryhierarchynode
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
# I_CNSLDTNINDUSTRYHIERARCHYNODE

**Cnsldtnindustryhierarchynode**

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
    technicalName: 'ICSINDUSTRYHIERARCHYNODE'
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
                          #ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE ],
  sapObjectNodeType.name: 'CnsldtnIndustryHierarchyNode'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Industry Hierarchy Node'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_CnsldtnIndustryHierarchyNode
  as select from P_CnsldtnUnivHierNode_3(P_HierarchyType : 'CS30', P_MasterDataType : 'BRSCH' ) as _HierarchyNode

  association [0..1] to I_CnsldtnIndustry          as _Industry  on  $projection.Industry = _Industry.Industry

  association [1..1] to I_CnsldtnIndustryHierarchy as _Hierarchy on  $projection.CnsldtnIndustryHierarchy = _Hierarchy.CnsldtnIndustryHierarchy
                                                                 and $projection.ValidityEndDate          = _Hierarchy.ValidityEndDate

  association [0..*] to I_CnsldtnIndustryHierNodeT as _Text      on  $projection.CnsldtnIndustryHierarchy = _Text.CnsldtnIndustryHierarchy
                                                                 and $projection.HierarchyNode            = _Text.HierarchyNode
                                                                 and $projection.Industry                 = ''
{

      @Consumption.filter: {
        mandatory : true,
        selectionType : #SINGLE,
        multipleSelections : false
      }
      @ObjectModel: {
        foreignKey.association: '_Hierarchy',
        sapObjectNodeTypeReference: 'CnsldtnIndustryHierarchy'
      }
  key cast(_HierarchyNode.UniversalHierarchy as fincs_industryhierarchy preserving type ) as CnsldtnIndustryHierarchy,

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
        foreignKey.association: '_Industry'
//        sapObjectNodeTypeReference: 'CnsldtnIndustry' // global field name requires rework regarding the representation term
      }
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnIndustryVH',
          element: 'Industry'
        }
      }]
      _HierarchyNode.Industry,

      _HierarchyNode.HierarchyNodeSequence,
      _HierarchyNode.HierarchyNodeLevel,
      _HierarchyNode.NodeType,


      /* associations */
      _Text,
      _Industry,
      _Hierarchy
}
```
