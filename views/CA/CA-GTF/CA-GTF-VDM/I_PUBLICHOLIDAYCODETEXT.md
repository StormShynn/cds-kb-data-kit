---
name: I_PUBLICHOLIDAYCODETEXT
description: "Public Holiday Code - Text"
app_component: CA-GTF-VDM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLICHOLIDAYCODETEXT')/$value
semantic_en: "Public Holiday Code - Text"
tags:
  - CA
  - CA-GTF
  - CA-GTF-VDM
  - component:CA-GTF-VDM
  - interface-view
  - lob:cross_application components
  - metadata-only
---
# I_PUBLICHOLIDAYCODETEXT

**Public Holiday Code - Text**

| Property | Value |
|---|---|
| App Component | `CA-GTF-VDM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBLICHOLIDAYCODETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PublicHolidayCode` |  | |  |  | `CHAR(3)` | Public holiday key |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `PublicHolidayName` |  | |  |  | `CHAR(30)` | Long text |
| `PublicHolidayShortName` |  | |  |  | `CHAR(10)` | Public holidays, short text |
