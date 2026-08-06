---
name: I_APJRNLENTRITMAGINGGRID
description: This CDS view provides you with an overview of the payables in an aging grid. It shows an aggregated view of the payables per net due interval in the aging grid and per account (that is, per company code or supplier) as well as the payable items. This CDS view provides the prerequisites for answering the following business questions: What suppliers are the payables for? What's the total payable amount to each supplier? What are the payable items for each supplier?
app_component: FI-AP-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APJRNLENTRITMAGINGGRID')/$value
semantic_en: This CDS view provides you with an overview of the payables in an aging grid. It shows an aggregated view of the payables per net due interval in the aging grid and per account (that is, per company code or supplier) as well as the payable items. This CDS view provides the prerequisites for answering the following business questions: What suppliers are the payables for? What's the total payable amount to each supplier? What are the payable items for each supplier?
tags:
  - FI
  - account
  - bo:plant
  - component:FI-AP-IS-2CL
  - FI-AP
  - FI-AP-IS
  - FI-AP-IS-2CL
  - interface-view
  - lob:finance
  - supplier
  - metadata-only
---
# I_APJRNLENTRITMAGINGGRID

**This CDS view provides you with an overview of the payables in an aging grid. It shows an aggregated view of the payables per net due interval in the aging grid and per account (that is, per company code or supplier) as well as the payable items. This CDS view provides the prerequisites for answering the following business questions: What suppliers are the payables for? What's the total payable amount to each supplier? What are the payable items for each supplier?**

| Property | Value |
|---|---|
| App Component | `FI-AP-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APJRNLENTRITMAGINGGRID')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CompanyCode` | `CHAR(4)` | Company Code |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `AccountingDocumentItem` | `NUMC(3)` | Journal Entry Posting View Item |
| `FinancialAccountType` | `CHAR(1)` | Financial Account Type |
| `Supplier` | `CHAR(10)` | Supplier |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `SpecialGLCode` | `CHAR(1)` | Special G/L Indicator |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `AssignmentReference` | `CHAR(18)` | Assignment Reference |
| `NetDueIntervalText` | `CHAR(50)` | Net Due Date Interval |
| `SupplierCountry` | `CHAR(3)` | Country / Region Key |
| `SupplierRegion` | `CHAR(3)` | Region (State, Province, County) |
| `AccountingClerk` | `CHAR(2)` | Accounting Clerk |
| `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `ReconciliationAccount` | `CHAR(10)` | Reconciliation Account in General Ledger |
| `SupplierBasicAuthorizationGrp` | `CHAR(4)` | Supplier Basic Authorization Group |
| `SupplierFinsAuthorizationGrp` | `CHAR(4)` | Authorization Group |
| `SupplierAccountGroup` | `CHAR(4)` | Supplier Account Group |
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
