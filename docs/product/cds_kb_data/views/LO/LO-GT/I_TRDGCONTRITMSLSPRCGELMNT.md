---
name: I_TRDGCONTRITMSLSPRCGELMNT
description: "Sales Pricing Element of Trdg Contr Item"
app_component: LO-GT
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGCONTRITMSLSPRCGELMNT')/$value
semantic_en: "Sales Pricing Element of Trdg Contr Item"
semantic_vi: "Sales Pricing Element of Trdg Contr Item — CDS view tổng hợp dựa trên R_TrdgContrItmSlsPrcgElmnt."
keywords:
  - "sales"
  - "pricing"
  - "element"
  - "trdg"
  - "contr"
  - "item"
  - "trading"
  - "contract"
  - "procedure"
  - "step"
  - "counter"
  - "condition"
  - "application"
tags:
  - LO
  - bo:pricingcondition
  - component:LO-GT
  - interface-view
  - LO-GT
  - lob:logistics general
  - pricing
---
# I_TRDGCONTRITMSLSPRCGELMNT

**Sales Pricing Element of Trdg Contr Item**

| Property | Value |
|---|---|
| App Component | `LO-GT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGCONTRITMSLSPRCGELMNT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TradingContract` | ✓ | |  |  | `CHAR(10)` | Trading Contract |
| `TradingContractItem` | ✓ | |  |  | `NUMC(6)` | Item Number of Trading Contract |
| `PricingProcedureStep` | ✓ | |  |  | `NUMC(3)` | Step Number |
| `PricingProcedureCounter` | ✓ | |  |  | `NUMC(3)` | Pricing Procedure Counter |
| `ConditionApplication` |  | |  |  | `CHAR(2)` | Application |
| `ConditionType` |  | |  |  | `CHAR(4)` | Condition Type |
| `PriceConditionDeterminationDte` |  | |  |  | `DATS(8)` | Pricing Condition Date |
| `ConditionCalculationType` |  | |  |  | `CHAR(3)` | Calculation Type for Condition |
| `ConditionBaseAmount` |  | |  |  | `DEC(24)` | Pricing Condition Base Amount |
| `ConditionBaseQuantity` |  | |  |  | `DEC(24)` | Quantity of the Condition Basis |
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
| `ConditionAmount` |  | |  |  | `DEC(24)` | Pricing Condition Amount |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | SD Document Currency |
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
| `CndnIsAcctDetnRelevant` |  | |  |  | `CHAR(1)` | Statistical and Relevant for Account Determination |
| `ConditionAlternativeCurrency` |  | |  |  | `CUKY(5)` | Pricing Condition Alternative Currency |
| `ConditionAmountInLocalCrcy` |  | |  |  | `CURR(15)` | Pricing Condition Amount in Local Currency |
| `ExpenseSupplier` |  | |  |  | `CHAR(10)` | Expense Supplier |
| `PriceDetnExchangeRate` |  | |  |  | `DEC(9)` | Pricing Condition Exchange Rate |
| `_TrdgContr` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TrdgContr` | `I_TrdgContr` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGCONTRITMSLSPRCGELMNT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGCONTRITMSLSPRCGELMNT')/$value)*

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@EndUserText.label: 'Sales Pricing Element of Trdg Contr Item'
@Metadata: {
  ignorePropagatedAnnotations: true,
  allowExtensions: false
}
@ObjectModel: {
  semanticKey: ['TradingContract', 'TradingContractItem', 'PricingProcedureStep', 'PricingProcedureCounter'],
  modelingPattern: #NONE,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE],
  usageType: {
    serviceQuality: #C,
    sizeCategory: #XXL,
    dataClass: #TRANSACTIONAL
  }
}
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AbapCatalog.viewEnhancementCategory: [#NONE]

/* BO-Layer */
define view entity I_TrdgContrItmSlsPrcgElmnt
  as select from R_TrdgContrItmSlsPrcgElmnt as TrdgContrItmSlsPrcgElmnt

  association [1..1] to I_TrdgContr as _TrdgContr on $projection.TradingContract = _TrdgContr.TradingContract
{
  key TradingContract,
  key TradingContractItem,
  key PricingProcedureStep,
  key PricingProcedureCounter,
      ConditionApplication,
      ConditionType,
      PriceConditionDeterminationDte,
      ConditionCalculationType,
      ConditionBaseAmount,
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      ConditionBaseQuantity,
      ConditionRateAmount,
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
      TaxCode,
      WithholdingTaxCode,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      CndnRoundingOffDiffAmount,
      ConditionAmount,
      TransactionCurrency,
      ConditionControl,
      ConditionInactiveReason,
      ConditionClass,
      PrcgProcedureCounterForHeader,
      FactorForConditionBasisValue,
      StructureCondition,
      PeriodFactorForCndnBasisValue,
      PricingScaleType,
      PricingScaleBasis,
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
      CndnIsAcctDetnRelevant,
      ConditionAlternativeCurrency,
      @Semantics.amount.currencyCode: 'ConditionAlternativeCurrency'
      ConditionAmountInLocalCrcy,
      ExpenseSupplier,
      PriceDetnExchangeRate,
      _TrdgContr

}
```
