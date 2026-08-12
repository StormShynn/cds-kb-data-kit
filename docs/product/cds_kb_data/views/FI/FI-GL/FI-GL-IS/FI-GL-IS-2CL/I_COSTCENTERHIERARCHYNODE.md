---
name: I_COSTCENTERHIERARCHYNODE
description: "Cost CenterHIERARCHYNODE"
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
  - cost-center
  - component:FI-GL-IS-2CL
  - lob:Finance
  - bo:CostCenter
---
# I_COSTCENTERHIERARCHYNODE

**Cost CenterHIERARCHYNODE**

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
// Comments:
//
// Key fields: please see comment in view I_CostCenterHierarchy
// Hierarchy type: determined by view I_CostCenterHierarchy, no need to define a filter in this view
//
@EndUserText.label: 'Cost Center Hierarchy Node'
@ObjectModel.representativeKey: 'HierarchyNode'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFICOSTCENTERHN'
@Hierarchy.parentChild:
{ recurse:          {   parent: 'ParentNode',   child:  'HierarchyNode'   },
  siblingsOrder:    {   by: 'HierarchyNodeSequence',    direction: 'ASC'   },
  directory:        '_Hierarchy'
  }
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE]

@ObjectModel: {usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #XL},
  dataCategory: #HIERARCHY
}

@Analytics.dataExtraction: {enabled:true}

@AccessControl.privilegedAssociations: ['_ControllingAreaText']
@ObjectModel.sapObjectNodeType.name:'CostCenterHierarchyNode'

define  view I_CostCenterHierarchyNode
  as select from hrrp_node_n

  association [0..1] to I_ControllingArea          as _ControllingAreaText on  $projection.ControllingArea = _ControllingAreaText.ControllingArea
  association [0..*] to I_CostCenterHierarchyNodeT as _Text                on  $projection.CostCenterHierarchy = _Text.CostCenterHierarchy
                                                                           and $projection.HierarchyNode       = _Text.HierarchyNode
                                                                           and $projection.ControllingArea     = _Text.ControllingArea
                                                                           and $projection.CostCenter          = '' // just to show that this association is only to be followed if costcenter is blank

  association [0..*] to I_CostCenter               as _CostCenter          on  $projection.CostCenter      = _CostCenter.CostCenter
                                                                           and $projection.ControllingArea = _CostCenter.ControllingArea

  association [1..1] to I_CostCenterHierarchy      as _Hierarchy           on  $projection.CostCenterHierarchy = _Hierarchy.CostCenterHierarchy
                                                                           and $projection.ControllingArea     = _Hierarchy.ControllingArea
                                                                           and $projection.ValidityEndDate     = _Hierarchy.ValidityEndDate

  association [0..1] to I_ControllingArea          as _ControllingArea     on  $projection.ControllingArea = _ControllingArea.ControllingArea


{
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ControllingAreaStdVH',
                     element: 'ControllingArea' }
        }]
      @ObjectModel.text.association: '_ControllingAreaText'
      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @ObjectModel.foreignKey.association: '_ControllingArea' //Inserted by VDM CDS Suite Plugin
  key cast( hrrp_node_n.kokrs as fis_kokrs preserving type )     as ControllingArea,
      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @ObjectModel.foreignKey.association: '_Hierarchy'
  key cast(hrrp_node_n.hryid as fis_hryid_cctr preserving type ) as CostCenterHierarchy,
      @ObjectModel.text.association: '_Text'
  key hrrp_node_n.hrynode                                        as HierarchyNode,
      @Semantics.businessDate.to: true
      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
  key cast(hrrp_node_n.hryvalto as fis_datbi preserving type )   as ValidityEndDate,
      hrrp_node_n.parnode                                        as ParentNode,
      @VDM.lifecycle.status:    #DEPRECATED
      cast( '000000000000001' as hryversn )                      as HierarchyVersion,
      @Semantics.businessDate.from: true
      cast(hrrp_node_n.hryvalfrom as fis_datab preserving type ) as ValidityStartDate,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CostCenterStdVH',
                     element: 'CostCenter' },
          additionalBinding: [{ localElement: 'ControllingArea',
                                element: 'ControllingArea' }]
        }]
      @ObjectModel.foreignKey.association: '_CostCenter'
      cast ( hrrp_node_n.kostl as fis_kostl preserving type )    as CostCenter,
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'HierarchyNodeSequence'
      concat(hrrp_node_n.hryseqnbr, hrrp_node_n.hrynode)         as SequenceNumber, // do not use any longer, use HierarchyNodeSequence
      hrrp_node_n.hryseqnbr                                      as HierarchyNodeSequence,
      hrrp_node_n.hrylevel                                       as HierarchyNodeLevel,
      hrrp_node_n.nodetype                                       as NodeType,
      hrrp_node_n.nodevalue                                      as HierarchyNodeVal,
      //@Semantics.businessDate.to: true
      //case when hryid = 'H101/A000/001L' and hrynode = '10010101101' then '20201231' else hrrp_node.hryvalto end as NodeEndDate,
      //@Semantics.businessDate.from: true
      //case when hryid = 'H101/A000/001L' and hrynode = '10010101101' then '20201130' else hrrp_node.hryvalfrom end as NodeStartDate,

      _Text,
      _CostCenter,
      _Hierarchy,
      _ControllingArea,
      @Consumption.hidden: true
      _ControllingAreaText

}
where
      nodetype           <> 'D'
  and hrrp_node_n.hrytyp =  '0101';
```
