---
name: C_PUBSECGTEEMGRANTQRY1
description: "Grant - Query"
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGTEEMGRANTQRY1')/$value
semantic_en: "Grant - Query"
tags:
  - PSM
  - component:PSM
  - consumption-view
  - metadata-only
---
# C_PUBSECGTEEMGRANTQRY1

**Grant - Query**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGTEEMGRANTQRY1')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `NavigationGrantIdentifier` |  | |  |  | `CHAR(20)` | Grant |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-from Date |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid-to Date |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `GrantType` |  | |  |  | `CHAR(2)` | Grant Type |
| `GrantLifecycleStatus` |  | |  |  | `CHAR(5)` | Lifecycle Status |
| `GrantStatus` |  | |  |  | `CHAR(5)` | Grant Status |
| `BusPartEmplrIndstryCode` |  | |  |  | `CHAR(10)` | Industry |
| `PendingDaysToValdtyEnd` |  | |  |  | `INT4(10)` |  |
| `GranteeMgmtWorkflowStatus` |  | |  |  | `CHAR(1)` | Workflow status |
| `GrantBlockedByWorkflow` |  | |  |  | `CHAR(1)` | GM Blocks grant editing pending approval |
| `NumberOfGteeMMasterDataRecords` |  | |  |  | `INT1(3)` |  |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
