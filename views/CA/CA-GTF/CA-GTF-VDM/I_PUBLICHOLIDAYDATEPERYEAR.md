---
name: I_PUBLICHOLIDAYDATEPERYEAR
description: Public Holiday Date Per Year
app_component: CA-GTF-VDM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLICHOLIDAYDATEPERYEAR')/$value
semantic_en: Public Holiday Date Per Year
tags:
  - CA
  - CA-GTF
  - CA-GTF-VDM
  - component:CA-GTF-VDM
  - interface-view
  - lob:cross_application components
  - metadata-only
---
# I_PUBLICHOLIDAYDATEPERYEAR

**Public Holiday Date Per Year**

| Property | Value |
|---|---|
| App Component | `CA-GTF-VDM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLICHOLIDAYDATEPERYEAR')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PublicHolidayCode` |  | |  |  | `CHAR(3)` | Public holiday key |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Year stored |
| `PublicHolidayMonth` |  | |  |  | `NUMC(2)` | Month for holiday calculation |
| `PublicHolidayDayOfMonth` |  | |  |  | `NUMC(2)` | Day of month for public holiday calculation |
