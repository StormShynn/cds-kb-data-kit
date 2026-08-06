---
name: I_PURORDPRICINGELEMENTAPI01
description: Purordpricingelementapi 01
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
  - pricing
  - component:MM-PUR-PO-2CL
  - lob:Sourcing & Procurement
---
# I_PURORDPRICINGELEMENTAPI01

**Purordpricingelementapi 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-PO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PurchaseOrder` | `pricing.PurchaseOrder` |
| key `PricingDocument` | `PricingDocument` |
| key `PricingDocumentItem` | `PricingDocumentItem` |
| key `PricingProcedureStep` | `PricingProcedureStep` |
| key `PricingProcedureCounter` | `PricingProcedureCounter` |
| `ConditionApplication` | `ConditionApplication` |
| `ConditionType` | `ConditionType` |
| `PricingDateTime` | `PricingDateTime` |
| `ConditionCalculationType` | `ConditionCalculationType` |
| `ConditionBaseValue` | `ConditionBaseValue` |
| `ConditionRateValue` | `ConditionRateValue` |
| `ConditionCurrency` | `ConditionCurrency` |
| `PriceDetnExchangeRate` | `PriceDetnExchangeRate` |
| `AbsltPriceDetnExchangeRate` | `cast(abs( PriceDetnExchangeRate ) as kursk_abs)` |
| `PriceDetnExchRateIsIndrctQtan` | `cast(case when PriceDetnExchangeRate < 0 then 'X' else ' ' end as kursk_quotatn_is_indirect)` |
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
| `CndnValueZeroProcgCode` | `CndnValueZeroProcgCode` |
| `_PurchaseOrder` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurchaseOrder` | `I_PurchaseOrderAPI01` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'IMMPURORDPRIAP01'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Pricing Element in Purchase Order'
@VDM.viewType : #BASIC
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view I_PurOrdPricingElementAPI01 as select from I_PurchaseOrderPricingElement as pricing 
     
      association [1..1] to I_PurchaseOrderAPI01         as _PurchaseOrder           on  $projection.PurchaseOrder      = _PurchaseOrder.PurchaseOrder

{

  key pricing.PurchaseOrder         as PurchaseOrder,
     
  key PricingDocument,
  key PricingDocumentItem,
  key PricingProcedureStep,
  key PricingProcedureCounter,
  
      ConditionApplication,
      ConditionType,
      @Semantics.dateTime: true
      PricingDateTime,
      ConditionCalculationType,
      ConditionBaseValue,
      ConditionRateValue,

      ConditionCurrency,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'AbsltPriceDetnExchangeRate'
      PriceDetnExchangeRate,
      cast(abs( PriceDetnExchangeRate ) as kursk_abs)                                                as AbsltPriceDetnExchangeRate,
      cast(case when PriceDetnExchangeRate < 0 then 'X' else ' ' end  as kursk_quotatn_is_indirect)  as PriceDetnExchRateIsIndrctQtan,      
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      ConditionQuantity,
      @Semantics.unitOfMeasure: true
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
      @Semantics.currencyCode: true
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
      @Semantics.unitOfMeasure: true
      ConditionScaleBasisUnit,
      @Semantics.currencyCode: true
      ConditionScaleBasisCurrency,
      @Semantics.currencyCode: true
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
      CndnValueZeroProcgCode,
     
      _PurchaseOrder
  
}
```
