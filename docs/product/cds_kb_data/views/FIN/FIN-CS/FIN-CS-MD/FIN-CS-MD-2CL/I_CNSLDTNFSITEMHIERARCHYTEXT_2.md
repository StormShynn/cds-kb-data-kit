---
name: I_CNSLDTNFSITEMHIERARCHYTEXT_2
description: "Cnsldtnfsitemhierarchytext 2"
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
  - text
  - item-level
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNFSITEMHIERARCHYTEXT_2

**Cnsldtnfsitemhierarchytext 2**

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
| `ConsolidationChartOfAccounts` | ✓ | |  |  |  |  |
| `CnsldtnFSItemHierarchy` | ✓ | |  | `cast( substring(_HierarchyText.UniversalHierarchy, 9, 10 ) as fincs_fsitemhierarchy preserving type )` |  |  |
| `ValidityEndDate` | ✓ | | `_HierarchyText` | `ValidityEndDate` |  |  |
| `ValidityStartDate` |  | | `_HierarchyText` | `ValidityStartDate` |  |  |
| `CnsldtnFSItemHierarchyText` |  | | `_HierarchyText` | `UniversalHierarchyText` |  |  |
| `_CnsldtnChartOfAccounts` | | ✓ | | | | |
| `_Hierarchy` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CnsldtnChartOfAccounts` | `I_CnsldtnChartOfAccounts` | [1..1] |
| `_Hierarchy` | `I_CnsldtnFSItemHierarchy_2` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSFSITEMHIERT2',
  compiler.compareFilter: true
  }
@Analytics: {
  dataExtraction.enabled: true
  }
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  ignorePropagatedAnnotations:true
  }
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #M},
  dataCategory: #TEXT,
  representativeKey: 'CnsldtnFSItemHierarchy',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'CnsldtnFSItemHierarchyText'                        
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation FS Item Hierarchy - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_CnsldtnFSItemHierarchyText_2
  as select from P_CnsldtnUnivHierarchyText_3(P_HierarchyType : 'CS15', P_MasterDataType : 'RITEM' ) as _HierarchyText

  association [1..1] to I_CnsldtnChartOfAccounts   as _CnsldtnChartOfAccounts on  $projection.ConsolidationChartOfAccounts = _CnsldtnChartOfAccounts.ConsolidationChartOfAccounts

  association [1..1] to I_CnsldtnFSItemHierarchy_2 as _Hierarchy              on  $projection.ConsolidationChartOfAccounts = _Hierarchy.ConsolidationChartOfAccounts
                                                                              and $projection.CnsldtnFSItemHierarchy       = _Hierarchy.CnsldtnFSItemHierarchy
                                                                              and $projection.ValidityEndDate              = _Hierarchy.ValidityEndDate
{
        @ObjectModel.foreignKey.association: '_Language'
        @Semantics.language
  key   _HierarchyText.Language,

        @ObjectModel: { foreignKey.association: '_CnsldtnChartOfAccounts'}
        @Consumption.valueHelpDefinition: [{
          entity: { name: 'I_CnsldtnChartOfAccountsVH',
          element: 'ConsolidationChartOfAccounts' }
        }]
  key   ConsolidationChartOfAccounts,

  key   cast( substring(_HierarchyText.UniversalHierarchy, 9, 10 ) as fincs_fsitemhierarchy preserving type ) as CnsldtnFSItemHierarchy,

        @Semantics.businessDate.to: true
  key   _HierarchyText.ValidityEndDate,

        @Semantics.businessDate.from: true
        _HierarchyText.ValidityStartDate,

        @Semantics.text: true
        _HierarchyText.UniversalHierarchyText                                                                 as CnsldtnFSItemHierarchyText,


        _CnsldtnChartOfAccounts,
        _Language,
        _Hierarchy
};
```
