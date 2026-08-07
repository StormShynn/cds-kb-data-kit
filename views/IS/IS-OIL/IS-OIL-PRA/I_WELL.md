---
name: I_WELL
description: Well
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WELL')/$value
semantic_en: Well
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - metadata-only
---
# I_WELL

**Well**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WELL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Well` |  | |  |  | `CHAR(15)` | Well ID number |
| `WellName` |  | |  |  | `CHAR(35)` | Well Description |
| `APIWellNumber` |  | |  |  | `CHAR(12)` | Roy 2.0 CO -  Well API Number |
| `LatitudeUnit` |  | |  |  | `UNIT(3)` | Unit of Measure |
| `LongitudeUnit` |  | |  |  | `UNIT(3)` | Unit of Measure |
| `WellLatitude` |  | |  |  | `DEC(8)` | Surface Latitude |
| `WellLatitudeDirection` |  | |  |  | `CHAR(1)` | Surface latitude Direction |
| `WellLongitude` |  | |  |  | `DEC(9)` | Surface longitude |
| `WellLongitudeDirection` |  | |  |  | `CHAR(1)` | Surface longitude direction code |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Created On Timestamp |
