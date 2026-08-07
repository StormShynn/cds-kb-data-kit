---
name: I_PUBLICHOLIDAYCODE
description: "Public Holiday Code"
app_component: CA-GTF-VDM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLICHOLIDAYCODE')/$value
semantic_en: "Public Holiday Code"
tags:
  - CA
  - CA-GTF
  - CA-GTF-VDM
  - component:CA-GTF-VDM
  - interface-view
  - lob:cross_application components
  - metadata-only
---
# I_PUBLICHOLIDAYCODE

**Public Holiday Code**

| Property | Value |
|---|---|
| App Component | `CA-GTF-VDM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLICHOLIDAYCODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PublicHolidayCode` |  | |  |  | `CHAR(3)` | Public holiday key |
| `PublicHolidayRule` |  | |  |  | `CHAR(1)` | Holiday rule |
| `PublicHolidayMonth` |  | |  |  | `NUMC(2)` | Month for holiday calculation |
| `PublicHolidayDayOfMonth` |  | |  |  | `NUMC(2)` | Day of month for public holiday calculation |
| `PublicHolidayWeekday` |  | |  |  | `NUMC(1)` | Code:Day for public holiday calculation |
| `DistanceFromEasterInDays` |  | |  |  | `DEC(3)` | Distance of public holiday from Easter |
| `ReligiousDenomination` |  | |  |  | `CHAR(2)` | Calendar religion key |
| `PublicHolidayClass` |  | |  |  | `CHAR(1)` | Holiday class |
| `PublicHolidayGuaranteeRule` |  | |  |  | `CHAR(1)` | Public holiday guaranteed flag |
| `PublicHolidaySortValue` |  | |  |  | `CHAR(3)` | Sort field for public holidays |
