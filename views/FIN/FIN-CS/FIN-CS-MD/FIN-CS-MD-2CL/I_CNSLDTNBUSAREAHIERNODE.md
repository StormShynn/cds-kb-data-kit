---
name: I_CNSLDTNBUSAREAHIERNODE
description: Cnsldtnbusareahiernode
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
# I_CNSLDTNBUSAREAHIERNODE

**Cnsldtnbusareahiernode**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `['ParentNode']` | `parent: ['ParentNode']` |
| `['HierarchyNode']` | `child: ['HierarchyNode']` |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICCBAHN',
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
@AccessControl:{
  authorizationCheck: #MANDATORY
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  ignorePropagatedAnnotations: true
  }
@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #M},
  dataCategory: #HIERARCHY,
  representativeKey: 'HierarchyNode',
  modelingPattern: #ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE
                          ],
  sapObjectNodeType.name: 'CnsldtnBusinessAreaHierNode'
  }
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Business Area - Hier Node'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_CnsldtnBusAreaHierNode
  as select from P_CnsldtnUnivHierNode(P_HierarchyType : 'CS06', P_MasterDataType : 'RBUSA' ) as _HierarchyNode

  association [0..1] to I_CnsldtnBusinessArea          as _BusinessArea on  $projection.BusinessArea = _BusinessArea.BusinessArea

  association [1..1] to I_CnsldtnBusinessAreaHierarchy as _Hierarchy    on  $projection.CnsldtnBusinessAreaHierarchy = _Hierarchy.CnsldtnBusinessAreaHierarchy
                                                                        and $projection.ValidityEndDate              = _Hierarchy.ValidityEndDate

  association [0..*] to I_CnsldtnBusAreaHierNodeT      as _Text         on  $projection.CnsldtnBusinessAreaHierarchy = _Text.CnsldtnBusinessAreaHierarchy
                                                                        and $projection.HierarchyNode                = _Text.HierarchyNode
                                                                        and $projection.BusinessArea                 = ''
{

      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @ObjectModel:{
        sapObjectNodeTypeReference: 'CnsldtnBusinessAreaHierarchy',
        foreignKey.association: '_Hierarchy' }
  key cast(_HierarchyNode.UniversalHierHierarchyID as fincs_businessareahierarchy preserving type )     as CnsldtnBusinessAreaHierarchy,

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
        sapObjectNodeTypeReference: 'CnsldtnBusinessArea',
        foreignKey.association: '_BusinessArea' }
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnBusinessAreaVH',
          element: 'BusinessArea'
        }
      }]
      cast( left(_HierarchyNode.UniversalHierarchyLeafValue, 4) as fincs_businessarea preserving type ) as BusinessArea,

      _HierarchyNode.HierarchyNodeSequence,
      _HierarchyNode.HierarchyNodeLevel,
      _HierarchyNode.NodeType,


      _Text,
      _BusinessArea,
      _Hierarchy
};
```
