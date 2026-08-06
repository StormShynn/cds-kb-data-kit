---
name: C_GRANTSPONSORLOCATIONQRY
description: Grant Sponsor Location - Query
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GRANTSPONSORLOCATIONQRY')/$value
semantic_en: Grant Sponsor Location - Query
tags:
  - PSM
  - bo:purchaseorder
  - component:PSM
  - consumption-view
  - metadata-only
---
# C_GRANTSPONSORLOCATIONQRY

**Grant Sponsor Location - Query**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GRANTSPONSORLOCATIONQRY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `GrantID` | `CHAR(20)` | Grant |
| `ActualPlanCode` | `CHAR(1)` | Actual Plan Code |
| `GranteeMgmtSponsor` | `CHAR(10)` | Grant Sponsor |
| `GrantLifecycleStatus` | `CHAR(5)` | Lifecycle Status |
| `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` | `CURR(23)` |  |
| `CountryRegion` | `CHAR(6)` |  |
| `Country` | `CHAR(3)` | Country/Region Key |
| `GlobalCurrency` | `CUKY(5)` | Global Currency |
| `AmountInGlobalCurrency` | `CURR(23)` |  |
