---
name: I_PUBSECFNDSMBDGTACTLCUBE
description: Fund Budget Commitment and Actuals - Cube
app_component: PSM-FM-IS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECFNDSMBDGTACTLCUBE')/$value
semantic_en: Fund Budget Commitment and Actuals - Cube
tags:
  - PSM
  - budget
  - component:PSM-FM-IS
  - interface-view
  - PSM-FM
  - PSM-FM-IS
  - metadata-only
---
# I_PUBSECFNDSMBDGTACTLCUBE

**Fund Budget Commitment and Actuals - Cube**

| Property | Value |
|---|---|
| App Component | `PSM-FM-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECFNDSMBDGTACTLCUBE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `SourceLedger` | `CHAR(2)` | Source Ledger |
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `FinancialPlanningReqTransSqnc` | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` | `NUMC(6)` | Financial Planning Data Packet Number |
| `ActualPlanJournalEntryItem` | `CHAR(12)` | Actual Plan Journal Entry Item |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `FinancialManagementArea` | `CHAR(4)` | Financial Management Area |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `WBSElementExternalID` | `CHAR(24)` | WBS Element External ID |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `Fund` | `CHAR(10)` | Fund |
| `GrantID` | `CHAR(20)` | Grant |
| `FundType` | `CHAR(6)` | Fund Type |
| `GranteeMgmtFundType` | `CHAR(1)` | Fund Type for Grants Management |
| `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` | `CURR(23)` | Amount in Company Code Currency |
| `PubSecBudgetAccountCoCode` | `CHAR(4)` | Budget Account Company Code |
| `PubSecBudgetCnsmpnTypeGroup` | `CHAR(2)` | Budget Consumption Type Group |
| `PubSecBudgetCnsmpnDate` | `DATS(8)` | Budget Consumption Date |
| `LedgerGLLineItem` | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `FinancialPlanningEntryItem` | `INT4(10)` | Financial Planning Entry Item |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `PlanningCategory` | `CHAR(10)` | Plan Category |
| `Plant` | `CHAR(4)` | Plant |
| `OrderID` | `CHAR(12)` | Order ID |
| `AccountingDocumentType` | `CHAR(2)` | Journal Entry Type |
| `FinancialAccountType` | `CHAR(1)` | Account Type |
| `PostingDate` | `DATS(8)` | Posting Date |
| `ValuationArea` | `CHAR(4)` | Valuation Area |
| `Customer` | `CHAR(10)` | Customer Number |
| `Supplier` | `CHAR(10)` | Supplier |
| `SalesDocument` | `CHAR(10)` | Sales Document |
| `ServiceDocument` | `CHAR(10)` | Service Document ID |
| `ServiceDocumentType` | `CHAR(4)` | Service Document Type |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` | `CHAR(2)` | Organization Division |
| `AssetClass` | `CHAR(8)` | Asset Class |
