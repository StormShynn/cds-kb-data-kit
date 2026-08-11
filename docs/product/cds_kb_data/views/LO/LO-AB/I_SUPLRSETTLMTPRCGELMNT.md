---
name: I_SUPLRSETTLMTPRCGELMNT
description: "Supplier Settlement Pricing Element"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTPRCGELMNT')/$value
semantic_en: "Supplier Settlement Pricing Element"
semantic_vi: "Supplier Settlement Pricing Element — CDS view cơ bản dựa trên R_SuplrSettlmtPrcgElmnt."
keywords:
  - "supplier"
  - "settlement"
  - "pricing"
  - "element"
  - "suplr"
  - "settlmt"
  - "procedure"
  - "step"
  - "counter"
  - "condition"
  - "application"
  - "type"
tags:
  - LO
  - bo:pricingcondition
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
  - pricing
  - supplier
---
# I_SUPLRSETTLMTPRCGELMNT

**Supplier Settlement Pricing Element**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTPRCGELMNT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrSettlmt` | ✓ | |  |  | `CHAR(10)` | Supplier Settlement |
| `PricingProcedureStep` | ✓ | |  |  | `NUMC(3)` | Step Number |
| `PricingProcedureCounter` | ✓ | |  |  | `NUMC(3)` | Pricing Procedure Counter |
| `ConditionApplication` |  | |  |  | `CHAR(2)` | Application |
| `ConditionType` |  | |  |  | `CHAR(4)` | Condition Type |
| `PricingDateTime` |  | |  | `cast( ' ' as vfprc_timestamp preserving type )` | `CHAR(14)` | Timestamp for Pricing |
| `PriceConditionDeterminationDte` |  | |  |  | `DATS(8)` | Condition Pricing Date |
| `ConditionCalculationType` |  | |  |  | `CHAR(3)` | Calculation Type for Condition |
| `ConditionBaseValue` |  | |  | `cast( ConditionBaseAmount as vfprc_element_base_value preserving type )` | `DEC(24)` | Condition Basis |
| `ConditionRateValue` |  | |  | `cast( ConditionRateAmount as vfprc_element_amount preserving type )` | `DEC(24)` | Condition Amount or Percentage |
| `ConditionBaseAmount` |  | |  |  | `DEC(24)` | Amount of the Condition Basis |
| `ConditionBaseQuantity` |  | |  |  | `DEC(24)` | Quantity of the Condition Basis |
| `ConditionRateAmount` |  | |  |  | `DEC(24)` | Condition Amount |
| `ConditionRateRatio` |  | |  |  | `DEC(24)` | Condition Ratio (in Percent or Per Mille) |
| `ConditionRateRatioUnit` |  | |  |  | `UNIT(3)` | Condition Rate Ratio Unit |
| `ConditionCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `ConditionQuantity` |  | |  |  | `DEC(5)` | Condition Pricing Unit |
| `ConditionQuantityUnit` |  | |  |  | `UNIT(3)` | Condition Unit in the Document |
| `ConditionCategory` |  | |  |  | `CHAR(1)` | Condition Category (Examples: Tax, Freight, Price, Cost) |
| `ConditionIsForStatistics` |  | |  |  | `CHAR(1)` | Condition is used for statistics |
| `IsRelevantForAccrual` |  | |  |  | `CHAR(1)` | Condition is Relevant for Accrual  (e.g. Freight) |
| `CndnIsRelevantForInvoiceList` |  | |  |  | `CHAR(1)` | Settlement Document List Condition |
| `ConditionOrigin` |  | |  |  | `CHAR(1)` | Origin of the Condition |
| `IsGroupCondition` |  | |  |  | `CHAR(1)` | Group Condition |
| `ConditionRecord` |  | |  |  | `CHAR(10)` | Number of Condition Record |
| `ConditionSequentialNumber` |  | |  |  | `NUMC(3)` | Sequential Number of the Condition |
| `TaxCode` |  | |  |  | `CHAR(2)` | Tax on Sales/Purchases Code |
| `WithholdingTaxCode` |  | |  |  | `CHAR(2)` | Withholding Tax Code |
| `CndnRoundingOffDiffAmount` |  | |  |  | `CURR(5)` | Rounding-Off Difference of a Condition |
| `ConditionAmount` |  | |  |  | `CURR(15)` | Condition Value |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | SD Document Currency |
| `ConditionControl` |  | |  |  | `CHAR(1)` | Condition Control |
| `ConditionInactiveReason` |  | |  |  | `CHAR(1)` | Condition is Inactive |
| `ConditionClass` |  | |  |  | `CHAR(1)` | Condition Class |
| `PrcgProcedureCounterForHeader` |  | |  |  | `NUMC(3)` | Pricing Procedure Counter for Header |
| `FactorForConditionBasisValue` |  | |  |  | `FLTP(16)` | Factor for Condition Basis Value |
| `StructureCondition` |  | |  |  | `CHAR(1)` | Structure Condition |
| `PeriodFactorForCndnBasisValue` |  | |  |  | `FLTP(16)` | Period Factor for Condition Basis Value |
| `PricingScaleType` |  | |  |  | `CHAR(1)` | Scale Type |
| `PricingScaleBasis` |  | |  |  | `CHAR(3)` | Scale Basis Indicator |
| `ConditionScaleBasisValue` |  | |  | `cast (ConditionScaleBaseAmount as vfrpc_scale_base_value preserving type )` | `DEC(24)` | Scale Base Value |
| `ConditionScaleBaseAmount` |  | |  |  | `DEC(24)` | Scale Base Amount |
| `ConditionScaleBaseQuantity` |  | |  |  | `DEC(24)` | Scale Base Quantity |
| `ConditionScaleBasisUnit` |  | |  |  | `UNIT(3)` | Condition Scale Unit of Measure |
| `ConditionScaleBasisCurrency` |  | |  |  | `CUKY(5)` | Scale Currency |
| `CndnIsRelevantForIntcoBilling` |  | |  |  | `CHAR(1)` | Condition for Intercompany Billing |
| `ConditionIsManuallyChanged` |  | |  |  | `CHAR(1)` | Condition Changed Manually |
| `ConditionIsForConfiguration` |  | |  |  | `CHAR(1)` | Condition Used for Variant Configuration |
| `VariantCondition` |  | |  |  | `CHAR(26)` | Variant Condition Key |
| `_SuplrSettlmt` | | ✓ | | | | |
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
| `_SuplrSettlmt` | `I_SuplrSettlmt` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTPRCGELMNT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTPRCGELMNT')/$value)*

