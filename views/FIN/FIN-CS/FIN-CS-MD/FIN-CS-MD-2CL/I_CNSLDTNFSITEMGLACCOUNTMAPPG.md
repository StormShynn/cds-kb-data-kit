---
name: I_CNSLDTNFSITEMGLACCOUNTMAPPG
description: Cnsldtnfsitemgl AccountMAPPG
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
  - item-level
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNFSITEMGLACCOUNTMAPPG

**Cnsldtnfsitemgl AccountMAPPG**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ConsolidationChartOfAccounts` | ✓ | |  | `cast( _Source.ritclg as fincs_conschartofaccounts preserving type )` |
| `ChartOfAccounts` | ✓ | |  | `cast( _Source.ktopl as fincs_chartofaccounts preserving type )` |
| `CnsldtnFSItemMapping` | ✓ | |  | `cast( _Source.mapping_id as fincs_fsitemmapping preserving type )` |
| `CnsldtnFSItemMappingRevision` | ✓ | |  | `cast( _Source.revision as fincs_fsitemmappingrevision preserving type )` |
| `GLAccount` | ✓ | |  | `cast( _Source.racct as fincs_glaccount preserving type )` |
| `CnsldtnFinancialStatementItem` |  | |  | `cast( _Source.ritem as fincs_consolidationfsitem preserving type )` |
| `_CnsldtnChartOfAccounts` | | ✓ | | |
| `_ChartOfAccounts` | | ✓ | | |
| `_CnsldtnFSItemMapping` | | ✓ | | |
| `_CnsldtnFSItemMappingRevision` | | ✓ | | |
| `_GLAccount` | | ✓ | | |
| `_CnsldtnFSItem` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CnsldtnChartOfAccounts` | `I_CnsldtnChartOfAccounts` | [1..1] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [1..1] |
| `_CnsldtnFSItemMapping` | `I_CnsldtnFSItemMapping` | [1..1] |
| `_CnsldtnFSItemMappingRevision` | `I_CnsldtnFSItemMappingRevision` | [1..1] |
| `_GLAccount` | `I_GLAccountInChartOfAccounts` | [1..1] |
| `_CnsldtnFSItem` | `I_CnsldtnFSItem_2` | [1..1] |

## Source Code

```abap
@Analytics: {
  dataExtraction.enabled: true,
  technicalName: 'ICSFSITEMGLACCOUNTMAPPG'
}
@AccessControl.authorizationCheck: #MANDATORY
@Metadata:{
  ignorePropagatedAnnotations: true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #XL
  },
  representativeKey: 'GLAccount',
  modelingPattern: #NONE,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #EXTRACTION_DATA_SOURCE,
                          #SQL_DATA_SOURCE ],
  sapObjectNodeType.name: 'CnsldtnFSItemGLAccountMapping'
}
@Search.searchable: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Cnsldtn FS Item to G/L Account Mapping'
define view entity I_CnsldtnFSItemGLAccountMappg
  as select from fincs_fsimapitm as _Source

  association [1..1] to I_CnsldtnChartOfAccounts       as _CnsldtnChartOfAccounts       on  $projection.ConsolidationChartOfAccounts = _CnsldtnChartOfAccounts.ConsolidationChartOfAccounts

  association [1..1] to I_ChartOfAccounts              as _ChartOfAccounts              on  $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts

  association [1..1] to I_CnsldtnFSItemMapping         as _CnsldtnFSItemMapping         on  $projection.CnsldtnFSItemMapping = _CnsldtnFSItemMapping.CnsldtnFSItemMapping

  association [1..1] to I_CnsldtnFSItemMappingRevision as _CnsldtnFSItemMappingRevision on  $projection.ConsolidationChartOfAccounts = _CnsldtnFSItemMappingRevision.ConsolidationChartOfAccounts
                                                                                        and $projection.ChartOfAccounts              = _CnsldtnFSItemMappingRevision.ChartOfAccounts
                                                                                        and $projection.CnsldtnFSItemMapping         = _CnsldtnFSItemMappingRevision.CnsldtnFSItemMapping
                                                                                        and $projection.CnsldtnFSItemMappingRevision = _CnsldtnFSItemMappingRevision.CnsldtnFSItemMappingRevision

  association [1..1] to I_GLAccountInChartOfAccounts   as _GLAccount                    on  $projection.ChartOfAccounts = _GLAccount.ChartOfAccounts
                                                                                        and $projection.GLAccount       = _GLAccount.GLAccount

  association [1..1] to I_CnsldtnFSItem_2              as _CnsldtnFSItem                on  $projection.ConsolidationChartOfAccounts  = _CnsldtnFSItem.ConsolidationChartOfAccounts
                                                                                        and $projection.CnsldtnFinancialStatementItem = _CnsldtnFSItem.CnsldtnFinancialStatementItem

{

      @ObjectModel.foreignKey.association: '_CnsldtnChartOfAccounts'
  key cast( _Source.ritclg as fincs_conschartofaccounts preserving type )     as ConsolidationChartOfAccounts,

      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
  key cast( _Source.ktopl as fincs_chartofaccounts preserving type )          as ChartOfAccounts,

      @ObjectModel.foreignKey.association: '_CnsldtnFSItemMapping'
  key cast( _Source.mapping_id as fincs_fsitemmapping preserving type )       as CnsldtnFSItemMapping,

      @ObjectModel.foreignKey.association: '_CnsldtnFSItemMappingRevision'
  key cast( _Source.revision as fincs_fsitemmappingrevision preserving type ) as CnsldtnFSItemMappingRevision,

      @Search:{
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.8
      }
      @ObjectModel.foreignKey.association: '_GLAccount'
  key cast( _Source.racct as fincs_glaccount preserving type )                as GLAccount,

      @Search:{
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.8
      }
      @ObjectModel.foreignKey.association: '_CnsldtnFSItem'
      cast( _Source.ritem as fincs_consolidationfsitem preserving type )      as CnsldtnFinancialStatementItem,


      /* Associations */
      _CnsldtnChartOfAccounts,
      _ChartOfAccounts,
      _CnsldtnFSItemMapping,
      _CnsldtnFSItemMappingRevision,
      _GLAccount,
      _CnsldtnFSItem

}
```
