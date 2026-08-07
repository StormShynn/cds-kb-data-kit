---
name: C_PUBSECGTEEMGRANTKPIQRY
description: "Grant Overview KPI - Query"
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGTEEMGRANTKPIQRY')/$value
semantic_en: "Grant Overview KPI - Query"
tags:
  - PSM
  - component:PSM
  - consumption-view
  - metadata-only
---
# C_PUBSECGTEEMGRANTKPIQRY

**Grant Overview KPI - Query**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGTEEMGRANTKPIQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `NumberOfGteeMMasterDataRecords` |  | |  |  | `INT1(3)` |  |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `PubSecRevnActlAmtInGlobalCrcy` |  | |  |  | `CURR(23)` |  |
| `BdgtAvailableAmtInGlobalCrcy` |  | |  |  | `CURR(24)` |  |
| `NotPaidRevenueAmtInGCrcy` |  | |  |  | `CURR(23)` |  |
