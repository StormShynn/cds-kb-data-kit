---
name: I_MEASUREMENTPOINT
description: Measurement Point
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MEASUREMENTPOINT')/$value
semantic_en: Measurement Point
tags:
  - IS
  - bo:purchaseorder
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - metadata-only
---
# I_MEASUREMENTPOINT

**Measurement Point**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MEASUREMENTPOINT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MeasurementPoint` |  | |  |  | `CHAR(20)` | Measurement point number |
| `MeasurementPtName` |  | |  |  | `CHAR(35)` | Measurement point description |
| `MeasurementPtType` |  | |  |  | `CHAR(2)` | Measurement point type code |
| `MeasurementPtMeterClass` |  | |  |  | `CHAR(1)` | Meter class |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` |  | |  |  | `CHAR(2)` | Primary Geographical Location |
| `SecondaryGeogrlLocation` |  | |  |  | `CHAR(3)` | Secondary geographic location |
| `LatitudeUnit` |  | |  |  | `UNIT(3)` | Unit of Measure |
| `MeasurementPtLatitude` |  | |  |  | `DEC(8)` | Latitude number |
| `MeasurementPtLatitudeDrctn` |  | |  |  | `CHAR(1)` | Latitude direction code |
| `LongitudeUnit` |  | |  |  | `UNIT(3)` | Unit of Measure |
| `MeasurementPtLongitude` |  | |  |  | `DEC(9)` | Longitude |
| `MeasurementPtLongitudeDrctn` |  | |  |  | `CHAR(1)` | Longitude Direction Code |
| `MeasurementPtHier` |  | |  |  | `CHAR(15)` | Measurement point hierarchy group |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Created On Timestamp |
