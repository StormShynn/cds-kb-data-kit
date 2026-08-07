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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `StockTransportOrder` | ✓ | |  |  |  |  |
| `StockTransportOrderItem` | ✓ | |  |  |  |  |
| `PricingDocument` | ✓ | |  |  |  |  |
| `PricingDocumentItem` | ✓ | |  |  |  |  |
| `PricingProcedureStep` | ✓ | |  |  |  |  |
| `PricingProcedureCounter` | ✓ | |  |  |  |  |
| `ConditionApplication` |  | |  |  |  |  |
| `ConditionType` |  | |  |  |  |  |
| `PriceConditionDeterminationDte` |  | |  |  |  |  |
| `ConditionCalculationType` |  | |  |  |  |  |
| `ConditionBaseAmount` |  | |  |  |  |  |
| `ConditionRateAmount` |  | |  |  |  |  |
| `ConditionRateRatio` |  | |  |  |  |  |
| `ConditionRateRatioUnit` |  | |  |  |  |  |
| `ConditionCurrency` |  | |  |  |  |  |
| `PriceDetnExchangeRate` |  | |  |  |  |  |
| `ConditionQuantity` |  | |  |  |  |  |
| `ConditionQuantityUnit` |  | |  |  |  |  |
| `ConditionToBaseQtyNmrtr` |  | |  |  |  |  |
| `ConditionToBaseQtyDnmntr` |  | |  |  |  |  |
| `ConditionCategory` |  | |  |  |  |  |
| `ConditionIsForStatistics` |  | |  |  |  |  |
| `PricingScaleType` |  | |  |  |  |  |
| `IsRelevantForAccrual` |  | |  |  |  |  |
| `CndnIsRelevantForInvoiceList` |  | |  |  |  |  |
| `ConditionOrigin` |  | |  |  |  |  |
| `IsGroupCondition` |  | |  |  |  |  |
| `AccessNumberOfAccessSequence` |  | |  |  |  |  |
| `ConditionRecord` |  | |  |  |  |  |
| `ConditionSequentialNumber` |  | |  |  |  |  |
| `AccountKeyForGLAccount` |  | |  |  |  |  |
| `GLAccount` |  | |  |  |  |  |
| `TaxCode` |  | |  |  |  |  |
| `AcctKeyForAccrualsGLAccount` |  | |  |  |  |  |
| `AccrualsGLAccount` |  | |  |  |  |  |
| `WithholdingTaxCode` |  | |  |  |  |  |
| `FreightSupplier` |  | |  |  |  |  |
| `CndnRoundingOffDiffAmount` |  | |  |  |  |  |
| `ConditionAmount` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `ConditionControl` |  | |  |  |  |  |
| `ConditionInactiveReason` |  | |  |  |  |  |
| `ConditionClass` |  | |  |  |  |  |
| `PrcgProcedureCounterForHeader` |  | |  |  |  |  |
| `FactorForConditionBasisValue` |  | |  |  |  |  |
| `StructureCondition` |  | |  |  |  |  |
| `PeriodFactorForCndnBasisValue` |  | |  |  |  |  |
| `PricingScaleBasis` |  | |  |  |  |  |
| `ConditionScaleBasisCurrency` |  | |  |  |  |  |
| `ConditionAlternativeCurrency` |  | |  |  |  |  |
| `ConditionAmountInLocalCrcy` |  | |  |  |  |  |
| `CndnIsRelevantForIntcoBilling` |  | |  |  |  |  |
| `ConditionIsManuallyChanged` |  | |  |  |  |  |
| `BillingPriceSource` |  | |  |  |  |  |
| `TaxJurisdictionLevel` |  | |  |  |  |  |
| `ConditionByteSequence` |  | |  |  |  |  |
| `CndnIsRelevantForLimitValue` |  | |  |  |  |  |
| `ConditionBasisLimitExceeded` |  | |  |  |  |  |
| `ConditionAmountLimitExceeded` |  | |  |  |  |  |
| `CustomerRebateRecipient` |  | |  |  |  |  |
| `ConditionIsForConfiguration` |  | |  |  |  |  |
| `VariantCondition` |  | |  |  |  |  |
| `ConditionAcctAssgmtRelevance` |  | |  |  |  |  |
| `ConditionMatrixMaintRelevance` |  | |  |  |  |  |
| `ConfigblParametersAndFormulas` |  | |  |  |  |  |
| `ConditionAdjustedQuantity` |  | |  |  |  |  |
| `ConditionTypeName` |  | |  |  |  |  |
| `TaxCodeName` |  | |  |  |  |  |
| `ConditionIsDeletable` |  | |  |  |  |  |
| `PricingProcedure` |  | |  |  |  |  |
| `_StockTransportOrderItem` | | ✓ | | | | |
| `_StockTransportOrder` | | ✓ | | | | |
| `_BillingPriceSource` | | ✓ | | | | |
| `_ConditionAcctAssgmtRelevance` | | ✓ | | | | |
| `_ConditionAlternativeCurrency` | | ✓ | | | | |
| `_ConditionAmountLimitExceeded` | | ✓ | | | | |
| `_ConditionApplication` | | ✓ | | | | |
| `_ConditionBasisLimitExceeded` | | ✓ | | | | |
| `_ConditionCalculationType` | | ✓ | | | | |
| `_ConditionCategory` | | ✓ | | | | |
| `_ConditionClass` | | ✓ | | | | |
| `_ConditionControl` | | ✓ | | | | |
| `_ConditionCurrency` | | ✓ | | | | |
| `_ConditionInactiveReason` | | ✓ | | | | |
| `_ConditionOrigin` | | ✓ | | | | |
| `_ConditionQuantityUnit` | | ✓ | | | | |
| `_ConditionRateRatioUnit` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_PricingConditionType` | | ✓ | | | | |
| `_PricingScaleBasis` | | ✓ | | | | |
| `_ScaleCurrency` | | ✓ | | | | |
| `_StructureCondition` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_VariantCondition` | | ✓ | | | | |

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
