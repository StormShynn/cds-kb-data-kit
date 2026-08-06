---
name: I_FACTORYCALSPECIALRULETEXT
description: Special Rule For Factory Calendar - Text
app_component: CA-GTF-VDM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FACTORYCALSPECIALRULETEXT')/$value
semantic_en: Special Rule For Factory Calendar - Text
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
# I_FACTORYCALSPECIALRULETEXT

**Special Rule For Factory Calendar - Text**

| Property | Value |
|---|---|
| App Component | `CA-GTF-VDM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FACTORYCALSPECIALRULETEXT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Language` | `LANG(1)` | Language Key |
| `FactoryCalendar` | `CHAR(2)` | Factory Calendar |
| `CalendarYear` | `NUMC(4)` | Year stored |
| `ValidityStartDate` | `DATS(8)` | Date from which special rule is valid |
| `FactoryCalSpclRuleDescription` | `CHAR(60)` | Object Text |
