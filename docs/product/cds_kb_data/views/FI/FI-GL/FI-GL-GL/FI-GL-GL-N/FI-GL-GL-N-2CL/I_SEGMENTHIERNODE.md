---
name: I_SEGMENTHIERNODE
description: "Segmenthiernode"
app_component: FI-GL-GL-N-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - component:FI-GL-GL-N-2CL
  - lob:Finance
---
# I_SEGMENTHIERNODE

**Segmenthiernode**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-N-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `}` |  | |  | `recurse: { parent: 'ParentNode', child: 'HierarchyNode' }` |  |  |
| `'_Hierarchy'` |  | |  | `directory: '_Hierarchy'` |  |  |

## Source Code

```abap
@EndUserText.label: 'Segment Hierarchy Node'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFISEGMENTHN'
@Hierarchy.parentChild:
{ recurse:          {   parent: 'ParentNode',   child:  'HierarchyNode'   },
  siblingsOrder:    {   by: 'HierarchyNodeSequence',    direction: 'ASC'   },
  directory:        '_Hierarchy'
  }
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'HierarchyNode'
@ObjectModel.modelingPattern: #ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,
                                    #CDS_MODELING_ASSOCIATION_TARGET,
                                    #ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE,
                                    #EXTRACTION_DATA_SOURCE ]
@AbapCatalog.compiler.compareFilter:true
@AbapCatalog.preserveKey:true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel: {usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #XL},
  dataCategory: #HIERARCHY
}
@Analytics.dataExtraction.enabled: true
@ObjectModel.sapObjectNodeType.name:'SegmentHierarchyNode'

define view I_SegmentHierNode
  as select from hrrp_node_n

  association [0..*] to I_SegmentHierNodeT as _Text      on  $projection.SegmentHierarchy = _Text.SegmentHierarchy
                                                         and $projection.HierarchyNode    = _Text.HierarchyNode
                                                         and $projection.Segment          = '' // just to show that this association is only to be followed if FunctionalArea is blank
  //                                                               and $projection.ValidityEndDate  = _Text.ValidityEndDate

  association [0..1] to I_Segment          as _Segment   on  $projection.Segment = _Segment.Segment

  association [1..1] to I_SegmentHierarchy as _Hierarchy on  $projection.SegmentHierarchy = _Hierarchy.SegmentHierarchy
                                                         and $projection.ValidityEndDate  = _Hierarchy.ValidityEndDate


{
      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @ObjectModel.foreignKey.association: '_Hierarchy'
  key cast(hrrp_node_n.hryid as fis_hryid_segment preserving type ) as SegmentHierarchy,
      @ObjectModel.text.association: '_Text'
  key hrrp_node_n.hrynode                                           as HierarchyNode,
      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @Semantics.businessDate.to: true
  key cast(hrrp_node_n.hryvalto as fis_datbi preserving type )      as ValidityEndDate,
      @Semantics.businessDate.from: true
      cast(hrrp_node_n.hryvalfrom as fis_datab preserving type )    as ValidityStartDate,
      hrrp_node_n.parnode                                           as ParentNode,
      @VDM.lifecycle.status:    #DEPRECATED
      cast( '000000000000001' as hryversn )                         as HierarchyVersion,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_SegmentStdVH',
                     element: 'Segment' }
        }]
      @ObjectModel.foreignKey.association: '_Segment'
      hrrp_node_n.segment                                           as Segment,
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'HierarchyNodeSequence'
      concat(hrrp_node_n.hryseqnbr, hrrp_node_n.hrynode)            as SequenceNumber,
      hrrp_node_n.hryseqnbr                                         as HierarchyNodeSequence,
      hrrp_node_n.hrylevel                                          as HierarchyNodeLevel,
      hrrp_node_n.nodetype                                          as NodeType,

      _Text,
      _Segment,
      _Hierarchy

}
where
      hrrp_node_n.nodetype <> 'D'
  and hrrp_node_n.hrytyp   =  'GL01';
```
