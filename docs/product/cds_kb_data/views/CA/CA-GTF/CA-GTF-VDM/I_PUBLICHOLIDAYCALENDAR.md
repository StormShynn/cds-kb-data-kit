---
name: I_PUBLICHOLIDAYCALENDAR
description: "Public Holiday In Factory Calendar"
app_component: CA-GTF-VDM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLICHOLIDAYCALENDAR')/$value
semantic_en: "Public Holiday In Factory Calendar"
tags:
  - CA
  - bo:plant
  - CA-GTF
  - CA-GTF-VDM
  - component:CA-GTF-VDM
  - interface-view
  - lob:cross_application components
  - metadata-only
---
# I_PUBLICHOLIDAYCALENDAR

**Public Holiday In Factory Calendar**

| Property | Value |
|---|---|
| App Component | `CA-GTF-VDM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLICHOLIDAYCALENDAR')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PublicHolidayCalendar` |  | |  |  | `CHAR(2)` | Public Holiday Calendar |
| `ValidityStartYear` |  | |  |  | `NUMC(4)` | Year from which data is stored |
| `ValidityEndYear` |  | |  |  | `NUMC(4)` | Year until which data is saved |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Date |
| `LastChangeTime` |  | |  |  | `TIMS(6)` | Calendar: Creation or change time |
