---
name: I_ARJRNLENTRITMAGINGGRID
description: This CDS view provides you with an overview of the receivables of the accounts receivable in an aging grid. The search result provides an aggregated view of the receivables per net due interval of the aging grid and account (company code and customer) as well as showing the receivables items. This CDS view provides you with the information that you need to answer the following business questions: How high are the overall total receivables? Which customers have total receivables? What are the receivables items for a customer?
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARJRNLENTRITMAGINGGRID')/$value
semantic_en: This CDS view provides you with an overview of the receivables of the accounts receivable in an aging grid. The search result provides an aggregated view of the receivables per net due interval of the aging grid and account (company code and customer) as well as showing the receivables items. This CDS view provides you with the information that you need to answer the following business questions: How high are the overall total receivables? Which customers have total receivables? What are the receivables items for a customer?
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
# I_ARJRNLENTRITMAGINGGRID

**This CDS view provides you with an overview of the receivables of the accounts receivable in an aging grid. The search result provides an aggregated view of the receivables per net due interval of the aging grid and account (company code and customer) as well as showing the receivables items. This CDS view provides you with the information that you need to answer the following business questions: How high are the overall total receivables? Which customers have total receivables? What are the receivables items for a customer?**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARJRNLENTRITMAGINGGRID')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CompanyCode` | `CHAR(4)` | Company Code |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `AccountingDocumentItem` | `NUMC(3)` | Journal Entry Posting View Item |
| `FinancialAccountType` | `CHAR(1)` | Financial Account Type |
| `Customer` | `CHAR(10)` | Customer Number |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `SpecialGLCode` | `CHAR(1)` | Special G/L Indicator |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `BillingDocument` | `CHAR(10)` | Billing Document |
| `AssignmentReference` | `CHAR(18)` | Assignment Reference |
| `NetDueIntervalText` | `CHAR(50)` | Net Due Date Interval |
| `CustomerCountry` | `CHAR(3)` | Country / Region Key |
| `CustomerRegion` | `CHAR(3)` | Region (State, Province, County) |
| `AccountingClerk` | `CHAR(2)` | Accounting Clerk |
| `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `ReconciliationAccount` | `CHAR(10)` | Reconciliation Account in General Ledger |
| `CustomerBasicAuthorizationGrp` | `CHAR(4)` | Customer Basic Authorization Group |
| `CustomerFinsAuthorizationGrp` | `CHAR(4)` | Authorization Group |
| `CustomerAccountGroup` | `CHAR(4)` | Customer Account Group |
| `CustomerClassification` | `CHAR(2)` | Customer Classification |
| `DisplayCurrency` | `CUKY(5)` | Display Currency |
| `TotalAmountInDisplayCrcy` | `CURR(23)` | Total Amount in Display Currency |
| `TotalNotOvrdAmtInDspCrcy` | `CURR(23)` | Total Not Due Amount in Display Currency |
| `TotalOverdueAmtInDspCrcy` | `CURR(23)` | Total Overdue Amount in Display Currency |
| `NetDueIntvl1AmtInDspCrcy` | `CURR(23)` | Amount in 1st Due Period (Display Currency) |
| `NetDueIntvl2AmtInDspCrcy` | `CURR(23)` | Amount in 2nd Due Period (Display Currency) |
| `NetDueIntvl3AmtInDspCrcy` | `CURR(23)` | Amount in 3rd Due Period (Display Currency) |
| `NetDueIntvl4AmtInDspCrcy` | `CURR(23)` | Amount in 4th Due Period (Display Currency) |
| `FirstIntvlFutrDueAmtInDspCrcy` | `CURR(23)` | Future Amount in 1st Due Period (Display Currency) |
| `SecondIntvlFutrDueAmtInDspCrcy` | `CURR(23)` | Future Amount in 2nd Due Period (Display Currency) |
| `ThirdIntvlFutrDueAmtInDspCrcy` | `CURR(23)` | Future Amount in 3rd Due Period (Display Currency) |
| `FourthIntvlFutrDueAmtInDspCrcy` | `CURR(23)` | Futre Due Amount for Last Interval in Display Currency |
