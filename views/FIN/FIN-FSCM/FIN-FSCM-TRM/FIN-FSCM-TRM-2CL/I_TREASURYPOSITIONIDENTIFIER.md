---
name: I_TREASURYPOSITIONIDENTIFIER
description: Treasurypositionidentifier
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
  - treasury
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_TREASURYPOSITIONIDENTIFIER

**Treasurypositionidentifier**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TrsyPositionIdentificationUUID` | ✓ | |  | `cast(dift.os_guid as ftr_gen_position_ident_uuid preserving type)` |  |  |
| `TreasuryPosition` |  | |  | `cast (dift.identified_oid as ftr_gen_position_uuid preserving type)` |  |  |
| `TreasuryValuationArea` |  | |  | `valuation_area` |  |  |
| `CompanyCode` |  | |  | `company_code` |  |  |
| `FinancialInstrumentProductType` |  | |  | `product_type` |  |  |
| `TreasuryValuationClass` |  | |  | `cast(dift.valuation_class as ftr_gen_valuation_class preserving type)` |  |  |
| `FinancialInstrValuationClass` |  | |  | `cast(dift.com_val_class as ftr_gen_fin_instr_val_class preserving type)` |  |  |
| `SecurityAccount` |  | |  | `cast(dift.security_account as ftr_gen_security_account preserving type)` |  |  |
| `SecurityClass` |  | |  | `cast(dift.security_id as ftr_gen_security_class preserving type)` |  |  |
| `DifferentiationPortfolio` |  | |  | `cast(dift.portfolio as ftr_gen_portfolio_diff preserving type)` |  |  |
| `SecurityAccountGroup` |  | |  | `cast(dift.account_group as ftr_gen_sec_account_group preserving type)` |  |  |
| `TreasuryPositionLongShortCode` |  | |  | `cast(dift.flag_long_short as ftr_gen_long_short_code preserving type)` |  |  |
| `TreasuryPositionLotUUID` |  | |  | `lot_id` |  |  |
| `FinancialTransaction` |  | |  | `cast(dift.deal_number as tb_rfha preserving type)` |  |  |
| `Fund` |  | |  | `fund` |  |  |
| `GrantID` |  | |  | `grant_nbr` |  |  |
| `WBSElementInternalID` |  | |  | `cast(dift.wbs_element as ps_s4_pspnr preserving type)` |  |  |
| `ProfitCenter` |  | |  | `profit_center` |  |  |
| `CostCenter` |  | |  | `cost_center` |  |  |
| `FunctionalArea` |  | |  | `functional_area` |  |  |
| `TreasuryPositionContext` |  | |  | `context` |  |  |
| `FinancialExposureItem` |  | |  | `exposure_item_id` |  |  |
| `FinancialExposureSubItem` |  | |  | `exposure_subitem_id` |  |  |
| `TrsyPosCustomDiffntnTerm1` |  | |  | `cast(dift.custom_diff_term_1 as tpm_cust_diff_term_1_value preserving type )` |  |  |
| `TrsyPosCustomDiffntnTerm2` |  | |  | `cast(dift.custom_diff_term_2 as tpm_cust_diff_term_2_value preserving type )` |  |  |
| `TrsyPosCustomDiffntnTerm3` |  | |  | `cast(dift.custom_diff_term_3 as tpm_cust_diff_term_3_value preserving type )` |  |  |
| `TrsyPosCustomDiffntnTerm4` |  | |  | `cast(dift.custom_diff_term_4 as tpm_cust_diff_term_4_value preserving type )` |  |  |
| `TrsyPosCustomDiffntnTerm5` |  | |  | `cast(dift.custom_diff_term_5 as tpm_cust_diff_term_5_value preserving type )` |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_FinancialInstrProdType` | | ✓ | | | | |
| `_TreasuryValuationArea` | | ✓ | | | | |
| `_WBSElementBasicData` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_FinancialInstrProdType` | `I_FinancialinstrProductType` | [0..1] |
| `_TreasuryValuationArea` | `I_TreasuryValuationArea` | [0..1] |
| `_WBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Treasury Position Identifier'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'TreasuryPositionIdentifier'
@VDM.viewType: #BASIC
@Analytics.dataExtraction: { enabled: true, delta.changeDataCapture.automatic: true }
@ObjectModel: { usageType.dataClass:      #TRANSACTIONAL,
                usageType.serviceQuality: #A,
                usageType.sizeCategory:   #M,
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ] }
define view entity I_TreasuryPositionIdentifier
  as select from dift_pos_ident as dift
  association [0..1] to I_CompanyCode               as _CompanyCode            on $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_FinancialinstrProductType as _FinancialInstrProdType on $projection.FinancialInstrumentProductType = _FinancialInstrProdType.FinancialInstrumentProductType
  association [0..1] to I_TreasuryValuationArea     as _TreasuryValuationArea  on $projection.TreasuryValuationArea = _TreasuryValuationArea.TreasuryValuationArea
  association [0..1] to I_WBSElementBasicData       as _WBSElementBasicData    on  $projection.WBSElementInternalID = _WBSElementBasicData.WBSElementInternalID

