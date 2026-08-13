---
name: D_INTRSTRATEINSTRCHGFMLAVARBLP
description: "D Intrstrateinstrchgfmlavarblp"
semantic_vi: "View này hiển thị dữ liệu giao dịch tài chính liên quan đến công thức và biến thay đổi tài sản, có ích cho việc phân tích và quản lý giao dịch tài chính trong thành phần FIN-FSCM-TRM-2CL."
keywords:
  - "financial transaction"
  - "instrument change"
  - "formula variable"
  - "financial management"
  - "fin-fscm-trm-2cl"
  - "component"
  - "financial data"
  - "tài chính"
  - "giao dịch"
  - "công thức biến"
  - "quản lý tài chính"
semantic_en: "This view exposes financial transaction data related to instrument change formulas and variables, useful for analyzing and managing financial transactions in the FIN-FSCM-TRM-2CL component."
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
# D_INTRSTRATEINSTRCHGFMLAVARBLP

**D Intrstrateinstrchgfmlavarblp**

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
| `FinCndnFormulaVariable` |  | |  | `tb_varname` |  |  |
| `FinInstrConditionLogicGroup` |  | |  | `ftr_instr_cndn_logic_group` |  |  |
| `ConditionPercentageRate` |  | |  | `pkond` |  |  |
| `ReferenceInterestRate` |  | |  | `szsref` |  |  |
| `_Condition` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Formula Variable Abstract Parameter'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]

define abstract entity D_IntrstRateInstrChgFmlaVarblP 
{
//   key DummyKey                       : abap.char(1);
      FinancialTransactionDirection  : tb_rkondgr;
      FinConditionItem               : tb_kond;
      ConditionItemValidityStartDate : dguel_kp;
      FinCndnFormulaVariable         : tb_varname;
      FinInstrConditionLogicGroup    : ftr_instr_cndn_logic_group;
      ConditionPercentageRate        : pkond;
      ReferenceInterestRate          : szsref;   
     
   _Condition : association to parent D_IntrstRateInstrChgCndnP;
//                                                                   $projection.CompanyCode = _Condition.CompanyCode
//                                                               and $projection.FinancialTransaction = _Condition.FinancialTransaction
//                                                               and $projection.FinancialTransactionDirection = _Condition.FinancialTransactionDirection
//                                                               and $projection.FinConditionItem = _Condition.FinConditionItem
//                                                               and $projection.ConditionItemValidityStartDate = _Condition.ConditionItemValidityStartDate;                                   
}
```
