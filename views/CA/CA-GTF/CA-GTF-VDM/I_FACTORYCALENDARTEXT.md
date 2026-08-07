---
name: I_FACTORYCALENDARTEXT
description: "This CDS view provides the prerequisites for answering the following business questions: What are the names of factory calendars in different languages?"
app_component: CA-GTF-VDM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FACTORYCALENDARTEXT')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What are the names of factory calendars in different languages?"
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
# I_FACTORYCALENDARTEXT

**This CDS view provides the prerequisites for answering the following business questions: What are the names of factory calendars in different languages?**

| Property | Value |
|---|---|
| App Component | `CA-GTF-VDM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FACTORYCALENDARTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FactoryCalendar` |  | |  |  | `CHAR(2)` | Factory Calendar ID |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `FactoryCalendarName` |  | |  |  | `CHAR(60)` | Factory Calendar Text |
