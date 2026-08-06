---
name: C_PUBSECBDGTACTLITEMQRY2
description: Budget and Commitment/Actual Items Query
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECBDGTACTLITEMQRY2')/$value
semantic_en: Budget and Commitment/Actual Items Query
tags:
  - PSM
  - budget
  - component:PSM
  - consumption-view
  - metadata-only
---
# C_PUBSECBDGTACTLITEMQRY2

**Budget and Commitment/Actual Items Query**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECBDGTACTLITEMQRY2')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `Fund` | `CHAR(10)` | Fund |
| `FundHierarchy` | `CHAR(42)` | Fund Hierarchy |
| `FunctionalAreaHierarchy` | `CHAR(42)` | Functional Area Hierarchy |
| `BudgetAccountHierarchy` | `CHAR(42)` | Budget Account Hierarchy |
| `CostCenterHierarchy` | `CHAR(42)` | Cost Center Hierarchy |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `PostingDate` | `DATS(8)` | Posting Date |
| `FinancialTransactionType` | `CHAR(3)` | Financial Transaction Type |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `IsCommitment` | `CHAR(1)` | Indicator: Is Commitment |
| `PlanningCategory` | `CHAR(10)` | Plan Category |
| `ActualPlanCode` | `CHAR(1)` | Actual Plan Code |
| `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `TransactionCurrency` | `CUKY(5)` | Transaction Currency |
| `GlobalCurrency` | `CUKY(5)` | Global Currency |
| `AmountInCompanyCodeCurrency` | `CURR(23)` | Amount in Company Code Currency |
| `AmountInTransactionCurrency` | `CURR(23)` | Amount in Transaction Currency |
| `AmountInGlobalCurrency` | `CURR(23)` | Amount in Global Currency |
| `PubSecExpnBdgtAmtInGlobalCrcy` | `CURR(25)` | Budget Expense Amount in Global Currency |
| `PubSecExpnCmtmtAmtInGlobalCrcy` | `CURR(25)` | Commitment Expense Amount in Global Currency |
| `PubSecExpnActlAmtInGlobalCrcy` | `CURR(25)` | Actual Expense Amount in Global Currency |
| `PubSecDiffExpnAmtInGlobalCrcy` | `CURR(25)` | Expense Amount Difference in Global Currency |
| `PubSecRevnBdgtAmtInGlobalCrcy` | `CURR(25)` | Budget Revenue Amount in Global Currency |
| `PubSecRevnCmtmtAmtInGlobalCrcy` | `CURR(25)` | Commitment Revenue Amount in Global Currency |
| `PubSecRevnActlAmtInGlobalCrcy` | `CURR(25)` | Actual Revenue Amount in Global Currency |
| `PubSecDiffRevnAmtInGlobalCrcy` | `CURR(25)` | Revenue Amount Difference in Global Currency |
| `AccountingDocumentType` | `CHAR(2)` | Journal Entry Type |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `CostCenterName` | `CHAR(20)` | Cost Center Name |
| `WBSElementExternalID` | `CHAR(24)` | WBS Element External ID |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `BudgetPeriod` | `CHAR(10)` | Budget Period |
| `BusinessTransactionType` | `CHAR(4)` | Business Transaction Type |
| `GrantID` | `CHAR(20)` | Grant |
| `GrantHierarchyNode` | `CHAR(50)` | Grant Hierarchy Node |
| `GranteeMgmtSponsor` | `CHAR(10)` | Grant Sponsor |
| `SponsoredClass` | `CHAR(20)` | Sponsored Class |
| `SponsoredProgram` | `CHAR(20)` | Sponsored Program |
| `GteeMBudgetValidityNumber` | `CHAR(3)` | Budget Validity Number |
| `CtrlObjForFund` | `CHAR(50)` | Control Object for a Fund |
| `CtrlObjForFunctionalArea` | `CHAR(50)` | Control Object for a Functional Area |
| `CtrlObjForBudgetPeriod` | `CHAR(50)` | Control Object for a Budget Period |
| `CtrlObjForCostCenter` | `CHAR(50)` | Control Object for a Cost Center |
| `CtrlObjForWBSElement` | `CHAR(50)` | Control Object for a WBS Element |
| `CtrlObjForBudgetAccount` | `CHAR(50)` | Control Object for a Budget Account |
| `CtrlObjForGrant` | `CHAR(50)` | Control Object for a Grant |
| `CtrlObjForSponsoredClass` | `CHAR(50)` | Control Object for a Sponsored Class |
| `CtrlObjForSponsoredProgram` | `CHAR(50)` | Control Object for a Sponsored Program |
| `CashLedgerAccount` | `CHAR(10)` | Cash Origin Account |
| `PubSecBudgetAccount` | `CHAR(10)` | Budget Account |
| `PubSecBudgetCnsmpnDate` | `DATS(8)` | Budget Consumption Date |
| `PubSecBudgetCnsmpnFsclPeriod` | `NUMC(3)` | CC Fiscal Period for Budget Consumption Date |
| `PubSecBudgetCnsmpnFsclYear` | `NUMC(4)` | CC Fiscal Year for Budget Consumption Date |
| `PubSecBudgetCnsmpnType` | `CHAR(2)` | Budget Consumption Type |
| `PubSecBudgetCnsmpnTypeGroup` | `CHAR(2)` | Budget Consumption Type Group |
| `PubSecBudgetCnsmpnAmtType` | `CHAR(4)` | Budget Consumption Amount Type |
| `PubSecBudgetIsRelevant` | `CHAR(1)` | Budget-Relevant Indicator |
| `PubSecIsConsumableBudget` | `CHAR(1)` | Include Consumable Budget (AVC) |
| `PubSecBdgtAcctRevnExpnCode` | `CHAR(1)` | Expense or Revenue on Budget Account |
| `FundType` | `CHAR(6)` | Fund Type |
| `GranteeMgmtFundType` | `CHAR(1)` | Fund Type for Grants Management |
| `BudgetingType` | `CHAR(8)` | Budget Type (Subcategory) |
| `BudgetProcess` | `CHAR(4)` | Budget Process Type |
| `BudgetDocWorkFlowStatus` | `CHAR(1)` | Workflow Status for a Budget Document |
| `AvailabilityControlProfile` | `CHAR(6)` | Budget Availability Control Profile for Public Sector Mgmt |
| `BudgetDocument` | `CHAR(10)` | Budget Document Number |
| `PurchaseOrder` | `CHAR(10)` | Purchase Order Number |
| `PurchaseRequisition` | `CHAR(10)` | Purchase Requisition Number |
| `EarmarkedFundsDocument` | `CHAR(10)` | Document Number for Earmarked Funds |
| `OriginCostCenter` | `CHAR(10)` | Origin Cost Center |
| `PartnerFund` | `CHAR(10)` | Partner Fund |
| `PartnerBudgetPeriod` | `CHAR(10)` | FM: Partner Budget Period |
| `PartnerCostCenter` | `CHAR(10)` | Partner Cost Center |
| `PartnerFunctionalArea` | `CHAR(16)` | Partner Functional Area |
| `PartnerGrant` | `CHAR(20)` | Partner Grant |
| `PartnerWBSElementExternalID` | `CHAR(24)` | Partner WBS Element External ID |
