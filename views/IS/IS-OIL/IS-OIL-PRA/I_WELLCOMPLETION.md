---
name: I_WELLCOMPLETION
description: "Well Completion"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WELLCOMPLETION')/$value
semantic_en: "Well Completion"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - metadata-only
---
# I_WELLCOMPLETION

**Well Completion**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WELLCOMPLETION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Well` |  | |  |  | `CHAR(15)` | Well ID number |
| `WellCompletion` |  | |  |  | `CHAR(5)` | Well Completion Number |
| `WellCompletionName` |  | |  |  | `CHAR(35)` | Well completion name |
| `APIWellCompletionNumber` |  | |  |  | `CHAR(3)` | API well completion number |
| `DevelopmentProgramNmbr` |  | |  |  | `CHAR(2)` | Development program number |
| `LatitudeUnit` |  | |  |  | `UNIT(3)` | Unit of Measure |
| `WellCompletionLatitude` |  | |  |  | `DEC(8)` | Latitude number |
| `WellCompltnLatitudeDirection` |  | |  |  | `CHAR(1)` | Latitude direction code |
| `LongitudeUnit` |  | |  |  | `UNIT(3)` | Unit of Measure |
| `WellCompletionLongitude` |  | |  |  | `DEC(9)` | Longitude |
| `WellCompltnLongitudeDirection` |  | |  |  | `CHAR(1)` | Longitude Direction Code |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` |  | |  |  | `CHAR(2)` | Primary Geographical Location |
| `SecondaryGeogrlLocation` |  | |  |  | `CHAR(3)` | Secondary geographic location |
| `OffshorePlatform` |  | |  |  | `CHAR(10)` | Platform number |
| `Reservoir` |  | |  |  | `CHAR(10)` | Reservoir ID |
| `ReservoirZone` |  | |  |  | `CHAR(10)` | Reservoir zone |
| `GeologicField` |  | |  |  | `CHAR(10)` | Field ID |
| `WellPurpose` |  | |  |  | `CHAR(1)` | Well purpose code |
| `AlternateWellCompletionKey` |  | |  |  | `CHAR(40)` | Alternate WC Key |
| `WellCompletionHier` |  | |  |  | `CHAR(15)` | Well Completion Hierarchy Group |
| `OrganizationalUnit` |  | |  |  | `CHAR(3)` | Org. Level 1 - Company |
| `OrganizationalUnit2` |  | |  |  | `CHAR(1)` | Second-highest organization level number ( Company Code) |
| `OrganizationalUnit3` |  | |  |  | `CHAR(3)` | Third-highest organization level number ( Company Code) |
| `OrganizationalUnit4` |  | |  |  | `CHAR(2)` | Fourth-highest organization level number ( Company Code) |
| `CoalBedMethaneRptgIsEnabled` |  | |  |  | `CHAR(1)` | Coal Bed Methane Indicator |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Created On Timestamp |
