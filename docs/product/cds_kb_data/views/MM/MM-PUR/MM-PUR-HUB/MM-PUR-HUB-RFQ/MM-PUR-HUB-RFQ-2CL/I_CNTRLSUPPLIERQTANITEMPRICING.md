---
name: I_CNTRLSUPPLIERQTANITEMPRICING
description: "Cntrlsupplierqtanitempricing"
app_component: MM-PUR-HUB-RFQ-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-HUB
  - interface-view
  - supplier
  - pricing
  - item-level
  - component:MM-PUR-HUB-RFQ-2CL
  - lob:Sourcing & Procurement
  - bo:Supplier
---
# I_CNTRLSUPPLIERQTANITEMPRICING

**Cntrlsupplierqtanitempricing**

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
| `PricingDateTime` |  | |  |  |  |  |
| `PriceConditionDeterminationDte` |  | |  | `cast( LEFT(R_CntrlSupplierQtanItemPricing.PricingDateTime, 8) as abap.dats )` |  |  |
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
| `_CentralSupplierQuotation` | | ✓ | | | | |
| `_CntrlSupplierQuotationItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CentralSupplierQuotation` | `I_CentralSupplierQuotation` | [1..1] |
| `_CntrlSupplierQuotationItem` | `I_CntrlSupplierQuotationItem` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNTRLQTNPRCG'
@VDM.viewType: #BASIC
@EndUserText.label: 'Central Supplier Quotation Pricing'
@AbapCatalog.preserveKey: true

@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType.dataClass:#TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory:#XL
@ObjectModel: {
  semanticKey: ['CentralSupplierQuotation', 'CentralSupplierQuotationItem', 'PricingDocument', 'PricingDocumentItem','PricingProcedureStep', 'PricingProcedureCounter']
}

@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]

