---
name: I_FUNCTIONALAREAHIERNODE
description: Functionalareahiernode
app_component: FI-GL-GL-A-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_FUNCTIONALAREAHIERNODE

**Functionalareahiernode**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
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
@EndUserText.label: 'Functional Area Hierarchy Node'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIFNCAREAHN'
@Hierarchy.parentChild:
{ recurse:          {   parent: 'ParentNode',   child:  'HierarchyNode'   },
  siblingsOrder:    {   by: 'HierarchyNodeSequence',    direction: 'ASC'   },
  directory:        '_Hierarchy'
  }
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,#ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE, #EXTRACTION_DATA_SOURCE]
@AbapCatalog.compiler.compareFilter:true
@AbapCatalog.preserveKey:true
@ObjectModel: {usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #XL},
  dataCategory: #HIERARCHY
}
@ObjectModel.modelingPattern: #ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@ObjectModel.sapObjectNodeType.name:'FunctionalAreaHierarchyNode'

define view I_FunctionalAreaHierNode
  as select from hrrp_node_n

  association [0..*] to I_FunctionalAreaHierNodeT as _Text           on  $projection.FunctionalAreaHierarchy = _Text.FunctionalAreaHierarchy
                                                                     and $projection.HierarchyNode           = _Text.HierarchyNode
                                                                     and $projection.FunctionalArea          = '' // just to show that this association is only to be followed if FunctionalArea is blank

  association [0..1] to I_FunctionalArea          as _FunctionalArea on  $projection.FunctionalArea = _FunctionalArea.FunctionalArea

  association [1..1] to I_FunctionalAreaHierarchy as _Hierarchy      on  $projection.FunctionalAreaHierarchy = _Hierarchy.FunctionalAreaHierarchy
                                                                     and $projection.ValidityEndDate         = _Hierarchy.ValidityEndDate


{
      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @ObjectModel.foreignKey.association: '_Hierarchy'
  key cast ( hrrp_node_n.hryid_42 as fis_hryid_functionalarea_42 preserving type ) as FunctionalAreaHierarchy,
      @ObjectModel.text.association: '_Text'
  key hrrp_node_n.hrynode                                                          as HierarchyNode,
      @Semantics.businessDate.to: true
      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
  key cast(hrrp_node_n.hryvalto as fis_datbi preserving type )                     as ValidityEndDate,
      @Semantics.businessDate.from: true
      cast(hrrp_node_n.hryvalfrom as fis_datab preserving type )                   as ValidityStartDate,
      hrrp_node_n.parnode                                                          as ParentNode,
      @VDM.lifecycle.status:    #DEPRECATED
      cast( '000000000000001' as hryversn )                                        as HierarchyVersion,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      hrrp_node_n.fkber                                                            as FunctionalArea,
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'HierarchyNodeSequence'
      concat(hrrp_node_n.hryseqnbr, hrrp_node_n.hrynode)                           as SequenceNumber, // do not use any longer, use HierarchyNodeSequence
      hrrp_node_n.hryseqnbr                                                        as HierarchyNodeSequence,
      hrrp_node_n.hrylevel                                                         as HierarchyNodeLevel,
      hrrp_node_n.nodetype                                                         as NodeType,
      hrrp_node_n.nodevalue                                                        as HierarchyNodeVal,

      _Text,
      _FunctionalArea,
      _Hierarchy

}
where
      hrrp_node_n.nodetype <> 'D'
  and hrrp_node_n.hrytyp   =  '0112';
```
