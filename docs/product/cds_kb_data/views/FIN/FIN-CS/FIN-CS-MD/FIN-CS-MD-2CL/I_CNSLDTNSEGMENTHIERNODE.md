---
name: I_CNSLDTNSEGMENTHIERNODE
description: "Cnsldtnsegmenthiernode"
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
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNSEGMENTHIERNODE

**Cnsldtnsegmenthiernode**

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
@AbapCatalog:{
  sqlViewName: 'ICCSEGHIERNODE',
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
    sizeCategory: #S}, // as I_Segment has #S
  dataCategory: #HIERARCHY,
  representativeKey: 'HierarchyNode',
  modelingPattern: #ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE
                          ],
  sapObjectNodeType.name: 'CnsldtnSegmentHierarchyNode'
  }
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Consolidation Segment - Hierarchy Node'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_CnsldtnSegmentHierNode
  as select from P_CnsldtnUnivHierNode_3( P_HierarchyType: 'CS01', P_MasterDataType : 'SEGMENT' ) as _HierarchyNode

  association [0..1] to I_CnsldtnSegment          as _Segment   on  $projection.Segment = _Segment.Segment

  association [1..1] to I_CnsldtnSegmentHierarchy as _Hierarchy on  $projection.ConsolidationSegmentHierarchy = _Hierarchy.ConsolidationSegmentHierarchy
                                                                and $projection.ValidityEndDate               = _Hierarchy.ValidityEndDate

  association [0..*] to I_CnsldtnSegmentHierNodeT as _Text      on  $projection.ConsolidationSegmentHierarchy = _Text.ConsolidationSegmentHierarchy
                                                                and $projection.HierarchyNode                 = _Text.HierarchyNode
                                                                and $projection.Segment                       = ''
{

      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @ObjectModel: {
        foreignKey.association: '_Hierarchy',
        sapObjectNodeTypeReference: 'CnsldtnSegmentHierarchy' }
  key cast(_HierarchyNode.CnsldtnUniversalHierarchy as fincs_segmenthierarchy preserving type ) as ConsolidationSegmentHierarchy,

      @ObjectModel.text.association: '_Text'
  key _HierarchyNode.HierarchyNode,

      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @Semantics.businessDate.to: true
  key _HierarchyNode.ValidityEndDate,

      @Semantics.businessDate.from: true
      _HierarchyNode.ValidityStartDate,

      _HierarchyNode.ParentNode,

      _HierarchyNode.HierarchyVersion,

      @ObjectModel: {
        foreignKey.association: '_Segment',
        sapObjectNodeTypeReference: 'CnsldtnSegment' }
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnSegmentVH',
          element: 'Segment'
        }
      }]
      Segment,
      _HierarchyNode.HierarchyNodeSequence,
      _HierarchyNode.HierarchyNodeLevel,
      _HierarchyNode.NodeType,


      _Text,
      _Segment,
      _Hierarchy
};
```
