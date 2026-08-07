---
name: I_RECONTRPAYMENTCASHFLOW
description: Recontrpaymentcashflow
app_component: RE-FX-CN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-CN
  - interface-view
  - payment
  - component:RE-FX-CN-2CL
  - lob:Other
---
# I_RECONTRPAYMENTCASHFLOW

**Recontrpaymentcashflow**

| Property | Value |
|---|---|
| App Component | `RE-FX-CN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `PayRelatedCashFlowRecordUUID` | ✓ | |  |  |
| `REConditionUUID` |  | |  |  |
| `ValidityStartDate` |  | |  |  |
| `REDocumentReferenceUUID` |  | |  |  |
| `InternalRealEstateNumber` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `CreationDate` |  | |  |  |
| `CreationTime` |  | |  |  |
| `RESourceOfCreation` |  | |  |  |
| `LastChangedByUser` |  | |  |  |
| `LastChangeDate` |  | |  |  |
| `LastChangeTime` |  | |  |  |
| `RESourceOfChange` |  | |  |  |
| `CalculationPeriodStartDate` |  | |  |  |
| `CalcPeriodStartDateIsExclusive` |  | |  | `case when CalcPeriodStartDateIsExclusive = '0' then cast ( ' ' as recdvdmcalcstartexcl ) else cast ( 'X' as recdvdmcalcstartexcl ) end` |
| `CalcPeriodStartDateIsMonthEnd` |  | |  |  |
| `CalculationPeriodEndDate` |  | |  |  |
| `CalcPeriodEndDateIsInclusive` |  | |  | `case when CalcPeriodEndDateIsInclusive = '0' then cast ( ' ' as recdvdmcalcendincl ) else cast ( 'X' as recdvdmcalcendincl ) end` |
| `CalcPeriodEndDateIsMonthEnd` |  | |  |  |
| `CalculationDate` |  | |  |  |
| `CalcDateIsAsEndDateInclusive` |  | |  | `case when CalcDateIsAsEndDateInclusive = '0' then cast ( ' ' as recdvdmcalcendincl ) else cast ( 'X' as recdvdmcalcendincl ) end` |
| `CalculationDateIsMonthEnd` |  | |  |  |
| `PaymentDueDate` |  | |  |  |
| `DueDateIsMonthEnd` |  | |  |  |
| `NextWorkingDateForPayDueDate` |  | |  |  |
| `NumberOfDays` |  | |  |  |
| `NumberOfCalculationDays` |  | |  |  |
| `InterestBaseDaysMethod` |  | |  |  |
| `InterestCalculationMethod` |  | |  |  |
| `REBeginOfPeriodDate` |  | |  |  |
| `PeriodStartDateIsExclusive` |  | |  | `case when PeriodStartDateIsExclusive = '0' then cast ( ' ' as recdvdmperiodstartexcl ) else cast ( 'X' as recdvdmperiodstartexcl ) end` |
| `PeriodStartDateIsMonthEnd` |  | |  |  |
| `REEndOfPeriodDate` |  | |  |  |
| `PeriodEndDateIsInclusive` |  | |  | `case when PeriodEndDateIsInclusive = '0' then cast ( ' ' as recdvdmperiodendincl ) else cast ( 'X' as recdvdmperiodendincl ) end` |
| `PeriodEndDateIsMonthEnd` |  | |  |  |
| `REConditionCurrency` |  | |  |  |
| `REUnitPrice` |  | |  |  |
| `REProRataMethod` |  | |  |  |
| `REPaymentStatus` |  | |  |  |
| `CashFlowConditionGroup` |  | |  |  |
| `RECashFlowPositionAmount` |  | |  | `case when _REFlowType.DebitCreditCode = 'H' then RECashFlowPositionAmount * ( -1 ) else RECashFlowPositionAmount end` |
| `RETaxType` |  | |  |  |
| `RETaxGroup` |  | |  | `TaxGroup` |
| `TaxJurisdiction` |  | |  |  |
| `REIsConditionGrossAmount` |  | |  |  |
| `TaxCountry` |  | |  |  |
| `CashFlowItemOrigin` |  | |  |  |
| `REFlowType` |  | |  |  |
| `REOriginalFlowType` |  | |  |  |
| `RERelshpOriglToFlowType` |  | |  |  |
| `CashFlowPostingStatus` |  | |  |  |
| `PlanningLevel` |  | |  |  |
| `REHasEnteredCashMgmtForecast` |  | |  |  |
| `IsToBeArchived` |  | |  |  |
| `REOriglDueDate` |  | |  |  |
| `BusinessPartner` |  | |  |  |
| `REPartnerStatusObject` |  | |  |  |
| `REConditionType` |  | |  |  |
| `REPostingTerm` |  | |  |  |
| `RERhythmTerm` |  | |  |  |
| `REAdjustmentNumber` |  | |  |  |
| `REOrgAssignmentTerm` |  | |  |  |
| `RESalesTerm` |  | |  |  |
| `REPeakSalesTerm` |  | |  |  |
| `REWithholdingTaxTerm` |  | |  |  |
| `REOriglExDueDate` |  | |  |  |
| `REAdvancePaymentRelevantStatus` |  | |  |  |
| `PostingDate` |  | |  |  |
| `DocumentDate` |  | |  |  |
| `ExchangeRateDate` |  | |  |  |
| `REReversalForUUID` |  | |  |  |
| `REReversalByUUID` |  | |  |  |
| `REFollowUpPostingUUID` |  | |  |  |
| `REBookedFlowType` |  | |  |  |
| `RERelshpBookedToFlowType` |  | |  |  |
| `RETaxCalcDate` |  | |  |  |
| `REModifiedDueDate` |  | |  |  |
| `RECalcDueDate` |  | |  |  |
| `SplitCashFlowRecordUUID` |  | |  |  |
| `RecordIsBasisForSplit` |  | |  |  |
| `REConditionSplitNumber` |  | |  |  |
| `CompanyCode` |  | |  |  |
| `CashPlanningGroup` |  | |  |  |
| `RECurrencyTranslationRule` |  | |  |  |
| `ExchangeRate` |  | |  | `cast( ExchangeRate as kurrf_not_converted preserving type )` |
| `REOriginExchangeRate` |  | |  | `cast( REOriginExchangeRate as kurrf_not_converted preserving type )` |
| `REIsPostInConditionCurrency` |  | |  |  |
| `REPlndTranslationDate` |  | |  |  |
| `REActlTranslationDate` |  | |  |  |
| `REOriglActlTranslationDate` |  | |  |  |
| `REIsTranslationDateFrmCashFlow` |  | |  |  |
| `REStatusObject` |  | |  |  |
| `_CostCenterCalculation` | | ✓ | | |
| `_WBSElementCalculation` | | ✓ | | |
| `_InternalOrderCalculation` | | ✓ | | |
| `_REContract` | | ✓ | | |
| `_RECondition` | | ✓ | | |
| `_REConditionType` | | ✓ | | |
| `_REDocumentHeader` | | ✓ | | |
| `_RERhythmTerm` | | ✓ | | |
| `_REPostingTerm` | | ✓ | | |
| `_CreatedByUser` | | ✓ | | |
| `_ChangedByUser` | | ✓ | | |
| `_RETaxType` | | ✓ | | |
| `_RETaxGroup` | | ✓ | | |
| `_TaxCountry` | | ✓ | | |
| `_REFlowType` | | ✓ | | |
| `_REOriglFlowType` | | ✓ | | |
| `_PlanningLevel` | | ✓ | | |
| `_REProRateMethod` | | ✓ | | |
| `_RECashFlowItemOrigin` | | ✓ | | |
| `_RERelshpOriglToFlowType` | | ✓ | | |
| `_RECashFlowPostingStatus` | | ✓ | | |
| `_BusinessPartner` | | ✓ | | |
| `_REAdvancePaytRlvtStatus` | | ✓ | | |
| `_CompanyCode` | | ✓ | | |
| `_REBookedFlowType` | | ✓ | | |
| `_RERelshpBookedToFlowType` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CostCenterCalculation` | `I_CostCenter` | [0..1] |
| `_WBSElementCalculation` | `I_WBSElementBasicData` | [0..1] |
| `_InternalOrderCalculation` | `I_InternalOrder` | [0..1] |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #REQUIRED,
  privilegedAssociations: ['_ChangedByUser', '_CreatedByUser']
}
@EndUserText.label: 'Real Estate Contract Payment Cash Flow'
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@ObjectModel: {
  representativeKey: 'PayRelatedCashFlowRecordUUID',
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
  sapObjectNodeType.name: 'REContractPaymentCashFlow'
}
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@VDM.viewType: #COMPOSITE
define view entity I_REContrPaymentCashFlow
  as select from I_REPaymentCashFlow

  // Calc FI/CO objects
  association [0..1] to I_CostCenter          as _CostCenterCalculation    on $projection.REStatusObject = _CostCenterCalculation.ObjectInternalID
  association [0..1] to I_WBSElementBasicData as _WBSElementCalculation    on $projection.REStatusObject = _WBSElementCalculation.WBSElementObject
  association [0..1] to I_InternalOrder       as _InternalOrderCalculation on $projection.REStatusObject = _InternalOrderCalculation.ControllingObject

