---
name: I_FINANCIALTRANSACTIONDEX
description: Financialtransactiondex
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
  - data-extraction
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_FINANCIALTRANSACTIONDEX

**Financialtransactiondex**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CompanyCode` | `FiancialTransaction.CompanyCode` |
| key `FinancialTransaction` | `FiancialTransaction.FinancialTransaction` |
| `FinTransCreationDate` | `FiancialTransaction.FinTransCreationDate` |
| `FinTransCreationTime` | `FiancialTransaction.FinTransCreationTime` |
| `LastChangeDate` | `FiancialTransaction.LastChangeDate` |
| `FinInstrumentLastChangedTime` | `FiancialTransaction.FinInstrumentLastChangedTime` |
| `TreasuryContractType` | `FiancialTransaction.TreasuryContractType` |
| `FinancialInstrProductCategory` | `FiancialTransaction.FinancialInstrProductCategory` |
| `FinancialInstrumentProductType` | `FiancialTransaction.FinancialInstrumentProductType` |
| `FinInstrTransactionCategory` | `FiancialTransaction.FinInstrTransactionCategory` |
| `FinancialInstrTransactionType` | `FiancialTransaction.FinancialInstrTransactionType` |
| `TermStartDate` | `FiancialTransaction.TermStartDate` |
| `FinTransNoticePeriod` | `FiancialTransaction.FinTransNoticePeriod` |
| `FinTransNoticePeriodUnit` | `FiancialTransaction.FinTransNoticePeriodUnit` |
| `FinTransFactoryCalendar1` | `FiancialTransaction.FinTransFactoryCalendar1` |
| `FinTransFactoryCalendar2` | `FiancialTransaction.FinTransFactoryCalendar2` |
| `Counterparty` | `FiancialTransaction.Counterparty` |
| `FinancialInstrumentGuarantor` | `FiancialTransaction.FinancialInstrumentGuarantor` |
| `Portfolio` | `FiancialTransaction.Portfolio` |
| `TreasuryFinanceProject` | `FiancialTransaction.TreasuryFinanceProject` |
| `FinancialInstrumentAssignment` | `FiancialTransaction.FinancialInstrumentAssignment` |
| `FinancialInstrumentReference` | `FiancialTransaction.FinancialInstrumentReference` |
| `FinancialInstrCharacteristic` | `FiancialTransaction.FinancialInstrCharacteristic` |
| `ControllingArea` | `_CompanyCode.ControllingArea` |
| `CostCenter` | `FiancialTransaction.CostCenter` |
| `HedgingClassification` | `FiancialTransaction.HedgingClassification` |
| `HedgeRequestIdentifier` | `FiancialTransaction.HedgeRequestIdentifier` |
| `ProfitCenter` | `FiancialTransaction.ProfitCenter` |
| `WBSElementInternalID` | `FiancialTransaction.WBSElementInternalID` |
| `TreasuryFacilityCompanyCode` | `FiancialTransaction.TreasuryFacilityCompanyCode` |
| `TreasuryFacility` | `FiancialTransaction.TreasuryFacility` |
| `FinancialInstrumentStatus` | `FiancialTransaction.FinancialInstrumentStatus` |
| `FinTransReleaseStatus` | `FiancialTransaction.FinTransReleaseStatus` |
| `TransactionCurrency` | `FiancialTransaction.TransactionCurrency` |
| `FinInstrumentOutgoingCurrency` | `FiancialTransaction.FinInstrumentOutgoingCurrency` |
| `FinInstrumentIncomingCurrency` | `FiancialTransaction.FinInstrumentIncomingCurrency` |
| `TradedCurrency` | `FiancialTransaction.TradedCurrency` |
| `SecurityClass` | `FiancialTransaction.SecurityClass` |
| `ClassificationOfFinInstr` | `FiancialTransaction.ClassificationOfFinInstr` |
| `SecurityAccount` | `FiancialTransaction.SecurityAccount` |
| `FinTransIsRiskMitigating` | `FiancialTransaction.FinTransIsRiskMitigating` |
| `FinInstrLastActiveActivity` | `FiancialTransaction.FinInstrLastActiveActivity` |
| `TrsyTradedAmountBuySellCode` | `FiancialTransaction.TrsyTradedAmountBuySellCode` |
| `Segment` | `FiancialTransaction.Segment` |
| `OnBehalfOfCompany` | `FiancialTransaction.OnBehalfOfCompany` |
| `MarketIdentifierCode` | `FiancialTransaction.MarketIdentifierCode` |
| `FinTransRoundingCategory` | `FiancialTransaction.FinTransRoundingCategory` |
| `FinTransGeneralValuationClass` | `FiancialTransaction.FinTransGeneralValuationClass` |
| `Fund` | `FiancialTransaction.Fund` |
| `GrantID` | `FiancialTransaction.GrantID` |
| `FinTransAuthorizationGroup` | `FiancialTransaction.FinTransAuthorizationGroup` |
| `BusinessPlace` | `FiancialTransaction.BusinessPlace` |
| `FunctionalArea` | `FiancialTransaction.FunctionalArea` |
| `TrsyPosCustomDiffntnTerm1` | `FiancialTransaction.TrsyPosCustomDiffntnTerm1` |
| `TrsyPosCustomDiffntnTerm2` | `FiancialTransaction.TrsyPosCustomDiffntnTerm2` |
| `TrsyPosCustomDiffntnTerm3` | `FiancialTransaction.TrsyPosCustomDiffntnTerm3` |
| `TrsyPosCustomDiffntnTerm4` | `FiancialTransaction.TrsyPosCustomDiffntnTerm4` |
| `TrsyPosCustomDiffntnTerm5` | `FiancialTransaction.TrsyPosCustomDiffntnTerm5` |
| `UniqueProductIdentifier` | `FiancialTransaction.UniqueProductIdentifier` |
| `InternationalSecuritiesIdnNmbr` | `FiancialTransaction.InternationalSecuritiesIdnNmbr` |
| `ReportTrackingNumber` | `FiancialTransaction.ReportTrackingNumber` |
| `FinTransOptionNumber` | `FiancialTransaction.FinTransOptionNumber` |
| `FinancialInstrActivityCategory` | `CurrentActivity.FinancialInstrActivityCategory` |
| `TermEndDate` | `CurrentActivity.TermEndDate` |
| `FinTransTermCategory` | `CurrentActivity.FinTransTermCategory` |
| `FinTransTermStartEndInclusive` | `CurrentActivity.FinTransTermStartEndInclusive` |
| `FinTransNoticeDate` | `CurrentActivity.FinTransNoticeDate` |
| `FinTransActyConclusionDate` | `CurrentActivity.FinTransActyConclusionDate` |
| `FinTransActyConclusionTime` | `CurrentActivity.FinTransActyConclusionTime` |
| `FinTransActyConclusionTimeZone` | `CurrentActivity.FinTransActyConclusionTimeZone` |
| `FinTransRolloverDate` | `CurrentActivity.FinTransRolloverDate` |
| `FinTransExerciseDate` | `CurrentActivity.FinTransExerciseDate` |
| `FinTransOrderValidityEndDate` | `CurrentActivity.FinTransOrderValidityEndDate` |
| `FinTransFixingDate` | `CurrentActivity.FinTransFixingDate` |
| `ForeignExchangeFixingReference` | `CurrentActivity.ForeignExchangeFixingReference` |
| `Trader` | `CurrentActivity.Trader` |
| `FinancialInstrContactPerson` | `CurrentActivity.FinancialInstrContactPerson` |
| `FinInstrExternalReference` | `CurrentActivity.FinInstrExternalReference` |
| `TreasuryReversalReason` | `CurrentActivity.TreasuryReversalReason` |
| `LeadingCurrency` | `CurrentActivity.LeadingCurrency` |
| `FollowingCurrency` | `CurrentActivity.FollowingCurrency` |
| `ExchangeRate` | `CurrentActivity.ExchangeRate` |
| `SpotExchangeRate` | `CurrentActivity.SpotExchangeRate` |
| `SwapExchangeRate` | `CurrentActivity.SwapExchangeRate` |
| `LiquidityEffectValue` | `CurrentActivity.LiquidityEffectValue` |
| `CurrencyPair` | `CurrentActivity.CurrencyPair` |
| `EffectiveInterestRate` | `CurrentActivity.EffectiveInterestRate` |
| `EffectiveInterestMethod` | `CurrentActivity.EffectiveInterestMethod` |
| `LetterOfCredit` | `CurrentActivity.LetterOfCredit` |
| `TreasuryApplicant` | `CurrentActivity.TreasuryApplicant` |
| `TreasuryBeneficiary` | `CurrentActivity.TreasuryBeneficiary` |
| `TrsyMnllyEnteredBnfcyName` | `CurrentActivity.TrsyMnllyEnteredBnfcyName` |
| `TrsyMnllyEnteredApplcntName` | `CurrentActivity.TrsyMnllyEnteredApplcntName` |
| `TreasuryAdvisingBank` | `CurrentActivity.TreasuryAdvisingBank` |
| `TreasuryIssuingBank` | `CurrentActivity.TreasuryIssuingBank` |
| `BankGuaranteeNumber` | `CurrentActivity.BankGuaranteeNumber` |
| `BankGuaranteeType` | `CurrentActivity.BankGuaranteeType` |
| `_CompanyCode` | *Association* |
| `_ContractType` | *Association* |
| `_FinancialInstrProdCat` | *Association* |
| `_FinancialInstrProdType` | *Association* |
| `_FinInstrTransCat` | *Association* |
| `_FinancialInstrTransType` | *Association* |
| `_NoticePeriodUnit` | *Association* |
| `_Calendar` | *Association* |
| `_Calendar2` | *Association* |
| `_Counterparty` | *Association* |
| `_Guarantor` | *Association* |
| `_Portfolio` | *Association* |
| `_ControllingArea` | *Association* |
| `_CostCenter` | *Association* |
| `_ProfitCenter` | *Association* |
| `_Assignment` | *Association* |
| `_Reference` | *Association* |
| `_Characteristics` | *Association* |
| `_GeneralValuationClass` | *Association* |
| `_TreasuryHedgingClassfctn` | *Association* |
| `_WBSElement` | *Association* |
| `_FacilityCompanyCode` | *Association* |
| `_Status` | *Association* |
| `_ReleaseStatus` | *Association* |
| `_Currency` | *Association* |
| `_OutgoingCurrency` | *Association* |
| `_IncomingCurrency` | *Association* |
| `_TradedCurrency` | *Association* |
| `_SecurityClass` | *Association* |
| `_SecurityAccount` | *Association* |
| `_TimeZone` | *Association* |
| `_FixingReference` | *Association* |
| `_ReversalReason` | *Association* |
| `_LeadingCurrency` | *Association* |
| `_FollowingCurrency` | *Association* |
| `_Applicant` | *Association* |
| `_Beneficiary` | *Association* |
| `_AdvisingBank` | *Association* |
| `_IssuingBank` | *Association* |
| `_ActivityCategory` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_ContractType` | `I_TreasuryContractType` | [0..1] |
| `_FinancialInstrProdCat` | `I_FinancialInstrProdCat` | [0..1] |
| `_FinancialInstrProdType` | `I_FinancialinstrProductType` | [0..1] |
| `_FinInstrTransCat` | `I_FinInstrTransCat` | [0..1] |
| `_FinancialInstrTransType` | `I_FinancialInstrTransType` | [1..1] |
| `_NoticePeriodUnit` | `I_FinTransNoticePeriodUnit` | [0..1] |
| `_Calendar` | `I_FactoryCalendar` | [0..1] |
| `_Calendar2` | `I_FactoryCalendar` | [0..1] |
| `_Counterparty` | `I_BusinessPartner` | [1..1] |
| `_Guarantor` | `I_BusinessPartner` | [0..1] |
| `_Portfolio` | `I_TreasuryPortfolio` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_CostCenter` | `I_CostCenter` | [0..*] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_Assignment` | `I_FinancialInstrAssignment` | [0..1] |
| `_Reference` | `I_FinancialInstrReference` | [0..1] |
| `_Characteristics` | `I_FinancialInstrCharacteristic` | [0..1] |
| `_GeneralValuationClass` | `I_Financialinstrvaluationclass` | [0..1] |
| `_TreasuryHedgingClassfctn` | `I_TreasuryHedgingClassfctn` | [0..1] |
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
| `_TimeZone` | `I_TimeZone` | [0..1] |
| `_FixingReference` | `I_FXFixingReference` | [0..1] |
| `_ReversalReason` | `I_TreasuryReversalReason` | [0..1] |
| `_LeadingCurrency` | `I_Currency` | [0..1] |
| `_FollowingCurrency` | `I_Currency` | [0..1] |
| `_Applicant` | `I_BusinessPartner` | [0..1] |
| `_Beneficiary` | `I_BusinessPartner` | [0..1] |
| `_AdvisingBank` | `I_BusinessPartner` | [0..1] |
| `_IssuingBank` | `I_BusinessPartner` | [0..1] |
| `_ActivityCategory` | `I_FinInstrActivityCategory` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Financial Transaction'
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel: {
  usageType: {
    dataClass: #MIXED,
    serviceQuality: #C,
    sizeCategory: #L
  },
  supportedCapabilities: [#ANALYTICAL_DIMENSION,  #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE , #EXTRACTION_DATA_SOURCE],
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'FinancialTransaction',
  sapObjectNodeType.name: 'FinancialTransaction'

}
@Analytics: {
  dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
          mapping:
            [
              {
                  role: #MAIN,
                  table: 'vtbfha',
                  viewElement: [ 'CompanyCode', 'FinancialTransaction'],
                  tableElement: [ 'bukrs', 'rfha' ]
              },
              {
                  role: #LEFT_OUTER_TO_ONE_JOIN,
                  table: 't001',
                  viewElement: [ 'CompanyCode'],
                  tableElement: [ 'bukrs' ]
              },
              {
                  role: #LEFT_OUTER_TO_ONE_JOIN,
                  table: 'tka02',
                  viewElement: [ 'CompanyCode'],
                  tableElement: [ 'bukrs' ]
              },
              {
                  role: #LEFT_OUTER_TO_ONE_JOIN,
                  table: 'vtbfhazu',
                  viewElement: [ 'CompanyCode', 'FinancialTransaction', 'FinInstrLastActiveActivity'],
                  tableElement: [ 'bukrs', 'rfha', 'rfhazu' ]
              }
          ]
        }
  },
  dataCategory: #DIMENSION,
  internalName:#LOCAL
}
@Metadata.allowExtensions:true
@VDM.viewType: #COMPOSITE
define view entity I_FinancialTransactionDEX
  as select from           I_FinancialTransaction as FiancialTransaction
    left outer to one join I_FinTransActivity     as CurrentActivity on  FiancialTransaction.CompanyCode                = CurrentActivity.CompanyCode
                                                                     and FiancialTransaction.FinancialTransaction       = CurrentActivity.FinancialTransaction
                                                                     and FiancialTransaction.FinInstrLastActiveActivity = CurrentActivity.FinancialInstrumentActivity

  association [1..1] to I_CompanyCode                  as _CompanyCode              on  $projection.CompanyCode = _CompanyCode.CompanyCode

  association [0..1] to I_TreasuryContractType         as _ContractType             on  $projection.TreasuryContractType = _ContractType.TreasuryContractType

  association [0..1] to I_FinancialInstrProdCat        as _FinancialInstrProdCat    on  $projection.FinancialInstrProductCategory = _FinancialInstrProdCat.FinancialInstrProductCategory

  association [0..1] to I_FinancialinstrProductType    as _FinancialInstrProdType   on  $projection.FinancialInstrumentProductType = _FinancialInstrProdType.FinancialInstrumentProductType

  association [0..1] to I_FinInstrTransCat             as _FinInstrTransCat         on  $projection.FinancialInstrProductCategory = _FinInstrTransCat.FinancialInstrProductCategory
                                                                                    and $projection.FinInstrTransactionCategory   = _FinInstrTransCat.FinInstrTransactionCategory

  association [1..1] to I_FinancialInstrTransType      as _FinancialInstrTransType  on  $projection.FinancialInstrTransactionType  = _FinancialInstrTransType.FinancialInstrTransactionType
                                                                                    and $projection.FinancialInstrumentProductType = _FinancialInstrTransType.FinancialInstrumentProductType

  association [0..1] to I_FinTransNoticePeriodUnit     as _NoticePeriodUnit         on  $projection.FinTransNoticePeriodUnit = _NoticePeriodUnit.FinTransNoticePeriodUnit

  association [0..1] to I_FactoryCalendar              as _Calendar                 on  $projection.FinTransFactoryCalendar1 = _Calendar.FactoryCalendar

  association [0..1] to I_FactoryCalendar              as _Calendar2                on  $projection.FinTransFactoryCalendar2 = _Calendar2.FactoryCalendar

  association [1..1] to I_BusinessPartner              as _Counterparty             on  $projection.Counterparty = _Counterparty.BusinessPartner

  association [0..1] to I_BusinessPartner              as _Guarantor                on  $projection.FinancialInstrumentGuarantor = _Guarantor.BusinessPartner

  association [0..1] to I_TreasuryPortfolio            as _Portfolio                on  $projection.CompanyCode = _Portfolio.CompanyCode
                                                                                    and $projection.Portfolio   = _Portfolio.Portfolio

  association [0..1] to I_ControllingArea              as _ControllingArea          on  $projection.controllingarea = _ControllingArea.ControllingArea

  association [0..*] to I_CostCenter                   as _CostCenter               on  $projection.controllingarea = _CostCenter.ControllingArea
                                                                                    and $projection.CostCenter      = _CostCenter.CostCenter

  association [0..*] to I_ProfitCenter                 as _ProfitCenter             on  $projection.controllingarea = _ProfitCenter.ControllingArea
                                                                                    and $projection.ProfitCenter    = _ProfitCenter.ProfitCenter

  association [0..1] to I_FinancialInstrAssignment     as _Assignment               on  $projection.FinancialInstrumentAssignment = _Assignment.FinancialInstrumentAssignment

  association [0..1] to I_FinancialInstrReference      as _Reference                on  $projection.FinancialInstrumentReference = _Reference.FinancialInstrumentReference

  association [0..1] to I_FinancialInstrCharacteristic as _Characteristics          on  $projection.FinancialInstrCharacteristic = _Characteristics.FinancialInstrCharacteristic

  association [0..1] to I_Financialinstrvaluationclass as _GeneralValuationClass    on  $projection.FinTransGeneralValuationClass = _GeneralValuationClass.FinancialInstrValuationClass

  association [0..1] to I_TreasuryHedgingClassfctn     as _TreasuryHedgingClassfctn on  $projection.HedgingClassification = _TreasuryHedgingClassfctn.HedgingClassification

  association [0..1] to I_WBSElementBasicData          as _WBSElement               on  $projection.WBSElementInternalID = _WBSElement.WBSElementInternalID

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

  association [0..1] to I_TimeZone                     as _TimeZone                 on  $projection.FinTransActyConclusionTimeZone = _TimeZone.TimeZoneID
  
  association [0..1] to I_FXFixingReference            as _FixingReference          on  $projection.ForeignExchangeFixingReference = _FixingReference.ForeignExchangeFixingReference
  
  association [0..1] to I_TreasuryReversalReason       as _ReversalReason           on  $projection.TreasuryReversalReason = _ReversalReason.TreasuryReversalReason
  
  association [0..1] to I_Currency                     as _LeadingCurrency          on  $projection.LeadingCurrency = _LeadingCurrency.Currency
  
  association [0..1] to I_Currency                     as _FollowingCurrency        on  $projection.FollowingCurrency = _FollowingCurrency.Currency
  
  association [0..1] to I_BusinessPartner              as _Applicant              on  $projection.TreasuryApplicant = _Applicant.BusinessPartner
  
  association [0..1] to I_BusinessPartner              as _Beneficiary            on  $projection.TreasuryBeneficiary = _Beneficiary.BusinessPartner
  
  association [0..1] to I_BusinessPartner              as _AdvisingBank           on  $projection.TreasuryAdvisingBank = _AdvisingBank.BusinessPartner
  
  association [0..1] to I_BusinessPartner              as _IssuingBank            on  $projection.TreasuryIssuingBank = _IssuingBank.BusinessPartner
  
  association [0..1] to I_FinInstrActivityCategory     as _ActivityCategory         on  $projection.FinancialInstrProductCategory  = _ActivityCategory.FinancialInstrProductCategory
                                                                                    and $projection.FinInstrTransactionCategory    = _ActivityCategory.FinInstrTransactionCategory
                                                                                    and $projection.FinancialInstrActivityCategory = _ActivityCategory.FinancialInstrActivityCategory
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key FiancialTransaction.CompanyCode,
  key FiancialTransaction.FinancialTransaction,
      FiancialTransaction.FinTransCreationDate,
      FiancialTransaction.FinTransCreationTime,
      FiancialTransaction.LastChangeDate,
      FiancialTransaction.FinInstrumentLastChangedTime,
      @ObjectModel.foreignKey.association: '_ContractType'
      FiancialTransaction.TreasuryContractType,
      @ObjectModel.foreignKey.association: '_FinancialInstrProdCat'
      FiancialTransaction.FinancialInstrProductCategory,
      @ObjectModel.foreignKey.association: '_FinancialInstrProdType'
      FiancialTransaction.FinancialInstrumentProductType,
      @ObjectModel.foreignKey.association: '_FinInstrTransCat'
      FiancialTransaction.FinInstrTransactionCategory,
      @ObjectModel.foreignKey.association: '_FinancialInstrTransType'
      FiancialTransaction.FinancialInstrTransactionType,
      FiancialTransaction.TermStartDate,
      //FiancialTransaction.TermStartDateIsInclusive,
      //FiancialTransaction.TermEndDate,
      FiancialTransaction.FinTransNoticePeriod,
      @ObjectModel.foreignKey.association: '_NoticePeriodUnit'
      FiancialTransaction.FinTransNoticePeriodUnit,
      @ObjectModel.foreignKey.association: '_Calendar'
      FiancialTransaction.FinTransFactoryCalendar1,
      @ObjectModel.foreignKey.association: '_Calendar2'
      FiancialTransaction.FinTransFactoryCalendar2,
      @ObjectModel.foreignKey.association: '_Counterparty'
      FiancialTransaction.Counterparty,
      @ObjectModel.foreignKey.association: '_Guarantor'
      FiancialTransaction.FinancialInstrumentGuarantor,
      @ObjectModel.foreignKey.association: '_Portfolio'
      FiancialTransaction.Portfolio,
      FiancialTransaction.TreasuryFinanceProject,
      @ObjectModel.foreignKey.association: '_Assignment'
      FiancialTransaction.FinancialInstrumentAssignment,
      @ObjectModel.foreignKey.association: '_Reference'
      FiancialTransaction.FinancialInstrumentReference,
      @ObjectModel.foreignKey.association: '_Characteristics'
      FiancialTransaction.FinancialInstrCharacteristic,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      _CompanyCode.ControllingArea,
      @ObjectModel.foreignKey.association: '_CostCenter'
      FiancialTransaction.CostCenter,
      @ObjectModel.foreignKey.association: '_TreasuryHedgingClassfctn'
      FiancialTransaction.HedgingClassification,
      FiancialTransaction.HedgeRequestIdentifier,
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      FiancialTransaction.ProfitCenter,
      @ObjectModel.foreignKey.association: '_WBSElement'
      FiancialTransaction.WBSElementInternalID,
      @ObjectModel.foreignKey.association: '_FacilityCompanyCode'
      FiancialTransaction.TreasuryFacilityCompanyCode,
      FiancialTransaction.TreasuryFacility,
      @ObjectModel.foreignKey.association: '_Status'
      FiancialTransaction.FinancialInstrumentStatus,
      @ObjectModel.foreignKey.association: '_ReleaseStatus'
      FiancialTransaction.FinTransReleaseStatus,
      @ObjectModel.foreignKey.association: '_Currency'
      FiancialTransaction.TransactionCurrency,
      @ObjectModel.foreignKey.association: '_OutgoingCurrency'
      FiancialTransaction.FinInstrumentOutgoingCurrency,
      @ObjectModel.foreignKey.association: '_IncomingCurrency'
      FiancialTransaction.FinInstrumentIncomingCurrency,
      @ObjectModel.foreignKey.association: '_TradedCurrency'
      FiancialTransaction.TradedCurrency,
      @ObjectModel.foreignKey.association: '_SecurityClass'
      FiancialTransaction.SecurityClass,
      FiancialTransaction.ClassificationOfFinInstr,
      @ObjectModel.foreignKey.association: '_SecurityAccount'
      FiancialTransaction.SecurityAccount,
      FiancialTransaction.FinTransIsRiskMitigating,
      //field should be not provided, this should be part of activities
      FiancialTransaction.FinInstrLastActiveActivity,
      FiancialTransaction.TrsyTradedAmountBuySellCode,
      FiancialTransaction.Segment,
      FiancialTransaction.OnBehalfOfCompany,
      FiancialTransaction.MarketIdentifierCode,
      FiancialTransaction.FinTransRoundingCategory,
      @ObjectModel.foreignKey.association: '_GeneralValuationClass'
      FiancialTransaction.FinTransGeneralValuationClass,
      FiancialTransaction.Fund,
      FiancialTransaction.GrantID,
      FiancialTransaction.FinTransAuthorizationGroup,
      FiancialTransaction.BusinessPlace,
      FiancialTransaction.FunctionalArea,
      FiancialTransaction.TrsyPosCustomDiffntnTerm1,
      FiancialTransaction.TrsyPosCustomDiffntnTerm2,
      FiancialTransaction.TrsyPosCustomDiffntnTerm3,
      FiancialTransaction.TrsyPosCustomDiffntnTerm4,
      FiancialTransaction.TrsyPosCustomDiffntnTerm5,
      FiancialTransaction.UniqueProductIdentifier,
      FiancialTransaction.InternationalSecuritiesIdnNmbr,
      FiancialTransaction.ReportTrackingNumber,
      FiancialTransaction.FinTransOptionNumber,
  
  
      @ObjectModel.foreignKey.association: '_ActivityCategory'
      CurrentActivity.FinancialInstrActivityCategory,
      CurrentActivity.TermEndDate,
      CurrentActivity.FinTransTermCategory,
      CurrentActivity.FinTransTermStartEndInclusive,
      CurrentActivity.FinTransNoticeDate,
      CurrentActivity.FinTransActyConclusionDate,
      CurrentActivity.FinTransActyConclusionTime,
      @ObjectModel.foreignKey.association: '_TimeZone'
      CurrentActivity.FinTransActyConclusionTimeZone,
      CurrentActivity.FinTransRolloverDate,
      CurrentActivity.FinTransExerciseDate,
      CurrentActivity.FinTransOrderValidityEndDate,
      CurrentActivity.FinTransFixingDate,
      @ObjectModel.foreignKey.association: '_FixingReference'
      CurrentActivity.ForeignExchangeFixingReference,
      CurrentActivity.Trader,
      CurrentActivity.FinancialInstrContactPerson,
      
      CurrentActivity.FinInstrExternalReference,
      @ObjectModel.foreignKey.association: '_ReversalReason'
      CurrentActivity.TreasuryReversalReason,
      @ObjectModel.foreignKey.association: '_LeadingCurrency'
      CurrentActivity.LeadingCurrency,
      @ObjectModel.foreignKey.association: '_FollowingCurrency'
      CurrentActivity.FollowingCurrency,
      CurrentActivity.ExchangeRate,
      CurrentActivity.SpotExchangeRate,
      CurrentActivity.SwapExchangeRate,
      CurrentActivity.LiquidityEffectValue,
      CurrentActivity.CurrencyPair,
      CurrentActivity.EffectiveInterestRate,
      CurrentActivity.EffectiveInterestMethod,
      CurrentActivity.LetterOfCredit,
      @ObjectModel.foreignKey.association: '_Applicant'
      CurrentActivity.TreasuryApplicant,
      @ObjectModel.foreignKey.association: '_Beneficiary'
      CurrentActivity.TreasuryBeneficiary,
      CurrentActivity.TrsyMnllyEnteredBnfcyName,
      CurrentActivity.TrsyMnllyEnteredApplcntName,
      @ObjectModel.foreignKey.association: '_AdvisingBank'
      CurrentActivity.TreasuryAdvisingBank,
      @ObjectModel.foreignKey.association: '_IssuingBank'
      CurrentActivity.TreasuryIssuingBank,
      CurrentActivity.BankGuaranteeNumber,
      CurrentActivity.BankGuaranteeType,


      //exposed dimensions, containing for example text fields
      _CompanyCode,
      _ContractType,
      _FinancialInstrProdCat,
      _FinancialInstrProdType,
      _FinInstrTransCat,
      _FinancialInstrTransType,
      _NoticePeriodUnit,
      _Calendar,
      _Calendar2,
      _Counterparty,
      _Guarantor,
      _Portfolio,
      _Assignment,
      _Reference,
      _ControllingArea,
      _CostCenter,
      _ProfitCenter,
      _Characteristics,
      _GeneralValuationClass,
      _TreasuryHedgingClassfctn,
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
      _ActivityCategory,
      _TimeZone,
      _FixingReference,
      _ReversalReason,
      _LeadingCurrency,
      _FollowingCurrency,
      _Applicant,
      _Beneficiary,
      _AdvisingBank,
      _IssuingBank
}
```
