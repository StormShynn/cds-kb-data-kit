---
name: I_GRANTSPONSOREDPROGCUBE
description: Grant and Sponsored Program - Cube
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTSPONSOREDPROGCUBE')/$value
semantic_en: Grant and Sponsored Program - Cube
tags:
  - PSM
  - bo:purchaseorder
  - component:PSM-GM-GTE-MD
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-MD
  - metadata-only
---
# I_GRANTSPONSOREDPROGCUBE

**Grant and Sponsored Program - Cube**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTSPONSOREDPROGCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `SponsoredProgram` |  | |  |  | `CHAR(20)` | Sponsored Program |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `GrantCurrency` |  | |  |  | `CUKY(5)` | Grant currency |
| `GrantTotalAmountInGrantCrcy` |  | |  |  | `CURR(13)` | Total Grant Value in Sponsor Currency |
| `NumberOfGteeMMasterDataRecords` |  | |  |  | `INT1(3)` |  |
| `GrantIsNotRelevantGrant` |  | |  |  | `CHAR(1)` | Identify the Not Relevant Grant |
| `GrantAuthznGrp` |  | |  |  | `CHAR(10)` | Grants Management: Authorization Groups |
| `GrantLifecycleStatus` |  | |  |  | `CHAR(5)` | Lifecycle Status |
