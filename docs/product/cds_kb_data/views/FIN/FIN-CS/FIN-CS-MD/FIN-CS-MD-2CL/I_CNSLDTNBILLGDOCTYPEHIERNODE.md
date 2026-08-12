---
name: I_CNSLDTNBILLGDOCTYPEHIERNODE
description: "Cnsldtnbillgdoctypehiernode"
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
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNBILLGDOCTYPEHIERNODE

**Cnsldtnbillgdoctypehiernode**

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
  dataExtraction.enabled: true,
  technicalName: 'ICSBILLINGDOCTYPEHIERNODE'

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
  sapObjectNodeType.name: 'CnsldtnBillingDocTypeHierNode'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@EndUserText.label: 'Cnsldtn Billing Doc Type Hierarchy Node'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_CnsldtnBillgDocTypeHierNode
  as select from P_CnsldtnUnivHierNode_3(P_HierarchyType : 'CS27', P_MasterDataType : 'FKART' ) as _HierarchyNode

  association [0..1] to I_CnsldtnBillingDocumentType   as _BillingDocumentType on  $projection.BillingDocumentType = _BillingDocumentType.BillingDocumentType

  association [1..1] to I_CnsldtnBillingDocTypeHier    as _Hierarchy           on  $projection.CnsldtnBillingDocTypeHierarchy = _Hierarchy.CnsldtnBillingDocTypeHierarchy
                                                                               and $projection.ValidityEndDate                = _Hierarchy.ValidityEndDate

  association [0..*] to I_CnsldtnBillgDocTypeHierNodeT as _Text                on  $projection.CnsldtnBillingDocTypeHierarchy = _Text.CnsldtnBillingDocTypeHierarchy
                                                                               and $projection.HierarchyNode                  = _Text.HierarchyNode
                                                                               and $projection.BillingDocumentType            = ''
{

      @Consumption.filter: {
        mandatory : true,
        selectionType : #SINGLE,
        multipleSelections : false
      }
      @ObjectModel: {
        foreignKey.association: '_Hierarchy',
        sapObjectNodeTypeReference: 'CnsldtnBillingDocTypeHierarchy'
      }
  key cast(_HierarchyNode.UniversalHierarchy as fincs_billingdoctypehierarchy preserving type ) as CnsldtnBillingDocTypeHierarchy,

      @ObjectModel.text.association: '_Text'
  key _HierarchyNode.HierarchyNode                                                              as HierarchyNode,

      @Consumption.filter: {
        mandatory : true,
        selectionType : #SINGLE,
        multipleSelections : false
      }
      @Semantics.businessDate.to: true
  key _HierarchyNode.ValidityEndDate,

      @Semantics.businessDate.from: true
      _HierarchyNode.ValidityStartDate,

      _HierarchyNode.ParentNode,

      _HierarchyNode.HierarchyVersion,

      @ObjectModel: {
        foreignKey.association: '_BillingDocumentType',
        sapObjectNodeTypeReference: 'CnsldtnBillingDocumentType'
      }
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnBillingDocumentTypeVH',
          element: 'BillingDocumentType'
        }
      }]
      _HierarchyNode.BillingDocumentType,

      _HierarchyNode.HierarchyNodeSequence,
      _HierarchyNode.HierarchyNodeLevel,
      _HierarchyNode.NodeType,


      /* associations */
      _Text,
      _BillingDocumentType,
      _Hierarchy
}
```
