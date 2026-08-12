---
name: I_FINTRANSCNDNSINGLEDATE
description: "This CDS view provides information about the conditions of a financial transactions with single dates (the indicator denoting that this condition has single dates is set). This CDS view provides the prerequisites for answering the following business questions: What is the calculation date of the condition item? What is the due date of the condition item?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCNDNSINGLEDATE')/$value
semantic_en: "This CDS view provides information about the conditions of a financial transactions with single dates (the indicator denoting that this condition has single dates is set). This CDS view provides the prerequisites for answering the following business questions: What is the calculation date of the condition item? What is the due date of the condition item?"
semantic_vi: "Fin Trans Condition Single Date — CDS view giao diện dựa trên R_FinTransCashFlowActivity."
keywords:
  - "fin"
  - "trans"
  - "condition"
  - "single"
  - "date"
  - "company"
  - "code"
  - "financial"
  - "transaction"
  - "instrument"
  - "activity"
  - "direction"
  - "item"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
  - transaction
---
# I_FINTRANSCNDNSINGLEDATE

**This CDS view provides information about the conditions of a financial transactions with single dates (the indicator denoting that this condition has single dates is set). This CDS view provides the prerequisites for answering the following business questions: What is the calculation date of the condition item? What is the due date of the condition item?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCNDNSINGLEDATE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FinancialTransaction` | ✓ | |  |  | `CHAR(13)` | Financial Transaction |
| `FinancialInstrumentActivity` | ✓ | |  |  | `NUMC(5)` | Transaction Activity |
| `FinancialTransactionDirection` | ✓ | |  |  | `NUMC(1)` | Direction of Transaction |
| `FinConditionItem` | ✓ | |  |  | `NUMC(4)` | Condition |
| `ConditionItemValidityStartDate` | ✓ | |  |  | `DATS(8)` | Condition Item Effective From |
| `FinConditionSubItem` | ✓ | |  |  | `NUMC(2)` | Level Number of Condition Item for Recurring Payments |
| `FinancialInstrProductCategory` |  | | `_FinTrans` | `FinancialInstrProductCategory` | `NUMC(3)` | Financial Instrument Product Category |
| `FinConditionConditionCategory` |  | |  |  | `CHAR(2)` | Condition Category |
| `CalculationDate` |  | |  | `case when Condition.FinConditionConditionCategory <> '21' then Condition.CalculationDate end` | `DATS(8)` | Calculation Date |
| `CalcDateIsAsEndDateMonthEnd` |  | |  | `case when Condition.FinConditionConditionCategory <> '21' then Condition.CalcDateIsAsEndDateMonthEnd end` | `CHAR(1)` | Indicator showing calculation date is month end |
| `DueDate` |  | |  |  | `DATS(8)` | Due Date |
| `DueDateIsAsEndDateMonthEnd` |  | |  |  | `CHAR(1)` | Indicator showing due date is month end |
| `ConditionPercentageRate` |  | |  |  | `DEC(10)` | Percentage rate for condition items |
| `FinConditionFixedAmount` |  | |  |  | `CURR(13)` | Fixed Amount |
| `FinConditionFixedAmountCrcy` |  | |  |  | `CUKY(5)` | Fixed Amount Currency |
| `InterestRateAdjustmentDate` |  | |  | `cast ( case when Condition.FinConditionConditionCategory = '21' then Condition.CalculationDate end as tbvaluza preserving type )` | `DATS(8)` | Interest Rate Adjustment Date |
| `IntrstRateAdjmtDateIsMonthEnd` |  | |  | `cast ( case when Condition.FinConditionConditionCategory = '21' then Condition.CalcDateIsAsEndDateMonthEnd end as adjmt_dte_as_end_dte_month_end preserving type )` | `CHAR(1)` | Indicator showing adjustment date is month end |
| `_CompanyCode` | | ✓ | | | | |
| `_FinTrans` | | ✓ | | | | |
| `_Activity` | | ✓ | | | | |
| `_Direction` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_FinTrans` | `I_FinancialTransaction` | [0..1] |
| `_Activity` | `I_FinTransActivity` | [0..1] |
| `_Direction` | `I_FinTransactionDirection` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCNDNSINGLEDATE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCNDNSINGLEDATE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFINTRANSCNDNSGL'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Fin Trans Condition Single Date'
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #M
@Metadata.allowExtensions:false
@Metadata.ignorePropagatedAnnotations: true // For C1-Release
@VDM.viewType: #COMPOSITE
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
define view I_FinTransCndnSingleDate 
  //all activities containing conditions
  as select from R_FinTransCashFlowActivity as Activity
  //all conditions of these activities (within where-condition they can be restricted)
  inner join R_FinTransCondition as Condition on Activity.CompanyCode                 = Condition.CompanyCode
                                             and Activity.FinancialTransaction        = Condition.FinancialTransaction
                                             and Activity.FinancialInstrumentActivity = Condition.FinancialInstrumentActivity
  //in case of scale condition only consider main condition (if possible join here the main condition and in where-statement restrict to main condition)
  left outer join R_FinTransCondition as Parallel on  Condition.CompanyCode                    = Parallel.CompanyCode
                                                  and Condition.FinancialTransaction           = Parallel.FinancialTransaction
                                                  and Condition.FinancialInstrumentActivity    = Parallel.FinancialInstrumentActivity
                                                  and Condition.FinancialTransactionDirection  = Parallel.FinancialTransactionDirection
                                                  and Condition.ConditionItemValidityStartDate = Parallel.ConditionItemValidityStartDate
                                                  and Condition.FinInstrConditionLogicGroup    = Parallel.FinInstrConditionLogicGroup
                                                  and Condition.FinConditionConditionCategory  = Parallel.FinConditionConditionCategory
                                                  and Condition.FinConditionItem               > Parallel.FinConditionItem
