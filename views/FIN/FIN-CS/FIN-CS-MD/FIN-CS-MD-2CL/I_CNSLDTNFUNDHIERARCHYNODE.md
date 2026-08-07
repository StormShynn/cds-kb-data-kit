---
name: I_CNSLDTNFUNDHIERARCHYNODE
description: Cnsldtnfundhierarchynode
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
# I_CNSLDTNFUNDHIERARCHYNODE

**Cnsldtnfundhierarchynode**

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
  sapObjectNodeType.name: 'CnsldtnFundHierarchyNode'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@EndUserText.label: 'Consolidation Fund - Hierarchy Node'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CnsldtnFundHierarchyNode
  as select from P_CnsldtnUnivHierNode_3(P_HierarchyType : 'CS25', P_MasterDataType : 'RFUND' ) as _HierarchyNode

  //  prevent exposure of result set in case the assigned business switch is disabled
    inner join   I_CnsldtnBusinessSwitch                                                        as _BusinessSwitch on  _BusinessSwitch.ConsolidationBusinessSwitch    = 'FINCS_ENABLE_PS_FIELDS'
                                                                                                                   and _BusinessSwitch.CnsldtnBusinessSwitchIsEnabled = 'X'

  association [1..1] to I_CnsldtnFinManagementArea  as _FinancialManagementArea on  $projection.FinancialManagementArea = _FinancialManagementArea.FinancialManagementArea


  association [0..1] to I_CnsldtnFund               as _Fund                    on  $projection.FinancialManagementArea = _Fund.FinancialManagementArea
                                                                                and $projection.Fund                    = _Fund.Fund

  association [1..1] to I_CnsldtnFundHierarchy      as _Hierarchy               on  $projection.FinancialManagementArea = _Hierarchy.FinancialManagementArea
                                                                                and $projection.CnsldtnFundHierarchy    = _Hierarchy.CnsldtnFundHierarchy
                                                                                and $projection.ValidityEndDate         = _Hierarchy.ValidityEndDate

  association [0..*] to I_CnsldtnFundHierarchyNodeT as _Text                    on  $projection.FinancialManagementArea = _Text.FinancialManagementArea
                                                                                and $projection.CnsldtnFundHierarchy    = _Text.CnsldtnFundHierarchy
                                                                                and $projection.HierarchyNode           = _Text.HierarchyNode
                                                                                and $projection.Fund                    = ''

{
         @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
         @ObjectModel.foreignKey.association: '_FinancialManagementArea'
         @Consumption.valueHelpDefinition: [{
           entity: {
             name: 'I_CnsldtnFinManagementAreaVH',
             element: 'FinancialManagementArea'
           }
         }]
  key    cast (left(_HierarchyNode.HierarchyNodeClass, 4  ) as fincs_financialmanagementarea preserving type ) as FinancialManagementArea,

         @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
         @ObjectModel: {
           foreignKey.association: '_Hierarchy'
         //sapObjectNodeTypeReference: 'CnsldtnFundHierarchy'
         }
  key    cast(_HierarchyNode.UniversalHierarchy as fincs_fundhierarchy preserving type )                       as CnsldtnFundHierarchy,

         @ObjectModel.text.association: '_Text'
  key    _HierarchyNode.HierarchyNode,

         @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
         @Semantics.businessDate.to: true
  key    _HierarchyNode.ValidityEndDate,

         @Semantics.businessDate.from: true
         _HierarchyNode.ValidityStartDate,

         _HierarchyNode.ParentNode,

         _HierarchyNode.HierarchyVersion,

         @ObjectModel: {
           foreignKey.association: '_Fund'
         //sapObjectNodeTypeReference: 'CnsldtnFund'
         }
         @Consumption.valueHelpDefinition: [{
           entity: {
             name: 'I_CnsldtnFundVH',
             element: 'Fund'},
           additionalBinding: [{ localElement: 'FinancialManagementArea', element: 'FinancialManagementArea', usage: #FILTER_AND_RESULT }]
         }]
         cast (left(_HierarchyNode.UniversalHierarchyLeafValue, 10 ) as fincs_fund preserving type )           as Fund,

         _HierarchyNode.HierarchyNodeSequence,
         _HierarchyNode.HierarchyNodeLevel,
         _HierarchyNode.NodeType,


         /* associations */
         _Text,
         _Fund,
         _Hierarchy,
         _FinancialManagementArea
};
```
