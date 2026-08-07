---
name: I_SITEOPENINGHOURS
description: Site Opening Hours
app_component: LO-RFM-MD-SIT-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEOPENINGHOURS')/$value
semantic_en: Site Opening Hours
tags:
  - LO
  - bo:plant
  - component:LO-RFM-MD-SIT-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-SIT
  - LO-RFM-MD-SIT-2CL
  - lob:logistics general
  - metadata-only
---
# I_SITEOPENINGHOURS

**Site Opening Hours**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-SIT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEOPENINGHOURS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SiteCustomer` |  | |  |  | `CHAR(10)` | Customer Number |
| `SiteOpeningDate` |  | |  |  | `DATS(8)` | Opening Date |
| `SiteClosingDate` |  | |  |  | `DATS(8)` | Closing Date |
| `MondayMorningOpeningTime` |  | |  |  | `TIMS(6)` | Goods receipt times: Monday morning from ... |
| `MondayMorningClosingTime` |  | |  |  | `TIMS(6)` | Goods receiving hours: Monday morning until ... |
| `MondayAfternoonOpeningTime` |  | |  |  | `TIMS(6)` | Goods receiving hours: Monday afternoon from ... |
| `MondayAfternoonClosingTime` |  | |  |  | `TIMS(6)` | Goods receiving hours: Monday afternoon until ... |
| `TuesdayMorningOpeningTime` |  | |  |  | `TIMS(6)` | Goods receiving hours: Tuesday morning from... |
| `TuesdayMorningClosingTime` |  | |  |  | `TIMS(6)` | Goods receipt times: Tuesday morning until ... |
| `TuesdayAfternoonOpeningTime` |  | |  |  | `TIMS(6)` | Goods receiving hours: Tuesday afternoon from ... |
| `TuesdayAfternoonClosingTime` |  | |  |  | `TIMS(6)` | Goods receiving hours: Tuesday afternoon until ... |
| `WednesdayMorningOpeningTime` |  | |  |  | `TIMS(6)` | Goods receiving hours: Wednesday morning from ... |
| `WednesdayMorningClosingTime` |  | |  |  | `TIMS(6)` | Goods receiving hours: Wednesday morning until ... |
| `WednesdayAfternoonOpeningTime` |  | |  |  | `TIMS(6)` | Goods receiving hours: Wednesday afternoon from ... |
| `WednesdayAfternoonClosingTime` |  | |  |  | `TIMS(6)` | Goods receiving hours: Wednesday afternoon until ... |
| `ThursdayMorningOpeningTime` |  | |  |  | `TIMS(6)` | Goods receiving hours: Thursday morning from ... |
| `ThursdayMorningClosingTime` |  | |  |  | `TIMS(6)` | Goods receiving hours: Thursday morning until ... |
| `ThursdayAfternoonOpeningTime` |  | |  |  | `TIMS(6)` | Goods receiving hours: Thursday afternoon from ... |
| `ThursdayAfternoonClosingTime` |  | |  |  | `TIMS(6)` | Goods receiving hours: Thursday afternoon until... |
| `FridayMorningOpeningTime` |  | |  |  | `TIMS(6)` | Goods receiving hours: Friday morning from ... |
| `FridayMorningClosingTime` |  | |  |  | `TIMS(6)` | Goods receiving hours: Friday morning until ... |
| `FridayAfternoonOpeningTime` |  | |  |  | `TIMS(6)` | Goods receiving hours: Friday afternoon from ... |
| `FridayAfternoonClosingTime` |  | |  |  | `TIMS(6)` | Goods receiving hours: Friday afternoon until ... |
| `SaturdayMorningOpeningTime` |  | |  |  | `TIMS(6)` | Goods receiving hours: Saturday morning from ... |
| `SaturdayMorningClosingTime` |  | |  |  | `TIMS(6)` | Goods receiving hours: Saturday morning until ... |
| `SaturdayAfternoonOpeningTime` |  | |  |  | `TIMS(6)` | Goods receiving hours: Saturday afternoon from ... |
| `SaturdayAfternoonClosingTime` |  | |  |  | `TIMS(6)` | Goods receiving hours: Saturday afternoon until ... |
| `SundayMorningOpeningTime` |  | |  |  | `TIMS(6)` | Goods receiving hours: Sunday morning from ... |
| `SundayMorningClosingTime` |  | |  |  | `TIMS(6)` | Goods receiving hours: Sunday morning until ... |
| `SundayAfternoonOpeningTime` |  | |  |  | `TIMS(6)` | Goods receiving hours: Sunday afternoon from ... |
| `SundayAfternoonClosingTime` |  | |  |  | `TIMS(6)` | Goods receiving hours: Sunday afternoon until ... |
| `SiteGoodsReceivingHoursCode` |  | |  |  | `CHAR(3)` | Goods receiving hours ID (default value) |
