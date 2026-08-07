---
name: I_SUPPLIERQUOTATIONPRCELMNTTP
description: Supplierquotationprcelmnttp
app_component: MM-PUR-RFQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-RFQ
  - interface-view
  - transactional-processing
  - supplier
  - component:MM-PUR-RFQ-2CL
  - lob:Sourcing & Procurement
  - bo:Supplier
---
# I_SUPPLIERQUOTATIONPRCELMNTTP

**Supplierquotationprcelmnttp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-RFQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupplierQuotation` | ✓ | |  |  |  |  |
| `SupplierQuotationItem` | ✓ | |  |  |  |  |
| `PricingDocument` | ✓ | |  |  |  |  |
| `PricingDocumentItem` | ✓ | |  |  |  |  |
| `PricingProcedureStep` | ✓ | |  |  |  |  |
| `PricingProcedureCounter` | ✓ | |  |  |  |  |
| `ConditionApplication` |  | |  |  |  |  |
| `ConditionType` |  | |  |  |  |  |
| `ConditionCalculationType` |  | |  |  |  |  |
| `ConditionBaseValue` |  | |  |  |  |  |
| `ConditionRateValue` |  | |  |  |  |  |
| `ConditionCurrency` |  | |  |  |  |  |
| `AbsoluteExchangeRate` |  | |  |  |  |  |
| `EffectiveExchangeRate` |  | |  |  |  |  |
| `ExchRateIsIndirectQuotation` |  | |  |  |  |  |
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
| `ConditionScaleBasisValue` |  | |  |  |  |  |
| `ConditionScaleBasisUnit` |  | |  |  |  |  |
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
| `CumulatedConditionBasisValue` |  | |  |  |  |  |
| `CustomerRebateRecipient` |  | |  |  |  |  |
| `ConditionIsForConfiguration` |  | |  |  |  |  |
| `VariantCondition` |  | |  |  |  |  |
| `ConditionAcctAssgmtRelevance` |  | |  |  |  |  |
| `ConditionMatrixMaintRelevance` |  | |  |  |  |  |
| `ConfigblParametersAndFormulas` |  | |  |  |  |  |
| `ConditionAdjustedQuantity` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `_SupplierQuotation` | | ✓ | | | | |
| `_SupplierQuotationItem` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Supplier QTN Item Pricing - TP'
@AccessControl: { authorizationCheck: #CHECK, personalData.blocking: #REQUIRED }

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey:  ['SupplierQuotation', 'SupplierQuotationItem', 'PricingDocument', 'PricingDocumentItem', 'PricingProcedureStep', 'PricingProcedureCounter' ]

@ObjectModel: {
    usageType: {
      sizeCategory: #XL,
      serviceQuality: #B,
      dataClass: #TRANSACTIONAL
    }
 }

@Metadata.ignorePropagatedAnnotations: true
define view entity I_SupplierQuotationPrcElmntTP
  as projection on R_SupplierQuotationPrcElmntTP

{

  key SupplierQuotation,
  key SupplierQuotationItem,
  key PricingDocument,
  key PricingDocumentItem,
  key PricingProcedureStep,
  key PricingProcedureCounter,
      ConditionApplication,
      ConditionType,
      ConditionCalculationType,
      ConditionBaseValue,
      ConditionRateValue,
      ConditionCurrency,
      //PriceDetnExchangeRate,
      AbsoluteExchangeRate,
      EffectiveExchangeRate,
      ExchRateIsIndirectQuotation,
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      ConditionQuantity,
      ConditionQuantityUnit,
      ConditionToBaseQtyNmrtr,
      ConditionToBaseQtyDnmntr,
      ConditionCategory,
      ConditionIsForStatistics,
      PricingScaleType,
      IsRelevantForAccrual,
      @Semantics.booleanIndicator:  true
      CndnIsRelevantForInvoiceList,
      ConditionOrigin,
      @Semantics.booleanIndicator:  true
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
      @Semantics.amount.currencyCode: 'TransactionCurrency'
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
      _SupplierQuotation     : redirected to I_SupplierQuotationTP,
      _SupplierQuotationItem : redirected to parent I_SupplierQuotationItemTP

}
```
