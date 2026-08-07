---
name: I_CNSLDTNDISTRCHANNELHIERNODE
description: Cnsldtndistrchannelhiernode
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
# I_CNSLDTNDISTRCHANNELHIERNODE

**Cnsldtndistrchannelhiernode**

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
  technicalName: 'ICSDISTRCHANNELHIERNODE'

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
  sapObjectNodeType.name: 'CnsldtnDistrChannelHierNode'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@EndUserText.label: 'Cnsldtn Distr Channel Hierarchy Node'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_CnsldtnDistrChannelHierNode
  as select from P_CnsldtnUnivHierNode_3(P_HierarchyType : 'CS28', P_MasterDataType : 'VTWEG' ) as _HierarchyNode

  association [0..1] to I_CnsldtnDistributionChannel   as _DistributionChannel on  $projection.DistributionChannel = _DistributionChannel.DistributionChannel

  association [1..1] to I_CnsldtnDistrChannelHierarchy as _Hierarchy           on  $projection.CnsldtnDistrChannelHierarchy = _Hierarchy.CnsldtnDistrChannelHierarchy
                                                                               and $projection.ValidityEndDate              = _Hierarchy.ValidityEndDate

  association [0..*] to I_CnsldtnDistrChannelHierNodeT as _Text                on  $projection.CnsldtnDistrChannelHierarchy = _Text.CnsldtnDistrChannelHierarchy
                                                                               and $projection.HierarchyNode                = _Text.HierarchyNode
                                                                               and $projection.DistributionChannel          = ''
{

      @Consumption.filter: {
        mandatory : true,
        selectionType : #SINGLE,
        multipleSelections : false
      }
      @ObjectModel: {
        foreignKey.association: '_Hierarchy',
        sapObjectNodeTypeReference: 'CnsldtnDistrChannelHierarchy'
      }
  key cast(_HierarchyNode.UniversalHierarchy as fincs_distrchannelhierarchy preserving type ) as CnsldtnDistrChannelHierarchy,

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
        foreignKey.association: '_DistributionChannel',
        sapObjectNodeTypeReference: 'CnsldtnDistributionChannel'
      }
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnDistributionChannelVH',
          element: 'DistributionChannel'
        }
      }]
      _HierarchyNode.DistributionChannel,

      _HierarchyNode.HierarchyNodeSequence,
      _HierarchyNode.HierarchyNodeLevel,
      _HierarchyNode.NodeType,


      /* associations */
      _Text,
      _DistributionChannel,
      _Hierarchy
}
```
