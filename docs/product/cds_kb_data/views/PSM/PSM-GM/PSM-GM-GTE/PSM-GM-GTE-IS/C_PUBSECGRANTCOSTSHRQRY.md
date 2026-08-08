---
name: C_PUBSECGRANTCOSTSHRQRY
description: "Grants Management Cost Sharing Query"
app_component: PSM-GM-GTE-IS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGRANTCOSTSHRQRY')/$value
semantic_en: "Grants Management Cost Sharing Query"
tags:
  - PSM
  - component:PSM-GM-GTE-IS
  - consumption-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-IS
  - metadata-only
---
# C_PUBSECGRANTCOSTSHRQRY

**Grants Management Cost Sharing Query**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGRANTCOSTSHRQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `SponsoredProgram` |  | |  |  | `CHAR(20)` | Sponsored Program |
| `SponsoredClass` |  | |  |  | `CHAR(20)` | Sponsored Class |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `PubSecBudgetCnsmpnType` |  | |  |  | `CHAR(2)` | Budget Consumption Type |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `CostShrngContrbnAmtInGlobCrcy` |  | |  |  | `CURR(23)` |  |
| `SpnsrContrbnAmtInGlobCrcy` |  | |  |  | `CURR(23)` |  |
| `CalcdCostShrngContrbnAmt` |  | |  |  | `CURR(23)` | Calculated Cost Sharing Contribution Amt in Global Currency |
| `ExcessCostShrngContrbnAmt` |  | |  |  | `CURR(23)` | Excess Cost Sharing Contribution Amount in Global Currency |
| `CostShrngSpnsrContrbnRate` |  | |  |  | `DEC(6)` | Cost Sharing Percentage |
| `CostShrngTotGrantContrbnRate` |  | |  |  | `DEC(6)` | Cost Sharing Percentage |
| `PubSecBudgetIsRelevant` |  | |  |  | `CHAR(1)` | Budget-Relevant Indicator |
| `GteeMBudgetValidityNumber` |  | |  |  | `CHAR(3)` | Budget Validity Number |
| `GranteeMgmtCostSharingRule` |  | |  |  | `NUMC(4)` | Rule for Determining Cost Sharing Requirements |
| `SponsoredClassName` |  | |  |  | `CHAR(20)` | Sponsored Class Name |
| `SponsoredProgramName` |  | |  |  | `CHAR(24)` | Sponsored Program Name |
| `GrantName` |  | |  |  | `CHAR(20)` | Short Description of the Grant |
