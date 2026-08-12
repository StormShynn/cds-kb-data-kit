---
name: I_CNSLDTNCUSTOMERHIERNODE
description: "Cnsldtncustomerhiernode"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - customer
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:Customer
---
# I_CNSLDTNCUSTOMERHIERNODE

**Cnsldtncustomerhiernode**

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
@Analytics: {
  dataExtraction.enabled: true
}
@Hierarchy.parentChild: [{
  recurse: {
    parent: ['ParentNode'],
    child:     ['HierarchyNode']
  },
  siblingsOrder: [{
    by: 'HierarchyNodeSequence',
    direction: #ASC
  }],
  directory: '_Hierarchy'
}]
@AccessControl:{
  authorizationCheck: #MANDATORY
}
@Metadata:{
  ignorePropagatedAnnotations: true
}
@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #M
  },
  dataCategory: #HIERARCHY,
  representativeKey: 'HierarchyNode',
  modelingPattern: #ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE
                          ],
  sapObjectNodeType.name: 'CnsldtnCustomerHierarchyNode'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Customer - Hierarchy Node'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_CnsldtnCustomerHierNode
  as select from P_CnsldtnUnivHierNode_3(P_HierarchyType : 'CS08', P_MasterDataType : 'KUNNR' ) as _HierarchyNode

  association [0..1] to I_CnsldtnCustomer          as _Customer  on  $projection.Customer = _Customer.Customer

  association [1..1] to I_CnsldtnCustomerHierarchy as _Hierarchy on  $projection.ConsolidationCustomerHierarchy = _Hierarchy.ConsolidationCustomerHierarchy
                                                                 and $projection.ValidityEndDate                = _Hierarchy.ValidityEndDate

  association [0..*] to I_CnsldtnCustomerHierNodeT as _Text      on  $projection.ConsolidationCustomerHierarchy = _Text.ConsolidationCustomerHierarchy
                                                                 and $projection.HierarchyNode                  = _Text.HierarchyNode
                                                                 and $projection.Customer                       = ''
{

      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @ObjectModel.foreignKey.association: '_Hierarchy'
  key cast(_HierarchyNode.UniversalHierarchy as fincs_customerhierarchy preserving type ) as ConsolidationCustomerHierarchy,

      @ObjectModel.text.association: '_Text'
  key _HierarchyNode.HierarchyNode,

      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @Semantics.businessDate.to: true
  key _HierarchyNode.ValidityEndDate,

      @Semantics.businessDate.from: true
      _HierarchyNode.ValidityStartDate,

      _HierarchyNode.ParentNode,

      _HierarchyNode.HierarchyVersion,

      @ObjectModel.foreignKey.association: '_Customer'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnCustomerVH',
          element: 'Customer'
        }
      }]
      Customer,

      _HierarchyNode.HierarchyNodeSequence,

      _HierarchyNode.HierarchyNodeLevel,

      _HierarchyNode.NodeType,


      _Text,
      _Customer,
      _Hierarchy
};
```
