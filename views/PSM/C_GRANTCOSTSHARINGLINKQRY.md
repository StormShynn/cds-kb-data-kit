---
name: C_GRANTCOSTSHARINGLINKQRY
description: Grant Cost Sharing Link - Query
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GRANTCOSTSHARINGLINKQRY')/$value
semantic_en: Grant Cost Sharing Link - Query
tags:
  - PSM
  - component:PSM
  - consumption-view
  - metadata-only
---
# C_GRANTCOSTSHARINGLINKQRY

**Grant Cost Sharing Link - Query**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GRANTCOSTSHARINGLINKQRY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `GrantID` | `CHAR(20)` | Grant |
| `FinancialManagementArea` | `CHAR(4)` | Financial Management Area |
| `Fund` | `CHAR(10)` | Fund |
| `GteeMCostSharingSource` | `CHAR(1)` | Cost Sharing Source |
| `SponsoredProgram` | `CHAR(20)` | Sponsored Program |
| `SponsoredClass` | `CHAR(20)` | Sponsored Class |
| `GranteeMgmtSponsor` | `CHAR(10)` | Grant Sponsor |
| `NumberOfGteeMMasterDataRecords` | `INT1(3)` |  |
| `AvgGteeMCostSharingRateInPct` | `INT1(3)` |  |