// dimensions, containing for example text fields
  association [0..1] to I_CompanyCode              as _CompanyCode   on  $projection.CompanyCode                   = _CompanyCode.CompanyCode
  association [0..1] to I_FinancialTransaction     as _FinTrans      on  $projection.CompanyCode                   = _FinTrans.CompanyCode
                                                                     and $projection.FinancialTransaction          = _FinTrans.FinancialTransaction
  association [0..1] to I_FinTransActivity         as _Activity      on  $projection.CompanyCode                   = _Activity.CompanyCode
                                                                     and $projection.FinancialTransaction          = _Activity.FinancialTransaction
                                                                     and $projection.FinancialInstrumentActivity   = _Activity.FinancialInstrumentActivity
  association [0..1] to I_FinTransactionDirection  as _Direction      on $projection.FinancialTransactionDirection = _Direction.FinancialTransactionDirection
{  
  //exposed fields
  @ObjectModel.foreignKey.association: '_CompanyCode'
  key Condition.CompanyCode                    as CompanyCode,
  @ObjectModel.foreignKey.association: '_FinTrans'
  key Condition.FinancialTransaction           as FinancialTransaction,
  @ObjectModel.foreignKey.association: '_Activity'
  key Condition.FinancialInstrumentActivity    as FinancialInstrumentActivity,
  @ObjectModel.foreignKey.association: '_Direction'
  key Condition.FinancialTransactionDirection  as FinancialTransactionDirection,
  key Condition.FinConditionItem               as FinConditionItem,
  key Condition.ConditionItemValidityStartDate as ConditionItemValidityStartDate,
  key Condition.FinConditionSubItem            as FinConditionSubItem,
  _FinTrans.FinancialInstrProductCategory      as FinancialInstrProductCategory,
  Condition.FinConditionConditionCategory      as FinConditionConditionCategory,
  
  case 
    when Condition.FinConditionConditionCategory <> '21' 
        then Condition.CalculationDate                    
    end                                        as CalculationDate,
  case 
    when Condition.FinConditionConditionCategory <> '21' 
        then Condition.CalcDateIsAsEndDateMonthEnd 
    end                                        as CalcDateIsAsEndDateMonthEnd,
  Condition.DueDate                            as DueDate,
  Condition.DueDateIsAsEndDateMonthEnd         as DueDateIsAsEndDateMonthEnd,
  Condition.ConditionPercentageRate            as ConditionPercentageRate,
  @Semantics.amount.currencyCode: 'FinConditionFixedAmountCrcy'
  Condition.FinConditionFixedAmount            as FinConditionFixedAmount,
  Condition.FinConditionFixedAmountCrcy        as FinConditionFixedAmountCrcy,
  cast ( case 
    when Condition.FinConditionConditionCategory = '21' 
        then Condition.CalculationDate 
    end as tbvaluza preserving type )          as InterestRateAdjustmentDate,
  cast ( case 
    when Condition.FinConditionConditionCategory = '21' 
        then Condition.CalcDateIsAsEndDateMonthEnd 
    end as adjmt_dte_as_end_dte_month_end preserving type )  as IntrstRateAdjmtDateIsMonthEnd,
  
  
  //exposed dimensions, containing for example text fields
  _CompanyCode,
  _FinTrans,
  _Activity,
  _Direction
}
where Condition.FinConditionHasSingleDateEntry = 'X'
  and Parallel.FinConditionItem is null
```
