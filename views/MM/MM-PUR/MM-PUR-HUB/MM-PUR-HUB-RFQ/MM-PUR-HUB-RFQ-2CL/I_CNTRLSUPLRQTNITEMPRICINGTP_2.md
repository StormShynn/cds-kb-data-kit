---
name: I_CNTRLSUPLRQTNITEMPRICINGTP_2
description: Cntrlsuplrqtnitempricingtp 2
app_component: MM-PUR-HUB-RFQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-HUB
  - interface-view
  - transactional-processing
  - pricing
  - item-level
  - component:MM-PUR-HUB-RFQ-2CL
  - lob:Sourcing & Procurement
---
# I_CNTRLSUPLRQTNITEMPRICINGTP_2

**Cntrlsuplrqtnitempricingtp 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-RFQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CentralSupplierQuotation` | `CentralSupplierQuotation` |
| key `CentralSupplierQuotationItem` | `CentralSupplierQuotationItem` |
| key `PricingDocument` | `PricingDocument` |
| key `PricingDocumentItem` | `PricingDocumentItem` |
| key `PricingProcedureStep` | `PricingProcedureStep` |
| key `PricingProcedureCounter` | `PricingProcedureCounter` |
| `ConditionApplication` | `ConditionApplication` |
| `ConditionType` | `ConditionType` |
| `PriceConditionDeterminationDte` | `PriceConditionDeterminationDte` |
| `ConditionCalculationType` | `ConditionCalculationType` |
| `ConditionBaseValue` | `ConditionBaseValue` |
| `ConditionRateValue` | `ConditionRateValue` |
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
| `LastChangeDateTime` | `LastChangeDateTime` |
| `_CntrlSupplierQuotationItem` | *Association* |
| `_CntrlQtan` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Cntrl Supplier Qtn Item Pricing'
@AccessControl.authorizationCheck: #CHECK

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey: ['CentralSupplierQuotation', 'CentralSupplierQuotationItem', 'PricingDocument', 'PricingDocumentItem', 'PricingProcedureStep', 'PricingProcedureCounter']
@ObjectModel:{
               usageType.dataClass: #TRANSACTIONAL,
               usageType.serviceQuality: #B,
               usageType.sizeCategory: #XXL
             }
@Metadata.ignorePropagatedAnnotations: true
define view entity I_CntrlSuplrQtnItemPricingTP_2
  as projection on R_CntrlSuplrQtnItemPricingTP
{
  key CentralSupplierQuotation,
  key CentralSupplierQuotationItem,
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
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      ConditionAdjustedQuantity,
      LastChangeDateTime,
      /* Associations */
      _CntrlSupplierQuotationItem : redirected to parent I_CntrlSuplrQuotationItemTP_2,
      _CntrlQtan                  : redirected to I_CentralSupplierQuotationTP_2
}
```
