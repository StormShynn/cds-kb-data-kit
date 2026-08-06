---
name: I_FINANCIALPOSITIONCUBE
description: This CDS view provides the prerequisites for answering the following business questions for the financial status: What are the book values in position currency of the financial positions at a specific key date? What are the nominal amounts in nominal currency of the financial positions at a specific key date?
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINANCIALPOSITIONCUBE')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions for the financial status: What are the book values in position currency of the financial positions at a specific key date? What are the nominal amounts in nominal currency of the financial positions at a specific key date?
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_FINANCIALPOSITIONCUBE

**This CDS view provides the prerequisites for answering the following business questions for the financial status: What are the book values in position currency of the financial positions at a specific key date? What are the nominal amounts in nominal currency of the financial positions at a specific key date?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINANCIALPOSITIONCUBE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `FinancialPosition` | `CHAR(20)` | Financial Position |
| `FinancialPositionGroup` | `CHAR(20)` | Financial Position Group |
| `FinancialPositionDataSource` | `CHAR(35)` | Data Source |
| `FinPositionAssetLiabilityCode` | `CHAR(1)` | Assets or Liabilities |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `HouseBank` | `CHAR(5)` | House Bank Key |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `Issuer` | `CHAR(10)` | Issuer Identity Key |
| `Counterparty` | `CHAR(10)` | Counterparty Number |
| `FinancialInstrumentProductType` | `CHAR(3)` | Product Type |
| `FinancialTransaction` | `CHAR(13)` | Financial Transaction |
| `FinancialInstrTransactionType` | `CHAR(3)` | Financial Transaction Type |
| `TreasuryValuationClass` | `NUMC(4)` | Valuation Class |
| `SecurityAccount` | `CHAR(10)` | Security Account |
| `SecurityClass` | `CHAR(13)` | Security Class |
| `TreasuryPositionAccount` | `CHAR(10)` | Futures Account for Listed Options and Futures |
| `TreasuryValuationArea` | `CHAR(3)` | Treasury Valuation Area |
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `AccountingDocumentType` | `CHAR(2)` | Journal Entry Type |
| `AccountingDocument` | `CHAR(10)` | Document Number of an Accounting Document |
| `NominalCurrency` | `CUKY(5)` | Transaction Currency |
| `TransactionCurrency` | `CUKY(5)` | Transaction Currency |
| `NominalAmountInNominalCurrency` | `CURR(23)` |  |
| `BookValueAmtInPositionCurrency` | `CURR(23)` |  |
| `CommitmentBusinessPartner` | `CHAR(10)` | Partner with Whom Commitment Exists |
| `HouseBankAccount` | `CHAR(5)` | House Bank Account |
| `Portfolio` | `CHAR(10)` | Portfolio |
| `CompanyCodeIsTreasuryCenter` | `CHAR(1)` | Treasury Center Indicator |
| `TreasuryCenterSortSequenceVal` | `INT2(5)` | Treasury Center Ranking |
| `Country` | `CHAR(3)` | Country/Region Key |
