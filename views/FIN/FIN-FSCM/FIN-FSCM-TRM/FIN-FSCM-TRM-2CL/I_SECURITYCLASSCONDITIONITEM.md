---
name: I_SECURITYCLASSCONDITIONITEM
description: Securityclassconditionitem
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
  - interface-view
  - pricing-condition
  - item-level
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_SECURITYCLASSCONDITIONITEM

**Securityclassconditionitem**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SecurityClass` | `cast(ConditionItem.rkey1 as ftr_gen_security_class preserving type)` |
| key `FinConditionConditionType` | `ConditionItem.skoart` |
| key `ConditionItemValidityStartDate` | `case when dats_is_valid(ConditionItem.dguel_kp) = 1 then ConditionItem.dguel_kp else '99991231' end` |
| key `FinConditionSubItem` | `ConditionItem.nstufe` |
| `FinancialInstrProductCategory` | `cast(ConditionItem.sanlf as ftr_gen_fin_instr_prod_categ preserving type)` |
| `CndnItmValdtyStrtDtIsInclusive` | `cast(case when ConditionItem.sexclguel = '0' then 'X' else '' end as ftr_sc_cndn_strt_dte_incld_ind preserving type )` |
| `FinConditionForm` | `ConditionItem.jnullkon` |
| `FinCndnReferenceConditionType` | `ConditionType.skoaref` |
| `FinCndnRefAccumulatingCndnType` | `ConditionType.sum_skoaref` |
| `InterestCalculationMethod` | `ConditionItem.szbmeth` |
| `InterestCalculationType` | `cast ( case when ConditionItem.jexpozins = 'X' then '1' when ConditionItem.jprozr = 'X' then '2' when ConditionItem.jprozr = 'Y' then '3' when ConditionItem.jexpointfactor = 'X' then '4' when ConditionItem.jexpozins = 'L' then '5' when ConditionItem.jexpointfactor = 'L' then '6' when ConditionItem.jexpointfactor = 'A' then '7' else '0' end as tfmsintcalc preserving type )` |
| `ExponentialIntrstSettlmtFrqcy` | `ConditionItem.ammrhyzv` |
| `IntrstCalcMethFactoryCalendar` | `ConditionItem.skalidwt` |
| `InterestFirstPeriodRate` | `ConditionItem.pkond1stper` |
| `InterestRefRateOptrSign` | `ConditionItem.szsrefvz` |
| `InterestReference` | `ConditionItem.szsref` |
| `ConditionPercentageRate` | `ConditionItem.pkond` |
| `FinCndnFluctuationMarginRate` | `ConditionItem.pfluct` |
| `FinancialConditionPaymentRate` | `ConditionItem.ppayment` |
| `FinConditionFormulaReference` | `ConditionItem.sformref` |
| `FinCndnFormulaVariable` | `ConditionItem.svarname` |
| `DividendFactorType` | `ConditionItem.factor_type` |
| `FinCndnRateFactorRndngCategory` | `ConditionItem.sroundratefactor` |
| `FinCndnRateFactorRndngDecimals` | `ConditionItem.rounddecratefactor` |
| `FinCndnFactorRoundingCategory` | `ConditionItem.sroundfactor` |
| `FinCndnFactorRoundingDecimals` | `ConditionItem.rounddecfactor` |
| `FinCndnBaseFactorRndngCategory` | `ConditionItem.sroundbasefactor` |
| `FinCndnBaseFactorRndngDecimals` | `ConditionItem.rounddecbasefactor` |
| `FinCndnAmountRoundingCategory` | `ConditionItem.sround` |
| `FinCndnAmountRoundingUnit` | `ConditionItem.broundunit` |
| `RndngBaseUntAmtInCndnItmCrcy` | `ConditionItem.bbasisunit` |
| `FinConditionIntrstBaseAmount` | `cast(ConditionItem.bbasis as ftr_cndn_intrst_base_amount)` |
| `FinCndnCalcBaseReference` | `ConditionItem.sbasis` |
| `FinancialConditionItemAmount` | `ConditionItem.kbkond` |
| `FinancialConditionItemCurrency` | `ConditionItem.swhrkond` |
| `FinCndnAmountTimeUnit` | `ConditionItem.jbmonat` |
| `ScrtyClCndnDrctExchRate` | `cast( case when ConditionItem.kurs1 >= 0 then ConditionItem.kurs1 else 0 end as ftr_sc_exchange_rate_direct preserving type )` |
| `ScrtyClCndnIndrctExchRate` | `cast( case when ConditionItem.kurs1 < 0 then abs( ConditionItem.kurs1 ) else 0 end as ftr_sc_exchange_rate_indirect preserving type )` |
| `FinConditionFactoryCalendar1` | `ConditionItem.skalid` |
| `FinConditionFactoryCalendar2` | `ConditionItem.skalid2` |
| `FinConditionFactoryCalendar3` | `ConditionItem.skalid3` |
| `FinConditionFactoryCalendar4` | `ConditionItem.skalid4` |
| `FinConditionFactoryCalendar5` | `ConditionItem.skalid5` |
| `AverageIntrstRateWeightingCat` | `ConditionItem.savgweight` |
| `AverageIntrstRateRndngCategory` | `ConditionItem.sroundavginterest` |
| `AverageIntrstRateRndngDecimals` | `ConditionItem.rounddecavginterest` |
| `AverageInterestRateSpreadValue` | `ConditionItem.pavgspread` |
| `AvgIntrstRateHasUsedUpperLimit` | `ConditionItem.javgcap` |
| `AverageInterestUpperLimitRate` | `ConditionItem.pavgcap` |
| `AvgIntrstRateHasUsedLowerLimit` | `ConditionItem.javgfloor` |
| `AverageInterestLowerLimitRate` | `ConditionItem.pavgfloor` |
| `AverageIntrstRateResetCalcEvt` | `ConditionItem.sfactorreset` |
| `FinCndnUpdateRuleEntryType` | `case when ConditionType.sberfima <> 'ZA' then ConditionItem.update_rule_entry_type else null end` |
| `FinCndnUpdateRuleFirstDate` | `case when ConditionType.sberfima <> 'ZA' and (ConditionItem.update_rule_entry_type = '09' or ConditionItem.update_rule_entry_type = '10') then ConditionItem.dfaell else null end` |
| `FinCndnUpdateRuleDateFrequency` | `cast(case when ConditionType.sberfima <> 'ZA' and (ConditionItem.update_rule_entry_type = '09' or ConditionItem.update_rule_entry_type = '10') and ( ConditionItem.svmeth = '1' or ConditionItem.svmeth = '2' or ConditionItem.svmeth = '5' ) and ConditionItem.attrhy is not initial then ConditionItem.attrhy when ConditionType.sberfima <> 'ZA' and (ConditionItem.update_rule_entry_type = '09' or ConditionItem.update_rule_entry_type = '10') and ( ConditionItem.svmeth = '1' or ConditionItem.svmeth = '2' or ConditionItem.svmeth = '5' ) and ConditionItem.ammrhy is not initial then ConditionItem.ammrhy else null end as ftr_codn_calc_dte_frequency preserving type )` |
| `FinCndnUpdateRuleDateFrqcyUnit` | `cast(case when ConditionType.sberfima <> 'ZA' and (ConditionItem.update_rule_entry_type = '09' or ConditionItem.update_rule_entry_type = '10') and ( ConditionItem.svmeth = '1' or ConditionItem.svmeth = '2' or ConditionItem.svmeth = '5' ) and ConditionItem.attrhy is not initial then '1' when ConditionType.sberfima <> 'ZA' and (ConditionItem.update_rule_entry_type = '09' or ConditionItem.update_rule_entry_type = '10') and ( ConditionItem.svmeth = '1' or ConditionItem.svmeth = '2' or ConditionItem.svmeth = '5' ) and ConditionItem.ammrhy is not initial then '0' else null end as ftr_codn_calc_dte_unit preserving type )` |
| `UpdateRuleDateIsMonthEnd` | `cast(case when ConditionType.sberfima <> 'ZA' and (ConditionItem.update_rule_entry_type = '09' or ConditionItem.update_rule_entry_type = '10') then ConditionItem.sfult else null end as due_dte_as_end_date_month_end preserving type )` |
| `FinCndnUpdtRuleDateWrkgDayShft` | `cast(case when ConditionType.sberfima <> 'ZA' and (ConditionItem.update_rule_entry_type = '09' or ConditionItem.update_rule_entry_type = '10') then ConditionItem.sfwerk else null end as ftr_cndn_due_date_wrk_day_sft preserving type )` |
| `FinCndnCalcDteUpdateRule` | `cast( case when ConditionType.sberfima = 'ZA' then '0' when ConditionItem.svmeth = '1' or ConditionItem.svmeth = '2' then '0' when ConditionItem.svmeth = '3' or ConditionItem.svmeth = '4' then '1' when ConditionItem.svmeth = '5' then '2' else null end as ftr_cndn_calc_date_update_rule preserving type )` |
| `CalculationDate` | `case when ConditionType.sberfima <> 'ZA' then ConditionItem.dvalut else null end` |
| `FinCndnCalcDteFrequency` | `cast(case when ConditionType.sberfima <> 'ZA' and ( ConditionItem.svmeth = '1' or ConditionItem.svmeth = '2' or ConditionItem.svmeth = '5' ) and ConditionItem.attrhy is not initial then ConditionItem.attrhy when ConditionType.sberfima <> 'ZA' and ( ConditionItem.svmeth = '1' or ConditionItem.svmeth = '2' or ConditionItem.svmeth = '5' ) and ConditionItem.ammrhy is not initial then ConditionItem.ammrhy else null end as ftr_codn_calc_dte_frequency preserving type )` |
| `FinCndnCalcDteFrqcyUnit` | `cast(case when ConditionType.sberfima <> 'ZA' and ( ConditionItem.svmeth = '1' or ConditionItem.svmeth = '2' or ConditionItem.svmeth = '5' ) and ConditionItem.attrhy is not initial then '1' when ConditionType.sberfima <> 'ZA' and ( ConditionItem.svmeth = '1' or ConditionItem.svmeth = '2' or ConditionItem.svmeth = '5' ) and ConditionItem.ammrhy is not initial then '0' else null end as ftr_codn_calc_dte_unit preserving type )` |
| `CalcDateIsAsEndDateInclusive` | `cast(case when ConditionType.sberfima = 'ZA' then '' when ConditionItem.sincl = '0' then '' else 'X' end as ftr_dateisinclusive preserving type )` |
| `CalcDateIsAsEndDateMonthEnd` | `cast(case when ConditionType.sberfima <> 'ZA' then ConditionItem.svult else null end as calc_dte_as_end_dte_month_end preserving type )` |
| `FinCndnCalcDteWrkgDayShft` | `cast(case when ConditionType.sberfima <> 'ZA' then ConditionItem.svwerk else null end as ftr_cndn_calc_date_wrk_day_sft preserving type )` |
| `FinCndnCalcDteShftDrctn` | `cast(case when ConditionType.sberfima <> 'ZA' then ConditionItem.avgstagevz else null end as ftr_cndn_calc_dte_shft_drctn preserving type )` |
| `ScrtyClCndnCalcDteShftNrOfDays` | `cast( case when ConditionType.sberfima <> 'ZA' then ConditionItem.avgstage else null end as ftr_sc_cndn_calc_dte_shft_days preserving type )` |
| `CalcDteIsRegularWithVarblDte` | `cast ( case when ConditionType.sberfima = 'ZA' then '' when ConditionItem.svmeth = '2' then 'X' when ConditionItem.svmeth <> '2' then '' else null end as calc_dte_is_reg_with_varbl_dte preserving type )` |
| `InterestCalculationDateRef` | `cast ( case when ConditionType.sberfima = 'ZA' then '0' when ConditionItem.svmeth = '4' then '0' when ConditionItem.svmeth = '3' then '1' else null end as reference_date_for_calc_dte preserving type )` |
| `FinCndnDueDteUpdateRule` | `cast( case when ConditionType.sberfima = 'ZA' then '0' when ConditionItem.sfmeth = '1' or ConditionItem.sfmeth = '2' then '0' when ConditionItem.sfmeth = '3' or ConditionItem.sfmeth = '4' then '1' when ConditionItem.sfmeth = '5' then '2' else null end as ftr_cndn_due_date_update_rule preserving type )` |
| `DueDate` | `case when ConditionType.sberfima <> 'ZA' then ConditionItem.dfaell else null end` |
| `FinCndnDueDteFrequency` | `cast( case when ConditionType.sberfima <> 'ZA' and ( ConditionItem.sfmeth = '1' or ConditionItem.sfmeth = '2' or ConditionItem.sfmeth = '5' ) and ConditionItem.attrhy is not initial then ConditionItem.attrhy when ConditionType.sberfima <> 'ZA' and ( ConditionItem.sfmeth = '1' or ConditionItem.sfmeth = '2' or ConditionItem.sfmeth = '5' ) and ConditionItem.ammrhy is not initial then ConditionItem.ammrhy else null end as ftr_cndn_due_date_frequency preserving type )` |
| `FinCndnDueDteFrqcyUnit` | `cast( case when ConditionType.sberfima <> 'ZA' and ( ConditionItem.sfmeth = '1' or ConditionItem.sfmeth = '2' or ConditionItem.sfmeth = '5' ) and ConditionItem.attrhy is not initial then '1' when ConditionType.sberfima <> 'ZA' and ( ConditionItem.sfmeth = '1' or ConditionItem.sfmeth = '2' or ConditionItem.sfmeth = '5' ) and ConditionItem.ammrhy is not initial then '0' else null end as ftr_cndn_due_date_frqcy_unit preserving type )` |
| `DueDateIsAsEndDateInclusive` | `cast (case when ConditionType.sberfima = 'ZA' then '' when ConditionItem.sfincl = '0' then '' else 'X' end as ftr_dateisinclusive preserving type )` |
| `DueDateIsAsEndDateMonthEnd` | `cast( case when ConditionType.sberfima <> 'ZA' then ConditionItem.sfult else null end as due_dte_as_end_date_month_end preserving type )` |
| `FinCndnDueDteWrkgDayShft` | `cast( case when ConditionType.sberfima <> 'ZA' then ConditionItem.sfwerk else null end as ftr_cndn_due_date_wrk_day_sft preserving type )` |
| `FinCndnDueDteShftDrctn` | `cast( case when ConditionType.sberfima <> 'ZA' then ConditionItem.afgstagevz else null end as ftr_cndn_due_date_shift_drctn preserving type )` |
| `ScrtyClCndnDueDteShftNrOfDays` | `cast( case when ConditionType.sberfima <> 'ZA' then ConditionItem.afgstage else null end as ftr_sc_cndn_due_dte_shft_days preserving type )` |
| `DueDteIsRegularWithVarblDte` | `cast ( case when ConditionItem.sfmeth = '2' and ConditionType.sberfima <> 'ZA' then 'X' when ConditionItem.sfmeth <> '2' and ConditionType.sberfima <> 'ZA' then '' else null end as due_dte_is_reg_with_varbl_dte preserving type )` |
| `InterestDueDateReference` | `cast ( case when ConditionType.sberfima <> 'ZA' then '0' when ConditionItem.sfmeth = '5' then '0' when ConditionItem.sfmeth = '4' then '0' when ConditionItem.sfmeth = '3' then '1' else null end as reference_date_for_due_dte preserving type )` |
| `FinCndnPaytDateWrkgDayShft` | `ConditionItem.sdwerk` |
| `FinCndnDueDteShiftToTermEnd` | `cast( ConditionItem.sfranz as tb_sfranze_new )` |
| `FinCndnDuDteIsFinMathCalcReltd` | `cast( case when ConditionItem.sfant = '0' then '' else 'X' end as ftr_sc_vvsfant preserving type )` |
| `FinCndnRpaytSettlmt` | `ConditionItem.jsofverr` |
| `FinCndnFirstPeriodCalcMethod` | `cast ( case ConditionItem.szeitant when '0' then '0' when '1' then '2' when '2' then '1' when '3' then '0' when '4' then '0' when '5' then '2' when '6' then '1' when '7' then '2' when '8' then '1' else '0' end as tfmsfstper preserving type )` |
| `FinCndnLastPeriodCalcMethod` | `cast ( case ConditionItem.szeitant when '0' then '0' when '1' then '2' when '2' then '1' when '3' then '2' when '4' then '1' when '5' then '0' when '6' then '0' when '7' then '1' when '8' then '2' else '0' end as tfmslstper preserving type )` |
| `InterestRateAdjustmentDateRule` | `cast ( case when ConditionType.sberfima = 'ZA' and ConditionItem.svmeth = '1' then '1' when ConditionType.sberfima = 'ZA' and ConditionItem.svmeth = '5' then '2' when ConditionType.sberfima = 'ZA' and ConditionItem.svmeth = '6' then '0' when ConditionType.sberfima = 'ZA' and ConditionItem.svmeth = '7' then '3' else null end as tfmsrhyzap preserving type )` |
| `InterestRateAdjustmentDate` | `cast ( case when ConditionType.sberfima = 'ZA' then ConditionItem.dvalut else null end as tbvaluza preserving type )` |
| `IntrstRateAdjmtDateIsMonthEnd` | `cast ( case when ConditionType.sberfima = 'ZA' then ConditionItem.svult else null end as adjmt_dte_as_end_dte_month_end preserving type )` |
| `InterestRateAdjustmentFrqcy` | `cast ( case when ConditionType.sberfima = 'ZA' and ( ConditionItem.svmeth = '1' or ConditionItem.svmeth = '2' or ConditionItem.svmeth = '5' ) and ConditionItem.attrhy is not initial then ConditionItem.attrhy when ConditionType.sberfima = 'ZA' and ( ConditionItem.svmeth = '1' or ConditionItem.svmeth = '2' or ConditionItem.svmeth = '5' ) and ConditionItem.ammrhy is not initial then ConditionItem.ammrhy else null end as ftr_cndn_adjmt_date_frequency preserving type )` |
| `InterestRateAdjmtFrqcyUnit` | `cast ( case when ConditionType.sberfima = 'ZA' and ( ConditionItem.svmeth = '1' or ConditionItem.svmeth = '2' or ConditionItem.svmeth = '5' ) and ConditionItem.attrhy is not initial then '1' when ConditionType.sberfima = 'ZA' and ( ConditionItem.svmeth = '1' or ConditionItem.svmeth = '2' or ConditionItem.svmeth = '5' ) and ConditionItem.ammrhy is not initial then '0' else null end as ftr_cndn_adjmt_date_frqcy_unit preserving type )` |
| `IntrstRateAdjmtDateWrkgDayShft` | `cast ( case when ConditionType.sberfima = 'ZA' then ConditionItem.svwerk else null end as ftr_cndn_adjmt_dte_wrk_day_sft preserving type )` |
| `FinCndnAdjmtDteShftDrctn` | `cast ( case when ConditionType.sberfima = 'ZA' then ConditionItem.avgstagevz else null end as ftr_cndn_adjmt_dte_shft_drctn preserving type )` |
| `ScrtyClIntrstRateAdjmtShftDays` | `cast( case when ConditionType.sberfima = 'ZA' then ConditionItem.avgstage else null end as ftr_sc_cndn_adj_dte_shft_days preserving type )` |
| `InterestRateFixingDateRule` | `cast ( case when ConditionType.sberfima = 'ZA' and ConditionItem.sfmeth = '1' then '0' when ConditionType.sberfima = 'ZA' and ConditionItem.sfmeth = '5' then '2' when ConditionType.sberfima = 'ZA' and ( ConditionItem.sfmeth = '3' or ConditionItem.sfmeth = '6' or ConditionItem.sfmeth = '8' or ConditionItem.sfmeth = '9' ) then '1' else null end as tfmsrhy preserving type )` |
| `InterestRateFixingDate` | `cast ( case when ConditionType.sberfima = 'ZA' then ConditionItem.dfaell else null end as tbfaelza preserving type )` |
| `IntrstRateFixingDateIsMonthEnd` | `cast ( case when ConditionType.sberfima = 'ZA' then ConditionItem.sfult else null end as fixing_dte_as_end_dte_mnth_end preserving type )` |
| `InterestRateFixingFrqcy` | `cast( case when ConditionType.sberfima = 'ZA' and ( ConditionItem.sfmeth = '1' or ConditionItem.sfmeth = '2' or ConditionItem.sfmeth = '5' ) and ConditionItem.attrhy is not initial then ConditionItem.attrhy when ConditionType.sberfima = 'ZA' and ( ConditionItem.sfmeth = '1' or ConditionItem.sfmeth = '2' or ConditionItem.sfmeth = '5' ) and ConditionItem.ammrhy is not initial then ConditionItem.ammrhy else null end as ftr_cndn_fixing_date_frequency preserving type )` |
| `InterestRateFixingFrqcyUnit` | `cast( case when ConditionType.sberfima = 'ZA' and ( ConditionItem.sfmeth = '1' or ConditionItem.sfmeth = '2' or ConditionItem.sfmeth = '5' ) and ConditionItem.attrhy is not initial then '1' when ConditionType.sberfima = 'ZA' and ( ConditionItem.sfmeth = '1' or ConditionItem.sfmeth = '2' or ConditionItem.sfmeth = '5' ) and ConditionItem.ammrhy is not initial then '0' else null end as ftr_cndn_fixing_dte_frqcy_unit preserving type )` |
| `FinCndnFixingDteShftDrctn` | `cast ( case when ConditionType.sberfima = 'ZA' and (ConditionItem.sfwerk = '3' or ConditionItem.sfwerk = '4') then '-' when ConditionType.sberfima = 'ZA' and (ConditionItem.sfwerk = '1' or ConditionItem.sfwerk = '2') then '+' else null end as ftr_cndn_fixing_dte_shft_drctn preserving type )` |
| `ScrtyClIntrstRateFixShftDays` | `cast( case when ConditionType.sberfima = 'ZA' then ConditionItem.afgstage else null end as ftr_sc_cndn_fix_dte_shft_days preserving type )` |
| `FinCndnRateFixingLockoutPeriod` | `ConditionItem.adgstage` |
| `IntrstRateFixDteShftIsModifd` | `cast ( case when ConditionType.sberfima = 'ZA' and (ConditionItem.sfwerk = '2' or ConditionItem.sfwerk = '4') then 'X' else null end as tfmjmodif preserving type )` |
| `InterestRateFixingDateRef` | `cast ( case when ConditionType.sberfima = 'ZA' and ( ConditionItem.sfmeth = '1' or ConditionItem.sfmeth = '5' or ConditionItem.sfmeth = '8' ) then '0' when ConditionType.sberfima = 'ZA' and ConditionItem.sfmeth = '3' then '1' when ConditionType.sberfima = 'ZA' and ConditionItem.sfmeth = '6' then '3' when ConditionType.sberfima = 'ZA' and ConditionItem.sfmeth = '9' then '2' else null end as tfmzreldat preserving type )` |
| `_SecurityClassBasic` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SecurityClassBasic` | `I_SecurityClassBasic` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Security Class Condition Item'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#SEARCHABLE_ENTITY,#SQL_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #M,
  dataClass: #MASTER
}
@VDM.viewType: #BASIC
define view entity I_SecurityClassConditionItem
  as select from vzzkopo as ConditionItem
    inner join   tzk01   as ConditionType on ConditionItem.skoart = ConditionType.skoart

  association [1..1] to I_SecurityClassBasic as _SecurityClassBasic on $projection.SecurityClass = _SecurityClassBasic.SecurityClass

