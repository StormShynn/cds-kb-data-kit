---
name: C_PUBSECGRANTBUDGETALRTQRY
description: "Grant Budget Alert Query"
app_component: PSM-GM-GTE-IS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGRANTBUDGETALRTQRY')/$value
semantic_en: "Grant Budget Alert Query"
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
# C_PUBSECGRANTBUDGETALRTQRY

**Grant Budget Alert Query**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGRANTBUDGETALRTQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CtrlObjForFund` |  | |  |  | `CHAR(50)` | Control Object for a Fund |
| `CtrlObjForBudgetPeriod` |  | |  |  | `CHAR(50)` | Control Object for a Budget Period |
| `CtrlObjForWBSElement` |  | |  |  | `CHAR(50)` | Control Object for a WBS Element |
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
| `PubSecConsumedAmountInPercent` |  | |  |  | `DEC(5)` | Percentage of consumed amout of what is consumable. |
