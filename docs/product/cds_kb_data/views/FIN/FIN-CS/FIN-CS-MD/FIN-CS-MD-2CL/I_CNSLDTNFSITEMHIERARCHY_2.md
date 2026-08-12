---
name: I_CNSLDTNFSITEMHIERARCHY_2
description: "Cnsldtnfsitemhierarchy 2"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_CNSLDTNFSITEMHIERARCHY_2

**Cnsldtnfsitemhierarchy 2**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationChartOfAccounts` | ✓ | |  |  |  |  |
| `CnsldtnFSItemHierarchy` | ✓ | |  | `cast( substring(_Hierarchy.UniversalHierarchy, 9, 10 ) as fincs_fsitemhierarchy preserving type )` |  |  |
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
| `_Text` | `I_CnsldtnFSItemHierarchyText_2` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSFSITEMHIER2',
  compiler.compareFilter: true
  }
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
  }
@AccessControl: {
  authorizationCheck: #MANDATORY
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations:true
  }
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #S},
  representativeKey: 'CnsldtnFSItemHierarchy',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION ],
    sapObjectNodeType.name: 'ConsolidationFSItemHierarchy'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Consolidation FS Item Hierarchy'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_CnsldtnFSItemHierarchy_2
  as select from P_CnsldtnUnivHierarchy_3( P_HierarchyType: 'CS15', P_MasterDataType : 'RITEM' ) as _Hierarchy

  association [1..1] to I_CnsldtnChartOfAccounts       as _CnsldtnChartOfAccounts on  $projection.ConsolidationChartOfAccounts = _CnsldtnChartOfAccounts.ConsolidationChartOfAccounts

  association [0..*] to I_CnsldtnFSItemHierarchyText_2 as _Text                   on  $projection.ConsolidationChartOfAccounts = _Text.ConsolidationChartOfAccounts
                                                                                  and $projection.CnsldtnFSItemHierarchy       = _Text.CnsldtnFSItemHierarchy
  //                                                                                  and $projection.ValidityEndDate              = _Text.ValidityEndDate HL: analytic engine
{

      @ObjectModel: {
        foreignKey.association: '_CnsldtnChartOfAccounts',
        sapObjectNodeTypeReference: 'ConsolidationChartOfAccounts' }
      @Consumption.valueHelpDefinition: [{
        entity: { name: 'I_CnsldtnChartOfAccountsVH',
        element: 'ConsolidationChartOfAccounts' }
      }]
      @Hierarchy.notAssignedNode.filter: true
  key ConsolidationChartOfAccounts,

      @ObjectModel.text.association: '_Text'
  key cast( substring(_Hierarchy.UniversalHierarchy, 9, 10 ) as fincs_fsitemhierarchy preserving type ) as CnsldtnFSItemHierarchy,

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
};
```
