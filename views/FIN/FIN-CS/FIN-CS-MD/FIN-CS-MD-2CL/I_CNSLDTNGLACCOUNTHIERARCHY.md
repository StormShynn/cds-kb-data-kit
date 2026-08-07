---
name: I_CNSLDTNGLACCOUNTHIERARCHY
description: Cnsldtngl AccountHIERARCHY
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
  - gl-account
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNGLACCOUNTHIERARCHY

**Cnsldtngl AccountHIERARCHY**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChartOfAccounts` | ✓ | | `_Hierarchy` | `ChartOfAccounts` |  |  |
| `CnsldtnGLAccountHierarchy` | ✓ | |  | `cast(_Hierarchy.UniversalHierarchy as fincs_glaccounthierarchy preserving type )` |  |  |
| `ValidityEndDate` | ✓ | | `_Hierarchy` | `ValidityEndDate` |  |  |
| `ValidityStartDate` |  | | `_Hierarchy` | `ValidityStartDate` |  |  |
| `LastChangedByUser` |  | | `_Hierarchy` | `LastChangedByUser` |  |  |
| `LastChangeDateTime` |  | | `_Hierarchy` | `LastChangeDateTime` |  |  |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ChartOfAccounts` | `I_CnsldtnGLChartOfAccounts` | [1..1] |
| `_Text` | `I_CnsldtnGLAccountHierarchyT` | [0..*] |

## Source Code

```abap
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@AccessControl:{
  authorizationCheck: #MANDATORY
}
@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations: true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #S
  },
  representativeKey: 'CnsldtnGLAccountHierarchy',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION ],
  sapObjectNodeType.name: 'CnsldtnGLAccountHierarchy'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation G/L Account Hierarchy'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_CnsldtnGLAccountHierarchy

  as select from P_CnsldtnUnivHierarchy_3(P_HierarchyType : 'CS02', P_MasterDataType : 'RACCT' ) as _Hierarchy

  association [1..1] to I_CnsldtnGLChartOfAccounts   as _ChartOfAccounts on  $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts

  association [0..*] to I_CnsldtnGLAccountHierarchyT as _Text            on  $projection.ChartOfAccounts           = _Text.ChartOfAccounts
                                                                         and $projection.CnsldtnGLAccountHierarchy = _Text.CnsldtnGLAccountHierarchy

{
         @ObjectModel.foreignKey.association: '_ChartOfAccounts'
         @Consumption.valueHelpDefinition: [{
           entity: {
             name: 'I_CnsldtnGLChartOfAccountsVH',
             element: 'ChartOfAccounts'
           }
         }]
         @Hierarchy.notAssignedNode.filter: true
  key    _Hierarchy.ChartOfAccounts,

         @ObjectModel.text.association: '_Text'
  key    cast(_Hierarchy.UniversalHierarchy as fincs_glaccounthierarchy preserving type ) as CnsldtnGLAccountHierarchy,

         @Semantics.businessDate.to: true
  key    _Hierarchy.ValidityEndDate,

         @Semantics.businessDate.from: true
         _Hierarchy.ValidityStartDate,

         @Semantics.user.lastChangedBy: true
         _Hierarchy.LastChangedByUser,

         @Semantics.systemDateTime.lastChangedAt: true
         _Hierarchy.LastChangeDateTime,

         _Text,
         _ChartOfAccounts
};
```
