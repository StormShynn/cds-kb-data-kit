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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CentralSupplierQuotation` | ✓ | |  |  |  |  |
| `CentralSupplierQuotationItem` | ✓ | |  |  |  |  |
| `PricingDocument` | ✓ | |  |  |  |  |
| `PricingDocumentItem` | ✓ | |  |  |  |  |
| `PricingProcedureStep` | ✓ | |  |  |  |  |
| `PricingProcedureCounter` | ✓ | |  |  |  |  |
| `ConditionApplication` |  | |  |  |  |  |
| `ConditionType` |  | |  |  |  |  |
| `PriceConditionDeterminationDte` |  | |  |  |  |  |
| `ConditionCalculationType` |  | |  |  |  |  |
| `ConditionBaseValue` |  | |  |  |  |  |
| `ConditionRateValue` |  | |  |  |  |  |
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
| `ConditionScaleBasisValue` |  | |  |  |  |  |
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
| `_CntrlSupplierQuotationItem` | | ✓ | | | | |
| `_CntrlQtan` | | ✓ | | | | |

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
