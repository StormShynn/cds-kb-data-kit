---
name: I_PUBSECGRANTBUDGETALERTCUBE
description: Grant Budget Alert - Cube
app_component: PSM-GM-GTE-IS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECGRANTBUDGETALERTCUBE')/$value
semantic_en: Grant Budget Alert - Cube
tags:
  - PSM
  - budget
  - component:PSM-GM-GTE-IS
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-IS
  - metadata-only
---
# I_PUBSECGRANTBUDGETALERTCUBE

**Grant Budget Alert - Cube**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECGRANTBUDGETALERTCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
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
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `PubSecBdgtAcctRevnExpnCode` |  | |  |  | `CHAR(1)` | Expense or Revenue on Budget Account |
| `BdgtConsumableExpnAmtInGCrcy` |  | |  |  | `CURR(25)` | Consumable Expense Amount in Global Currency |
| `BdgtConsumedExpnAmtInGCrcy` |  | |  |  | `CURR(25)` | Consumed Expense Amount in Global Currency |
| `BdgtAvailableExpnAmtInGCrcy` |  | |  |  | `CURR(25)` | Available Expense Amount in Global Currency |
| `NumberOfControlObjects` |  | |  |  | `INT4(10)` | Number of Document Items |
| `HierarchyIDForFund` |  | |  |  | `CHAR(42)` | Hierarchy ID for Fund |
| `HierarchyIDForFunctionalArea` |  | |  |  | `CHAR(42)` | Hierarchy ID for Functional Area |
| `HierarchyIDForBudgetPeriod` |  | |  |  | `CHAR(42)` | Hierarchy ID for Budget Period |
| `HierarchyIDForCostCenter` |  | |  |  | `CHAR(42)` | Hierarchy ID for Cost Center |
| `HierarchyIDForWBSElement` |  | |  |  | `CHAR(42)` | Hierarchy ID for WBS Element |
| `HierarchyIDForBudgetAccount` |  | |  |  | `CHAR(42)` | Hierarchy ID for Budget Account Element |
| `GrantHierarchy` |  | |  |  | `CHAR(42)` | Grant Hierarchy |
| `SponsoredClassHierarchy` |  | |  |  | `CHAR(42)` | Sponsored Class Hierarchy |
| `SponsoredProgramHierarchy` |  | |  |  | `CHAR(42)` | Sponsored Program Hierarchy |
