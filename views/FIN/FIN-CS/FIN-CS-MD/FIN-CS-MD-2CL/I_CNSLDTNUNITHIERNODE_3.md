---
name: I_CNSLDTNUNITHIERNODE_3
description: Cnsldtnunithiernode 3
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNUNITHIERNODE_3

**Cnsldtnunithiernode 3**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `['ParentNode']` |  | |  | `parent: ['ParentNode']` |
| `['HierarchyNode']` |  | |  | `child: ['HierarchyNode']` |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICCUNITHN3',
  compiler.compareFilter: true
  }
@Hierarchy.parentChild: [{
  recurse:          { parent:    ['ParentNode'],
                      child:     ['HierarchyNode']   },
  siblingsOrder:    [{ by:        'HierarchyNodeSequence',
                      direction: #ASC   }],
  directory:        '_Hierarchy'
}]
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  ignorePropagatedAnnotations: true
  }
@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #L},
  dataCategory: #HIERARCHY,
  representativeKey: 'HierarchyNode',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION ],
  sapObjectNodeType.name: 'ConsolidationUnitHierarchyNode'
  }
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Unit - Hierarchy Node'
 
define view I_CnsldtnUnitHierNode_3
  as select from P_CnsldtnUnivHierNode_3(P_HierarchyType : 'CS17', P_MasterDataType : 'RBUNIT' ) as _HierarchyNode

  association [1..1] to I_CnsldtnUnitHierarchy      as _Hierarchy    on  $projection.ConsolidationUnitHierarchy = _Hierarchy.ConsolidationUnitHierarchy
                                                                     and $projection.ValidityEndDate            = _Hierarchy.ValidityEndDate

  association [0..1] to I_CnsldtnGroup_3            as _CnsldtnGroup on  $projection.ConsolidationGroup =  _CnsldtnGroup.ConsolidationGroup
                                                                     and $projection.ConsolidationGroup <> ''                                                                   

  association [0..1] to I_CnsldtnUnit_4             as _CnsldtnUnit  on  $projection.ConsolidationUnit = _CnsldtnUnit.ConsolidationUnit

  association [0..*] to I_CnsldtnUnitHierNodeText_2 as _Text         on  $projection.ConsolidationUnitHierarchy = _Text.ConsolidationUnitHierarchy
                                                                     and $projection.HierarchyNode              = _Text.HierarchyNode
                                                                     and $projection.ConsolidationUnit          = ''

{
      @ObjectModel: {
        sapObjectNodeTypeReference: 'ConsolidationUnitHierarchy',
        foreignKey.association: '_Hierarchy' }
      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
  key cast(_HierarchyNode.UniversalHierarchy as fincs_consolidationunithier preserving type ) as ConsolidationUnitHierarchy,

      @ObjectModel.text.association: '_Text'
  key _HierarchyNode.HierarchyNode,

      @Semantics.businessDate.to: true
      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
  key _HierarchyNode.ValidityEndDate,

      @Semantics.businessDate.from: true
      _HierarchyNode.ValidityStartDate,

      _HierarchyNode.ParentNode,

      _HierarchyNode.HierarchyVersion,      

      @ObjectModel: {
        sapObjectNodeTypeReference: 'ConsolidationUnit',
        foreignKey.association: '_CnsldtnUnit' }
      @Consumption.valueHelpDefinition: [{
        entity:{
          name: 'I_CnsldtnUnitVH',
          element: 'ConsolidationUnit'
        }
      }]
      ConsolidationUnit,

      _HierarchyNode.HierarchyNodeSequence,

      _HierarchyNode.HierarchyNodeLevel,

      _HierarchyNode.NodeType,
      
      @ObjectModel: {
        foreignKey.association: '_CnsldtnGroup',
        sapObjectNodeTypeReference: 'ConsolidationGroup' }
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnGroupVH',
          element: 'ConsolidationGroup'
        }
      }]
      ConsolidationGroup,      


      _CnsldtnUnit,
      _CnsldtnGroup,
      _Text,
      _Hierarchy
};
```
