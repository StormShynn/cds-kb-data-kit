---
name: I_TRDGCONTRSLSPRCGELMNT
description: "Sales PrgElm of Trading Contract"
app_component: LO-GT
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGCONTRSLSPRCGELMNT')/$value
semantic_en: "Sales PrgElm of Trading Contract"
semantic_vi: "Sales PrgElm of Trading Contract — CDS view tổng hợp dựa trên R_TrdgContrSlsPrcgElmnt."
keywords:
  - "sales"
  - "prgelm"
  - "trading"
  - "contract"
  - "pricing"
  - "procedure"
  - "step"
  - "counter"
  - "condition"
  - "application"
  - "type"
tags:
  - LO
  - component:LO-GT
  - contract
  - interface-view
  - LO-GT
  - lob:logistics general
---
# I_TRDGCONTRSLSPRCGELMNT

**Sales PrgElm of Trading Contract**

| Property | Value |
|---|---|
| App Component | `LO-GT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGCONTRSLSPRCGELMNT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TradingContract` | ✓ | |  |  | `CHAR(10)` | Trading Contract |
| `PricingProcedureStep` | ✓ | |  |  | `NUMC(3)` | Step Number |
| `PricingProcedureCounter` | ✓ | |  |  | `NUMC(3)` | Pricing Condition Counter |
| `ConditionApplication` |  | |  |  | `CHAR(2)` | Application |
| `ConditionType` |  | |  |  | `CHAR(4)` | Condition Type |
| `PriceConditionDeterminationDte` |  | |  |  | `DATS(8)` | Pricing Condition Date |
| `ConditionCalculationType` |  | |  |  | `CHAR(3)` | Calculation Type for Condition |
| `CndnIsAcctDetnRelevant` |  | |  |  | `CHAR(1)` | Statistical and Relevant for Account Determination |
| `ConditionBaseAmount` |  | |  |  | `DEC(24)` | Pricing Condition Base Amount |
| `ConditionBaseQuantity` |  | |  |  | `DEC(24)` | Condition Base Quantity |
| `ConditionRateAmount` |  | |  |  | `DEC(24)` | Condition Amount |
| `ConditionRateRatio` |  | |  |  | `DEC(24)` | Pricing Condition Ratio |
| `ConditionRateRatioUnit` |  | |  |  | `UNIT(3)` | Pricing Condition Ratio Unit |
| `ConditionCurrency` |  | |  |  | `CUKY(5)` | Pricing Condition Currency |
| `ConditionQuantity` |  | |  |  | `DEC(5)` | Condition Quantity |
| `ConditionQuantityUnit` |  | |  |  | `UNIT(3)` | Condition Unit in the Document |
| `ConditionCategory` |  | |  |  | `CHAR(1)` | Condition Category (Examples: Tax, Freight, Price, Cost) |
| `ConditionIsForStatistics` |  | |  |  | `CHAR(1)` | Condition is used for statistics |
| `IsRelevantForAccrual` |  | |  |  | `CHAR(1)` | Condition is Relevant for Accrual  (e.g. Freight) |
| `CndnIsRelevantForInvoiceList` |  | |  |  | `CHAR(1)` | Condition for Invoice List |
| `ConditionOrigin` |  | |  |  | `CHAR(1)` | Origin of the Condition |
| `IsGroupCondition` |  | |  |  | `CHAR(1)` | Group Condition |
| `TaxCode` |  | |  |  | `CHAR(2)` | Tax on Sales/Purchases Code |
| `WithholdingTaxCode` |  | |  |  | `CHAR(2)` | Withholding Tax Code |
| `CndnRoundingOffDiffAmount` |  | |  |  | `CURR(5)` | Rounding-Off Difference of a Condition |
| `ConditionAmount` |  | |  |  | `CURR(15)` | Condition Value |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `ConditionControl` |  | |  |  | `CHAR(1)` | Condition Control |
| `ConditionInactiveReason` |  | |  |  | `CHAR(1)` | Condition is Inactive |
| `ConditionClass` |  | |  |  | `CHAR(1)` | Condition Class |
| `PrcgProcedureCounterForHeader` |  | |  |  | `NUMC(3)` | Pricing Condition Counter for Header |
| `FactorForConditionBasisValue` |  | |  |  | `FLTP(16)` | Pricing Condition Base Value Factor |
| `StructureCondition` |  | |  |  | `CHAR(1)` | Structure Condition |
| `PeriodFactorForCndnBasisValue` |  | |  |  | `FLTP(16)` | Pricing Condition Base Value Period Factor |
| `PricingScaleType` |  | |  |  | `CHAR(1)` | Scale Type |
| `PricingScaleBasis` |  | |  |  | `CHAR(3)` | Scale Basis Indicator |
| `ConditionScaleBaseAmount` |  | |  |  | `DEC(24)` | Scale Base Amount |
| `ConditionScaleBaseQuantity` |  | |  |  | `DEC(24)` | Scale Base Quantity |
| `ConditionScaleBasisUnit` |  | |  |  | `UNIT(3)` | Condition Scale Unit of Measure |
| `ConditionScaleBasisCurrency` |  | |  |  | `CUKY(5)` | Scale Currency |
| `CndnIsRelevantForIntcoBilling` |  | |  |  | `CHAR(1)` | Condition for Intercompany Billing |
| `ConditionIsManuallyChanged` |  | |  |  | `CHAR(1)` | Condition Changed Manually |
| `ConditionIsForConfiguration` |  | |  |  | `CHAR(1)` | Condition Used for Variant Configuration |
| `VariantCondition` |  | |  |  | `CHAR(26)` | Variant Condition Key |
| `ConditionBasisLimitExceeded` |  | |  |  | `CHAR(1)` | Indicator for Maximum Condition Basis Value |
| `ConditionAmountLimitExceeded` |  | |  |  | `CHAR(1)` | Indicator for Maximum Condition Amount |
| `CndnIsRelevantForLimitValue` |  | |  |  | `CHAR(1)` | Condition Update |
| `TaxCountry` |  | |  |  | `CHAR(3)` | Tax Reporting Country/Region |
| `ConditionToBaseQtyNmrtr` |  | |  |  | `DEC(10)` | Numerator for Converting to Base UoM |
| `ConditionToBaseQtyDnmntr` |  | |  |  | `DEC(10)` | Denominator for Converting to Base UoM |
| `ConditionAlternativeCurrency` |  | |  |  | `CUKY(5)` | Pricing Condition Alternative Currency |
| `ConditionAmountInLocalCrcy` |  | |  |  | `CURR(15)` | Condition Amount Local Currency |
| `ExpenseSupplier` |  | |  |  | `CHAR(10)` | Expense Supplier |
| `PriceDetnExchangeRate` |  | |  |  | `DEC(9)` | Pricing Condition Exchange Rate |
| `_TrdgContr` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TrdgContr` | `I_TrdgContr` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGCONTRSLSPRCGELMNT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGCONTRSLSPRCGELMNT')/$value)*

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@EndUserText.label: 'Sales PrgElm of Trading Contract'
@ObjectModel: {
  semanticKey: ['TradingContract', 'PricingProcedureStep', 'PricingProcedureCounter'],
  modelingPattern: #NONE,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE],
  usageType: {
    serviceQuality: #C,
    dataClass:      #TRANSACTIONAL,
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

define view entity I_TrdgContrSlsPrcgElmnt
  as select from R_TrdgContrSlsPrcgElmnt as TrdgContrSlsPrcgElmnt

  association [1..1] to I_TrdgContr as _TrdgContr on $projection.TradingContract = _TrdgContr.TradingContract
{
  key TradingContract,
  key PricingProcedureStep,
  key PricingProcedureCounter,
      ConditionApplication,
      ConditionType,
      PriceConditionDeterminationDte,
      ConditionCalculationType,
      CndnIsAcctDetnRelevant,

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
      ConditionCurrency,
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      ConditionQuantity,
      ConditionQuantityUnit,
      ConditionCategory,
      ConditionIsForStatistics,
      IsRelevantForAccrual,
      @Semantics.booleanIndicator: true
      CndnIsRelevantForInvoiceList,
      ConditionOrigin,
      @Semantics.booleanIndicator: true
      IsGroupCondition,

      /* Tax */
      TaxCode,
      WithholdingTaxCode,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      CndnRoundingOffDiffAmount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      ConditionAmount,
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
      ConditionScaleBasisUnit,
      ConditionScaleBasisCurrency,
      CndnIsRelevantForIntcoBilling,
      ConditionIsManuallyChanged,
      ConditionIsForConfiguration,
      VariantCondition,
      ConditionBasisLimitExceeded,
      ConditionAmountLimitExceeded,
      CndnIsRelevantForLimitValue,
      TaxCountry,
      ConditionToBaseQtyNmrtr,
      ConditionToBaseQtyDnmntr,
      ConditionAlternativeCurrency,
      @Semantics.amount.currencyCode: 'ConditionAlternativeCurrency'
      ConditionAmountInLocalCrcy,
      ExpenseSupplier,
      PriceDetnExchangeRate,

      /* Exposing Associations */
      _TrdgContr

}
```