{
  key PayRelatedCashFlowRecordUUID,
      @ObjectModel.foreignKey.association: '_RECondition'
      REConditionUUID,
      ValidityStartDate,
      @ObjectModel.foreignKey.association: '_REDocumentHeader'
      REDocumentReferenceUUID,
      @ObjectModel.foreignKey.association: '_REContract'
      InternalRealEstateNumber,
      @ObjectModel.foreignKey.association: '_CreatedByUser'
      CreatedByUser,
      CreationDate,
      CreationTime,
      RESourceOfCreation,
      @ObjectModel.foreignKey.association: '_ChangedByUser'
      LastChangedByUser,
      LastChangeDate,
      LastChangeTime,
      RESourceOfChange,
      CalculationPeriodStartDate,
      @Semantics.booleanIndicator: true
      case when CalcPeriodStartDateIsExclusive = '0'
        then cast ( ' ' as recdvdmcalcstartexcl )
        else cast ( 'X' as recdvdmcalcstartexcl )
        end                                                               as CalcPeriodStartDateIsExclusive,
      @Semantics.booleanIndicator: true
      CalcPeriodStartDateIsMonthEnd,
      CalculationPeriodEndDate,
      @Semantics.booleanIndicator: true
      case when CalcPeriodEndDateIsInclusive = '0'
        then cast ( ' ' as recdvdmcalcendincl )
        else cast ( 'X' as recdvdmcalcendincl )
        end                                                               as CalcPeriodEndDateIsInclusive,
      @Semantics.booleanIndicator: true
      CalcPeriodEndDateIsMonthEnd,
      CalculationDate,
      @Semantics.booleanIndicator: true
      case when CalcDateIsAsEndDateInclusive = '0'
        then cast ( ' ' as recdvdmcalcendincl )
        else cast ( 'X' as recdvdmcalcendincl )
        end                                                               as CalcDateIsAsEndDateInclusive,
      @Semantics.booleanIndicator: true
      CalculationDateIsMonthEnd,
      PaymentDueDate,
      @Semantics.booleanIndicator: true
      DueDateIsMonthEnd,
      NextWorkingDateForPayDueDate,
      NumberOfDays,
      NumberOfCalculationDays,
      InterestBaseDaysMethod,
      InterestCalculationMethod,
      REBeginOfPeriodDate,
      @Semantics.booleanIndicator: true
      case when PeriodStartDateIsExclusive = '0'
        then cast ( ' ' as recdvdmperiodstartexcl )
        else cast ( 'X' as recdvdmperiodstartexcl )
        end                                                               as PeriodStartDateIsExclusive,
      @Semantics.booleanIndicator: true
      PeriodStartDateIsMonthEnd,
      REEndOfPeriodDate,
      @Semantics.booleanIndicator: true
      case when PeriodEndDateIsInclusive = '0'
      then cast ( ' ' as recdvdmperiodendincl )
      else cast ( 'X' as recdvdmperiodendincl )
      end                                                                 as PeriodEndDateIsInclusive,
      @Semantics.booleanIndicator: true
      PeriodEndDateIsMonthEnd,
      REConditionCurrency,
      @Semantics.amount.currencyCode: 'REConditionCurrency'
      REUnitPrice,
      @ObjectModel.foreignKey.association: '_REProRateMethod'
      REProRataMethod,
      REPaymentStatus,
      CashFlowConditionGroup,

      @Semantics.amount.currencyCode: 'REConditionCurrency'
      case when _REFlowType.DebitCreditCode = 'H'
       then RECashFlowPositionAmount * ( -1 )
       else RECashFlowPositionAmount
      end                                                                 as RECashFlowPositionAmount,

      @ObjectModel.foreignKey.association: '_RETaxType'
      RETaxType,
      @ObjectModel.foreignKey.association: '_RETaxGroup'
      TaxGroup                                                            as RETaxGroup,
      TaxJurisdiction,
      REIsConditionGrossAmount,
      @ObjectModel.foreignKey.association: '_TaxCountry'
      TaxCountry,
      @ObjectModel.foreignKey.association: '_RECashFlowItemOrigin'
      CashFlowItemOrigin,
      @ObjectModel.foreignKey.association: '_REFlowType'
      REFlowType,
      @ObjectModel.foreignKey.association: '_REOriglFlowType'
      REOriginalFlowType,
      @ObjectModel.foreignKey.association: '_RERelshpOriglToFlowType'
      RERelshpOriglToFlowType,
      @ObjectModel.foreignKey.association: '_RECashFlowPostingStatus'
      CashFlowPostingStatus,
      @ObjectModel.foreignKey.association: '_PlanningLevel'
      PlanningLevel,
      @Semantics.booleanIndicator: true
      REHasEnteredCashMgmtForecast,
      IsToBeArchived,
      REOriglDueDate,
      @ObjectModel.foreignKey.association: '_BusinessPartner'
      BusinessPartner,
      REPartnerStatusObject,
      @ObjectModel.foreignKey.association: '_REConditionType'
      REConditionType,
      //      @ObjectModel.foreignKey.association: '_REPostingTerm'
      REPostingTerm,
      //      @ObjectModel.foreignKey.association: '_RERhythmTerm'
      RERhythmTerm,
      REAdjustmentNumber,
      REOrgAssignmentTerm,
      RESalesTerm,
      REPeakSalesTerm,
      REWithholdingTaxTerm,
      REOriglExDueDate,
      @ObjectModel.foreignKey.association: '_REAdvancePaytRlvtStatus'
      REAdvancePaymentRelevantStatus,
      PostingDate,
      DocumentDate,
      ExchangeRateDate,
      REReversalForUUID,
      REReversalByUUID,
      REFollowUpPostingUUID,
      @ObjectModel.foreignKey.association: '_REBookedFlowType'
      REBookedFlowType,
      @ObjectModel.foreignKey.association: '_RERelshpBookedToFlowType'
      RERelshpBookedToFlowType,
      RETaxCalcDate,
      REModifiedDueDate,
      RECalcDueDate,
      SplitCashFlowRecordUUID,
      RecordIsBasisForSplit,
      REConditionSplitNumber,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      CompanyCode,
      CashPlanningGroup,
      RECurrencyTranslationRule,
      cast( ExchangeRate as kurrf_not_converted preserving type )         as ExchangeRate,
      cast( REOriginExchangeRate as kurrf_not_converted preserving type ) as REOriginExchangeRate,
      REIsPostInConditionCurrency,
      REPlndTranslationDate,
      REActlTranslationDate,
      REOriglActlTranslationDate,
      REIsTranslationDateFrmCashFlow,
      REStatusObject,

      _REContract,
      _RECondition,
      _REConditionType,
      _REDocumentHeader,
      _RERhythmTerm,
      _REPostingTerm,
      _CreatedByUser,
      _ChangedByUser,
      _RETaxType,
      _RETaxGroup,
      _TaxCountry,
      _REFlowType,
      _REOriglFlowType,
      _PlanningLevel,
      _REProRateMethod,
      _RECashFlowItemOrigin,
      _RERelshpOriglToFlowType,
      _RECashFlowPostingStatus,
      _BusinessPartner,
      _REAdvancePaytRlvtStatus,
      _CompanyCode,
      _REBookedFlowType,
      _RERelshpBookedToFlowType,

      _CostCenterCalculation,
      _WBSElementCalculation,
      _InternalOrderCalculation
}
```
