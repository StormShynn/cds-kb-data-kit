---
name: I_FIXEDASSETSTDVH
description: "Fixed Asset"
app_component: FI-FIO-AA-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FIXEDASSETSTDVH')/$value
semantic_en: "Fixed Asset"
tags:
  - FI
  - bo:asset
  - component:FI-FIO-AA-ANA-2CL
  - FI-FIO
  - FI-FIO-AA
  - FI-FIO-AA-ANA
  - FI-FIO-AA-ANA-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_FIXEDASSETSTDVH

**Fixed Asset**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AA-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FIXEDASSETSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `MasterFixedAsset` |  | |  |  | `CHAR(12)` | Main Asset Number |
| `FixedAsset` |  | |  |  | `CHAR(4)` | Asset Subnumber |
| `FixedAssetDescription` |  | |  |  | `CHAR(50)` | Asset Description |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `AssetAuthorizationContext` |  | |  |  | `CHAR(10)` | Asset Authorization Context |
