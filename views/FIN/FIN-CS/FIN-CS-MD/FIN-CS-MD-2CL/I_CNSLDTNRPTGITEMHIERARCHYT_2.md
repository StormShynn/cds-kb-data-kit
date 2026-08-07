---
name: I_CNSLDTNRPTGITEMHIERARCHYT_2
description: Cnsldtnrptgitemhierarchyt 2
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
  - item-level
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNRPTGITEMHIERARCHYT_2

**Cnsldtnrptgitemhierarchyt 2**

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
| `ConsolidationChartOfAccounts` | ✓ | |  | `cast( left( _HierarchyText.HierarchyClass, 2) as fincs_conschartofaccounts preserving type )` |  |  |
| `ConsolidationReportingItemHier` | ✓ | |  | `cast( substring( _HierarchyText.UniversalHierHierarchyID, 9, 10 ) as fincs_reportingitemhierarchy preserving type )` |  |  |
| `ValidityEndDate` | ✓ | | `_HierarchyText` | `ValidityEndDate` |  |  |
| `ValidityStartDate` |  | | `_HierarchyText` | `ValidityStartDate` |  |  |
| `ConsolidationRptgItemHierText` |  | | `_HierarchyText` | `UniversalHierarchyText` |  |  |
| `_CnsldtnChartOfAccounts` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CnsldtnChartOfAccounts` | `I_CnsldtnChartOfAccounts` | [1..1] |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'ICCRIHIERDIRT2',
  compiler.compareFilter: true,
  preserveKey: true
  }
@Analytics: {
  dataExtraction.enabled: true
  }
@AccessControl.authorizationCheck: #CHECK
@Metadata:{
  ignorePropagatedAnnotations:true
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #M},
  representativeKey: 'ConsolidationReportingItemHier',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ]
}
@VDM.viewType: #BASIC
@EndUserText.label: 'Reporting Item Hierarchy Directory - Txt'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view I_CnsldtnRptgItemHierarchyT_2
  as select from P_CnsldtnUnivHierarchyText(P_HierarchyType : 'CS16', P_MasterDataType : 'RITEM' ) as _HierarchyText

  association [1..1] to I_CnsldtnChartOfAccounts as _CnsldtnChartOfAccounts on $projection.ConsolidationChartOfAccounts = _CnsldtnChartOfAccounts.ConsolidationChartOfAccounts

{
        @ObjectModel.foreignKey.association: '_Language'
        @Semantics.language
  key   _HierarchyText.Language,

        @ObjectModel.foreignKey.association: '_CnsldtnChartOfAccounts'
  key   cast( left( _HierarchyText.HierarchyClass, 2) as fincs_conschartofaccounts preserving type )                        as ConsolidationChartOfAccounts,

  key   cast( substring( _HierarchyText.UniversalHierHierarchyID, 9, 10 ) as fincs_reportingitemhierarchy preserving type ) as ConsolidationReportingItemHier,

        @Semantics.businessDate.to: true
  key   _HierarchyText.ValidityEndDate,

        @Semantics.businessDate.from: true
        _HierarchyText.ValidityStartDate,

        @Semantics.text: true
        _HierarchyText.UniversalHierarchyText                                                                               as ConsolidationRptgItemHierText,


        _CnsldtnChartOfAccounts,
        _Language
};
```
