---
name: I_CNSLDTNRPTGITEMHIERNODET_2
description: Cnsldtnrptgitemhiernodet 2
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
# I_CNSLDTNRPTGITEMHIERNODET_2

**Cnsldtnrptgitemhiernodet 2**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `_HierarchyNodeText.Language` |
| key `ConsolidationChartOfAccounts` | `cast( left(_HierarchyNodeText.HierarchyNodeClass, 2) as fincs_conschartofaccounts preserving type )` |
| key `ConsolidationReportingItemHier` | `cast( substring(_HierarchyNodeText.UniversalHierHierarchyID, 9, 10 ) as fincs_reportingitemhierarchy preserving type )` |
| key `ValidityEndDate` | `_HierarchyNodeText.ValidityEndDate` |
| key `HierarchyNode` | `_HierarchyNodeText.HierarchyNode` |
| `ValidityStartDate` | `_HierarchyNodeText.ValidityStartDate` |
| `ParentNode` | `_HierarchyNodeText.ParentNode` |
| `HierarchyVersion` | `_HierarchyNodeText.HierarchyVersion` |
| `HierarchyNodeText` | `_HierarchyNodeText.HierarchyNodeText` |
| `_CnsldtnChartOfAccounts` | *Association* |
| `_Hierarchy` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CnsldtnChartOfAccounts` | `I_CnsldtnChartOfAccounts` | [1..1] |
| `_Hierarchy` | `I_CnsldtnRptgItemHierarchy_2` | [1..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICCRIHIERNODET2',
  preserveKey: true,
  compiler.compareFilter: true
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
    serviceQuality: #A,
    sizeCategory: #XL
  },
  dataCategory: #TEXT,
  representativeKey: 'HierarchyNode',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT]
}
@VDM.viewType: #BASIC
@EndUserText.label: 'Cnsldtn Reporting Item Hier Node - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_CnsldtnRptgItemHierNodeT_2
  as select from P_CnsldtnUnivHierNodeText(P_HierarchyType : 'CS16', P_MasterDataType : 'RITEM' ) as _HierarchyNodeText

  association [1..1] to I_CnsldtnChartOfAccounts     as _CnsldtnChartOfAccounts on  $projection.ConsolidationChartOfAccounts = _CnsldtnChartOfAccounts.ConsolidationChartOfAccounts

  association [1..*] to I_CnsldtnRptgItemHierarchy_2 as _Hierarchy              on  $projection.ConsolidationChartOfAccounts   = _Hierarchy.ConsolidationChartOfAccounts
                                                                                and $projection.ConsolidationReportingItemHier = _Hierarchy.ConsolidationReportingItemHier
  //                                                              and $projection.ValidityEndDate               = _Hierarchy.ValidityEndDate  " HL avoid error in ODPTransientProvider Preview. Similar to Acctg
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key _HierarchyNodeText.Language,

      @ObjectModel.foreignKey.association: '_CnsldtnChartOfAccounts'
  key cast( left(_HierarchyNodeText.HierarchyNodeClass, 2) as fincs_conschartofaccounts preserving type )                    as ConsolidationChartOfAccounts,

      @ObjectModel.foreignKey.association: '_Hierarchy'
  key cast( substring(_HierarchyNodeText.UniversalHierHierarchyID, 9, 10 ) as fincs_reportingitemhierarchy preserving type ) as ConsolidationReportingItemHier,

      @Semantics.businessDate.to: true
  key _HierarchyNodeText.ValidityEndDate,

  key _HierarchyNodeText.HierarchyNode,

      @Semantics.businessDate.from: true
      _HierarchyNodeText.ValidityStartDate,

      _HierarchyNodeText.ParentNode,

      _HierarchyNodeText.HierarchyVersion,

      @Semantics.text: true
      _HierarchyNodeText.HierarchyNodeText,


      _CnsldtnChartOfAccounts,
      _Language,
      _Hierarchy
}
where
  // 2108 HL, STS: to be removed if hierarchy is time dependent
     _HierarchyNodeText.ValidityEndDate = '99991231'
  or _HierarchyNodeText.ValidityEndDate = '00000000';
```
