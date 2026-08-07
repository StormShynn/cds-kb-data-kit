---
name: C_GRANTOVERHEADCOSTLINKQ
description: "Grant Overhead Cost Link - Query"
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GRANTOVERHEADCOSTLINKQ')/$value
semantic_en: "Grant Overhead Cost Link - Query"
tags:
  - PSM
  - bo:costcenter
  - component:PSM
  - consumption-view
  - metadata-only
---
# C_GRANTOVERHEADCOSTLINKQ

**Grant Overhead Cost Link - Query**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GRANTOVERHEADCOSTLINKQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `SponsoredProgram` |  | |  |  | `CHAR(20)` | Sponsored Program |
| `SponsoredClass` |  | |  |  | `CHAR(20)` | Sponsored Class |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `NumberOfGteeMMasterDataRecords` |  | |  |  | `INT1(3)` |  |
| `AvgGteeMIndirectCostRateInPct` |  | |  |  | `INT1(3)` |  |
