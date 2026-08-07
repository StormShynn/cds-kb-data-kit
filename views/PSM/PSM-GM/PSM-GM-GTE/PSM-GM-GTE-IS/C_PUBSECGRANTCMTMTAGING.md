---
name: C_PUBSECGRANTCMTMTAGING
description: Grant Open Commitments
app_component: PSM-GM-GTE-IS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGRANTCMTMTAGING')/$value
semantic_en: Grant Open Commitments
tags:
  - PSM
  - component:PSM-GM-GTE-IS
  - consumption-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-IS
  - metadata-only
---
# C_PUBSECGRANTCMTMTAGING

**Grant Open Commitments**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGRANTCMTMTAGING')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `FundType` |  | |  |  | `CHAR(6)` | Fund Type |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `BudgetPeriod` |  | |  |  | `CHAR(10)` | Budget Period |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `SponsoredClass` |  | |  |  | `CHAR(20)` | Sponsored Class |
| `SponsoredProgram` |  | |  |  | `CHAR(20)` | Sponsored Program |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `PurchaseOrder` |  | |  |  | `CHAR(10)` | Purchase Order Number |
| `PurchaseRequisition` |  | |  |  | `CHAR(10)` | Purchase Requisition Number |
| `EarmarkedFundsDocument` |  | |  |  | `CHAR(10)` | Document Number for Earmarked Funds |
| `AccountAssignmentNumber` |  | |  |  | `NUMC(2)` | Account Assignment Number |
| `PubSecBudgetAccount` |  | |  |  | `CHAR(10)` | Budget Account |
| `PubSecBdgtAcctRevnExpnCode` |  | |  |  | `CHAR(1)` | Expense or Revenue on Budget Account |
| `PubSecBudgetCnsmpnType` |  | |  |  | `CHAR(2)` | Budget Consumption Type |
| `PubSecOpnCmtmtTmeIntvl` |  | |  |  | `CHAR(20)` | Shows Time Interval to Which Grouped Open Commitments Belong |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `PubSecOpenCmtmtAgingDate` |  | |  |  | `DATS(8)` | Open Commitment Date |
| `SourceReferenceDocumentType` |  | |  |  | `CHAR(5)` | Source Reference Document Type |
| `SourceReferenceDocument` |  | |  |  | `CHAR(10)` | Source Reference Document |
| `SourceReferenceDocumentItem` |  | |  |  | `NUMC(6)` | Source Reference Document Item |
| `SourceLogicalSystem` |  | |  |  | `CHAR(10)` | Source Logical System |
| `SourceReferenceDocumentCntxt` |  | |  |  | `CHAR(10)` | Source Reference Document Context |
| `SourceReferenceDocSubitem` |  | |  |  | `NUMC(6)` | Source Reference Document Subitem |
| `PubSecOpnCmtmtAmtInGlobCrcy1` |  | |  |  | `CURR(25)` | Open Commitment Amount in Global Currency for Time Slice A |
| `PubSecOpnCmtmtAmtInGlobCrcy2` |  | |  |  | `CURR(25)` | Open Commitment Amount in Global Currency for Time Slice B |
| `PubSecOpnCmtmtAmtInGlobCrcy3` |  | |  |  | `CURR(25)` | Open Commitment Amount in Global Currency for Time Slice C |
| `PubSecOpnCmtmtAmtInGlobCrcy4` |  | |  |  | `CURR(25)` | Open Commitment Amount in Global Currency for Time Slice D |
| `PubSecOpnCmtmtAmtInGlobCrcy5` |  | |  |  | `CURR(25)` | Open Commitment Amount in Global Currency for Time Slice E |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `PubSecOpnCmtmtAmtInTransCrcy` |  | |  |  | `CURR(25)` | Total Open Commitment Amount in Transaction Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `PubSecOpnCmtmtAmtInCoCodeCrcy` |  | |  |  | `CURR(25)` | Total Open Commitment Amount in Company Code Currency |
| `PubSecOpnCmtmtAmtInGlobCrcy` |  | |  |  | `CURR(25)` | Total Open Commitment Amount in Global Currency |
| `FundDescription` |  | |  |  | `CHAR(40)` | Fund Description |
| `FunctionalAreaName` |  | |  |  | `CHAR(25)` | Name of the Functional Area |
| `BudgetPeriodName` |  | |  |  | `CHAR(35)` | Budget Period Name |
| `GrantName` |  | |  |  | `CHAR(20)` | Short Description of the Grant |
| `CostCenterName` |  | |  |  | `CHAR(20)` | Cost Center Name |
| `WBSDescription` |  | |  |  | `CHAR(40)` | Work Breakdown Structure Element Name |
| `GLAccountName` |  | |  |  | `CHAR(20)` | G/L Account Name |
| `ProfitCenterName` |  | |  |  | `CHAR(20)` | Description of Profit Center |
| `SegmentName` |  | |  |  | `CHAR(50)` | Segment Name |
| `GLAccountText` |  | |  |  | `CHAR(20)` | Budget Account Name |
| `PubSecBdgtCnsmpnAmtTypeText` |  | |  |  | `CHAR(40)` | Description of Budget Consumption Type |
| `PubSecBdgtAcctRevnExpnCodeText` |  | |  |  | `CHAR(60)` | Description of Expense or Revenue on Budget Account |
| `ReferenceDocumentTypeName` |  | |  |  | `CHAR(20)` | Name of Object Type |
| `FundTypeDescription` |  | |  |  | `CHAR(35)` | Description of Fund Type |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `TransactionCurrencyName` |  | |  |  | `CHAR(40)` | Description |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
