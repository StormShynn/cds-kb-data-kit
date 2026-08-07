---
name: I_STSTCLKEYFIGUREHIERNODE
description: Ststclkeyfigurehiernode
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
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_STSTCLKEYFIGUREHIERNODE

**Ststclkeyfigurehiernode**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `}` |  | |  | `recurse: { parent: ['ParentNode'], child: ['HierarchyNode'] }` |
| `}]` |  | |  | `siblingsOrder: [{ by: 'HierarchyNodeSequence', direction: 'ASC' }]` |
| `'_Hierarchy'` |  | |  | `directory: '_Hierarchy'` |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFISTCLKEYFIGHN'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@EndUserText.label: 'Statistical Key Figure Hierarchy Node'
@VDM.viewType: #BASIC
@Hierarchy.parentChild:
[{ recurse:          {   parent: ['ParentNode'],   child:  ['HierarchyNode']  },
  siblingsOrder:    [{   by: 'HierarchyNodeSequence',    direction: 'ASC'   }],
  directory:        '_Hierarchy'
  }]
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #XL},
  dataCategory: #HIERARCHY
}
@Analytics.dataExtraction: {enabled:true}
@ObjectModel.representativeKey: 'HierarchyNode'
@ObjectModel.modelingPattern: #ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,
                                    #CDS_MODELING_ASSOCIATION_TARGET,
                                    #ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE,
                                    #EXTRACTION_DATA_SOURCE ]
@AccessControl.privilegedAssociations: ['_ControllingAreaText']
@ObjectModel.sapObjectNodeType.name:'StstclKeyFigureHierarchyNode'
//
define view I_StstclKeyFigureHierNode
  as select from hrrp_node_n

  association [0..1] to I_ControllingArea          as _ControllingAreaText  on  $projection.ControllingArea = _ControllingAreaText.ControllingArea
  //
  association [0..*] to I_StstclKeyFigureHierNodeT as _Text                 on  $projection.StatisticalKeyFigureHierarchy = _Text.StatisticalKeyFigureHierarchy
                                                                            and $projection.HierarchyNode                 = _Text.HierarchyNode
                                                                            and $projection.ControllingArea               = _Text.ControllingArea
                                                                            and $projection.StatisticalKeyFigure          = '' // just to show that this association is only to be followed if StatisticalKeyFigure is blank

  association [0..1] to I_StatisticalKeyFigure     as _StatisticalKeyFigure on  $projection.StatisticalKeyFigure = _StatisticalKeyFigure.StatisticalKeyFigure
                                                                            and $projection.ControllingArea      = _StatisticalKeyFigure.ControllingArea

  association [1..1] to I_StstclKeyFigureHierarchy as _Hierarchy            on  $projection.StatisticalKeyFigureHierarchy = _Hierarchy.StatisticalKeyFigureHierarchy
                                                                            and $projection.ControllingArea               = _Hierarchy.ControllingArea
                                                                            and $projection.ValidityEndDate               = _Hierarchy.ValidityEndDate

  association [0..1] to I_ControllingArea          as _ControllingArea      on  $projection.ControllingArea = _ControllingArea.ControllingArea

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
  key hrrp_node_n.hryid_42                                       as StatisticalKeyFigureHierarchy,
      @ObjectModel.text.association: '_Text'
  key hrrp_node_n.hrynode                                        as HierarchyNode,
      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @Semantics.businessDate.to: true
  key cast(hrrp_node_n.hryvalto as fis_datbi preserving type )   as ValidityEndDate,
      hrrp_node_n.parnode                                        as ParentNode,
      @VDM.lifecycle.status:    #DEPRECATED
      cast( '000000000000001' as hryversn )                      as HierarchyVersion,
      @Semantics.businessDate.from: true
      cast(hrrp_node_n.hryvalfrom as fis_datab preserving type ) as ValidityStartDate,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_StatisticalKeyFigureStdVH',
                     element: 'StatisticalKeyFigure' },
          additionalBinding: [{ localElement: 'ControllingArea',
                                element: 'ControllingArea' }]
        }]
      @ObjectModel.foreignKey.association: '_StatisticalKeyFigure'
      cast (  hrrp_node_n.stagr as fis_stagr preserving type )   as StatisticalKeyFigure,
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'HierarchyNodeSequence'
      concat(hrrp_node_n.hryseqnbr, hrrp_node_n.hrynode)         as SequenceNumber, // do not use any longer, use HierarchyNodeSequence
      hrrp_node_n.hryseqnbr                                      as HierarchyNodeSequence,
      hrrp_node_n.hrylevel                                       as HierarchyNodeLevel,
      hrrp_node_n.nodetype                                       as NodeType,
      hrrp_node_n.nodevalue                                      as HierarchyNodeVal,

      _Text,
      _StatisticalKeyFigure,
      _Hierarchy,
      _ControllingArea,
      @Consumption.hidden: true
      _ControllingAreaText

}
where
      hrrp_node_n.nodetype <> 'D'
  and hrrp_node_n.hrytyp   =  '0104';
```