{
  key cast(ConditionItem.rkey1 as ftr_gen_security_class preserving type)       as SecurityClass,
  key ConditionItem.skoart                                                      as FinConditionConditionType,
  key case
        when dats_is_valid(ConditionItem.dguel_kp) = 1
          then ConditionItem.dguel_kp
        else
          '99991231'
      end as ConditionItemValidityStartDate,  
  //key ConditionItem.dguel_kp                                                    as ConditionItemValidityStartDate,
  key ConditionItem.nstufe                                                      as FinConditionSubItem,
      cast(ConditionItem.sanlf as ftr_gen_fin_instr_prod_categ preserving type) as FinancialInstrProductCategory,
      cast(case
        when ConditionItem.sexclguel = '0' then 'X'
        else ''
      end as ftr_sc_cndn_strt_dte_incld_ind preserving type )                   as CndnItmValdtyStrtDtIsInclusive,
      ConditionItem.jnullkon                                                    as FinConditionForm,

      ConditionType.skoaref                                                     as FinCndnReferenceConditionType,
      ConditionType.sum_skoaref                                                 as FinCndnRefAccumulatingCndnType,

      ConditionItem.szbmeth                                                     as InterestCalculationMethod,

      cast ( case
        when ConditionItem.jexpozins      = 'X' then '1'
        when ConditionItem.jprozr         = 'X' then '2'
        when ConditionItem.jprozr         = 'Y' then '3'
        when ConditionItem.jexpointfactor = 'X' then '4'
        when ConditionItem.jexpozins      = 'L' then '5'
        when ConditionItem.jexpointfactor = 'L' then '6'
        when ConditionItem.jexpointfactor = 'A' then '7'
        else '0'
        end as tfmsintcalc preserving type )                                    as InterestCalculationType,

      ConditionItem.ammrhyzv                                                    as ExponentialIntrstSettlmtFrqcy,
      ConditionItem.skalidwt                                                    as IntrstCalcMethFactoryCalendar,
      ConditionItem.pkond1stper                                                 as InterestFirstPeriodRate,


      ConditionItem.szsrefvz                                                    as InterestRefRateOptrSign,
      ConditionItem.szsref                                                      as InterestReference,
      ConditionItem.pkond                                                       as ConditionPercentageRate,
      ConditionItem.pfluct                                                      as FinCndnFluctuationMarginRate,
      ConditionItem.ppayment                                                    as FinancialConditionPaymentRate,

      ConditionItem.sformref                                                    as FinConditionFormulaReference,
      ConditionItem.svarname                                                    as FinCndnFormulaVariable,
      ConditionItem.factor_type                                                 as DividendFactorType,
      ConditionItem.sroundratefactor                                            as FinCndnRateFactorRndngCategory,
      ConditionItem.rounddecratefactor                                          as FinCndnRateFactorRndngDecimals,

      ConditionItem.sroundfactor                                                as FinCndnFactorRoundingCategory,
      ConditionItem.rounddecfactor                                              as FinCndnFactorRoundingDecimals,
      ConditionItem.sroundbasefactor                                            as FinCndnBaseFactorRndngCategory,
      ConditionItem.rounddecbasefactor                                          as FinCndnBaseFactorRndngDecimals,

      ConditionItem.sround                                                      as FinCndnAmountRoundingCategory,
      ConditionItem.broundunit                                                  as FinCndnAmountRoundingUnit,
      @Semantics.amount.currencyCode: 'FinancialConditionItemCurrency'
      ConditionItem.bbasisunit                                                  as RndngBaseUntAmtInCndnItmCrcy,
      @Semantics.amount.currencyCode: 'FinancialConditionItemCurrency'
      cast(ConditionItem.bbasis as ftr_cndn_intrst_base_amount)                 as FinConditionIntrstBaseAmount,
      ConditionItem.sbasis                                                      as FinCndnCalcBaseReference,
      ConditionItem.kbkond                                                      as FinancialConditionItemAmount,
      ConditionItem.swhrkond                                                    as FinancialConditionItemCurrency,

      ConditionItem.jbmonat                                                     as FinCndnAmountTimeUnit,

      cast( case when ConditionItem.kurs1 >= 0
      then ConditionItem.kurs1
      else 0
      end    as ftr_sc_exchange_rate_direct preserving type )                   as ScrtyClCndnDrctExchRate,

      cast( case when ConditionItem.kurs1 < 0
      then abs( ConditionItem.kurs1 )
      else 0
      end  as ftr_sc_exchange_rate_indirect preserving type )                   as ScrtyClCndnIndrctExchRate,

      ConditionItem.skalid                                                      as FinConditionFactoryCalendar1,
      ConditionItem.skalid2                                                     as FinConditionFactoryCalendar2,
      ConditionItem.skalid3                                                     as FinConditionFactoryCalendar3,
      ConditionItem.skalid4                                                     as FinConditionFactoryCalendar4,
      ConditionItem.skalid5                                                     as FinConditionFactoryCalendar5,

      //Average Interest Rate
      ConditionItem.savgweight                                                  as AverageIntrstRateWeightingCat,
      ConditionItem.sroundavginterest                                           as AverageIntrstRateRndngCategory,
      ConditionItem.rounddecavginterest                                         as AverageIntrstRateRndngDecimals,
      ConditionItem.pavgspread                                                  as AverageInterestRateSpreadValue,
      ConditionItem.javgcap                                                     as AvgIntrstRateHasUsedUpperLimit,
      ConditionItem.pavgcap                                                     as AverageInterestUpperLimitRate,
      ConditionItem.javgfloor                                                   as AvgIntrstRateHasUsedLowerLimit,
      ConditionItem.pavgfloor                                                   as AverageInterestLowerLimitRate,
      ConditionItem.sfactorreset                                                as AverageIntrstRateResetCalcEvt,

      //Update Rule
      case
        when ConditionType.sberfima <> 'ZA'
          then ConditionItem.update_rule_entry_type
        else null
      end                                                                       as FinCndnUpdateRuleEntryType,

      case
        when ConditionType.sberfima <> 'ZA'
        and (ConditionItem.update_rule_entry_type = '09' or ConditionItem.update_rule_entry_type = '10')
          then ConditionItem.dfaell
        else null
      end                                                                       as FinCndnUpdateRuleFirstDate,

      cast(case
        when ConditionType.sberfima <> 'ZA'
        and (ConditionItem.update_rule_entry_type = '09' or ConditionItem.update_rule_entry_type = '10')
        and ( ConditionItem.svmeth = '1' or ConditionItem.svmeth = '2' or ConditionItem.svmeth = '5' )
        and ConditionItem.attrhy is not initial
          then ConditionItem.attrhy
        when ConditionType.sberfima <> 'ZA'
        and (ConditionItem.update_rule_entry_type = '09' or ConditionItem.update_rule_entry_type = '10')
        and ( ConditionItem.svmeth = '1' or ConditionItem.svmeth = '2' or ConditionItem.svmeth = '5' )
        and ConditionItem.ammrhy is not initial
          then ConditionItem.ammrhy
        else null
      end as ftr_codn_calc_dte_frequency preserving type )                      as FinCndnUpdateRuleDateFrequency,

      cast(case
        when ConditionType.sberfima <> 'ZA'
        and (ConditionItem.update_rule_entry_type = '09' or ConditionItem.update_rule_entry_type = '10')
        and ( ConditionItem.svmeth = '1' or ConditionItem.svmeth = '2' or ConditionItem.svmeth = '5' )
        and ConditionItem.attrhy is not initial
          then '1'
        when ConditionType.sberfima <> 'ZA'
        and (ConditionItem.update_rule_entry_type = '09' or ConditionItem.update_rule_entry_type = '10')
        and ( ConditionItem.svmeth = '1' or ConditionItem.svmeth = '2' or ConditionItem.svmeth = '5' )
        and ConditionItem.ammrhy is not initial
          then '0'
        else null
      end as ftr_codn_calc_dte_unit preserving type )                           as FinCndnUpdateRuleDateFrqcyUnit,

      cast(case
        when ConditionType.sberfima <> 'ZA'
        and (ConditionItem.update_rule_entry_type = '09' or ConditionItem.update_rule_entry_type = '10')
          then ConditionItem.sfult
        else null
      end as due_dte_as_end_date_month_end preserving type )                    as UpdateRuleDateIsMonthEnd,

      cast(case
        when ConditionType.sberfima <> 'ZA'
        and (ConditionItem.update_rule_entry_type = '09' or ConditionItem.update_rule_entry_type = '10')
          then ConditionItem.sfwerk
        else null
      end as ftr_cndn_due_date_wrk_day_sft preserving type )                    as FinCndnUpdtRuleDateWrkgDayShft,

      //Calculation Date
      cast( case
        when ConditionType.sberfima = 'ZA' then '0'
        when ConditionItem.svmeth = '1' or ConditionItem.svmeth = '2' then '0'
        when ConditionItem.svmeth = '3' or ConditionItem.svmeth = '4' then '1'
        when ConditionItem.svmeth = '5' then '2'
        else null
      end as ftr_cndn_calc_date_update_rule preserving type )                   as FinCndnCalcDteUpdateRule,

      case
        when ConditionType.sberfima <> 'ZA'
          then ConditionItem.dvalut
        else null
      end                                                                       as CalculationDate,

      cast(case
        when ConditionType.sberfima <> 'ZA'
        and ( ConditionItem.svmeth = '1' or ConditionItem.svmeth = '2' or ConditionItem.svmeth = '5' )
        and ConditionItem.attrhy is not initial
          then ConditionItem.attrhy
        when ConditionType.sberfima <> 'ZA'
        and ( ConditionItem.svmeth = '1' or ConditionItem.svmeth = '2' or ConditionItem.svmeth = '5' )
        and ConditionItem.ammrhy is not initial
          then ConditionItem.ammrhy
        else null
      end as ftr_codn_calc_dte_frequency preserving type )                      as FinCndnCalcDteFrequency,

      cast(case
        when ConditionType.sberfima <> 'ZA'
        and ( ConditionItem.svmeth = '1' or ConditionItem.svmeth = '2' or ConditionItem.svmeth = '5' )
        and ConditionItem.attrhy is not initial
          then '1'
        when ConditionType.sberfima <> 'ZA'
        and ( ConditionItem.svmeth = '1' or ConditionItem.svmeth = '2' or ConditionItem.svmeth = '5' )
        and ConditionItem.ammrhy is not initial
          then '0'
        else null
      end as ftr_codn_calc_dte_unit preserving type )                           as FinCndnCalcDteFrqcyUnit,

      cast(case
        when ConditionType.sberfima = 'ZA' then ''
        when ConditionItem.sincl = '0' then ''
        else 'X'
      end as ftr_dateisinclusive preserving type )                              as CalcDateIsAsEndDateInclusive,

      cast(case
        when ConditionType.sberfima <> 'ZA'
          then ConditionItem.svult
        else null
      end as calc_dte_as_end_dte_month_end preserving type )                    as CalcDateIsAsEndDateMonthEnd,

      cast(case
        when ConditionType.sberfima <> 'ZA'
          then ConditionItem.svwerk
        else null
      end as ftr_cndn_calc_date_wrk_day_sft preserving type )                   as FinCndnCalcDteWrkgDayShft,

      cast(case
        when ConditionType.sberfima <> 'ZA'
         then ConditionItem.avgstagevz
        else null
      end as ftr_cndn_calc_dte_shft_drctn preserving type )                     as FinCndnCalcDteShftDrctn,

      cast( case
        when ConditionType.sberfima <> 'ZA'
          then ConditionItem.avgstage
        else null
      end as ftr_sc_cndn_calc_dte_shft_days preserving type )                   as ScrtyClCndnCalcDteShftNrOfDays,

      cast ( case
        when ConditionType.sberfima = 'ZA' then ''
        when ConditionItem.svmeth = '2' then 'X'
        when ConditionItem.svmeth <> '2' then ''
        else null
      end as calc_dte_is_reg_with_varbl_dte preserving type )                   as CalcDteIsRegularWithVarblDte,

      cast ( case
        when ConditionType.sberfima = 'ZA' then '0'
        when ConditionItem.svmeth = '4' then '0'
        when ConditionItem.svmeth = '3' then '1'
        else null
      end as reference_date_for_calc_dte preserving type )                      as InterestCalculationDateRef,

      //Due Date
      cast( case
        when ConditionType.sberfima = 'ZA' then '0'
        when ConditionItem.sfmeth = '1' or  ConditionItem.sfmeth = '2' then '0'
        when ConditionItem.sfmeth = '3' or  ConditionItem.sfmeth = '4' then '1'
        when ConditionItem.sfmeth = '5' then '2'
        else null
      end as ftr_cndn_due_date_update_rule preserving type )                    as FinCndnDueDteUpdateRule,

      case
        when ConditionType.sberfima <> 'ZA'
          then ConditionItem.dfaell
        else null
      end                                                                       as DueDate,

      cast( case
        when ConditionType.sberfima <> 'ZA'
        and ( ConditionItem.sfmeth = '1' or ConditionItem.sfmeth = '2' or ConditionItem.sfmeth = '5' )
        and ConditionItem.attrhy is not initial
          then ConditionItem.attrhy
        when ConditionType.sberfima <> 'ZA'
        and ( ConditionItem.sfmeth = '1' or ConditionItem.sfmeth = '2' or ConditionItem.sfmeth = '5' )
        and ConditionItem.ammrhy is not initial
          then ConditionItem.ammrhy
        else null
      end as ftr_cndn_due_date_frequency preserving type )                      as FinCndnDueDteFrequency,

      cast( case
        when ConditionType.sberfima <> 'ZA'
        and ( ConditionItem.sfmeth = '1' or ConditionItem.sfmeth = '2' or ConditionItem.sfmeth = '5' )
        and ConditionItem.attrhy is not initial
          then '1'
        when ConditionType.sberfima <> 'ZA'
        and ( ConditionItem.sfmeth = '1' or ConditionItem.sfmeth = '2' or ConditionItem.sfmeth = '5' )
        and ConditionItem.ammrhy is not initial
          then '0'
        else null
      end as ftr_cndn_due_date_frqcy_unit preserving type )                     as FinCndnDueDteFrqcyUnit,

      cast (case
        when ConditionType.sberfima = 'ZA' then ''      
        when ConditionItem.sfincl = '0' then ''
        else 'X'
        end as ftr_dateisinclusive preserving type )                            as DueDateIsAsEndDateInclusive,

      cast( case
        when ConditionType.sberfima <> 'ZA'
          then ConditionItem.sfult
        else null
      end as due_dte_as_end_date_month_end preserving type )                    as DueDateIsAsEndDateMonthEnd,

      cast( case
        when ConditionType.sberfima <> 'ZA'
          then ConditionItem.sfwerk
        else null
      end as ftr_cndn_due_date_wrk_day_sft preserving type )                    as FinCndnDueDteWrkgDayShft,

      cast( case
        when ConditionType.sberfima <> 'ZA'
          then ConditionItem.afgstagevz
        else null
      end as ftr_cndn_due_date_shift_drctn preserving type )                    as FinCndnDueDteShftDrctn,

      cast( case
        when ConditionType.sberfima <> 'ZA'
          then ConditionItem.afgstage
        else null
      end as ftr_sc_cndn_due_dte_shft_days preserving type )                    as ScrtyClCndnDueDteShftNrOfDays,

      cast ( case
        when ConditionItem.sfmeth = '2' and ConditionType.sberfima <> 'ZA' then 'X'
        when ConditionItem.sfmeth <> '2' and ConditionType.sberfima <> 'ZA' then ''
        else null
      end as due_dte_is_reg_with_varbl_dte preserving type )                    as DueDteIsRegularWithVarblDte,

      cast ( case
        when ConditionType.sberfima <> 'ZA' then '0'
        when ConditionItem.sfmeth = '5' then '0'
        when ConditionItem.sfmeth = '4' then '0'
        when ConditionItem.sfmeth = '3' then '1'
        else null
      end as reference_date_for_due_dte preserving type )                       as InterestDueDateReference,

      //Payment Date
      ConditionItem.sdwerk                                                      as FinCndnPaytDateWrkgDayShft,

      //Other Calculation Date
      cast( ConditionItem.sfranz as tb_sfranze_new )                            as FinCndnDueDteShiftToTermEnd,

      cast( case
        when ConditionItem.sfant = '0' then ''
        else 'X'
      end as  ftr_sc_vvsfant preserving type )                                  as FinCndnDuDteIsFinMathCalcReltd,

      ConditionItem.jsofverr                                                    as FinCndnRpaytSettlmt,

      cast ( case ConditionItem.szeitant
        when '0' then '0'
        when '1' then '2'
        when '2' then '1'
        when '3' then '0'
        when '4' then '0'
        when '5' then '2'
        when '6' then '1'
        when '7' then '2'
        when '8' then '1'
        else '0'
      end as tfmsfstper preserving type )                                       as FinCndnFirstPeriodCalcMethod,

      cast ( case ConditionItem.szeitant
        when '0' then '0'
        when '1' then '2'
        when '2' then '1'
        when '3' then '2'
        when '4' then '1'
        when '5' then '0'
        when '6' then '0'
        when '7' then '1'
        when '8' then '2'
        else '0'
      end as tfmslstper preserving type )                                       as FinCndnLastPeriodCalcMethod,

      //Interest Rate Adjustment Date
      cast ( case
        when ConditionType.sberfima = 'ZA' and ConditionItem.svmeth = '1' then '1'
        when ConditionType.sberfima = 'ZA' and ConditionItem.svmeth = '5' then '2'
        when ConditionType.sberfima = 'ZA' and ConditionItem.svmeth = '6' then '0'
        when ConditionType.sberfima = 'ZA' and ConditionItem.svmeth = '7' then '3'
        else null
      end as tfmsrhyzap preserving type )                                       as InterestRateAdjustmentDateRule,

      cast ( case
        when ConditionType.sberfima = 'ZA'
          then ConditionItem.dvalut
        else null
      end as tbvaluza preserving type )                                         as InterestRateAdjustmentDate,

      cast ( case
        when ConditionType.sberfima = 'ZA'
          then ConditionItem.svult
        else null
      end as adjmt_dte_as_end_dte_month_end preserving type )                   as IntrstRateAdjmtDateIsMonthEnd,

      cast ( case
        when ConditionType.sberfima = 'ZA'
        and ( ConditionItem.svmeth = '1' or ConditionItem.svmeth = '2' or ConditionItem.svmeth = '5' )
        and ConditionItem.attrhy is not initial
          then ConditionItem.attrhy
        when ConditionType.sberfima = 'ZA'
        and ( ConditionItem.svmeth = '1' or ConditionItem.svmeth = '2' or ConditionItem.svmeth = '5' )
        and ConditionItem.ammrhy is not initial
          then ConditionItem.ammrhy
        else null
      end as ftr_cndn_adjmt_date_frequency preserving type )                    as InterestRateAdjustmentFrqcy,

      cast ( case
        when ConditionType.sberfima = 'ZA'
        and ( ConditionItem.svmeth = '1' or ConditionItem.svmeth = '2' or ConditionItem.svmeth = '5' )
        and ConditionItem.attrhy is not initial
          then '1'
        when ConditionType.sberfima = 'ZA'
        and ( ConditionItem.svmeth = '1' or ConditionItem.svmeth = '2' or ConditionItem.svmeth = '5' )
        and ConditionItem.ammrhy is not initial
          then '0'
        else null
      end as ftr_cndn_adjmt_date_frqcy_unit preserving type )                   as InterestRateAdjmtFrqcyUnit,

      cast ( case
        when ConditionType.sberfima = 'ZA'
          then ConditionItem.svwerk
        else null
      end as ftr_cndn_adjmt_dte_wrk_day_sft preserving type )                   as IntrstRateAdjmtDateWrkgDayShft,

      cast ( case
        when ConditionType.sberfima = 'ZA'
          then ConditionItem.avgstagevz
        else null
      end as ftr_cndn_adjmt_dte_shft_drctn preserving type )                    as FinCndnAdjmtDteShftDrctn,

      cast( case
        when ConditionType.sberfima = 'ZA'
          then ConditionItem.avgstage
        else null
      end as ftr_sc_cndn_adj_dte_shft_days preserving type )                    as ScrtyClIntrstRateAdjmtShftDays,

      //Interest Rate Fixing Date
      cast ( case
        when ConditionType.sberfima = 'ZA'
        and ConditionItem.sfmeth = '1'
          then '0'
        when ConditionType.sberfima = 'ZA'
        and ConditionItem.sfmeth = '5'
          then '2'
        when ConditionType.sberfima = 'ZA'
        and ( ConditionItem.sfmeth = '3'
              or ConditionItem.sfmeth = '6'
              or ConditionItem.sfmeth = '8'
              or ConditionItem.sfmeth = '9' )
          then '1'
        else null
      end as tfmsrhy preserving type )                                          as InterestRateFixingDateRule,

      cast ( case
        when ConditionType.sberfima = 'ZA'
          then ConditionItem.dfaell
        else null
      end as tbfaelza preserving type )                                         as InterestRateFixingDate,

      cast ( case
        when ConditionType.sberfima = 'ZA'
          then ConditionItem.sfult
        else null
      end as fixing_dte_as_end_dte_mnth_end preserving type )                   as IntrstRateFixingDateIsMonthEnd,

      cast( case
        when ConditionType.sberfima = 'ZA'
        and ( ConditionItem.sfmeth = '1' or ConditionItem.sfmeth = '2' or ConditionItem.sfmeth = '5' )
        and ConditionItem.attrhy is not initial
          then ConditionItem.attrhy
        when ConditionType.sberfima = 'ZA'
        and ( ConditionItem.sfmeth = '1' or ConditionItem.sfmeth = '2' or ConditionItem.sfmeth = '5' )
        and ConditionItem.ammrhy is not initial
          then ConditionItem.ammrhy
        else null
      end as ftr_cndn_fixing_date_frequency preserving type )                   as InterestRateFixingFrqcy,

      cast( case
        when ConditionType.sberfima = 'ZA'
        and ( ConditionItem.sfmeth = '1' or ConditionItem.sfmeth = '2' or ConditionItem.sfmeth = '5' )
        and ConditionItem.attrhy is not initial
          then '1'
        when ConditionType.sberfima = 'ZA'
        and ( ConditionItem.sfmeth = '1' or ConditionItem.sfmeth = '2' or ConditionItem.sfmeth = '5' )
        and ConditionItem.ammrhy is not initial
          then '0'
        else null
      end as ftr_cndn_fixing_dte_frqcy_unit preserving type )                   as InterestRateFixingFrqcyUnit,

      cast ( case
        when ConditionType.sberfima = 'ZA'
            and (ConditionItem.sfwerk = '3' or ConditionItem.sfwerk = '4')
        then '-'
        when ConditionType.sberfima = 'ZA'
            and (ConditionItem.sfwerk = '1' or ConditionItem.sfwerk = '2')
        then '+'
        else null
      end as ftr_cndn_fixing_dte_shft_drctn preserving type )                   as FinCndnFixingDteShftDrctn,

      cast( case
        when ConditionType.sberfima = 'ZA'
          then ConditionItem.afgstage
        else null
      end as ftr_sc_cndn_fix_dte_shft_days preserving type )                    as ScrtyClIntrstRateFixShftDays,

      ConditionItem.adgstage                                                    as FinCndnRateFixingLockoutPeriod,

      cast ( case
        when ConditionType.sberfima = 'ZA'
        and (ConditionItem.sfwerk = '2' or ConditionItem.sfwerk = '4')
          then 'X'
        else null
      end as tfmjmodif preserving type )                                        as IntrstRateFixDteShftIsModifd,

      cast ( case
        when ConditionType.sberfima = 'ZA'
            and ( ConditionItem.sfmeth = '1'
                or ConditionItem.sfmeth = '5'
                or ConditionItem.sfmeth = '8' ) then '0'
        when ConditionType.sberfima = 'ZA' and ConditionItem.sfmeth = '3' then '1'
        when ConditionType.sberfima = 'ZA' and ConditionItem.sfmeth = '6' then '3'
        when ConditionType.sberfima = 'ZA' and ConditionItem.sfmeth = '9' then '2'
        else null
      end as tfmzreldat preserving type )                                       as InterestRateFixingDateRef,

      @Consumption.hidden: true
      _SecurityClassBasic
}
where
  (
    ConditionType.rantyp = '2'
  )
```
