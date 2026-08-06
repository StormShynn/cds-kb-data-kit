---
name: C_OVERDUEACCTRBLS
description: This CDS view provides you with an overview of the overdue receivables for the accounts receivables in an aging grid. The search result aggregates the amount per net due interval of the aging grid and account (company code and customer). This CDS view provides you with the information that you need to answer the following business questions: How high are the overall overdue receivables? Which customers have overdue receivables? This query cannot be accessed directly using SQL or custom CDS views. This query receives its data from the Overdue Receivables Cube ( I_OverdueAccountsReceivables). This query can be used in the key user tool KPI Design or Create Reports.
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OVERDUEACCTRBLS')/$value
semantic_en: This CDS view provides you with an overview of the overdue receivables for the accounts receivables in an aging grid. The search result aggregates the amount per net due interval of the aging grid and account (company code and customer). This CDS view provides you with the information that you need to answer the following business questions: How high are the overall overdue receivables? Which customers have overdue receivables? This query cannot be accessed directly using SQL or custom CDS views. This query receives its data from the Overdue Receivables Cube ( I_OverdueAccountsReceivables). This query can be used in the key user tool KPI Design or Create Reports.
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
# C_OVERDUEACCTRBLS

**This CDS view provides you with an overview of the overdue receivables for the accounts receivables in an aging grid. The search result aggregates the amount per net due interval of the aging grid and account (company code and customer). This CDS view provides you with the information that you need to answer the following business questions: How high are the overall overdue receivables? Which customers have overdue receivables? This query cannot be accessed directly using SQL or custom CDS views. This query receives its data from the Overdue Receivables Cube ( I_OverdueAccountsReceivables). This query can be used in the key user tool KPI Design or Create Reports.**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OVERDUEACCTRBLS')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CompanyCode` | `CHAR(4)` | Company Code |
| `Customer` | `CHAR(10)` | Customer |
| `NetDueIntervalText` | `CHAR(50)` | Net Due Date Interval |
| `SpecialGLCode` | `CHAR(1)` | Special G/L Indicator |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `CreditSegment` | `CHAR(10)` | Credit Segment |
| `SpecialGLCodeName` | `CHAR(30)` | Long Text for Special G/L Indicators |
| `GLAccountLongName` | `CHAR(50)` | G/L Account Long Name |
| `CreditSegmentName` | `CHAR(50)` | Name of Credit Segment |
| `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `CustomerName` | `CHAR(80)` | Name of Customer |
| `CustomerCountry` | `CHAR(3)` | Country / Region Key |
| `CustomerCountryName` | `CHAR(50)` | Country/Region Name |
| `CustomerRegion` | `CHAR(3)` | Region (State, Province, County) |
| `CustomerRegionName` | `CHAR(20)` | Description |
| `AccountingClerk` | `CHAR(2)` | Accounting Clerk |
| `AccountingClerkName` | `CHAR(30)` | Name of Accounting Clerk |
| `ReconciliationAccount` | `CHAR(10)` | Reconciliation Account in General Ledger |
| `ReconciliationAccountLongName` | `CHAR(50)` | G/L Account Long Name |
| `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `CustomerAccountGroup` | `CHAR(4)` | Customer Account Group |
| `CustomerAccountGroupName` | `CHAR(30)` | Account Group Name |
| `CustomerClassification` | `CHAR(2)` | Customer Classification |
| `CustomerClassificationDesc` | `CHAR(20)` | Customer Classification Description |
| `CreditRiskClass` | `CHAR(3)` | Risk Class |
| `CreditRiskClassName` | `CHAR(40)` | Name of Risk Class |
| `ExchangeRateType` | `CHAR(4)` | Exchange Rate Type |
| `DisplayCurrency` | `CUKY(5)` | Display Currency |
| `NumberOfOpenItems` | `INT4(10)` | Number of Open Items |
| `AmountInDisplayCurrency` | `CURR(23)` | Amount in Display Currency |
| `TotalOverdueAmtInDspCrcy` | `CURR(23)` | Overdue Amount in Display Currency |
| `TotalNotOvrdAmtInDspCrcy` | `CURR(23)` | Not Overdue Amount in Display Currency |
| `NetDueIntvl1AmtInDspCrcy` | `CURR(23)` | Amount in 1st Due Period (Display Currency) |
| `NetDueIntvl2AmtInDspCrcy` | `CURR(23)` | Amount in 2nd Due Period (Display Currency) |
| `NetDueIntvl3AmtInDspCrcy` | `CURR(23)` | Amount in 3rd Due Period (Display Currency) |
| `NetDueLastIntvlAmtInDspCrcy` | `CURR(23)` | Overdue Amount in Last Interval in Display Currency |
| `TotalAmountInDisplayCrcy` | `FLTP(16)` |  |
| `OverdueReceivablesInPercent` | `FLTP(16)` |  |
| `OverdueReceivablesRatio` | `FLTP(16)` |  |
