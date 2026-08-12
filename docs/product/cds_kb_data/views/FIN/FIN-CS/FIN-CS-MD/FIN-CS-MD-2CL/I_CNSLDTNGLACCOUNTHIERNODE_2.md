---
name: I_CNSLDTNGLACCOUNTHIERNODE_2
description: "Cnsldtngl AccountHIERNODE 2"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - gl-account
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNGLACCOUNTHIERNODE_2

**Cnsldtngl AccountHIERNODE 2**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
  sapObjectNodeType.name: 'CnsldtnGLAccountHierarchyNode'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@EndUserText.label: 'Cnsldtn G/L Account - Hierarchy Node'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_CnsldtnGLAccountHierNode_2
  as select from P_CnsldtnUnivHierNode_3(P_HierarchyType : 'CS02', P_MasterDataType : 'RACCT' ) as _HierarchyNode

  association [1..1] to I_CnsldtnGLChartOfAccounts  as _ChartOfAccounts on  $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts

  association [0..1] to I_CnsldtnGLAccount_2        as _GLAccount       on  $projection.ChartOfAccounts = _GLAccount.ChartOfAccounts
                                                                        and $projection.GLAccount       = _GLAccount.GLAccount

  association [1..1] to I_CnsldtnGLAccountHierarchy as _Hierarchy       on  $projection.ChartOfAccounts           = _Hierarchy.ChartOfAccounts
                                                                        and $projection.CnsldtnGLAccountHierarchy = _Hierarchy.CnsldtnGLAccountHierarchy
                                                                        and $projection.ValidityEndDate           = _Hierarchy.ValidityEndDate

  association [0..*] to I_CnsldtnGLAccountHierNodeT as _Text            on  $projection.ChartOfAccounts           = _Text.ChartOfAccounts
                                                                        and $projection.CnsldtnGLAccountHierarchy = _Text.CnsldtnGLAccountHierarchy
                                                                        and $projection.HierarchyNode             = _Text.HierarchyNode
                                                                        and $projection.GLAccount                 = ''

{

         @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
         @ObjectModel.foreignKey.association: '_ChartOfAccounts'
         @Consumption.valueHelpDefinition: [{
           entity: {
             name: 'I_CnsldtnGLChartOfAccountsVH',
             element: 'ChartOfAccounts'
           }
         }]
  key    _HierarchyNode.ChartOfAccounts,

         @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
         @ObjectModel.foreignKey.association: '_Hierarchy'
  key    cast(_HierarchyNode.UniversalHierarchy as fincs_glaccounthierarchy preserving type ) as CnsldtnGLAccountHierarchy,

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
           foreignKey.association: '_GLAccount',
           sapObjectNodeTypeReference: 'CnsldtnGLAccount'
           }
         @Consumption.valueHelpDefinition: [{
           entity: { name: 'I_CnsldtnGLAccountVH', element: 'GLAccount' },
           additionalBinding: [{ localElement: 'ChartOfAccounts', element: 'ChartOfAccounts', usage: #FILTER_AND_RESULT }]
         }]
         _HierarchyNode.GLAccount,

         _HierarchyNode.HierarchyNodeSequence,

         _HierarchyNode.HierarchyNodeLevel,

         _HierarchyNode.NodeType,


         _Text,
         _GLAccount,
         _Hierarchy,
         _ChartOfAccounts
};
```
