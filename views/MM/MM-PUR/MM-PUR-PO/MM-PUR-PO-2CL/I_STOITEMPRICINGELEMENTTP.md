---
name: I_STOITEMPRICINGELEMENTTP
description: Stoitempricingelementtp
app_component: MM-PUR-PO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-PO
  - interface-view
  - transactional-processing
  - pricing
  - item-level
  - component:MM-PUR-PO-2CL
  - lob:Sourcing & Procurement
---
# I_STOITEMPRICINGELEMENTTP

**Stoitempricingelementtp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-PO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `StockTransportOrder` | `StockTransportOrder` |
| key `StockTransportOrderItem` | `StockTransportOrderItem` |
| key `PricingDocument` | `PricingDocument` |
| key `PricingDocumentItem` | `PricingDocumentItem` |
| key `PricingProcedureStep` | `PricingProcedureStep` |
| key `PricingProcedureCounter` | `PricingProcedureCounter` |
| `ConditionApplication` | `ConditionApplication` |
| `ConditionType` | `ConditionType` |
| `PriceConditionDeterminationDte` | `PriceConditionDeterminationDte` |
| `ConditionCalculationType` | `ConditionCalculationType` |
| `ConditionBaseAmount` | `ConditionBaseAmount` |
| `ConditionRateAmount` | `ConditionRateAmount` |
| `ConditionRateRatio` | `ConditionRateRatio` |
| `ConditionRateRatioUnit` | `ConditionRateRatioUnit` |
| `ConditionCurrency` | `ConditionCurrency` |
| `PriceDetnExchangeRate` | `PriceDetnExchangeRate` |
| `ConditionQuantity` | `ConditionQuantity` |
| `ConditionQuantityUnit` | `ConditionQuantityUnit` |
| `ConditionToBaseQtyNmrtr` | `ConditionToBaseQtyNmrtr` |
| `ConditionToBaseQtyDnmntr` | `ConditionToBaseQtyDnmntr` |
| `ConditionCategory` | `ConditionCategory` |
| `ConditionIsForStatistics` | `ConditionIsForStatistics` |
| `PricingScaleType` | `PricingScaleType` |
| `IsRelevantForAccrual` | `IsRelevantForAccrual` |
| `CndnIsRelevantForInvoiceList` | `CndnIsRelevantForInvoiceList` |
| `ConditionOrigin` | `ConditionOrigin` |
| `IsGroupCondition` | `IsGroupCondition` |
| `AccessNumberOfAccessSequence` | `AccessNumberOfAccessSequence` |
| `ConditionRecord` | `ConditionRecord` |
| `ConditionSequentialNumber` | `ConditionSequentialNumber` |
| `AccountKeyForGLAccount` | `AccountKeyForGLAccount` |
| `GLAccount` | `GLAccount` |
| `TaxCode` | `TaxCode` |
| `AcctKeyForAccrualsGLAccount` | `AcctKeyForAccrualsGLAccount` |
| `AccrualsGLAccount` | `AccrualsGLAccount` |
| `WithholdingTaxCode` | `WithholdingTaxCode` |
| `FreightSupplier` | `FreightSupplier` |
| `CndnRoundingOffDiffAmount` | `CndnRoundingOffDiffAmount` |
| `ConditionAmount` | `ConditionAmount` |
| `TransactionCurrency` | `TransactionCurrency` |
| `ConditionControl` | `ConditionControl` |
| `ConditionInactiveReason` | `ConditionInactiveReason` |
| `ConditionClass` | `ConditionClass` |
| `PrcgProcedureCounterForHeader` | `PrcgProcedureCounterForHeader` |
| `FactorForConditionBasisValue` | `FactorForConditionBasisValue` |
| `StructureCondition` | `StructureCondition` |
| `PeriodFactorForCndnBasisValue` | `PeriodFactorForCndnBasisValue` |
| `PricingScaleBasis` | `PricingScaleBasis` |
| `ConditionScaleBasisCurrency` | `ConditionScaleBasisCurrency` |
| `ConditionAlternativeCurrency` | `ConditionAlternativeCurrency` |
| `ConditionAmountInLocalCrcy` | `ConditionAmountInLocalCrcy` |
| `CndnIsRelevantForIntcoBilling` | `CndnIsRelevantForIntcoBilling` |
| `ConditionIsManuallyChanged` | `ConditionIsManuallyChanged` |
| `BillingPriceSource` | `BillingPriceSource` |
| `TaxJurisdictionLevel` | `TaxJurisdictionLevel` |
| `ConditionByteSequence` | `ConditionByteSequence` |
| `CndnIsRelevantForLimitValue` | `CndnIsRelevantForLimitValue` |
| `ConditionBasisLimitExceeded` | `ConditionBasisLimitExceeded` |
| `ConditionAmountLimitExceeded` | `ConditionAmountLimitExceeded` |
| `CustomerRebateRecipient` | `CustomerRebateRecipient` |
| `ConditionIsForConfiguration` | `ConditionIsForConfiguration` |
| `VariantCondition` | `VariantCondition` |
| `ConditionAcctAssgmtRelevance` | `ConditionAcctAssgmtRelevance` |
| `ConditionMatrixMaintRelevance` | `ConditionMatrixMaintRelevance` |
| `ConfigblParametersAndFormulas` | `ConfigblParametersAndFormulas` |
| `ConditionAdjustedQuantity` | `ConditionAdjustedQuantity` |
| `ConditionTypeName` | `ConditionTypeName` |
| `TaxCodeName` | `TaxCodeName` |
| `ConditionIsDeletable` | `ConditionIsDeletable` |
| `PricingProcedure` | `PricingProcedure` |
| `_StockTransportOrderItem` | *Association* |
| `_StockTransportOrder` | *Association* |
| `_BillingPriceSource` | *Association* |
| `_ConditionAcctAssgmtRelevance` | *Association* |
| `_ConditionAlternativeCurrency` | *Association* |
| `_ConditionAmountLimitExceeded` | *Association* |
| `_ConditionApplication` | *Association* |
| `_ConditionBasisLimitExceeded` | *Association* |
| `_ConditionCalculationType` | *Association* |
| `_ConditionCategory` | *Association* |
| `_ConditionClass` | *Association* |
| `_ConditionControl` | *Association* |
| `_ConditionCurrency` | *Association* |
| `_ConditionInactiveReason` | *Association* |
| `_ConditionOrigin` | *Association* |
| `_ConditionQuantityUnit` | *Association* |
| `_ConditionRateRatioUnit` | *Association* |
| `_Currency` | *Association* |
| `_Customer` | *Association* |
| `_PricingConditionType` | *Association* |
| `_PricingScaleBasis` | *Association* |
| `_ScaleCurrency` | *Association* |
| `_StructureCondition` | *Association* |
| `_Supplier` | *Association* |
| `_VariantCondition` | *Association* |

