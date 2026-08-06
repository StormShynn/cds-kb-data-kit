---
name: I_FRTCOSTALLOCPRCGELMNT
description: Frtcostallocprcgelmnt
app_component: LO-AB
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-AB
  - interface-view
  - component:LO-AB
  - lob:Logistics General
---
# I_FRTCOSTALLOCPRCGELMNT

**Frtcostallocprcgelmnt**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `FreightCostAllocationDocument` | `}] } key FreightCostAllocationDocument` |
| key `PricingProcedureStep` | `PricingProcedureStep` |
| key `PricingProcedureCounter` | `PricingProcedureCounter` |
| `ConditionApplication` | `ConditionApplication` |
| `ConditionType` | `ConditionType` |
| `PriceConditionDeterminationDte` | `PriceConditionDeterminationDte` |
| `ConditionCalculationType` | `ConditionCalculationType` |
| `ConditionBaseAmount` | `ConditionBaseAmount` |
| `ConditionBaseQuantity` | `ConditionBaseQuantity` |
| `ConditionRateAmount` | `ConditionRateAmount` |
| `ConditionRateRatio` | `ConditionRateRatio` |
| `ConditionRateRatioUnit` | `ConditionRateRatioUnit` |
| `ConditionCurrency` | `ConditionCurrency` |
| `ConditionQuantity` | `ConditionQuantity` |
| `ConditionQuantityUnit` | `ConditionQuantityUnit` |
| `ConditionCategory` | `ConditionCategory` |
| `ConditionIsForStatistics` | `ConditionIsForStatistics` |
| `IsRelevantForAccrual` | `IsRelevantForAccrual` |
| `CndnIsRelevantForInvoiceList` | `CndnIsRelevantForInvoiceList` |
| `ConditionOrigin` | `ConditionOrigin` |
| `IsGroupCondition` | `IsGroupCondition` |
| `ConditionRecord` | `ConditionRecord` |
| `ConditionSequentialNumber` | `ConditionSequentialNumber` |
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
| `PricingScaleType` | `PricingScaleType` |
| `PricingScaleBasis` | `PricingScaleBasis` |
| `ConditionScaleBaseAmount` | `ConditionScaleBaseAmount` |
| `ConditionScaleBaseQuantity` | `ConditionScaleBaseQuantity` |
| `ConditionScaleBasisUnit` | `ConditionScaleBasisUnit` |
| `ConditionScaleBasisCurrency` | `ConditionScaleBasisCurrency` |
| `CndnIsRelevantForIntcoBilling` | `CndnIsRelevantForIntcoBilling` |
| `ConditionIsManuallyChanged` | `ConditionIsManuallyChanged` |
| `ConditionIsForConfiguration` | `ConditionIsForConfiguration` |
| `VariantCondition` | `VariantCondition` |
| `_FrtCostAllocDoc` | *Association* |
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
| `_FrtCostAllocDoc` | `I_FrtCostAllocDoc` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Freight Cost Allocation Pricing Element' 
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@ObjectModel: {
  modelingPattern: #NONE,
  supportedCapabilities : [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
  usageType:{
    dataClass:      #TRANSACTIONAL,
    serviceQuality: #B,
    sizeCategory:   #XXL
  }
}
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Metadata: {
  ignorePropagatedAnnotations: true,
  allowExtensions: false
}
define view entity I_FrtCostAllocPrcgElmnt
  as select from R_FrtCostAllocPrcgElmnt
 
  association [1..1] to I_FrtCostAllocDoc as _FrtCostAllocDoc on $projection.FreightCostAllocationDocument = _FrtCostAllocDoc.FreightCostAllocationDocument

{
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_FrtCostAllocDocStdVH', element: 'FreightCostAllocationDocument' } }]
      }
  key FreightCostAllocationDocument,
  key PricingProcedureStep,
  key PricingProcedureCounter,
      ConditionApplication,
      ConditionType,
      PriceConditionDeterminationDte,
      ConditionCalculationType,

      /* KAWRT split based on KRECH */
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      @OData.v2.amount.noDecimalShift: true
      ConditionBaseAmount,
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      ConditionBaseQuantity,

      /* KBETR split based on KRECH */
      @Semantics.amount.currencyCode: 'ConditionCurrency'
      @OData.v2.amount.noDecimalShift: true
      ConditionRateAmount,
      @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
      ConditionRateRatio,
      ConditionRateRatioUnit,
      @ObjectModel.foreignKey.association: '_ConditionCurrency'
      ConditionCurrency,
      @DefaultAggregation:#SUM
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      ConditionQuantity,
      @ObjectModel.foreignKey.association: '_ConditionQuantityUnit'
      ConditionQuantityUnit,
      ConditionCategory,
      ConditionIsForStatistics,

      IsRelevantForAccrual,
      @Semantics.booleanIndicator: true
      CndnIsRelevantForInvoiceList,
      ConditionOrigin,
      @Semantics.booleanIndicator: true
      IsGroupCondition,

      /* Condition Record */
      ConditionRecord,
      ConditionSequentialNumber,

      @DefaultAggregation:#SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      CndnRoundingOffDiffAmount,
      @DefaultAggregation:#SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      ConditionAmount,
      @ObjectModel.foreignKey.association: '_Currency'
      TransactionCurrency,
      ConditionControl,
      ConditionInactiveReason,
      ConditionClass,
      PrcgProcedureCounterForHeader,
      FactorForConditionBasisValue,
      StructureCondition,
      PeriodFactorForCndnBasisValue,

      /* Scales */
      PricingScaleType,
      PricingScaleBasis,

      /* KSTBS split based on KZBZG */
      @Semantics.amount.currencyCode: 'ConditionScaleBasisCurrency'
      @OData.v2.amount.noDecimalShift: true
      ConditionScaleBaseAmount,
      @Semantics.quantity.unitOfMeasure: 'ConditionScaleBasisUnit'
      ConditionScaleBaseQuantity,
      @ObjectModel.foreignKey.association: '_ScaleUnitOfMeasure'
      ConditionScaleBasisUnit,
      @ObjectModel.foreignKey.association: '_ScaleCurrency'
      ConditionScaleBasisCurrency,

      CndnIsRelevantForIntcoBilling,
      ConditionIsManuallyChanged,
      ConditionIsForConfiguration,
      VariantCondition,

      /* Associations */
      _FrtCostAllocDoc,
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
```
