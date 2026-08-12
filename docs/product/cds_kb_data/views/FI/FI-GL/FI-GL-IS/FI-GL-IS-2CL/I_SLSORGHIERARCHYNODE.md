---
name: I_SLSORGHIERARCHYNODE
description: "Slsorghierarchynode"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_SLSORGHIERARCHYNODE

**Slsorghierarchynode**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `}` |  | |  | `recurse: { parent: ['ParentNode'], child: ['HierarchyNode'] }` |  |  |
| `}]` |  | |  | `siblingsOrder: [{ by: 'HierarchyNodeSequence' }]` |  |  |
| `'_Hierarchy'` |  | |  | `directory: '_Hierarchy'` |  |  |

## Source Code

```abap
@EndUserText.label: 'Sales Organization Hierarchy Node'
@VDM.viewType: #BASIC
@Hierarchy.parentChild:
[{ recurse:          {   parent: ['ParentNode'],   child:  ['HierarchyNode']  },
  siblingsOrder:    [{   by: 'HierarchyNodeSequence' }],
  directory:        '_Hierarchy'
  }]
@Metadata.ignorePropagatedAnnotations:true
@AccessControl.authorizationCheck: #MANDATORY
//@ObjectModel.representativeKey: 'HierarchyNode'
@ObjectModel.modelingPattern: #ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,#ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE , #EXTRACTION_DATA_SOURCE ]

@ObjectModel: {usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #XL},
  dataCategory: #HIERARCHY
}

@Analytics: { dataExtraction.enabled: true }
@ObjectModel.sapObjectNodeType.name:'SalesOrganizationHierarchyNode'

define view entity I_SlsOrgHierarchyNode
  as select from hrrp_node_n
  association [0..*] to I_SlsOrgHierarchyNodeT       as _Text              on  $projection.SalesOrganizationHierarchy = _Text.SalesOrganizationHierarchy
                                                                           and $projection.HierarchyNode              = _Text.HierarchyNode
                                                                           and $projection.SalesOrganization          = ''

  association [0..1] to I_SalesOrganization          as _SalesOrganization on  $projection.SalesOrganization = _SalesOrganization.SalesOrganization

  association [1..1] to I_SalesOrganizationHierarchy as _Hierarchy         on  $projection.SalesOrganizationHierarchy = _Hierarchy.SalesOrganizationHierarchy
                                                                           and $projection.ValidityEndDate            = _Hierarchy.ValidityEndDate

{
      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @ObjectModel.foreignKey.association: '_Hierarchy'
  key cast(hrrp_node_n.hryid as fis_hryid_salesorg preserving type ) as SalesOrganizationHierarchy,
      @ObjectModel.text.association: '_Text'
  key hrrp_node_n.hrynode                                            as HierarchyNode,
      @Semantics.businessDate.to: true
      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
  key cast(hrrp_node_n.hryvalto as fis_datbi preserving type )       as ValidityEndDate,
      @Semantics.businessDate.from: true
      cast(hrrp_node_n.hryvalfrom as fis_datab preserving type )     as ValidityStartDate,
      hrrp_node_n.parnode                                            as ParentNode,

      @ObjectModel.foreignKey.association: '_SalesOrganization'
      hrrp_node_n.vkorg                                              as SalesOrganization,
      hrrp_node_n.hryseqnbr                                          as HierarchyNodeSequence,
      hrrp_node_n.hrylevel                                           as HierarchyNodeLevel,
      hrrp_node_n.nodetype                                           as NodeType,
      hrrp_node_n.nodevalue                                          as HierarchyNodeVal,

      _Text,
      _SalesOrganization,
      _Hierarchy

}
where
      hrrp_node_n.nodetype <> 'D'
  and hrrp_node_n.hrytyp   =  'U512';
```
