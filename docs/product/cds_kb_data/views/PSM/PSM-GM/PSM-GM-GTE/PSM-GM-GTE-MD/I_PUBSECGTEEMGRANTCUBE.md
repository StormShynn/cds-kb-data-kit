---
name: I_PUBSECGTEEMGRANTCUBE
description: "Grant - Cube"
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECGTEEMGRANTCUBE')/$value
semantic_en: "Grant - Cube"
tags:
  - PSM
  - component:PSM-GM-GTE-MD
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-MD
  - metadata-only
---
# I_PUBSECGTEEMGRANTCUBE

**Grant - Cube**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECGTEEMGRANTCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `NavigationGrantIdentifier` |  | |  |  | `CHAR(20)` | Grant |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-from Date |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid-to Date |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `GrantAuthznGrp` |  | |  |  | `CHAR(10)` | Grants Management: Authorization Groups |
| `GrantLfcycStatusForAuthzn` |  | |  |  | `CHAR(5)` | GM Lifecycle Status for Auth Grp |
| `GrantType` |  | |  |  | `CHAR(2)` | Grant Type |
| `GrantLifecycleStatus` |  | |  |  | `CHAR(5)` | Lifecycle Status |
| `GrantStatus` |  | |  |  | `CHAR(5)` | Grant Status |
| `GranteeMgmtWorkflowStatus` |  | |  |  | `CHAR(1)` | Workflow status |
| `GrantBlockedByWorkflow` |  | |  |  | `CHAR(1)` | GM Blocks grant editing pending approval |
| `BusPartEmplrIndstryCode` |  | |  |  | `CHAR(10)` | Industry |
| `GrantIsNotRelevantGrant` |  | |  |  | `CHAR(1)` | Identify the Not Relevant Grant |
| `NumberOfGteeMMasterDataRecords` |  | |  |  | `INT1(3)` |  |
| `PendingDaysToValdtyEnd` |  | |  |  | `INT4(10)` |  |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
