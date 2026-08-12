---
name: I_SETTLMTDOCITMSUPLRPRCGELMNT
description: "Settlmtdocitmsuplrprcgelmnt"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_SETTLMTDOCITMSUPLRPRCGELMNT

**Settlmtdocitmsuplrprcgelmnt**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtDoc` | ✓ | |  |  |  |  |
| `SettlmtDocItem` | ✓ | |  |  |  |  |
| `PricingProcedureStep` | ✓ | |  |  |  |  |
| `PricingProcedureCounter` | ✓ | |  |  |  |  |
| `ConditionApplication` |  | |  |  |  |  |
| `ConditionType` |  | |  |  |  |  |
| `PricingDateTime` |  | |  | `cast( ' ' as vfprc_timestamp preserving type )` |  |  |
| `PriceConditionDeterminationDte` |  | |  |  |  |  |
| `ConditionCalculationType` |  | |  |  |  |  |
| `ConditionBaseValue` |  | |  | `cast( ConditionBaseAmount as vfprc_element_base_value preserving type )` |  |  |
| `ConditionRateValue` |  | |  | `cast( ConditionRateAmount as vfprc_element_amount preserving type )` |  |  |
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
| `ConditionScaleBasisValue` |  | |  | `cast( ConditionScaleBaseAmount as vfrpc_scale_base_value preserving type )` |  |  |
| `ConditionScaleBasisUnit` |  | |  |  |  |  |
| `ConditionScaleBasisCurrency` |  | |  |  |  |  |
| `CndnIsRelevantForIntcoBilling` |  | |  |  |  |  |
| `ConditionIsManuallyChanged` |  | |  |  |  |  |
| `ConditionIsForConfiguration` |  | |  |  |  |  |
| `VariantCondition` |  | |  |  |  |  |
| `ConditionRateAmount` |  | |  |  |  |  |
| `ConditionBaseAmount` |  | |  |  |  |  |
| `ConditionBaseQuantity` |  | |  |  |  |  |
| `ConditionRateRatio` |  | |  |  |  |  |
| `ConditionRateRatioUnit` |  | |  |  |  |  |
| `ConditionScaleBaseAmount` |  | |  |  |  |  |
| `ConditionScaleBaseQuantity` |  | |  |  |  |  |
| `AccountKeyForGLAccount` |  | |  |  |  |  |
| `AcctKeyForAccrualsGLAccount` |  | |  |  |  |  |
| `_SettlmtDoc` | | ✓ | | | | |
| `_SettlmtDocItem` | | ✓ | | | | |
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

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SettlmtDoc` | `I_SettlmtDoc` | [1..1] |
| `_SettlmtDocItem` | `I_SettlmtDocItem` | [1..1] |

## Source Code

```abap
@EndUserText: {
  label: 'Settlmt Doc Item Suplr Pricing Element'
}
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
} 
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@ObjectModel: {
   modelingPattern: #NONE,
   supportedCapabilities : [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #B,
     sizeCategory:   #XXL
   }
}
@Analytics: {
    internalName: #LOCAL
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

define view entity I_SettlmtDocItmSuplrPrcgElmnt
  as select from R_SettlmtDocItmSuplrPrcgElmnt

  association [1..1] to I_SettlmtDoc     as _SettlmtDoc     on  $projection.SettlmtDoc = _SettlmtDoc.SettlmtDoc
  association [1..1] to I_SettlmtDocItem as _SettlmtDocItem on  $projection.SettlmtDoc     = _SettlmtDocItem.SettlmtDoc
                                                            and $projection.SettlmtDocItem = _SettlmtDocItem.SettlmtDocItem

{
      @ObjectModel.foreignKey.association: '_SettlmtDoc'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SettlmtDocStdVH', element: 'SettlmtDoc' } }]
      }
  key SettlmtDoc,
      @ObjectModel.foreignKey.association: '_SettlmtDocItem'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SettlmtDocItemStdVH', element: 'SettlmtDocItem' } }]
      }
  key SettlmtDocItem,
  key PricingProcedureStep,
  key PricingProcedureCounter,
      @ObjectModel.foreignKey.association: '_ConditionApplication'
      ConditionApplication,
      @ObjectModel.foreignKey.association: '_PricingConditionType'
      ConditionType,
      @API.element:{releaseState: #DEPRECATED, successor: 'PriceConditionDeterminationDte'}
      cast( '              ' as vfprc_timestamp preserving type )                  as PricingDateTime,
      PriceConditionDeterminationDte,
      @ObjectModel.foreignKey.association: '_ConditionCalculationType'
      ConditionCalculationType,
      @API.element:{releaseState: #DEPRECATED, successor: 'ConditionBaseAmount'}
      cast( ConditionBaseAmount as vfprc_element_base_value preserving type )      as ConditionBaseValue,
      @API.element:{releaseState: #DEPRECATED, successor: 'ConditionRateAmount'}
      cast( ConditionRateAmount as  vfprc_element_amount preserving type )         as ConditionRateValue,
      @ObjectModel.foreignKey.association: '_ConditionCurrency'
      ConditionCurrency,
      @DefaultAggregation:#SUM
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      ConditionQuantity,
      @ObjectModel.foreignKey.association: '_ConditionQuantityUnit'
      ConditionQuantityUnit,
      @ObjectModel.foreignKey.association: '_ConditionCategory'
      ConditionCategory,
      ConditionIsForStatistics,
      PricingScaleType,
      IsRelevantForAccrual,
      CndnIsRelevantForInvoiceList,
      @ObjectModel.foreignKey.association: '_ConditionOrigin'
      ConditionOrigin,
      IsGroupCondition,
      ConditionRecord,
      ConditionSequentialNumber,
      TaxCode,
      WithholdingTaxCode,
      @DefaultAggregation:#SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      CndnRoundingOffDiffAmount,
      @DefaultAggregation:#SUM
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
      @API.element:{releaseState: #DEPRECATED, successor: 'ConditionScaleBaseAmount'}
      cast( ConditionScaleBaseAmount as vfrpc_scale_base_value   preserving type ) as ConditionScaleBasisValue,
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
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      @OData.v2.amount.noDecimalShift: true
      ConditionBaseAmount,
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      ConditionBaseQuantity,
      @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
      ConditionRateRatio,
      //      @ObjectModel.foreignKey.association: '_ConditionRateRatioUnit'
      ConditionRateRatioUnit,
      @Semantics.amount.currencyCode: 'ConditionScaleBasisCurrency'
      @OData.v2.amount.noDecimalShift: true
      ConditionScaleBaseAmount,
      @Semantics.quantity.unitOfMeasure: 'ConditionScaleBasisUnit'
      ConditionScaleBaseQuantity,

      /* Accounts */
      AccountKeyForGLAccount,
      AcctKeyForAccrualsGLAccount,

      //Association
      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT]
      _SettlmtDoc,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT]
      _SettlmtDocItem,
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
      _StructureCondition
      //      _ConditionRateRatioUnit

}
```
