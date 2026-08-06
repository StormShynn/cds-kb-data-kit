---
name: I_DAYSSALESOUTSTANDING
description: This CDS view provides you with an insight into the average collection period of your company. It provides the number of days it takes on average for your company to collect receivables. The result aggregates the aggregates the receivables and revenue amount per account (company code and customer) and month. This CDS view provides you with the information that you need to answer the following business questions: How long does it take to collect receivables? Are credit terms extended too lenient to your customers?
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DAYSSALESOUTSTANDING')/$value
semantic_en: This CDS view provides you with an insight into the average collection period of your company. It provides the number of days it takes on average for your company to collect receivables. The result aggregates the aggregates the receivables and revenue amount per account (company code and customer) and month. This CDS view provides you with the information that you need to answer the following business questions: How long does it take to collect receivables? Are credit terms extended too lenient to your customers?
tags:
  - FI
  - account
  - bo:businesspartner
  - component:FI-AR-IS-2CL
  - customer
  - FI-AR
  - FI-AR-IS
  - FI-AR-IS-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_DAYSSALESOUTSTANDING

**This CDS view provides you with an insight into the average collection period of your company. It provides the number of days it takes on average for your company to collect receivables. The result aggregates the aggregates the receivables and revenue amount per account (company code and customer) and month. This CDS view provides you with the information that you need to answer the following business questions: How long does it take to collect receivables? Are credit terms extended too lenient to your customers?**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DAYSSALESOUTSTANDING')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CompanyCode` | `CHAR(4)` | Company Code |
| `Customer` | `CHAR(10)` | Customer |
| `CalendarYear` | `NUMC(4)` | Calendar Year |
| `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `SpecialGLCode` | `CHAR(1)` | Special G/L Indicator |
| `FinancialAccountType` | `CHAR(1)` | Account Type |
| `YearMonth` | `CHAR(6)` | Calendar Year Month in external format MM.YYYY |
| `ExchangeRateType` | `CHAR(4)` | Exchange Rate Type |
| `CustomerCountry` | `CHAR(3)` | Country / Region Key |
| `CustomerRegion` | `CHAR(3)` | Region (State, Province, County) |
| `AccountingClerk` | `CHAR(2)` | Accounting Clerk |
| `DurationUnit` | `UNIT(3)` | Unit of Measurement |
| `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `ReconciliationAccount` | `CHAR(10)` | Reconciliation Account in General Ledger |
| `CustomerBasicAuthorizationGrp` | `CHAR(4)` | Customer Basic Authorization Group |
| `CustomerFinsAuthorizationGrp` | `CHAR(4)` | Authorization Group |
| `CustomerAccountGroup` | `CHAR(4)` | Customer Account Group |
| `CustomerClassification` | `CHAR(2)` | Customer Classification |
| `DisplayCurrency` | `CUKY(5)` | Display Currency |
| `DebitAmtInDisplayCrcy` | `CURR(27)` |  |
| `RevenueAmountInDisplayCrcy` | `CURR(27)` |  |
