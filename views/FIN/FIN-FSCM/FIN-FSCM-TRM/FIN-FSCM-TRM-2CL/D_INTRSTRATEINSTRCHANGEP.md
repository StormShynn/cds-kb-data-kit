---
name: D_INTRSTRATEINSTRCHANGEP
description: D Intrstrateinstrchangep
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
# D_INTRSTRATEINSTRCHANGEP

**D Intrstrateinstrchangep**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CompanyCode` |  | |  | `bukrs` |
| `FinancialTransaction` |  | |  | `tb_rfha` |
| `TermStartDate` |  | |  | `tb_dblfz` |
| `TermEndDate` |  | |  | `tb_delfz` |
| `FinTransFlowNomAmt` |  | |  | `ftr_nominal_amount` |
| `FinTransFlowNomAmtCrcy` |  | |  | `tb_wzbetr` |
| `FinConditionInterestCategory` |  | |  | `ftr_intcat` |
| `InterestConditionType` |  | |  | `skoart` |
| `ReferenceInterestRate` |  | |  | `szsref` |
| `ConditionPercentageRate` |  | |  | `tm_pzins` |
| `FinConditionFixedAmount` |  | |  | `ftr_fixed_amount` |
| `FinConditionFixedAmountCrcy` |  | |  | `ftr_cndn_fixed_amount_currency` |
| `InterestCalculationMethod` |  | |  | `szbmeth` |
| `InterestCalcDteFrqcyCat` |  | |  | `tb_srhythm` |
| `InterestCalcDteFrequency` |  | |  | `tb_arhytm` |
| `TermStartDateIsInclusive` |  | |  | `tb_sinclbe_new` |
| `InterestIsCapitalized` |  | |  | `tb_szinskap` |
| `IntrstDueDteIsShiftedToTermEnd` |  | |  | `tb_sfranze` |
| `InterestCalcDteWrkgDayShft` |  | |  | `tb_svwerk` |
| `InterestDueDteWrkgDayShft` |  | |  | `tb_sfwerk` |
| `RepaymentCategory` |  | |  | `tb_repaym_structure` |
| `RepaymentConditionType` |  | |  | `skoart` |
| `FinConditionRpaytAmount` |  | |  | `ftr_repayment_amount` |
| `FinConditionRpaytCurrency` |  | |  | `ftr_cndn_rpayt_amount_currency` |
| `RepaymentFrqcyCat` |  | |  | `tb_srhythm` |
| `RepaymentCalcDteFrequency` |  | |  | `tb_arhytm` |
| `RepaymentCalcDteWrkgDayShft` |  | |  | `tb_svwerk` |
| `RpaytDueDteIsShiftedToTermEnd` |  | |  | `tb_sfranze` |
| `InterestValidityStartDate` |  | |  | `dguel_kp` |
| `InterestFirstDueDate` |  | |  | `tbfaeltz` |
| `InterestFirstCalcDate` |  | |  | `dvalut` |
| `InterestCalcDteFrqcyUnit` |  | |  | `tb_arhytm_unit` |
| `InterestMarkupMarkdownValue` |  | |  | `tb_zzs` |
| `InterestFirstPeriodRate` |  | |  | `tfm_pkond1stper` |
| `InterestDueDteShftNrOfDays` |  | |  | `tbvfaetz` |
| `InterestCalcDteUpdateRule` |  | |  | `tb_svmeth` |
| `InterestDueDteUpdateRule` |  | |  | `tb_sfmeth` |
| `RepaymentValidityStartDate` |  | |  | `dguel_kp` |
| `RepaymentFirstDueDate` |  | |  | `tbfaeltz` |
| `RepaymentFirstCalculationDate` |  | |  | `dvalut` |
| `RepaymentCalcDteFrqcyUnit` |  | |  | `tb_arhytm_unit` |
| `FinTransFlowPaytAmt` |  | |  | `ftr_payment_amount` |
| `FinTransFlowPaytAmtCrcy` |  | |  | `tb_wzbetr` |
| `FinTransPaytRateInPercent` |  | |  | `tb_pwkurs` |
| `InterestConditionLogicGroup` |  | |  | `interest_condition_logic_group` |
| `RepaymentCalcDteUpdateRule` |  | |  | `tb_svmeth` |
| `RepaymentDueDteUpdateRule` |  | |  | `tb_sfmeth` |
| `FinTransActyConclusionDate` |  | |  | `tb_dvtrab` |
| `FinTransActyConclusionTime` |  | |  | `tb_tvtrab` |
| `FinancialInstrContactPerson` |  | |  | `tb_gsppart` |
| `Trader` |  | |  | `rdealer` |
| `Portfolio` |  | |  | `rportb` |
| `TreasuryFinanceProject` |  | |  | `tb_tfproj` |
| `FinancialInstrumentAssignment` |  | |  | `tb_zuond` |
| `FinancialInstrumentReference` |  | |  | `tb_refer` |
| `FinancialInstrCharacteristic` |  | |  | `tb_merkm` |
| `FinTransIsRiskMitigating` |  | |  | `ftr_threshold_risk_mitigating` |
| `FinTransNoticeDate` |  | |  | `tb_notice_date` |
| `FinTransRoundingCategory` |  | |  | `tb_srndng` |
| `MarketIdentifierCode` |  | |  | `tba_mic` |
| `FinTransNoticePeriod` |  | |  | `tb_akuend` |
| `FinTransNoticePeriodUnit` |  | |  | `tb_skuend` |
| `FinTransCndnChgParamIsCmplt` |  | |  | `ftr_condition_change_params_i` |
| `FinTransMainFlwChgParamIsCmplt` |  | |  | `ftr_main_flow_change_params_i` |
| `FinTransAddlFlwChgParamIsCmplt` |  | |  | `ftr_addl_flow_change_params_i` |
| `FinTransIntrstHndlgAtRollover` |  | |  | `tb_sznspro` |
| `RolloverDfrrdIntrstPyoutDte` |  | |  | `tb_dznsstd` |
| `ClassificationOfFinInstr` |  | |  | `ftr_cfi_code` |
| `D_IntrstRateInstrChgCndnP` |  | |  | `_Conditions : composition [0..*] of D_IntrstRateInstrChgCndnP` |
| `D_IntrstRateInstrChgMainFlowP` |  | |  | `_MainFlows : composition [0..*] of D_IntrstRateInstrChgMainFlowP` |
| `D_IntrstRateInstrChgAddlFlowP` |  | |  | `_AdditionalFlows : composition [0..*] of D_IntrstRateInstrChgAddlFlowP` |

## Source Code

```abap
@EndUserText.label: 'Interest Rate Instrument View Parameter'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]

