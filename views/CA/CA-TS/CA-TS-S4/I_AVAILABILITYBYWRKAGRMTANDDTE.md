---
name: I_AVAILABILITYBYWRKAGRMTANDDTE
description: This view provides the prerequisites for answering the following business questions: What is the total planned hours of a work agreement each day?
app_component: CA-TS-S4
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AVAILABILITYBYWRKAGRMTANDDTE')/$value
semantic_en: This view provides the prerequisites for answering the following business questions: What is the total planned hours of a work agreement each day?
tags:
  - CA
  - bo:plant
  - CA-TS
  - CA-TS-S4
  - component:CA-TS-S4
  - interface-view
  - lob:cross_application components
  - plan
  - metadata-only
---
# I_AVAILABILITYBYWRKAGRMTANDDTE

**This view provides the prerequisites for answering the following business questions: What is the total planned hours of a work agreement each day?**

| Property | Value |
|---|---|
| App Component | `CA-TS-S4` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AVAILABILITYBYWRKAGRMTANDDTE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PersonWorkAgreement` |  | |  |  | `NUMC(8)` | Personnel Number |
| `CalendarDate` |  | |  |  | `DATS(8)` | Calendar Date |
| `AvailabilityInHours` |  | |  |  | `DEC(14)` |  |
