---
name: I_GTEEMBDGTCOSTSHRNGCUBE
description: Grant Budget Cost Sharing - Cube
app_component: PSM-GM-GTE-IS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GTEEMBDGTCOSTSHRNGCUBE')/$value
semantic_en: Grant Budget Cost Sharing - Cube
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
# I_GTEEMBDGTCOSTSHRNGCUBE

**Grant Budget Cost Sharing - Cube**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GTEEMBDGTCOSTSHRNGCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `SponsoredProgram` |  | |  |  | `CHAR(20)` | Sponsored Program |
| `SponsoredClass` |  | |  |  | `CHAR(20)` | Sponsored Class |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `ActualPlanCode` |  | |  |  | `CHAR(1)` | Actual Plan Code |
| `PubSecBudgetCnsmpnType` |  | |  |  | `CHAR(2)` | Budget Consumption Type |
| `BudgetDocWorkFlowStatus` |  | |  |  | `CHAR(1)` |  |
| `GrantType` |  | |  |  | `CHAR(2)` | Grant Type |
| `GrantLifecycleStatus` |  | |  |  | `CHAR(5)` | Lifecycle Status |
| `GteeMCostSharingRateInPercent` |  | |  |  | `DEC(6)` |  |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `CostShrngContrbnAmtInGlobCrcy` |  | |  |  | `CURR(23)` |  |
| `SpnsrContrbnAmtInGlobCrcy` |  | |  |  | `CURR(23)` |  |
| `ExcessCostShrngContrbnAmt` |  | |  |  | `CURR(23)` | Excess Cost Sharing Contribution Amount in Global Currency |
| `GrantIsNotRelevantGrant` |  | |  |  | `CHAR(1)` | Identify the Not Relevant Grant |
