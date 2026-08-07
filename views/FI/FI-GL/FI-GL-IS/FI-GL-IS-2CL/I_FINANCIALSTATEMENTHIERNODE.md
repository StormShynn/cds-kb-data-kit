---
name: I_FINANCIALSTATEMENTHIERNODE
description: Financialstatementhiernode
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
# I_FINANCIALSTATEMENTHIERNODE

**Financialstatementhiernode**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `}` |  | |  | `recurse: { parent: 'ParentNode', child: 'HierarchyNode' }` |
| `'_Hierarchy'` |  | |  | `directory: '_Hierarchy'` |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFISTMTHERNODE'
@EndUserText.label: 'Financial Statement Hierarchy Node'
@VDM.viewType: #BASIC
@ObjectModel: { dataCategory: #HIERARCHY }
@ObjectModel.representativeKey: 'HierarchyNode'
@Hierarchy.parentChild:
{
  recurse:
    {
        parent: 'ParentNode',
        child:  'HierarchyNode'
     },
  siblingsOrder:
    {
        by: 'HierarchyNodeSequence',
        direction: 'ASC'
    },
  directory: '_Hierarchy'
  }
@AccessControl.authorizationCheck: #CHECK
@AbapCatalog.buffering.status: #NOT_ALLOWED
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,#ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE, #EXTRACTION_DATA_SOURCE]
@AbapCatalog.compiler.compareFilter:true
@AbapCatalog.preserveKey:true
@Analytics.dataExtraction.enabled: true
@ObjectModel.sapObjectNodeType.name:'FinancialStatementHierNode'

define view I_FinancialStatementHierNode
  as select from P_FinancialStatementHierNode
  association [0..*] to I_FinancialStatementHierNodeT as _Text                       on  $projection.FinancialStatementHierarchy = _Text.FinancialStatementHierarchy
                                                                                     and $projection.HierarchyNode               = _Text.HierarchyNode
                                                                                     and $projection.FinancialStatementLeafItem  = '' // just to show that this association is only to be followed if GLAcount is blank

  association [0..1] to I_FinancialStatementLeafItem  as _FinancialStatementLeafItem on  $projection.FinancialStatementLeafItem = _FinancialStatementLeafItem.FinancialStatementLeafItem

  association [0..1] to I_FinancialStatementHier      as _Hierarchy                  on  $projection.FinancialStatementHierarchy = _Hierarchy.FinancialStatementHierarchy
                                                                                     and $projection.ValidityEndDate             = _Hierarchy.ValidityEndDate // Hierarchy directory and hierarchy nodes have the same time slice

  association [0..1] to I_FinancialStatementHierNode  as _ParentNode                 on  $projection.FinancialStatementHierarchy = _ParentNode.FinancialStatementHierarchy
                                                                                     and $projection.ValidityEndDate             = _ParentNode.ValidityEndDate
                                                                                     and $projection.ParentNode                  = _ParentNode.HierarchyNode


{

       @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
       @ObjectModel.foreignKey.association: '_Hierarchy'
  key  FinancialStatementHierarchy,
       @ObjectModel.text.association: '_Text'
  key  HierarchyNode,
       @Semantics.businessDate.to: true
       @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
  key  ValidityEndDate,
       @Semantics.businessDate.from: true
       ValidityStartDate,


       ParentNode,
       HierarchyVersion,
       @ObjectModel.foreignKey.association: '_FinancialStatementLeafItem'
       FinancialStatementLeafItem,
       SequenceNumber, // used for sorting
       @Semantics.signReversalIndicator: true
       SignIsInverted,
       ChartOfAccounts,
       FinancialStatementNodeType,
       @Analytics.dataExtraction.relevant: true
       FinStmntNodeFormattedID,
       HierarchyNodeVal,
       HierarchyNodeSequence, //sequence in num6
       HierarchyLevel,
       DebitCreditCode,
       _Text,
       _FinancialStatementLeafItem,
       _Hierarchy,
       _ParentNode

}
```
