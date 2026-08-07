---
name: I_CNSLDTNFUNCNLAREAHIERNODE
description: "Cnsldtnfuncnlareahiernode"
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
# I_CNSLDTNFUNCNLAREAHIERNODE

**Cnsldtnfuncnlareahiernode**

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
  sqlViewName: 'ICCFAHN',
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
    sizeCategory: #M}, // same size as dimension
  dataCategory: #HIERARCHY,
  representativeKey: 'HierarchyNode',
  modelingPattern: #ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE
                          ],
  sapObjectNodeType.name: 'CnsldtnFuncnlAreaHierarchyNode'
  }
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Cnsldtn Functional Area - Hier Node'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_CnsldtnFuncnlAreaHierNode
  as select from P_CnsldtnUnivHierNode_3(P_HierarchyType : 'CS05', P_MasterDataType : 'RFAREA' ) as _HierarchyNode

  association [0..1] to I_CnsldtnFunctionalArea      as _FunctionalArea on  $projection.FunctionalArea = _FunctionalArea.FunctionalArea

  association [1..1] to I_CnsldtnFuncnlAreaHierarchy as _Hierarchy      on  $projection.CnsldtnFunctionalAreaHierarchy = _Hierarchy.CnsldtnFunctionalAreaHierarchy
                                                                        and $projection.ValidityEndDate                = _Hierarchy.ValidityEndDate

  association [0..*] to I_CnsldtnFuncnlAreaHierNodeT as _Text           on  $projection.CnsldtnFunctionalAreaHierarchy = _Text.CnsldtnFunctionalAreaHierarchy
                                                                        and $projection.HierarchyNode                  = _Text.HierarchyNode
                                                                        and $projection.FunctionalArea                 = ''
{

      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @ObjectModel: {
        foreignKey.association: '_Hierarchy',
        sapObjectNodeTypeReference: 'CnsldtnFuncnlAreaHierarchy' }
  key cast(_HierarchyNode.CnsldtnUniversalHierarchy as fincs_functionalareahierarchy preserving type )    as CnsldtnFunctionalAreaHierarchy,

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
        foreignKey.association: '_FunctionalArea',
        sapObjectNodeTypeReference: 'CnsldtnFunctionalArea' }
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnFunctionalAreaVH',
          element: 'FunctionalArea'
        }
      }]
      cast(left(_HierarchyNode.UniversalHierarchyLeafValue, 16) as fincs_functionalarea preserving type ) as FunctionalArea,

      _HierarchyNode.HierarchyNodeSequence,

      _HierarchyNode.HierarchyNodeLevel,

      _HierarchyNode.NodeType,


      _Text,
      _Hierarchy,
      _FunctionalArea
};
```
