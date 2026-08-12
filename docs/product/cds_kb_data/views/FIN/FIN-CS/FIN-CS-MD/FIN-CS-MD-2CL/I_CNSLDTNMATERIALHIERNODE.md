---
name: I_CNSLDTNMATERIALHIERNODE
description: "Cnsldtnmaterialhiernode"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - material
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:Material
---
# I_CNSLDTNMATERIALHIERNODE

**Cnsldtnmaterialhiernode**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `['ParentNode']` |  | |  | `parent: ['ParentNode']` |  |  |
| `['HierarchyNode']` |  | |  | `child: ['HierarchyNode']` |  |  |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICCMATERIALHN',
  compiler.compareFilter: true
}
@Analytics: {
  dataExtraction.enabled: true
}
@Hierarchy.parentChild: [{
  recurse:          { parent:    ['ParentNode'],
                      child:     ['HierarchyNode']   },
  siblingsOrder:    [{ by:       'HierarchyNodeSequence',
                      direction: #ASC   }],
  directory:        '_Hierarchy'
}]
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  ignorePropagatedAnnotations: true
}
@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #XL},
  dataCategory: #HIERARCHY,
  representativeKey: 'HierarchyNode',
  modelingPattern: #ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE,
  supportedCapabilities: [#ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE,
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE ],
    sapObjectNodeType.name: 'CnsldtnMaterialHierarchyNode'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Material - Hierarchy Node'
/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view I_CnsldtnMaterialHierNode
  as select from P_CnsldtnUnivHierNode_2(P_HierarchyType : 'CS23', P_MasterDataType : 'MATNR' ) as _HierarchyNode

  association [0..1] to I_CnsldtnMaterial          as _Material  on  $projection.Material = _Material.Material

  association [1..1] to I_CnsldtnMaterialHierarchy as _Hierarchy on  $projection.ConsolidationMaterialHierarchy = _Hierarchy.ConsolidationMaterialHierarchy
                                                                 and $projection.ValidityEndDate                = _Hierarchy.ValidityEndDate

  association [0..*] to I_CnsldtnMaterialHierNodeT as _Text      on  $projection.ConsolidationMaterialHierarchy = _Text.ConsolidationMaterialHierarchy
                                                                 and $projection.HierarchyNode                  = _Text.HierarchyNode
                                                                 and $projection.Material                       = ''
{

      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @ObjectModel: {
        foreignKey.association: '_Hierarchy',
        sapObjectNodeTypeReference: 'CnsldtnMaterialHierarchy' }
  key cast(_HierarchyNode.CnsldtnUniversalHierarchy as fincs_materialhierarchy preserving type )     as ConsolidationMaterialHierarchy,

      @ObjectModel.text.association: '_Text'
  key _HierarchyNode.HierarchyNode,

      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @Semantics.businessDate.to: true
  key _HierarchyNode.ValidityEndDate,

      @Semantics.businessDate.from: true
      _HierarchyNode.ValidityStartDate,

      _HierarchyNode.ParentNode,

      _HierarchyNode.HierarchyVersion,

      @ObjectModel: {
        foreignKey.association: '_Material',
        sapObjectNodeTypeReference: 'CnsldtnMaterial' }
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnMaterialVH',
          element: 'Material'
        }
      }]
      cast( left(_HierarchyNode.UniversalHierarchyLeafValue, 40) as fincs_material preserving type ) as Material,

      _HierarchyNode.HierarchyNodeSequence,
      _HierarchyNode.HierarchyNodeLevel,
      _HierarchyNode.NodeType,


      _Text,
      _Material,
      _Hierarchy
};
```
