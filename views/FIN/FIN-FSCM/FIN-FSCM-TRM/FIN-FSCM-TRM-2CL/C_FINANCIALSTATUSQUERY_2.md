---
name: C_FINANCIALSTATUSQUERY_2
description: You can use this CDS view to report the current values of the financial positions defined in Define Financial Positions app. The query provides the following measures: For financial positions with data source Facilities Credit Line in Display Currency Utilized Amount in Display Currency Available Amount in Display Currency For financial positions of all other data sources Nominal Amount in Display Currency Book Value in Display Currency This CDS view provides the prerequisites for answering the following business questions for the financial status: What are the book values in display currency of the financial positions at a specific key date? What are the nominal amounts in display currency of the financial positions at a specific key date? What is the credit line amount of a financial position of the data source Facilities at a specific key date in display currency? What is the utilized amount of a financial position of the data source Facilities at a specific key date in display currency? What is the available amount of a financial position of the data source Facilities at a specific key date in display currency? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINANCIALSTATUSQUERY_2')/$value
semantic_en: You can use this CDS view to report the current values of the financial positions defined in Define Financial Positions app. The query provides the following measures: For financial positions with data source Facilities Credit Line in Display Currency Utilized Amount in Display Currency Available Amount in Display Currency For financial positions of all other data sources Nominal Amount in Display Currency Book Value in Display Currency This CDS view provides the prerequisites for answering the following business questions for the financial status: What are the book values in display currency of the financial positions at a specific key date? What are the nominal amounts in display currency of the financial positions at a specific key date? What is the credit line amount of a financial position of the data source Facilities at a specific key date in display currency? What is the utilized amount of a financial position of the data source Facilities at a specific key date in display currency? What is the available amount of a financial position of the data source Facilities at a specific key date in display currency? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - lob:finance
  - metadata-only
---
# C_FINANCIALSTATUSQUERY_2

**You can use this CDS view to report the current values of the financial positions defined in Define Financial Positions app. The query provides the following measures: For financial positions with data source Facilities Credit Line in Display Currency Utilized Amount in Display Currency Available Amount in Display Currency For financial positions of all other data sources Nominal Amount in Display Currency Book Value in Display Currency This CDS view provides the prerequisites for answering the following business questions for the financial status: What are the book values in display currency of the financial positions at a specific key date? What are the nominal amounts in display currency of the financial positions at a specific key date? What is the credit line amount of a financial position of the data source Facilities at a specific key date in display currency? What is the utilized amount of a financial position of the data source Facilities at a specific key date in display currency? What is the available amount of a financial position of the data source Facilities at a specific key date in display currency? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINANCIALSTATUSQUERY_2')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CompanyCode` | `CHAR(4)` | Company Code |
| `Country` | `CHAR(3)` | Country/Region Key |
| `CompanyCodeIsTreasuryCenter` | `CHAR(1)` | Treasury Center Indicator |
| `TreasuryCenterSortSequenceVal` | `INT2(5)` | Treasury Center Ranking |
| `FinPositionAssetLiabilityCode` | `CHAR(1)` | Assets or Liabilities |
| `FinancialPositionGroup` | `CHAR(20)` | Financial Position Group |
| `FinancialPosition` | `CHAR(20)` | Financial Position |
| `FinancialPositionDataSource` | `CHAR(35)` | Data Source |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `HouseBank` | `CHAR(5)` | House Bank Key |
| `HouseBankAccount` | `CHAR(5)` | House Bank Account |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `Issuer` | `CHAR(10)` | Issuer Identity Key |
| `Counterparty` | `CHAR(10)` | Counterparty Number |
| `FinancialInstrumentProductType` | `CHAR(3)` | Product Type |
| `FinancialInstrTransactionType` | `CHAR(3)` | Financial Transaction Type |
| `FinancialTransaction` | `CHAR(13)` | Financial Transaction |
| `TreasuryValuationClass` | `NUMC(4)` | Valuation Class |
| `Portfolio` | `CHAR(10)` | Portfolio |
| `SecurityAccount` | `CHAR(10)` | Security Account |
| `SecurityClass` | `CHAR(13)` | Security Class |
| `TreasuryPositionAccount` | `CHAR(10)` | Futures Account for Listed Options and Futures |
| `TreasuryValuationArea` | `CHAR(3)` | Treasury Valuation Area |
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `AccountingDocumentType` | `CHAR(2)` | Journal Entry Type |
| `AccountingDocument` | `CHAR(10)` | Document Number of an Accounting Document |
| `BankGroup` | `CHAR(10)` | Bank Group ID |
| `BankInBankGroup` | `CHAR(10)` | Bank In Bank Group |
| `Fund` | `CHAR(10)` | Fund |
| `FundType` | `CHAR(6)` | Fund Type |
| `GrantID` | `CHAR(20)` | Grant |
| `GrantType` | `CHAR(2)` | Grant Type |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `WBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `TrsyPosCustomDiffntnTerm1` | `CHAR(20)` | Custom Differentiation Term 1 (Value) |
| `TrsyPosCustomDiffntnTerm2` | `CHAR(20)` | Custom Differentiation Term 2 (Value) |
| `TrsyPosCustomDiffntnTerm3` | `CHAR(20)` | Custom Differentiation Term 3 (Value) |
| `TrsyPosCustomDiffntnTerm4` | `CHAR(20)` | Custom Differentiation Term 4 (Value) |
| `TrsyPosCustomDiffntnTerm5` | `CHAR(20)` | Custom Differentiation Term 5 (Value) |
| `TransactionCurrency` | `CUKY(5)` | Transaction Currency |
| `DisplayCurrency` | `CUKY(5)` | Display Currency |
| `BookValueAmountInDC` | `CURR(23)` | Book Value in Display Currency |
| `NominalAmountInDisplayCurrency` | `CURR(23)` | Nominal Amount in Display Currency |
| `TotalAmountInDisplayCrcy` | `CURR(17)` | Credit Line in Display Currency |
| `UtilizedAmountInDisplayCrcy` | `CURR(17)` | Utilized Amount in Display Currency |
| `FreeCreditLineAmtInDspCrcy` | `CURR(17)` | Available Amount in Display Currency |