define view I_CntrlSupplierQtanItemPricing
  as select from R_CntrlSupplierQtanItemPricing

  association [1..1] to I_CentralSupplierQuotation   as _CentralSupplierQuotation   on  $projection.CentralSupplierQuotation = _CentralSupplierQuotation.CentralSupplierQuotation

  association [1..1] to I_CntrlSupplierQuotationItem as _CntrlSupplierQuotationItem on  $projection.CentralSupplierQuotation     = _CntrlSupplierQuotationItem.CentralSupplierQuotation
                                                                                    and $projection.CentralSupplierQuotationItem = _CntrlSupplierQuotationItem.CentralSupplierQuotationItem
{
  key R_CntrlSupplierQtanItemPricing.CentralSupplierQuotation,
  key R_CntrlSupplierQtanItemPricing.CentralSupplierQuotationItem,
  key R_CntrlSupplierQtanItemPricing.PricingDocument,
  key R_CntrlSupplierQtanItemPricing.PricingDocumentItem,
  key R_CntrlSupplierQtanItemPricing.PricingProcedureStep,
  key R_CntrlSupplierQtanItemPricing.PricingProcedureCounter,
      R_CntrlSupplierQtanItemPricing.ConditionApplication,
      R_CntrlSupplierQtanItemPricing.ConditionType,
      @Semantics.dateTime: true 
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'PriceConditionDeterminationDte'
      R_CntrlSupplierQtanItemPricing.PricingDateTime,
      cast( LEFT(R_CntrlSupplierQtanItemPricing.PricingDateTime, 8) as abap.dats ) as PriceConditionDeterminationDte,
      R_CntrlSupplierQtanItemPricing.ConditionCalculationType,
      R_CntrlSupplierQtanItemPricing.ConditionBaseValue,
      R_CntrlSupplierQtanItemPricing.ConditionRateValue,
      @Semantics.amount: true
      R_CntrlSupplierQtanItemPricing.ConditionCurrency,
      R_CntrlSupplierQtanItemPricing.PriceDetnExchangeRate,
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      R_CntrlSupplierQtanItemPricing.ConditionQuantity,
      @Semantics.unitOfMeasure: true
      R_CntrlSupplierQtanItemPricing.ConditionQuantityUnit,
      R_CntrlSupplierQtanItemPricing.ConditionToBaseQtyNmrtr,
      R_CntrlSupplierQtanItemPricing.ConditionToBaseQtyDnmntr,
      R_CntrlSupplierQtanItemPricing.ConditionCategory,
      R_CntrlSupplierQtanItemPricing.ConditionIsForStatistics,
      R_CntrlSupplierQtanItemPricing.PricingScaleType,
      R_CntrlSupplierQtanItemPricing.IsRelevantForAccrual,
      @Semantics.booleanIndicator
      R_CntrlSupplierQtanItemPricing.CndnIsRelevantForInvoiceList,
      R_CntrlSupplierQtanItemPricing.ConditionOrigin,
      @Semantics.booleanIndicator
      R_CntrlSupplierQtanItemPricing.IsGroupCondition,
      R_CntrlSupplierQtanItemPricing.AccessNumberOfAccessSequence,
      R_CntrlSupplierQtanItemPricing.ConditionRecord,
      R_CntrlSupplierQtanItemPricing.ConditionSequentialNumber,
      R_CntrlSupplierQtanItemPricing.AccountKeyForGLAccount,
      R_CntrlSupplierQtanItemPricing.GLAccount,
      R_CntrlSupplierQtanItemPricing.TaxCode,
      R_CntrlSupplierQtanItemPricing.AcctKeyForAccrualsGLAccount,
      R_CntrlSupplierQtanItemPricing.AccrualsGLAccount,
      R_CntrlSupplierQtanItemPricing.WithholdingTaxCode,
      R_CntrlSupplierQtanItemPricing.FreightSupplier,
      @Semantics.amount.currencyCode: 'ConditionCurrency'
      R_CntrlSupplierQtanItemPricing.CndnRoundingOffDiffAmount,
      @Semantics.amount.currencyCode: 'ConditionCurrency'
      R_CntrlSupplierQtanItemPricing.ConditionAmount,
      R_CntrlSupplierQtanItemPricing.TransactionCurrency,
      R_CntrlSupplierQtanItemPricing.ConditionControl,
      R_CntrlSupplierQtanItemPricing.ConditionInactiveReason,
      R_CntrlSupplierQtanItemPricing.ConditionClass,
      R_CntrlSupplierQtanItemPricing.PrcgProcedureCounterForHeader,
      R_CntrlSupplierQtanItemPricing.FactorForConditionBasisValue,
      R_CntrlSupplierQtanItemPricing.StructureCondition,
      R_CntrlSupplierQtanItemPricing.PeriodFactorForCndnBasisValue,
      R_CntrlSupplierQtanItemPricing.PricingScaleBasis,
      R_CntrlSupplierQtanItemPricing.ConditionScaleBasisValue,
      R_CntrlSupplierQtanItemPricing.ConditionScaleBasisUnit,
      R_CntrlSupplierQtanItemPricing.ConditionScaleBasisCurrency,
      R_CntrlSupplierQtanItemPricing.ConditionAlternativeCurrency,
      @Semantics.amount.currencyCode: 'ConditionCurrency'
      R_CntrlSupplierQtanItemPricing.ConditionAmountInLocalCrcy,
      R_CntrlSupplierQtanItemPricing.CndnIsRelevantForIntcoBilling,
      R_CntrlSupplierQtanItemPricing.ConditionIsManuallyChanged,
      R_CntrlSupplierQtanItemPricing.BillingPriceSource,
      R_CntrlSupplierQtanItemPricing.TaxJurisdictionLevel,
      R_CntrlSupplierQtanItemPricing.ConditionByteSequence,
      R_CntrlSupplierQtanItemPricing.CndnIsRelevantForLimitValue,
      R_CntrlSupplierQtanItemPricing.ConditionBasisLimitExceeded,
      R_CntrlSupplierQtanItemPricing.ConditionAmountLimitExceeded,
      R_CntrlSupplierQtanItemPricing.CumulatedConditionBasisValue,
      R_CntrlSupplierQtanItemPricing.CustomerRebateRecipient,
      R_CntrlSupplierQtanItemPricing.ConditionIsForConfiguration,
      R_CntrlSupplierQtanItemPricing.VariantCondition,
      R_CntrlSupplierQtanItemPricing.ConditionAcctAssgmtRelevance,
      R_CntrlSupplierQtanItemPricing.ConditionMatrixMaintRelevance,
      R_CntrlSupplierQtanItemPricing.ConfigblParametersAndFormulas,
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      R_CntrlSupplierQtanItemPricing.ConditionAdjustedQuantity,


      /* Associations */
      @ObjectModel.association.type: #TO_COMPOSITION_ROOT
      _CentralSupplierQuotation,
      @ObjectModel.association.type: #TO_COMPOSITION_PARENT
      _CntrlSupplierQuotationItem,
      //
      R_CntrlSupplierQtanItemPricing._BillingPriceSource,
      R_CntrlSupplierQtanItemPricing._ConditionAcctAssgmtRelevance,
      R_CntrlSupplierQtanItemPricing._ConditionAlternativeCurrency,
      R_CntrlSupplierQtanItemPricing._ConditionAmountLimitExceeded,
      R_CntrlSupplierQtanItemPricing._ConditionApplication,
      R_CntrlSupplierQtanItemPricing._ConditionBasisLimitExceeded,
      R_CntrlSupplierQtanItemPricing._ConditionCalculationType,
      R_CntrlSupplierQtanItemPricing._ConditionCategory,
      R_CntrlSupplierQtanItemPricing._ConditionClass,
      R_CntrlSupplierQtanItemPricing._ConditionControl,
      R_CntrlSupplierQtanItemPricing._ConditionCurrency,
      R_CntrlSupplierQtanItemPricing._ConditionInactiveReason,
      R_CntrlSupplierQtanItemPricing._ConditionOrigin,
      R_CntrlSupplierQtanItemPricing._Currency,
      R_CntrlSupplierQtanItemPricing._Customer,
      R_CntrlSupplierQtanItemPricing._PricingConditionType,
      R_CntrlSupplierQtanItemPricing._PricingScaleBasis,
      R_CntrlSupplierQtanItemPricing._ConditionQuantityUnit,
      R_CntrlSupplierQtanItemPricing._ScaleCurrency,
      R_CntrlSupplierQtanItemPricing._ScaleUnitOfMeasure,
      R_CntrlSupplierQtanItemPricing._StructureCondition,
      R_CntrlSupplierQtanItemPricing._Supplier,
      R_CntrlSupplierQtanItemPricing._VariantCondition

}
```
