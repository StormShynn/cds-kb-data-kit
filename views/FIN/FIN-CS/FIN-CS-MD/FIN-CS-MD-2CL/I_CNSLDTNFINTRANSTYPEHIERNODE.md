---
name: I_CNSLDTNFINTRANSTYPEHIERNODE
description: Cnsldtnfintranstypehiernode
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
# I_CNSLDTNFINTRANSTYPEHIERNODE

**Cnsldtnfintranstypehiernode**

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
  sqlViewName: 'ICCFTTHN',
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
    sizeCategory: #S},
  dataCategory: #HIERARCHY,
  representativeKey: 'HierarchyNode',
  modelingPattern: #ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE,
  supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #SQL_DATA_SOURCE,
                           #EXTRACTION_DATA_SOURCE,
                           #ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE ],
  sapObjectNodeType.name: 'CnsldtnFinTransTypeHierNode'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Fin Transaction Type - Hier Node'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_CnsldtnFinTransTypeHierNode
  as select from P_CnsldtnUnivHierNode_2(P_HierarchyType : 'CS07', P_MasterDataType : 'RMVCT' ) as _HierarchyNode

  association [0..1] to I_CnsldtnFinTransType          as _FinTransType on  $projection.FinancialTransactionType = _FinTransType.FinancialTransactionType

  association [1..1] to I_CnsldtnFinTransTypeHierarchy as _Hierarchy    on  $projection.CnsldtnFinTransTypeHierarchy = _Hierarchy.CnsldtnFinTransTypeHierarchy
                                                                        and $projection.ValidityEndDate              = _Hierarchy.ValidityEndDate

  association [0..*] to I_CnsldtnFinTransTypeHierNodeT as _Text         on  $projection.CnsldtnFinTransTypeHierarchy = _Text.CnsldtnFinTransTypeHierarchy
                                                                        and $projection.HierarchyNode                = _Text.HierarchyNode
                                                                        and $projection.FinancialTransactionType     = ''
{

      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @ObjectModel: {
        foreignKey.association: '_Hierarchy',
        sapObjectNodeTypeReference: 'CnsldtnFinTransTypeHierarchy' }
  key cast(_HierarchyNode.CnsldtnUniversalHierarchy as fincs_fintransactiontypehier preserving type )                as CnsldtnFinTransTypeHierarchy,

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
        foreignKey.association: '_FinTransType',
        sapObjectNodeTypeReference: 'CnsldtnFinTransactionType' }
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnFinTransTypeVH',
          element: 'FinancialTransactionType'
        }
      }]
      cast(left( _HierarchyNode.UniversalHierarchyLeafValue, 3 ) as fincs_financialtransactiontype preserving type ) as FinancialTransactionType,

      _HierarchyNode.HierarchyNodeSequence,
      _HierarchyNode.HierarchyNodeLevel,
      _HierarchyNode.NodeType,


      _Text,
      _FinTransType,
      _Hierarchy
};
```
