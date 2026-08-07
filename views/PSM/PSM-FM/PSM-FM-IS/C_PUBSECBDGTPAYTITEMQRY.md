---
name: C_PUBSECBDGTPAYTITEMQRY
description: Budget and Payment Line Items Query
app_component: PSM-FM-IS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECBDGTPAYTITEMQRY')/$value
semantic_en: Budget and Payment Line Items Query
tags:
  - PSM
  - budget
  - component:PSM-FM-IS
  - consumption-view
  - payment
  - PSM-FM
  - PSM-FM-IS
  - metadata-only
---
# C_PUBSECBDGTPAYTITEMQRY

**Budget and Payment Line Items Query**

| Property | Value |
|---|---|
| App Component | `PSM-FM-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECBDGTPAYTITEMQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `CashLedgerAccount` |  | |  |  | `CHAR(10)` | Cash Origin Account |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `FundHierarchy` |  | |  |  | `CHAR(42)` | Fund Hierarchy |
| `GrantHierarchyNode` |  | |  |  | `CHAR(50)` | Grant Hierarchy Node |
| `BudgetAccountHierarchy` |  | |  |  | `CHAR(42)` | Budget Account Hierarchy |
| `CostCenterHierarchy` |  | |  |  | `CHAR(42)` | Cost Center Hierarchy |
| `ClearingDate` |  | |  |  | `DATS(8)` | Clearing Date |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `FunctionalAreaHierarchy` |  | |  |  | `CHAR(42)` | Functional Area Hierarchy |
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `IsCommitment` |  | |  |  | `CHAR(1)` | Indicator: Is Commitment |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `SponsoredClass` |  | |  |  | `CHAR(20)` | Sponsored Class |
| `SponsoredProgram` |  | |  |  | `CHAR(20)` | Sponsored Program |
| `BudgetPeriod` |  | |  |  | `CHAR(10)` | Budget Period |
| `GranteeMgmtFundType` |  | |  |  | `CHAR(1)` | Fund Type for Grants Management |
| `FundType` |  | |  |  | `CHAR(6)` | Fund Type |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `PubSecBudgetAccount` |  | |  |  | `CHAR(10)` | Budget Account |
| `PubSecBudgetAccountCoCode` |  | |  |  | `CHAR(4)` | Budget Account Company Code |
| `PubSecBudgetCnsmpnDate` |  | |  |  | `DATS(8)` | Budget Consumption Date |
| `PubSecBudgetCnsmpnFsclPeriod` |  | |  |  | `NUMC(3)` | CC Fiscal Period for Budget Consumption Date |
| `PubSecBudgetCnsmpnFsclYear` |  | |  |  | `NUMC(4)` | CC Fiscal Year for Budget Consumption Date |
| `PubSecBudgetCnsmpnType` |  | |  |  | `CHAR(2)` | Budget Consumption Type |
| `PubSecBudgetCnsmpnTypeGroup` |  | |  |  | `CHAR(2)` | Budget Consumption Type Group |
| `PubSecBudgetCnsmpnAmtType` |  | |  |  | `CHAR(4)` | Budget Consumption Amount Type |
| `PubSecBudgetIsRelevant` |  | |  |  | `CHAR(1)` | Budget-Relevant Indicator |
| `BudgetProcess` |  | |  |  | `CHAR(4)` | Budget Process Type |
| `BudgetingType` |  | |  |  | `CHAR(8)` | Budget Type (Subcategory) |
| `BudgetDocWorkFlowStatus` |  | |  |  | `CHAR(1)` | Workflow Status for a Budget Document |
| `PubSecBdgtAcctRevnExpnCode` |  | |  |  | `CHAR(1)` | Expense or Revenue on Budget Account |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `PubSecExpnBdgtAmtInGlobalCrcy` |  | |  |  | `CURR(25)` | Budget Expense Amount in Global Currency |
| `PubSecExpnPaytAmtInGlobCrcy` |  | |  |  | `CURR(25)` |  |
| `PubSecBdgtNotPaidAmtInGlobCrcy` |  | |  |  | `CURR(25)` | Budget Not Paid Amount in Global Currency |
| `PubSecInvcdTrnsfdAmtInGlobCrcy` |  | |  |  | `CURR(25)` | Invoiced/ Transferred Amount in Global Currency |
| `PubSecBdgtNotInvcTrnsfdAmtInGC` |  | |  |  | `DECF(34)` |  |
| `PubSecExpnCmtmtAmtInGlobalCrcy` |  | |  |  | `CURR(25)` | Commitment Expense Amount in Global Currency |
| `PubSecBdgtNotCmtmtAmtInGC` |  | |  |  | `DECF(34)` |  |
| `PubSecExpnPreCmtmtAmtInGC` |  | |  |  | `CURR(25)` | Preencumbrance Expense Amount in Global Currency |
| `PubSecBdgtNotPreCmtmtAmtInGC` |  | |  |  | `CURR(25)` | Budget Not Pre-Encumbered Amount in Global Currency |
| `PubSecRevnBdgtAmtInGlobalCrcy` |  | |  |  | `CURR(25)` | Budget Revenue Amount in Global Currency |
| `PubSecRevnCollAmtInGlobCrcy` |  | |  |  | `DECF(34)` |  |
| `PubSecBdgtNotColltdAmtInGC` |  | |  |  | `CURR(25)` | Budget Not Collected Amount in Global Currency |
| `PubSecBlldTrnsfdAmtInGlobCrcy` |  | |  |  | `CURR(25)` | Billed/Transfer Amount in Global Currency |
| `PubSecBdgtNotBlldTrnsfdAmtInGC` |  | |  |  | `CURR(25)` | Budget Not Billed/Transferred Amount in Global Currency |
| `PubSecFcstOfRevnAmtInGC` |  | |  |  | `CURR(25)` | Forecast of Revenue Amount in Global Currency |
| `PubSecBdgtNotFcstdAmtInGC` |  | |  |  | `CURR(25)` | Budget Not Forecasted Amount in Global Currency |
| `BudgetDocument` |  | |  |  | `CHAR(10)` | Budget Document Number |
| `PurchaseOrder` |  | |  |  | `CHAR(10)` | Purchase Order Number |
| `PurchaseRequisition` |  | |  |  | `CHAR(10)` | Purchase Requisition Number |
| `EarmarkedFundsDocument` |  | |  |  | `CHAR(10)` | Document Number for Earmarked Funds |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `OriginCostCenter` |  | |  |  | `CHAR(10)` | Origin Cost Center |
| `PartnerBudgetPeriod` |  | |  |  | `CHAR(10)` | FM: Partner Budget Period |
| `PartnerFund` |  | |  |  | `CHAR(10)` | Partner Fund |
| `PartnerGrant` |  | |  |  | `CHAR(20)` | Partner Grant |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Partner Cost Center |
| `PartnerWBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
