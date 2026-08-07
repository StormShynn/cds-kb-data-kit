---
name: I_SESPRICINGELEMENTTP_2
description: Sespricingelementtp 2
app_component: MM-PUR-SVC-SES-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-SVC
  - interface-view
  - transactional-processing
  - pricing
  - component:MM-PUR-SVC-SES-2CL
  - lob:Sourcing & Procurement
---
# I_SESPRICINGELEMENTTP_2

**Sespricingelementtp 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-SVC-SES-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ServiceEntrySheet` | ✓ | |  |  |
| `ServiceEntrySheetItem` | ✓ | |  |  |
| `PricingDocument` | ✓ | |  |  |
| `PricingDocumentItem` | ✓ | |  |  |
| `PricingProcedureStep` | ✓ | |  |  |
| `PricingProcedureCounter` | ✓ | |  |  |
| `ConditionApplication` |  | |  |  |
| `ConditionType` |  | |  |  |
| `PriceConditionDeterminationDte` |  | |  |  |
| `ConditionCalculationType` |  | |  |  |
| `ConditionBaseValue` |  | |  |  |
| `ConditionRateValue` |  | |  |  |
| `ConditionCurrency` |  | |  |  |
| `ConditionQuantity` |  | |  |  |
| `ConditionQuantityUnit` |  | |  |  |
| `ConditionToBaseQtyNmrtr` |  | |  |  |
| `ConditionToBaseQtyDnmntr` |  | |  |  |
| `ConditionCategory` |  | |  |  |
| `ConditionIsForStatistics` |  | |  |  |
| `PricingScaleType` |  | |  |  |
| `IsRelevantForAccrual` |  | |  |  |
| `CndnIsRelevantForInvoiceList` |  | |  |  |
| `ConditionOrigin` |  | |  |  |
| `IsGroupCondition` |  | |  |  |
| `AccessNumberOfAccessSequence` |  | |  |  |
| `ConditionRecord` |  | |  |  |
| `ConditionSequentialNumber` |  | |  |  |
| `AccountKeyForGLAccount` |  | |  |  |
| `GLAccount` |  | |  |  |
| `TaxCode` |  | |  |  |
| `AcctKeyForAccrualsGLAccount` |  | |  |  |
| `AccrualsGLAccount` |  | |  |  |
| `WithholdingTaxCode` |  | |  |  |
| `FreightSupplier` |  | |  |  |
| `CndnRoundingOffDiffAmount` |  | |  |  |
| `ConditionAmount` |  | |  |  |
| `TransactionCurrency` |  | |  |  |
| `ConditionControl` |  | |  |  |
| `ConditionInactiveReason` |  | |  |  |
| `ConditionClass` |  | |  |  |
| `PrcgProcedureCounterForHeader` |  | |  |  |
| `FactorForConditionBasisValue` |  | |  |  |
| `StructureCondition` |  | |  |  |
| `PeriodFactorForCndnBasisValue` |  | |  |  |
| `PricingScaleBasis` |  | |  |  |
| `ConditionScaleBasisValue` |  | |  |  |
| `ConditionScaleBasisUnit` |  | |  |  |
| `ConditionScaleBasisCurrency` |  | |  |  |
| `ConditionAlternativeCurrency` |  | |  |  |
| `ConditionAmountInLocalCrcy` |  | |  |  |
| `CndnIsRelevantForIntcoBilling` |  | |  |  |
| `ConditionIsManuallyChanged` |  | |  |  |
| `BillingPriceSource` |  | |  |  |
| `TaxJurisdictionLevel` |  | |  |  |
| `ConditionByteSequence` |  | |  |  |
| `CndnIsRelevantForLimitValue` |  | |  |  |
| `ConditionBasisLimitExceeded` |  | |  |  |
| `ConditionAmountLimitExceeded` |  | |  |  |
| `CumulatedConditionBasisValue` |  | |  |  |
| `CustomerRebateRecipient` |  | |  |  |
| `ConditionIsForConfiguration` |  | |  |  |
| `VariantCondition` |  | |  |  |
| `ConditionAcctAssgmtRelevance` |  | |  |  |
| `ConditionMatrixMaintRelevance` |  | |  |  |
| `ConfigblParametersAndFormulas` |  | |  |  |
| `ConditionAdjustedQuantity` |  | |  |  |
| `ConditionTypeName` |  | |  |  |
| `ConditionBaseValueIntlUnit` |  | |  |  |
| `ConditionBaseValueUnit` |  | |  |  |
| `ConditionRateValueIntlUnit` |  | |  |  |
| `ConditionRateValueUnit` |  | |  |  |
| `TaxCodeName` |  | |  |  |
| `ConditionIsDeletable` |  | |  |  |
| `PricingProcedure` |  | |  |  |
| `SuperordinateDocument` |  | |  |  |
| `SuperordinateDocumentItem` |  | |  |  |
| `LastChangeDateTime` |  | |  |  |
| `_ServiceEntrySheetItem` | | ✓ | | |
| `_SESHeader` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'SES Pricing Element'
@AccessControl.authorizationCheck: #MANDATORY

@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey: ['ServiceEntrySheet', 'ServiceEntrySheetItem', 'PricingDocument', 'PricingDocumentItem','PricingProcedureStep', 'PricingProcedureCounter']

@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #XL,
  dataClass: #TRANSACTIONAL
}

@Metadata.ignorePropagatedAnnotations: true
define view entity I_SESPricingElementTP_2
  as projection on R_SESPricingElementTP
{
      @ObjectModel.foreignKey.association: '_SESHeader'
  key ServiceEntrySheet,
      @ObjectModel.foreignKey.association: '_ServiceEntrySheetItem'
  key ServiceEntrySheetItem,
  key PricingDocument,
  key PricingDocumentItem,
  key PricingProcedureStep,
  key PricingProcedureCounter,
      ConditionApplication,
      ConditionType,
      PriceConditionDeterminationDte,
      ConditionCalculationType,
      ConditionBaseValue,
      ConditionRateValue,
      ConditionCurrency,
      @Semantics.quantity.unitOfMeasure: 'conditionquantityunit'
      ConditionQuantity,
      ConditionQuantityUnit,
      ConditionToBaseQtyNmrtr,
      ConditionToBaseQtyDnmntr,
      ConditionCategory,
      ConditionIsForStatistics,
      PricingScaleType,
      IsRelevantForAccrual,
      @Semantics.booleanIndicator
      CndnIsRelevantForInvoiceList,
      ConditionOrigin,
      @Semantics.booleanIndicator
      IsGroupCondition,
      AccessNumberOfAccessSequence,
      ConditionRecord,
      ConditionSequentialNumber,
      AccountKeyForGLAccount,
      GLAccount,
      TaxCode,
      AcctKeyForAccrualsGLAccount,
      AccrualsGLAccount,
      WithholdingTaxCode,
      FreightSupplier,
      @Semantics.amount.currencyCode: 'ConditionCurrency'
      CndnRoundingOffDiffAmount,
      @Semantics.amount.currencyCode: 'ConditionCurrency'
      ConditionAmount,
      TransactionCurrency,
      ConditionControl,
      ConditionInactiveReason,
      ConditionClass,
      PrcgProcedureCounterForHeader,
      FactorForConditionBasisValue,
      StructureCondition,
      PeriodFactorForCndnBasisValue,
      PricingScaleBasis,
      ConditionScaleBasisValue,
      ConditionScaleBasisUnit,
      ConditionScaleBasisCurrency,
      ConditionAlternativeCurrency,
      @Semantics.amount.currencyCode: 'ConditionCurrency'
      ConditionAmountInLocalCrcy,
      CndnIsRelevantForIntcoBilling,
      ConditionIsManuallyChanged,
      BillingPriceSource,
      TaxJurisdictionLevel,
      ConditionByteSequence,
      CndnIsRelevantForLimitValue,
      ConditionBasisLimitExceeded,
      ConditionAmountLimitExceeded,
      CumulatedConditionBasisValue,
      CustomerRebateRecipient,
      ConditionIsForConfiguration,
      VariantCondition,
      ConditionAcctAssgmtRelevance,
      ConditionMatrixMaintRelevance,
      ConfigblParametersAndFormulas,
      @Semantics.quantity.unitOfMeasure: 'conditionquantityunit'
      ConditionAdjustedQuantity,
      ConditionTypeName,
      ConditionBaseValueIntlUnit,
      ConditionBaseValueUnit,
      ConditionRateValueIntlUnit,
      ConditionRateValueUnit,
      TaxCodeName,
      @Semantics.booleanIndicator
      ConditionIsDeletable,
      PricingProcedure,
      SuperordinateDocument,
      SuperordinateDocumentItem,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,
      /* Associations */
      _ServiceEntrySheetItem : redirected to parent I_ServiceEntrySheetItemTP_2,
      _SESHeader             : redirected to I_ServiceEntrySheetTP_2
}
```
