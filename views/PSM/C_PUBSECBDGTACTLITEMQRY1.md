---
name: C_PUBSECBDGTACTLITEMQRY1
description: Budget and Commitment/Actual Items - Detailed Query
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECBDGTACTLITEMQRY1')/$value
semantic_en: Budget and Commitment/Actual Items - Detailed Query
tags:
  - PSM
  - budget
  - component:PSM
  - consumption-view
  - metadata-only
---
# C_PUBSECBDGTACTLITEMQRY1

**Budget and Commitment/Actual Items - Detailed Query**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECBDGTACTLITEMQRY1')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `Fund` | `CHAR(10)` | Fund |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
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
| `CostSourceUnit` | `UNIT(3)` | Cost Source Unit |
| `AccountingDocumentType` | `CHAR(2)` | Journal Entry Type |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `CostCenterName` | `CHAR(20)` | Cost Center Name |
| `IsStatisticalCostCenter` | `CHAR(1)` | Indicator: Cost Center is Statistical Account Assignment |
| `LedgerGLLineItem` | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `Product` | `CHAR(40)` | Product |
| `Plant` | `CHAR(4)` | Plant |
| `Supplier` | `CHAR(10)` | Supplier |
| `Customer` | `CHAR(10)` | Customer Number |
| `FinancialAccountType` | `CHAR(1)` | Account Type |
| `PartnerCompany` | `CHAR(6)` | Company ID of Trading Partner |
| `CostCtrActivityType` | `CHAR(6)` | Activity Type |
| `OrderID` | `CHAR(12)` | Order ID |
| `WBSElementInternalID` | `NUMC(8)` | WBS Element Internal ID |
| `WBSElementExternalID` | `CHAR(24)` | WBS Element External ID |
| `WBSIsStatisticalWBSElement` | `CHAR(1)` | Indicator: WBS Element is Statistical Account Assignment |
| `ProjectInternalID` | `NUMC(8)` | Project Internal ID |
| `ProjectExternalID` | `CHAR(24)` | Project External ID |
| `BillingDocumentType` | `CHAR(4)` | Billing Type |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` | `CHAR(2)` | Organization Division |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `AccountAssignmentType` | `CHAR(2)` | Account Assignment Type |
| `BudgetPeriod` | `CHAR(10)` | Budget Period |
| `BusinessTransactionType` | `CHAR(4)` | Business Transaction Type |
| `CustomerGroup` | `CHAR(2)` | Customer Group |
| `FinancialManagementArea` | `CHAR(4)` | Financial Management Area |
| `GrantID` | `CHAR(20)` | Grant |
| `CtrlObjForFund` | `CHAR(50)` | Control Object for a Fund |
| `CtrlObjForFunctionalArea` | `CHAR(50)` | Control Object for a Functional Area |
| `CtrlObjForBudgetPeriod` | `CHAR(50)` | Control Object for a Budget Period |
| `CtrlObjForCostCenter` | `CHAR(50)` | Control Object for a Cost Center |
| `CtrlObjForWBSElement` | `CHAR(50)` | Control Object for a WBS Element |
| `CtrlObjForBudgetAccount` | `CHAR(50)` | Control Object for a Budget Account |
| `CashLedgerAccount` | `CHAR(10)` | Cash Origin Account |
| `CashLedgerCompanyCode` | `CHAR(4)` | Cash Origin Company Code |
| `PubSecBudgetAccount` | `CHAR(10)` | Budget Account |
| `PubSecBudgetAccountCoCode` | `CHAR(4)` | Budget Account Company Code |
| `PubSecBudgetCnsmpnDate` | `DATS(8)` | Budget Consumption Date |
| `PubSecBudgetCnsmpnFsclPeriod` | `NUMC(3)` | CC Fiscal Period for Budget Consumption Date |
| `PubSecBudgetCnsmpnFsclYear` | `NUMC(4)` | CC Fiscal Year for Budget Consumption Date |
| `PubSecBudgetCnsmpnType` | `CHAR(2)` | Budget Consumption Type |
| `PubSecBudgetCnsmpnAmtType` | `CHAR(4)` | Budget Consumption Amount Type |
| `PubSecBudgetIsRelevant` | `CHAR(1)` | Budget-Relevant Indicator |
| `PubSecBdgtAcctRevnExpnCode` | `CHAR(1)` | Expense or Revenue on Budget Account |
| `FundType` | `CHAR(6)` | Fund Type |
| `BudgetingType` | `CHAR(8)` | Budget Type (Subcategory) |
| `BudgetProcess` | `CHAR(4)` | Budget Process Type |
| `OriginCostCenter` | `CHAR(10)` | Origin Cost Center |
| `OriginCostCtrActivityType` | `CHAR(6)` | Origin Cost Center Activity Type |
| `PartnerAccountAssignmentType` | `CHAR(2)` | Partner Account Assignment Type |
| `PartnerBudgetPeriod` | `CHAR(10)` | FM: Partner Budget Period |
| `PartnerBusinessArea` | `CHAR(4)` | Partner Business Area |
| `PartnerCompanyCode` | `CHAR(4)` | Partner Company Code |
| `PartnerCostCenter` | `CHAR(10)` | Partner Cost Center |
| `PartnerFunctionalArea` | `CHAR(16)` | Partner Functional Area |
| `PartnerOrder` | `CHAR(12)` | Partner Order (Deprecated) |
| `PartnerProfitCenter` | `CHAR(10)` | Partner Profit Center |
| `PartnerSegment` | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `PartnerWBSElementInternalID` | `NUMC(8)` | Partner WBS Element Internal ID |
| `PartnerWBSElementExternalID` | `CHAR(24)` | Partner WBS Element External ID |
| `PartnerProjectInternalID` | `NUMC(8)` | Partner Project Internal ID |
| `PartnerProjectExternalID` | `CHAR(24)` | Partner Project External ID |
| `PartnerCostCtrActivityType` | `CHAR(6)` | Partner Cost Center Activity Type |
| `ReferenceDocument` | `CHAR(10)` | Reference Doc. Number |
| `ReferenceDocumentContext` | `CHAR(10)` | Reference Document Context |
| `ReferenceDocumentType` | `CHAR(5)` | Reference Document Type |
| `SoldProduct` | `CHAR(40)` | Product Sold |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `LedgerFiscalYear` | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalYearPeriod` | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
