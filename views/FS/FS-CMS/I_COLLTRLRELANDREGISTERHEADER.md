---
name: I_COLLTRLRELANDREGISTERHEADER
description: Land Reg Header Dets for Collateral
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLRELANDREGISTERHEADER')/$value
semantic_en: Land Reg Header Dets for Collateral
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - metadata-only
---
# I_COLLTRLRELANDREGISTERHEADER

**Land Reg Header Dets for Collateral**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLRELANDREGISTERHEADER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ColltrlLandRegisterHeaderUUID` |  | |  |  | `RAW(16)` | GUID for Table CMS_LR_DE_A |
| `ColltrlLandRegDistrictCourt` |  | |  |  | `CHAR(25)` | District Court |
| `ColltrlLandRegDistrictSubCourt` |  | |  |  | `CHAR(25)` | Land Register District |
| `ColltrlLandRegVolumeNumber` |  | |  |  | `CHAR(15)` | Volume Number |
| `ColltrlLandRegisterPageNumber` |  | |  |  | `CHAR(15)` | Page Number |
| `CollateralLandRegisterType` |  | |  |  | `CHAR(6)` | Register Type |
| `ColltrlLandRegExtRefNumber` |  | |  |  | `CHAR(32)` | Reference of Old Land Register, in case data was migrated |
