---
name: I_GRANTOVERHEADCOSTLINKCUBE
description: Grant Overhead Cost Link - Cube
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTOVERHEADCOSTLINKCUBE')/$value
semantic_en: Grant Overhead Cost Link - Cube
tags:
  - PSM
  - bo:costcenter
  - component:PSM-GM-GTE-MD
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-MD
  - metadata-only
---
# I_GRANTOVERHEADCOSTLINKCUBE

**Grant Overhead Cost Link - Cube**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTOVERHEADCOSTLINKCUBE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `GrantID` | `CHAR(20)` | Grant |
| `SponsoredProgram` | `CHAR(20)` | Sponsored Program |
| `SponsoredClass` | `CHAR(20)` | Sponsored Class |
| `ValidityStartDate` | `DATS(8)` | Valid-from Date |
| `GranteeMgmtSponsor` | `CHAR(10)` | Grant Sponsor |
| `NumberOfGteeMMasterDataRecords` | `INT1(3)` |  |
| `AvgGteeMIndirectCostRateInPct` | `DEC(6)` | Indirect Overhead Rate |
| `GrantIsNotRelevantGrant` | `CHAR(1)` | Identify the Not Relevant Grant |
| `GrantAuthznGrp` | `CHAR(10)` | Grants Management: Authorization Groups |
| `GrantLifecycleStatus` | `CHAR(5)` | Lifecycle Status |
