---
name: I_OVERDUEACCOUNTSRECEIVABLES
description: This CDS view provides you with an overview of the overdue receivables for the accounts receivables in an aging grid. The search result aggregates the amount per net due interval of the aging grid and account (company code and customer). This CDS view provides you with the information that you need to answer the following business questions: How high are the overall overdue receivables? Which customers have overdue receivables?
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OVERDUEACCOUNTSRECEIVABLES')/$value
semantic_en: This CDS view provides you with an overview of the overdue receivables for the accounts receivables in an aging grid. The search result aggregates the amount per net due interval of the aging grid and account (company code and customer). This CDS view provides you with the information that you need to answer the following business questions: How high are the overall overdue receivables? Which customers have overdue receivables?
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
# I_OVERDUEACCOUNTSRECEIVABLES

**This CDS view provides you with an overview of the overdue receivables for the accounts receivables in an aging grid. The search result aggregates the amount per net due interval of the aging grid and account (company code and customer). This CDS view provides you with the information that you need to answer the following business questions: How high are the overall overdue receivables? Which customers have overdue receivables?**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OVERDUEACCOUNTSRECEIVABLES')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CompanyCode` | `CHAR(4)` | Company Code |
| `Customer` | `CHAR(10)` | Customer |
| `SpecialGLCode` | `CHAR(1)` | Special G/L Indicator |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `CreditSegment` | `CHAR(10)` | Credit Segment |
| `NetDueIntervalText` | `CHAR(50)` | Net Due Date Interval |
| `FinancialAccountType` | `CHAR(1)` | Financial Account Type |
| `ReconciliationAccount` | `CHAR(10)` | Reconciliation Account in General Ledger |
| `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `ExchangeRateType` | `CHAR(4)` | Exchange Rate Type |
| `BusinessPartner` | `CHAR(10)` | Business Partner Number |
| `CustomerCountry` | `CHAR(3)` | Country / Region Key |
| `CustomerRegion` | `CHAR(3)` | Region (State, Province, County) |
| `AccountingClerk` | `CHAR(2)` | Accounting Clerk |
| `CustomerAccountGroup` | `CHAR(4)` | Customer Account Group |
| `CustomerClassification` | `CHAR(2)` | Customer Classification |
| `CreditRiskClass` | `CHAR(3)` | Risk Class |
| `CustomerBasicAuthorizationGrp` | `CHAR(4)` | Customer Basic Authorization Group |
| `CustomerFinsAuthorizationGrp` | `CHAR(4)` | Authorization Group |
| `DisplayCurrency` | `CUKY(5)` | Display Currency |
| `NumberOfOpenItems` | `INT4(10)` | Number of Open Items |
| `AmountInDisplayCurrency` | `CURR(23)` | Amount in Display Currency |
| `TotalOverdueAmtInDspCrcy` | `CURR(23)` | Overdue Amount in Display Currency |
| `TotalNotOvrdAmtInDspCrcy` | `CURR(23)` | Not Overdue Amount in Display Currency |
| `NetDueIntvl1AmtInDspCrcy` | `CURR(23)` | Amount in 1st Due Period (Display Currency) |
| `NetDueIntvl2AmtInDspCrcy` | `CURR(23)` | Amount in 2nd Due Period (Display Currency) |
| `NetDueIntvl3AmtInDspCrcy` | `CURR(23)` | Amount in 3rd Due Period (Display Currency) |
| `NetDueLastIntvlAmtInDspCrcy` | `CURR(23)` | Overdue Amount in Last Interval in Display Currency |
