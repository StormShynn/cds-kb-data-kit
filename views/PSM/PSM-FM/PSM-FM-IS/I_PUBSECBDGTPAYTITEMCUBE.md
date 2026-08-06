---
name: I_PUBSECBDGTPAYTITEMCUBE
description: Budget vs Payment Items - Cube
app_component: PSM-FM-IS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECBDGTPAYTITEMCUBE')/$value
semantic_en: Budget vs Payment Items - Cube
tags:
  - PSM
  - budget
  - component:PSM-FM-IS
  - interface-view
  - payment
  - PSM-FM
  - PSM-FM-IS
  - metadata-only
---
# I_PUBSECBDGTPAYTITEMCUBE

**Budget vs Payment Items - Cube**

| Property | Value |
|---|---|
| App Component | `PSM-FM-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECBDGTPAYTITEMCUBE')/$value) |

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
| `FinancialPlanningEntryItem` | `INT4(10)` | Financial Planning Entry Item |
| `LedgerGLLineItem` | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `PlanningCategory` | `CHAR(10)` | Plan Category |
| `ActualPlanJournalEntryItem` | `CHAR(12)` | Actual Plan Journal Entry Item |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `ReferenceDocument` | `CHAR(10)` | Reference Doc. Number |
| `ReferenceDocumentType` | `CHAR(5)` | Reference Document Type |
| `ReferenceDocumentItem` | `NUMC(6)` | Reference Document Item |
| `SourceReferenceDocument` | `CHAR(10)` | Source Reference Document |
| `SourceReferenceDocumentType` | `CHAR(5)` | Source Reference Document Type |
| `SourceReferenceDocumentItem` | `NUMC(6)` | Source Reference Document Item |
| `Fund` | `CHAR(10)` | Fund |
| `GrantID` | `CHAR(20)` | Grant |
| `BudgetPeriod` | `CHAR(10)` | Budget Period |
| `SponsoredClass` | `CHAR(20)` | Sponsored Class |
| `SponsoredProgram` | `CHAR(20)` | Sponsored Program |
| `GranteeMgmtSponsor` | `CHAR(10)` | Grant Sponsor |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `WBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `CashLedgerAccount` | `CHAR(10)` | Cash Origin Account |
| `CashLedgerCompanyCode` | `CHAR(4)` | Cash Origin Company Code |
| `PubSecBudgetCnsmpnType` | `CHAR(2)` | Budget Consumption Type |
| `PostingDate` | `DATS(8)` | Posting Date |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
| `BusinessTransactionType` | `CHAR(4)` | Business Transaction Type |
| `AmountInTransactionCurrency` | `CURR(23)` | Amount in Transaction Currency |
| `TransactionCurrency` | `CUKY(5)` | Transaction Currency |
| `PubSecBudgetAccount` | `CHAR(10)` | Budget Account |
| `PubSecBudgetAccountCoCode` | `CHAR(4)` | Budget Account Company Code |
| `AmountInCompanyCodeCurrency` | `CURR(23)` | Amount in Company Code Currency |
| `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `AmountInGlobalCurrency` | `CURR(23)` | Amount in Global Currency |
| `GlobalCurrency` | `CUKY(5)` | Global Currency |
| `ClearingDate` | `DATS(8)` | Clearing Date |
| `FinancialManagementArea` | `CHAR(4)` | Financial Management Area |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `FundType` | `CHAR(6)` | Fund Type |
| `GranteeMgmtFundType` | `CHAR(1)` | Fund Type for Grants Management |
| `PubSecBdgtAcctRevnExpnCode` | `CHAR(1)` | Expense or Revenue on Budget Account |
| `PubSecBudgetCnsmpnTypeGroup` | `CHAR(2)` | Budget Consumption Type Group |
| `PubSecBudgetCnsmpnAmtType` | `CHAR(4)` | Budget Consumption Amount Type |
| `PubSecBudgetCnsmpnDate` | `DATS(8)` | Budget Consumption Date |
| `PubSecBudgetCnsmpnFsclPeriod` | `NUMC(3)` | CC Fiscal Period for Budget Consumption Date |
| `PubSecBudgetCnsmpnFsclYear` | `NUMC(4)` | CC Fiscal Year for Budget Consumption Date |
| `PubSecBudgetIsRelevant` | `CHAR(1)` | Budget-Relevant Indicator |
| `BudgetingType` | `CHAR(8)` | Budget Type (Subcategory) |
| `BudgetProcess` | `CHAR(4)` | Budget Process Type |
| `BudgetDocWorkFlowStatus` | `CHAR(1)` | Workflow Status for a Budget Document |
| `ActualPlanCode` | `CHAR(1)` | Actual Plan Code |
| `CostCenterHierarchy` | `CHAR(42)` | Cost Center Hierarchy |
| `FundHierarchy` | `CHAR(42)` | Fund Hierarchy |
| `GrantHierarchyNode` | `CHAR(50)` | Grant Hierarchy Node |
| `FunctionalAreaHierarchy` | `CHAR(42)` | Functional Area Hierarchy |
| `BudgetAccountHierarchy` | `CHAR(42)` | Budget Account Hierarchy |
| `PubSecExpnBdgtAmtInGlobalCrcy` | `CURR(25)` | Budget Expense Amount in Global Currency |
| `PubSecRevnBdgtAmtInGlobalCrcy` | `CURR(25)` | Budget Revenue Amount in Global Currency |
| `PubSecExpnPaytAmtInGlobCrcy` | `CURR(25)` | Payment Expense Amount in Global Currency |
| `PubSecExpnInvcAmtInGlobCrcy` | `CURR(30)` |  |
| `PubSecExpnTransfAmtInGlobCrcy` | `CURR(25)` | Transfer Expense Amount in Global Currency |
| `PubSecRevnInvcAmtInGlobCrcy` | `CURR(25)` | Invoice Revenue Amount in Global Currency |
| `PubSecRevnTransfAmtInGlobCrcy` | `CURR(25)` | Transfer Revenue Amount in Global Currency |
| `PubSecInvcdTrnsfdAmtInGlobCrcy` | `CURR(25)` | Invoiced/ Transferred Amount in Global Currency |
| `PubSecRevnCollAmtInGlobCrcy` | `DECF(34)` |  |
| `PubSecBlldTrnsfdAmtInGlobCrcy` | `DECF(34)` |  |
| `PubSecFcstOfRevnAmtInGC` | `CURR(25)` | Forecast of Revenue Amount in Global Currency |
| `PubSecExpnCmtmtAmtInGlobalCrcy` | `CURR(25)` | Commitment Expense Amount in Global Currency |
| `PubSecExpnPreCmtmtAmtInGC` | `CURR(25)` | Preencumbrance Expense Amount in Global Currency |
| `PartnerCostCenter` | `CHAR(10)` | Partner Cost Center |
| `PartnerFunctionalArea` | `CHAR(16)` | Partner Functional Area |
| `PartnerBudgetPeriod` | `CHAR(10)` | FM: Partner Budget Period |
| `PartnerFund` | `CHAR(10)` | Partner Fund |
| `PartnerGrant` | `CHAR(20)` | Partner Grant |
| `PartnerWBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `OriginCostCenter` | `CHAR(10)` | Origin Cost Center |
| `IsCommitment` | `CHAR(1)` | Indicator: Is Commitment |
| `BudgetDocument` | `CHAR(10)` | Budget Document Number |
| `PurchaseOrder` | `CHAR(10)` | Purchase Order Number |
| `PurchaseRequisition` | `CHAR(10)` | Purchase Requisition Number |
| `EarmarkedFundsDocument` | `CHAR(10)` | Document Number for Earmarked Funds |