define root abstract entity D_IntrstRateInstrChangeP
{
//  key DummyKey                       : abap.char(1);
      CompanyCode                    : bukrs;
      FinancialTransaction           : tb_rfha;
      TermStartDate                  : tb_dblfz;
      TermEndDate                    : tb_delfz;
      @Semantics.amount.currencyCode : 'FinTransFlowNomAmtCrcy'
      FinTransFlowNomAmt             : ftr_nominal_amount;
      @Semantics.currencyCode        : true
      FinTransFlowNomAmtCrcy         : tb_wzbetr;
      //interest condition
      FinConditionInterestCategory   : ftr_intcat;
      InterestConditionType          : skoart;
      ReferenceInterestRate          : szsref;
      ConditionPercentageRate        : tm_pzins;
      @Semantics.amount.currencyCode : 'FinConditionFixedAmountCrcy'
      FinConditionFixedAmount        : ftr_fixed_amount;
      @Semantics.currencyCode        : true
      FinConditionFixedAmountCrcy    : ftr_cndn_fixed_amount_currency;
      InterestCalculationMethod      : szbmeth;
      InterestCalcDteFrqcyCat        : tb_srhythm;
      InterestCalcDteFrequency       : tb_arhytm;
      TermStartDateIsInclusive       : tb_sinclbe_new;
      InterestIsCapitalized          : tb_szinskap;
      IntrstDueDteIsShiftedToTermEnd : tb_sfranze;
      InterestCalcDteWrkgDayShft     : tb_svwerk;
      InterestDueDteWrkgDayShft      : tb_sfwerk;
      //repayment condition
      RepaymentCategory              : tb_repaym_structure;
      RepaymentConditionType         : skoart;
      @Semantics.amount.currencyCode : 'FinConditionRpaytCurrency'
      FinConditionRpaytAmount        : ftr_repayment_amount;
      @Semantics.currencyCode        : true
      FinConditionRpaytCurrency      : ftr_cndn_rpayt_amount_currency;
      RepaymentFrqcyCat              : tb_srhythm;
      RepaymentCalcDteFrequency      : tb_arhytm;
      RepaymentCalcDteWrkgDayShft    : tb_svwerk;
      RpaytDueDteIsShiftedToTermEnd  : tb_sfranze;
      //interest condition
      InterestValidityStartDate      : dguel_kp;
      InterestFirstDueDate           : tbfaeltz;
      InterestFirstCalcDate          : dvalut;
      InterestCalcDteFrqcyUnit       : tb_arhytm_unit;
      InterestMarkupMarkdownValue    : tb_zzs;
      InterestFirstPeriodRate        : tfm_pkond1stper;
      InterestDueDteShftNrOfDays     : tbvfaetz;
      InterestCalcDteUpdateRule      : tb_svmeth;
      InterestDueDteUpdateRule       : tb_sfmeth;
      //repayment condition
      RepaymentValidityStartDate     : dguel_kp;
      RepaymentFirstDueDate          : tbfaeltz;
      RepaymentFirstCalculationDate  : dvalut;
      RepaymentCalcDteFrqcyUnit      : tb_arhytm_unit;
      @Semantics.amount.currencyCode : 'FinTransFlowPaytAmtCrcy'
      FinTransFlowPaytAmt            : ftr_payment_amount;
      @Semantics.currencyCode        : true
      FinTransFlowPaytAmtCrcy        : tb_wzbetr;
      FinTransPaytRateInPercent      : tb_pwkurs;
      InterestConditionLogicGroup    : interest_condition_logic_group;
      RepaymentCalcDteUpdateRule     : tb_svmeth;
      RepaymentDueDteUpdateRule      : tb_sfmeth;
      //general data
      FinTransActyConclusionDate     : tb_dvtrab;
      FinTransActyConclusionTime     : tb_tvtrab;
      FinancialInstrContactPerson    : tb_gsppart;
      Trader                         : rdealer;
      Portfolio                      : rportb;
      TreasuryFinanceProject         : tb_tfproj;
      FinancialInstrumentAssignment  : tb_zuond;
      FinancialInstrumentReference   : tb_refer;
      FinancialInstrCharacteristic   : tb_merkm;
      FinTransIsRiskMitigating       : ftr_threshold_risk_mitigating;
      FinTransNoticeDate             : tb_notice_date;
      FinTransRoundingCategory       : tb_srndng;
      MarketIdentifierCode           : tba_mic;
      FinTransNoticePeriod           : tb_akuend;
      FinTransNoticePeriodUnit       : tb_skuend;
      FinTransCndnChgParamIsCmplt    : ftr_condition_change_params_i;
      FinTransMainFlwChgParamIsCmplt : ftr_main_flow_change_params_i;
      FinTransAddlFlwChgParamIsCmplt : ftr_addl_flow_change_params_i;
      FinTransIntrstHndlgAtRollover  : tb_sznspro;
      RolloverDfrrdIntrstPyoutDte    : tb_dznsstd;
      ClassificationOfFinInstr       : ftr_cfi_code;

      _Conditions                    : composition [0..*] of D_IntrstRateInstrChgCndnP;
      _MainFlows                     : composition [0..*] of D_IntrstRateInstrChgMainFlowP;
      _AdditionalFlows               : composition [0..*] of D_IntrstRateInstrChgAddlFlowP;

}
```
