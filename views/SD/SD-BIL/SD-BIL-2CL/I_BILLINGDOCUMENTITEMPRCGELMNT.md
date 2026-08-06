---
name: I_BILLINGDOCUMENTITEMPRCGELMNT
description: Billing DocumentUMENTITEMPRCGELMNT
app_component: SD-BIL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - interface-view
  - billing-document
  - billing
  - document
  - item-level
  - component:SD-BIL-2CL
  - lob:Sales & Distribution
  - bo:BillingDocument
---
# I_BILLINGDOCUMENTITEMPRCGELMNT

**Billing DocumentUMENTITEMPRCGELMNT**

| Property | Value |
|---|---|
| App Component | `SD-BIL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BillingDocument` | `PricingElement.BillingDocument` |
| key `BillingDocumentItem` | `PricingElement.BillingDocumentItem` |
| key `PricingProcedureStep` | `PricingElement.PricingProcedureStep` |
| key `PricingProcedureCounter` | `PricingElement.PricingProcedureCounter` |
| `ConditionApplication` | `PricingElement.ConditionApplication` |
| `ConditionType` | `PricingElement.ConditionType` |
| `PricingDateTime` | `PricingElement.PricingDateTime` |
| `PriceConditionDeterminationDte` | `PricingElement.PriceConditionDeterminationDte` |
| `ConditionCalculationType` | `PricingElement.ConditionCalculationType` |
| `ConditionBaseValue` | `PricingElement.ConditionBaseValue` |
| `ConditionRateValue` | `PricingElement.ConditionRateValue` |
| `ConditionCurrency` | `PricingElement.ConditionCurrency` |
| `ConditionQuantity` | `PricingElement.ConditionQuantity` |
| `ConditionQuantityUnit` | `PricingElement.ConditionQuantityUnit` |
| `ConditionCategory` | `PricingElement.ConditionCategory` |
| `ConditionIsForStatistics` | `PricingElement.ConditionIsForStatistics` |
| `PricingScaleType` | `PricingElement.PricingScaleType` |
| `IsRelevantForAccrual` | `PricingElement.IsRelevantForAccrual` |
| `CndnIsRelevantForInvoiceList` | `PricingElement.CndnIsRelevantForInvoiceList` |
| `ConditionOrigin` | `PricingElement.ConditionOrigin` |
| `IsGroupCondition` | `PricingElement.IsGroupCondition` |
| `IsGroupCondition_2` | `PricingElement.IsGroupCondition_2` |
| `ConditionRecord` | `PricingElement.ConditionRecord` |
| `ConditionSequentialNumber` | `PricingElement.ConditionSequentialNumber` |
| `TaxCode` | `PricingElement.TaxCode` |
| `WithholdingTaxCode` | `PricingElement.WithholdingTaxCode` |
| `CndnRoundingOffDiffAmount` | `PricingElement.CndnRoundingOffDiffAmount` |
| `ConditionAmount` | `PricingElement.ConditionAmount` |
| `TransactionCurrency` | `PricingElement.TransactionCurrency` |
| `ConditionControl` | `PricingElement.ConditionControl` |
| `ConditionInactiveReason` | `PricingElement.ConditionInactiveReason` |
| `ConditionClass` | `PricingElement.ConditionClass` |
| `PrcgProcedureCounterForHeader` | `PricingElement.PrcgProcedureCounterForHeader` |
| `FactorForConditionBasisValue` | `PricingElement.FactorForConditionBasisValue` |
| `StructureCondition` | `PricingElement.StructureCondition` |
| `PeriodFactorForCndnBasisValue` | `PricingElement.PeriodFactorForCndnBasisValue` |
| `PricingScaleBasis` | `PricingElement.PricingScaleBasis` |
| `ConditionScaleBasisValue` | `PricingElement.ConditionScaleBasisValue` |
| `ConditionScaleBasisUnit` | `PricingElement.ConditionScaleBasisUnit` |
| `ConditionScaleBasisCurrency` | `PricingElement.ConditionScaleBasisCurrency` |
| `CndnIsRelevantForIntcoBilling` | `PricingElement.CndnIsRelevantForIntcoBilling` |
| `ConditionIsManuallyChanged` | `PricingElement.ConditionIsManuallyChanged` |
| `ConditionIsForConfiguration` | `PricingElement.ConditionIsForConfiguration` |
| `VariantCondition` | `PricingElement.VariantCondition` |
| `ConditionRateAmount` | `PricingElement.ConditionRateAmount` |
| `ConditionBaseAmount` | `PricingElement.ConditionBaseAmount` |
| `ConditionBaseQuantity` | `PricingElement.ConditionBaseQuantity` |
| `ConditionRateRatio` | `PricingElement.ConditionRateRatio` |
| `ConditionRateRatioUnit` | `PricingElement.ConditionRateRatioUnit` |
| `ConditionScaleBaseAmount` | `PricingElement.ConditionScaleBaseAmount` |
| `ConditionScaleBaseQuantity` | `PricingElement.ConditionScaleBaseQuantity` |
| `ConditionAbsoluteExchangeRate` | `PricingElement.ConditionAbsoluteExchangeRate` |
| `ConditionExchRateIsIndrctQtan` | `PricingElement.ConditionExchRateIsIndrctQtan` |
| `ConditionToBaseQtyNmrtr` | `PricingElement.ConditionToBaseQtyNmrtr` |
| `ConditionToBaseQtyDnmntr` | `PricingElement.ConditionToBaseQtyDnmntr` |
| `AccessNumberOfAccessSequence` | `PricingElement.AccessNumberOfAccessSequence` |
| `AccountKeyForGLAccount` | `PricingElement.AccountKeyForGLAccount` |
| `GLAccount` | `PricingElement.GLAccount` |
| `AccrualsGLAccount` | `PricingElement.AccrualsGLAccount` |
| `_BillingDocument` | *Association* |
| `_Item` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillingDocument` | `I_BillingDocument` | [1..1] |
| `_Item` | `I_BillingDocumentItem` | [1..1] |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'ISDBILDOCITPE'

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'Billing Document Item Pricing Element'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.usageType: { dataClass: #TRANSACTIONAL, serviceQuality: #B, sizeCategory: #XL }

@VDM.viewType: #BASIC

define view I_BillingDocumentItemPrcgElmnt
  as select from I_BillingDocItemPrcgElmntBasic as PricingElement

  association [1..1] to I_BillingDocument     as _BillingDocument
    on $projection.BillingDocument = _BillingDocument.BillingDocument

  association [1..1] to I_BillingDocumentItem as _Item
    on  $projection.BillingDocument     = _Item.BillingDocument
    and $projection.BillingDocumentItem = _Item.BillingDocumentItem

{
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BillingDocumentBasicStdVH', element: 'BillingDocument' } } ]
      @ObjectModel.foreignKey.association: '_BillingDocument'
  key PricingElement.BillingDocument,

      @ObjectModel.foreignKey.association: '_Item'
  key PricingElement.BillingDocumentItem,

  key PricingElement.PricingProcedureStep,
  key PricingElement.PricingProcedureCounter, // decision from pricing colleagues: keep wrong name, do not rename to PricingElementCounter

      @ObjectModel.foreignKey.association: '_ConditionApplication'
      PricingElement.ConditionApplication, // required for foreign key association of condition type

      @ObjectModel.foreignKey.association: '_PricingConditionType'
      PricingElement.ConditionType,

      @VDM.lifecycle: { status: #DEPRECATED, successor: 'PriceConditionDeterminationDte' }
      PricingElement.PricingDateTime,

      PricingElement.PriceConditionDeterminationDte,

      @ObjectModel.foreignKey.association: '_ConditionCalculationType'
      PricingElement.ConditionCalculationType,

      PricingElement.ConditionBaseValue,
      PricingElement.ConditionRateValue,

      @ObjectModel.foreignKey.association: '_ConditionCurrency'
      PricingElement.ConditionCurrency,

      @DefaultAggregation: #NONE
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      PricingElement.ConditionQuantity,

      @ObjectModel.foreignKey.association: '_ConditionQuantityUnit'
      @Semantics.unitOfMeasure: true
      PricingElement.ConditionQuantityUnit,

      @ObjectModel.foreignKey.association: '_ConditionCategory'
      PricingElement.ConditionCategory,

      PricingElement.ConditionIsForStatistics,
      PricingElement.PricingScaleType,
      PricingElement.IsRelevantForAccrual,
      PricingElement.CndnIsRelevantForInvoiceList,

      @ObjectModel.foreignKey.association: '_ConditionOrigin'
      PricingElement.ConditionOrigin,

      @API.element: { releaseState: #DEPRECATED, successor: 'IsGroupCondition_2' }
      PricingElement.IsGroupCondition,

      @Semantics.booleanIndicator: true
      PricingElement.IsGroupCondition_2,

      PricingElement.ConditionRecord,
      PricingElement.ConditionSequentialNumber,
      PricingElement.TaxCode,
      PricingElement.WithholdingTaxCode,

      @DefaultAggregation: #NONE
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      PricingElement.CndnRoundingOffDiffAmount,

      @DefaultAggregation: #NONE
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      PricingElement.ConditionAmount,

      @ObjectModel.foreignKey.association: '_Currency'
      @Semantics.currencyCode: true
      PricingElement.TransactionCurrency,

      @ObjectModel.foreignKey.association: '_ConditionControl'
      PricingElement.ConditionControl,

      @ObjectModel.foreignKey.association: '_ConditionInactiveReason'
      PricingElement.ConditionInactiveReason,

      @ObjectModel.foreignKey.association: '_ConditionClass'
      PricingElement.ConditionClass,

      PricingElement.PrcgProcedureCounterForHeader,
      PricingElement.FactorForConditionBasisValue,

      @ObjectModel.foreignKey.association: '_StructureCondition'
      PricingElement.StructureCondition,

      PricingElement.PeriodFactorForCndnBasisValue,

      @ObjectModel.foreignKey.association: '_PricingScaleBasis'
      PricingElement.PricingScaleBasis,

      PricingElement.ConditionScaleBasisValue,

      @ObjectModel.foreignKey.association: '_ScaleUnitOfMeasure'
      @Semantics.unitOfMeasure: true
      PricingElement.ConditionScaleBasisUnit,

      @ObjectModel.foreignKey.association: '_ScaleCurrency'
      @Semantics.currencyCode: true
      PricingElement.ConditionScaleBasisCurrency,

      PricingElement.CndnIsRelevantForIntcoBilling,
      PricingElement.ConditionIsManuallyChanged,
      PricingElement.ConditionIsForConfiguration,
      PricingElement.VariantCondition,

      @OData.v2.amount.noDecimalShift: true
      @Semantics.amount.currencyCode: 'ConditionCurrency'
      PricingElement.ConditionRateAmount,

      @OData.v2.amount.noDecimalShift: true
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      PricingElement.ConditionBaseAmount,

      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      PricingElement.ConditionBaseQuantity,

      @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
      PricingElement.ConditionRateRatio,

      @Semantics.unitOfMeasure: true
      PricingElement.ConditionRateRatioUnit,

      @OData.v2.amount.noDecimalShift: true
      @Semantics.amount.currencyCode: 'ConditionScaleBasisCurrency'
      PricingElement.ConditionScaleBaseAmount,

      @Semantics.quantity.unitOfMeasure: 'ConditionScaleBasisUnit'
      PricingElement.ConditionScaleBaseQuantity,

      PricingElement.ConditionAbsoluteExchangeRate,

      @Semantics.booleanIndicator: true
      PricingElement.ConditionExchRateIsIndrctQtan,

      PricingElement.ConditionToBaseQtyNmrtr,
      PricingElement.ConditionToBaseQtyDnmntr,
      PricingElement.AccessNumberOfAccessSequence,
      PricingElement.AccountKeyForGLAccount,
      PricingElement.GLAccount,
      PricingElement.AccrualsGLAccount,

      // Association
      @ObjectModel.association.type: [ #TO_COMPOSITION_ROOT ]
      _BillingDocument,

      @ObjectModel.association.type: [ #TO_COMPOSITION_PARENT ]
      _Item,

      PricingElement._ConditionApplication,
      PricingElement._PricingConditionType, // naming could be better: _ConditionType
      PricingElement._ConditionCalculationType,
      PricingElement._ConditionCurrency,
      PricingElement._Currency, // naming could be better: _TransactionCurrency
      PricingElement._ConditionQuantityUnit,
      PricingElement._ConditionCategory,
      PricingElement._ConditionOrigin,
      PricingElement._ConditionControl,
      PricingElement._ConditionInactiveReason,
      PricingElement._ConditionClass,
      PricingElement._PricingScaleBasis,
      PricingElement._ScaleUnitOfMeasure, // naming could be better: _ConditionScaleBasisUnit
      PricingElement._ScaleCurrency, // naming could be better: _ConditionScaleBasisCurrency
      PricingElement._VariantCondition,
      PricingElement._StructureCondition
}

where _BillingDocument.SDDocumentCategory = 'M' // Invoice
   or _BillingDocument.SDDocumentCategory = 'N' // Invoice Canceled
   or _BillingDocument.SDDocumentCategory = 'O' // Credit Memo
   or _BillingDocument.SDDocumentCategory = 'P' // Debit Memo
   or _BillingDocument.SDDocumentCategory = 'S' // Credit Memo Canceled
   or _BillingDocument.SDDocumentCategory = 'U' // Pro Forma Invoice
   or _BillingDocument.SDDocumentCategory = '5' // Intercompany Invoice
   or _BillingDocument.SDDocumentCategory = '6' // Intercompany Credit Memo
   or _BillingDocument.SDDocumentCategory = 'DPRQ' // Down Payment Request
   or _BillingDocument.SDDocumentCategory = 'DPCC' // Down Payment Cancellation
```
