---
name: I_TRDGCONTRPURGPRCGELMNT
description: Purg Pricing Elmnt of Trading Contract
app_component: LO-GT
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGCONTRPURGPRCGELMNT')/$value
semantic_en: Purg Pricing Elmnt of Trading Contract
tags:
  - LO
  - bo:pricingcondition
  - component:LO-GT
  - contract
  - interface-view
  - LO-GT
  - lob:logistics general
  - pricing
  - metadata-only
---
# I_TRDGCONTRPURGPRCGELMNT

**Purg Pricing Elmnt of Trading Contract**

| Property | Value |
|---|---|
| App Component | `LO-GT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGCONTRPURGPRCGELMNT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `TradingContract` | `CHAR(10)` | Trading Contract |
| `PurgPrcgElmntItemGroupValue` | `INT1(3)` | Item Group |
| `PricingProcedureStep` | `NUMC(3)` | Step Number |
| `PricingProcedureCounter` | `NUMC(3)` | Pricing Condition Counter |
| `ConditionApplication` | `CHAR(2)` | Application |
| `ConditionType` | `CHAR(4)` | Condition Type |
| `PriceConditionDeterminationDte` | `DATS(8)` | Pricing Condition Date |
| `ConditionCalculationType` | `CHAR(3)` | Calculation Type for Condition |
| `ConditionBaseAmount` | `DEC(24)` | Pricing Condition Base Amount |
| `ConditionBaseQuantity` | `DEC(24)` | Condition Base Quantity |
| `ConditionRateAmount` | `DEC(24)` | Condition Amount |
| `ConditionRateRatio` | `DEC(24)` | Pricing Condition Ratio |
| `ConditionRateRatioUnit` | `UNIT(3)` | Pricing Condition Ratio Unit |
| `ConditionCurrency` | `CUKY(5)` | Pricing Condition Currency |
| `ConditionQuantity` | `DEC(5)` | Condition Quantity |
| `ConditionQuantityUnit` | `UNIT(3)` | Condition Unit in the Document |
| `ConditionCategory` | `CHAR(1)` | Condition Category (Examples: Tax, Freight, Price, Cost) |
| `ConditionIsForStatistics` | `CHAR(1)` | Condition is used for statistics |
| `IsRelevantForAccrual` | `CHAR(1)` | Condition is Relevant for Accrual  (e.g. Freight) |
| `CndnIsRelevantForInvoiceList` | `CHAR(1)` | Condition for Invoice List |
| `ConditionOrigin` | `CHAR(1)` | Origin of the Condition |
| `IsGroupCondition` | `CHAR(1)` | Group Condition |
| `TaxCode` | `CHAR(2)` | Tax on Sales/Purchases Code |
| `WithholdingTaxCode` | `CHAR(2)` | Withholding Tax Code |
| `CndnRoundingOffDiffAmount` | `CURR(5)` | Rounding-Off Difference of a Condition |
| `ConditionAmount` | `DEC(24)` | Pricing Condition Amount |
| `TransactionCurrency` | `CUKY(5)` | SD Document Currency |
| `ConditionControl` | `CHAR(1)` | Condition Control |
| `ConditionInactiveReason` | `CHAR(1)` | Condition is Inactive |
| `ConditionClass` | `CHAR(1)` | Condition Class |
| `PrcgProcedureCounterForHeader` | `NUMC(3)` | Pricing Condition Counter for Header |
| `FactorForConditionBasisValue` | `FLTP(16)` | Pricing Condition Base Value Factor |
| `StructureCondition` | `CHAR(1)` | Structure Condition |
| `PeriodFactorForCndnBasisValue` | `FLTP(16)` | Pricing Condition Base Value Period Factor |
| `PricingScaleType` | `CHAR(1)` | Scale Type |
| `PricingScaleBasis` | `CHAR(3)` | Scale Basis Indicator |
| `ConditionScaleBaseAmount` | `DEC(24)` | Scale Base Amount |
| `ConditionScaleBaseQuantity` | `DEC(24)` | Scale Base Quantity |
| `ConditionScaleBasisUnit` | `UNIT(3)` | Condition Scale Unit of Measure |
| `ConditionScaleBasisCurrency` | `CUKY(5)` | Scale Currency |
| `CndnIsRelevantForIntcoBilling` | `CHAR(1)` | Condition for Intercompany Billing |
| `ConditionIsManuallyChanged` | `CHAR(1)` | Condition Changed Manually |
| `ConditionIsForConfiguration` | `CHAR(1)` | Condition Used for Variant Configuration |
| `VariantCondition` | `CHAR(26)` | Variant Condition Key |
| `ConditionBasisLimitExceeded` | `CHAR(1)` | Indicator for Maximum Condition Basis Value |
| `ConditionAmountLimitExceeded` | `CHAR(1)` | Indicator for Maximum Condition Amount |
| `CndnIsRelevantForLimitValue` | `CHAR(1)` | Condition Update |
| `TaxCountry` | `CHAR(3)` | Tax Reporting Country/Region |
| `ConditionToBaseQtyNmrtr` | `DEC(10)` | Numerator for Converting to Base UoM |
| `ConditionToBaseQtyDnmntr` | `DEC(10)` | Denominator for Converting to Base UoM |
| `CndnIsAcctDetnRelevant` | `CHAR(1)` | Statistical and Relevant for Account Determination |
| `ConditionAlternativeCurrency` | `CUKY(5)` | Pricing Condition Alternative Currency |
| `ConditionAmountInLocalCrcy` | `CURR(15)` | Pricing Condition Amount in Local Currency |
| `ExpenseSupplier` | `CHAR(10)` | Expense Supplier |
| `PriceDetnExchangeRate` | `DEC(9)` | Pricing Condition Exchange Rate |
| `TradingContractCategory` | `CHAR(1)` | Trading Contract Category |
