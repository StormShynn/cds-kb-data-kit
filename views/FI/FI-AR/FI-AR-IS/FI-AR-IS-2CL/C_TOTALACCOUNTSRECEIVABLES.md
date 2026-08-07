---
name: C_TOTALACCOUNTSRECEIVABLES
description: This CDS view provides you with an overview of the total receivables of the accounts receivables in an aging grid. The search result aggregates the amount per net due interval of the aging grid and account (company code and customer). This CDS view provides you with the information that you need to answer the following business questions: How high are the overall total receivables? Which customers have total receivables? This query cannot be accessed directly using SQL or custom CDS views. This query receives its data from the Total Receivables Cube (I_TotalAccountsReceivables). This query can be used in the key user tool KPI Design or Create Reports.
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TOTALACCOUNTSRECEIVABLES')/$value
semantic_en: This CDS view provides you with an overview of the total receivables of the accounts receivables in an aging grid. The search result aggregates the amount per net due interval of the aging grid and account (company code and customer). This CDS view provides you with the information that you need to answer the following business questions: How high are the overall total receivables? Which customers have total receivables? This query cannot be accessed directly using SQL or custom CDS views. This query receives its data from the Total Receivables Cube (I_TotalAccountsReceivables). This query can be used in the key user tool KPI Design or Create Reports.
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
# C_TOTALACCOUNTSRECEIVABLES

**This CDS view provides you with an overview of the total receivables of the accounts receivables in an aging grid. The search result aggregates the amount per net due interval of the aging grid and account (company code and customer). This CDS view provides you with the information that you need to answer the following business questions: How high are the overall total receivables? Which customers have total receivables? This query cannot be accessed directly using SQL or custom CDS views. This query receives its data from the Total Receivables Cube (I_TotalAccountsReceivables). This query can be used in the key user tool KPI Design or Create Reports.**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TOTALACCOUNTSRECEIVABLES')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Customer` |  | |  |  | `CHAR(10)` | Customer |
| `NetDueIntervalText` |  | |  |  | `CHAR(50)` | Net Due Date Interval |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `CustomerCountry` |  | |  |  | `CHAR(3)` | Country / Region Key |
| `CustomerRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `AccountingClerk` |  | |  |  | `CHAR(2)` | Accounting Clerk |
| `SpecialGLCode` |  | |  |  | `CHAR(1)` | Special G/L Indicator |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `ReconciliationAccount` |  | |  |  | `CHAR(10)` | Reconciliation Account in General Ledger |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `CustomerName` |  | |  |  | `CHAR(80)` | Name of Customer |
| `CustomerCountryName` |  | |  |  | `CHAR(50)` | Country/Region Name |
| `CustomerRegionName` |  | |  |  | `CHAR(20)` | Description |
| `AccountingClerkName` |  | |  |  | `CHAR(30)` | Name of Accounting Clerk |
| `SpecialGLCodeName` |  | |  |  | `CHAR(30)` | Long Text for Special G/L Indicators |
| `ReconciliationAccountLongName` |  | |  |  | `CHAR(50)` | G/L Account Long Name |
| `GLAccountLongName` |  | |  |  | `CHAR(50)` | G/L Account Long Name |
| `CustomerAccountGroup` |  | |  |  | `CHAR(4)` | Customer Account Group |
| `CustomerAccountGroupName` |  | |  |  | `CHAR(30)` | Account Group Name |
| `CustomerClassification` |  | |  |  | `CHAR(2)` | Customer Classification |
| `CustomerClassificationDesc` |  | |  |  | `CHAR(20)` | Customer Classification Description |
| `TotalAmountInDisplayCrcy` |  | |  |  | `CURR(23)` | Total Amount in Display Currency |
| `TotalNotOvrdAmtInDspCrcy` |  | |  |  | `CURR(23)` | Total Not Due Amount in Display Currency |
| `TotalOverdueAmtInDspCrcy` |  | |  |  | `CURR(23)` | Total Overdue Amount in Display Currency |
| `NetDueIntvl1AmtInDspCrcy` |  | |  |  | `CURR(23)` | Amount in 1st Due Period (Display Currency) |
| `NetDueIntvl2AmtInDspCrcy` |  | |  |  | `CURR(23)` | Amount in 2nd Due Period (Display Currency) |
| `NetDueIntvl3AmtInDspCrcy` |  | |  |  | `CURR(23)` | Amount in 3rd Due Period (Display Currency) |
| `NetDueIntvl4AmtInDspCrcy` |  | |  |  | `CURR(23)` | Amount in 4th Due Period (Display Currency) |
