---
name: C_PUBSECCMTMTACTLITEMQRY2
description: Commitment/Actual Items Query
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECCMTMTACTLITEMQRY2')/$value
semantic_en: Commitment/Actual Items Query
tags:
  - PSM
  - component:PSM
  - consumption-view
  - metadata-only
---
# C_PUBSECCMTMTACTLITEMQRY2

**Commitment/Actual Items Query**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECCMTMTACTLITEMQRY2')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `Fund` | `CHAR(10)` | Fund |
| `FundHierarchy` | `CHAR(42)` | Fund Hierarchy |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `PostingDate` | `DATS(8)` | Posting Date |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `IsCommitment` | `CHAR(1)` | Indicator: Is Commitment |
| `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `TransactionCurrency` | `CUKY(5)` | Transaction Currency |
| `GlobalCurrency` | `CUKY(5)` | Global Currency |
| `AmountInCompanyCodeCurrency` | `CURR(23)` | Amount in Company Code Currency |
| `AmountInTransactionCurrency` | `CURR(23)` | Amount in Transaction Currency |
| `AmountInGlobalCurrency` | `CURR(23)` | Amount in Global Currency |
| `PubSecExpnCmtmtAmtInGlobalCrcy` | `CURR(25)` | Commitment Expense Amount in Global Currency |
| `PubSecExpnActlAmtInGlobalCrcy` | `CURR(25)` | Actual Expense Amount in Global Currency |
| `PubSecRevnCmtmtAmtInGlobalCrcy` | `CURR(25)` | Commitment Revenue Amount in Global Currency |
| `PubSecRevnActlAmtInGlobalCrcy` | `CURR(25)` | Actual Revenue Amount in Global Currency |
| `DebitCreditCode` | `CHAR(1)` | Debit/Credit Code |
| `AccountingDocumentType` | `CHAR(2)` | Journal Entry Type |
| `PostingKey` | `CHAR(2)` | Posting Key |
| `LedgerFiscalYear` | `NUMC(4)` | Fiscal Year of Ledger |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `CostCenterHierarchy` | `CHAR(42)` | Cost Center Hierarchy |
| `AccountingDocumentItem` | `NUMC(3)` | Journal Entry Posting View Item |
| `DocumentDate` | `DATS(8)` | Journal Entry Date |
| `LedgerGLLineItem` | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `CreationDate` | `DATS(8)` | Creation Date |
| `PurchasingDocument` | `CHAR(10)` | Purchasing Document |
| `PurchasingDocumentItem` | `NUMC(5)` | Purchasing Document Item |
| `DocumentItemText` | `CHAR(50)` | Item Text |
| `MasterFixedAsset` | `CHAR(12)` | Fixed Asset (Main Asset Number) |
| `FixedAsset` | `CHAR(4)` | Asset Subnumber |
| `OrderID` | `CHAR(12)` | Order ID |
| `WBSElementExternalID` | `CHAR(24)` | WBS Element External ID |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `FunctionalAreaHierarchy` | `CHAR(42)` | Functional Area Hierarchy |
| `BudgetPeriod` | `CHAR(10)` | Budget Period |
| `GrantID` | `CHAR(20)` | Grant |
| `GrantHierarchy` | `CHAR(42)` | Grant Hierarchy |
| `GranteeMgmtSponsor` | `CHAR(10)` | Grant Sponsor |
| `BusinessTransactionType` | `CHAR(4)` | Business Transaction Type |
| `CashLedgerAccount` | `CHAR(10)` | Cash Origin Account |
| `PubSecBudgetAccount` | `CHAR(10)` | Budget Account |
| `BudgetAccountHierarchy` | `CHAR(42)` | Budget Account Hierarchy |
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
| `PurchaseOrder` | `CHAR(10)` | Purchase Order Number |
| `PurchaseRequisition` | `CHAR(10)` | Purchase Requisition Number |
| `EarmarkedFundsDocument` | `CHAR(10)` | Document Number for Earmarked Funds |
| `OriginCostCenter` | `CHAR(10)` | Origin Cost Center |
| `PartnerBudgetPeriod` | `CHAR(10)` | FM: Partner Budget Period |
| `PartnerCostCenter` | `CHAR(10)` | Partner Cost Center |
| `PartnerFunctionalArea` | `CHAR(16)` | Partner Functional Area |
| `PartnerFund` | `CHAR(10)` | Partner Fund |
| `PartnerGrant` | `CHAR(20)` | Partner Grant |
| `PartnerWBSElementInternalID` | `NUMC(8)` | Partner WBS Element Internal ID |
| `PartnerWBSElementExternalID` | `CHAR(24)` | Partner WBS Element External ID |
