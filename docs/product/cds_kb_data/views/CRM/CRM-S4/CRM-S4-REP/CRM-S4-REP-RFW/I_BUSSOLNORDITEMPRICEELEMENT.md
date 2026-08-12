---
name: I_BUSSOLNORDITEMPRICEELEMENT
description: "Bussolnorditempriceelement"
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - item-level
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_BUSSOLNORDITEMPRICEELEMENT

**Bussolnorditempriceelement**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessSolutionOrder` | ✓ | |  | `ServiceDocument` |  |  |
| `BusinessSolutionOrderItem` | ✓ | |  | `ServiceDocumentItem` |  |  |
| `PricingProcedureStep` | ✓ | |  |  |  |  |
| `PricingProcedureCounter` | ✓ | |  |  |  |  |
| `ConditionApplication` |  | |  |  |  |  |
| `ConditionType` |  | |  |  |  |  |
| `PriceConditionDeterminationDte` |  | |  |  |  |  |
| `ConditionCalculationType` |  | |  |  |  |  |
| `ConditionBaseValue` |  | |  |  |  |  |
| `ConditionRateValue` |  | |  |  |  |  |
| `ConditionCurrency` |  | |  |  |  |  |
| `ConditionQuantity` |  | |  |  |  |  |
| `ConditionQuantityUnit` |  | |  |  |  |  |
| `ConditionCategory` |  | |  |  |  |  |
| `ConditionIsForStatistics` |  | |  |  |  |  |
| `PricingScaleType` |  | |  |  |  |  |
| `IsRelevantForAccrual` |  | |  |  |  |  |
| `CndnIsRelevantForInvoiceList` |  | |  |  |  |  |
| `ConditionOrigin` |  | |  |  |  |  |
| `IsGroupCondition` |  | |  |  |  |  |
| `ConditionRecord` |  | |  |  |  |  |
| `ConditionSequentialNumber` |  | |  |  |  |  |
| `TaxCode` |  | |  |  |  |  |
| `WithholdingTaxCode` |  | |  |  |  |  |
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
| `CndnIsRelevantForIntcoBilling` |  | |  |  |  |  |
| `ConditionIsManuallyChanged` |  | |  |  |  |  |
| `ConditionIsForConfiguration` |  | |  |  |  |  |
| `VariantCondition` |  | |  |  |  |  |
| `ConditionRateAmount` |  | |  |  |  |  |
| `ConditionRateRatio` |  | |  |  |  |  |
| `ConditionRateRatioUnit` |  | |  |  |  |  |
| `ConditionBaseAmount` |  | |  |  |  |  |
| `ConditionBaseQuantity` |  | |  |  |  |  |
| `_BusinessSolutionOrder` | | ✓ | | | | |
| `_BusinessSolutionOrderItem` | | ✓ | | | | |
| `_ConditionApplication` | | ✓ | | | | |
| `_PricingConditionType` | | ✓ | | | | |
| `_ConditionCalculationType` | | ✓ | | | | |
| `_ConditionCurrency` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_ConditionQuantityUnit` | | ✓ | | | | |
| `_ConditionCategory` | | ✓ | | | | |
| `_ConditionOrigin` | | ✓ | | | | |
| `_ConditionControl` | | ✓ | | | | |
| `_ConditionInactiveReason` | | ✓ | | | | |
| `_ConditionClass` | | ✓ | | | | |
| `_PricingScaleBasis` | | ✓ | | | | |
| `_ScaleUnitOfMeasure` | | ✓ | | | | |
| `_ScaleCurrency` | | ✓ | | | | |
| `_VariantCondition` | | ✓ | | | | |
| `_StructureCondition` | | ✓ | | | | |
| `_ConditionRateRatioUnit` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessSolutionOrder` | `I_BusinessSolutionOrder` | [1..1] |
| `_BusinessSolutionOrderItem` | `I_BusinessSolutionOrderItem` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Solution Order Item Pricing Element'

@AccessControl: {
    authorizationCheck: #PRIVILEGED_ONLY,
    personalData.blocking: #NOT_REQUIRED
}

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
    usageType: {
        dataClass:      #TRANSACTIONAL,
        serviceQuality: #A,
        sizeCategory:   #XL
    },
    supportedCapabilities: [ #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #CDS_MODELING_ASSOCIATION_TARGET ],
    modelingPattern: #NONE
}

@VDM: {
    viewType: #COMPOSITE,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}

define view entity I_BusSolnOrdItemPriceElement
  as select from I_SrvcDocItemPriceElement as PricingElement

  association [1..1] to I_BusinessSolutionOrder     as _BusinessSolutionOrder     on  _BusinessSolutionOrder.BusinessSolutionOrder = $projection.BusinessSolutionOrder

  association [1..1] to I_BusinessSolutionOrderItem as _BusinessSolutionOrderItem on  _BusinessSolutionOrderItem.BusinessSolutionOrder     = $projection.BusinessSolutionOrder
                                                                                  and _BusinessSolutionOrderItem.BusinessSolutionOrderItem = $projection.BusinessSolutionOrderItem

{
      @ObjectModel.foreignKey.association: '_BusinessSolutionOrder'
  key ServiceDocument     as BusinessSolutionOrder,
      @ObjectModel.foreignKey.association: '_BusinessSolutionOrderItem'
  key ServiceDocumentItem as BusinessSolutionOrderItem,
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
      @Semantics.amount.currencyCode: 'ConditionCurrency'
      @OData.v2.amount.noDecimalShift: true
      ConditionRateAmount,
      @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
      ConditionRateRatio,
      @ObjectModel.foreignKey.association: '_ConditionRateRatioUnit'
      ConditionRateRatioUnit,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      @OData.v2.amount.noDecimalShift: true
      ConditionBaseAmount,
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      ConditionBaseQuantity,

      //Association
      _BusinessSolutionOrder,
      _BusinessSolutionOrderItem,
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
where
  _BusinessSolutionOrderItem.ServiceObjectType = 'BUS2000172';
```
