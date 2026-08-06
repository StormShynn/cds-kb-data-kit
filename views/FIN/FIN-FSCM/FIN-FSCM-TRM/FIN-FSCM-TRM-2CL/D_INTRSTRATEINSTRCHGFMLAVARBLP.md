---
name: D_INTRSTRATEINSTRCHGFMLAVARBLP
description: D Intrstrateinstrchgfmlavarblp
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
# D_INTRSTRATEINSTRCHGFMLAVARBLP

**D Intrstrateinstrchgfmlavarblp**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `FinancialTransactionDirection` | `tb_rkondgr` |
| `FinConditionItem` | `tb_kond` |
| `ConditionItemValidityStartDate` | `dguel_kp` |
| `FinCndnFormulaVariable` | `tb_varname` |
| `FinInstrConditionLogicGroup` | `ftr_instr_cndn_logic_group` |
| `ConditionPercentageRate` | `pkond` |
| `ReferenceInterestRate` | `szsref` |
| `_Condition` | *Association* |

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