```abap
@EndUserText.label: 'Supplier Settlement Pricing Element'
@AccessControl: {
    authorizationCheck: #MANDATORY,
    personalData.blocking: #('TRANSACTIONAL_DATA')
    }
@ObjectModel: {
    modelingPattern: #NONE,
    supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET],
    usageType: {
      dataClass:      #TRANSACTIONAL,
      serviceQuality: #A,
      sizeCategory:   #XXL
      }
    }
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
    }
@Analytics: {
    internalName: #LOCAL 
    }
@Metadata: {
    ignorePropagatedAnnotations: true
    }

define view entity I_SuplrSettlmtPrcgElmnt
  as select from R_SuplrSettlmtPrcgElmnt

  association [1..1] to I_SuplrSettlmt as _SuplrSettlmt on $projection.SuplrSettlmt = _SuplrSettlmt.SuplrSettlmt

{
      @ObjectModel.foreignKey.association: '_SuplrSettlmt'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SuplrSettlmtStdVH', element: 'SuplrSettlmt' } }]
      }
  key SuplrSettlmt,
  key PricingProcedureStep,
  key PricingProcedureCounter,

      @ObjectModel.foreignKey.association: '_ConditionApplication'
      ConditionApplication,
      @ObjectModel.foreignKey.association: '_PricingConditionType'
      ConditionType,
      @API.element:{releaseState: #DEPRECATED, successor: 'PriceConditionDeterminationDte'}
      cast( '              ' as vfprc_timestamp preserving type )                as PricingDateTime,
      PriceConditionDeterminationDte,

      @ObjectModel.foreignKey.association: '_ConditionCalculationType'
      ConditionCalculationType,

      @API.element:{releaseState: #DEPRECATED, successor: 'ConditionBaseAmount'}
      cast( ConditionBaseAmount as vfprc_element_base_value preserving type )    as ConditionBaseValue,
      @API.element:{releaseState: #DEPRECATED, successor: 'ConditionRateAmount'}
      cast( ConditionRateAmount as vfprc_element_amount   preserving type )      as ConditionRateValue,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      @OData.v2.amount.noDecimalShift: true
      ConditionBaseAmount,
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      ConditionBaseQuantity,

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

      @ObjectModel.foreignKey.association: '_ConditionCategory'
      ConditionCategory,
      ConditionIsForStatistics,

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

      PricingScaleType,
      @ObjectModel.foreignKey.association: '_PricingScaleBasis'
      PricingScaleBasis,

      @API.element:{releaseState: #DEPRECATED, successor: 'ConditionScaleBaseAmount'}
      cast (ConditionScaleBaseAmount as vfrpc_scale_base_value preserving type ) as ConditionScaleBasisValue,

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
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _SuplrSettlmt,
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

}
```
