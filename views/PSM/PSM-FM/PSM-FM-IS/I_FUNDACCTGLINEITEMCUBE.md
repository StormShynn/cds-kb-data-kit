---
name: I_FUNDACCTGLINEITEMCUBE
description: Fund Accounting Line Item - Cube
app_component: PSM-FM-IS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDACCTGLINEITEMCUBE')/$value
semantic_en: Fund Accounting Line Item - Cube
tags:
  - PSM
  - account
  - component:PSM-FM-IS
  - interface-view
  - PSM-FM
  - PSM-FM-IS
  - metadata-only
---
# I_FUNDACCTGLINEITEMCUBE

**Fund Accounting Line Item - Cube**

| Property | Value |
|---|---|
| App Component | `PSM-FM-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDACCTGLINEITEMCUBE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SourceLedger` | `CHAR(2)` | Source Ledger |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `LedgerFiscalYear` | `NUMC(4)` | Fiscal Year of Ledger |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
| `PostingDate` | `DATS(8)` | Posting Date |
| `AccountingDocumentType` | `CHAR(2)` | Journal Entry Type |
| `AlternativeGLAccount` | `CHAR(10)` | Alternative G/L Account Number In Company Code |
| `CountryChartOfAccounts` | `CHAR(4)` | Alternative Chart of Accounts for Country/Region |
| `InvoiceReference` | `CHAR(10)` | Invoice Reference |
| `InvoiceReferenceFiscalYear` | `NUMC(4)` | Invoice Reference Fiscal Year |
| `InvoiceItemReference` | `NUMC(3)` | Invoice Item Reference |
| `SalesDocument` | `CHAR(10)` | Sales Document |
| `Product` | `CHAR(40)` | Product |
| `Plant` | `CHAR(4)` | Plant |
| `Supplier` | `CHAR(10)` | Supplier |
| `Customer` | `CHAR(10)` | Customer Number |
| `FinancialAccountType` | `CHAR(1)` | Account Type |
| `IsOpenItemManaged` | `CHAR(1)` | Managed on an Open Item Basis |
| `ClearingDate` | `DATS(8)` | Clearing Date |
| `ClearingDocFiscalYear` | `NUMC(4)` | Fiscal Year of Clearing Journal Entry (Deprecated) |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `CostObject` | `CHAR(12)` | Cost Object |
| `FinancialTransactionType` | `CHAR(3)` | Financial Transaction Type |
| `Fund` | `CHAR(10)` | Fund |
| `FundType` | `CHAR(6)` | Fund Type |
| `FinancialManagementArea` | `CHAR(4)` | Financial Management Area |
| `GLAccountType` | `CHAR(1)` | Type of a General Ledger Account |
| `GrantID` | `CHAR(20)` | Grant |
| `GrantType` | `CHAR(2)` | Grant Type |
| `AssetClass` | `CHAR(8)` | Asset Class |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` | `CHAR(2)` | Division |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `ServiceDocumentType` | `CHAR(4)` | Service Document Type |
| `ValuationArea` | `CHAR(4)` | Valuation Area |
| `OrderID` | `CHAR(12)` | Order ID |
| `ServiceDocument` | `CHAR(10)` | Service Document ID |
| `OrderCategory` | `NUMC(2)` | Order Category |
| `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` | `CURR(23)` | Amount in Company Code Currency |
| `GrantIsNotRelevantGrant` | `CHAR(1)` | Identify the Not Relevant Grant |
| `GrantLifecycleStatus` | `CHAR(5)` | Lifecycle Status |
| `GrantAuthznGrp` | `CHAR(10)` | Grants Management: Authorization Groups |
| `GranteeMgmtSponsor` | `CHAR(10)` | Grant Sponsor |
