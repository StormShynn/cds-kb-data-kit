---
name: D_INTRSTRATEINSTRCHGMAINFLOWP
description: D Intrstrateinstrchgmainflowp
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
# D_INTRSTRATEINSTRCHGMAINFLOWP

**D Intrstrateinstrchgmainflowp**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `FinTransFlowCreationDate` | `tb_crdat` |
| `FinTransFlowCreationTime` | `ftr_flow_creation_time` |
| `FinTransFlowNumber` | `tb_rfhazb` |
| `FinancialInstrumentActivity` | `tb_rfhazu` |
| `FinTransFlowType` | `tb_sfhazba` |
| `FinTransFlowPaymentDate` | `ftr_flow_payment_date` |
| `FinTransFlowPaytAmt` | `ftr_payment_amount` |
| `FinTransFlowPaytAmtCrcy` | `tb_wzbetr` |
| `FinTransFlowLoclCrcyCnvrsnRate` | `ftr_flow_rate_in_locl_crcy` |
| `FinTransFlowInLoclCrcyPaytAmt` | `ftr_payt_amt_in_local_currency` |
| `LocalCurrency` | `waers` |
| `AmtInLoclCrcyIsCnvrtdByCurRate` | `ftr_local_amt_in_cur_rate_ind` |
| `AmtInLoclCrcyIsCnvrtdByFxdRate` | `ftr_local_amt_in_fxd_rate_ind` |
| `AmountInLocalCurrencyIsFixed` | `ftr_local_amt_fxd_ind` |
| `AssignmentReference` | `fis_zuonr` |
| `FinTransFlowCalculationDate` | `ftr_flow_calculation_date` |
| `FinTransFlowNomAmt` | `ftr_nominal_amount` |
| `FinTransFlowNomAmtCrcy` | `ftr_flow_norminal_amount_crcy` |
| `PositionCurrency` | `ftr_gen_position_crcy` |
| `AmountInPositionCurrency` | `ftr_amt_in_position_currency` |
| `PaymentWithAccruedIntrstAmount` | `ftr_payt_accrued_intrst_amount` |
| `FlowCalcDateIsExclusive` | `tb_nomsexcl` |
| `FlowCalcDateIsMonthEnd` | `tb_nomsvult` |
| `_IntrstRateInstr` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Main Flow Abstract View Parameter'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]

define abstract entity D_IntrstRateInstrChgMainFlowP
{
//   key DummyKey                       : abap.char(1);
      FinTransFlowCreationDate       : tb_crdat;
      FinTransFlowCreationTime       : ftr_flow_creation_time;
      FinTransFlowNumber             : tb_rfhazb;
      FinancialInstrumentActivity    : tb_rfhazu;
      FinTransFlowType               : tb_sfhazba;
      //       FinTransFlowPaytAmtDirection   : tb_ssign;
      FinTransFlowPaymentDate        : ftr_flow_payment_date;
      @Semantics.amount.currencyCode : 'FinTransFlowPaytAmtCrcy'
      FinTransFlowPaytAmt            : ftr_payment_amount;
      @Semantics.currencyCode        : true
      FinTransFlowPaytAmtCrcy        : tb_wzbetr;
      FinTransFlowLoclCrcyCnvrsnRate : ftr_flow_rate_in_locl_crcy;
      @Semantics.amount.currencyCode : 'LocalCurrency'
      FinTransFlowInLoclCrcyPaytAmt  : ftr_payt_amt_in_local_currency;
      @Semantics.currencyCode        : true
      LocalCurrency                  : waers;
      AmtInLoclCrcyIsCnvrtdByCurRate : ftr_local_amt_in_cur_rate_ind;
      AmtInLoclCrcyIsCnvrtdByFxdRate : ftr_local_amt_in_fxd_rate_ind;
      AmountInLocalCurrencyIsFixed   : ftr_local_amt_fxd_ind;
      AssignmentReference            : fis_zuonr;
      //       FinTransFlowPostingStatus      : tb_sbewebe;
      //       FinancialTransactionDirection  : tb_rkondgr;
      FinTransFlowCalculationDate    : ftr_flow_calculation_date;
      @Semantics.amount.currencyCode : 'FinTransFlowNomAmtCrcy'
      FinTransFlowNomAmt             : ftr_nominal_amount;
      @Semantics.currencyCode        : true
      FinTransFlowNomAmtCrcy         : ftr_flow_norminal_amount_crcy;
      @Semantics.currencyCode        : true
      PositionCurrency               : ftr_gen_position_crcy;
      @Semantics.amount.currencyCode : 'PositionCurrency'
      AmountInPositionCurrency       : ftr_amt_in_position_currency;
      @Semantics.amount.currencyCode : 'FinTransFlowPaytAmtCrcy'
      PaymentWithAccruedIntrstAmount : ftr_payt_accrued_intrst_amount;
      FlowCalcDateIsExclusive        : tb_nomsexcl;
      FlowCalcDateIsMonthEnd         : tb_nomsvult;

      _IntrstRateInstr              : association to parent D_IntrstRateInstrChangeP;
}
```
