---
name: I_FUNDACCTGBALANCEITEMC
description: "Fund Accounting Balance Item - Cube"
app_component: PSM-FM-IS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDACCTGBALANCEITEMC')/$value
semantic_en: "Fund Accounting Balance Item - Cube"
tags:
  - PSM
  - account
  - component:PSM-FM-IS
  - interface-view
  - PSM-FM
  - PSM-FM-IS
  - metadata-only
---
# I_FUNDACCTGBALANCEITEMC

**Fund Accounting Balance Item - Cube**

| Property | Value |
|---|---|
| App Component | `PSM-FM-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDACCTGBALANCEITEMC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `GLAccountHierarchy` |  | |  |  | `CHAR(42)` | Financial Statement Version |
| `SemanticTag` |  | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid To Date |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `AmtInCoCodeCrcyPerFiscalYear` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `FundType` |  | |  |  | `CHAR(6)` | Fund Type |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `GrantType` |  | |  |  | `CHAR(2)` | Grant Type |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `GrantIsNotRelevantGrant` |  | |  |  | `CHAR(1)` | Identify the Not Relevant Grant |
| `GrantLifecycleStatus` |  | |  |  | `CHAR(5)` | Lifecycle Status |
| `GrantAuthznGrp` |  | |  |  | `CHAR(10)` | Grants Management: Authorization Groups |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
