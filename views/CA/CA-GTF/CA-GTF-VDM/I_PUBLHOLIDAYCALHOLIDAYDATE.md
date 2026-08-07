---
name: I_PUBLHOLIDAYCALHOLIDAYDATE
description: "Date For Public Holiday In Holiday Calendar"
app_component: CA-GTF-VDM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLHOLIDAYCALHOLIDAYDATE')/$value
semantic_en: "Date For Public Holiday In Holiday Calendar"
tags:
  - CA
  - CA-GTF
  - CA-GTF-VDM
  - component:CA-GTF-VDM
  - interface-view
  - lob:cross_application components
  - metadata-only
---
# I_PUBLHOLIDAYCALHOLIDAYDATE

**Date For Public Holiday In Holiday Calendar**

| Property | Value |
|---|---|
| App Component | `CA-GTF-VDM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLHOLIDAYCALHOLIDAYDATE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PublicHolidayCalendar` |  | |  |  | `CHAR(2)` | Public Holiday Calendar |
| `PublicHolidayDate` |  | |  |  | `DATS(8)` | Date |
| `PublicHolidayCode` |  | |  |  | `CHAR(3)` | Public holiday key |
| `PublicHolidayIsGuaranteed` |  | |  |  | `CHAR(1)` | Indicator:PublicHolidayIsGuaranteed |
