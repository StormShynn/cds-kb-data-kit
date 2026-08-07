---
name: D_INTRSTRATEINSTRCHGCNDNP
description: D Intrstrateinstrchgcndnp
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# D_INTRSTRATEINSTRCHGCNDNP

**D Intrstrateinstrchgcndnp**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `FinancialTransactionDirection` |  | |  | `tb_rkondgr` |
| `FinConditionItem` |  | |  | `tb_kond` |
| `ConditionItemValidityStartDate` |  | |  | `dguel_kp` |
| `FinConditionConditionType` |  | |  | `ftr_cndn_condition_type` |
| `FinConditionInterestCategory` |  | |  | `ftr_intcat` |
| `ConditionPercentageRate` |  | |  | `pkond` |
| `FinancialConditionItemAmount` |  | |  | `ftr_condition_item_amount` |
| `FinancialConditionItemCurrency` |  | |  | `swhrkond` |
| `FinCndnFirstPeriodCalcMethod` |  | |  | `tfmsfstper` |
| `FinCndnLastPeriodCalcMethod` |  | |  | `tfmsfstper` |
| `FinCndnCalcBaseAmt` |  | |  | `ftr_calc_base_amount` |
| `ReferenceInterestRate` |  | |  | `szsref` |
| `InterestMarkupMarkdownValue` |  | |  | `tb_zzs` |
| `FinConditionFormulaReference` |  | |  | `tb_xformbe` |
| `InterestFirstPeriodRate` |  | |  | `tfm_pkond1stper` |
| `FinancialConditionPaymentRate` |  | |  | `tfm_ppayment` |
| `InterestCalculationMethod` |  | |  | `szbmeth` |
| `IntrstCalcMethFactoryCalendar` |  | |  | `tfmskalidwt` |
| `FinCndnDueDteFrequency` |  | |  | `ftr_cndn_due_date_frequency` |
| `FinCndnDueDteFrqcyUnit` |  | |  | `ftr_cndn_due_date_frqcy_unit` |
| `CalculationDate` |  | |  | `dvalut` |
| `TermStartDateIsInclusive` |  | |  | `tb_svincl` |
| `CalcDateIsAsEndDateMonthEnd` |  | |  | `calc_dte_as_end_dte_month_end` |
| `FinCndnCalcDteWrkgDayShft` |  | |  | `ftr_cndn_calc_date_wrk_day_sft` |
| `FinancialConditionDueDate` |  | |  | `dfaell` |
| `DueDateIsAsEndDateMonthEnd` |  | |  | `due_dte_as_end_date_month_end` |
| `FinCndnDueDteWrkgDayShft` |  | |  | `ftr_cndn_due_date_wrk_day_sft` |
| `FinCndnDueDteShiftToTermEnd` |  | |  | `tb_sfranze_new` |
| `FinConditionFactoryCalendar1` |  | |  | `ftr_cndn_factory_calendar1` |
| `FinConditionFactoryCalendar2` |  | |  | `ftr_cndn_factory_calendar2` |
| `InterestRateAdjustmentDateRule` |  | |  | `tfmsrhyzap` |
| `InterestRateAdjustmentFrqcy` |  | |  | `tfmarhy` |
| `InterestRateAdjmtFrqcyUnit` |  | |  | `tfmurhy` |
| `InterestRateAdjustmentDate` |  | |  | `tbvaluza` |
| `IntrstRateAdjmtDateIsMonthEnd` |  | |  | `tbultiza` |
| `IntrstRateAdjmtDateWrkgDayShft` |  | |  | `tb_svwerk` |
| `IntrstRateAdjmtShftNrOfDays` |  | |  | `tb_avgstag` |
| `InterestRateFixingDateRule` |  | |  | `tfmsrhy` |
| `InterestRateFixingDateRef` |  | |  | `tfmzreldat` |
| `InterestRateFixingFrqcy` |  | |  | `tfmarhy` |
| `InterestRateFixingFrqcyUnit` |  | |  | `tfmurhy` |
| `InterestRateFixingDate` |  | |  | `tbfaelza` |
| `IntrstRateFixingDateIsMonthEnd` |  | |  | `tbfultiza` |
| `InterestRateFixingShftNrOfDays` |  | |  | `tb_azgstag` |
| `IntrstRateFixDteShftIsModifd` |  | |  | `tfmjmodif` |
| `FinConditionFactoryCalendar3` |  | |  | `ftr_cndn_factory_calendar3` |
| `FinCndnRpaytSettlmt` |  | |  | `tfmsofverr` |
| `FinCndnAmountRoundingCategory` |  | |  | `tfm_sround` |
| `FinCndnAmountRoundingUnit` |  | |  | `tfmprunit` |
| `FinCndnAmtRoundingCalcFactor` |  | |  | `bapicurr_d` |
| `ExponentialIntrstSettlmtFrqcy` |  | |  | `tfm_ammrhyzv` |
| `FinInstrConditionLogicGroup` |  | |  | `ftr_instr_cndn_logic_group` |
| `FinCndnCalcBaseReference` |  | |  | `sbasis` |
| `FinCndnAmountTimeUnit` |  | |  | `tfm_samountunit` |
| `FinCndnCalcDteUpdateRule` |  | |  | `ftr_cndn_calc_date_update_meth` |
| `FinCndnCalcDteShftNrOfDays` |  | |  | `tb_avgstag` |
| `FinCndnDueDteUpdateRule` |  | |  | `ftr_cndn_due_date_update_meth` |
| `FinCndnDueDteShftNrOfDays` |  | |  | `tb_afgstag` |
| `FinConditionFactoryCalendar4` |  | |  | `ftr_cndn_factory_calendar4` |
| `FinConditionFactoryCalendar5` |  | |  | `ftr_cndn_factory_calendar5` |
| `FinCndnItemLowerLimitAmount` |  | |  | `ftr_condition_lower_amount` |
| `FinCndnItemUpperLimitAmount` |  | |  | `ftr_condition_upper_amount` |
| `InterestCalculationType` |  | |  | `tfmsintcalc` |
| `FinCndnFactorRoundingCategory` |  | |  | `tfm_sroundfactor` |
| `FinCndnFactorRoundingDecimals` |  | |  | `tfm_rounddecfactor` |
| `FinCndnRateFactorRndngCategory` |  | |  | `tfm_sroundratefactor` |
| `FinCndnRateFactorRndngDecimals` |  | |  | `tfm_rounddecratefactor` |
| `FinCndnBaseFactorRndngCategory` |  | |  | `tfm_sroundbasefactor` |
| `FinCndnBaseFactorRndngDecimals` |  | |  | `tfm_rounddecbasefactor` |
| `FinCndnRateFixingLockoutPeriod` |  | |  | `tfmatlockout` |
| `FinCndnProcessingSequenceValue` |  | |  | `tfm_sequence` |
| `AvgIntrstRateHasUsedUpperLimit` |  | |  | `tfm_javgcap` |
| `AverageInterestUpperLimitRate` |  | |  | `tfm_pavgcap` |
| `AvgIntrstRateHasUsedLowerLimit` |  | |  | `tfm_javgfloor` |
| `AverageInterestLowerLimitRate` |  | |  | `tfm_pavgfloor` |
| `AverageInterestRateSpreadValue` |  | |  | `tfm_pavgspread` |
| `AverageIntrstRateRndngCategory` |  | |  | `tfm_sroundavginterest` |
| `AverageIntrstRateRndngDecimals` |  | |  | `tfm_rounddecavginterest` |
| `AverageIntrstRateWeightingCat` |  | |  | `tfm_sweight` |
| `AverageIntrstRateResetCalcEvt` |  | |  | `tfm_sfactorreset` |
| `FinCndnItmHasUsedLowerLimitAmt` |  | |  | `tfm_jugrenz` |
| `FinCndnItmHasUsedUpperLimitAmt` |  | |  | `tfm_jugrenz` |
| `D_IntrstRateInstrChgFmlaVarblP` |  | |  | `_FmlaVarbl : composition [0..*] of D_IntrstRateInstrChgFmlaVarblP` |
| `D_IntrstRateInstrChgScaleP` |  | |  | `_Scales : composition [0..*] of D_IntrstRateInstrChgScaleP` |
| `D_IntrstRateInstrChgSglDteP` |  | |  | `_SingleDates : composition [0..*] of D_IntrstRateInstrChgSglDteP` |
| `_IntrstRateInstr` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Condition Abstract View Parameter'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]

