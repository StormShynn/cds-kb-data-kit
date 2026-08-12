---
name: I_FINANCIALSTATEMENTLEAFITEM
description: "Financialstatementleafitem"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - item-level
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_FINANCIALSTATEMENTLEAFITEM

**Financialstatementleafitem**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialStatementLeafItem` | ✓ | |  |  |  |  |
| `FinancialStmntLeafItemExtID` |  | |  |  |  |  |
| `_FinancialStatementHierNode` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FinancialStatementHierNode` | `I_FinancialStatementHierNode` | [0..*] |
| `_Text` | `I_FinancialStatementLeafItemT` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFISTMNTLFITM'
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Financial Statement Leaf'
@Analytics: {dataCategory: #DIMENSION}
@VDM.viewType: #COMPOSITE
//@ObjectModel.entityChangeStateId: 'LastChangeDateTime'
@ObjectModel.representativeKey: 'FinancialStatementLeafItem'
@AbapCatalog.buffering.status: #NOT_ALLOWED
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #D
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ]

define view I_FinancialStatementLeafItem
  as select from P_FinancialStatementLeafItem
  association [0..*] to I_FinancialStatementHierNode  as _FinancialStatementHierNode on $projection.FinancialStatementLeafItem = _FinancialStatementHierNode.FinancialStatementLeafItem
  association [0..*] to I_FinancialStatementLeafItemT as _Text                       on $projection.FinancialStatementLeafItem = _Text.FinancialStatementLeafItem
{
      @ObjectModel.hierarchy.association: '_FinancialStatementHierNode'
      @ObjectModel.text.association: '_Text'
  key FinancialStatementLeafItem,

      FinancialStmntLeafItemExtID,

      _FinancialStatementHierNode,
      _Text
}

//union for aging increments, can not put in the P view due to composite view
union all select from I_GLAccountInChartOfAccounts as gl
  inner join          P_FINANCIALSTATEMENTINCMNTIDX on P_FINANCIALSTATEMENTINCMNTIDX.incrmnt_index > 0
association [0..*] to I_FinancialStatementHierNode  as _FinancialStatementHierNode on $projection.FinancialStatementLeafItem = _FinancialStatementHierNode.FinancialStatementLeafItem
association [0..*] to I_FinancialStatementLeafItemT as _Text                       on $projection.FinancialStatementLeafItem = _Text.FinancialStatementLeafItem
{
  key    cast(concat(concat(gl.ChartOfAccounts,concat(gl.GLAccount,'0A')),cast(P_FINANCIALSTATEMENTINCMNTIDX.incrmnt_index as char10)) as hrynode) as FinancialStatementLeafItem,
         cast( concat(gl.ChartOfAccounts,concat('/',gl.GLAccount) ) as fins_fsleaf_externalid )                                                    as FinancialStmntLeafItemExtID,
         _FinancialStatementHierNode,
         _Text
}

union all select from I_GLAccountInChartOfAccounts as gl
  inner join          P_FINANCIALSTATEMENTINCMNTIDX on P_FINANCIALSTATEMENTINCMNTIDX.incrmnt_index > 0
association [0..*] to I_FinancialStatementHierNode  as _FinancialStatementHierNode on $projection.FinancialStatementLeafItem = _FinancialStatementHierNode.FinancialStatementLeafItem
association [0..*] to I_FinancialStatementLeafItemT as _Text                       on $projection.FinancialStatementLeafItem = _Text.FinancialStatementLeafItem
{
  key    cast(concat(concat(gl.ChartOfAccounts,concat(gl.GLAccount,'1A')),cast(P_FINANCIALSTATEMENTINCMNTIDX.incrmnt_index as char10)) as hrynode) as FinancialStatementLeafItem,
         cast( concat(gl.ChartOfAccounts,concat('/',gl.GLAccount) ) as fins_fsleaf_externalid )                                                    as FinancialStmntLeafItemExtID,
         _FinancialStatementHierNode,
         _Text
}

union all select from I_GLAccountInChartOfAccounts as gl
  inner join          P_FINANCIALSTATEMENTINCMNTIDX on P_FINANCIALSTATEMENTINCMNTIDX.incrmnt_index > 0
association [0..*] to I_FinancialStatementHierNode  as _FinancialStatementHierNode on $projection.FinancialStatementLeafItem = _FinancialStatementHierNode.FinancialStatementLeafItem
association [0..*] to I_FinancialStatementLeafItemT as _Text                       on $projection.FinancialStatementLeafItem = _Text.FinancialStatementLeafItem
{
  key    cast(concat(concat(gl.ChartOfAccounts,concat(gl.GLAccount,'2A')),cast(P_FINANCIALSTATEMENTINCMNTIDX.incrmnt_index as char10)) as hrynode) as FinancialStatementLeafItem,
         cast( concat(gl.ChartOfAccounts,concat('/',gl.GLAccount) ) as fins_fsleaf_externalid )                                                    as FinancialStmntLeafItemExtID,
         _FinancialStatementHierNode,
         _Text
}
```
