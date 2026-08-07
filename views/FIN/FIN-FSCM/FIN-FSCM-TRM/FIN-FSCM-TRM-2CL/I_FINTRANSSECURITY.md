---
name: I_FINTRANSSECURITY
description: This CDS view provides specific administrative data (available on the Structure tab) for a securities transaction. This CDS view provides the prerequisites for answering the following business questions: What is the traded nominal amount of a securities transaction? Which security class has been bought or sold by the securities transaction? What was the payment amount?
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSSECURITY')/$value
semantic_en: This CDS view provides specific administrative data (available on the Structure tab) for a securities transaction. This CDS view provides the prerequisites for answering the following business questions: What is the traded nominal amount of a securities transaction? Which security class has been bought or sold by the securities transaction? What was the payment amount?
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
  - payment
  - transaction
  - metadata-only
---
# I_FINTRANSSECURITY

**This CDS view provides specific administrative data (available on the Structure tab) for a securities transaction. This CDS view provides the prerequisites for answering the following business questions: What is the traded nominal amount of a securities transaction? Which security class has been bought or sold by the securities transaction? What was the payment amount?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSSECURITY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FinancialTransaction` |  | |  |  | `CHAR(13)` | Financial Transaction |
| `FinTransTradedNomAmt` |  | |  |  | `CURR(13)` | Traded Nominal Amount |
| `FinTransFlowNomAmtCrcy` |  | |  |  | `CUKY(5)` | Flow Nominal Amount Currency |
| `FinTransTradedOriglNomAmt` |  | |  |  | `CURR(13)` | Original Nominal Amount |
| `FinTransTradedNumberOfUnits` |  | |  |  | `DEC(24)` | No. of Units for Financial Instruments |
| `FinTransTradedPricePercent` |  | |  |  | `DEC(23)` | Security Price for Percentage Quotation |
| `FinTransTrdPriceCrcyUnitRate` |  | |  |  | `DEC(23)` | Security Price Without Currency Ref. with Unit Quotation |
| `FinTransTradedPriceCrcyUnit` |  | |  |  | `CHAR(5)` | Traded Price Currency Unit |
| `MarketValueInQtanCurrency` |  | |  |  | `CURR(13)` | Market Value in Quotation Currency |
| `QuotationCurrency` |  | |  |  | `CUKY(5)` | Price Currency |
| `MarketValInPaytCurrency` |  | |  |  | `CURR(13)` | Payment Amount in Payment Currency |
| `PaymentCurrency` |  | |  |  | `CUKY(5)` | Payment Currency |
| `FinTransPaymentCrcyCnvrsnRate` |  | |  |  | `DEC(9)` | Payment Currency Rate |
| `MarketValueInPositionCurrency` |  | |  |  | `CURR(13)` | Amount that Changes the Position |
| `PositionCurrency` |  | |  |  | `CUKY(5)` | Currency of Position Amount |
| `FinTransPositionCrcyCnvrsnRate` |  | |  |  | `DEC(9)` | Position Currency Rate |
| `MarketValueInLocalCurrency` |  | |  |  | `CURR(13)` | Market Value in Local Currency |
| `LocalCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `FinTransLoclCrcyCnvrsnRate` |  | |  |  | `DEC(9)` | Conversion Rate in Local Currency |
| `FinTransSpotPricePercent` |  | |  |  | `DEC(23)` | Spot Price Currency Unit Rate in Percentage |
| `FinTransSpotPriceCrcyUnitRate` |  | |  |  | `DEC(23)` | Spot Price Currency Unit Rate in Percentage |
| `FinTransMaturitySpotPricePct` |  | |  |  | `DEC(23)` | Maturity Spot Price Pecentage Rate |
| `FinTransMatSpotPrcCrcyUnitRate` |  | |  |  | `DEC(23)` | Maturity Spot Currency Unit Rate |
| `FinTransForwardPriceCostRate` |  | |  |  | `DEC(23)` | Security Price Without Currency Ref. with Unit Quotation |
| `FinTransFwdPrcIntrstCompRate` |  | |  |  | `DEC(23)` | Security Price Without Currency Ref. with Unit Quotation |
| `FinTransFwdPrcDividendPercent` |  | |  |  | `DEC(7)` | Percentage of Dividend agreed for Payment in OTC Instruments |
| `SecurityExchange` |  | |  |  | `CHAR(10)` | Exchange |
| `SecurityClass` |  | |  |  | `CHAR(13)` | Security Class |
| `SecurityAccount` |  | |  |  | `CHAR(10)` | Security Account |
| `FinTransPositionValueDate` |  | |  |  | `DATS(8)` | Position Value Date |
| `FinTransFlowPaymentDate` |  | |  |  | `DATS(8)` | Flow Payment Date |
| `CalculationDate` |  | |  |  | `DATS(8)` | Calculation Date |
