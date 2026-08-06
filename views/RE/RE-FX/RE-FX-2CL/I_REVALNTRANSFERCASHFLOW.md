---
name: I_REVALNTRANSFERCASHFLOW
description: Revalntransfercashflow
app_component: RE-FX-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - interface-view
  - component:RE-FX-2CL
  - lob:Other
---
# I_REVALNTRANSFERCASHFLOW

**Revalntransfercashflow**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `InternalRealEstateNumber` | `REValuationCashflow.InternalRealEstateNumber` |
| key `REValuationRuleUUID` | `REValuationCashflow.REValuationRuleUUID` |
| key `REValuationProcessUUID` | `REValuationCashflow.REValuationProcessUUID` |
| key `REValuationCashFlowRecordUUID` | `REValuationCashflow.REValuationCashFlowRecordUUID` |
| `RETermNumber` | `REValuationCashflow.RETermNumber` |
| `REValuationRule` | `REValuationCashflow.REValuationRule` |
| `RECashFlowType` | `REValuationCashflow.RECashFlowType` |
| `CashFlowItemOrigin` | `REValuationCashflow.CashFlowItemOrigin` |
| `REStatusObject` | `REValuationCashflow.REStatusObject` |
| `REStatusObjectAsset` | `REValuationCashflow.REStatusObjectAsset` |
| `REConditionUUID` | `REValuationCashflow.REConditionUUID` |
| `ValidityStartDate` | `REValuationCashflow.ValidityStartDate` |
| `CalculationPeriodStartDate` | `REValuationCashflow.CalculationPeriodStartDate` |
| `CalculationPeriodEndDate` | `REValuationCashflow.CalculationPeriodEndDate` |
| `NumberOfDays` | `REValuationCashflow.NumberOfDays` |
| `REPositionDueDate` | `REValuationCashflow.REPositionDueDate` |
| `PaymentDueDate` | `REValuationCashflow.PaymentDueDate` |
| `CalculationDate` | `REValuationCashflow.CalculationDate` |
| `REConditionCurrency` | `REValuationCashflow.REConditionCurrency` |
| `REInterestRate` | `REValuationCashflow.REInterestRate` |
| `REValuationIsInitialCost` | `REValuationCashflow.REValuationIsInitialCost` |
| `REValuationIsLiabilityDiff` | `REValuationCashflow.REValuationIsLiabilityDiff` |
| `REIsDeferralAdjustment` | `REValuationCashflow.REIsDeferralAdjustment` |
| `REIsAssetRetirementObligation` | `REValuationCashflow.REIsAssetRetirementObligation` |
| `REValnIsCompleteRetirement` | `REValuationCashflow.REValnIsCompleteRetirement` |
| `REIsRetroActiveChange` | `REValuationCashflow.REIsRetroActiveChange` |
| `REValuationIsReduction` | `REValuationCashflow.REValuationIsReduction` |
| `REDocumentReferenceUUID` | `REValuationCashflow.REDocumentReferenceUUID` |
| `REDocumentReference2UUID` | `REValuationCashflow.REDocumentReference2UUID` |
| `REDocumentReference3UUID` | `REValuationCashflow.REDocumentReference3UUID` |
| `REDocumentReference4UUID` | `REValuationCashflow.REDocumentReference4UUID` |
| `CreatedByUser` | `REValuationCashflow.CreatedByUser` |
| `CreationDate` | `REValuationCashflow.CreationDate` |
| `CreationTime` | `REValuationCashflow.CreationTime` |
| `RESourceOfCreation` | `REValuationCashflow.RESourceOfCreation` |
| `LastChangedByUser` | `REValuationCashflow.LastChangedByUser` |
| `LastChangeDate` | `REValuationCashflow.LastChangeDate` |
| `LastChangeTime` | `REValuationCashflow.LastChangeTime` |
| `RESourceOfChange` | `REValuationCashflow.RESourceOfChange` |
| `IsReversed` | `REValuationCashflow.IsReversed` |
| `SplitCashFlowRecordUUID` | `REValuationCashflow.SplitCashFlowRecordUUID` |
| `RecordIsBasisForSplit` | `REValuationCashflow.RecordIsBasisForSplit` |
| `REValuationEngine` | `REValuationCashflow.REValuationEngine` |
| `RECashFlowPositionAmount` | `case when REValuationCashflow._REBookedFlowType.DebitCreditCode = 'H' then REValuationCashflow.RECashFlowPositionAmount * ( -1 ) else REValuationCashflow.RECashFlowPositionAmount end` |
| `RETaxType` | `REValuationCashflow.RETaxType` |
| `RETaxGroup` | `REValuationCashflow.RETaxGroup` |
| `TaxJurisdiction` | `REValuationCashflow.TaxJurisdiction` |
| `REIsConditionGrossAmount` | `REValuationCashflow.REIsConditionGrossAmount` |
| `TaxCountry` | `REValuationCashflow.TaxCountry` |
| `REFlowType` | `REValuationCashflow.REFlowType` |
| `REOriginalFlowType` | `REValuationCashflow.REOriginalFlowType` |
| `RERelshpOriglToFlowType` | `REValuationCashflow.RERelshpOriglToFlowType` |
| `CashFlowPostingStatus` | `REValuationCashflow.CashFlowPostingStatus` |
| `IsToBeArchived` | `REValuationCashflow.IsToBeArchived` |
| `REOriglDueDate` | `REValuationCashflow.REOriglDueDate` |
| `REConditionType` | `REValuationCashflow.REConditionType` |
| `PostingDate` | `REValuationCashflow.PostingDate` |
| `DocumentDate` | `REValuationCashflow.DocumentDate` |
| `ExchangeRateDate` | `REValuationCashflow.ExchangeRateDate` |
| `REReversalForUUID` | `REValuationCashflow.REReversalForUUID` |
| `REReversalByUUID` | `REValuationCashflow.REReversalByUUID` |
| `REFollowUpPostingUUID` | `REValuationCashflow.REFollowUpPostingUUID` |
| `REBookedFlowType` | `REValuationCashflow.REBookedFlowType` |
| `RERelshpBookedToFlowType` | `REValuationCashflow.RERelshpBookedToFlowType` |
| `RETaxCalcDate` | `REValuationCashflow.RETaxCalcDate` |
| `REModifiedDueDate` | `REValuationCashflow.REModifiedDueDate` |
| `RECalcDueDate` | `REValuationCashflow.RECalcDueDate` |
| `RECurrencyTranslationRule` | `REValuationCashflow.RECurrencyTranslationRule` |
| `REIsPostInConditionCurrency` | `REValuationCashflow.REIsPostInConditionCurrency` |
| `REPlndTranslationDate` | `REValuationCashflow.REPlndTranslationDate` |
| `REActlTranslationDate` | `REValuationCashflow.REActlTranslationDate` |
| `REOriglActlTranslationDate` | `REValuationCashflow.REOriglActlTranslationDate` |
| `REIsTranslationDateFrmCashFlow` | `REValuationCashflow.REIsTranslationDateFrmCashFlow` |
| `TaxCalculationProcedure` | `REValuationCashflow._REContract._CompanyCode._Country.TaxCalculationProcedure` |
| `_REValuationTerm` | *Association* |
| `_REValuationRule` | *Association* |
| `_RECashFlowType` | *Association* |
| `_RECurrencyTranslationRule` | *Association* |
| `_RERelevantProcessData` | *Association* |
| `_TaxJurisdictionCalcProcedure` | *Association* |
| `_TaxJurisdiction` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REValuationTerm` | `I_REValuationTerm` | [0..1] |
| `_REValuationRule` | `I_REValuationRule` | [0..1] |
| `_RECashFlowType` | `I_RECashFlowType` | [0..1] |
| `_RECurrencyTranslationRule` | `I_RECurrencyTranslationRule` | [0..1] |
| `_RERelevantProcessData` | `I_RERelevantValnProcessStep` | [0..1] |
| `_TaxJurisdictionCalcProcedure` | `I_TaxJurisCalcProcedure` | [0..1] |
| `_TaxJurisdiction` | `I_TaxJurisdiction` | [0..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IRECECFVAL'
@AccessControl: {
  authorizationCheck: #MANDATORY,
  privilegedAssociations: ['_ChangedByUser', '_CreatedByUser']
}
@EndUserText.label: 'Real Estate Valuation Cash Flow'
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@ObjectModel: {
  representativeKey: 'REValuationCashFlowRecordUUID',
  usageType: {
    dataClass: #MIXED,
    serviceQuality: #C,
    sizeCategory: #XL
  },
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #SQL_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE
  ],
  sapObjectNodeType.name: 'REValuationTransferCashFlow'
}
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@VDM.viewType: #COMPOSITE
define view entity I_REValnTransferCashFlow
  as select from I_REValuationCashFlow       as REValuationCashflow
    inner join   I_RERelevantValnProcessStep as _RERelevantProcess on  REValuationCashflow.REValuationProcessUUID   = _RERelevantProcess.REValuationProcessUUID
                                                                   and REValuationCashflow.InternalRealEstateNumber = _RERelevantProcess.InternalRealEstateNumber
                                                                   and REValuationCashflow.REValuationRuleUUID      = _RERelevantProcess.REValuationRuleUUID

  association [0..1] to I_REValuationTerm           as _REValuationTerm              on  $projection.InternalRealEstateNumber = _REValuationTerm.InternalRealEstateNumber
                                                                                     and $projection.REValuationRuleUUID      = _REValuationTerm.REValuationRuleUUID
  association [0..1] to I_REValuationRule           as _REValuationRule              on  $projection.REValuationRule = _REValuationRule.REValuationRule
  association [0..1] to I_RECashFlowType            as _RECashFlowType               on  $projection.RECashFlowType = _RECashFlowType.RECashFlowType
  association [0..1] to I_RECurrencyTranslationRule as _RECurrencyTranslationRule    on  $projection.RECurrencyTranslationRule = _RECurrencyTranslationRule.RECurrencyTranslationRule
  association [0..1] to I_RERelevantValnProcessStep as _RERelevantProcessData        on  REValuationCashflow.REValuationProcessUUID   = _RERelevantProcessData.REValuationProcessUUID
                                                                                     and REValuationCashflow.InternalRealEstateNumber = _RERelevantProcessData.InternalRealEstateNumber
                                                                                     and REValuationCashflow.REValuationRuleUUID      = _RERelevantProcessData.REValuationRuleUUID
  association [0..1] to I_TaxJurisCalcProcedure     as _TaxJurisdictionCalcProcedure on  $projection.taxcalculationprocedure = _TaxJurisdictionCalcProcedure.TaxJurisdictionCalcProcedure
  association [0..1] to I_TaxJurisdiction           as _TaxJurisdiction              on  $projection.TaxJurisdiction         = _TaxJurisdiction.TaxJurisdiction
                                                                                     and $projection.taxcalculationprocedure = _TaxJurisdiction.TaxJurisdictionCalcProcedure
{
      @ObjectModel.foreignKey.association: '_REContract'
  key REValuationCashflow.InternalRealEstateNumber,
      @ObjectModel.foreignKey.association: '_REValuationTerm'
  key REValuationCashflow.REValuationRuleUUID,
      @ObjectModel.foreignKey.association: '_RERelevantProcessData'
  key REValuationCashflow.REValuationProcessUUID,
  key REValuationCashflow.REValuationCashFlowRecordUUID,
      REValuationCashflow.RETermNumber,
      @ObjectModel.foreignKey.association: '_REValuationRule'
      REValuationCashflow.REValuationRule,
      @ObjectModel.foreignKey.association: '_RECashFlowType'
      REValuationCashflow.RECashFlowType,
      REValuationCashflow.CashFlowItemOrigin,
      REValuationCashflow.REStatusObject,
      REValuationCashflow.REStatusObjectAsset,
      REValuationCashflow.REConditionUUID,
      REValuationCashflow.ValidityStartDate,
      @Semantics.businessDate.from: true
      REValuationCashflow.CalculationPeriodStartDate,
      @Semantics.businessDate.to: true
      REValuationCashflow.CalculationPeriodEndDate,
      REValuationCashflow.NumberOfDays,
      REValuationCashflow.REPositionDueDate,
      @Semantics.businessDate.at: true
      REValuationCashflow.PaymentDueDate,
      @Semantics.businessDate.at: true
      REValuationCashflow.CalculationDate,
      REValuationCashflow.REConditionCurrency,
      REValuationCashflow.REInterestRate,
      REValuationCashflow.REValuationIsInitialCost,
      REValuationCashflow.REValuationIsLiabilityDiff,
      REValuationCashflow.REIsDeferralAdjustment,
      REValuationCashflow.REIsAssetRetirementObligation,
      REValuationCashflow.REValnIsCompleteRetirement,
      REValuationCashflow.REIsRetroActiveChange,
      REValuationCashflow.REValuationIsReduction,
      REValuationCashflow.REDocumentReferenceUUID,
      REValuationCashflow.REDocumentReference2UUID,
      REValuationCashflow.REDocumentReference3UUID,
      REValuationCashflow.REDocumentReference4UUID,
      REValuationCashflow.CreatedByUser,
      @Semantics.systemDate.createdAt: true
      REValuationCashflow.CreationDate,
      REValuationCashflow.CreationTime,
      REValuationCashflow.RESourceOfCreation,
      REValuationCashflow.LastChangedByUser,
      REValuationCashflow.LastChangeDate,
      REValuationCashflow.LastChangeTime,
      REValuationCashflow.RESourceOfChange,
      REValuationCashflow.IsReversed,
      REValuationCashflow.SplitCashFlowRecordUUID,
      REValuationCashflow.RecordIsBasisForSplit,
      REValuationCashflow.REValuationEngine,

      @Semantics.amount.currencyCode: 'REConditionCurrency'
      case when REValuationCashflow._REBookedFlowType.DebitCreditCode = 'H'
       then REValuationCashflow.RECashFlowPositionAmount * ( -1 )
       else REValuationCashflow.RECashFlowPositionAmount
      end as RECashFlowPositionAmount,

      @ObjectModel.foreignKey.association: '_RETaxType'
      REValuationCashflow.RETaxType,
      @ObjectModel.foreignKey.association: '_RETaxGroup'
      REValuationCashflow.RETaxGroup,
      @ObjectModel.foreignKey.association: '_TaxJurisdiction'
      REValuationCashflow.TaxJurisdiction,
      REValuationCashflow.REIsConditionGrossAmount,
      @ObjectModel.foreignKey.association: '_TaxCountry'
      REValuationCashflow.TaxCountry,
      REValuationCashflow.REFlowType,
      REValuationCashflow.REOriginalFlowType,
      REValuationCashflow.RERelshpOriglToFlowType,
      REValuationCashflow.CashFlowPostingStatus,
      REValuationCashflow.IsToBeArchived,
      REValuationCashflow.REOriglDueDate,
      REValuationCashflow.REConditionType,
      @Semantics.businessDate.at: true
      REValuationCashflow.PostingDate,
      @Semantics.businessDate.at: true
      REValuationCashflow.DocumentDate,
      @Semantics.businessDate.at: true
      REValuationCashflow.ExchangeRateDate,
      REValuationCashflow.REReversalForUUID,
      REValuationCashflow.REReversalByUUID,
      REValuationCashflow.REFollowUpPostingUUID,
      REValuationCashflow.REBookedFlowType,
      REValuationCashflow.RERelshpBookedToFlowType,
      @Semantics.businessDate.at: true
      REValuationCashflow.RETaxCalcDate,
      @Semantics.businessDate.at: true
      REValuationCashflow.REModifiedDueDate,
      @Semantics.businessDate.at: true
      REValuationCashflow.RECalcDueDate,
      @ObjectModel.foreignKey.association: '_RECurrencyTranslationRule'
      REValuationCashflow.RECurrencyTranslationRule,
      REValuationCashflow.REIsPostInConditionCurrency,
      @Semantics.businessDate.at: true
      REValuationCashflow.REPlndTranslationDate,
      @Semantics.businessDate.at: true
      REValuationCashflow.REActlTranslationDate,
      @Semantics.businessDate.at: true
      REValuationCashflow.REOriglActlTranslationDate,
      REValuationCashflow.REIsTranslationDateFrmCashFlow,
      @ObjectModel.foreignKey.association: '_TaxJurisdictionCalcProcedure'
      REValuationCashflow._REContract._CompanyCode._Country.TaxCalculationProcedure,

      /* Associations */
      REValuationCashflow._ChangedByUser,
      REValuationCashflow._CreatedByUser,
      REValuationCashflow._REBookedFlowType,
      REValuationCashflow._RECashFlowItemOrigin,
      REValuationCashflow._RECashFlowPostingStatus,
      REValuationCashflow._RECondition,
      REValuationCashflow._REConditionType,
      REValuationCashflow._REContract,
      REValuationCashflow._REDocumentHeader,
      REValuationCashflow._REFlowType,
      REValuationCashflow._REOriglFlowType,
      REValuationCashflow._RERelshpBookedToFlowType,
      REValuationCashflow._RERelshpOriglToFlowType,
      REValuationCashflow._RETaxGroup,
      REValuationCashflow._RETaxType,
      REValuationCashflow._TaxCountry,
      _REValuationTerm,
      _REValuationRule,
      _RECashFlowType,
      _RERelevantProcessData,
      _RECurrencyTranslationRule,
      _TaxJurisdiction,
      _TaxJurisdictionCalcProcedure

}
where
  REValuationCashflow.RECashFlowType = '6'
```
