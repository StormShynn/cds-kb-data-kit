---
name: C_PUBSECBDGTLINEITEMQRY1
description: Budget Line Items Query
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECBDGTLINEITEMQRY1')/$value
semantic_en: Budget Line Items Query
tags:
  - PSM
  - budget
  - component:PSM
  - consumption-view
  - metadata-only
---
# C_PUBSECBDGTLINEITEMQRY1

**Budget Line Items Query**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECBDGTLINEITEMQRY1')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Ledger` | `CHAR(2)` | Ledger |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `Fund` | `CHAR(10)` | Fund |
| `FundHierarchy` | `CHAR(42)` | Fund Hierarchy |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `PostingDate` | `DATS(8)` | Posting Date |
| `FinancialTransactionType` | `CHAR(3)` | Transaction Type |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `FunctionalAreaHierarchy` | `CHAR(42)` | Functional Area Hierarchy |
| `BudgetAccountHierarchy` | `CHAR(42)` | Budget Account Hierarchy |
| `CostCenterHierarchy` | `CHAR(42)` | Cost Center Hierarchy |
| `BudgetingType` | `CHAR(8)` | Budget Type (Subcategory) |
| `BudgetProcess` | `CHAR(4)` | Budget Process Type |
| `PlanningCategory` | `CHAR(10)` | Plan Category |
| `PubSecBdgtAcctRevnExpnCode` | `CHAR(1)` | Expense or Revenue on Budget Account |
| `BudgetDocWorkFlowStatus` | `CHAR(1)` | Workflow Status for a Budget Document |
| `PubSecIsConsumableBudget` | `CHAR(1)` | Include Consumable Budget (AVC) |
| `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `TransactionCurrency` | `CUKY(5)` | Transaction Currency |
| `GlobalCurrency` | `CUKY(5)` | Global Currency |
| `AmountInCompanyCodeCurrency` | `CURR(23)` | Amount in Company Code Currency |
| `AmountInTransactionCurrency` | `CURR(23)` | Amount in Transaction Currency |
| `AmountInGlobalCurrency` | `CURR(23)` | Amount in Global Currency |
| `PubSecExpnBdgtAmtInCoCodeCrcy` | `CURR(25)` | Budget Expense Amount in Company Code Currency |
| `PubSecExpnBdgtAmtInTransCrcy` | `CURR(25)` | Budget Expense Amount in Transaction Currency |
| `PubSecExpnBdgtAmtInGlobalCrcy` | `CURR(25)` | Budget Expense Amount in Global Currency |
| `PubSecRevnBdgtAmtInCoCodeCrcy` | `CURR(25)` | Budget Revenue Amount in Company Code Currency |
| `PubSecRevnBdgtAmtInTransCrcy` | `CURR(25)` | Budget Revenue Amount in Transaction Currency |
| `PubSecRevnBdgtAmtInGlobalCrcy` | `CURR(25)` | Budget Revenue Amount in Global Currency |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `CostCenterName` | `CHAR(20)` | Cost Center Name |
| `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `Product` | `CHAR(40)` | Product |
| `Plant` | `CHAR(4)` | Plant |
| `CostCtrActivityType` | `CHAR(6)` | Activity Type |
| `OrderID` | `CHAR(12)` | Order ID |
| `WBSElementInternalID` | `NUMC(8)` | WBS Element Internal ID |
| `WBSElementExternalID` | `CHAR(24)` | WBS Element External ID |
| `ProjectInternalID` | `NUMC(8)` | Project Internal ID |
| `ProjectExternalID` | `CHAR(24)` | Project External ID |
| `PartnerCostCtrActivityType` | `CHAR(6)` | Partner Cost Center Activity Type |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `BudgetPeriod` | `CHAR(10)` | Budget Period |
| `BusinessTransactionType` | `CHAR(4)` | Business Transaction Type |
| `CustomerGroup` | `CHAR(2)` | Customer Group |
| `FinancialManagementArea` | `CHAR(4)` | Financial Management Area |
| `GrantID` | `CHAR(20)` | Grant |
| `GrantHierarchy` | `CHAR(42)` | Grant Hierarchy |
| `GranteeMgmtSponsor` | `CHAR(10)` | Grant Sponsor |
| `PubSecBudgetAccount` | `CHAR(10)` | Budget Account |
| `FundType` | `CHAR(6)` | Fund Type |
| `GranteeMgmtFundType` | `CHAR(1)` | Fund Type for Grants Management |
| `SponsoredClass` | `CHAR(20)` | Sponsored Class |
| `SponsoredProgram` | `CHAR(20)` | Sponsored Program |
| `GteeMBudgetValidityNumber` | `CHAR(3)` | Budget Validity Number |
| `BudgetDocument` | `CHAR(10)` | Budget Document Number |
| `PartnerBusinessArea` | `CHAR(4)` | Partner Business Area |
| `PartnerCompanyCode` | `CHAR(4)` | Company Code of Partner |
| `PartnerCostCenter` | `CHAR(10)` | Partner Cost Center |
| `PartnerFunctionalArea` | `CHAR(16)` | Partner Functional Area |
| `PartnerProfitCenter` | `CHAR(10)` | Partner Profit Center |
| `PartnerSegment` | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `PartnerWBSElementInternalID` | `NUMC(8)` | Partner WBS Element Internal ID |
| `PartnerWBSElementExternalID` | `CHAR(24)` | Partner WBS Element External ID |
| `PartnerProjectInternalID` | `NUMC(8)` | Partner Project Internal ID |
| `PartnerProjectExternalID` | `CHAR(24)` | Partner Project External ID |
| `ReferenceDocument` | `CHAR(10)` | Reference Doc. Number |
| `ReferenceDocumentContext` | `CHAR(10)` | Reference Document Context |
| `ReferenceDocumentType` | `CHAR(5)` | Reference Document Type |
| `SoldProduct` | `CHAR(40)` | Product Sold |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `LedgerFiscalYear` | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalYearPeriod` | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