## Source Code

```abap
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

@ObjectModel: {
  usageType: {
    dataClass:      #TRANSACTIONAL,
    serviceQuality: #C,
    sizeCategory:   #L
  },

  modelingPattern: #TRANSACTIONAL_INTERFACE,
  semanticKey: ['StockTransportOrder', 'StockTransportOrderItem', 'PricingDocument', 'PricingDocumentItem', 'PricingProcedureStep', 'PricingProcedureCounter'],
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}

@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #BLOCKED_DATA_EXCLUDED
}

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Pricing Element for STO Item - TP'

define view entity I_STOItemPricingElementTP
  as projection on R_STOItemPricingElementTP

{
  key StockTransportOrder,
  key StockTransportOrderItem,
  key PricingDocument,
  key PricingDocumentItem,
  key PricingProcedureStep,
  key PricingProcedureCounter,

      ConditionApplication,
      ConditionType,

      PriceConditionDeterminationDte,

      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_ConditionCalculationType', element: 'ConditionCalculationType' }, useAsTemplate: true }]       //CustomUI
      ConditionCalculationType,

      @Semantics.amount.currencyCode: 'TransactionCurrency' //recheck with basic 
      ConditionBaseAmount,
      
      @Semantics.amount.currencyCode: 'ConditionCurrency'
      ConditionRateAmount,

      @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
      ConditionRateRatio,

      ConditionRateRatioUnit,
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CurrencyStdVH', element: 'Currency' }, useAsTemplate: true }]       //CustomUI
      ConditionCurrency,
      PriceDetnExchangeRate,

      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      ConditionQuantity,

      ConditionQuantityUnit,
      ConditionToBaseQtyNmrtr,
      ConditionToBaseQtyDnmntr,
      ConditionCategory,
      ConditionIsForStatistics,
      PricingScaleType,
      IsRelevantForAccrual,

      @Semantics.booleanIndicator: true
      CndnIsRelevantForInvoiceList,

      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_ConditionOrigin', element: 'ConditionOrigin' }, useAsTemplate: true }]       //CustomUI
      ConditionOrigin,

      @Semantics.booleanIndicator: true
      IsGroupCondition,

      AccessNumberOfAccessSequence,
      ConditionRecord,
      ConditionSequentialNumber,
      AccountKeyForGLAccount,
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_GLAccountStdVH', element: 'GLAccount' }, useAsTemplate: true }]       //CustomUI
      GLAccount,
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_TaxCodeStdVH', element: 'TaxCode' }, useAsTemplate: true }]       //CustomUI
      TaxCode,
      AcctKeyForAccrualsGLAccount,
      AccrualsGLAccount,
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_WithholdingTaxCodeVH', element: 'WithholdingTaxCode' }, useAsTemplate: true }]       //CustomUI
      WithholdingTaxCode,
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_Supplier_VH', element: 'Supplier' }, useAsTemplate: true }]       //CustomUI
      FreightSupplier,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      CndnRoundingOffDiffAmount,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
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
      ConditionScaleBasisCurrency,
      ConditionAlternativeCurrency,

      @Semantics.amount.currencyCode: 'ConditionAlternativeCurrency'
      ConditionAmountInLocalCrcy,

      CndnIsRelevantForIntcoBilling,
      ConditionIsManuallyChanged,
      BillingPriceSource,
      TaxJurisdictionLevel,
      ConditionByteSequence,
      CndnIsRelevantForLimitValue,
      ConditionBasisLimitExceeded,
      ConditionAmountLimitExceeded,
      CustomerRebateRecipient,
      ConditionIsForConfiguration,
      VariantCondition,
      ConditionAcctAssgmtRelevance,
      ConditionMatrixMaintRelevance,
      ConfigblParametersAndFormulas,

      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      ConditionAdjustedQuantity,

      ConditionTypeName,
      TaxCodeName,

      @Semantics.booleanIndicator: true
      ConditionIsDeletable,

      PricingProcedure,

      /* Composition */
      _StockTransportOrderItem : redirected to parent I_StockTransportOrderItemTP,
      _StockTransportOrder     : redirected to I_StockTransportOrderTP,

      /* Associations */
      _BillingPriceSource,
      _ConditionAcctAssgmtRelevance,
      _ConditionAlternativeCurrency,
      _ConditionAmountLimitExceeded,
      _ConditionApplication,
      _ConditionBasisLimitExceeded,
      _ConditionCalculationType,
      _ConditionCategory,
      _ConditionClass,
      _ConditionControl,
      _ConditionCurrency,
      _ConditionInactiveReason,
      _ConditionOrigin,
      _ConditionQuantityUnit,
      _ConditionRateRatioUnit,
      _Currency,
      _Customer,
      _PricingConditionType,
      _PricingScaleBasis,
      _ScaleCurrency,
      _StructureCondition,
      _Supplier,
      _VariantCondition
}
```
