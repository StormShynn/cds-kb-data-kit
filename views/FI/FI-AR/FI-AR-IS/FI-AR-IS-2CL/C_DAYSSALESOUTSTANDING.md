---
name: C_DAYSSALESOUTSTANDING
description: This CDS view provides you with an insight into the average collection period of your company. It provides the number of days it takes, on average, for your company to collect receivables. The result aggregates the receivables and revenue amount per account (company code and customer) and month and calculates the DSO figure (indirect calculation). This CDS view provides you with the information that you need to answer the following business questions: How long does it take to collect receivables? Are credit terms extended too lenient to your customers? For more information about the calculation of the measures, please see Days Sales Outstanding - Calculation for All Periods and Days Sales Outstanding - Calculation for a Specific Period
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_DAYSSALESOUTSTANDING')/$value
semantic_en: This CDS view provides you with an insight into the average collection period of your company. It provides the number of days it takes, on average, for your company to collect receivables. The result aggregates the receivables and revenue amount per account (company code and customer) and month and calculates the DSO figure (indirect calculation). This CDS view provides you with the information that you need to answer the following business questions: How long does it take to collect receivables? Are credit terms extended too lenient to your customers? For more information about the calculation of the measures, please see Days Sales Outstanding - Calculation for All Periods and Days Sales Outstanding - Calculation for a Specific Period
tags:
  - FI
  - account
  - bo:businesspartner
  - component:FI-AR-IS-2CL
  - consumption-view
  - customer
  - FI-AR
  - FI-AR-IS
  - FI-AR-IS-2CL
  - lob:finance
  - metadata-only
---
# C_DAYSSALESOUTSTANDING

**This CDS view provides you with an insight into the average collection period of your company. It provides the number of days it takes, on average, for your company to collect receivables. The result aggregates the receivables and revenue amount per account (company code and customer) and month and calculates the DSO figure (indirect calculation). This CDS view provides you with the information that you need to answer the following business questions: How long does it take to collect receivables? Are credit terms extended too lenient to your customers? For more information about the calculation of the measures, please see Days Sales Outstanding - Calculation for All Periods and Days Sales Outstanding - Calculation for a Specific Period**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_DAYSSALESOUTSTANDING')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Customer` |  | |  |  | `CHAR(10)` | Customer |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `SpecialGLCode` |  | |  |  | `CHAR(1)` | Special G/L Indicator |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `YearMonth` |  | |  |  | `CHAR(6)` | Calendar Year Month in external format MM.YYYY |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `CustomerCountry` |  | |  |  | `CHAR(3)` | Country / Region Key |
| `CustomerRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `AccountingClerk` |  | |  |  | `CHAR(2)` | Accounting Clerk |
| `ReconciliationAccount` |  | |  |  | `CHAR(10)` | Reconciliation Account in General Ledger |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `DurationUnit` |  | |  |  | `UNIT(3)` | Unit of Measurement |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `CustomerName` |  | |  |  | `CHAR(80)` | Name of Customer |
| `CustomerCountryName` |  | |  |  | `CHAR(50)` | Country/Region Name |
| `CustomerRegionName` |  | |  |  | `CHAR(20)` | Description |
| `AccountingClerkName` |  | |  |  | `CHAR(30)` | Name of Accounting Clerk |
| `ReconciliationAccountLongName` |  | |  |  | `CHAR(50)` | G/L Account Long Name |
| `SpecialGLCodeName` |  | |  |  | `CHAR(30)` | Long Text for Special G/L Indicators |
| `GLAccountLongName` |  | |  |  | `CHAR(50)` | G/L Account Long Name |
| `CustomerAccountGroup` |  | |  |  | `CHAR(4)` | Customer Account Group |
| `CustomerAccountGroupName` |  | |  |  | `CHAR(30)` | Account Group Name |
| `CustomerClassification` |  | |  |  | `CHAR(2)` | Customer Classification |
| `CustomerClassificationDesc` |  | |  |  | `CHAR(20)` | Customer Classification Description |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `DebitAmtInDisplayCrcy` |  | |  |  | `CURR(27)` |  |
| `RevenueAmountInDisplayCrcy` |  | |  |  | `CURR(27)` |  |
| `DaysSalesOutstanding` |  | |  |  | `INT1(3)` |  |
