---
name: C_PUBSECGRANTBDGTCNSMPN
description: "Grant Budget Overview"
app_component: PSM-GM-GTE-IS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGRANTBDGTCNSMPN')/$value
semantic_en: "Grant Budget Overview"
tags:
  - PSM
  - budget
  - component:PSM-GM-GTE-IS
  - consumption-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-IS
  - metadata-only
---
# C_PUBSECGRANTBDGTCNSMPN

**Grant Budget Overview**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGRANTBDGTCNSMPN')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `CtrlObjForFund` |  | |  |  | `CHAR(50)` | Control Object for a Fund |
| `CtrlObjForFunctionalArea` |  | |  |  | `CHAR(50)` | Control Object for a Functional Area |
| `CtrlObjForBudgetPeriod` |  | |  |  | `CHAR(50)` | Control Object for a Budget Period |
| `CtrlObjForCostCenter` |  | |  |  | `CHAR(50)` | Control Object for a Cost Center |
| `CtrlObjForWBSElement` |  | |  |  | `CHAR(50)` | Control Object for a WBS Element |
| `CtrlObjForBudgetAccount` |  | |  |  | `CHAR(50)` | Control Object for a Budget Account |
| `CtrlObjForGrant` |  | |  |  | `CHAR(50)` | Control Object for a Grant |
| `CtrlObjForSponsoredClass` |  | |  |  | `CHAR(50)` | Control Object for a Sponsored Class |
| `CtrlObjForSponsoredProgram` |  | |  |  | `CHAR(50)` | Control Object for a Sponsored Program |
| `CtrlObjForBdgtValidityNmbr` |  | |  |  | `CHAR(23)` | Control Object for a Budget Validity Number |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `PubSecBdgtAcctRevnExpnCode` |  | |  |  | `CHAR(1)` | Expense or Revenue on Budget Account |
| `AvailabilityControlProfile` |  | |  |  | `CHAR(6)` | Budget Availability Control Profile for Public Sector Mgmt |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `SponsoredClass` |  | |  |  | `CHAR(20)` | Sponsored Class |
| `SponsoredProgram` |  | |  |  | `CHAR(20)` | Sponsored Program |
| `GteeMBudgetValidityNumber` |  | |  |  | `CHAR(3)` | Budget Validity Number |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `BdgtConsumableExpnAmtInGCrcy` |  | |  |  | `CURR(25)` | Consumable Expense Amount in Global Currency |
| `BdgtConsumedExpnAmtInGCrcy` |  | |  |  | `CURR(25)` | Consumed Expense Amount in Global Currency |
| `BdgtAvailableExpnAmtInGCrcy` |  | |  |  | `CURR(25)` | Available Expense Amount in Global Currency |
| `HierarchyIDForFund` |  | |  |  | `CHAR(42)` | Hierarchy ID for Fund |
| `HierarchyIDForFunctionalArea` |  | |  |  | `CHAR(42)` | Hierarchy ID for Functional Area |
| `HierarchyIDForBudgetPeriod` |  | |  |  | `CHAR(42)` | Hierarchy ID for Budget Period |
| `HierarchyIDForCostCenter` |  | |  |  | `CHAR(42)` | Hierarchy ID for Cost Center |
| `HierarchyIDForWBSElement` |  | |  |  | `CHAR(42)` | Hierarchy ID for WBS Element |
| `HierarchyIDForBudgetAccount` |  | |  |  | `CHAR(42)` | Hierarchy ID for Budget Account Element |
| `GrantHierarchy` |  | |  |  | `CHAR(42)` | Grant Hierarchy |
| `SponsoredClassHierarchy` |  | |  |  | `CHAR(42)` | Sponsored Class Hierarchy |
| `SponsoredProgramHierarchy` |  | |  |  | `CHAR(42)` | Sponsored Program Hierarchy |
| `CtrlObjNameForFund` |  | |  |  | `CHAR(50)` | Name of a Control Object for a Fund |
| `CtrlObjNameForFunctionalArea` |  | |  |  | `CHAR(50)` | Name of a Control Object for a Functional Area |
| `CtrlObjNameForBudgetPeriod` |  | |  |  | `CHAR(50)` | Name of a Control Object for a Budget Period |
| `CtrlObjNameForCostCenter` |  | |  |  | `CHAR(50)` | Name of a Control Object for a Cost Center |
| `CtrlObjNameForWBSElement` |  | |  |  | `CHAR(50)` | Name of a Control Object for a WBS Element |
| `CtrlObjNameForBudgetAccount` |  | |  |  | `CHAR(50)` | Name of a Control Object for a Budget Account |
| `CtrlObjForGrantName` |  | |  |  | `CHAR(50)` | Control Object for a Grant |
| `CtrlObjForSponsoredClassName` |  | |  |  | `CHAR(50)` | Control Object for a Sponsored Class |
| `CtrlObjForSponsoredProgramName` |  | |  |  | `CHAR(50)` | Control Object for a Sponsored Program |
| `BusinessPartnerName` |  | |  |  | `CHAR(81)` |  |
| `PubSecBdgtAcctRevnExpnCodeText` |  | |  |  | `CHAR(60)` | Description of Expense or Revenue on Budget Account |
| `AvailabilityControlProfileName` |  | |  |  | `CHAR(30)` | Budget Availability Control: Profile Name |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `CurrencyName` |  | |  |  | `CHAR(40)` | Description |
