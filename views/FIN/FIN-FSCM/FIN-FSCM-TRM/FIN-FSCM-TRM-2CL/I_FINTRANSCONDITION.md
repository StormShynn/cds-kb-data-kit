---
name: I_FINTRANSCONDITION
description: This CDS view shows the conditions of a financial transaction. This CDS view provides the prerequisites for answering the following business questions: What kinds of condition exist for a financial transaction? What kind of interest category does a condition have? Does the financial transaction have parallel interest conditions? How is the calculation date specified? How is the due date specified?
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCONDITION')/$value
semantic_en: This CDS view shows the conditions of a financial transaction. This CDS view provides the prerequisites for answering the following business questions: What kinds of condition exist for a financial transaction? What kind of interest category does a condition have? Does the financial transaction have parallel interest conditions? How is the calculation date specified? How is the due date specified?
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
  - metadata-only
---
# I_FINTRANSCONDITION

**This CDS view shows the conditions of a financial transaction. This CDS view provides the prerequisites for answering the following business questions: What kinds of condition exist for a financial transaction? What kind of interest category does a condition have? Does the financial transaction have parallel interest conditions? How is the calculation date specified? How is the due date specified?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCONDITION')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CompanyCode` | `CHAR(4)` | Company Code |
| `FinancialTransaction` | `CHAR(13)` | Financial Transaction |
| `FinancialInstrumentActivity` | `NUMC(5)` | Transaction Activity |
| `FinancialTransactionDirection` | `NUMC(1)` | Direction of Transaction |
| `FinConditionItem` | `NUMC(4)` | Condition |
| `ConditionItemValidityStartDate` | `DATS(8)` | Condition Item Effective From |
| `FinConditionSubItem` | `NUMC(2)` | Level Number of Condition Item for Recurring Payments |
| `FinConditionForm` | `CHAR(1)` | Condition Form |
| `FinInstrConditionLogicGroup` | `NUMC(4)` | Condition Logic Group |
| `TreasuryContractType` | `CHAR(1)` | Contract Type |
| `FinConditionConditionCategory` | `CHAR(2)` | Condition Category |
| `FinConditionConditionType` | `NUMC(4)` | Condition Type |
| `InterestCalculationMethod` | `CHAR(1)` | Interest Calculation Method |
| `InterestCalculationType` | `NUMC(1)` | Type of Interest Calculation |
| `FinCndnHasParallelInterest` | `CHAR(1)` | Indicator if parallel interest condition exists |
| `FinConditionInterestCategory` | `NUMC(2)` |  |
| `ConditionPercentageRate` | `DEC(10)` | Percentage rate for condition items |
| `FinConditionFormulaReference` | `CHAR(4)` | Formula Reference |
| `InterestReference` | `CHAR(10)` | Reference Interest Rate |
| `FinConditionFixedAmount` | `CURR(13)` | Fixed Amount |
| `FinConditionFixedAmountCrcy` | `CUKY(5)` | Fixed Amount Currency |
| `FinConditionRpaytPercentRate` | `DEC(10)` | Repayment Percent Rate |
| `FinConditionRpaytBaseAmount` | `CURR(13)` | Calculation Base Amount |
| `FinConditionRpaytAmount` | `CURR(13)` | Repayment Amount |
| `FinConditionRpaytCurrency` | `CUKY(5)` | Repayment Amount Currency |
| `FinConditionHasSingleDateEntry` | `CHAR(1)` | Indicator if single date entry exists |
| `CalculationDate` | `DATS(8)` | Calculation Date |
| `FinCndnCalcDteUpdateRule` | `NUMC(1)` | Calculation Date Update Rule |
| `FinCndnCalcDteFrequency` | `NUMC(3)` | Calculation date frequency of a financial condition |
| `FinCndnCalcDteFrqcyUnit` | `NUMC(1)` | Unit for the calculation date frequency |
| `CalcDateIsAsEndDateInclusive` | `CHAR(1)` | Indicator if a date is inclusive |
| `CalcDateIsAsEndDateMonthEnd` | `CHAR(1)` | Indicator showing calculation date is month end |
| `FinCndnCalcDteWrkgDayShft` | `NUMC(1)` | Working Day Shift for Calculation Day |
| `FinCndnCalcDteShftDrctn` | `CHAR(1)` | Direction for the working day shift of date calculation |
| `FinCndnCalcDteShftNrOfDays` | `INT4(10)` |  |
| `DueDate` | `DATS(8)` | Due Date |
| `FinCndnDueDteUpdateRule` | `NUMC(1)` | Due Date Update Rule |
| `FinCndnDueDteFrequency` | `NUMC(3)` | Frequency |
| `FinCndnDueDteFrqcyUnit` | `NUMC(1)` | Unit for Frequency |
| `DueDateIsAsEndDateInclusive` | `CHAR(1)` | Indicator if a date is inclusive |
| `DueDateIsAsEndDateMonthEnd` | `CHAR(1)` | Indicator showing due date is month end |
| `FinCndnDueDteWrkgDayShft` | `NUMC(1)` | Working Day Shift for Due Day |
| `FinCndnDueDteShftDrctn` | `CHAR(1)` | Direction of a shift |
| `FinCndnDueDteShftNrOfDays` | `INT4(10)` |  |
| `FinConditionFactoryCalendar1` | `CHAR(2)` | Factory Calendar |
| `FinConditionFactoryCalendar2` | `CHAR(2)` | Factory Calendar |
| `FinConditionFactoryCalendar3` | `CHAR(2)` | Factory Calendar |
| `FinConditionFactoryCalendar4` | `CHAR(2)` | Factory Calendar |
| `FinConditionFactoryCalendar5` | `CHAR(2)` | Factory Calendar |
| `ExponentialIntrstSettlmtFrqcy` | `NUMC(2)` | Interest Settlement Frequency for Exponential Interest Calc. |
| `IntrstCalcMethFactoryCalendar` | `CHAR(2)` | Interest Calendar |
| `FinancialConditionPaymentRate` | `DEC(11)` | Payment Rate |
| `InterestMarkupMarkdownValue` | `DEC(10)` | Percentage rate for condition items |
| `InterestFirstPeriodRate` | `DEC(10)` | Interest Rate for the First Period |
| `AverageIntrstRateWeightingCat` | `CHAR(1)` | Weighting Category of Interest Rate |
| `AverageIntrstRateRndngCategory` | `CHAR(1)` | Rounding Category of Average Interest Rate |
| `AverageIntrstRateRndngDecimals` | `INT1(3)` | Number of Rounding Decimal Places for Average Interest Rate |
| `AverageInterestRateSpreadValue` | `DEC(15)` | Average Interest Rate Spread |
| `AvgIntrstRateHasUsedUpperLimit` | `CHAR(1)` | Use Upper Limit of Average Interest Rate |
| `AverageInterestUpperLimitRate` | `DEC(15)` | Upper Limit of Average Interest Rate |
| `AvgIntrstRateHasUsedLowerLimit` | `CHAR(1)` | Use Lower Limit of Average Interest Rate |
| `AverageInterestLowerLimitRate` | `DEC(15)` | Lower Limit of Average Interest Rate |
| `AverageIntrstRateResetCalcEvt` | `CHAR(1)` | Event for Resetting Factor Calculation |
| `FinCndnRateFactorRndngCategory` | `CHAR(1)` | Rounding Category of Interest Factor |
| `FinCndnRateFactorRndngDecimals` | `INT1(3)` | Number of Rounding Decimal Places for Interest Factor |
| `FinCndnFactorRoundingCategory` | `CHAR(1)` | Rounding Category of a Factor |
| `FinCndnFactorRoundingDecimals` | `INT1(3)` | Number of Rounding Decimal Places for a Factor |
| `FinCndnBaseFactorRndngCategory` | `CHAR(1)` | Rounding Category of a Factor |
| `FinCndnBaseFactorRndngDecimals` | `INT1(3)` | Number of Rounding Decimal Places for a Factor |
| `FinCndnAmountRoundingCategory` | `CHAR(1)` | Rounding Category |
| `FinCndnAmountRoundingUnit` | `DEC(13)` | Rounding Unit |
| `RndngBaseUntAmtInCndnItmCrcy` | `CURR(17)` | Base Unit for Rounding |
| `FinConditionIntrstBaseAmount` | `CURR(23)` | Calculation Base Amount for Financial Condition Interest |
| `FinCndnCalcBaseReference` | `CHAR(4)` | Calculation Base Indicator |
| `FinCndnProcessingSequenceValue` | `NUMC(2)` | Processing Sequence of Conditions |
| `FinCndnAmountTimeUnit` | `CHAR(1)` | Indicator for Calculating Amount per Month |
| `FinCndnLimitAmountCurrency` | `CUKY(5)` | Limit Amount Currency |
| `FinCndnItmHasUsedLowerLimitAmt` | `CHAR(1)` | Use Lower Limit of Amount |
| `FinCndnItemLowerLimitAmount` | `CURR(23)` | Lower Limit for Amount |
| `FinCndnItmHasUsedUpperLimitAmt` | `CHAR(1)` | Use Upper Limit of Amount |
| `FinCndnItemUpperLimitAmount` | `CURR(23)` | Upper Limit for Amt |
| `FinCndnCrsRefcdAccmlnCndnGrp` | `NUMC(4)` | Cross-Referenced Condition Group for Accumulation |
| `RefcdIntrstRateAdjmtCondition` | `NUMC(4)` | Referenced Interest Rate Adjustment Condition |
| `RefcdPrcIdxAdjmtCondition` | `NUMC(4)` | Referenced Price Index Adjustment Condition |
| `InterestCalculationDateRef` | `NUMC(1)` | reference date for calculation date |
| `InterestDueDateReference` | `NUMC(1)` | reference date for due date |
| `CalcDteIsRegularWithVarblDte` | `CHAR(1)` | Regular with variable date for calculation date |
| `DueDteIsRegularWithVarblDte` | `CHAR(1)` | Regular with variable date for due date |
| `FinCndnFirstPeriodCalcMethod` | `NUMC(1)` | Calculation Method for First Period of Condition Item |
| `FinCndnLastPeriodCalcMethod` | `NUMC(1)` | Calculation Method for Last Period of Condition Item |
| `FinCndnDueDteShiftToTermEnd` | `CHAR(1)` | Shift Due Date Back to End of Term |
| `FinCndnPaytDateWrkgDayShft` | `NUMC(1)` | Working Day Shift for Payment Date |
| `FinCndnRpaytSettlmt` | `CHAR(1)` | Indicator for Immediate Settlement (Financial Mathematics) |
| `InterestRateAdjustmentDateRule` | `NUMC(1)` | Rule for Date Update for Interest Rate Adjustment |
| `InterestRateAdjustmentFrqcy` | `NUMC(3)` | Frequency |
| `InterestRateAdjmtFrqcyUnit` | `NUMC(1)` | Unit for Frequency |
| `InterestRateAdjustmentDate` | `DATS(8)` | Interest Rate Adjustment Date |
| `IntrstRateAdjmtDateIsMonthEnd` | `CHAR(1)` | Indicator showing adjustment date is month end |
| `IntrstRateAdjmtDteIsExclusive` | `CHAR(1)` | Exclusive Indicator for Interest Rate Adjustment Date |
| `IntrstRateAdjmtDateWrkgDayShft` | `NUMC(1)` | Working Day Shift for Adjustment Day |
| `IntrstRateAdjmtShftNrOfDays` | `INT4(10)` | Number of Days for Relative Calculation of Value Date |
| `FinCndnAdjmtDteShftDrctn` | `CHAR(1)` | Direction of a shift |
| `InterestRateFixingDateRule` | `NUMC(1)` | Rule for Date Update |
| `InterestRateFixingFrqcy` | `NUMC(3)` | Frequency |
| `InterestRateFixingFrqcyUnit` | `NUMC(1)` | Unit for Frequency |
| `InterestRateFixingDate` | `DATS(8)` | Interest Rate Fixing Date |
| `IntrstRateFixingDateIsMonthEnd` | `CHAR(1)` | Indicator showing fixing date is month end |
| `FinCndnFixingDteShftDrctn` | `CHAR(1)` | Direction of a shift |
| `InterestRateFixingShftNrOfDays` | `INT4(10)` | No. of Days for Relative Determinatn of Interest Fixing |
| `IntrstRateFixDteShftIsModifd` | `CHAR(1)` | 'Modified' Indicator |
| `InterestRateFixingDateRef` | `NUMC(1)` | Reference Date for Interest Rate Determination Date |
| `FinCndnRateFixingLockoutPeriod` | `INT4(10)` | Number of Days for Relative Payment Date Calculation |
| `TreasuryPriceIndex` | `CHAR(60)` | Treasury Price Index |
| `PriceIndexInterpolationMethod` | `CHAR(4)` | Index Interpolation Method |
| `PriceIndexApplicationMethod` | `CHAR(4)` | Price Index Application Method |
| `PrcIdxFctrCalcCompoundingFrqcy` | `NUMC(3)` | Compounding Frequency of Price Index Factor |
| `FinCndnDayFracRoundingCat` | `CHAR(1)` | Day Fraction Rounding Category |
| `FinCndnDayFracRoundingDcmls` | `INT1(3)` | Day Fraction Rounding Decimal |
| `PrcIdxAdjmtDateReference` | `NUMC(1)` | Reference Date for Index Adjustment Date |
| `PrcIdxAdjmtDateWrkgDayShift` | `NUMC(1)` | Working Day Shift for Price Index Adjustment Date |
| `PrcIdxAdjmtDateShftDrctn` | `CHAR(1)` | Working Day Shift Direction for Price Index Adjustment Date |
| `PrcIdxAdjmtShftNrOfDays` | `INT4(10)` |  |
| `PriceIndexAdjustmentBaseDate` | `DATS(8)` | Index Base Date |
| `PrcIdxAdjmtFixingLowDate` | `DATS(8)` | Index Fixing Date Low |
| `PrcIdxAdjmtFixingHighDate` | `DATS(8)` | Index Fixing Date High |
| `PrcIdxAdjmtFxngDteWrkgDayShft` | `NUMC(1)` | Working Day Shift for Price Index Fixing Date |
| `PrcIdxAdjmtFixingDateShftDrctn` | `CHAR(1)` | Working Day Shift Direction for Price Index Fixing Date |
| `PrcIdxAdjmtFxngDteShftNrOfDays` | `INT4(10)` |  |
| `FinConditionSettlementCrcy` | `CUKY(5)` | Settlement Currency |
| `ForeignExchangeFixingReference` | `CHAR(30)` | Fixing Reference ID |
| `FXRateAdjmtFixingDateRef` | `NUMC(1)` | Foreign Exchange Rate Fixing Date Reference |
| `FXRateAdjmtFixingDateShftDrctn` | `CHAR(1)` | Working Day Shift Direction for FX Fixing Date |
| `FXRateAdjmtFxngDteShftNrOfDays` | `INT4(10)` | Number of Days for FX Fixing Date Shift |
| `FXRateAdjmtFxngDteShftIsModifd` | `CHAR(1)` | Foreign Exchange Fixing Date Shift Is Modified Indicator |
