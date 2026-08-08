---
name: C_FINANCIALPOSITIONQUERY
description: "You can use this CDS view to report the current values of the financial positions with the asset/liability indicator Asset and Liability, defined in the Define Financial Positions app. The query provides the following measures for the financial positions: Amount in transaction currency Amount in display currency Book value in display currency Nominal amount in display currency This CDS view provides the prerequisites for answering the following business questions for the financial status: What are the book values in display currency of the financial positions at a specific key date? What are the nominal amounts in display currency of the financial positions at a specific key date? What are the amounts in transaction currency of the financial positions at a specific key date?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINANCIALPOSITIONQUERY')/$value
semantic_en: "You can use this CDS view to report the current values of the financial positions with the asset/liability indicator Asset and Liability, defined in the Define Financial Positions app. The query provides the following measures for the financial positions: Amount in transaction currency Amount in display currency Book value in display currency Nominal amount in display currency This CDS view provides the prerequisites for answering the following business questions for the financial status: What are the book values in display currency of the financial positions at a specific key date? What are the nominal amounts in display currency of the financial positions at a specific key date? What are the amounts in transaction currency of the financial positions at a specific key date?"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - lob:finance
  - transaction
  - metadata-only
---
# C_FINANCIALPOSITIONQUERY

**You can use this CDS view to report the current values of the financial positions with the asset/liability indicator Asset and Liability, defined in the Define Financial Positions app. The query provides the following measures for the financial positions: Amount in transaction currency Amount in display currency Book value in display currency Nominal amount in display currency This CDS view provides the prerequisites for answering the following business questions for the financial status: What are the book values in display currency of the financial positions at a specific key date? What are the nominal amounts in display currency of the financial positions at a specific key date? What are the amounts in transaction currency of the financial positions at a specific key date?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINANCIALPOSITIONQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `CompanyCodeIsTreasuryCenter` |  | |  |  | `CHAR(1)` | Treasury Center Indicator |
| `TreasuryCenterSortSequenceVal` |  | |  |  | `INT2(5)` | Treasury Center Ranking |
| `FinPositionAssetLiabilityCode` |  | |  |  | `CHAR(1)` | Assets or Liabilities |
| `FinancialPositionGroup` |  | |  |  | `CHAR(20)` | Financial Position Group |
| `FinancialPosition` |  | |  |  | `CHAR(20)` | Financial Position |
| `FinancialPositionDataSource` |  | |  |  | `CHAR(35)` | Data Source |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `HouseBank` |  | |  |  | `CHAR(5)` | House Bank Key |
| `HouseBankAccount` |  | |  |  | `CHAR(5)` | House Bank Account |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `Issuer` |  | |  |  | `CHAR(10)` | Issuer Identity Key |
| `Counterparty` |  | |  |  | `CHAR(10)` | Counterparty Number |
| `FinancialInstrumentProductType` |  | |  |  | `CHAR(3)` | Product Type |
| `FinancialInstrTransactionType` |  | |  |  | `CHAR(3)` | Financial Transaction Type |
| `FinancialTransaction` |  | |  |  | `CHAR(13)` | Financial Transaction |
| `TreasuryValuationClass` |  | |  |  | `NUMC(4)` | Valuation Class |
| `Portfolio` |  | |  |  | `CHAR(10)` | Portfolio |
| `SecurityAccount` |  | |  |  | `CHAR(10)` | Security Account |
| `SecurityClass` |  | |  |  | `CHAR(13)` | Security Class |
| `TreasuryPositionAccount` |  | |  |  | `CHAR(10)` | Futures Account for Listed Options and Futures |
| `TreasuryValuationArea` |  | |  |  | `CHAR(3)` | Treasury Valuation Area |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Document Number of an Accounting Document |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` |  |
| `BookValueAmountInDC` |  | |  |  | `CURR(23)` | Book Value in Display Currency |
| `NominalAmountInDisplayCurrency` |  | |  |  | `CURR(23)` | Nominal Amount in Display Currency |
| `AmountInDisplayCurrency` |  | |  |  | `CURR(23)` | Financial Position Amount in Display Currency |
