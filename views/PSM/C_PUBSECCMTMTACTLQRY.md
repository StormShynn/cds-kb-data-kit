---
name: C_PUBSECCMTMTACTLQRY
description: Commitment and Actual Items Query
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECCMTMTACTLQRY')/$value
semantic_en: Commitment and Actual Items Query
tags:
  - PSM
  - component:PSM
  - consumption-view
  - metadata-only
---
# C_PUBSECCMTMTACTLQRY

**Commitment and Actual Items Query**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECCMTMTACTLQRY')/$value) |

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
| `BusinessTransactionType` | `CHAR(4)` | Business Transaction Type |
| `IsCommitment` | `CHAR(1)` | Indicator: Is Commitment |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `CostCenterHierarchy` | `CHAR(42)` | Cost Center Hierarchy |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `PartnerCostCenter` | `CHAR(10)` | Partner Cost Center |
| `PartnerFunctionalArea` | `CHAR(16)` | Partner Functional Area |
| `TransactionCurrency` | `CUKY(5)` | Transaction Currency |
| `AmountInTransactionCurrency` | `DECF(34)` |  |
| `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` | `DECF(34)` |  |
| `GlobalCurrency` | `CUKY(5)` | Global Currency |
| `AmountInGlobalCurrency` | `DECF(34)` |  |
| `FundHierarchy` | `CHAR(42)` | Fund Hierarchy |
| `GrantHierarchy` | `CHAR(42)` | Grant Hierarchy |
| `FunctionalAreaHierarchy` | `CHAR(42)` | Functional Area Hierarchy |
| `BudgetAccountHierarchy` | `CHAR(42)` | Budget Account Hierarchy |
| `PubSecExpnCmtmtAmtInCoCodeCrcy` | `DECF(34)` |  |
| `PubSecExpnActlAmtInCoCodeCrcy` | `DECF(34)` |  |
| `PubSecRevnCmtmtAmtInCoCodeCrcy` | `DECF(34)` |  |
| `PubSecRevnActlAmtInCoCodeCrcy` | `DECF(34)` |  |
| `PubSecExpnCmtmtAmtInGlobalCrcy` | `DECF(34)` |  |
| `PubSecExpnActlAmtInGlobalCrcy` | `DECF(34)` |  |
| `PubSecRevnCmtmtAmtInGlobalCrcy` | `DECF(34)` |  |
| `PubSecRevnActlAmtInGlobalCrcy` | `DECF(34)` |  |
| `DebitCreditCode` | `CHAR(1)` | Debit/Credit Code |
| `PostingDate` | `DATS(8)` | Posting Date |
| `DocumentDate` | `DATS(8)` | Journal Entry Date |
| `AccountingDocumentType` | `CHAR(2)` | Journal Entry Type |
| `AccountingDocumentItem` | `NUMC(3)` | Journal Entry Posting View Item |
| `PostingKey` | `CHAR(2)` | Posting Key |
| `CreationDate` | `DATS(8)` | Creation Date |
| `PurchaseOrder` | `CHAR(10)` | Purchase Order Number |
| `DocumentItemText` | `CHAR(50)` | Item Text |
| `MasterFixedAsset` | `CHAR(12)` | Fixed Asset (Main Asset Number) |
| `FixedAsset` | `CHAR(4)` | Asset Subnumber |
| `OriginCostCenter` | `CHAR(10)` | Origin Cost Center |
| `OrderID` | `CHAR(12)` | Order ID |
| `WBSElementExternalID` | `CHAR(24)` | WBS Element External ID |
| `PartnerWBSElementExternalID` | `CHAR(24)` | Partner WBS Element External ID |
| `Fund` | `CHAR(10)` | Fund |
| `GrantID` | `CHAR(20)` | Grant |
| `GranteeMgmtSponsor` | `CHAR(10)` | Grant Sponsor |
| `BudgetPeriod` | `CHAR(10)` | Budget Period |
| `PartnerFund` | `CHAR(10)` | Partner Fund |
| `PartnerGrant` | `CHAR(20)` | Partner Grant |
| `PartnerBudgetPeriod` | `CHAR(10)` | FM: Partner Budget Period |
| `CashLedgerAccount` | `CHAR(10)` | Cash Origin Account |
| `PubSecBudgetAccount` | `CHAR(10)` | Budget Account |
| `PubSecBudgetCnsmpnDate` | `DATS(8)` | Budget Consumption Date |
| `PubSecBudgetCnsmpnFsclPeriod` | `NUMC(3)` | CC Fiscal Period for Budget Consumption Date |
| `PubSecBudgetCnsmpnFsclYear` | `NUMC(4)` | CC Fiscal Year for Budget Consumption Date |
| `PubSecBudgetCnsmpnType` | `CHAR(2)` | Budget Consumption Type |
| `PubSecBudgetCnsmpnAmtType` | `CHAR(4)` | Budget Consumption Amount Type |
| `PubSecBudgetCnsmpnTypeGroup` | `CHAR(2)` | Budget Consumption Type Group |
| `PubSecBudgetIsRelevant` | `CHAR(1)` | Budget-Relevant Indicator |
| `PubSecBdgtAcctRevnExpnCode` | `CHAR(1)` | Expense or Revenue on Budget Account |
| `FundType` | `CHAR(6)` | Fund Type |
| `SponsoredClass` | `CHAR(20)` | Sponsored Class |
| `SponsoredProgram` | `CHAR(20)` | Sponsored Program |
| `GteeMBudgetValidityNumber` | `CHAR(3)` | Budget Validity Number |
| `PurchaseRequisition` | `CHAR(10)` | Purchase Requisition Number |
| `EarmarkedFundsDocument` | `CHAR(10)` | Document Number for Earmarked Funds |
