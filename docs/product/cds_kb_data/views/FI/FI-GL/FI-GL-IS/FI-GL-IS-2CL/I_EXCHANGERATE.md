---
name: I_EXCHANGERATE
description: "Exchange Rate"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXCHANGERATE')/$value
semantic_en: "Exchange Rate"
tags:
  - FI
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_EXCHANGERATE

**Exchange Rate**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXCHANGERATE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `SourceCurrency` |  | |  |  | `CUKY(5)` | From-Currency |
| `TargetCurrency` |  | |  |  | `CUKY(5)` | To-Currency |
| `ExchangeRateEffectiveDate` |  | |  |  | `DATS(8)` | Date As of Which the Exchange Rate Is Effective |
| `ExchangeRate` |  | |  |  | `DEC(9)` | Exchange Rate |
| `NumberOfSourceCurrencyUnits` |  | |  |  | `DEC(9)` | Ratio for the "from" currency units |
| `NumberOfTargetCurrencyUnits` |  | |  |  | `DEC(9)` | Ratio for the "to" currency units |
| `AlternativeExchangeRateType` |  | |  |  | `CHAR(4)` | Alternative Exchange Rate Type |
| `AltvExchangeRateTypeValdtyDate` |  | |  |  | `DATS(8)` | Date from which the alternative exchange rate type is valid |
| `InvertedExchangeRateIsAllowed` |  | |  |  | `CHAR(1)` | Indicator: Calculation allowed with inverted exchange rate ? |
| `ReferenceCurrency` |  | |  |  | `CUKY(5)` | Reference currency for currency translation |
| `BuyingRateAvgExchangeRateType` |  | |  |  | `CHAR(4)` | Exch. rate type of av. rate used to determine buying rate |
| `SellingRateAvgExchangeRateType` |  | |  |  | `CHAR(4)` | Exch.rate type of av. rate used to determine selling rate |
| `FixedExchangeRateIsUsed` |  | |  |  | `CHAR(1)` | Indicator: Exchange rate type uses fixed exchange rates |
| `SpecialConversionIsUsed` |  | |  |  | `CHAR(1)` | Indicator: Exchange rate type uses special translation model |
| `SourceCurrencyDecimals` |  | |  |  | `INT1(3)` | Number of decimal places |
| `TargetCurrencyDecimals` |  | |  |  | `INT1(3)` | Number of decimal places |
| `ExchRateIsIndirectQuotation` |  | |  |  | `CHAR(1)` | Exchange Rate Is Indirect Quotation |
| `AbsoluteExchangeRate` |  | |  |  | `DEC(9)` | Absolute Exchange Rate |
| `EffectiveExchangeRate` |  | |  |  | `DEC(12)` | Effective Exchange Rate |
| `DirectQuotedEffectiveExchRate` |  | |  |  | `DEC(9)` | Direct Quoted Effective Exchange Rate |
| `IndirectQuotedEffctvExchRate` |  | |  |  | `DEC(9)` | Indirect Quoted Effective Exchange Rate |
