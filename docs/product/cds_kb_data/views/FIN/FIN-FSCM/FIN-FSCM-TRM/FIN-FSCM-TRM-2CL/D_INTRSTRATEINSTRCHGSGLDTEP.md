---
name: D_INTRSTRATEINSTRCHGSGLDTEP
description: "D Intrstrateinstrchgsgldtep"
semantic_vi: "View này hiển thị dữ liệu về phí lãi suất nội địa cho một ngày cụ thể, có thể được sử dụng để phân tích phí lãi suất cho các giao dịch nội địa."
keywords:
  - "intrastate interest charge"
  - "phí lãi suất nội địa"
  - "financial transaction"
  - "giao dịch tài chính"
  - "interest rate"
  - "lãi suất"
  - "sap cds view"
  - "view dữ liệu"
  - "financial data"
  - "dữ liệu tài chính"
  - "intrastate transaction"
  - "giao dịch nội địa"
semantic_en: "This view exposes intrastate interest charge data for a specific date, which can be used to analyze interest charges for intrastate transactions."
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
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
# D_INTRSTRATEINSTRCHGSGLDTEP

**D Intrstrateinstrchgsgldtep**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialTransactionDirection` |  | |  | `tb_rkondgr` |  |  |
| `FinConditionItem` |  | |  | `tb_kond` |  |  |
| `ConditionItemValidityStartDate` |  | |  | `dguel_kp` |  |  |
| `CalculationDate` |  | |  | `dvalut` |  |  |
| `CalcDateIsAsEndDateMonthEnd` |  | |  | `calc_dte_as_end_dte_month_end` |  |  |
| `FinancialConditionDueDate` |  | |  | `dfaell` |  |  |
| `DueDateIsAsEndDateMonthEnd` |  | |  | `due_dte_as_end_date_month_end` |  |  |
| `InterestRateAdjustmentDate` |  | |  | `tbvaluza` |  |  |
| `IntrstRateAdjmtDateIsMonthEnd` |  | |  | `tbultiza` |  |  |
| `FinancialConditionItemAmount` |  | |  | `ftr_condition_item_amount` |  |  |
| `FinancialConditionItemCurrency` |  | |  | `swhrkond` |  |  |
| `ConditionPercentageRate` |  | |  | `pkond` |  |  |
| `_Condition` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Single Date Abstract Parameter'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]

define abstract entity D_IntrstRateInstrChgSglDteP
{
//   key DummyKey                       : abap.char(1);
      //CompanyCode                    : bukrs;
      //FinancialTransaction           : tb_rfha;
      FinancialTransactionDirection  : tb_rkondgr;
      FinConditionItem               : tb_kond;
      ConditionItemValidityStartDate : dguel_kp;
      CalculationDate                : dvalut;
      CalcDateIsAsEndDateMonthEnd    : calc_dte_as_end_dte_month_end;
      FinancialConditionDueDate      : dfaell;
      DueDateIsAsEndDateMonthEnd     : due_dte_as_end_date_month_end;
      InterestRateAdjustmentDate     : tbvaluza;
      IntrstRateAdjmtDateIsMonthEnd  : tbultiza;
      @Semantics.amount.currencyCode : 'FinancialConditionItemCurrency'
      FinancialConditionItemAmount   : ftr_condition_item_amount;
      @Semantics.currencyCode        : true
      FinancialConditionItemCurrency : swhrkond;
      ConditionPercentageRate        : pkond;

      _Condition                     : association to parent D_IntrstRateInstrChgCndnP;
      //   _Condition : association to parent D_IntrstRateInstrChgCndnP on $projection.CompanyCode = _Condition.CompanyCode
      //                                                               and $projection.FinancialTransaction = _Condition.FinancialTransaction
      //                                                               and $projection.FinancialTransactionDirection = _Condition.FinancialTransactionDirection
      //                                                               and $projection.FinConditionItem = _Condition.FinConditionItem
      //                                                               and $projection.ConditionItemValidityStartDate = _Condition.ConditionItemValidityStartDate;
}
```
