---
name: I_REVALNTRANSFERCASHFLOW
description: "Revalntransfercashflow"
app_component: RE-FX-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InternalRealEstateNumber` | ✓ | |  |  |  |  |
| `REValuationRuleUUID` | ✓ | |  |  |  |  |
| `REValuationProcessUUID` | ✓ | |  |  |  |  |
| `REValuationCashFlowRecordUUID` | ✓ | |  |  |  |  |
| `RETermNumber` |  | |  |  |  |  |
| `REValuationRule` |  | |  |  |  |  |
| `RECashFlowType` |  | |  |  |  |  |
| `CashFlowItemOrigin` |  | |  |  |  |  |
| `REStatusObject` |  | |  |  |  |  |
| `REStatusObjectAsset` |  | |  |  |  |  |
| `REConditionUUID` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `CalculationPeriodStartDate` |  | |  |  |  |  |
| `CalculationPeriodEndDate` |  | |  |  |  |  |
| `NumberOfDays` |  | |  |  |  |  |
| `REPositionDueDate` |  | |  |  |  |  |
| `PaymentDueDate` |  | |  |  |  |  |
| `CalculationDate` |  | |  |  |  |  |
| `REConditionCurrency` |  | |  |  |  |  |
| `REInterestRate` |  | |  |  |  |  |
| `REValuationIsInitialCost` |  | |  |  |  |  |
| `REValuationIsLiabilityDiff` |  | |  |  |  |  |
| `REIsDeferralAdjustment` |  | |  |  |  |  |
| `REIsAssetRetirementObligation` |  | |  |  |  |  |
| `REValnIsCompleteRetirement` |  | |  |  |  |  |
| `REIsRetroActiveChange` |  | |  |  |  |  |
| `REValuationIsReduction` |  | |  |  |  |  |
| `REDocumentReferenceUUID` |  | |  |  |  |  |
| `REDocumentReference2UUID` |  | |  |  |  |  |
| `REDocumentReference3UUID` |  | |  |  |  |  |
| `REDocumentReference4UUID` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `RESourceOfCreation` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangeTime` |  | |  |  |  |  |
| `RESourceOfChange` |  | |  |  |  |  |
| `IsReversed` |  | |  |  |  |  |
| `SplitCashFlowRecordUUID` |  | |  |  |  |  |
| `RecordIsBasisForSplit` |  | |  |  |  |  |
| `REValuationEngine` |  | |  |  |  |  |
| `RECashFlowPositionAmount` |  | |  | `case when REValuationCashflow._REBookedFlowType.DebitCreditCode = 'H' then REValuationCashflow.RECashFlowPositionAmount * ( -1 ) else REValuationCashflow.RECashFlowPositionAmount end` |  |  |
| `RETaxType` |  | |  |  |  |  |
| `RETaxGroup` |  | |  |  |  |  |
| `TaxJurisdiction` |  | |  |  |  |  |
| `REIsConditionGrossAmount` |  | |  |  |  |  |
| `TaxCountry` |  | |  |  |  |  |
| `REFlowType` |  | |  |  |  |  |
| `REOriginalFlowType` |  | |  |  |  |  |
| `RERelshpOriglToFlowType` |  | |  |  |  |  |
| `CashFlowPostingStatus` |  | |  |  |  |  |
| `IsToBeArchived` |  | |  |  |  |  |
| `REOriglDueDate` |  | |  |  |  |  |
| `REConditionType` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `DocumentDate` |  | |  |  |  |  |
| `ExchangeRateDate` |  | |  |  |  |  |
| `REReversalForUUID` |  | |  |  |  |  |
| `REReversalByUUID` |  | |  |  |  |  |
| `REFollowUpPostingUUID` |  | |  |  |  |  |
| `REBookedFlowType` |  | |  |  |  |  |
| `RERelshpBookedToFlowType` |  | |  |  |  |  |
| `RETaxCalcDate` |  | |  |  |  |  |
| `REModifiedDueDate` |  | |  |  |  |  |
| `RECalcDueDate` |  | |  |  |  |  |
| `RECurrencyTranslationRule` |  | |  |  |  |  |
| `REIsPostInConditionCurrency` |  | |  |  |  |  |
| `REPlndTranslationDate` |  | |  |  |  |  |
| `REActlTranslationDate` |  | |  |  |  |  |
| `REOriglActlTranslationDate` |  | |  |  |  |  |
| `REIsTranslationDateFrmCashFlow` |  | |  |  |  |  |
| `TaxCalculationProcedure` |  | |  |  |  |  |
| `_REValuationTerm` | | ✓ | | | | |
| `_REValuationRule` | | ✓ | | | | |
| `_RECashFlowType` | | ✓ | | | | |
| `_RECurrencyTranslationRule` | | ✓ | | | | |
| `_RERelevantProcessData` | | ✓ | | | | |
| `_TaxJurisdictionCalcProcedure` | | ✓ | | | | |
| `_TaxJurisdiction` | | ✓ | | | | |

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
