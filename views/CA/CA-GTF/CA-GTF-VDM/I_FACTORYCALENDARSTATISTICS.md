---
name: I_FACTORYCALENDARSTATISTICS
description: Statistics of Factory Calendar
app_component: CA-GTF-VDM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FACTORYCALENDARSTATISTICS')/$value
semantic_en: Statistics of Factory Calendar
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
# I_FACTORYCALENDARSTATISTICS

**Statistics of Factory Calendar**

| Property | Value |
|---|---|
| App Component | `CA-GTF-VDM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FACTORYCALENDARSTATISTICS')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `FactoryCalendarStatisticsCode` | `CHAR(1)` | Calendar: Termination flag |
| `LastChangeDate` | `DATS(8)` | Date |
| `LastChangeTime` | `TIMS(6)` | Calendar: Creation or change time |
| `NumberOfCalendars` | `NUMC(4)` | Year stored |
| `CalendarsMemorySizeInBytes` | `NUMC(8)` | Memory requirement (Bytes) |
