---
name: I_COLLTRLRELANDREGPROPERTYLIST
description: Land Reg Property List for Collateral
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLRELANDREGPROPERTYLIST')/$value
semantic_en: Land Reg Property List for Collateral
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - metadata-only
---
# I_COLLTRLRELANDREGPROPERTYLIST

**Land Reg Property List for Collateral**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLRELANDREGPROPERTYLIST')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ColltrlLandRegPropertyListUUID` |  | |  |  | `RAW(16)` | GUID for Table CMS_LR_DE_B |
| `ColltrlLandRegisterHeaderUUID` |  | |  |  | `RAW(16)` | GUID for Table CMS_LR_DE_A |
| `ColltrlLandRegPrptyListNumber` |  | |  |  | `CHAR(4)` | Serial number of the Property List Number |
| `ColltrlLandRegPrptyListLoc` |  | |  |  | `CHAR(60)` | Location / Parish |
| `CollateralLandRegisterAreaSize` |  | |  |  | `QUAN(13)` | Area |
| `ColltrlLandRegUnitOfMeasure` |  | |  |  | `UNIT(3)` | Unit of Measure |
| `CollateralLandRegisterPlot` |  | |  |  | `CHAR(10)` | Flur |
| `ColltrlLandRegisterLandParcel` |  | |  |  | `CHAR(60)` | Parcel of the land. Flurstueck in German |
