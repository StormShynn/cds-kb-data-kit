---
name: I_COSTCTRACTIVITYTYPEHIERNODE
description: "Costctractivitytypehiernode"
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
# I_COSTCTRACTIVITYTYPEHIERNODE

**Costctractivitytypehiernode**

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
| `}` |  | |  | `recurse: { parent: 'ParentNode', child: 'HierarchyNode' }` |  |  |
| `'_Hierarchy'` |  | |  | `directory: '_Hierarchy'` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFICOSTCTRACTYHN'
@Hierarchy.parentChild:
{ recurse:          {   parent: 'ParentNode',   child:  'HierarchyNode'   },
  siblingsOrder:    {   by: 'HierarchyNodeSequence',    direction: 'ASC'   },
  directory:        '_Hierarchy'
  }
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #XL},
  dataCategory: #HIERARCHY
}
@VDM.viewType: #BASIC

@Analytics.dataExtraction: {enabled:true}
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@ObjectModel.representativeKey: 'HierarchyNode'
@ObjectModel.modelingPattern: #ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,#ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE, #EXTRACTION_DATA_SOURCE]
@AccessControl.privilegedAssociations: ['_ControllingAreaText']
@EndUserText.label: 'Cost Center Activity Type Hierarchy Node'
@ObjectModel.sapObjectNodeType.name:'CostCtrActivityTypeHierNode'

define view I_CostCtrActivityTypeHierNode
  as select from hrrp_node_n

  association [0..1] to I_ControllingArea              as _ControllingAreaText on  $projection.ControllingArea = _ControllingAreaText.ControllingArea
  association [0..*] to I_CostCtrActivityTypeHierNodeT as _Text                on  $projection.CostCtrActivityTypeHierarchy = _Text.CostCtrActivityTypeHierarchy
                                                                               and $projection.HierarchyNode                = _Text.HierarchyNode
                                                                               and $projection.ControllingArea              = _Text.ControllingArea
                                                                               and $projection.CostCtrActivityType          = '' // just to show that this association is only to be followed if costcenter is blank

  association [0..*] to I_CostCenterActivityType       as _CostCenterActivity  on  $projection.CostCtrActivityType = _CostCenterActivity.CostCtrActivityType
                                                                               and $projection.ControllingArea     = _CostCenterActivity.ControllingArea

  association [1..1] to I_CostCtrActivityTypeHierarchy as _Hierarchy           on  $projection.CostCtrActivityTypeHierarchy = _Hierarchy.CostCtrActivityTypeHierarchy
                                                                               and $projection.ControllingArea              = _Hierarchy.ControllingArea
                                                                               and $projection.ValidityEndDate              = _Hierarchy.ValidityEndDate

  association [0..1] to I_ControllingArea              as _ControllingArea     on  $projection.ControllingArea = _ControllingArea.ControllingArea

{
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ControllingAreaStdVH',
                     element: 'ControllingArea' }
        }]
      @ObjectModel.text.association: '_ControllingAreaText'
      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @ObjectModel.foreignKey.association: '_ControllingArea' //Inserted by VDM CDS Suite Plugin
  key cast( hrrp_node_n.kokrs as fis_kokrs preserving type )             as ControllingArea,
      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @ObjectModel.foreignKey.association: '_Hierarchy'
  key cast(hrrp_node_n.hryid as fis_hryid_cctracttytpe preserving type ) as CostCtrActivityTypeHierarchy,
      @ObjectModel.text.association: '_Text'
  key hrrp_node_n.hrynode                                                as HierarchyNode,
      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @Semantics.businessDate.to: true
  key cast(hrrp_node_n.hryvalto as fis_datbi preserving type )           as ValidityEndDate,
      hrrp_node_n.parnode                                                as ParentNode,
      @VDM.lifecycle.status:    #DEPRECATED
      cast( '000000000000001' as hryversn )                              as HierarchyVersion,
      @Semantics.businessDate.from: true
      cast(hrrp_node_n.hryvalfrom as fis_datab preserving type )         as ValidityStartDate,

      @ObjectModel.foreignKey.association: '_CostCenterActivity'
      hrrp_node_n.lstar                                                  as CostCtrActivityType,

      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'HierarchyNodeSequence'
      concat(hrrp_node_n.hryseqnbr, hrrp_node_n.hrynode)                 as SequenceNumber, // do not use any longer, use HierarchyNodeSequence
      hrrp_node_n.hryseqnbr                                              as HierarchyNodeSequence,
      hrrp_node_n.hrylevel                                               as HierarchyNodeLevel,
      hrrp_node_n.nodetype                                               as NodeType,
      hrrp_node_n.nodevalue                                              as HierarchyNodeVal,

      _Text,
      _CostCenterActivity,
      _Hierarchy,
      _ControllingArea,
      @Consumption.hidden: true
      _ControllingAreaText


}
where
      hrrp_node_n.nodetype <> 'D'
  and hrrp_node_n.hrytyp   =  '0105';
```
