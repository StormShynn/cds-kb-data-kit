---
name: I_PUBSECBDGTCNSMPNANALYSIS
description: Public Sector Budget Consumption Analysis
app_component: PSM-FM-IS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECBDGTCNSMPNANALYSIS')/$value
semantic_en: Public Sector Budget Consumption Analysis
tags:
  - PSM
  - budget
  - component:PSM-FM-IS
  - interface-view
  - PSM-FM
  - PSM-FM-IS
  - metadata-only
---
# I_PUBSECBDGTCNSMPNANALYSIS

**Public Sector Budget Consumption Analysis**

| Property | Value |
|---|---|
| App Component | `PSM-FM-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECBDGTCNSMPNANALYSIS')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `FinancialManagementArea` | `CHAR(4)` | Financial Management Area |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `CtrlObjForFund` | `CHAR(50)` | Control Object for a Fund |
| `CtrlObjForFunctionalArea` | `CHAR(50)` | Control Object for a Functional Area |
| `CtrlObjForBudgetPeriod` | `CHAR(50)` | Control Object for a Budget Period |
| `CtrlObjForCostCenter` | `CHAR(50)` | Control Object for a Cost Center |
| `CtrlObjForWBSElement` | `CHAR(50)` | Control Object for a WBS Element |
| `CtrlObjForBudgetAccount` | `CHAR(50)` | Control Object for a Budget Account |
| `CtrlObjForGrant` | `CHAR(50)` | Control Object for a Grant |
| `CtrlObjForSponsoredClass` | `CHAR(50)` | Control Object for a Sponsored Class |
| `CtrlObjForSponsoredProgram` | `CHAR(50)` | Control Object for a Sponsored Program |
| `CtrlObjForBdgtValidityNmbr` | `CHAR(23)` | Control Object for a Budget Validity Number |
| `GlobalCurrency` | `CUKY(5)` | Global Currency |
| `PubSecBdgtAcctRevnExpnCode` | `CHAR(1)` | Expense or Revenue on Budget Account |
| `AvailabilityControlProfile` | `CHAR(6)` | Budget Availability Control Profile for Public Sector Mgmt |
| `Fund` | `CHAR(10)` | Fund |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `FinancialAccountType` | `CHAR(1)` | Account Type |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `Supplier` | `CHAR(10)` | Supplier |
| `Customer` | `CHAR(10)` | Customer Number |
| `AccountingDocumentType` | `CHAR(2)` | Journal Entry Type |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `GrantID` | `CHAR(20)` | Grant |
| `SponsoredClass` | `CHAR(20)` | Sponsored Class |
| `SponsoredProgram` | `CHAR(20)` | Sponsored Program |
| `GteeMBudgetValidityNumber` | `CHAR(3)` | Budget Validity Number |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `BdgtConsumableAmtInGlobalCrcy` | `CURR(25)` | Consumable Amount in Global Currency |
| `BdgtConsumedAmtInGlobalCrcy` | `CURR(25)` | Consumed Amount in Global Currency |
| `BdgtAvailableAmtInGlobalCrcy` | `CURR(25)` | Available Amount in Global Currency |
| `HierarchyIDForFund` | `CHAR(42)` | Hierarchy ID for Fund |
| `HierarchyIDForFunctionalArea` | `CHAR(42)` | Hierarchy ID for Functional Area |
| `HierarchyIDForBudgetPeriod` | `CHAR(42)` | Hierarchy ID for Budget Period |
| `HierarchyIDForCostCenter` | `CHAR(42)` | Hierarchy ID for Cost Center |
| `HierarchyIDForWBSElement` | `CHAR(42)` | Hierarchy ID for WBS Element |
| `HierarchyIDForBudgetAccount` | `CHAR(42)` | Hierarchy ID for Budget Account Element |
| `GrantHierarchy` | `CHAR(42)` | Grant Hierarchy |
| `SponsoredClassHierarchy` | `CHAR(42)` | Sponsored Class Hierarchy |
| `SponsoredProgramHierarchy` | `CHAR(42)` | Sponsored Program Hierarchy |
