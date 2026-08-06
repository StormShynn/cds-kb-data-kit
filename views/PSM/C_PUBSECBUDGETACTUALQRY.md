---
name: C_PUBSECBUDGETACTUALQRY
description: Budget Commitment and Actual Items Query
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECBUDGETACTUALQRY')/$value
semantic_en: Budget Commitment and Actual Items Query
tags:
  - PSM
  - budget
  - component:PSM
  - consumption-view
  - metadata-only
---
# C_PUBSECBUDGETACTUALQRY

**Budget Commitment and Actual Items Query**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECBUDGETACTUALQRY')/$value) |

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
| `GLAccount` | `CHAR(10)` | G/L Account |
| `ActualPlanCode` | `CHAR(1)` | Actual Plan Code |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `CostCenterName` | `CHAR(20)` | Cost Center Name |
| `WBSElementExternalID` | `CHAR(24)` | WBS Element External ID |
| `PartnerWBSElementExternalID` | `CHAR(24)` | Partner WBS Element External ID |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `PartnerCostCenter` | `CHAR(10)` | Partner Cost Center |
| `PartnerFunctionalArea` | `CHAR(16)` | Partner Functional Area |
| `OriginCostCenter` | `CHAR(10)` | Origin Cost Center |
| `CostCenterHierarchy` | `CHAR(42)` | Cost Center Hierarchy |
| `FundHierarchy` | `CHAR(42)` | Fund Hierarchy |
| `GrantHierarchy` | `CHAR(50)` | Grant Hierarchy Node |
| `FunctionalAreaHierarchy` | `CHAR(42)` | Functional Area Hierarchy |
| `BudgetAccountHierarchy` | `CHAR(42)` | Budget Account Hierarchy |
| `CtrlObjForFund` | `CHAR(50)` | Control Object for a Fund |
| `CtrlObjForFunctionalArea` | `CHAR(50)` | Control Object for a Functional Area |
| `CtrlObjForBudgetPeriod` | `CHAR(50)` | Control Object for a Budget Period |
| `CtrlObjForCostCenter` | `CHAR(50)` | Control Object for a Cost Center |
| `CtrlObjForWBSElement` | `CHAR(50)` | Control Object for a WBS Element |
| `CtrlObjForBudgetAccount` | `CHAR(50)` | Control Object for a Budget Account |
| `CtrlObjForGrant` | `CHAR(50)` | Control Object for a Grant |
| `CtrlObjForSponsoredClass` | `CHAR(50)` | Control Object for a Sponsored Class |
| `CtrlObjForSponsoredProgram` | `CHAR(50)` | Control Object for a Sponsored Program |
| `BusinessTransactionType` | `CHAR(4)` | Business Transaction Type |
| `FinancialTransactionType` | `CHAR(3)` | Financial Transaction Type |
| `AccountingDocumentType` | `CHAR(2)` | Journal Entry Type |
| `PostingDate` | `DATS(8)` | Posting Date |
| `PlanningCategory` | `CHAR(10)` | Plan Category |
| `IsCommitment` | `CHAR(1)` | Indicator: Is Commitment |
| `Fund` | `CHAR(10)` | Fund |
| `PartnerFund` | `CHAR(10)` | Partner Fund |
| `GrantID` | `CHAR(20)` | Grant |
| `GranteeMgmtSponsor` | `CHAR(10)` | Grant Sponsor |
| `SponsoredClass` | `CHAR(20)` | Sponsored Class |
| `SponsoredProgram` | `CHAR(20)` | Sponsored Program |
| `GteeMBudgetValidityNumber` | `CHAR(3)` | Budget Validity Number |
| `PartnerGrant` | `CHAR(20)` | Partner Grant |
| `BudgetPeriod` | `CHAR(10)` | Budget Period |
| `PartnerBudgetPeriod` | `CHAR(10)` | FM: Partner Budget Period |
| `CashLedgerAccount` | `CHAR(10)` | Cash Origin Account |
| `PubSecBudgetAccount` | `CHAR(10)` | Budget Account |
| `PubSecBudgetCnsmpnDate` | `DATS(8)` | Budget Consumption Date |
| `PubSecBudgetCnsmpnFsclPeriod` | `NUMC(3)` | CC Fiscal Period for Budget Consumption Date |
| `PubSecBudgetCnsmpnFsclYear` | `NUMC(4)` | CC Fiscal Year for Budget Consumption Date |
| `PubSecBudgetCnsmpnType` | `CHAR(2)` | Budget Consumption Type |
| `PubSecBudgetCnsmpnTypeGroup` | `CHAR(2)` | Budget Consumption Type Group |
| `PubSecBudgetCnsmpnAmtType` | `CHAR(4)` | Budget Consumption Amount Type |
| `PubSecBudgetIsRelevant` | `CHAR(1)` | Budget-Relevant Indicator |
| `PubSecBdgtAcctRevnExpnCode` | `CHAR(1)` | Expense or Revenue on Budget Account |
| `FundType` | `CHAR(6)` | Fund Type |
| `GranteeMgmtFundType` | `CHAR(1)` | Fund Type for Grants Management |
| `BudgetProcess` | `CHAR(4)` | Budget Process Type |
| `BudgetingType` | `CHAR(8)` | Budget Type (Subcategory) |
| `BudgetDocWorkFlowStatus` | `CHAR(1)` | Workflow Status for a Budget Document |
| `AvailabilityControlProfile` | `CHAR(6)` | Budget Availability Control Profile for Public Sector Mgmt |
| `BudgetDocument` | `CHAR(10)` | Budget Document Number |
| `PurchaseOrder` | `CHAR(10)` | Purchase Order Number |
| `PurchaseRequisition` | `CHAR(10)` | Purchase Requisition Number |
| `EarmarkedFundsDocument` | `CHAR(10)` | Document Number for Earmarked Funds |
| `TransactionCurrency` | `CUKY(5)` | Transaction Currency |
| `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `GlobalCurrency` | `CUKY(5)` | Global Currency |
| `AmountInTransactionCurrency` | `DECF(34)` |  |
| `AmountInCompanyCodeCurrency` | `DECF(34)` |  |
| `AmountInGlobalCurrency` | `DECF(34)` |  |
| `PubSecExpnBdgtAmtInCoCodeCrcy` | `DECF(34)` |  |
| `PubSecExpnCmtmtAmtInCoCodeCrcy` | `DECF(34)` |  |
| `PubSecExpnActlAmtInCoCodeCrcy` | `DECF(34)` |  |
| `PubSecRevnBdgtAmtInCoCodeCrcy` | `DECF(34)` |  |
| `PubSecRevnCmtmtAmtInCoCodeCrcy` | `DECF(34)` |  |
| `PubSecRevnActlAmtInCoCodeCrcy` | `DECF(34)` |  |
| `PubSecExpnBdgtAmtInGlobalCrcy` | `DECF(34)` |  |
| `PubSecExpnCmtmtAmtInGlobalCrcy` | `DECF(34)` |  |
| `PubSecExpnActlAmtInGlobalCrcy` | `DECF(34)` |  |
| `PubSecDiffExpnAmtInGlobalCrcy` | `DECF(34)` |  |
| `PubSecRevnBdgtAmtInGlobalCrcy` | `DECF(34)` |  |
| `PubSecRevnCmtmtAmtInGlobalCrcy` | `DECF(34)` |  |
| `PubSecRevnActlAmtInGlobalCrcy` | `DECF(34)` |  |
| `PubSecDiffRevnAmtInGlobalCrcy` | `DECF(34)` |  |
| `PubSecIsConsumableBudget` | `CHAR(1)` | Include Consumable Budget (AVC) |
