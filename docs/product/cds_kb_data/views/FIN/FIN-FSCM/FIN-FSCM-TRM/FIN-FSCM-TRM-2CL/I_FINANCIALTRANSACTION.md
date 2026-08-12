---
name: I_FINANCIALTRANSACTION
description: "Financialtransaction"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_FINANCIALTRANSACTION

**Financialtransaction**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` |  |  |
| `FinancialTransaction` | ✓ | |  | `rfha` |  |  |
| `TreasuryFinancialObject` |  | |  | `objnr` |  |  |
| `CreatedByUser` |  | |  | `cruser` |  |  |
| `FinTransCreationDate` |  | |  | `cast( FinancialTransactionTable.dcrdat as ftr_creation_date preserving type )` |  |  |
| `FinTransCreationTime` |  | |  | `tcrtim` |  |  |
| `LastChangedByUser` |  | |  | `cast(FinancialTransactionTable.upuser as vdm_lastchangedbyuserid preserving type)` |  |  |
| `LastChangeDate` |  | |  | `dupdat` |  |  |
| `FinInstrumentLastChangedTime` |  | |  | `tuptim` |  |  |
| `TreasuryContractType` |  | |  | `rantyp` |  |  |
| `FinancialInstrProductCategory` |  | |  | `cast(FinancialTransactionTable.sanlf as ftr_gen_fin_instr_prod_categ preserving type)` |  |  |
| `FinancialInstrumentProductType` |  | |  | `sgsart` |  |  |
| `FinInstrTransactionCategory` |  | |  | `sfgtyp` |  |  |
| `FinancialInstrTransactionType` |  | |  | `cast(FinancialTransactionTable.sfhaart as ftr_gen_transaction_type preserving type)` |  |  |
| `FinTransProcessingCategory` |  | |  | `abwtyp` |  |  |
| `TermStartDate` |  | |  | `dblfz` |  |  |
| `TermStartDateIsInclusive` |  | |  | `cast(FinancialTransactionTable.sinclbe as abap_boolean preserving type )` |  |  |
| `FinTransNoticePeriod` |  | |  | `akuend` |  |  |
| `FinTransNoticePeriodUnit` |  | |  | `skuend` |  |  |
| `FinTransFactoryCalendar1` |  | |  | `skalid` |  |  |
| `FinTransFactoryCalendar2` |  | |  | `skalid2` |  |  |
| `Counterparty` |  | |  | `cast(FinancialTransactionTable.kontrh as rkontrah_new preserving type)` |  |  |
| `FinancialInstrumentGuarantor` |  | |  | `rgarant` |  |  |
| `Portfolio` |  | |  | `rportb` |  |  |
| `TreasuryFinanceProject` |  | |  | `zuonr` |  |  |
| `FinancialInstrumentAssignment` |  | |  | `cast(FinancialTransactionTable.zuond as ftr_gen_fin_instr_assignment preserving type)` |  |  |
| `FinancialInstrumentReference` |  | |  | `cast(FinancialTransactionTable.refer as ftr_gen_fin_instr_internal_ref preserving type)` |  |  |
| `FinancialInstrCharacteristic` |  | |  | `cast(FinancialTransactionTable.merkm as ftr_gen_fin_instr_char preserving type)` |  |  |
| `TreasuryValuationClass` |  | |  | `rcomvalcl` |  |  |
| `BusinessArea` |  | |  | `rbusa` |  |  |
| `ControllingArea` |  | | `_CompanyCode` | `ControllingArea` |  |  |
| `CostCenter` |  | |  | `rcntr` |  |  |
| `HedgingClassification` |  | |  | `hedge_class` |  |  |
| `HedgeRequestIdentifier` |  | |  | `cast( FinancialTransactionTable.hedge_request_id as hedge_request_identifier preserving type )` |  |  |
| `ProfitCenter` |  | |  | `prctr` |  |  |
| `WBSElementInternalID` |  | |  | `cast(FinancialTransactionTable.ps_posid as ps_s4_pspnr preserving type )` |  |  |
| `TreasuryFacilityCompanyCode` |  | |  | `facilitybukrs` |  |  |
| `TreasuryFacility` |  | |  | `facilitynr` |  |  |
| `FinancialInstrumentStatus` |  | |  | `saktiv` |  |  |
| `FinTransReleaseStatus` |  | |  | `sfrgzust` |  |  |
| `TransactionCurrency` |  | |  | `wgschft` |  |  |
| `FinInstrumentOutgoingCurrency` |  | |  | `wgschft1` |  |  |
| `FinInstrumentIncomingCurrency` |  | |  | `wgschft2` |  |  |
| `TradedCurrency` |  | |  | `traded_currency` |  |  |
| `SecurityClass` |  | |  | `cast(FinancialTransactionTable.ranl as ftr_gen_security_class preserving type)` |  |  |
| `SecurityClassIntlScrtyIdnNmbr` |  | |  | `isin` |  |  |
| `ClassificationOfFinInstr` |  | |  | `cfi_code` |  |  |
| `SecurityAccount` |  | |  | `cast(FinancialTransactionTable.rldepo as ftr_gen_security_account preserving type)` |  |  |
| `FuturesAccount` |  | |  | `posacc` |  |  |
| `FinTransCentralClearingOption` |  | |  | `clearing_option` |  |  |
| `FinTransCentralClearingStatus` |  | |  | `clearing_status` |  |  |
| `FinTransCentralClearingDate` |  | |  | `clearing_date` |  |  |
| `FinTransCntrlClrgActualDate` |  | |  | `clear_date_act` |  |  |
| `CentralClearingAccount` |  | |  | `ext_account` |  |  |
| `FinTransIsRiskMitigating` |  | |  | `risk_mitigating` |  |  |
| `FinInstrLastActiveActivity` |  | |  | `cast(FinancialTransactionTable.rfhazul as ftr_gen_fin_instr_last_act_act preserving type)` |  |  |
| `TermEndDate` |  | |  | `delfz` |  |  |
| `TrsyTradedAmountBuySellCode` |  | |  | `case FinancialTransactionTable.amtinput when '1' then cast ('S' as ttm_fx_buy_sell) when '2' then cast ('B' as ttm_fx_buy_sell) end` |  |  |
| `Segment` |  | |  | `fb_segment` |  |  |
| `OnBehalfOfCompany` |  | |  | `behalf_of_company` |  |  |
| `MarketIdentifierCode` |  | |  | `mic` |  |  |
| `FinTransRoundingCategory` |  | |  | `srndng` |  |  |
| `FinTransGeneralValuationClass` |  | |  | `rcomvalcl` |  |  |
| `Fund` |  | |  | `fund` |  |  |
| `GrantID` |  | |  | `grant_nbr` |  |  |
| `FinTransAuthorizationGroup` |  | |  | `tbegru` |  |  |
| `BusinessPlace` |  | |  | `bupla` |  |  |
| `FunctionalArea` |  | |  | `fkber` |  |  |
| `TrsyPosCustomDiffntnTerm1` |  | |  | `custom_diff_term_1` |  |  |
| `TrsyPosCustomDiffntnTerm2` |  | |  | `custom_diff_term_2` |  |  |
| `TrsyPosCustomDiffntnTerm3` |  | |  | `custom_diff_term_3` |  |  |
| `TrsyPosCustomDiffntnTerm4` |  | |  | `custom_diff_term_4` |  |  |
| `TrsyPosCustomDiffntnTerm5` |  | |  | `custom_diff_term_5` |  |  |
| `UniqueProductIdentifier` |  | |  | `upi` |  |  |
| `InternationalSecuritiesIdnNmbr` |  | |  | `isin` |  |  |
| `ReportTrackingNumber` |  | |  | `rtn` |  |  |
| `FinTransOptionNumber` |  | |  | `rgatt` |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_ContractType` | | ✓ | | | | |
| `_FinancialInstrProdCat` | | ✓ | | | | |
| `_FinancialInstrProdType` | | ✓ | | | | |
| `_FinInstrTransCat` | | ✓ | | | | |
| `_FinancialInstrTransType` | | ✓ | | | | |
| `_ProcessingCategory` | | ✓ | | | | |
| `_NoticePeriodUnit` | | ✓ | | | | |
| `_Calendar` | | ✓ | | | | |
| `_Calendar2` | | ✓ | | | | |
| `_Counterparty` | | ✓ | | | | |
| `_Guarantor` | | ✓ | | | | |
| `_Portfolio` | | ✓ | | | | |
| `_Assignment` | | ✓ | | | | |
| `_Reference` | | ✓ | | | | |
| `_Characteristics` | | ✓ | | | | |
| `_ValuationClass` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_CostCenter_2` | | ✓ | | | | |
| `_TreasuryHedgingClassfctn` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_ProfitCenter_2` | | ✓ | | | | |
| `_WBSElement` | | ✓ | | | | |
| `_FacilityCompanyCode` | | ✓ | | | | |
| `_Status` | | ✓ | | | | |
| `_ReleaseStatus` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_OutgoingCurrency` | | ✓ | | | | |
| `_IncomingCurrency` | | ✓ | | | | |
| `_TradedCurrency` | | ✓ | | | | |
| `_SecurityClass` | | ✓ | | | | |
| `_SecurityAccount` | | ✓ | | | | |
| `_FuturesAccount` | | ✓ | | | | |
| `_CentralClearingOption` | | ✓ | | | | |
| `_CentralClearingStatus` | | ✓ | | | | |
| `_CentralClearingAccount` | | ✓ | | | | |
| `_ContractActivity` | | ✓ | | | | |
| `_CurrentActivity` | | ✓ | | | | |
| `_Security` | | ✓ | | | | |
| `_Interest` | | ✓ | | | | |
| `_Nominal` | | ✓ | | | | |
| `_TabActivity` | | ✓ | | | | |
| `_TabFlow` | | ✓ | | | | |
| `_TabCondition` | | ✓ | | | | |
| `_LetterOfCredit` | | ✓ | | | | |
| `_ReferenceItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_ContractType` | `I_TreasuryContractType` | [0..1] |
| `_FinancialInstrProdCat` | `I_FinancialInstrProdCat` | [0..1] |
| `_FinancialInstrProdType` | `I_FinancialinstrProductType` | [0..1] |
| `_FinInstrTransCat` | `I_FinInstrTransCat` | [0..1] |
| `_FinancialInstrTransType` | `I_FinancialInstrTransType` | [1..1] |
| `_ProcessingCategory` | `I_FinTransProcgCategory` | [0..1] |
| `_NoticePeriodUnit` | `I_FinTransNoticePeriodUnit` | [0..1] |
| `_Calendar` | `I_FactoryCalendar` | [0..1] |
| `_Calendar2` | `I_FactoryCalendar` | [0..1] |
| `_Counterparty` | `I_BusinessPartner` | [1..1] |
| `_Guarantor` | `I_BusinessPartner` | [0..1] |
| `_Portfolio` | `I_TreasuryPortfolio` | [0..1] |
| `_Assignment` | `I_FinancialInstrAssignment` | [0..1] |
| `_Reference` | `I_FinancialInstrReference` | [0..1] |
| `_Characteristics` | `I_FinancialInstrCharacteristic` | [0..1] |
| `_ValuationClass` | `I_Financialinstrvaluationclass` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_CostCenter` | `I_CostCenter` | [0..*] |
| `_CostCenter_2` | `I_CostCenter` | [0..*] |
| `_TreasuryHedgingClassfctn` | `I_TreasuryHedgingClassfctn` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_ProfitCenter_2` | `I_ProfitCenter` | [0..*] |
| `_WBSElement` | `I_WBSElementBasicData` | [0..1] |
| `_FacilityCompanyCode` | `I_CompanyCode` | [0..1] |
| `_Status` | `I_FinInstrumentStatus` | [0..1] |
| `_ReleaseStatus` | `I_FinTransReleaseStatus` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_OutgoingCurrency` | `I_Currency` | [0..1] |
| `_IncomingCurrency` | `I_Currency` | [0..1] |
| `_TradedCurrency` | `I_Currency` | [0..1] |
| `_SecurityClass` | `I_SecurityClass` | [0..1] |
| `_SecurityAccount` | `I_SecurityAccount` | [0..1] |
| `_FuturesAccount` | `I_TreasuryPositionAccount` | [0..1] |
| `_CentralClearingOption` | `I_FinTransCntrlClrgOption` | [0..1] |
| `_CentralClearingStatus` | `I_FinTransCntrlClrgStatus` | [0..1] |
| `_CentralClearingAccount` | `I_CentralClearingAccount` | [0..*] |
| `_ContractActivity` | `I_FinTransContractActivity` | [0..*] |
| `_CurrentActivity` | `I_FinTransActivity` | [0..1] |
| `_Security` | `I_FinTransSecurity` | [0..1] |
| `_Interest` | `I_FinTransInterest` | [0..*] |
| `_Nominal` | `I_FinTransNominal` | [0..*] |
| `_TabActivity` | `I_FinTransActivity` | [0..*] |
| `_TabFlow` | `I_FinTransFlow` | [0..*] |
| `_TabCondition` | `I_FinTransCondition` | [0..*] |
| `_LetterOfCredit` | `I_LetterOfCredit` | [0..1] |
| `_ReferenceItem` | `I_TreasuryReferenceItem` | [0..*] |

