---
name: I_LIQUIDATIONPROCESS
description: Liquidation Process Details
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONPROCESS')/$value
semantic_en: Liquidation Process Details
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - metadata-only
---
# I_LIQUIDATIONPROCESS

**Liquidation Process Details**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONPROCESS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LiquidationProcessUUID` |  | |  |  | `RAW(16)` | GUID for enforcement process details |
| `CollateralLiquidationUUID` |  | |  |  | `RAW(16)` | Liquidation GUID |
| `LiquidationProcessDate` |  | |  |  | `DATS(8)` | Process Date |
| `LiquidationProcessType` |  | |  |  | `CHAR(6)` | Enforcement Process Date Type |
| `LiquidationProcessMaxBidAmount` |  | |  |  | `CURR(17)` | Maximum Bid Amount for a Process Step |
| `LiquidationProcessMaxBidCrcy` |  | |  |  | `CUKY(5)` | Currency: Maximum Bid |
| `LqdtnProcessForclrSaleResult` |  | |  |  | `CHAR(6)` | Result of a Foreclosure Sale |
| `LiquidationProcessEnfrcmntAmt` |  | |  |  | `CURR(17)` | Joining Amount |
| `LiquidationProcessEnfrcmntCrcy` |  | |  |  | `CUKY(5)` | Currency: Joining amount |
| `LiquidationObjectRefSystem` |  | |  |  | `CHAR(6)` | Object System Reference ID for Liquidation |
