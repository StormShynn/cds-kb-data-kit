---
name: I_CUSTOMERGROUPHIERARCHYNODE
description: Customergrouphierarchynode
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - customer
  - component:FI-GL-IS-2CL
  - lob:Finance
  - bo:Customer
---
# I_CUSTOMERGROUPHIERARCHYNODE

**Customergrouphierarchynode**

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
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Customer Group Hierarchy Node'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #L},
  dataCategory: #HIERARCHY
}
@Hierarchy.parentChild:
[{ recurse:          {   parent: ['ParentNode'],   child:  ['HierarchyNode']  },
  siblingsOrder:    [{   by: 'HierarchyNodeSequence' }],
  directory:        '_Hierarchy'
  }]
@Analytics.dataExtraction.enabled: true
@ObjectModel.representativeKey: 'HierarchyNode'
@ObjectModel.sapObjectNodeType.name:'CustomerGroupHierarchyNode'
@ObjectModel.modelingPattern: #ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,#ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE , #EXTRACTION_DATA_SOURCE ]
@VDM.viewType: #BASIC

define view entity I_CustomerGroupHierarchyNode
  as select from hrrp_node_n
  association [1..1] to I_CustomerGroupHierarchy    as _Hierarchy     on  $projection.CustomerGroupHierarchy = _Hierarchy.CustomerGroupHierarchy
                                                                      and $projection.ValidityEndDate        = _Hierarchy.ValidityEndDate
  association [0..1] to I_CustomerGroup             as _CustomerGroup on  $projection.CustomerGroup = _CustomerGroup.CustomerGroup
  association [0..*] to I_CustomerGroupHierNodeText as _Text          on  $projection.CustomerGroupHierarchy = _Text.CustomerGroupHierarchy
                                                                      and $projection.HierarchyNode          = _Text.HierarchyNode
                                                                      and $projection.CustomerGroup          = '' // just to show that this association is only to be followed if BillingDocumentType is blank
{
      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @ObjectModel.foreignKey.association: '_Hierarchy'
  key cast(hrrp_node_n.hryid as fis_hryid_customergroup preserving type ) as CustomerGroupHierarchy,
      @ObjectModel.text.association: '_Text'
  key hrrp_node_n.hrynode                                                 as HierarchyNode,
      @Semantics.businessDate.to: true
      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
  key cast(hrrp_node_n.hryvalto as fis_datbi preserving type )            as ValidityEndDate,
      @Semantics.businessDate.from: true
      cast(hrrp_node_n.hryvalfrom as fis_datab preserving type )          as ValidityStartDate,
      hrrp_node_n.parnode                                                 as ParentNode,

      @ObjectModel.foreignKey.association: '_CustomerGroup'
      hrrp_node_n.kdgrp                                                   as CustomerGroup,

      hrrp_node_n.hryseqnbr                                               as HierarchyNodeSequence,
      hrrp_node_n.hrylevel                                                as HierarchyNodeLevel,
      hrrp_node_n.nodetype                                                as NodeType,
      hrrp_node_n.nodevalue                                               as HierarchyNodeVal,

      _Text,
      _CustomerGroup,
      _Hierarchy
}
where
      hrrp_node_n.nodetype <> 'D'
  and hrrp_node_n.hrytyp   =  'U506'
```
