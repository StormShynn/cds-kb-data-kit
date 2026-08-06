---
name: I_PURORDPRICINGELEMENTTP_2
description: Purordpricingelementtp 2
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
  - component:MM-PUR-PO-2CL
  - lob:Sourcing & Procurement
---
# I_PURORDPRICINGELEMENTTP_2

**Purordpricingelementtp 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-PO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PurchaseOrder` | `PurchaseOrder` |
| key `PurchaseOrderItem` | `PurchaseOrderItem` |
| key `PricingDocument` | `PricingDocument` |
| key `PricingDocumentItem` | `PricingDocumentItem` |
| key `PricingProcedureStep` | `PricingProcedureStep` |
| key `PricingProcedureCounter` | `PricingProcedureCounter` |
| `ConditionApplication` | `ConditionApplication` |
| `ConditionType` | `ConditionType` |
| `PriceConditionDeterminationDte` | `PriceConditionDeterminationDte` |
| `ConditionCalculationType` | `ConditionCalculationType` |
| `ConditionBaseAmount` | `ConditionBaseAmount` |
| `ConditionBaseValue` | `ConditionBaseValue` |
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
| `ConditionScaleBasisValue` | `ConditionScaleBasisValue` |
| `ConditionScaleBasisUnit` | `ConditionScaleBasisUnit` |
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
| `CumulatedConditionBasisValue` | `CumulatedConditionBasisValue` |
| `CustomerRebateRecipient` | `CustomerRebateRecipient` |
| `ConditionIsForConfiguration` | `ConditionIsForConfiguration` |
| `VariantCondition` | `VariantCondition` |
| `ConditionAcctAssgmtRelevance` | `ConditionAcctAssgmtRelevance` |
| `ConditionMatrixMaintRelevance` | `ConditionMatrixMaintRelevance` |
| `ConfigblParametersAndFormulas` | `ConfigblParametersAndFormulas` |
| `ConditionAdjustedQuantity` | `ConditionAdjustedQuantity` |
| `ConditionTypeName` | `ConditionTypeName` |
| `ConditionBaseValueIntlUnit` | `ConditionBaseValueIntlUnit` |
| `ConditionBaseValueUnit` | `ConditionBaseValueUnit` |
| `ConditionRateValueIntlUnit` | `ConditionRateValueIntlUnit` |
| `ConditionRateValueUnit` | `ConditionRateValueUnit` |
| `TaxCodeName` | `TaxCodeName` |
| `ConditionIsDeletable` | `ConditionIsDeletable` |
| `PricingProcedure` | `PricingProcedure` |
| `SuperordinateDocument` | `SuperordinateDocument` |
| `SuperordinateDocumentItem` | `SuperordinateDocumentItem` |
| `_PurchaseOrderItem` | *Association* |
| `_PurchaseOrder` | *Association* |
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
| `_ScaleUnitOfMeasure` | *Association* |
| `_StructureCondition` | *Association* |
| `_Supplier` | *Association* |
| `_VariantCondition` | *Association* |

## Source Code

```abap
@EndUserText.label: 'PO Pricing Element Projection'
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #MASTER}
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
define view entity I_PurOrdPricingElementTP_2
  as projection on R_PurOrderItemPricingElementTP
{
  key PurchaseOrder,
  key PurchaseOrderItem,
  key PricingDocument,
  key PricingDocumentItem,
  key PricingProcedureStep,
  key PricingProcedureCounter,

      ConditionApplication,
      ConditionType,
      @Semantics.dateTime: true
      --PricingDateTime,
      PriceConditionDeterminationDte,
      ConditionCalculationType,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      @OData.v2.amount.noDecimalShift: true       
      ConditionBaseAmount,
      ConditionBaseValue,
//      ConditionRateValue,
      @Semantics.amount.currencyCode: 'ConditionCurrency'
      @OData.v2.amount.noDecimalShift: true       
      ConditionRateAmount,
      @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'      
      ConditionRateRatio,
      ConditionRateRatioUnit,    
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
      ConditionOrigin,
      @Semantics.booleanIndicator: true
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
      ConditionScaleBasisValue,
      ConditionScaleBasisUnit,
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
      CumulatedConditionBasisValue,
      CustomerRebateRecipient,
      ConditionIsForConfiguration,
      VariantCondition,
      ConditionAcctAssgmtRelevance,
      ConditionMatrixMaintRelevance,
      ConfigblParametersAndFormulas,
      
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      ConditionAdjustedQuantity,
      ConditionTypeName,
      ConditionBaseValueIntlUnit,
      ConditionBaseValueUnit,
      ConditionRateValueIntlUnit,
      ConditionRateValueUnit,
      TaxCodeName,
      @Semantics.booleanIndicator: true
      ConditionIsDeletable,
      PricingProcedure,
      SuperordinateDocument,
      SuperordinateDocumentItem,

      /* Composition */
      _PurchaseOrderItem : redirected to parent I_PurchaseOrderItemTP_2,
      _PurchaseOrder     : redirected to I_PurchaseOrderTP_2,

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
      _ScaleUnitOfMeasure,
      _StructureCondition,
      _Supplier,
      _VariantCondition
}
```
