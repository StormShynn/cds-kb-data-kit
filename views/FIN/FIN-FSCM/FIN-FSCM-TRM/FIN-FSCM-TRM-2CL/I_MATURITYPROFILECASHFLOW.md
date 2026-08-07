---
name: I_MATURITYPROFILECASHFLOW
description: This CDS view provides the prerequisites for answering the following business questions: What is the maturity profile for financial transactions in the money market and security areas? What is the maturity profile for financial transactions before interest rate swap transactions are made on the key date? What is the maturity profile for financial transactions after interest rate swap transactions are made on the key date? What is the maturity profile for financial transactions before interest rate swap transactions are made for a specific currency? What is the maturity profile for financial transactions after interest rate swap transactions are made for a specific currency?
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATURITYPROFILECASHFLOW')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: What is the maturity profile for financial transactions in the money market and security areas? What is the maturity profile for financial transactions before interest rate swap transactions are made on the key date? What is the maturity profile for financial transactions after interest rate swap transactions are made on the key date? What is the maturity profile for financial transactions before interest rate swap transactions are made for a specific currency? What is the maturity profile for financial transactions after interest rate swap transactions are made for a specific currency?
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
  - transaction
  - metadata-only
---
# I_MATURITYPROFILECASHFLOW

**This CDS view provides the prerequisites for answering the following business questions: What is the maturity profile for financial transactions in the money market and security areas? What is the maturity profile for financial transactions before interest rate swap transactions are made on the key date? What is the maturity profile for financial transactions after interest rate swap transactions are made on the key date? What is the maturity profile for financial transactions before interest rate swap transactions are made for a specific currency? What is the maturity profile for financial transactions after interest rate swap transactions are made for a specific currency?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATURITYPROFILECASHFLOW')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FinancialTransaction` |  | |  |  | `CHAR(13)` | Financial Transaction |
| `SecurityAccount` |  | |  |  | `CHAR(10)` | Securities Account |
| `SecurityClass` |  | |  |  | `CHAR(13)` | Security Class |
| `FixedVariableInterestRateCat` |  | |  |  | `CHAR(1)` | Interest Rate Category (for Interest Rate Management) |
| `TrsyCshFlowDebtInvmtCode` |  | |  |  | `CHAR(1)` | Debt Investment Indicator |
| `PaymentDate` |  | |  |  | `DATS(8)` | Payment or Delivery Date |
| `ReferenceInterestRate` |  | |  |  | `CHAR(10)` | Reference Interest Rate |
| `InterestRateInPercent` |  | |  |  | `CHAR(17)` |  |
| `FinancialInstrProductCategory` |  | |  |  | `NUMC(3)` | Product Category |
| `FinancialInstrumentProductType` |  | |  |  | `CHAR(3)` | Product Type |
| `FinancialInstrTransactionType` |  | |  |  | `CHAR(3)` | Financial Transaction Type |
| `Counterparty` |  | |  |  | `CHAR(10)` | Counterparty Number |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `DifferentiationPortfolio` |  | |  |  | `CHAR(10)` | Portfolio |
| `TermStartDate` |  | |  |  | `DATS(8)` | Term Start |
| `TermEndDate` |  | |  |  | `DATS(8)` | Term End |
| `SecurityAccountGroup` |  | |  |  | `CHAR(10)` | Securities Account Group |
| `CalendarYear` |  | |  |  | `CHAR(10)` | Reporting Period |
| `YearMonth` |  | |  |  | `CHAR(8)` |  |
| `YearQuarter` |  | |  |  | `CHAR(7)` |  |
| `NominalAmountInNominalCurrency` |  | |  |  | `CURR(31)` |  |
| `NominalAmountInReportingCrcy` |  | |  |  | `CURR(21)` |  |
| `SignedNominalAmtInDisplayCrcy` |  | |  |  | `CURR(21)` |  |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
