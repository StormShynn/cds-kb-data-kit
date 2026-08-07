---
name: I_GRANTCOSTSHARINGLINKCUBE
description: Grant Cost Sharing Link - Cube
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTCOSTSHARINGLINKCUBE')/$value
semantic_en: Grant Cost Sharing Link - Cube
tags:
  - PSM
  - component:PSM-GM-GTE-MD
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-MD
  - metadata-only
---
# I_GRANTCOSTSHARINGLINKCUBE

**Grant Cost Sharing Link - Cube**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTCOSTSHARINGLINKCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `GteeMCostSharingSource` |  | |  |  | `CHAR(1)` | Cost Sharing Source |
| `SponsoredProgram` |  | |  |  | `CHAR(20)` | Sponsored Program |
| `SponsoredClass` |  | |  |  | `CHAR(20)` | Sponsored Class |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `AvgGteeMCostSharingRateInPct` |  | |  |  | `DEC(6)` | Cost Sharing Percentage |
| `NumberOfGteeMMasterDataRecords` |  | |  |  | `INT1(3)` |  |
| `GrantIsNotRelevantGrant` |  | |  |  | `CHAR(1)` | Identify the Not Relevant Grant |
| `GrantAuthznGrp` |  | |  |  | `CHAR(10)` | Grants Management: Authorization Groups |
| `GrantLifecycleStatus` |  | |  |  | `CHAR(5)` | Lifecycle Status |