## Source Code

```abap
// harmonized annotations
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'IFINTRAN'
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION /* dataExtraction.enabled: true} */
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Financial Transaction'
@ObjectModel.representativeKey: 'FinancialTransaction'
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true // For C1-Release
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]

define view I_FinancialTransaction
  as select from vtbfha as FinancialTransactionTable

  // dimensions, containing for example text fields
  association [1..1] to I_CompanyCode                  as _CompanyCode              on  $projection.CompanyCode = _CompanyCode.CompanyCode

  association [0..1] to I_TreasuryContractType         as _ContractType             on  $projection.TreasuryContractType = _ContractType.TreasuryContractType

  association [0..1] to I_FinancialInstrProdCat        as _FinancialInstrProdCat    on  $projection.FinancialInstrProductCategory = _FinancialInstrProdCat.FinancialInstrProductCategory

  association [0..1] to I_FinancialinstrProductType    as _FinancialInstrProdType   on  $projection.FinancialInstrumentProductType = _FinancialInstrProdType.FinancialInstrumentProductType

  association [0..1] to I_FinInstrTransCat             as _FinInstrTransCat         on  $projection.FinancialInstrProductCategory = _FinInstrTransCat.FinancialInstrProductCategory
                                                                                    and $projection.FinInstrTransactionCategory   = _FinInstrTransCat.FinInstrTransactionCategory

  association [1..1] to I_FinancialInstrTransType      as _FinancialInstrTransType  on  $projection.FinancialInstrTransactionType  = _FinancialInstrTransType.FinancialInstrTransactionType
                                                                                    and $projection.FinancialInstrumentProductType = _FinancialInstrTransType.FinancialInstrumentProductType

  association [0..1] to I_FinTransProcgCategory        as _ProcessingCategory       on  $projection.FinancialInstrProductCategory = _ProcessingCategory.FinancialInstrProductCategory
                                                                                    and $projection.FinInstrTransactionCategory   = _ProcessingCategory.FinInstrTransactionCategory
                                                                                    and $projection.FinTransProcessingCategory    = _ProcessingCategory.FinTransProcessingCategory

  association [0..1] to I_FinTransNoticePeriodUnit     as _NoticePeriodUnit         on  $projection.FinTransNoticePeriodUnit = _NoticePeriodUnit.FinTransNoticePeriodUnit

  association [0..1] to I_FactoryCalendar              as _Calendar                 on  $projection.FinTransFactoryCalendar1 = _Calendar.FactoryCalendar

  association [0..1] to I_FactoryCalendar              as _Calendar2                on  $projection.FinTransFactoryCalendar2 = _Calendar2.FactoryCalendar

  association [1..1] to I_BusinessPartner              as _Counterparty             on  $projection.Counterparty = _Counterparty.BusinessPartner

  association [0..1] to I_BusinessPartner              as _Guarantor                on  $projection.FinancialInstrumentGuarantor = _Guarantor.BusinessPartner

  association [0..1] to I_TreasuryPortfolio            as _Portfolio                on  $projection.CompanyCode = _Portfolio.CompanyCode
                                                                                    and $projection.Portfolio   = _Portfolio.Portfolio

  association [0..1] to I_FinancialInstrAssignment     as _Assignment               on  $projection.FinancialInstrumentAssignment = _Assignment.FinancialInstrumentAssignment

  association [0..1] to I_FinancialInstrReference      as _Reference                on  $projection.FinancialInstrumentReference = _Reference.FinancialInstrumentReference

  association [0..1] to I_FinancialInstrCharacteristic as _Characteristics          on  $projection.FinancialInstrCharacteristic = _Characteristics.FinancialInstrCharacteristic

  association [0..1] to I_Financialinstrvaluationclass as _ValuationClass           on  $projection.TreasuryValuationClass = _ValuationClass.FinancialInstrValuationClass

  association [0..1] to I_BusinessArea                 as _BusinessArea             on  $projection.BusinessArea = _BusinessArea.BusinessArea

  association [0..1] to I_ControllingArea              as _ControllingArea          on  $projection.ControllingArea = _ControllingArea.ControllingArea

  association [0..*] to I_CostCenter                   as _CostCenter               on  $projection.CompanyCode = _CostCenter.ControllingArea
                                                                                    and $projection.CostCenter  = _CostCenter.CostCenter
  association [0..*] to I_CostCenter                   as _CostCenter_2             on  $projection.ControllingArea = _CostCenter_2.ControllingArea
                                                                                    and $projection.CostCenter      = _CostCenter_2.CostCenter

  association [0..1] to I_TreasuryHedgingClassfctn     as _TreasuryHedgingClassfctn on  $projection.HedgingClassification = _TreasuryHedgingClassfctn.HedgingClassification

  association [0..*] to I_ProfitCenter                 as _ProfitCenter             on  $projection.CompanyCode  = _ProfitCenter.ControllingArea
                                                                                    and $projection.ProfitCenter = _ProfitCenter.ProfitCenter
  association [0..*] to I_ProfitCenter                 as _ProfitCenter_2           on  $projection.ControllingArea = _ProfitCenter_2.ControllingArea
                                                                                    and $projection.ProfitCenter    = _ProfitCenter_2.ProfitCenter

  association [0..1] to I_WBSElementBasicData          as _WBSElement               on  $projection.WBSElementInternalID = _WBSElement.WBSElementInternalID

  // view not C1-released
  //  association        to I_WBSElement                          as _WBSElement                  on  $projection.WBSElementInternalID = _WBSElement.WBSElementInternalID

  association [0..1] to I_CompanyCode                  as _FacilityCompanyCode      on  $projection.TreasuryFacilityCompanyCode = _FacilityCompanyCode.CompanyCode

  association [0..1] to I_FinInstrumentStatus          as _Status                   on  $projection.FinancialInstrumentStatus = _Status.FinancialInstrumentStatus

  association [0..1] to I_FinTransReleaseStatus        as _ReleaseStatus            on  $projection.FinTransReleaseStatus = _ReleaseStatus.FinTransReleaseStatus

  association [0..1] to I_Currency                     as _Currency                 on  $projection.TransactionCurrency = _Currency.Currency

  association [0..1] to I_Currency                     as _OutgoingCurrency         on  $projection.FinInstrumentOutgoingCurrency = _OutgoingCurrency.Currency

  association [0..1] to I_Currency                     as _IncomingCurrency         on  $projection.FinInstrumentIncomingCurrency = _IncomingCurrency.Currency

  association [0..1] to I_Currency                     as _TradedCurrency           on  $projection.TradedCurrency = _TradedCurrency.Currency

  association [0..1] to I_SecurityClass                as _SecurityClass            on  $projection.SecurityClass = _SecurityClass.SecurityClass

  association [0..1] to I_SecurityAccount              as _SecurityAccount          on  $projection.SecurityAccount = _SecurityAccount.SecurityAccount
                                                                                    and $projection.CompanyCode     = _SecurityAccount.CompanyCode

  association [0..1] to I_TreasuryPositionAccount      as _FuturesAccount           on  $projection.CompanyCode    = _FuturesAccount.CompanyCode
                                                                                    and $projection.FuturesAccount = _FuturesAccount.TreasuryPositionAccount

  association [0..1] to I_FinTransCntrlClrgOption      as _CentralClearingOption    on  $projection.FinTransCentralClearingOption = _CentralClearingOption.FinTransCentralClearingOption

  association [0..1] to I_FinTransCntrlClrgStatus      as _CentralClearingStatus    on  $projection.FinTransCentralClearingStatus = _CentralClearingStatus.FinTransCentralClearingStatus

  association [0..*] to I_CentralClearingAccount       as _CentralClearingAccount   on  $projection.CompanyCode            = _CentralClearingAccount.CompanyCode
                                                                                    and $projection.CentralClearingAccount = _CentralClearingAccount.CentralClearingAccount

  // associations according to VDM

  association [0..*] to I_FinTransContractActivity     as _ContractActivity         on  $projection.CompanyCode          = _ContractActivity.CompanyCode
                                                                                    and $projection.FinancialTransaction = _ContractActivity.FinancialTransaction

  //for performance reason instead of using I_FinTransCurrentActivity directly access to I_FinTransActivity
  association [0..1] to I_FinTransActivity             as _CurrentActivity          on  $projection.CompanyCode                = _CurrentActivity.CompanyCode
                                                                                    and $projection.FinancialTransaction       = _CurrentActivity.FinancialTransaction
                                                                                    and $projection.FinInstrLastActiveActivity = _CurrentActivity.FinancialInstrumentActivity

  association [0..1] to I_FinTransSecurity             as _Security                 on  $projection.CompanyCode          = _Security.CompanyCode
                                                                                    and $projection.FinancialTransaction = _Security.FinancialTransaction

  association [0..*] to I_FinTransInterest             as _Interest                 on  $projection.CompanyCode          = _Interest.CompanyCode
                                                                                    and $projection.FinancialTransaction = _Interest.FinancialTransaction

  association [0..*] to I_FinTransNominal              as _Nominal                  on  $projection.CompanyCode          = _Nominal.CompanyCode
                                                                                    and $projection.FinancialTransaction = _Nominal.FinancialTransaction

  association [0..*] to I_FinTransActivity             as _TabActivity              on  $projection.CompanyCode          = _TabActivity.CompanyCode
                                                                                    and $projection.FinancialTransaction = _TabActivity.FinancialTransaction

  association [0..*] to I_FinTransFlow                 as _TabFlow                  on  $projection.CompanyCode          = _TabFlow.CompanyCode
                                                                                    and $projection.FinancialTransaction = _TabFlow.FinancialTransaction

  association [0..*] to I_FinTransCondition            as _TabCondition             on  $projection.CompanyCode          = _TabCondition.CompanyCode
                                                                                    and $projection.FinancialTransaction = _TabCondition.FinancialTransaction


  // should be not used anymore, instead use _CurrentActivity
  association [0..1] to I_LetterOfCredit               as _LetterOfCredit           on  $projection.CompanyCode                = _LetterOfCredit.CompanyCode
                                                                                    and $projection.FinancialTransaction       = _LetterOfCredit.FinancialTransaction
                                                                                    and $projection.FinInstrLastActiveActivity = _LetterOfCredit.FinancialInstrumentActivity

  association [0..*] to I_TreasuryReferenceItem        as _ReferenceItem            on  $projection.TreasuryFinancialObject              = _ReferenceItem.TreasuryFinancialObject
                                                                                    and (
                                                                                       (
                                                                                         _ReferenceItem.TreasuryReferenceStatus          = '0'
                                                                                         and(
                                                                                           _ReferenceItem.TreasuryReferenceItemStatus    = '0'
                                                                                           or _ReferenceItem.TreasuryReferenceItemStatus = '8'
                                                                                         )
                                                                                       )
                                                                                       or(
                                                                                         _ReferenceItem.TreasuryReferenceCategory        = 'OFF'
                                                                                         and _ReferenceItem.TreasuryReferenceItemStatus  = '0'
                                                                                         and _ReferenceItem.TreasuryReferenceStatus      = '4'
                                                                                       )
                                                                                     )

{
      // Exposed fields

      //--[ GENERATED:012:GlBfhyJl7kY4pGd}um{aL0
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key FinancialTransactionTable.bukrs                                                                as CompanyCode,
  key FinancialTransactionTable.rfha                                                                 as FinancialTransaction,

      FinancialTransactionTable.objnr                                                                as TreasuryFinancialObject,

      FinancialTransactionTable.cruser                                                               as CreatedByUser,
      cast( FinancialTransactionTable.dcrdat as ftr_creation_date preserving type )                  as FinTransCreationDate,
      FinancialTransactionTable.tcrtim                                                               as FinTransCreationTime,
      cast(FinancialTransactionTable.upuser as vdm_lastchangedbyuserid preserving type)              as LastChangedByUser,
      FinancialTransactionTable.dupdat                                                               as LastChangeDate,
      FinancialTransactionTable.tuptim                                                               as FinInstrumentLastChangedTime,

      @ObjectModel.foreignKey.association: '_ContractType'
      FinancialTransactionTable.rantyp                                                               as TreasuryContractType,
      @ObjectModel.foreignKey.association: '_FinancialInstrProdCat'
      cast(FinancialTransactionTable.sanlf as ftr_gen_fin_instr_prod_categ preserving type)          as FinancialInstrProductCategory,
      @ObjectModel.foreignKey.association: '_FinancialInstrProdType'
      FinancialTransactionTable.sgsart                                                               as FinancialInstrumentProductType,
      @ObjectModel.foreignKey.association: '_FinInstrTransCat'
      FinancialTransactionTable.sfgtyp                                                               as FinInstrTransactionCategory,
      @ObjectModel.foreignKey.association: '_FinancialInstrTransType'
      cast(FinancialTransactionTable.sfhaart as ftr_gen_transaction_type preserving type)            as FinancialInstrTransactionType,
      @ObjectModel.foreignKey.association: '_ProcessingCategory'
      FinancialTransactionTable.abwtyp                                                               as FinTransProcessingCategory,

      FinancialTransactionTable.dblfz                                                                as TermStartDate,
      cast(FinancialTransactionTable.sinclbe as abap_boolean preserving type )                       as TermStartDateIsInclusive,
      FinancialTransactionTable.akuend                                                               as FinTransNoticePeriod,
      @ObjectModel.foreignKey.association: '_NoticePeriodUnit'
      FinancialTransactionTable.skuend                                                               as FinTransNoticePeriodUnit,
      @ObjectModel.foreignKey.association: '_Calendar'
      FinancialTransactionTable.skalid                                                               as FinTransFactoryCalendar1,
      @EndUserText.label: 'Calendar 2'
      @EndUserText.quickInfo: 'Calendar 2'
      @ObjectModel.foreignKey.association: '_Calendar2'
      FinancialTransactionTable.skalid2                                                              as FinTransFactoryCalendar2,
      @ObjectModel.foreignKey.association: '_Counterparty'
      cast(FinancialTransactionTable.kontrh   as rkontrah_new preserving type)                       as Counterparty,
      @ObjectModel.foreignKey.association: '_Guarantor'
      FinancialTransactionTable.rgarant                                                              as FinancialInstrumentGuarantor,

      @ObjectModel.foreignKey.association: '_Portfolio'
      FinancialTransactionTable.rportb                                                               as Portfolio,
      FinancialTransactionTable.zuonr                                                                as TreasuryFinanceProject,
      @ObjectModel.foreignKey.association: '_Assignment'
      cast(FinancialTransactionTable.zuond    as ftr_gen_fin_instr_assignment preserving type)       as FinancialInstrumentAssignment,
      @ObjectModel.foreignKey.association: '_Reference'
      cast(FinancialTransactionTable.refer    as ftr_gen_fin_instr_internal_ref preserving type)     as FinancialInstrumentReference,
      @ObjectModel.foreignKey.association: '_Characteristics'
      cast(FinancialTransactionTable.merkm    as ftr_gen_fin_instr_char preserving type)             as FinancialInstrCharacteristic,
      @ObjectModel.foreignKey.association: '_ValuationClass'
      FinancialTransactionTable.rcomvalcl                                                            as TreasuryValuationClass,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      FinancialTransactionTable.rbusa                                                                as BusinessArea,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      _CompanyCode.ControllingArea                                                                   as ControllingArea,
      @ObjectModel.foreignKey.association: '_CostCenter_2'
      FinancialTransactionTable.rcntr                                                                as CostCenter,
      @ObjectModel.foreignKey.association: '_TreasuryHedgingClassfctn'
      FinancialTransactionTable.hedge_class                                                          as HedgingClassification,

      cast( FinancialTransactionTable.hedge_request_id as hedge_request_identifier preserving type ) as HedgeRequestIdentifier,
      @ObjectModel.foreignKey.association: '_ProfitCenter_2'
      FinancialTransactionTable.prctr                                                                as ProfitCenter,
      @ObjectModel.foreignKey.association: '_WBSElement'
      cast(FinancialTransactionTable.ps_posid as ps_s4_pspnr preserving type )                       as WBSElementInternalID,
      @ObjectModel.foreignKey.association: '_FacilityCompanyCode'
      FinancialTransactionTable.facilitybukrs                                                        as TreasuryFacilityCompanyCode,
      FinancialTransactionTable.facilitynr                                                           as TreasuryFacility,

      @ObjectModel.foreignKey.association: '_Status'
      FinancialTransactionTable.saktiv                                                               as FinancialInstrumentStatus,
      @ObjectModel.foreignKey.association: '_ReleaseStatus'
      FinancialTransactionTable.sfrgzust                                                             as FinTransReleaseStatus,
      @ObjectModel.foreignKey.association: '_Currency'
      @Semantics.currencyCode: true
      FinancialTransactionTable.wgschft                                                              as TransactionCurrency,
      @ObjectModel.foreignKey.association: '_OutgoingCurrency'
      @Semantics.currencyCode: true
      FinancialTransactionTable.wgschft1                                                             as FinInstrumentOutgoingCurrency,
      @ObjectModel.foreignKey.association: '_IncomingCurrency'
      @Semantics.currencyCode: true
      FinancialTransactionTable.wgschft2                                                             as FinInstrumentIncomingCurrency,
      @ObjectModel.foreignKey.association: '_TradedCurrency'
      @Semantics.currencyCode: true
      FinancialTransactionTable.traded_currency                                                      as TradedCurrency,
      @ObjectModel.foreignKey.association: '_SecurityClass'
      cast(FinancialTransactionTable.ranl     as ftr_gen_security_class preserving type)             as SecurityClass,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'InternationalSecuritiesIdnNmbr'
      FinancialTransactionTable.isin                                                                 as SecurityClassIntlScrtyIdnNmbr,
      FinancialTransactionTable.cfi_code                                                             as ClassificationOfFinInstr,
      @ObjectModel.foreignKey.association: '_SecurityAccount'
      cast(FinancialTransactionTable.rldepo   as ftr_gen_security_account preserving type)           as SecurityAccount,
      @ObjectModel.foreignKey.association: '_FuturesAccount'
      FinancialTransactionTable.posacc                                                               as FuturesAccount,

      @ObjectModel.foreignKey.association: '_CentralClearingOption'
      FinancialTransactionTable.clearing_option                                                      as FinTransCentralClearingOption,
      @ObjectModel.foreignKey.association: '_CentralClearingStatus'
      FinancialTransactionTable.clearing_status                                                      as FinTransCentralClearingStatus,
      FinancialTransactionTable.clearing_date                                                        as FinTransCentralClearingDate,
      FinancialTransactionTable.clear_date_act                                                       as FinTransCntrlClrgActualDate,
      //foreign key association cannot be used as central clearing account has key UUID
      //@ObjectModel.foreignKey.association: '_CentralClearingAccount'
      FinancialTransactionTable.ext_account                                                          as CentralClearingAccount,
      FinancialTransactionTable.risk_mitigating                                                      as FinTransIsRiskMitigating,

      //field should be not provided, this should be part of activities
      cast(FinancialTransactionTable.rfhazul as ftr_gen_fin_instr_last_act_act preserving type)      as FinInstrLastActiveActivity,
      //field should be not provided, this is filled inconsistent; alternative provide end date of last activity
      FinancialTransactionTable.delfz                                                                as TermEndDate,

      case FinancialTransactionTable.amtinput
        when '1' then cast ('S' as ttm_fx_buy_sell)
        when '2' then cast ('B' as ttm_fx_buy_sell)
      end                                                                                            as TrsyTradedAmountBuySellCode,

      FinancialTransactionTable.fb_segment                                                           as Segment,
      FinancialTransactionTable.behalf_of_company                                                    as OnBehalfOfCompany,

      FinancialTransactionTable.mic                                                                  as MarketIdentifierCode,
      FinancialTransactionTable.srndng                                                               as FinTransRoundingCategory,
      FinancialTransactionTable.rcomvalcl                                                            as FinTransGeneralValuationClass,
      FinancialTransactionTable.fund                                                                 as Fund,
      FinancialTransactionTable.grant_nbr                                                            as GrantID,
      FinancialTransactionTable.tbegru                                                               as FinTransAuthorizationGroup,
      FinancialTransactionTable.bupla                                                                as BusinessPlace,
      FinancialTransactionTable.fkber                                                                as FunctionalArea,
      FinancialTransactionTable.custom_diff_term_1                                                   as TrsyPosCustomDiffntnTerm1,
      FinancialTransactionTable.custom_diff_term_2                                                   as TrsyPosCustomDiffntnTerm2,
      FinancialTransactionTable.custom_diff_term_3                                                   as TrsyPosCustomDiffntnTerm3,
      FinancialTransactionTable.custom_diff_term_4                                                   as TrsyPosCustomDiffntnTerm4,
      FinancialTransactionTable.custom_diff_term_5                                                   as TrsyPosCustomDiffntnTerm5,

      FinancialTransactionTable.upi                                                                  as UniqueProductIdentifier,
      FinancialTransactionTable.isin                                                                 as InternationalSecuritiesIdnNmbr,
      FinancialTransactionTable.rtn                                                                  as ReportTrackingNumber,
      
      FinancialTransactionTable.rgatt                                                                as FinTransOptionNumber,

      //exposed dimensions, containing for example text fields
      _CompanyCode,
      _ContractType,
      _FinancialInstrProdCat,
      _FinancialInstrProdType,
      _FinInstrTransCat,
      _FinancialInstrTransType,
      _ProcessingCategory,
      _NoticePeriodUnit,
      _Calendar,
      _Calendar2,
      _Counterparty,
      _Guarantor,
      _Portfolio,
      _Assignment,
      _Reference,
      _Characteristics,
      _ValuationClass,
      _ControllingArea,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_CostCenter_2'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  '_CostCenter_2'
      _CostCenter,
      _CostCenter_2,
      _BusinessArea,
      _TreasuryHedgingClassfctn,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_ProfitCenter_2'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  '_ProfitCenter_2'
      _ProfitCenter,
      _ProfitCenter_2,
      _WBSElement,
      _FacilityCompanyCode,
      _Status,
      _ReleaseStatus,
      _Currency,
      _OutgoingCurrency,
      _IncomingCurrency,
      _TradedCurrency,
      _SecurityClass,
      _SecurityAccount,
      _FuturesAccount,
      _CentralClearingOption,
      _CentralClearingStatus,
      _CentralClearingAccount,

      //exposed associations for VDM
      _ContractActivity,
      _CurrentActivity,
      _Security,
      _Interest,
      _Nominal,
      _TabActivity,
      _TabFlow,
      _TabCondition,

      //should not be used anymore, instead use _CurrentActivity
      _LetterOfCredit,
      _ReferenceItem
}
```
