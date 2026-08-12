---
name: I_FUNDTOBUDGETPERIOD
description: "Relation between Fund and Budget Period"
app_component: PSM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDTOBUDGETPERIOD')/$value
semantic_en: "Relation between Fund and Budget Period"
semantic_vi: "Relation between Fund and Budget Period — CDS view giao diện (master data) dựa trên I_FundToBudgetPeriodBasic."
keywords:
  - "relation"
  - "between"
  - "fund"
  - "and"
  - "budget"
  - "period"
  - "financial"
  - "management"
  - "area"
  - "appl"
  - "bdgt"
  - "perd"
  - "association"
  - "inactive"
tags:
  - PSM
  - budget
  - component:PSM
  - interface-view
---
# I_FUNDTOBUDGETPERIOD

**Relation between Fund and Budget Period**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDTOBUDGETPERIOD')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialManagementArea` | ✓ | |  |  | `CHAR(4)` | Financial Management Area |
| `Fund` | ✓ | |  |  | `CHAR(10)` | Fund |
| `BudgetPeriod` | ✓ | |  |  | `CHAR(10)` | Budget Period |
| `ApplOfFundByBudgetPeriod` |  | |  |  | `CHAR(16)` | Application of Funds by Budget Period |
| `BdgtPerdAssociationIsInactive` |  | |  |  | `CHAR(1)` | Indicator: Fund to Budget Period assignment is inactive |
| `FundFinMgmtAreaForAuthzn` |  | |  |  | `CHAR(4)` | FM Area for Auth Grp for Fund |
| `FundAuthznGrp` |  | |  | `'Fund Authorization Group' FundAuthznGrp` | `CHAR(10)` | Fund Authorization Group |
| `BudgetPeriodAuthznGrp` |  | |  | `'Budget Period Authorization Group' BudgetPeriodAuthznGrp` | `CHAR(10)` | Budget Period Authorization Group |
| `_Fund` | | ✓ | | | | |
| `_BudgetPeriod` | | ✓ | | | | |
| `_ApplicationOfFund` | | ✓ | | | | |
| `_FinMgmtArea` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Fund` | `I_Fund` | [0..1] |
| `_BudgetPeriod` | `I_BudgetPeriod` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDTOBUDGETPERIOD')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDTOBUDGETPERIOD')/$value)*

```abap
@EndUserText.label: 'Relation between Fund and Budget Period'

@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #M
  },
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE],
  representativeKey: 'BudgetPeriod'
}
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'IFUNDTOBDGTPERD'
define view I_FundToBudgetPeriod
  as select from I_FundToBudgetPeriodBasic

  association [0..1] to I_Fund                    as _Fund              on  $projection.FinancialManagementArea  = _Fund.FinancialManagementArea
                                                                        and $projection.Fund                     = _Fund.Fund
  association [0..1] to I_BudgetPeriod            as _BudgetPeriod      on  $projection.BudgetPeriod             = _BudgetPeriod.BudgetPeriod
                                                           
{
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_FinMgmtAreaStdVH',
                     element: 'FinancialManagementArea' }
        }]
      @ObjectModel.foreignKey.association: '_FinMgmtArea'
  key FinancialManagementArea, 
      @ObjectModel.foreignKey.association: '_Fund'
  key Fund,
      @ObjectModel.foreignKey.association: '_BudgetPeriod'
  key BudgetPeriod,
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_ApplicationOfFund',
                     element: 'ApplicationOfFunds' },
          additionalBinding: [{ localElement: 'FinancialManagementArea',
                                element: 'FinancialManagementArea' }]
        }]
      @ObjectModel.foreignKey.association: '_ApplicationOfFund'
      ApplOfFundByBudgetPeriod,
      BdgtPerdAssociationIsInactive,
      
      //Authorization
      FundFinMgmtAreaForAuthzn,
      @EndUserText.label: 'Fund Authorization Group'
      FundAuthznGrp,
      @EndUserText.label: 'Budget Period Authorization Group'
      BudgetPeriodAuthznGrp,

      _Fund,
      _BudgetPeriod,
      _ApplicationOfFund,
      _FinMgmtArea
}
```
