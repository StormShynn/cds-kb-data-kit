---
name: D_INTRSTRATEINSTRCHGSCALEP
description: D Intrstrateinstrchgscalep
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
# D_INTRSTRATEINSTRCHGSCALEP

**D Intrstrateinstrchgscalep**

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
| `FinInstrConditionLogicGroup` |  | |  | `ftr_instr_cndn_logic_group` |  |  |
| `FinCndnScaleLowerLimitAmount` |  | |  | `ftr_condition_lower_amount` |  |  |
| `FinCndnScaleUpperLimitAmount` |  | |  | `ftr_condition_upper_amount` |  |  |
| `FinCndnLimitAmountCurrency` |  | |  | `ftr_cndn_limit_amount_currency` |  |  |
| `ConditionPercentageRate` |  | |  | `pkond` |  |  |
| `ReferenceInterestRate` |  | |  | `szsref` |  |  |
| `FinConditionFormulaReference` |  | |  | `tb_xformbe` |  |  |
| `_Condition` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Scale Abstract View Parameter'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]

define abstract entity D_IntrstRateInstrChgScaleP 
 {
//   key DummyKey                       : abap.char(1);
      //CompanyCode                    : bukrs;
      //FinancialTransaction           : tb_rfha; 
      FinancialTransactionDirection  : tb_rkondgr;
      FinConditionItem               : tb_kond;
      ConditionItemValidityStartDate : dguel_kp;
      FinInstrConditionLogicGroup    : ftr_instr_cndn_logic_group;
      @Semantics.amount.currencyCode: 'FinCndnLimitAmountCurrency'
      FinCndnScaleLowerLimitAmount   : ftr_condition_lower_amount;
      @Semantics.amount.currencyCode: 'FinCndnLimitAmountCurrency'
      FinCndnScaleUpperLimitAmount   : ftr_condition_upper_amount;
      @Semantics.currencyCode: true
      FinCndnLimitAmountCurrency     : ftr_cndn_limit_amount_currency;
      ConditionPercentageRate        : pkond;
      ReferenceInterestRate          : szsref;
      FinConditionFormulaReference   : tb_xformbe;  


   _Condition              : association to parent D_IntrstRateInstrChgCndnP;
   
   _FmlaVarbl              : association [0..*] to D_IntrstRateInstrChgFmlaVarblP on 1 = 1 ;
   
//  _FmlaVarbl              : association [0..*] to D_IntrstRateInstrChgFmlaVarblP on $projection.FinancialTransactionDirection  = _FmlaVarbl.FinancialTransactionDirection
//                                                                                and $projection.FinConditionItem               = _FmlaVarbl.FinConditionItem
//                                                                                and $projection.FinInstrConditionLogicGroup    = _FmlaVarbl.FinInstrConditionLogicGroup
//                                                                                and $projection.ConditionItemValidityStartDate = _FmlaVarbl.ConditionItemValidityStartDate; 
                                                                          
//  _Condition              : association to parent D_IntrstRateInstrChgCndnP    on $projection.CompanyCode                    = _Condition.CompanyCode
//                                                                              and $projection.FinancialTransaction           = _Condition.FinancialTransaction
//                                                                              and $projection.FinancialTransactionDirection  = _Condition.FinancialTransactionDirection
//                                                                              and $projection.FinConditionItem               = _Condition.FinConditionItem
//                                                                              and $projection.ConditionItemValidityStartDate = _Condition.ConditionItemValidityStartDate;  
                                                            
 }
```
