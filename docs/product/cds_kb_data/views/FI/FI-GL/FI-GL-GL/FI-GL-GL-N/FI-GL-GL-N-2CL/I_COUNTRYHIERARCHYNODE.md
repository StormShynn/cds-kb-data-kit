---
name: I_COUNTRYHIERARCHYNODE
description: "Countryhierarchynode"
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
  - country
  - component:FI-GL-GL-N-2CL
  - lob:Finance
---
# I_COUNTRYHIERARCHYNODE

**Countryhierarchynode**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-N-2CL` |
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
@EndUserText.label: 'Country/Region Hierarchy Node'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@ObjectModel: {usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #S},
  dataCategory: #HIERARCHY
}
@Hierarchy.parentChild:
[{ recurse:          {   parent: ['ParentNode'],   child:  ['HierarchyNode']  },
  siblingsOrder:    [{   by: 'HierarchyNodeSequence' }],
  directory:        '_Hierarchy'
  }]
@Analytics.dataExtraction.enabled: true
@ObjectModel.representativeKey: 'HierarchyNode'
@ObjectModel.sapObjectNodeType.name:'CountryHierarchyNode'
@ObjectModel.modelingPattern: #ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,#ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE , #EXTRACTION_DATA_SOURCE ]

define view entity I_CountryHierarchyNode
  as select from hrrp_node_n

  association [0..*] to I_CountryHierarchyNodeText as _Text      on  $projection.CountryHierarchy = _Text.CountryHierarchy
                                                                 and $projection.HierarchyNode    = _Text.HierarchyNode
                                                                 and $projection.Country          = '' // just to show that this association is only to be followed if Country is blank

  association [0..1] to I_Country                  as _Country   on  $projection.Country = _Country.Country

  association [1..1] to I_CountryHierarchy         as _Hierarchy on  $projection.CountryHierarchy = _Hierarchy.CountryHierarchy
                                                                 and $projection.ValidityEndDate  = _Hierarchy.ValidityEndDate

  association [1..1] to I_CountryHierarchyNode     as _Parent    on  $projection.CountryHierarchy = _Parent.CountryHierarchy
                                                                 and $projection.ParentNode       = _Parent.HierarchyNode
                                                                 and $projection.ValidityEndDate  = _Parent.ValidityEndDate
{
      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @ObjectModel.foreignKey.association: '_Hierarchy'
  key cast(hrrp_node_n.hryid as fis_hryid_country preserving type ) as CountryHierarchy,
      @ObjectModel.text.association: '_Text'
  key hrrp_node_n.hrynode                                           as HierarchyNode,
      @Semantics.businessDate.to: true
      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
  key cast(hrrp_node_n.hryvalto as fis_datbi preserving type )      as ValidityEndDate,
      @Semantics.businessDate.from: true
      cast(hrrp_node_n.hryvalfrom as fis_datab preserving type )    as ValidityStartDate,
      hrrp_node_n.parnode                                           as ParentNode,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CountryVH',
                     element: 'Country' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_Country'
      hrrp_node_n.land1                                             as Country,

      hrrp_node_n.hryseqnbr                                         as HierarchyNodeSequence,
      hrrp_node_n.hrylevel                                          as HierarchyNodeLevel,
      hrrp_node_n.nodetype                                          as NodeType,
      hrrp_node_n.nodevalue                                         as HierarchyNodeVal,
      hrrp_node_n.node_typelem                                      as HierarchyNodeType,

      _Text,
      _Country,
      _Hierarchy,
      _Parent

}
where
      hrrp_node_n.nodetype <> 'D'
  and hrrp_node_n.hrytyp   =  'U508';
```
