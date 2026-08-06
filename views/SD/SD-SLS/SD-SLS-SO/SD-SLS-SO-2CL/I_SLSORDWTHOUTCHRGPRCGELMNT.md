---
name: I_SLSORDWTHOUTCHRGPRCGELMNT
description: Slsordwthoutchrgprcgelmnt
app_component: SD-SLS-SO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-SO
  - interface-view
  - component:SD-SLS-SO-2CL
  - lob:Sales & Distribution
---
# I_SLSORDWTHOUTCHRGPRCGELMNT

**Slsordwthoutchrgprcgelmnt**

| Property | Value |
|---|---|
| App Component | `SD-SLS-SO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SalesOrderWithoutCharge` | `cast(SalesDocument as sales_order_without_charge preserving type)` |
| key `PricingProcedureStep` | `PricingProcedureStep` |
| key `PricingProcedureCounter` | `PricingProcedureCounter` |
| `ConditionApplication` | `ConditionApplication` |
| `ConditionType` | `ConditionType` |
| `PriceConditionDeterminationDte` | `PriceConditionDeterminationDte` |
| `ConditionCalculationType` | `ConditionCalculationType` |
| `ConditionBaseValue` | `ConditionBaseValue` |
| `ConditionRateValue` | `ConditionRateValue` |
| `ConditionCurrency` | `ConditionCurrency` |
| `ConditionQuantity` | `ConditionQuantity` |
| `ConditionQuantityUnit` | `ConditionQuantityUnit` |
| `ConditionCategory` | `ConditionCategory` |
| `ConditionIsForStatistics` | `ConditionIsForStatistics` |
| `PricingScaleType` | `PricingScaleType` |
| `IsRelevantForAccrual` | `IsRelevantForAccrual` |
| `CndnIsRelevantForInvoiceList` | `CndnIsRelevantForInvoiceList` |
| `ConditionOrigin` | `ConditionOrigin` |
| `IsGroupCondition` | `IsGroupCondition` |
| `ConditionRecord` | `ConditionRecord` |
| `ConditionSequentialNumber` | `ConditionSequentialNumber` |
| `TaxCode` | `TaxCode` |
| `WithholdingTaxCode` | `WithholdingTaxCode` |
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
| `CndnIsRelevantForIntcoBilling` | `CndnIsRelevantForIntcoBilling` |
| `ConditionIsManuallyChanged` | `ConditionIsManuallyChanged` |
| `ConditionIsForConfiguration` | `ConditionIsForConfiguration` |
| `VariantCondition` | `VariantCondition` |
| `ConditionRateAmount` | `ConditionRateAmount` |
| `ConditionRateRatio` | `ConditionRateRatio` |
| `ConditionRateRatioUnit` | `ConditionRateRatioUnit` |
| `ConditionBaseAmount` | `ConditionBaseAmount` |
| `ConditionBaseQuantity` | `ConditionBaseQuantity` |
| `_SalesOrderWithoutCharge` | *Association* |
| `_ConditionApplication` | *Association* |
| `_PricingConditionType` | *Association* |
| `_ConditionCalculationType` | *Association* |
| `_ConditionCurrency` | *Association* |
| `_Currency` | *Association* |
| `_ConditionQuantityUnit` | *Association* |
| `_ConditionCategory` | *Association* |
| `_ConditionOrigin` | *Association* |
| `_ConditionControl` | *Association* |
| `_ConditionInactiveReason` | *Association* |
| `_ConditionClass` | *Association* |
| `_PricingScaleBasis` | *Association* |
| `_ScaleUnitOfMeasure` | *Association* |
| `_ScaleCurrency` | *Association* |
| `_VariantCondition` | *Association* |
| `_StructureCondition` | *Association* |
| `_ConditionRateRatioUnit` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesOrderWithoutCharge` | `I_SalesOrderWithoutCharge` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@EndUserText.label: 'Sls Order Without Charge Pricing Element'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.usageType: { dataClass: #TRANSACTIONAL, serviceQuality: #B, sizeCategory: #XL }

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

define view entity I_SlsOrdWthoutChrgPrcgElmnt
  as select from I_SalesDocumentPricingElement as PricingElement

  association [1..1] to I_SalesOrderWithoutCharge as _SalesOrderWithoutCharge on $projection.SalesOrderWithoutCharge = _SalesOrderWithoutCharge.SalesOrderWithoutCharge

{
      @ObjectModel.foreignKey.association: '_SalesOrderWithoutCharge'
  key cast(SalesDocument as sales_order_without_charge preserving type) as SalesOrderWithoutCharge,

  key PricingProcedureStep,
  key PricingProcedureCounter,

      @ObjectModel.foreignKey.association: '_ConditionApplication'
      ConditionApplication,

      @ObjectModel.foreignKey.association: '_PricingConditionType'
      ConditionType,

      PriceConditionDeterminationDte,

      @ObjectModel.foreignKey.association: '_ConditionCalculationType'
      ConditionCalculationType,

      ConditionBaseValue,
      ConditionRateValue,

      @ObjectModel.foreignKey.association: '_ConditionCurrency'
      ConditionCurrency,

      @Aggregation.default: #NONE
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      ConditionQuantity,

      @ObjectModel.foreignKey.association: '_ConditionQuantityUnit'
      ConditionQuantityUnit,

      @ObjectModel.foreignKey.association: '_ConditionCategory'
      ConditionCategory,

      ConditionIsForStatistics,
      PricingScaleType,
      IsRelevantForAccrual,
      @Semantics.booleanIndicator: true
      CndnIsRelevantForInvoiceList,

      @ObjectModel.foreignKey.association: '_ConditionOrigin'
      ConditionOrigin,

      @Semantics.booleanIndicator: true
      IsGroupCondition,
      ConditionRecord,
      ConditionSequentialNumber,
      TaxCode,
      WithholdingTaxCode,

      @Aggregation.default: #NONE
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      CndnRoundingOffDiffAmount,

      @Aggregation.default: #NONE
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      ConditionAmount,

      @ObjectModel.foreignKey.association: '_Currency'
      TransactionCurrency,

      @ObjectModel.foreignKey.association: '_ConditionControl'
      ConditionControl,

      @ObjectModel.foreignKey.association: '_ConditionInactiveReason'
      ConditionInactiveReason,

      @ObjectModel.foreignKey.association: '_ConditionClass'
      ConditionClass,

      PrcgProcedureCounterForHeader,
      FactorForConditionBasisValue,

      @ObjectModel.foreignKey.association: '_StructureCondition'
      StructureCondition,

      PeriodFactorForCndnBasisValue,

      @ObjectModel.foreignKey.association: '_PricingScaleBasis'
      PricingScaleBasis,

      ConditionScaleBasisValue,

      @ObjectModel.foreignKey.association: '_ScaleUnitOfMeasure'
      ConditionScaleBasisUnit,

      @ObjectModel.foreignKey.association: '_ScaleCurrency'
      ConditionScaleBasisCurrency,

      CndnIsRelevantForIntcoBilling,
      ConditionIsManuallyChanged,
      ConditionIsForConfiguration,
      VariantCondition,

      @OData.v2.amount.noDecimalShift: true
      @Semantics.amount.currencyCode: 'ConditionCurrency'
      ConditionRateAmount,

      @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
      ConditionRateRatio,

      @ObjectModel.foreignKey.association: '_ConditionRateRatioUnit'
      ConditionRateRatioUnit,

      @OData.v2.amount.noDecimalShift: true
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      ConditionBaseAmount,

      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      ConditionBaseQuantity,

      // Association
      @ObjectModel.association.type: [ #TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT ]
      _SalesOrderWithoutCharge,

      _ConditionApplication,
      _PricingConditionType,
      _ConditionCalculationType,
      _ConditionCurrency,
      _Currency,
      _ConditionQuantityUnit,
      _ConditionCategory,
      _ConditionOrigin,
      _ConditionControl,
      _ConditionInactiveReason,
      _ConditionClass,
      _PricingScaleBasis,
      _ScaleUnitOfMeasure,
      _ScaleCurrency,
      _VariantCondition,
      _StructureCondition,
      _ConditionRateRatioUnit
}

where SDDocumentCategory = 'I';
```
