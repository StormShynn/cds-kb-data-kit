---
name: I_PUBSECGRANTCOSTSHARING
description: Grants Cost Sharing Basic
app_component: PSM-GM-GTE-IS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECGRANTCOSTSHARING')/$value
semantic_en: Grants Cost Sharing Basic
tags:
  - PSM
  - component:PSM-GM-GTE-IS
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-IS
  - metadata-only
---
# I_PUBSECGRANTCOSTSHARING

**Grants Cost Sharing Basic**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECGRANTCOSTSHARING')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `GrantID` | `CHAR(20)` | Grant |
| `SponsoredProgram` | `CHAR(20)` | Sponsored Program |
| `SponsoredClass` | `CHAR(20)` | Sponsored Class |
| `GranteeMgmtSponsor` | `CHAR(10)` | Grant Sponsor |
| `PubSecBudgetCnsmpnType` | `CHAR(2)` | Budget Consumption Type |
| `GlobalCurrency` | `CUKY(5)` | Global Currency |
| `CostShrngContrbnAmtInGlobCrcy` | `CURR(23)` |  |
| `SpnsrContrbnAmtInGlobCrcy` | `CURR(23)` |  |
| `CalcdCostShrngContrbnAmt` | `CURR(23)` | Calculated Cost Sharing Contribution Amt in Global Currency |
| `ExcessCostShrngContrbnAmt` | `CURR(23)` | Excess Cost Sharing Contribution Amount in Global Currency |
| `PubSecBudgetIsRelevant` | `CHAR(1)` | Budget-Relevant Indicator |
| `GteeMBudgetValidityNumber` | `CHAR(3)` | Budget Validity Number |
| `GranteeMgmtCostSharingRule` | `NUMC(4)` | Rule for Determining Cost Sharing Requirements |
