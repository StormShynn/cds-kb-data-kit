---
name: D_INTRSTRATEINSTRCHGADDLFLOWP
description: "D Intrstrateinstrchgaddlflowp"
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
# D_INTRSTRATEINSTRCHGADDLFLOWP

**D Intrstrateinstrchgaddlflowp**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinTransFlowCreationDate` |  | |  | `tb_crdat` |  |  |
| `FinTransFlowCreationTime` |  | |  | `ftr_flow_creation_time` |  |  |
| `FinTransFlowNumber` |  | |  | `tb_rfhazb` |  |  |
| `FinancialInstrumentActivity` |  | |  | `tb_rfhazu` |  |  |
| `FinancialTransactionDirection` |  | |  | `tb_rkondgr` |  |  |
| `FinTransFlowType` |  | |  | `tb_sfhazba` |  |  |
| `FinTransFlowPaytAmtDirection` |  | |  | `ftr_flow_payment_amt_direction` |  |  |
| `FinTransFlowPaymentDate` |  | |  | `ftr_flow_payment_date` |  |  |
| `FinTransFlowPaytAmt` |  | |  | `ftr_payment_amount` |  |  |
| `FinTransFlowPaytAmtCrcy` |  | |  | `tb_wzbetr` |  |  |
| `FinTransFlowLoclCrcyCnvrsnRate` |  | |  | `ftr_flow_rate_in_locl_crcy` |  |  |
| `FinTransFlowInLoclCrcyPaytAmt` |  | |  | `ftr_payt_amt_in_local_currency` |  |  |
| `LocalCurrency` |  | |  | `waers` |  |  |
| `AmtInLoclCrcyIsCnvrtdByCurRate` |  | |  | `ftr_local_amt_in_cur_rate_ind` |  |  |
| `AmtInLoclCrcyIsCnvrtdByFxdRate` |  | |  | `ftr_local_amt_in_fxd_rate_ind` |  |  |
| `AmountInLocalCurrencyIsFixed` |  | |  | `ftr_local_amt_fxd_ind` |  |  |
| `CalculationPeriodStartDate` |  | |  | `dbervon` |  |  |
| `CalcPeriodStartDateIsInclusive` |  | |  | `tb_sinclv` |  |  |
| `CalcPeriodStartDateIsMonthEnd` |  | |  | `vvsultvon` |  |  |
| `CalculationPeriodEndDate` |  | |  | `dberbis` |  |  |
| `CalcPeriodEndDateIsInclusive` |  | |  | `tb_sinclb` |  |  |
| `CalcPeriodEndDateIsMonthEnd` |  | |  | `vvsultbis` |  |  |
| `InterestCalculationMethod` |  | |  | `szbmeth` |  |  |
| `IntrstCalcMethFactoryCalendar` |  | |  | `tfmskalidwt` |  |  |
| `NumberOfCalculationDays` |  | |  | `vvatage` |  |  |
| `NrOfBaseDaysPerCalcPeriod` |  | |  | `abastage` |  |  |
| `FinTransFlowCalcBaseAmount` |  | |  | `ftr_calc_base_amount` |  |  |
| `FinTransFlowCalcBaseAmountCrcy` |  | |  | `tb_wbasis` |  |  |
| `ConditionPercentageRate` |  | |  | `pkond` |  |  |
| `AssignmentReference` |  | |  | `fis_zuonr` |  |  |
| `FinTransFlowPostingStatus` |  | |  | `tb_sbewebe` |  |  |
| `FinTransFlowCalculationDate` |  | |  | `ftr_flow_calculation_date` |  |  |
| `_IntrstRateInstr` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Additional Flow Abstract View Parameter'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]

define abstract entity D_IntrstRateInstrChgAddlFlowP
{
//   key DummyKey                       : abap.char(1);
       FinTransFlowCreationDate        : tb_crdat;
       FinTransFlowCreationTime        : ftr_flow_creation_time;
       FinTransFlowNumber              : tb_rfhazb;
       FinancialInstrumentActivity     : tb_rfhazu;
       FinancialTransactionDirection   : tb_rkondgr;
       FinTransFlowType                : tb_sfhazba;
       FinTransFlowPaytAmtDirection    : ftr_flow_payment_amt_direction;
       FinTransFlowPaymentDate         : ftr_flow_payment_date;
       @Semantics.amount.currencyCode: 'FinTransFlowPaytAmtCrcy'
       FinTransFlowPaytAmt             : ftr_payment_amount;
       @Semantics.currencyCode: true
       FinTransFlowPaytAmtCrcy         : tb_wzbetr;
       FinTransFlowLoclCrcyCnvrsnRate  : ftr_flow_rate_in_locl_crcy;
       @Semantics.amount.currencyCode: 'LocalCurrency'
       FinTransFlowInLoclCrcyPaytAmt   : ftr_payt_amt_in_local_currency;
       @Semantics.currencyCode: true
       LocalCurrency                   : waers;
       AmtInLoclCrcyIsCnvrtdByCurRate  : ftr_local_amt_in_cur_rate_ind;
       AmtInLoclCrcyIsCnvrtdByFxdRate  : ftr_local_amt_in_fxd_rate_ind;
       AmountInLocalCurrencyIsFixed    : ftr_local_amt_fxd_ind;
       CalculationPeriodStartDate      : dbervon;
       CalcPeriodStartDateIsInclusive  : tb_sinclv;
       CalcPeriodStartDateIsMonthEnd   : vvsultvon;
       CalculationPeriodEndDate        : dberbis;
       CalcPeriodEndDateIsInclusive    : tb_sinclb;
       CalcPeriodEndDateIsMonthEnd     : vvsultbis;
       InterestCalculationMethod       : szbmeth;
       IntrstCalcMethFactoryCalendar   : tfmskalidwt;
       NumberOfCalculationDays         : vvatage;
       NrOfBaseDaysPerCalcPeriod       : abastage;
       @Semantics.amount.currencyCode: 'FinTransFlowCalcBaseAmountCrcy'
       FinTransFlowCalcBaseAmount      : ftr_calc_base_amount;
       @Semantics.currencyCode: true
       FinTransFlowCalcBaseAmountCrcy  : tb_wbasis;
       ConditionPercentageRate         : pkond;
       AssignmentReference             : fis_zuonr;
       FinTransFlowPostingStatus       : tb_sbewebe;
       FinTransFlowCalculationDate     : ftr_flow_calculation_date;
       
       _IntrstRateInstr              : association to parent D_IntrstRateInstrChangeP;
}
```
