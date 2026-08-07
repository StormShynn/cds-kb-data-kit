---
name: I_CNSLDTNFSITEMHIERNODETEXT_2
description: Cnsldtnfsitemhiernodetext 2
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
  - text
  - item-level
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNFSITEMHIERNODETEXT_2

**Cnsldtnfsitemhiernodetext 2**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | | `_HierarchyNodeText` | `Language` |  |  |
| `ConsolidationChartOfAccounts` | ✓ | |  |  |  |  |
| `CnsldtnFSItemHierarchy` | ✓ | |  | `cast( substring(_HierarchyNodeText.UniversalHierarchy, 9, 10 ) as fincs_fsitemhierarchy preserving type )` |  |  |
| `HierarchyNode` | ✓ | | `_HierarchyNodeText` | `HierarchyNode` |  |  |
| `ValidityEndDate` | ✓ | | `_HierarchyNodeText` | `ValidityEndDate` |  |  |
| `ValidityStartDate` |  | | `_HierarchyNodeText` | `ValidityStartDate` |  |  |
| `ParentNode` |  | | `_HierarchyNodeText` | `ParentNode` |  |  |
| `HierarchyVersion` |  | | `_HierarchyNodeText` | `HierarchyVersion` |  |  |
| `HierarchyNodeText` |  | | `_HierarchyNodeText` | `HierarchyNodeText` |  |  |
| `_Language` | | ✓ | | | | |
| `_CnsldtnChartOfAccounts` | | ✓ | | | | |
| `_Hierarchy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_CnsldtnChartOfAccounts` | `I_CnsldtnChartOfAccounts` | [1..1] |
| `_Hierarchy` | `I_CnsldtnFSItemHierarchy_2` | [1..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICCFSITMHIERT2',
  compiler.compareFilter: true
  }
@Analytics: {
  dataExtraction.enabled: true
  }
@AccessControl.authorizationCheck: #MANDATORY
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
                          #LANGUAGE_DEPENDENT_TEXT],
  sapObjectNodeType.name: 'CnsldtnFSItemHierarchyNodeText'                        
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation FS Item HierNode - Txt'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view I_CnsldtnFSItemHierNodeText_2
  as select from P_CnsldtnUnivHierNodeText_3 (P_HierarchyType: 'CS15', P_MasterDataType: 'RITEM') as _HierarchyNodeText

  association [1..1] to I_Language                 as _Language               on  $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnChartOfAccounts   as _CnsldtnChartOfAccounts on  $projection.ConsolidationChartOfAccounts = _CnsldtnChartOfAccounts.ConsolidationChartOfAccounts

  association [1..*] to I_CnsldtnFSItemHierarchy_2 as _Hierarchy              on  $projection.ConsolidationChartOfAccounts = _Hierarchy.ConsolidationChartOfAccounts
                                                                              and $projection.CnsldtnFSItemHierarchy       = _Hierarchy.CnsldtnFSItemHierarchy
  //                                                                              and $projection.ValidityEndDate              = _Hierarchy.ValidityEndDate // see Accounting
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key _HierarchyNodeText.Language,

      @ObjectModel: { foreignKey.association: '_CnsldtnChartOfAccounts' }
  key ConsolidationChartOfAccounts,

      @ObjectModel: { foreignKey.association: '_Hierarchy' }
  key cast( substring(_HierarchyNodeText.UniversalHierarchy, 9, 10 ) as fincs_fsitemhierarchy preserving type ) as CnsldtnFSItemHierarchy,

  key _HierarchyNodeText.HierarchyNode,

      @Semantics.businessDate.to: true
  key _HierarchyNodeText.ValidityEndDate,

      @Semantics.businessDate.from: true
      _HierarchyNodeText.ValidityStartDate,

      _HierarchyNodeText.ParentNode,

      _HierarchyNodeText.HierarchyVersion,

      @Semantics.text: true
      _HierarchyNodeText.HierarchyNodeText,


      _CnsldtnChartOfAccounts,
      _Language,
      _Hierarchy
};
```
