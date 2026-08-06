---
name: I_FACTORYCALENDARSPECIALRULE
description: Factory Calendar Special Rule
app_component: CA-GTF-VDM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FACTORYCALENDARSPECIALRULE')/$value
semantic_en: Factory Calendar Special Rule
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
# I_FACTORYCALENDARSPECIALRULE

**Factory Calendar Special Rule**

| Property | Value |
|---|---|
| App Component | `CA-GTF-VDM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FACTORYCALENDARSPECIALRULE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `FactoryCalendar` | `CHAR(2)` | Factory Calendar |
| `CalendarYear` | `NUMC(4)` | Year stored |
| `ValidityStartDate` | `DATS(8)` | Date from which special rule is valid |
| `ValidityEndDate` | `DATS(8)` | Date, until which the rule applies |
| `IsWorkingDay` | `CHAR(1)` | Indicator:IsWorkingDay |
