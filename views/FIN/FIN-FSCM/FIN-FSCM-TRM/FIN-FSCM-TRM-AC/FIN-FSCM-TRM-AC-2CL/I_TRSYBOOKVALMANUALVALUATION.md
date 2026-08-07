---
name: I_TRSYBOOKVALMANUALVALUATION
description: Trsybookvalmanualvaluation
app_component: FIN-FSCM-TRM-AC-2CL
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
  - component:FIN-FSCM-TRM-AC-2CL
  - lob:Other
---
# I_TRSYBOOKVALMANUALVALUATION

**Trsybookvalmanualvaluation**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-AC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `KeyDate` | ✓ | |  | `key_date` |  |  |
| `TreasuryValuationArea` | ✓ | |  | `valuation_area` |  |  |
| `TreasuryValuationClass` | ✓ | |  | `cast( valuation_class as ftr_gen_valuation_class preserving type )` |  |  |
| `CompanyCode` | ✓ | |  | `company_code` |  |  |
| `SecurityAccount` | ✓ | |  | `cast(security_account as ftr_gen_security_account preserving type )` |  |  |
| `SecurityClass` | ✓ | |  | `cast(security_id as ftr_gen_security_class preserving type )` |  |  |
| `Portfolio` | ✓ | |  | `portfolio` |  |  |
| `SecurityAccountGroup` | ✓ | |  | `cast( account_group as ftr_gen_sec_account_group preserving type )` |  |  |
| `TreasuryPositionLotUUID` | ✓ | |  | `lot_id` |  |  |
| `FinancialTransaction` | ✓ | |  | `deal_number` |  |  |
| `Fund` | ✓ | |  | `fund` |  |  |
| `GrantID` | ✓ | |  | `grant_nbr` |  |  |
| `WBSElementInternalID` | ✓ | |  | `cast(wbs_element as ps_s4_pspnr preserving type)` |  |  |
| `CostCenter` | ✓ | |  | `cost_center` |  |  |
| `ProfitCenter` | ✓ | |  | `profit_center` |  |  |
| `FunctionalArea` | ✓ | |  | `functional_area` |  |  |
| `TrsyPosCustomDiffntnTerm1` | ✓ | |  | `cast(custom_diff_term_1 as tpm_cust_diff_term_1_value preserving type )` |  |  |
| `TrsyPosCustomDiffntnTerm2` | ✓ | |  | `cast(custom_diff_term_2 as tpm_cust_diff_term_2_value preserving type )` |  |  |
| `TrsyPosCustomDiffntnTerm3` | ✓ | |  | `cast( custom_diff_term_3 as tpm_cust_diff_term_3_value preserving type )` |  |  |
| `TrsyPosCustomDiffntnTerm4` | ✓ | |  | `cast(custom_diff_term_4 as tpm_cust_diff_term_4_value preserving type )` |  |  |
| `TrsyPosCustomDiffntnTerm5` | ✓ | |  | `cast(custom_diff_term_5 as tpm_cust_diff_term_5_value preserving type )` |  |  |
| `CostExcldBookValueAmtInPosCrcy` |  | |  | `obv_ec_pc` |  |  |
| `PositionCurrency` |  | |  | `position_curr` |  |  |
| `CostExcldBookValAmtInValnCrcy` |  | |  | `obv_ec_vc` |  |  |
| `ValuationCurrency` |  | |  | `valuation_curr` |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_FinancialTransaction` | | ✓ | | | | |
| `_SecurityClass` | | ✓ | | | | |
| `_SecurityAccount` | | ✓ | | | | |
| `_PositionCurrency` | | ✓ | | | | |
| `_ValuationCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_FinancialTransaction` | `I_FinancialTransaction` | [0..1] |
| `_SecurityClass` | `I_SecurityClassBasic` | [0..1] |
| `_SecurityAccount` | `I_SecurityAccount` | [0..1] |
| `_PositionCurrency` | `I_Currency` | [0..1] |
| `_ValuationCurrency` | `I_Currency` | [0..1] |

## Source Code

```abap
// this CDS view has been cleaned up exposing key fields meaningfull from a business perspective in public cloud,
// this means we do not expose purely technical key fields as the semantic_key and loan_contract
// if at a later point in time DELTA data extraction is required, an addition DEX view should be created where all the technical key fileds of the underlying table shall be exposed,
// an annotation @Analytics.dataExtraction.alternativeKey is used and
// semantic_key and loan contract should be annotated in a way that customers is notified that they are not business relevant
@VDM.viewType: #BASIC
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.sapObjectNodeType.name: 'TrsyBookValuesManualValuation'
@Analytics.dataExtraction.enabled: true
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE , #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Trsy Book Values for Manual Valuation'
define view entity I_TrsyBookValManualValuation
  as select from tlvt_manual_val
  association [1..1] to I_CompanyCode          as _CompanyCode          on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_FinancialTransaction as _FinancialTransaction on  $projection.FinancialTransaction = _FinancialTransaction.FinancialTransaction
                                                                        and $projection.CompanyCode          = _FinancialTransaction.CompanyCode
  association [0..1] to I_SecurityClassBasic   as _SecurityClass        on  $projection.SecurityClass = _SecurityClass.SecurityClass
  association [0..1] to I_SecurityAccount      as _SecurityAccount      on  $projection.SecurityAccount = _SecurityAccount.SecurityAccount
                                                                        and $projection.CompanyCode     = _SecurityAccount.CompanyCode
  association [0..1] to I_Currency             as _PositionCurrency     on  $projection.PositionCurrency = _PositionCurrency.Currency
  association [0..1] to I_Currency             as _ValuationCurrency    on  $projection.PositionCurrency = _ValuationCurrency.Currency
{
  key key_date                                                                  as KeyDate,
  key valuation_area                                                            as TreasuryValuationArea,
  key cast( valuation_class as ftr_gen_valuation_class preserving type )        as TreasuryValuationClass,
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key company_code                                                              as CompanyCode,
      @ObjectModel.foreignKey.association: '_SecurityAccount'
  key cast(security_account as ftr_gen_security_account preserving type )       as SecurityAccount,
  key cast(security_id as ftr_gen_security_class preserving type )              as SecurityClass,
  key portfolio                                                                 as Portfolio,
  key cast( account_group as ftr_gen_sec_account_group preserving type )        as SecurityAccountGroup,
  key lot_id                                                                    as TreasuryPositionLotUUID,
      @ObjectModel.foreignKey.association: '_FinancialTransaction'
  key deal_number                                                               as FinancialTransaction,
  key fund                                                                      as Fund,
  key grant_nbr                                                                 as GrantID,
  key cast(wbs_element as ps_s4_pspnr preserving type)                          as WBSElementInternalID,
  key cost_center                                                               as CostCenter,
  key profit_center                                                             as ProfitCenter,
  key functional_area                                                           as FunctionalArea,
  key cast(custom_diff_term_1  as tpm_cust_diff_term_1_value preserving type )  as TrsyPosCustomDiffntnTerm1,
  key cast(custom_diff_term_2  as tpm_cust_diff_term_2_value preserving type )  as TrsyPosCustomDiffntnTerm2,
  key cast( custom_diff_term_3  as tpm_cust_diff_term_3_value preserving type ) as TrsyPosCustomDiffntnTerm3,
  key cast(custom_diff_term_4  as tpm_cust_diff_term_4_value preserving type )  as TrsyPosCustomDiffntnTerm4,
  key cast(custom_diff_term_5  as tpm_cust_diff_term_5_value preserving type )  as TrsyPosCustomDiffntnTerm5,

      @Semantics.amount.currencyCode: 'PositionCurrency'
      obv_ec_pc                                                                 as CostExcldBookValueAmtInPosCrcy,
      @ObjectModel.foreignKey.association: '_PositionCurrency'
      position_curr                                                             as PositionCurrency,
      @Semantics.amount.currencyCode: 'ValuationCurrency'
      obv_ec_vc                                                                 as CostExcldBookValAmtInValnCrcy,
      valuation_curr                                                            as ValuationCurrency,
      _SecurityClass,
      _CompanyCode,
      _SecurityAccount,
      @Consumption.hidden: true
      _FinancialTransaction,
      _PositionCurrency,
      _ValuationCurrency

}
```
