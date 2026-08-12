---
name: I_SALESDISTRICTHIERARCHYNODE
description: "Salesdistricthierarchynode"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
# I_SALESDISTRICTHIERARCHYNODE

**Salesdistricthierarchynode**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `}` |  | |  | `recurse: { parent: ['ParentNode'], child: ['HierarchyNode'] }` |  |  |
| `}]` |  | |  | `siblingsOrder: [{ by: 'HierarchyNodeSequence' }]` |  |  |
| `'_Hierarchy'` |  | |  | `directory: '_Hierarchy'` |  |  |

## Source Code

```abap
@EndUserText.label: 'Sales District Hierarchy Node'
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
@ObjectModel.sapObjectNodeType.name:'SalesDistrictHierarchyNode'

define view entity I_SalesDistrictHierarchyNode
  as select from hrrp_node_n
  association [0..*] to I_SlsDistrictHierarchyNodeT as _Text          on  $projection.SalesDistrictHierarchy = _Text.SalesDistrictHierarchy
                                                                      and $projection.HierarchyNode          = _Text.HierarchyNode
                                                                      and $projection.SalesDistrict          = ''

  association [0..1] to I_SalesDistrict             as _SalesDistrict on  $projection.SalesDistrict = _SalesDistrict.SalesDistrict

  association [1..1] to I_SalesDistrictHierarchy    as _Hierarchy     on  $projection.SalesDistrictHierarchy = _Hierarchy.SalesDistrictHierarchy
                                                                      and $projection.ValidityEndDate        = _Hierarchy.ValidityEndDate

{
      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @ObjectModel.foreignKey.association: '_Hierarchy'
  key cast(hrrp_node_n.hryid as fis_hryid_salesdistrict preserving type ) as SalesDistrictHierarchy,
      @ObjectModel.text.association: '_Text'
  key hrrp_node_n.hrynode                                                 as HierarchyNode,
      @Semantics.businessDate.to: true
      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
  key cast(hrrp_node_n.hryvalto as fis_datbi preserving type )            as ValidityEndDate,
      @Semantics.businessDate.from: true
      cast(hrrp_node_n.hryvalfrom as fis_datab preserving type )          as ValidityStartDate,
      hrrp_node_n.parnode                                                 as ParentNode,

      @ObjectModel.foreignKey.association: '_SalesDistrict'
      hrrp_node_n.bzirk                                                   as SalesDistrict,
      hrrp_node_n.hryseqnbr                                               as HierarchyNodeSequence,
      hrrp_node_n.hrylevel                                                as HierarchyNodeLevel,
      hrrp_node_n.nodetype                                                as NodeType,
      hrrp_node_n.nodevalue                                               as HierarchyNodeVal,

      _Text,
      _SalesDistrict,
      _Hierarchy

}
where
      hrrp_node_n.nodetype <> 'D'
  and hrrp_node_n.hrytyp   =  'U503';
```
