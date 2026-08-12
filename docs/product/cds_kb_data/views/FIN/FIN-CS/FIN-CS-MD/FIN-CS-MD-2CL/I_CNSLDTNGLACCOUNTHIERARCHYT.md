---
name: I_CNSLDTNGLACCOUNTHIERARCHYT
description: "Cnsldtngl AccountHIERARCHYT"
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
  - gl-account
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNGLACCOUNTHIERARCHYT

**Cnsldtngl AccountHIERARCHYT**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | | `_HierarchyText` | `Language` |  |  |
| `ChartOfAccounts` | ✓ | | `_HierarchyText` | `ChartOfAccounts` |  |  |
| `CnsldtnGLAccountHierarchy` | ✓ | |  | `cast(_HierarchyText.UniversalHierarchy as fincs_glaccounthierarchy preserving type )` |  |  |
| `ValidityEndDate` | ✓ | | `_HierarchyText` | `ValidityEndDate` |  |  |
| `ValidityStartDate` |  | | `_HierarchyText` | `ValidityStartDate` |  |  |
| `ConsolidationGLAccountHierText` |  | |  | `cast(_HierarchyText.UniversalHierarchyText as fincs_glaccounthierarchytext preserving type )` |  |  |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_Hierarchy` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ChartOfAccounts` | `I_CnsldtnGLChartOfAccounts` | [1..1] |
| `_Hierarchy` | `I_CnsldtnGLAccountHierarchy` | [1..1] |

## Source Code

```abap
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #MANDATORY
@Metadata:{
  ignorePropagatedAnnotations:true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #M
  },
  representativeKey: 'CnsldtnGLAccountHierarchy',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #LANGUAGE_DEPENDENT_TEXT,
                          #EXTRACTION_DATA_SOURCE,
                          #SQL_DATA_SOURCE ],
  sapObjectNodeType.name: 'CnsldtnGLAccountHierarchyText'                        
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn G/L Account Hierarchy - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_CnsldtnGLAccountHierarchyT
  as select from P_CnsldtnUnivHierarchyText_3(P_HierarchyType : 'CS02', P_MasterDataType : 'RACCT' ) as _HierarchyText

  association [1..1] to I_CnsldtnGLChartOfAccounts  as _ChartOfAccounts on  $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts

  association [1..1] to I_CnsldtnGLAccountHierarchy as _Hierarchy       on  $projection.ChartOfAccounts           = _Hierarchy.ChartOfAccounts
                                                                        and $projection.CnsldtnGLAccountHierarchy = _Hierarchy.CnsldtnGLAccountHierarchy
                                                                        and $projection.ValidityEndDate           = _Hierarchy.ValidityEndDate

{
        @Semantics.language
        @ObjectModel.foreignKey.association: '_Language'
  key   _HierarchyText.Language,
        @Consumption.valueHelpDefinition: [{
                         entity: {
                           name: 'I_CnsldtnGLChartOfAccountsVH',
                           element: 'ChartOfAccounts'
                         }
                       }]
        @ObjectModel.foreignKey.association: '_ChartOfAccounts'
  key   _HierarchyText.ChartOfAccounts,


  key   cast(_HierarchyText.UniversalHierarchy as fincs_glaccounthierarchy preserving type )         as CnsldtnGLAccountHierarchy,

        @Semantics.businessDate.to: true
  key   _HierarchyText.ValidityEndDate,

        @Semantics.businessDate.from: true
        _HierarchyText.ValidityStartDate,

        @Semantics.text: true
        cast(_HierarchyText.UniversalHierarchyText as fincs_glaccounthierarchytext preserving type ) as ConsolidationGLAccountHierText,

        _Language,
        _ChartOfAccounts,
        _Hierarchy
};
```