{
  key cast(dift.os_guid as ftr_gen_position_ident_uuid preserving type)             as TrsyPositionIdentificationUUID,
      cast (dift.identified_oid as ftr_gen_position_uuid preserving type)           as TreasuryPosition,
      dift.valuation_area                                                           as TreasuryValuationArea,
      dift.company_code                                                             as CompanyCode,
      dift.product_type                                                             as FinancialInstrumentProductType,

      cast(dift.valuation_class  as ftr_gen_valuation_class preserving type)        as TreasuryValuationClass,
      cast(dift.com_val_class as ftr_gen_fin_instr_val_class preserving type)       as FinancialInstrValuationClass,

      cast(dift.security_account as ftr_gen_security_account preserving type)       as SecurityAccount,
      cast(dift.security_id      as ftr_gen_security_class preserving type)         as SecurityClass,
      cast(dift.portfolio        as ftr_gen_portfolio_diff preserving type)         as DifferentiationPortfolio,
      cast(dift.account_group    as ftr_gen_sec_account_group preserving type)      as SecurityAccountGroup,
      cast(dift.flag_long_short as ftr_gen_long_short_code preserving type)         as TreasuryPositionLongShortCode,

      dift.lot_id                                                                   as TreasuryPositionLotUUID,
      cast(dift.deal_number as tb_rfha preserving type)                             as FinancialTransaction,
      dift.fund                                                                     as Fund,
      dift.grant_nbr                                                                as GrantID,
      cast(dift.wbs_element as ps_s4_pspnr preserving type)                         as WBSElementInternalID,
      dift.profit_center                                                            as ProfitCenter,
      dift.cost_center                                                              as CostCenter,
      dift.functional_area                                                          as FunctionalArea,

      dift.context                                                                  as TreasuryPositionContext,

      dift.exposure_item_id                                                         as FinancialExposureItem,
      dift.exposure_subitem_id                                                      as FinancialExposureSubItem,
      cast(dift.custom_diff_term_1 as tpm_cust_diff_term_1_value preserving type )  as TrsyPosCustomDiffntnTerm1,
      cast(dift.custom_diff_term_2 as tpm_cust_diff_term_2_value preserving type )  as TrsyPosCustomDiffntnTerm2,
      cast(dift.custom_diff_term_3 as tpm_cust_diff_term_3_value preserving type )  as TrsyPosCustomDiffntnTerm3,
      cast(dift.custom_diff_term_4 as tpm_cust_diff_term_4_value preserving type )  as TrsyPosCustomDiffntnTerm4,
      cast(dift.custom_diff_term_5 as tpm_cust_diff_term_5_value preserving type )  as TrsyPosCustomDiffntnTerm5,

      _CompanyCode,
      _FinancialInstrProdType,
      _TreasuryValuationArea,
      _WBSElementBasicData
}
```
