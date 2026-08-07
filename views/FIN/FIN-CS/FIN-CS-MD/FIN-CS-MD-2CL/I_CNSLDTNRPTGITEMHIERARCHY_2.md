---
name: I_CNSLDTNRPTGITEMHIERARCHY_2
description: Cnsldtnrptgitemhierarchy 2
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
# I_CNSLDTNRPTGITEMHIERARCHY_2

**Cnsldtnrptgitemhierarchy 2**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationChartOfAccounts` | ✓ | |  | `cast( left( _Hierarchy.HierarchyClass, 2) as fincs_conschartofaccounts preserving type )` |  |  |
| `ConsolidationReportingItemHier` | ✓ | |  | `cast( substring( _Hierarchy.UniversalHierHierarchyID, 9, 10 ) as fincs_reportingitemhierarchy preserving type )` |  |  |
| `ValidityEndDate` | ✓ | | `_Hierarchy` | `ValidityEndDate` |  |  |
| `ValidityStartDate` |  | | `_Hierarchy` | `ValidityStartDate` |  |  |
| `LastChangedByUser` |  | | `_Hierarchy` | `LastChangedByUser` |  |  |
| `LastChangeDateTime` |  | | `_Hierarchy` | `LastChangeDateTime` |  |  |
| `_CnsldtnChartOfAccounts` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CnsldtnChartOfAccounts` | `I_CnsldtnChartOfAccounts` | [1..1] |
| `_Text` | `I_CnsldtnRptgItemHierarchyT_2` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICCRIHIERDIR2',
  compiler.compareFilter: true
  }
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
  }
@AccessControl.authorizationCheck: #CHECK
@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations:true
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #S },
  representativeKey: 'ConsolidationReportingItemHier',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION ],
  sapObjectNodeType.name: 'CnsldtnRptgItemHierarchy'
  }
@VDM.viewType: #BASIC
@EndUserText.label: 'Reporting Item Hierarchy'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view I_CnsldtnRptgItemHierarchy_2
  as select from P_CnsldtnUnivHierarchy(P_HierarchyType : 'CS16', P_MasterDataType : 'RITEM' ) as _Hierarchy

  association [1..1] to I_CnsldtnChartOfAccounts      as _CnsldtnChartOfAccounts on  $projection.ConsolidationChartOfAccounts = _CnsldtnChartOfAccounts.ConsolidationChartOfAccounts

  association [0..*] to I_CnsldtnRptgItemHierarchyT_2 as _Text                   on  $projection.ConsolidationChartOfAccounts   = _Text.ConsolidationChartOfAccounts
                                                                                 and $projection.ConsolidationReportingItemHier = _Text.ConsolidationReportingItemHier
  //                                                                                  and $projection.ValidityEndDate              = _Text.ValidityEndDate HL: analytic engine
{
      @ObjectModel:{
        foreignKey.association: '_CnsldtnChartOfAccounts',
        sapObjectNodeTypeReference: 'ConsolidationChartOfAccounts' }
      @Hierarchy.notAssignedNode.filter: true
  key cast( left( _Hierarchy.HierarchyClass, 2) as fincs_conschartofaccounts preserving type )                        as ConsolidationChartOfAccounts,

      @ObjectModel.text.association: '_Text'
  key cast( substring( _Hierarchy.UniversalHierHierarchyID, 9, 10 ) as fincs_reportingitemhierarchy preserving type ) as ConsolidationReportingItemHier,

      @Semantics.businessDate.to: true
  key _Hierarchy.ValidityEndDate,

      @Semantics.businessDate.from: true
      _Hierarchy.ValidityStartDate,

      @Semantics.user.lastChangedBy: true
      _Hierarchy.LastChangedByUser,

      @Semantics.systemDateTime.lastChangedAt: true
      _Hierarchy.LastChangeDateTime,


      _Text,
      _CnsldtnChartOfAccounts
}
where
  // 2108 HL, STS: to be removed if hierarchy is time dependent
     _Hierarchy.ValidityEndDate = '99991231'
  or _Hierarchy.ValidityEndDate = '00000000';
```
