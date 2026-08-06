---
name: C_GTEEMBDGTCOSTSHRNGQRY1
description: Grant Budget Cost Sharing Item - Query
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GTEEMBDGTCOSTSHRNGQRY1')/$value
semantic_en: Grant Budget Cost Sharing Item - Query
tags:
  - PSM
  - budget
  - component:PSM
  - consumption-view
  - metadata-only
---
# C_GTEEMBDGTCOSTSHRNGQRY1

**Grant Budget Cost Sharing Item - Query**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GTEEMBDGTCOSTSHRNGQRY1')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `GrantID` | `CHAR(20)` | Grant |
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `SponsoredProgram` | `CHAR(20)` | Sponsored Program |
| `SponsoredClass` | `CHAR(20)` | Sponsored Class |
| `GranteeMgmtSponsor` | `CHAR(10)` | Grant Sponsor |
| `ActualPlanCode` | `CHAR(1)` | Actual Plan Code |
| `GrantType` | `CHAR(2)` | Grant Type |
| `GlobalCurrency` | `CUKY(5)` | Global Currency |
| `CostShrngContrbnAmtInGlobCrcy` | `CURR(23)` |  |
| `SpnsrContrbnAmtInGlobCrcy` | `CURR(23)` |  |
| `ExcessCostShrngContrbnAmt` | `CURR(23)` | Excess Cost Sharing Contribution Amount in Global Currency |