define abstract entity D_IntrstRateInstrChgCndnP
{
//   key DummyKey                       : abap.char(1);
      //CompanyCode                    : bukrs;
      //FinancialTransaction           : tb_rfha;
      FinancialTransactionDirection  : tb_rkondgr;
      FinConditionItem               : tb_kond;
      ConditionItemValidityStartDate : dguel_kp;
      FinConditionConditionType      : ftr_cndn_condition_type;
      //FinCndnAdjCrossRef             : szinsanp;
      //FinCndnZero                    : tb_snullkond;
      FinConditionInterestCategory   : ftr_intcat;
      ConditionPercentageRate        : pkond;
      @Semantics.amount.currencyCode : 'FinancialConditionItemCurrency'
      FinancialConditionItemAmount   : ftr_condition_item_amount;
      @Semantics.currencyCode        : true
      FinancialConditionItemCurrency : swhrkond;
      FinCndnFirstPeriodCalcMethod   : tfmsfstper;
      FinCndnLastPeriodCalcMethod    : tfmsfstper;
      @Semantics.amount.currencyCode : 'FinancialConditionItemCurrency'
      FinCndnCalcBaseAmt             : ftr_calc_base_amount;
      ReferenceInterestRate          : szsref;
      InterestMarkupMarkdownValue    : tb_zzs;
      FinConditionFormulaReference   : tb_xformbe;
      InterestFirstPeriodRate        : tfm_pkond1stper;
      FinancialConditionPaymentRate  : tfm_ppayment;
      InterestCalculationMethod      : szbmeth;
      IntrstCalcMethFactoryCalendar  : tfmskalidwt;
      FinCndnDueDteFrequency         : ftr_cndn_due_date_frequency;
      FinCndnDueDteFrqcyUnit         : ftr_cndn_due_date_frqcy_unit;
      CalculationDate                : dvalut;
      TermStartDateIsInclusive       : tb_svincl;
      CalcDateIsAsEndDateMonthEnd    : calc_dte_as_end_dte_month_end;
      FinCndnCalcDteWrkgDayShft      : ftr_cndn_calc_date_wrk_day_sft;
      FinancialConditionDueDate      : dfaell;
      DueDateIsAsEndDateMonthEnd     : due_dte_as_end_date_month_end;
      FinCndnDueDteWrkgDayShft       : ftr_cndn_due_date_wrk_day_sft;
      FinCndnDueDteShiftToTermEnd    : tb_sfranze_new;
      FinConditionFactoryCalendar1   : ftr_cndn_factory_calendar1;
      FinConditionFactoryCalendar2   : ftr_cndn_factory_calendar2;
      InterestRateAdjustmentDateRule : tfmsrhyzap;
      InterestRateAdjustmentFrqcy    : tfmarhy;
      InterestRateAdjmtFrqcyUnit     : tfmurhy;
      InterestRateAdjustmentDate     : tbvaluza;
      IntrstRateAdjmtDateIsMonthEnd  : tbultiza;
      IntrstRateAdjmtDateWrkgDayShft : tb_svwerk;
      IntrstRateAdjmtShftNrOfDays    : tb_avgstag;
      InterestRateFixingDateRule     : tfmsrhy;
      InterestRateFixingDateRef      : tfmzreldat;
      InterestRateFixingFrqcy        : tfmarhy;
      InterestRateFixingFrqcyUnit    : tfmurhy;
      InterestRateFixingDate         : tbfaelza;
      IntrstRateFixingDateIsMonthEnd : tbfultiza;
      InterestRateFixingShftNrOfDays : tb_azgstag;
      IntrstRateFixDteShftIsModifd   : tfmjmodif;
      FinConditionFactoryCalendar3   : ftr_cndn_factory_calendar3;
      FinCndnRpaytSettlmt            : tfmsofverr;
      FinCndnAmountRoundingCategory  : tfm_sround;
      FinCndnAmountRoundingUnit      : tfmprunit;
      FinCndnAmtRoundingCalcFactor   : bapicurr_d;
      ExponentialIntrstSettlmtFrqcy  : tfm_ammrhyzv;
      FinInstrConditionLogicGroup    : ftr_instr_cndn_logic_group;
      FinCndnCalcBaseReference       : sbasis;
      FinCndnAmountTimeUnit          : tfm_samountunit;
      FinCndnCalcDteUpdateRule       : ftr_cndn_calc_date_update_meth;
      FinCndnCalcDteShftNrOfDays     : tb_avgstag;
      FinCndnDueDteUpdateRule        : ftr_cndn_due_date_update_meth;
      FinCndnDueDteShftNrOfDays      : tb_afgstag;
      FinConditionFactoryCalendar4   : ftr_cndn_factory_calendar4;
      FinConditionFactoryCalendar5   : ftr_cndn_factory_calendar5;
      @Semantics.amount.currencyCode : 'FinancialConditionItemCurrency'
      FinCndnItemLowerLimitAmount    : ftr_condition_lower_amount;
      @Semantics.amount.currencyCode : 'FinancialConditionItemCurrency'
      FinCndnItemUpperLimitAmount    : ftr_condition_upper_amount;
      InterestCalculationType        : tfmsintcalc;
      FinCndnFactorRoundingCategory  : tfm_sroundfactor;
      FinCndnFactorRoundingDecimals  : tfm_rounddecfactor;
      FinCndnRateFactorRndngCategory : tfm_sroundratefactor;
      FinCndnRateFactorRndngDecimals : tfm_rounddecratefactor;
      FinCndnBaseFactorRndngCategory : tfm_sroundbasefactor;
      FinCndnBaseFactorRndngDecimals : tfm_rounddecbasefactor;
      FinCndnRateFixingLockoutPeriod : tfmatlockout;
      FinCndnProcessingSequenceValue : tfm_sequence;
      AvgIntrstRateHasUsedUpperLimit : tfm_javgcap;
      AverageInterestUpperLimitRate  : tfm_pavgcap;
      AvgIntrstRateHasUsedLowerLimit : tfm_javgfloor;
      AverageInterestLowerLimitRate  : tfm_pavgfloor;
      AverageInterestRateSpreadValue : tfm_pavgspread;
      AverageIntrstRateRndngCategory : tfm_sroundavginterest;
      AverageIntrstRateRndngDecimals : tfm_rounddecavginterest;
      AverageIntrstRateWeightingCat  : tfm_sweight;
      AverageIntrstRateResetCalcEvt  : tfm_sfactorreset;
      FinCndnItmHasUsedLowerLimitAmt : tfm_jugrenz;
      FinCndnItmHasUsedUpperLimitAmt : tfm_jugrenz;

      _FmlaVarbl                     : composition [0..*] of D_IntrstRateInstrChgFmlaVarblP;
      _Scales                        : composition [0..*] of D_IntrstRateInstrChgScaleP;
      _SingleDates                   : composition [0..*] of D_IntrstRateInstrChgSglDteP;
      _IntrstRateInstr              : association to parent D_IntrstRateInstrChangeP;
      //      _InrstRateInstrAssociation     : association to parent D_IntrstRateInstrChangeP  on $projection.CompanyCode          = _InrstRateInstrAssociation.CompanyCode
      //                                                                                       and $projection.FinancialTransaction = _InrstRateInstrAssociation.FinancialTransaction;

}
```
