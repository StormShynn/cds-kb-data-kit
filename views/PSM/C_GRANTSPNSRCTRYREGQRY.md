---
name: C_GRANTSPNSRCTRYREGQRY
description: Grant Sponsor Country Region - Query
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GRANTSPNSRCTRYREGQRY')/$value
semantic_en: Grant Sponsor Country Region - Query
tags:
  - PSM
  - bo:purchaseorder
  - component:PSM
  - consumption-view
  - metadata-only
---
# C_GRANTSPNSRCTRYREGQRY

**Grant Sponsor Country Region - Query**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GRANTSPNSRCTRYREGQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `ActualPlanCode` |  | |  |  | `CHAR(1)` | Actual Plan Code |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `GrantLifecycleStatus` |  | |  |  | `CHAR(5)` | Lifecycle Status |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` |  |
| `CountryRegion` |  | |  |  | `CHAR(6)` |  |
