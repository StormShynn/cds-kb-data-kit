---
name: I_PURORDITMPRICINGELEMENTAPI01
description: Purorditmpricingelementapi 01
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
# I_PURORDITMPRICINGELEMENTAPI01

**Purorditmpricingelementapi 01**

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
| key `PurchaseOrderItem` | `pricing.PurchaseOrderItem` |
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
| `_PurchaseOrderItem` | *Association* |
| `_Supplier` | *Association* |
| `_ConditionCurrencyText` | *Association* |
| `_ConditionCategoryText` | *Association* |
| `_PricingScaleTypeText` | *Association* |
| `_ConditionOriginText` | *Association* |
| `_VariantConditionText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurchaseOrder` | `I_PurchaseOrderAPI01` | [1..1] |
| `_PurchaseOrderItem` | `I_PurchaseOrderItemAPI01` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'IMMPOITMPRCAPI01'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Pricing Element in Purchase Order Item'
@VDM.viewType : #BASIC
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view I_PurOrdItmPricingElementAPI01 
  as select from I_PurOrdItemPricingElement as pricing
      association [1..1] to I_PurchaseOrderAPI01          as _PurchaseOrder        on  $projection.PurchaseOrder  = _PurchaseOrder.PurchaseOrder
      association [1..1] to I_PurchaseOrderItemAPI01      as _PurchaseOrderItem    on  pricing.PurchaseOrder      = _PurchaseOrderItem.PurchaseOrder
                                                                                   and pricing.PurchaseOrderItem  = _PurchaseOrderItem.PurchaseOrderItem
{

  key pricing.PurchaseOrder,
  key pricing.PurchaseOrderItem,
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

      @Semantics.currencyCode: true
      @ObjectModel.text.association: '_ConditionCurrencyText'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CurrencyStdVH', element: 'Currency' }, useAsTemplate: true }]       //CustomUI
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
      @ObjectModel.text.association: '_ConditionCategoryText'
      ConditionCategory,
      ConditionIsForStatistics,
      @ObjectModel.text.association: '_PricingScaleTypeText'
      PricingScaleType,
      IsRelevantForAccrual,
      @Semantics.booleanIndicator: true
      CndnIsRelevantForInvoiceList,
      @ObjectModel.text.association: '_ConditionOriginText'
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

      @Semantics.amount.currencyCode: 'ConditionCurrency'
      CndnRoundingOffDiffAmount,

      @Semantics.amount.currencyCode: 'ConditionCurrency'
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
      @ObjectModel.text.association: '_VariantConditionText'
      VariantCondition,
      ConditionAcctAssgmtRelevance,
      ConditionMatrixMaintRelevance,
      ConfigblParametersAndFormulas,
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      ConditionAdjustedQuantity,
      CndnValueZeroProcgCode,
      
      _PurchaseOrder,    
      _PurchaseOrderItem,
      
      // CustomUI additions
      _Supplier,
      
      // Text associations for CustomUI
      _ConditionCurrencyText,
      _ConditionCategoryText,
      _PricingScaleTypeText,
      _ConditionOriginText,
      _VariantConditionText 
}
```
