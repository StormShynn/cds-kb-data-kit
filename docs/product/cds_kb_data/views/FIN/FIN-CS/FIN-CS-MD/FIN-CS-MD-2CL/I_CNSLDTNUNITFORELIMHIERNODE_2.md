---
name: I_CNSLDTNUNITFORELIMHIERNODE_2
description: "Cnsldtnunitforelimhiernode 2"
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
# I_CNSLDTNUNITFORELIMHIERNODE_2

**Cnsldtnunitforelimhiernode 2**

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
  sqlViewName: 'ICSUNITELIMHNOD2',
  compiler.compareFilter: true
}
@Analytics: {
  dataExtraction.enabled: true
}
@Hierarchy.parentChild: [{
  recurse:          { parent:    ['ParentNode'],
                      child:     ['HierarchyNode']   },
  siblingsOrder:    [{ by:        'HierarchyNodeSequence',
                      direction: #ASC   }],
  directory:        '_Hierarchy'
}]
@AccessControl:{
  authorizationCheck: #MANDATORY
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  ignorePropagatedAnnotations: true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #M
  },
  dataCategory: #HIERARCHY,
  representativeKey: 'HierarchyNode',
  modelingPattern: #ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE,
  supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #SQL_DATA_SOURCE,
                           #EXTRACTION_DATA_SOURCE,
                           #ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE ],
  sapObjectNodeType.name: 'CnsldtnUnitForElimHierNode'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Unit for Elimination - Hier Node'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_CnsldtnUnitForElimHierNode_2
  as select from P_CnsldtnUnivHierNodeElim_2(P_HierarchyType : 'CS17', P_MasterDataType : 'RBUNIT' ) as _HierarchyNode

  association [1..1] to I_CnsldtnUnitHierarchy        as _Hierarchy    on  $projection.ConsolidationUnitHierarchy = _Hierarchy.ConsolidationUnitHierarchy
                                                                       and $projection.ValidityEndDate            = _Hierarchy.ValidityEndDate

  association [0..1] to I_CnsldtnGroup_3              as _CnsldtnGroup on  $projection.ConsolidationGroup =  _CnsldtnGroup.ConsolidationGroup
                                                                       and $projection.ConsolidationGroup <> ''
                                                                       
  association [0..1] to I_CnsldtnUnitForElimination_2 as _CnsldtnUnit  on  $projection.ConsolidationUnit = _CnsldtnUnit.ConsolidationUnit                                                                       

  association [0..*] to I_CnsldtnUnitHierNodeText_2   as _Text         on  $projection.ConsolidationUnitHierarchy = _Text.ConsolidationUnitHierarchy
                                                                       and $projection.HierarchyNode              = _Text.HierarchyNode
                                                                       and $projection.ConsolidationUnit          = ''                                                                
                                                                       

{

      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @ObjectModel:{
        sapObjectNodeTypeReference: 'ConsolidationUnitHierarchy',
        foreignKey.association: '_Hierarchy' }
  key cast(_HierarchyNode.UniversalHierarchy as fincs_consolidationunithier preserving type ) as ConsolidationUnitHierarchy,

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
        sapObjectNodeTypeReference: 'CnsldtnUnitForElimination',
        foreignKey.association: '_CnsldtnUnit' }
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnUnitForEliminationVH',
          element: 'ConsolidationUnit'
        }
      }]
      cast( case _HierarchyNode.NodeType
        when 'L'  then
             case replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(left( _HierarchyNode.UniversalHierarchyLeafValue, 18 ),
                 '0', ''), '1', ''), '2', ''), '3', ''), '4', ''), '5', ''), '6', ''), '7', ''), '8', ''), '9', '')
             when  ''
               then lpad(left( _HierarchyNode.UniversalHierarchyLeafValue, 18 ), 25, '0')
               else left( _HierarchyNode.UniversalHierarchyLeafValue, 18 )
             end
        when '
  then left( _HierarchyNode.HierarchyNodeVal, 25 )
        else ''
      end as fincs_elim_unit preserving type )                                                as ConsolidationUnit,

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
}
```
