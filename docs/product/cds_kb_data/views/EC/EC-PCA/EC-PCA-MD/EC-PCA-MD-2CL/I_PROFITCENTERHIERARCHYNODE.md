---
name: I_PROFITCENTERHIERARCHYNODE
description: "Profit CenterHIERARCHYNODE"
app_component: EC-PCA-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - EC
  - EC-PCA
  - EC-PCA-MD
  - interface-view
  - profit-center
  - component:EC-PCA-MD-2CL
  - lob:Other
  - bo:ProfitCenter
---
# I_PROFITCENTERHIERARCHYNODE

**Profit CenterHIERARCHYNODE**

| Property | Value |
|---|---|
| App Component | `EC-PCA-MD-2CL` |
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
// Comments:
//
// Key fields: please see comment in view I_ProfitCenterHierarchy
// Hierarchy type: determined by view I_ProfitCenterHierarchy, no need to define a filter in this view
//
@EndUserText.label: 'Profit Center Hierarchy Node'
@ObjectModel.representativeKey: 'HierarchyNode'
@ObjectModel: { dataCategory: #HIERARCHY }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPRFTCTRHNODE'
@Hierarchy.parentChild:
{ recurse:          {     parent: 'ParentNode',     child:  'HierarchyNode'     },
  siblingsOrder:    {     by: 'HierarchyNodeSequence',      direction: 'ASC'            },
  directory: '_Hierarchy'  }
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE]

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MASTER

@Analytics.dataExtraction.enabled: true

@AccessControl.privilegedAssociations: ['_ControllingAreaText']
@ObjectModel.sapObjectNodeType.name:'ProfitCenterHierarchyNode'

define view I_ProfitCenterHierarchyNode
  as select from hrrp_node_n

  association [0..1] to I_ControllingArea            as _ControllingAreaText on  $projection.ControllingArea = _ControllingAreaText.ControllingArea
  association [0..*] to I_ProfitCenterHierarchyNodeT as _Text                on  $projection.ProfitCenterHierarchy = _Text.ProfitCenterHierarchy
                                                                             and $projection.HierarchyNode         = _Text.HierarchyNode
                                                                             and $projection.ControllingArea       = _Text.ControllingArea
                                                                             and $projection.ProfitCenter          = '' // just to show that this association is only to be followed if profitcenter is blank

  association [0..*] to I_ProfitCenter               as _ProfitCenter        on  $projection.ProfitCenter    = _ProfitCenter.ProfitCenter
                                                                             and $projection.ControllingArea = _ProfitCenter.ControllingArea

  association [1..1] to I_ProfitCenterHierarchy      as _Hierarchy           on  $projection.ProfitCenterHierarchy = _Hierarchy.ProfitCenterHierarchy
                                                                             and $projection.ControllingArea       = _Hierarchy.ControllingArea
                                                                             and $projection.ValidityEndDate       = _Hierarchy.ValidityEndDate //Reviewed


  association [0..1] to I_ControllingArea            as _ControllingArea     on  $projection.ControllingArea = _ControllingArea.ControllingArea

{
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ControllingArea',
                     element: 'ControllingArea' }
        }]
      @ObjectModel.text.association: '_ControllingAreaText'
      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @ObjectModel.foreignKey.association: '_ControllingArea'
  key cast( hrrp_node_n.kokrs as fis_kokrs preserving type )      as ControllingArea,
      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @ObjectModel.foreignKey.association: '_Hierarchy'
  key cast(hrrp_node_n.hryid as fis_hryid_prctr preserving type ) as ProfitCenterHierarchy,
      @ObjectModel.text.association: '_Text'
  key hrrp_node_n.hrynode                                         as HierarchyNode,
      @Semantics.businessDate.to: true
      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
  key cast(hrrp_node_n.hryvalto as fis_datbi preserving type )    as ValidityEndDate,
      hrrp_node_n.parnode                                         as ParentNode,
      @VDM.lifecycle.status:    #DEPRECATED
      cast( '000000000000001' as hryversn )                       as HierarchyVersion,
      @Semantics.businessDate.from: true
      cast(hrrp_node_n.hryvalfrom as fis_datab preserving type )  as ValidityStartDate,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ProfitCenterStdVH',
                     element: 'ProfitCenter' },
          additionalBinding: [{ localElement: 'ControllingArea',
                                element: 'ControllingArea' }]
        }]
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      cast ( hrrp_node_n.prctr as fis_prctr preserving type )     as ProfitCenter,
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'HierarchyNodeSequence'
      concat(hrrp_node_n.hryseqnbr, hrrp_node_n.hrynode)          as SequenceNumber, // do not use any longer, use HierarchyNodeSequence
      hrrp_node_n.hryseqnbr                                       as HierarchyNodeSequence,
      hrrp_node_n.hrylevel                                        as HierarchyNodeLevel,
      hrrp_node_n.nodetype                                        as NodeType,
      hrrp_node_n.nodevalue                                       as HierarchyNodeVal,
      _Text,
      _ProfitCenter,
      _Hierarchy,
      _ControllingArea,
      @Consumption.hidden: true
      _ControllingAreaText


}
where
      hrrp_node_n.nodetype <> 'D'
  and hrrp_node_n.hrytyp   =  '0106';
```
