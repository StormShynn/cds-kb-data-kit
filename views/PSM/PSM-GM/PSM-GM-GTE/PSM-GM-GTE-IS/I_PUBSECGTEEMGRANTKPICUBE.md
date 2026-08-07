---
name: I_PUBSECGTEEMGRANTKPICUBE
description: "Grant Key Performance Indicators - Cube"
app_component: PSM-GM-GTE-IS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECGTEEMGRANTKPICUBE')/$value
semantic_en: "Grant Key Performance Indicators - Cube"
tags:
  - PSM
  - component:PSM-GM-GTE-IS
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-IS
  - metadata-only
---
# I_PUBSECGTEEMGRANTKPICUBE

**Grant Key Performance Indicators - Cube**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECGTEEMGRANTKPICUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `GrantLifecycleStatus` |  | |  |  | `CHAR(5)` | Lifecycle Status |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `PubSecRevnActlAmtInGlobalCrcy` |  | |  |  | `CURR(23)` |  |
| `BdgtAvailableAmtInGlobalCrcy` |  | |  |  | `CURR(24)` |  |
| `NotPaidRevenueAmtInGCrcy` |  | |  |  | `CURR(23)` |  |
| `NumberOfGteeMMasterDataRecords` |  | |  |  | `INT1(3)` |  |
| `GrantAuthznGrp` |  | |  |  | `CHAR(10)` | Grants Management: Authorization Groups |
| `GrantIsNotRelevantGrant` |  | |  |  | `CHAR(1)` | Identify the Not Relevant Grant |
| `GrantLfcycStatusForAuthzn` |  | |  |  | `CHAR(5)` | GM Lifecycle Status for Auth Grp |
| `BdgtAvailableExpnAmtInGCrcy` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `RevenueAmountInCompanyCodeCrcy` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `AvailableAmountInCCCrcy` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `NotPaidRevenueAmtInDocCrcy` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
