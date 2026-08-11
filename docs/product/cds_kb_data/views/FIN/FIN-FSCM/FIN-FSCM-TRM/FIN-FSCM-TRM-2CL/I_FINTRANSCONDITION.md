---
name: I_FINTRANSCONDITION
description: "This CDS view shows the conditions of a financial transaction. This CDS view provides the prerequisites for answering the following business questions: What kinds of condition exist for a financial transaction? What kind of interest category does a condition have? Does the financial transaction have parallel interest conditions? How is the calculation date specified? How is the due date specified?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCONDITION')/$value
semantic_en: "This CDS view shows the conditions of a financial transaction. This CDS view provides the prerequisites for answering the following business questions: What kinds of condition exist for a financial transaction? What kind of interest category does a condition have? Does the financial transaction have parallel interest conditions? How is the calculation date specified? How is the due date specified?"
semantic_vi: "Financial Transaction Condition — CDS view giao diện dựa trên R_FinTransCashFlowActivity."
keywords:
  - "financial"
  - "transaction"
  - "condition"
  - "company"
  - "code"
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
# I_FINTRANSCONDITION

**This CDS view shows the conditions of a financial transaction. This CDS view provides the prerequisites for answering the following business questions: What kinds of condition exist for a financial transaction? What kind of interest category does a condition have? Does the financial transaction have parallel interest conditions? How is the calculation date specified? How is the due date specified?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCONDITION')/$value) |

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
| `FinConditionForm` |  | |  |  | `CHAR(1)` | Condition Form |
| `FinInstrConditionLogicGroup` |  | |  |  | `NUMC(4)` | Condition Logic Group |
| `TreasuryContractType` |  | |  |  | `CHAR(1)` | Contract Type |
| `FinConditionConditionCategory` |  | |  |  | `CHAR(2)` | Condition Category |
| `FinConditionConditionType` |  | |  |  | `NUMC(4)` | Condition Type |
| `InterestCalculationMethod` |  | |  | `case when Condition.FinConditionConditionCategory <> '12' then Condition.InterestCalculationMethod end` | `CHAR(1)` | Interest Calculation Method |
| `InterestCalculationType` |  | |  | `case when Condition.FinConditionConditionCategory <> '12' and Condition.FinConditionConditionCategory <> '21' then Condition.InterestCalculationType end` | `NUMC(1)` | Type of Interest Calculation |
| `FinCndnHasParallelInterest` |  | |  |  | `CHAR(1)` | Indicator if parallel interest condition exists |
| `FinConditionInterestCategory` |  | |  |  | `NUMC(2)` |  |
| `ConditionPercentageRate` |  | |  | `case when Condition.FinConditionInterestCategory <> '06' and Condition.FinConditionInterestCategory <> '07' then Condition.ConditionPercentageRate end` | `DEC(10)` | Percentage rate for condition items |
| `FinConditionFormulaReference` |  | |  | `case when Condition.FinConditionInterestCategory <> '06' and Condition.FinConditionInterestCategory <> '07' then Condition.FinConditionFormulaReference end` | `CHAR(4)` | Formula Reference |
| `InterestReference` |  | |  | `case when Condition.FinConditionInterestCategory <> '06' and Condition.FinConditionInterestCategory <> '07' then Condition.InterestReference end` | `CHAR(10)` | Reference Interest Rate |
| `FinConditionFixedAmount` |  | |  | `cast( case when Condition.FinConditionInterestCategory <> '06' and Condition.FinConditionInterestCategory <> '07' then Condition.FinConditionFixedAmount end as ftr_cndn_fixed_amount preserving type )` | `CURR(13)` | Fixed Amount |
| `FinConditionFixedAmountCrcy` |  | |  | `cast( case when ( Condition.RndngBaseUntAmtInCndnItmCrcy is not initial or Condition.FinConditionIntrstBaseAmount is not initial ) and ( Condition.FinConditionFixedAmountCrcy is null or Condition.FinConditionFixedAmountCrcy is initial ) then FinTransActivity.TransactionCurrency when Condition.FinConditionInterestCategory <> '06' and Condition.FinConditionInterestCategory <> '07' then Condition.FinConditionFixedAmountCrcy end as ftr_cndn_fixed_amount_currency preserving type )` | `CUKY(5)` | Fixed Amount Currency |
| `FinConditionRpaytPercentRate` |  | |  |  | `DEC(10)` | Repayment Percent Rate |
| `FinConditionRpaytBaseAmount` |  | |  | `case when Condition.FinConditionConditionCategory <> '12' then Condition.FinConditionRpaytBaseAmount else 0 end` | `CURR(13)` | Calculation Base Amount |
| `FinConditionRpaytAmount` |  | |  | `case when Condition.FinConditionConditionCategory <> '12' then Condition.FinConditionRpaytAmount else 0 end` | `CURR(13)` | Repayment Amount |
| `FinConditionRpaytCurrency` |  | |  |  | `CUKY(5)` | Repayment Amount Currency |
| `FinConditionHasSingleDateEntry` |  | |  |  | `CHAR(1)` | Indicator if single date entry exists |
| `CalculationDate` |  | |  | `case when Condition.FinConditionConditionCategory <> '21' then Condition.CalculationDate end` | `DATS(8)` | Calculation Date |
| `FinCndnCalcDteUpdateRule` |  | |  | `cast( case when Condition.FinConditionConditionCategory = '21' then '0' when Condition.FinCndnCalcDteUpdateMethod = '1' or Condition.FinCndnCalcDteUpdateMethod = '2' then '0' when Condition.FinCndnCalcDteUpdateMethod = '3' or Condition.FinCndnCalcDteUpdateMethod = '4' then '1' when Condition.FinCndnCalcDteUpdateMethod = '5' then '2' end as ftr_cndn_calc_date_update_rule preserving type )` | `NUMC(1)` | Calculation Date Update Rule |
| `FinCndnCalcDteFrequency` |  | |  | `case when Condition.FinConditionConditionCategory <> '21' then Condition.FinCndnCalcDteFrequency end` | `NUMC(3)` | Calculation date frequency of a financial condition |
| `FinCndnCalcDteFrqcyUnit` |  | |  | `case when Condition.FinConditionConditionCategory <> '21' then Condition.FinCndnCalcDteFrqcyUnit end` | `NUMC(1)` | Unit for the calculation date frequency |
| `CalcDateIsAsEndDateInclusive` |  | |  | `case when Condition.FinConditionConditionCategory <> '21' then Condition.CalcDateIsAsEndDateInclusive end` | `CHAR(1)` | Indicator if a date is inclusive |
| `CalcDateIsAsEndDateMonthEnd` |  | |  | `case when Condition.FinConditionConditionCategory <> '21' then Condition.CalcDateIsAsEndDateMonthEnd end` | `CHAR(1)` | Indicator showing calculation date is month end |
| `FinCndnCalcDteWrkgDayShft` |  | |  | `cast( case when Condition.FinConditionConditionCategory <> '21' then Condition.FinCndnCalcDteWrkgDayShft end as ftr_cndn_calc_date_wrk_day_sft preserving type )` | `NUMC(1)` | Working Day Shift for Calculation Day |
| `FinCndnCalcDteShftDrctn` |  | |  | `case when Condition.FinConditionConditionCategory <> '21' and Condition.FinConditionConditionCategory <> '41' then Condition.FinCndnCalcDteShftDrctn end` | `CHAR(1)` | Direction for the working day shift of date calculation |
| `FinCndnCalcDteShftNrOfDays` |  | |  | `case when Condition.FinConditionConditionCategory <> '21' then abs ( Condition.FinCndnCalcDteShftNrOfDays ) end` | `INT4(10)` |  |
| `DueDate` |  | |  | `case when Condition.FinConditionConditionCategory <> '21' and Condition.FinConditionConditionCategory <> '26' then Condition.DueDate end` | `DATS(8)` | Due Date |
| `FinCndnDueDteUpdateRule` |  | |  | `cast( case when Condition.FinConditionConditionCategory = '21' or Condition.FinConditionConditionCategory = '26' or Condition.FinConditionConditionCategory = '41' then '0' when Condition.FinCndnDueDteUpdateMethod = '1' or Condition.FinCndnDueDteUpdateMethod = '2' then '0' when Condition.FinCndnDueDteUpdateMethod = '3' or Condition.FinCndnDueDteUpdateMethod = '4' then '1' when Condition.FinCndnDueDteUpdateMethod = '5' then '2' end as ftr_cndn_due_date_update_rule preserving type )` | `NUMC(1)` | Due Date Update Rule |
| `FinCndnDueDteFrequency` |  | |  | `cast( case when Condition.FinConditionConditionCategory <> '21' and Condition.FinConditionConditionCategory <> '26' then Condition.FinCndnDueDteFrequency end as ftr_cndn_due_date_frequency preserving type )` | `NUMC(3)` | Frequency |
| `FinCndnDueDteFrqcyUnit` |  | |  | `cast( case when Condition.FinConditionConditionCategory <> '21' and Condition.FinConditionConditionCategory <> '26' then Condition.FinCndnDueDteFrqcyUnit end as ftr_cndn_due_date_frqcy_unit preserving type )` | `NUMC(1)` | Unit for Frequency |
| `DueDateIsAsEndDateInclusive` |  | |  | `case when Condition.FinConditionConditionCategory <> '21' and Condition.FinConditionConditionCategory <> '26' then Condition.DueDateIsAsEndDateInclusive end` | `CHAR(1)` | Indicator if a date is inclusive |
| `DueDateIsAsEndDateMonthEnd` |  | |  | `case when Condition.FinConditionConditionCategory <> '21' and Condition.FinConditionConditionCategory <> '26' then Condition.DueDateIsAsEndDateMonthEnd end` | `CHAR(1)` | Indicator showing due date is month end |
| `FinCndnDueDteWrkgDayShft` |  | |  | `cast( case when Condition.FinConditionConditionCategory <> '21' and Condition.FinConditionConditionCategory <> '26' and Condition.FinConditionConditionCategory <> '41' then Condition.FinCndnDueDteWrkgDayShft end as ftr_cndn_due_date_wrk_day_sft preserving type )` | `NUMC(1)` | Working Day Shift for Due Day |
| `FinCndnDueDteShftDrctn` |  | |  | `cast( case when Condition.FinConditionConditionCategory <> '21' and Condition.FinConditionConditionCategory <> '26' and Condition.FinConditionConditionCategory <> '41' then Condition.FinCndnDueDteShftDrctn end as ftr_cndn_due_date_shift_drctn preserving type )` | `CHAR(1)` | Direction of a shift |
| `FinCndnDueDteShftNrOfDays` |  | |  | `case when Condition.FinConditionConditionCategory <> '21' and Condition.FinConditionConditionCategory <> '26' and Condition.FinConditionConditionCategory <> '41' then abs ( Condition.FinCndnDueDteShftNrOfDays ) end` | `INT4(10)` |  |
| `FinConditionFactoryCalendar1` |  | |  |  | `CHAR(2)` | Factory Calendar |
| `FinConditionFactoryCalendar2` |  | |  |  | `CHAR(2)` | Factory Calendar |
| `FinConditionFactoryCalendar3` |  | |  |  | `CHAR(2)` | Factory Calendar |
| `FinConditionFactoryCalendar4` |  | |  |  | `CHAR(2)` | Factory Calendar |
| `FinConditionFactoryCalendar5` |  | |  |  | `CHAR(2)` | Factory Calendar |
| `ExponentialIntrstSettlmtFrqcy` |  | |  |  | `NUMC(2)` | Interest Settlement Frequency for Exponential Interest Calc. |
| `IntrstCalcMethFactoryCalendar` |  | |  | `case when Condition.FinConditionConditionCategory <> '12' then Condition.IntrstCalcMethFactoryCalendar end` | `CHAR(2)` | Interest Calendar |
| `FinancialConditionPaymentRate` |  | |  | `case when Condition.FinConditionInterestCategory <> '06' and Condition.FinConditionInterestCategory <> '07' then Condition.FinancialConditionPaymentRate end` | `DEC(11)` | Payment Rate |
| `InterestMarkupMarkdownValue` |  | |  | `case when Condition.FinConditionInterestCategory <> '06' and Condition.FinConditionInterestCategory <> '07' then Variable.ConditionPercentageRate end` | `DEC(10)` | Percentage rate for condition items |
| `InterestFirstPeriodRate` |  | |  | `case when Condition.FinConditionInterestCategory <> '06' and Condition.FinConditionInterestCategory <> '07' then Condition.InterestFirstPeriodRate end` | `DEC(10)` | Interest Rate for the First Period |
| `AverageIntrstRateWeightingCat` |  | |  |  | `CHAR(1)` | Weighting Category of Interest Rate |
| `AverageIntrstRateRndngCategory` |  | |  |  | `CHAR(1)` | Rounding Category of Average Interest Rate |
| `AverageIntrstRateRndngDecimals` |  | |  |  | `INT1(3)` | Number of Rounding Decimal Places for Average Interest Rate |
| `AverageInterestRateSpreadValue` |  | |  |  | `DEC(15)` | Average Interest Rate Spread |
| `AvgIntrstRateHasUsedUpperLimit` |  | |  |  | `CHAR(1)` | Use Upper Limit of Average Interest Rate |
| `AverageInterestUpperLimitRate` |  | |  |  | `DEC(15)` | Upper Limit of Average Interest Rate |
| `AvgIntrstRateHasUsedLowerLimit` |  | |  |  | `CHAR(1)` | Use Lower Limit of Average Interest Rate |
| `AverageInterestLowerLimitRate` |  | |  |  | `DEC(15)` | Lower Limit of Average Interest Rate |
| `AverageIntrstRateResetCalcEvt` |  | |  |  | `CHAR(1)` | Event for Resetting Factor Calculation |
| `FinCndnRateFactorRndngCategory` |  | |  |  | `CHAR(1)` | Rounding Category of Interest Factor |
| `FinCndnRateFactorRndngDecimals` |  | |  |  | `INT1(3)` | Number of Rounding Decimal Places for Interest Factor |
| `FinCndnFactorRoundingCategory` |  | |  |  | `CHAR(1)` | Rounding Category of a Factor |
| `FinCndnFactorRoundingDecimals` |  | |  |  | `INT1(3)` | Number of Rounding Decimal Places for a Factor |
| `FinCndnBaseFactorRndngCategory` |  | |  |  | `CHAR(1)` | Rounding Category of a Factor |
| `FinCndnBaseFactorRndngDecimals` |  | |  |  | `INT1(3)` | Number of Rounding Decimal Places for a Factor |
| `FinCndnAmountRoundingCategory` |  | |  |  | `CHAR(1)` | Rounding Category |
| `FinCndnAmountRoundingUnit` |  | |  |  | `DEC(13)` | Rounding Unit |
| `RndngBaseUntAmtInCndnItmCrcy` |  | |  |  | `CURR(17)` | Base Unit for Rounding |
| `FinConditionIntrstBaseAmount` |  | |  |  | `CURR(23)` | Calculation Base Amount for Financial Condition Interest |
| `FinCndnCalcBaseReference` |  | |  | `case when Condition.FinConditionConditionCategory <> '12' then Condition.FinCndnCalcBaseReference end` | `CHAR(4)` | Calculation Base Indicator |
| `FinCndnProcessingSequenceValue` |  | |  |  | `NUMC(2)` | Processing Sequence of Conditions |
| `FinCndnAmountTimeUnit` |  | |  | `case when ( Condition.FinConditionInterestCategory <> '06' and Condition.FinConditionInterestCategory <> '07' ) or Condition.FinConditionConditionCategory <> '12' then Condition.FinCndnAmountTimeUnit end` | `CHAR(1)` | Indicator for Calculating Amount per Month |
| `FinCndnLimitAmountCurrency` |  | |  | `case when ( Condition.FinCndnItemLowerLimitAmount is not initial or Condition.FinCndnItemUpperLimitAmount is not initial ) and ( Condition.FinCndnLimitAmountCurrency is null or Condition.FinCndnLimitAmountCurrency is initial ) then FinTransActivity.TransactionCurrency when Condition.FinConditionInterestCategory <> '06' and Condition.FinConditionInterestCategory <> '07' then Condition.FinCndnLimitAmountCurrency end` | `CUKY(5)` | Limit Amount Currency |
| `FinCndnItmHasUsedLowerLimitAmt` |  | |  | `case when Condition.FinConditionInterestCategory <> '06' and Condition.FinConditionInterestCategory <> '07' then Condition.FinCndnItmHasUsedLowerLimitAmt end` | `CHAR(1)` | Use Lower Limit of Amount |
| `FinCndnItemLowerLimitAmount` |  | |  | `case when Condition.FinConditionInterestCategory <> '06' and Condition.FinConditionInterestCategory <> '07' then Condition.FinCndnItemLowerLimitAmount end` | `CURR(23)` | Lower Limit for Amount |
| `FinCndnItmHasUsedUpperLimitAmt` |  | |  | `case when Condition.FinConditionInterestCategory <> '06' and Condition.FinConditionInterestCategory <> '07' then Condition.FinCndnItmHasUsedUpperLimitAmt end` | `CHAR(1)` | Use Upper Limit of Amount |
| `FinCndnItemUpperLimitAmount` |  | |  | `case when Condition.FinConditionInterestCategory <> '06' and Condition.FinConditionInterestCategory <> '07' then Condition.FinCndnItemUpperLimitAmount end` | `CURR(23)` | Upper Limit for Amt |
| `FinCndnCrsRefcdAccmlnCndnGrp` |  | |  |  | `NUMC(4)` | Cross-Referenced Condition Group for Accumulation |
| `RefcdIntrstRateAdjmtCondition` |  | |  | `case when Condition.FinConditionInterestCategory <> '06' and Condition.FinConditionInterestCategory <> '07' then Condition.RefcdIntrstRateAdjmtCondition end` | `NUMC(4)` | Referenced Interest Rate Adjustment Condition |
| `RefcdPrcIdxAdjmtCondition` |  | |  |  | `NUMC(4)` | Referenced Price Index Adjustment Condition |
| `InterestCalculationDateRef` |  | |  | `cast ( case Condition.FinCndnCalcDteUpdateMethod when '4' then '0' when '3' then '1' end as reference_date_for_calc_dte preserving type )` | `NUMC(1)` | reference date for calculation date |
| `InterestDueDateReference` |  | |  | `cast ( case when Condition.FinCndnDueDteUpdateMethod = '5' and Condition.FinConditionInterestCategory <> '41' then '0' when Condition.FinCndnDueDteUpdateMethod = '4' and Condition.FinConditionInterestCategory <> '41' then '0' when Condition.FinCndnDueDteUpdateMethod = '3' and Condition.FinConditionInterestCategory <> '41' then '1' end as reference_date_for_due_dte preserving type )` | `NUMC(1)` | reference date for due date |
| `CalcDteIsRegularWithVarblDte` |  | |  | `cast ( case when Condition.FinCndnCalcDteUpdateMethod = '2' and Condition.FinConditionInterestCategory <> '21' then 'X' when Condition.FinCndnCalcDteUpdateMethod <> '2' and Condition.FinConditionInterestCategory <> '21' then '' end as calc_dte_is_reg_with_varbl_dte preserving type )` | `CHAR(1)` | Regular with variable date for calculation date |
| `DueDteIsRegularWithVarblDte` |  | |  | `cast ( case when Condition.FinCndnDueDteUpdateMethod = '2' and Condition.FinConditionInterestCategory <> '21' then 'X' when Condition.FinCndnDueDteUpdateMethod <> '2' and Condition.FinConditionInterestCategory <> '21' then '' end as due_dte_is_reg_with_varbl_dte preserving type )` | `CHAR(1)` | Regular with variable date for due date |
| `FinCndnFirstPeriodCalcMethod` |  | |  | `case when Condition.FinConditionConditionCategory <> '12' then Condition.FinCndnFirstPeriodCalcMethod end` | `NUMC(1)` | Calculation Method for First Period of Condition Item |
| `FinCndnLastPeriodCalcMethod` |  | |  | `case when Condition.FinConditionConditionCategory <> '12' then Condition.FinCndnLastPeriodCalcMethod end` | `NUMC(1)` | Calculation Method for Last Period of Condition Item |
| `FinCndnDueDteShiftToTermEnd` |  | |  | `case when Condition.FinConditionConditionCategory <> '21' then Condition.FinCndnDueDteShiftToTermEnd end` | `CHAR(1)` | Shift Due Date Back to End of Term |
| `FinCndnPaytDateWrkgDayShft` |  | |  |  | `NUMC(1)` | Working Day Shift for Payment Date |
| `FinCndnRpaytSettlmt` |  | |  | `case when Condition.FinConditionConditionCategory <> '12' then Condition.FinCndnRpaytSettlmt end` | `CHAR(1)` | Indicator for Immediate Settlement (Financial Mathematics) |
| `InterestRateAdjustmentDateRule` |  | |  | `cast ( case when Condition.FinConditionConditionCategory = '21' and Condition.FinCndnCalcDteUpdateMethod = '1' then '1' when Condition.FinConditionConditionCategory = '21' and Condition.FinCndnCalcDteUpdateMethod = '5' then '2' when Condition.FinConditionConditionCategory = '21' and Condition.FinCndnCalcDteUpdateMethod = '6' then '0' when Condition.FinConditionConditionCategory = '21' and Condition.FinCndnCalcDteUpdateMethod = '7' then '3' end as tfmsrhyzap preserving type )` | `NUMC(1)` | Rule for Date Update for Interest Rate Adjustment |
| `InterestRateAdjustmentFrqcy` |  | |  | `cast ( case when Condition.FinConditionConditionCategory = '21' then Condition.FinCndnCalcDteFrequency end as ftr_cndn_adjmt_date_frequency preserving type )` | `NUMC(3)` | Frequency |
| `InterestRateAdjmtFrqcyUnit` |  | |  | `cast ( case when Condition.FinConditionConditionCategory = '21' then Condition.FinCndnCalcDteFrqcyUnit end as ftr_cndn_adjmt_date_frqcy_unit preserving type )` | `NUMC(1)` | Unit for Frequency |
| `InterestRateAdjustmentDate` |  | |  | `cast ( case when Condition.FinConditionConditionCategory = '21' then Condition.CalculationDate end as tbvaluza preserving type )` | `DATS(8)` | Interest Rate Adjustment Date |
| `IntrstRateAdjmtDateIsMonthEnd` |  | |  | `cast ( case when Condition.FinConditionConditionCategory = '21' then Condition.CalcDateIsAsEndDateMonthEnd end as adjmt_dte_as_end_dte_month_end preserving type )` | `CHAR(1)` | Indicator showing adjustment date is month end |
| `IntrstRateAdjmtDteIsExclusive` |  | |  | `cast ( case when Condition.FinConditionConditionCategory = '21' then Condition.CalcDateIsAsEndDateInclusive end as adjustment_date_is_exclusive preserving type )` | `CHAR(1)` | Exclusive Indicator for Interest Rate Adjustment Date |
| `IntrstRateAdjmtDateWrkgDayShft` |  | |  | `cast ( case when Condition.FinConditionConditionCategory = '21' then Condition.FinCndnCalcDteWrkgDayShft end as ftr_cndn_adjmt_dte_wrk_day_sft preserving type )` | `NUMC(1)` | Working Day Shift for Adjustment Day |
| `IntrstRateAdjmtShftNrOfDays` |  | |  | `cast ( case when Condition.FinConditionConditionCategory = '21' then abs ( Condition.FinCndnCalcDteShftNrOfDays ) end as tb_avgstag preserving type )` | `INT4(10)` | Number of Days for Relative Calculation of Value Date |
| `FinCndnAdjmtDteShftDrctn` |  | |  | `cast ( case when Condition.FinConditionConditionCategory = '21' then Condition.FinCndnCalcDteShftDrctn end as ftr_cndn_adjmt_dte_shft_drctn preserving type )` | `CHAR(1)` | Direction of a shift |
| `InterestRateFixingDateRule` |  | |  | `cast ( case when Condition.FinConditionConditionCategory = '21' and Condition.FinCndnDueDteUpdateMethod = '1' then '0' when Condition.FinConditionConditionCategory = '21' and Condition.FinCndnDueDteUpdateMethod = '5' then '2' when Condition.FinConditionConditionCategory = '21' and ( Condition.FinCndnDueDteUpdateMethod = '3' or Condition.FinCndnDueDteUpdateMethod = '6' or Condition.FinCndnDueDteUpdateMethod = '8' or Condition.FinCndnDueDteUpdateMethod = '9' ) then '1' end as tfmsrhy preserving type )` | `NUMC(1)` | Rule for Date Update |
| `InterestRateFixingFrqcy` |  | |  | `cast ( case when Condition.FinConditionConditionCategory = '21' then Condition.FinCndnDueDteFrequency end as ftr_cndn_fixing_date_frequency preserving type )` | `NUMC(3)` | Frequency |
| `InterestRateFixingFrqcyUnit` |  | |  | `cast ( case when Condition.FinConditionConditionCategory = '21' then Condition.FinCndnDueDteFrqcyUnit end as ftr_cndn_fixing_dte_frqcy_unit preserving type )` | `NUMC(1)` | Unit for Frequency |
| `InterestRateFixingDate` |  | |  | `cast ( case when Condition.FinConditionConditionCategory = '21' then Condition.DueDate end as tbfaelza preserving type )` | `DATS(8)` | Interest Rate Fixing Date |
| `IntrstRateFixingDateIsMonthEnd` |  | |  | `cast ( case when Condition.FinConditionConditionCategory = '21' then Condition.DueDateIsAsEndDateMonthEnd end as fixing_dte_as_end_dte_mnth_end preserving type )` | `CHAR(1)` | Indicator showing fixing date is month end |
| `FinCndnFixingDteShftDrctn` |  | |  | `cast ( case when Condition.FinConditionConditionCategory = '21' and (Condition.FinCndnDueDteWrkgDayShft = '3' or Condition.FinCndnDueDteWrkgDayShft = '4') then '-' when Condition.FinConditionConditionCategory = '21' and (Condition.FinCndnDueDteWrkgDayShft = '1' or Condition.FinCndnDueDteWrkgDayShft = '2') then '+' end as ftr_cndn_fixing_dte_shft_drctn preserving type )` | `CHAR(1)` | Direction of a shift |
| `InterestRateFixingShftNrOfDays` |  | |  | `cast ( case when Condition.FinConditionConditionCategory = '21' then abs ( Condition.FinCndnDueDteShftNrOfDays ) end as tb_azgstag preserving type )` | `INT4(10)` | No. of Days for Relative Determinatn of Interest Fixing |
| `IntrstRateFixDteShftIsModifd` |  | |  | `cast ( case when Condition.FinConditionConditionCategory = '21' and (Condition.FinCndnDueDteWrkgDayShft = '2' or Condition.FinCndnDueDteWrkgDayShft = '4') then 'X' end as tfmjmodif preserving type )` | `CHAR(1)` | 'Modified' Indicator |
| `InterestRateFixingDateRef` |  | |  | `cast ( case when Condition.FinConditionConditionCategory = '21' and ( Condition.FinCndnDueDteUpdateMethod = '1' or Condition.FinCndnDueDteUpdateMethod = '5' or Condition.FinCndnDueDteUpdateMethod = '8' ) then '0' when Condition.FinConditionConditionCategory = '21' and Condition.FinCndnDueDteUpdateMethod = '3' then '1' when Condition.FinConditionConditionCategory = '21' and Condition.FinCndnDueDteUpdateMethod = '6' then '3' when Condition.FinConditionConditionCategory = '21' and Condition.FinCndnDueDteUpdateMethod = '9' then '2' end as tfmzreldat preserving type )` | `NUMC(1)` | Reference Date for Interest Rate Determination Date |
| `FinCndnRateFixingLockoutPeriod` |  | |  |  | `INT4(10)` | Number of Days for Relative Payment Date Calculation |
| `TreasuryPriceIndex` |  | |  |  | `CHAR(60)` | Treasury Price Index |
| `PriceIndexInterpolationMethod` |  | |  |  | `CHAR(4)` | Index Interpolation Method |
| `PriceIndexApplicationMethod` |  | |  |  | `CHAR(4)` | Price Index Application Method |
| `PrcIdxFctrCalcCompoundingFrqcy` |  | |  |  | `NUMC(3)` | Compounding Frequency of Price Index Factor |
| `FinCndnDayFracRoundingCat` |  | |  |  | `CHAR(1)` | Day Fraction Rounding Category |
| `FinCndnDayFracRoundingDcmls` |  | |  |  | `INT1(3)` | Day Fraction Rounding Decimal |
| `PrcIdxAdjmtDateReference` |  | |  |  | `NUMC(1)` | Reference Date for Index Adjustment Date |
| `PrcIdxAdjmtDateWrkgDayShift` |  | |  |  | `NUMC(1)` | Working Day Shift for Price Index Adjustment Date |
| `PrcIdxAdjmtDateShftDrctn` |  | |  |  | `CHAR(1)` | Working Day Shift Direction for Price Index Adjustment Date |
| `PrcIdxAdjmtShftNrOfDays` |  | |  | `abs( Condition.PrcIdxAdjmtShftNrOfDays )` | `INT4(10)` |  |
| `PriceIndexAdjustmentBaseDate` |  | |  |  | `DATS(8)` | Index Base Date |
| `PrcIdxAdjmtFixingLowDate` |  | |  |  | `DATS(8)` | Index Fixing Date Low |
| `PrcIdxAdjmtFixingHighDate` |  | |  |  | `DATS(8)` | Index Fixing Date High |
| `PrcIdxAdjmtFxngDteWrkgDayShft` |  | |  |  | `NUMC(1)` | Working Day Shift for Price Index Fixing Date |
| `PrcIdxAdjmtFixingDateShftDrctn` |  | |  |  | `CHAR(1)` | Working Day Shift Direction for Price Index Fixing Date |
| `PrcIdxAdjmtFxngDteShftNrOfDays` |  | |  | `abs( Condition.PrcIdxAdjmtFxngDteShftNrOfDays )` | `INT4(10)` |  |
| `FinConditionSettlementCrcy` |  | |  |  | `CUKY(5)` | Settlement Currency |
| `ForeignExchangeFixingReference` |  | |  | `cast( Condition.ForeignExchangeFixingReference as ftr_fixing_ref_id )` | `CHAR(30)` | Fixing Reference ID |
| `FXRateAdjmtFixingDateRef` |  | |  | `cast(case when Condition.FinConditionConditionCategory = '41' and Condition.FinCndnDueDteUpdateMethod = '9' then '0' when Condition.FinConditionConditionCategory = '41' and Condition.FinCndnDueDteUpdateMethod = '3' then '1' end as ftr_fx_fixing_date_reference preserving type)` | `NUMC(1)` | Foreign Exchange Rate Fixing Date Reference |
| `FXRateAdjmtFixingDateShftDrctn` |  | |  | `cast(case when Condition.FinConditionConditionCategory = '41' and (Condition.FinCndnDueDteWrkgDayShft = '1' or Condition.FinCndnDueDteWrkgDayShft = '2') then '+' when Condition.FinConditionConditionCategory = '41' and (Condition.FinCndnDueDteWrkgDayShft = '3' or Condition.FinCndnDueDteWrkgDayShft = '4') then '-' end as ftr_fx_fixing_date_shift_drctn preserving type)` | `CHAR(1)` | Working Day Shift Direction for FX Fixing Date |
| `FXRateAdjmtFxngDteShftNrOfDays` |  | |  | `cast(case when Condition.FinConditionConditionCategory = '41' then abs(Condition.FinCndnDueDteShftNrOfDays) end as ftr_fx_fixing_date_shft_days preserving type)` | `INT4(10)` | Number of Days for FX Fixing Date Shift |
| `FXRateAdjmtFxngDteShftIsModifd` |  | |  | `cast(case when Condition.FinConditionConditionCategory = '41' and (Condition.FinCndnDueDteWrkgDayShft = '2' or Condition.FinCndnDueDteWrkgDayShft = '4') then 'X' end as ftr_fx_fixing_dte_shft_is_modi preserving type)` | `CHAR(1)` | Foreign Exchange Fixing Date Shift Is Modified Indicator |
| `_CompanyCode` | | ✓ | | | | |
| `_FinTrans` | | ✓ | | | | |
| `_Activity` | | ✓ | | | | |
| `_Direction` | | ✓ | | | | |
| `_ContractType` | | ✓ | | | | |
| `_ConditionCategory` | | ✓ | | | | |
| `_ConditionType` | | ✓ | | | | |
| `_InterestCategory` | | ✓ | | | | |
| `_ReferenceInterestRate` | | ✓ | | | | |
| `_FixCurrency` | | ✓ | | | | |
| `_RepaymentCurrency` | | ✓ | | | | |
| `_Calendar1` | | ✓ | | | | |
| `_Calendar2` | | ✓ | | | | |
| `_Calendar3` | | ✓ | | | | |
| `_Calendar4` | | ✓ | | | | |
| `_Calendar5` | | ✓ | | | | |
| `_SingleDate` | | ✓ | | | | |
| `_FormulaVariable` | | ✓ | | | | |
| `_Scale` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_FinTrans` | `I_FinancialTransaction` | [0..1] |
| `_Activity` | `I_FinTransActivity` | [0..1] |
| `_Direction` | `I_FinTransactionDirection` | [0..1] |
| `_ContractType` | `I_TreasuryContractType` | [0..1] |
| `_ConditionCategory` | `I_FinCndnConditionCategory` | [0..1] |
| `_ConditionType` | `I_FinCndnConditionType` | [0..1] |
| `_InterestCategory` | `I_FinCndnInterestCategory` | [0..1] |
| `_ReferenceInterestRate` | `I_ReferenceInterestRate` | [0..1] |
| `_FixCurrency` | `I_Currency` | [0..1] |
| `_RepaymentCurrency` | `I_Currency` | [0..1] |
| `_Calendar1` | `I_FactoryCalendar` | [0..1] |
| `_Calendar2` | `I_FactoryCalendar` | [0..1] |
| `_Calendar3` | `I_FactoryCalendar` | [0..1] |
| `_Calendar4` | `I_FactoryCalendar` | [0..1] |
| `_Calendar5` | `I_FactoryCalendar` | [0..1] |
| `_SingleDate` | `I_FinTransCndnSingleDate` | [0..*] |
| `_FormulaVariable` | `I_FinTransCndnFmlaVarbl` | [0..*] |
| `_Scale` | `I_FinTransCndnScale` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCONDITION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCONDITION')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFINTRANSCNDN'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Financial Transaction Condition'
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@Metadata.allowExtensions:false
@Metadata.ignorePropagatedAnnotations: true // For C1-Release
@VDM.viewType: #COMPOSITE
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
define view I_FinTransCondition
  //all activities containing conditions
  as select from    R_FinTransCashFlowActivity     as Activity
  //all conditions of these activities (within where-condition they can be restricted)
    inner join      R_FinTransCondition            as Condition        on  Activity.CompanyCode                 = Condition.CompanyCode
                                                                       and Activity.FinancialTransaction        = Condition.FinancialTransaction
                                                                       and Activity.FinancialInstrumentActivity = Condition.FinancialInstrumentActivity
  //information if there is a scale with lower item number
    left outer join R_FinTransCondition            as Scale            on  Condition.CompanyCode                    = Scale.CompanyCode
                                                                       and Condition.FinancialTransaction           = Scale.FinancialTransaction
                                                                       and Condition.FinancialInstrumentActivity    = Scale.FinancialInstrumentActivity
                                                                       and Condition.FinancialTransactionDirection  = Scale.FinancialTransactionDirection
                                                                       and Condition.FinConditionItem               > Scale.FinConditionItem
                                                                       and Condition.ConditionItemValidityStartDate = Scale.ConditionItemValidityStartDate
                                                                       and Condition.FinInstrConditionLogicGroup    = Scale.FinInstrConditionLogicGroup
                                                                       and Condition.FinConditionConditionCategory  = Scale.FinConditionConditionCategory
    left outer join I_FinTransCndnFmlaVarbl        as Variable         on  Condition.CompanyCode                    = Variable.CompanyCode
                                                                       and Condition.FinancialTransaction           = Variable.FinancialTransaction
                                                                       and Condition.FinancialInstrumentActivity    = Variable.FinancialInstrumentActivity
                                                                       and Condition.FinancialTransactionDirection  = Variable.FinancialTransactionDirection
                                                                       and Condition.FinConditionItem               = Variable.FinConditionItem
                                                                       and Condition.ConditionItemValidityStartDate = Variable.ConditionItemValidityStartDate
                                                                       and Condition.FinConditionFormulaReference   = Variable.FinConditionFormulaReference
                                                                       and Condition.FinConditionFormulaReference   = '0003'
                                                                       and Variable.FinCndnFormulaVariable          = 'V3'
    left outer join R_FinTransHasParallelCondition as Parallel         on  Condition.CompanyCode                    = Parallel.CompanyCode
                                                                       and Condition.FinancialTransaction           = Parallel.FinancialTransaction
                                                                       and Condition.FinancialInstrumentActivity    = Parallel.FinancialInstrumentActivity
                                                                       and Condition.FinancialTransactionDirection  = Parallel.FinancialTransactionDirection
                                                                       and Condition.FinConditionItem               = Parallel.FinConditionItem
                                                                       and Condition.ConditionItemValidityStartDate = Parallel.ConditionItemValidityStartDate
                                                                       and Condition.FinConditionSubItem            = Parallel.FinConditionSubItem
    inner join      R_FinTransActiveActivity       as FinTransActivity on  FinTransActivity.CompanyCode               =  Condition.CompanyCode
                                                                       and FinTransActivity.FinancialTransaction      =  Condition.FinancialTransaction
                                                                       and (
                                                                          FinTransActivity.FinInstrLastActiveActivity =  Condition.FinancialInstrumentActivity
                                                                          or Condition.FinConditionConditionCategory  <> '12'
                                                                        )
  // dimensions, containing for example text fields
  association [0..1] to I_CompanyCode              as _CompanyCode           on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_FinancialTransaction     as _FinTrans              on  $projection.CompanyCode          = _FinTrans.CompanyCode
                                                                             and $projection.FinancialTransaction = _FinTrans.FinancialTransaction
  association [0..1] to I_FinTransActivity         as _Activity              on  $projection.CompanyCode                 = _Activity.CompanyCode
                                                                             and $projection.FinancialTransaction        = _Activity.FinancialTransaction
                                                                             and $projection.FinancialInstrumentActivity = _Activity.FinancialInstrumentActivity
  association [0..1] to I_FinTransactionDirection  as _Direction             on  $projection.FinancialTransactionDirection = _Direction.FinancialTransactionDirection
  association [0..1] to I_TreasuryContractType     as _ContractType          on  $projection.TreasuryContractType = _ContractType.TreasuryContractType
  association [0..1] to I_FinCndnConditionCategory as _ConditionCategory     on  $projection.FinConditionConditionCategory = _ConditionCategory.FinConditionConditionCategory
  association [0..1] to I_FinCndnConditionType     as _ConditionType         on  $projection.TreasuryContractType      = _ConditionType.TreasuryContractType
                                                                             and $projection.FinConditionConditionType = _ConditionType.FinConditionConditionType
  association [0..1] to I_FinCndnInterestCategory  as _InterestCategory      on  $projection.FinConditionInterestCategory = _InterestCategory.FinConditionInterestCategory
  association [0..1] to I_ReferenceInterestRate    as _ReferenceInterestRate on  $projection.InterestReference = _ReferenceInterestRate.ReferenceInterestRate
  association [0..1] to I_Currency                 as _FixCurrency           on  $projection.FinConditionFixedAmountCrcy = _FixCurrency.Currency
  association [0..1] to I_Currency                 as _RepaymentCurrency     on  $projection.FinConditionRpaytCurrency = _RepaymentCurrency.Currency
  association [0..1] to I_FactoryCalendar          as _Calendar1             on  $projection.FinConditionFactoryCalendar1 = _Calendar1.FactoryCalendar
  association [0..1] to I_FactoryCalendar          as _Calendar2             on  $projection.FinConditionFactoryCalendar2 = _Calendar2.FactoryCalendar
  association [0..1] to I_FactoryCalendar          as _Calendar3             on  $projection.FinConditionFactoryCalendar3 = _Calendar3.FactoryCalendar
  association [0..1] to I_FactoryCalendar          as _Calendar4             on  $projection.FinConditionFactoryCalendar4 = _Calendar4.FactoryCalendar
  association [0..1] to I_FactoryCalendar          as _Calendar5             on  $projection.FinConditionFactoryCalendar5 = _Calendar5.FactoryCalendar
  // virtual data model
  association [0..*] to I_FinTransCndnSingleDate   as _SingleDate            on  $projection.CompanyCode                    = _SingleDate.CompanyCode
                                                                             and $projection.FinancialTransaction           = _SingleDate.FinancialTransaction
                                                                             and $projection.FinancialInstrumentActivity    = _SingleDate.FinancialInstrumentActivity
                                                                             and $projection.FinancialTransactionDirection  = _SingleDate.FinancialTransactionDirection
                                                                             and $projection.FinConditionItem               = _SingleDate.FinConditionItem
                                                                             and $projection.ConditionItemValidityStartDate = _SingleDate.ConditionItemValidityStartDate
  association [0..*] to I_FinTransCndnFmlaVarbl    as _FormulaVariable       on  $projection.CompanyCode                       =  _FormulaVariable.CompanyCode
                                                                             and $projection.FinancialTransaction              =  _FormulaVariable.FinancialTransaction
                                                                             and $projection.FinancialInstrumentActivity       =  _FormulaVariable.FinancialInstrumentActivity
                                                                             and $projection.FinancialTransactionDirection     =  _FormulaVariable.FinancialTransactionDirection
                                                                             and $projection.FinConditionItem                  =  _FormulaVariable.FinConditionItem
                                                                             and $projection.ConditionItemValidityStartDate    =  _FormulaVariable.ConditionItemValidityStartDate
                                                                             and _FormulaVariable.FinConditionFormulaReference <> '0003'
  association [0..*] to I_FinTransCndnScale        as _Scale                 on  $projection.CompanyCode                    = _Scale.CompanyCode
                                                                             and $projection.FinancialTransaction           = _Scale.FinancialTransaction
                                                                             and $projection.FinancialInstrumentActivity    = _Scale.FinancialInstrumentActivity
                                                                             and $projection.FinancialTransactionDirection  = _Scale.FinancialTransactionDirection
                                                                             and $projection.FinInstrConditionLogicGroup    = _Scale.FinInstrConditionLogicGroup
                                                                             and $projection.ConditionItemValidityStartDate = _Scale.ConditionItemValidityStartDate

{
      //exposed fields
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key Condition.CompanyCode                                                 as CompanyCode,
      @ObjectModel.foreignKey.association: '_FinTrans'
  key Condition.FinancialTransaction                                        as FinancialTransaction,
      @ObjectModel.foreignKey.association: '_Activity'
  key Condition.FinancialInstrumentActivity                                 as FinancialInstrumentActivity,
      @ObjectModel.foreignKey.association: '_Direction'
  key Condition.FinancialTransactionDirection                               as FinancialTransactionDirection,
  key Condition.FinConditionItem                                            as FinConditionItem,
  key Condition.ConditionItemValidityStartDate                              as ConditionItemValidityStartDate,
  key Condition.FinConditionSubItem                                         as FinConditionSubItem,
      // CE2508 Enhancement
      Condition.FinConditionForm                                            as FinConditionForm,
      Condition.FinInstrConditionLogicGroup                                 as FinInstrConditionLogicGroup,
      @ObjectModel.foreignKey.association: '_ContractType'
      Condition.TreasuryContractType                                        as TreasuryContractType,
      @ObjectModel.foreignKey.association: '_ConditionCategory'
      Condition.FinConditionConditionCategory                               as FinConditionConditionCategory,
      @ObjectModel.foreignKey.association: '_ConditionType'
      Condition.FinConditionConditionType                                   as FinConditionConditionType,
      case
        when Condition.FinConditionConditionCategory <> '12'
        then Condition.InterestCalculationMethod
        end                                                                 as InterestCalculationMethod,
      case
        when Condition.FinConditionConditionCategory <> '12'
        and Condition.FinConditionConditionCategory <> '21'
        then Condition.InterestCalculationType
      end                                                                   as InterestCalculationType,
      Parallel.FinCndnHasParallelInterest                                   as FinCndnHasParallelInterest,
      @ObjectModel.foreignKey.association: '_InterestCategory'
      Condition.FinConditionInterestCategory                                as FinConditionInterestCategory,
      case
        when Condition.FinConditionInterestCategory <> '06'
         and Condition.FinConditionInterestCategory <> '07'
          then Condition.ConditionPercentageRate
        end                                                                 as ConditionPercentageRate,
      case
        when Condition.FinConditionInterestCategory <> '06'
         and Condition.FinConditionInterestCategory <> '07'
          then Condition.FinConditionFormulaReference
        end                                                                 as FinConditionFormulaReference,
      @ObjectModel.foreignKey.association: '_ReferenceInterestRate'
      case
        when Condition.FinConditionInterestCategory <> '06'
         and Condition.FinConditionInterestCategory <> '07'
          then Condition.InterestReference
        end                                                                 as InterestReference,
      @Semantics.amount.currencyCode: 'FinConditionFixedAmountCrcy'
      @EndUserText.label: 'Fixed Amount'
      @EndUserText.quickInfo: 'Fixed Amount'
      cast( case
        when Condition.FinConditionInterestCategory <> '06'
         and Condition.FinConditionInterestCategory <> '07'
          then Condition.FinConditionFixedAmount
        end as ftr_cndn_fixed_amount preserving type )                      as FinConditionFixedAmount,
      @ObjectModel.foreignKey.association: '_FixCurrency'
      @Semantics.currencyCode: true
      @EndUserText.label: 'Fixed Amount Currency'
      @EndUserText.quickInfo: 'Fixed Amount Currency'
      cast( case
        when ( Condition.RndngBaseUntAmtInCndnItmCrcy is not initial
            or Condition.FinConditionIntrstBaseAmount is not initial )
            and ( Condition.FinConditionFixedAmountCrcy is null
            or Condition.FinConditionFixedAmountCrcy is initial )
            then FinTransActivity.TransactionCurrency
        when Condition.FinConditionInterestCategory <> '06'
         and Condition.FinConditionInterestCategory <> '07'
          then Condition.FinConditionFixedAmountCrcy
        end as ftr_cndn_fixed_amount_currency preserving type )             as FinConditionFixedAmountCrcy,
      @EndUserText.label: 'Repayment Percentage Rate'
      @EndUserText.quickInfo: 'Repayment Percentage Rate'
      Condition.FinConditionRpaytPercentRate                                as FinConditionRpaytPercentRate,
      @Semantics.amount.currencyCode: 'FinConditionRpaytCurrency'
      @EndUserText.label: 'Repayment Base Amount'
      @EndUserText.quickInfo: 'Repayment Base Amount'
      case
        when Condition.FinConditionConditionCategory <> '12'
        then Condition.FinConditionRpaytBaseAmount
        else 0
      end                                                                   as FinConditionRpaytBaseAmount,
      @Semantics.amount.currencyCode: 'FinConditionRpaytCurrency'
      @EndUserText.label: 'Repayment Amount'
      @EndUserText.quickInfo: 'Repayment Amount'
      case
        when Condition.FinConditionConditionCategory  <> '12'
        then  Condition.FinConditionRpaytAmount
        else 0
        end                                                                 as FinConditionRpaytAmount,
      @ObjectModel.foreignKey.association: '_RepaymentCurrency'
      @Semantics.currencyCode: true
      @EndUserText.label: 'Repayment Currency'
      @EndUserText.quickInfo: 'Repayment Currency'
      Condition.FinConditionRpaytCurrency                                   as FinConditionRpaytCurrency,
      Condition.FinConditionHasSingleDateEntry                              as FinConditionHasSingleDateEntry,
      case
        when Condition.FinConditionConditionCategory  <> '21'
        then Condition.CalculationDate
      end                                                                   as CalculationDate,
      cast( case
        when Condition.FinConditionConditionCategory = '21' then '0'
        when Condition.FinCndnCalcDteUpdateMethod = '1' or Condition.FinCndnCalcDteUpdateMethod = '2' then '0'
        when Condition.FinCndnCalcDteUpdateMethod = '3' or Condition.FinCndnCalcDteUpdateMethod = '4' then '1'
        when Condition.FinCndnCalcDteUpdateMethod = '5' then '2'
      end as ftr_cndn_calc_date_update_rule preserving type )               as FinCndnCalcDteUpdateRule,
      @EndUserText.label: 'Calculation Date Frequency'
      @EndUserText.quickInfo: 'Calculation Date Frequency'
      case
        when Condition.FinConditionConditionCategory <> '21'
        then Condition.FinCndnCalcDteFrequency
      end                                                                   as FinCndnCalcDteFrequency,
      case
        when Condition.FinConditionConditionCategory <> '21'
        then Condition.FinCndnCalcDteFrqcyUnit
      end                                                                   as FinCndnCalcDteFrqcyUnit,
      case
        when Condition.FinConditionConditionCategory  <> '21'
        then Condition.CalcDateIsAsEndDateInclusive
      end                                                                   as CalcDateIsAsEndDateInclusive,
      case
        when Condition.FinConditionConditionCategory  <> '21'
        then Condition.CalcDateIsAsEndDateMonthEnd
      end                                                                   as CalcDateIsAsEndDateMonthEnd,
      @EndUserText.label: 'Calculation Date Working Day Shift'
      @EndUserText.quickInfo: 'Calculation Date Working Day Shift'
      cast( case
        when Condition.FinConditionConditionCategory <> '21'
        then Condition.FinCndnCalcDteWrkgDayShft
      end as ftr_cndn_calc_date_wrk_day_sft preserving type )               as FinCndnCalcDteWrkgDayShft,
      // CE2508
      case
        when Condition.FinConditionConditionCategory <> '21' and Condition.FinConditionConditionCategory <> '41'
        then Condition.FinCndnCalcDteShftDrctn
      end                                                                   as FinCndnCalcDteShftDrctn,
      case
        when Condition.FinConditionConditionCategory  <> '21'
        then abs ( Condition.FinCndnCalcDteShftNrOfDays )
      end                                                                   as FinCndnCalcDteShftNrOfDays,
      // CE2508
      case
        when Condition.FinConditionConditionCategory <> '21' and Condition.FinConditionConditionCategory <> '26'
        then Condition.DueDate
      end                                                                   as DueDate,
      // CE2508
      cast( case
        when Condition.FinConditionConditionCategory = '21' or Condition.FinConditionConditionCategory = '26' or Condition.FinConditionConditionCategory = '41' then '0'
        when Condition.FinCndnDueDteUpdateMethod = '1' or  Condition.FinCndnDueDteUpdateMethod = '2' then '0'
        when Condition.FinCndnDueDteUpdateMethod = '3' or  Condition.FinCndnDueDteUpdateMethod = '4' then '1'
        when Condition.FinCndnDueDteUpdateMethod = '5' then '2'
      end as ftr_cndn_due_date_update_rule preserving type )                as FinCndnDueDteUpdateRule,
      @EndUserText.label: 'Due Date Frequency'
      @EndUserText.quickInfo: 'Due Date Frequency'
      // CE2508
      cast( case
        when Condition.FinConditionConditionCategory <> '21' and Condition.FinConditionConditionCategory <> '26'
        then Condition.FinCndnDueDteFrequency
      end as ftr_cndn_due_date_frequency preserving type )                  as FinCndnDueDteFrequency,
      // CE2508
      cast( case
        when Condition.FinConditionConditionCategory <> '21' and Condition.FinConditionConditionCategory <> '26'
        then Condition.FinCndnDueDteFrqcyUnit
      end as ftr_cndn_due_date_frqcy_unit preserving type )                 as FinCndnDueDteFrqcyUnit,
      // CE2508
      case
        when Condition.FinConditionConditionCategory <> '21' and Condition.FinConditionConditionCategory <> '26'
        then Condition.DueDateIsAsEndDateInclusive
      end                                                                   as DueDateIsAsEndDateInclusive,
      // CE2508
      case
        when Condition.FinConditionConditionCategory <> '21' and Condition.FinConditionConditionCategory <> '26'
        then Condition.DueDateIsAsEndDateMonthEnd
      end                                                                   as DueDateIsAsEndDateMonthEnd,
      @EndUserText.label: 'Due Date Working Day Shift'
      @EndUserText.quickInfo: 'Due Date Working Day Shift'
      // CE2508
      cast( case
        when Condition.FinConditionConditionCategory <> '21' and Condition.FinConditionConditionCategory <> '26' and Condition.FinConditionConditionCategory <> '41'
        then Condition.FinCndnDueDteWrkgDayShft
      end as ftr_cndn_due_date_wrk_day_sft preserving type )                as FinCndnDueDteWrkgDayShft,
      // CE2508
      cast( case
        when Condition.FinConditionConditionCategory <> '21' and Condition.FinConditionConditionCategory <> '26' and Condition.FinConditionConditionCategory <> '41'
        then Condition.FinCndnDueDteShftDrctn
      end as ftr_cndn_due_date_shift_drctn preserving type )                as FinCndnDueDteShftDrctn,
      // CE2508
      case
        when Condition.FinConditionConditionCategory  <> '21' and Condition.FinConditionConditionCategory <> '26' and Condition.FinConditionConditionCategory <> '41'
        then abs ( Condition.FinCndnDueDteShftNrOfDays )
      end                                                                   as FinCndnDueDteShftNrOfDays,
      @ObjectModel.foreignKey.association: '_Calendar1'
      @EndUserText.label: 'Calendar 1'
      @EndUserText.quickInfo: 'Calendar 1'
      Condition.FinConditionFactoryCalendar1                                as FinConditionFactoryCalendar1,
      @ObjectModel.foreignKey.association: '_Calendar2'
      @EndUserText.label: 'Calendar 2'
      @EndUserText.quickInfo: 'Calendar 2'
      Condition.FinConditionFactoryCalendar2                                as FinConditionFactoryCalendar2,
      @ObjectModel.foreignKey.association: '_Calendar3'
      @EndUserText.label: 'Calendar 3'
      @EndUserText.quickInfo: 'Calendar 3'
      Condition.FinConditionFactoryCalendar3                                as FinConditionFactoryCalendar3,
      @ObjectModel.foreignKey.association: '_Calendar4'
      @EndUserText.label: 'Calendar 4'
      @EndUserText.quickInfo: 'Calendar 4'
      Condition.FinConditionFactoryCalendar4                                as FinConditionFactoryCalendar4,
      @ObjectModel.foreignKey.association: '_Calendar5'
      @EndUserText.label: 'Calendar 5'
      @EndUserText.quickInfo: 'Calendar 5'
      Condition.FinConditionFactoryCalendar5                                as FinConditionFactoryCalendar5,


      Condition.ExponentialIntrstSettlmtFrqcy,
      case
        when Condition.FinConditionConditionCategory <> '12'
        then Condition.IntrstCalcMethFactoryCalendar
        end                                                                 as IntrstCalcMethFactoryCalendar,

      case
        when Condition.FinConditionInterestCategory <> '06' and Condition.FinConditionInterestCategory <> '07'
         then  Condition.FinancialConditionPaymentRate
      end                                                                   as FinancialConditionPaymentRate,
      // CE2508
      case
        when Condition.FinConditionInterestCategory <> '06' and Condition.FinConditionInterestCategory <> '07'
         then  Variable.ConditionPercentageRate
      end                                                                   as InterestMarkupMarkdownValue,
      // CE2508
      case
        when Condition.FinConditionInterestCategory <> '06' and Condition.FinConditionInterestCategory <> '07'
         then Condition.InterestFirstPeriodRate
      end                                                                   as InterestFirstPeriodRate,
      Condition.AverageIntrstRateWeightingCat,
      Condition.AverageIntrstRateRndngCategory,
      Condition.AverageIntrstRateRndngDecimals,
      Condition.AverageInterestRateSpreadValue,
      Condition.AvgIntrstRateHasUsedUpperLimit,
      Condition.AverageInterestUpperLimitRate,
      Condition.AvgIntrstRateHasUsedLowerLimit,
      Condition.AverageInterestLowerLimitRate,
      Condition.AverageIntrstRateResetCalcEvt,
      Condition.FinCndnRateFactorRndngCategory,
      Condition.FinCndnRateFactorRndngDecimals,
      Condition.FinCndnFactorRoundingCategory,
      Condition.FinCndnFactorRoundingDecimals,
      Condition.FinCndnBaseFactorRndngCategory,
      Condition.FinCndnBaseFactorRndngDecimals,
      Condition.FinCndnAmountRoundingCategory,
      Condition.FinCndnAmountRoundingUnit,
      @Semantics.amount.currencyCode: 'FinConditionFixedAmountCrcy'
      Condition.RndngBaseUntAmtInCndnItmCrcy,
      @Semantics.amount.currencyCode: 'FinConditionFixedAmountCrcy'
      Condition.FinConditionIntrstBaseAmount,

      case
        when Condition.FinConditionConditionCategory <> '12'
        then Condition.FinCndnCalcBaseReference
      end                                                                   as FinCndnCalcBaseReference,
      Condition.FinCndnProcessingSequenceValue,

      case
        when ( Condition.FinConditionInterestCategory <> '06'
         and Condition.FinConditionInterestCategory <> '07' )
          or Condition.FinConditionConditionCategory <> '12'
        then Condition.FinCndnAmountTimeUnit
      end                                                                   as FinCndnAmountTimeUnit,
      case
       when ( Condition.FinCndnItemLowerLimitAmount is not initial
            or Condition.FinCndnItemUpperLimitAmount is not initial )
            and ( Condition.FinCndnLimitAmountCurrency is null
            or Condition.FinCndnLimitAmountCurrency is initial )
            then FinTransActivity.TransactionCurrency
        when Condition.FinConditionInterestCategory <> '06'
         and Condition.FinConditionInterestCategory <> '07'
         then Condition.FinCndnLimitAmountCurrency
      end                                                                   as FinCndnLimitAmountCurrency,
      case
        when Condition.FinConditionInterestCategory <> '06'
         and Condition.FinConditionInterestCategory <> '07'
         then Condition.FinCndnItmHasUsedLowerLimitAmt
      end                                                                   as FinCndnItmHasUsedLowerLimitAmt,
      @Semantics.amount.currencyCode: 'FinCndnLimitAmountCurrency'
      case
        when Condition.FinConditionInterestCategory <> '06'
         and Condition.FinConditionInterestCategory <> '07'
         then Condition.FinCndnItemLowerLimitAmount
      end                                                                   as FinCndnItemLowerLimitAmount,
      case
        when Condition.FinConditionInterestCategory <> '06'
         and Condition.FinConditionInterestCategory <> '07'
         then Condition.FinCndnItmHasUsedUpperLimitAmt
      end                                                                   as FinCndnItmHasUsedUpperLimitAmt,
      @Semantics.amount.currencyCode: 'FinCndnLimitAmountCurrency'
      case
        when Condition.FinConditionInterestCategory <> '06'
         and Condition.FinConditionInterestCategory <> '07'
         then Condition.FinCndnItemUpperLimitAmount
      end                                                                   as FinCndnItemUpperLimitAmount,
      Condition.FinCndnCrsRefcdAccmlnCndnGrp,
      // CE2508
      case
        when Condition.FinConditionInterestCategory <> '06'
         and Condition.FinConditionInterestCategory <> '07'
         then Condition.RefcdIntrstRateAdjmtCondition
      end                                                                   as RefcdIntrstRateAdjmtCondition,
      // CE2508
      Condition.RefcdPrcIdxAdjmtCondition,

      cast ( case Condition.FinCndnCalcDteUpdateMethod
       when '4' then '0'
       when '3' then '1'
      end as reference_date_for_calc_dte preserving type )                  as InterestCalculationDateRef,
      // CE2508
      cast ( case
       when Condition.FinCndnDueDteUpdateMethod = '5' and Condition.FinConditionInterestCategory <> '41' then '0'
       when Condition.FinCndnDueDteUpdateMethod = '4' and Condition.FinConditionInterestCategory <> '41' then '0'
       when Condition.FinCndnDueDteUpdateMethod = '3' and Condition.FinConditionInterestCategory <> '41' then '1'
      end as  reference_date_for_due_dte preserving type )                  as InterestDueDateReference,

      cast ( case
       when Condition.FinCndnCalcDteUpdateMethod = '2' and Condition.FinConditionInterestCategory <> '21' then 'X'
       when Condition.FinCndnCalcDteUpdateMethod <> '2' and Condition.FinConditionInterestCategory <> '21' then ''
      end as calc_dte_is_reg_with_varbl_dte preserving type )               as CalcDteIsRegularWithVarblDte,

      cast ( case
       when Condition.FinCndnDueDteUpdateMethod = '2' and Condition.FinConditionInterestCategory <> '21' then 'X'
       when Condition.FinCndnDueDteUpdateMethod <> '2' and Condition.FinConditionInterestCategory <> '21' then ''
      end as due_dte_is_reg_with_varbl_dte preserving type )                as DueDteIsRegularWithVarblDte,

      // new fields for dates
      case
        when Condition.FinConditionConditionCategory <> '12'
        then Condition.FinCndnFirstPeriodCalcMethod
      end                                                                   as FinCndnFirstPeriodCalcMethod,
      case
        when Condition.FinConditionConditionCategory <> '12'
        then Condition.FinCndnLastPeriodCalcMethod
      end                                                                   as FinCndnLastPeriodCalcMethod,
      case
        when Condition.FinConditionConditionCategory  <> '21'
        then Condition.FinCndnDueDteShiftToTermEnd
      end                                                                   as FinCndnDueDteShiftToTermEnd,
      Condition.FinCndnPaytDateWrkgDayShft,
      case
        when Condition.FinConditionConditionCategory <> '12'
        then Condition.FinCndnRpaytSettlmt
        end                                                                 as FinCndnRpaytSettlmt,

      // new fields for adjustment
      cast ( case
        when Condition.FinConditionConditionCategory = '21' and Condition.FinCndnCalcDteUpdateMethod = '1' then '1'
        when Condition.FinConditionConditionCategory = '21' and Condition.FinCndnCalcDteUpdateMethod = '5' then '2'
        when Condition.FinConditionConditionCategory = '21' and Condition.FinCndnCalcDteUpdateMethod = '6' then '0'
        when Condition.FinConditionConditionCategory = '21' and Condition.FinCndnCalcDteUpdateMethod = '7' then '3'
      end as tfmsrhyzap preserving type )                                   as InterestRateAdjustmentDateRule,
      cast ( case
        when Condition.FinConditionConditionCategory = '21'
        then Condition.FinCndnCalcDteFrequency
      end as ftr_cndn_adjmt_date_frequency preserving type )                as InterestRateAdjustmentFrqcy,
      cast ( case
        when Condition.FinConditionConditionCategory = '21'
        then Condition.FinCndnCalcDteFrqcyUnit
      end as ftr_cndn_adjmt_date_frqcy_unit preserving type )               as InterestRateAdjmtFrqcyUnit,
      cast ( case
        when Condition.FinConditionConditionCategory = '21'
        then Condition.CalculationDate
      end as tbvaluza preserving type )                                     as InterestRateAdjustmentDate,
      cast ( case
        when Condition.FinConditionConditionCategory = '21'
        then Condition.CalcDateIsAsEndDateMonthEnd
      end as adjmt_dte_as_end_dte_month_end preserving type )               as IntrstRateAdjmtDateIsMonthEnd,
      cast ( case
        when Condition.FinConditionConditionCategory = '21'
        then Condition.CalcDateIsAsEndDateInclusive
      end as adjustment_date_is_exclusive preserving type )                 as IntrstRateAdjmtDteIsExclusive,
      cast ( case
        when Condition.FinConditionConditionCategory = '21'
        then Condition.FinCndnCalcDteWrkgDayShft
      end as ftr_cndn_adjmt_dte_wrk_day_sft preserving type )               as IntrstRateAdjmtDateWrkgDayShft,
      cast ( case
        when Condition.FinConditionConditionCategory = '21'
        then abs ( Condition.FinCndnCalcDteShftNrOfDays )
      end as tb_avgstag preserving type )                                   as IntrstRateAdjmtShftNrOfDays,

      cast ( case
        when Condition.FinConditionConditionCategory = '21'
        then Condition.FinCndnCalcDteShftDrctn
      end as ftr_cndn_adjmt_dte_shft_drctn preserving type )                as FinCndnAdjmtDteShftDrctn,

      cast ( case
        when Condition.FinConditionConditionCategory = '21' and Condition.FinCndnDueDteUpdateMethod = '1' then '0'
        when Condition.FinConditionConditionCategory = '21' and Condition.FinCndnDueDteUpdateMethod = '5' then '2'
        when Condition.FinConditionConditionCategory = '21'
            and ( Condition.FinCndnDueDteUpdateMethod = '3'
                or Condition.FinCndnDueDteUpdateMethod = '6'
                or Condition.FinCndnDueDteUpdateMethod = '8'
                or Condition.FinCndnDueDteUpdateMethod = '9' ) then '1'
      end as tfmsrhy preserving type )                                      as InterestRateFixingDateRule,
      cast ( case
        when Condition.FinConditionConditionCategory = '21'
        then Condition.FinCndnDueDteFrequency
      end as ftr_cndn_fixing_date_frequency preserving type )               as InterestRateFixingFrqcy,
      cast ( case
        when Condition.FinConditionConditionCategory = '21'
        then Condition.FinCndnDueDteFrqcyUnit
      end as ftr_cndn_fixing_dte_frqcy_unit preserving type )               as InterestRateFixingFrqcyUnit,
      cast ( case
        when Condition.FinConditionConditionCategory = '21'
        then Condition.DueDate
      end as tbfaelza preserving type )                                     as InterestRateFixingDate,
      cast ( case
        when Condition.FinConditionConditionCategory = '21'
        then Condition.DueDateIsAsEndDateMonthEnd
      end as fixing_dte_as_end_dte_mnth_end preserving type )               as IntrstRateFixingDateIsMonthEnd,

      cast ( case
        when Condition.FinConditionConditionCategory = '21'
            and (Condition.FinCndnDueDteWrkgDayShft = '3' or Condition.FinCndnDueDteWrkgDayShft = '4')
        then '-'
        when Condition.FinConditionConditionCategory = '21'
            and (Condition.FinCndnDueDteWrkgDayShft = '1' or Condition.FinCndnDueDteWrkgDayShft = '2')
        then '+'
        end  as ftr_cndn_fixing_dte_shft_drctn preserving type )            as FinCndnFixingDteShftDrctn,
      cast ( case
        when Condition.FinConditionConditionCategory = '21'
        then abs ( Condition.FinCndnDueDteShftNrOfDays )
      end as tb_azgstag preserving type )                                   as InterestRateFixingShftNrOfDays,
      cast ( case
        when Condition.FinConditionConditionCategory = '21'
        and (Condition.FinCndnDueDteWrkgDayShft = '2' or Condition.FinCndnDueDteWrkgDayShft = '4')
        then 'X'
      end as tfmjmodif preserving type )                                    as IntrstRateFixDteShftIsModifd,
      cast ( case
        when Condition.FinConditionConditionCategory = '21'
            and ( Condition.FinCndnDueDteUpdateMethod = '1'
                or Condition.FinCndnDueDteUpdateMethod = '5'
                or Condition.FinCndnDueDteUpdateMethod = '8' ) then '0'
        when Condition.FinConditionConditionCategory = '21' and Condition.FinCndnDueDteUpdateMethod = '3' then '1'
        when Condition.FinConditionConditionCategory = '21' and Condition.FinCndnDueDteUpdateMethod = '6' then '3'
        when Condition.FinConditionConditionCategory = '21' and Condition.FinCndnDueDteUpdateMethod = '9' then '2'
      end as tfmzreldat preserving type )                                   as InterestRateFixingDateRef,
      Condition.FinCndnRateFixingLockoutPeriod,

      // CE2508
      // Price Index Adjustment - general attributes
      Condition.TreasuryPriceIndex,
      Condition.PriceIndexInterpolationMethod,
      Condition.PriceIndexApplicationMethod,
      Condition.PrcIdxFctrCalcCompoundingFrqcy,
      Condition.FinCndnDayFracRoundingCat,
      Condition.FinCndnDayFracRoundingDcmls,

      // Price Index Adjustment - reference date for index adjustment date
      Condition.PrcIdxAdjmtDateReference,
      Condition.PrcIdxAdjmtDateWrkgDayShift,
      Condition.PrcIdxAdjmtDateShftDrctn,

      abs( Condition.PrcIdxAdjmtShftNrOfDays )                              as PrcIdxAdjmtShftNrOfDays,

      // Price Index Adjustment
      Condition.PriceIndexAdjustmentBaseDate,
      //Condition.PrcIdxAdjmtBaseValue,

      // Price Index Adjustment - fixing date
      Condition.PrcIdxAdjmtFixingLowDate,
      Condition.PrcIdxAdjmtFixingHighDate,
      Condition.PrcIdxAdjmtFxngDteWrkgDayShft,
      Condition.PrcIdxAdjmtFixingDateShftDrctn,
      abs( Condition.PrcIdxAdjmtFxngDteShftNrOfDays )                       as PrcIdxAdjmtFxngDteShftNrOfDays,

      // FX Rate Adjustment - FX rate reference
      Condition.FinConditionSettlementCrcy,
      cast( Condition.ForeignExchangeFixingReference as ftr_fixing_ref_id ) as ForeignExchangeFixingReference,

      // FX Rate Adjustment - fixing date
      cast(case
          when Condition.FinConditionConditionCategory = '41' and Condition.FinCndnDueDteUpdateMethod = '9' then '0'
          when Condition.FinConditionConditionCategory = '41' and Condition.FinCndnDueDteUpdateMethod = '3' then '1'
      end as ftr_fx_fixing_date_reference  preserving type)                 as FXRateAdjmtFixingDateRef,
      cast(case
          when Condition.FinConditionConditionCategory = '41' and (Condition.FinCndnDueDteWrkgDayShft = '1' or Condition.FinCndnDueDteWrkgDayShft = '2')
            then '+'
          when Condition.FinConditionConditionCategory = '41' and (Condition.FinCndnDueDteWrkgDayShft = '3' or Condition.FinCndnDueDteWrkgDayShft = '4')
            then '-'
      end as ftr_fx_fixing_date_shift_drctn preserving type)                as FXRateAdjmtFixingDateShftDrctn,
      cast(case
      when Condition.FinConditionConditionCategory = '41'
      then abs(Condition.FinCndnDueDteShftNrOfDays)
      end as ftr_fx_fixing_date_shft_days preserving type)                  as FXRateAdjmtFxngDteShftNrOfDays,
      cast(case
        when Condition.FinConditionConditionCategory = '41' and (Condition.FinCndnDueDteWrkgDayShft = '2' or Condition.FinCndnDueDteWrkgDayShft = '4')
          then 'X'
      end as ftr_fx_fixing_dte_shft_is_modi preserving type)                as FXRateAdjmtFxngDteShftIsModifd,



      //exposed dimensions, containing for example text fields
      _CompanyCode,
      _FinTrans,
      _Activity,
      _Direction,
      _ContractType,
      _ConditionCategory,
      _ConditionType,
      _InterestCategory,
      _ReferenceInterestRate,
      _FixCurrency,
      _RepaymentCurrency,
      _Calendar1,
      _Calendar2,
      _Calendar3,
      _Calendar4,
      _Calendar5,
      _SingleDate,
      _FormulaVariable,
      _Scale
}
where
  //condition for single dates must be ignored (only consider main condition (NSTUFE = 0))
  (
           Condition.FinConditionSubItem          is null
    or     Condition.FinConditionSubItem          is initial
    or     Condition.FinConditionSubItem          = '00'
  )
  //condition for scale must be ignored (only consider main condition (lowest RKOND))
  and(
           Condition.FinConditionInterestCategory = '01'
    or     Condition.FinConditionInterestCategory = '02'
    or     Condition.FinConditionInterestCategory = '03'
    or     Condition.FinConditionInterestCategory = '04'
    or     Condition.FinConditionInterestCategory = '05'
    or     Condition.FinConditionInterestCategory = '08'
    or     Condition.FinConditionInterestCategory is null
    or     Condition.FinConditionInterestCategory is initial
    or(
      (
           Condition.FinConditionInterestCategory = '06'
        or Condition.FinConditionInterestCategory = '07'
      )
      and  Scale.FinConditionItem                 is null
    )
  )
```
