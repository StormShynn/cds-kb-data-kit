---
name: I_CITYCODETEXT
description: City Code Text
app_component: AP-MD-BP
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITYCODETEXT')/$value
semantic_en: City Code Text
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - component:AP-MD-BP
  - interface-view
  - metadata-only
---
# I_CITYCODETEXT

**City Code Text**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITYCODETEXT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Region` | `CHAR(3)` | Region (State, Province, County) |
| `Country` | `CHAR(3)` | Country/Region Key |
| `CityCode` | `CHAR(4)` | City Code |
| `Language` | `LANG(1)` | Language Key |
| `CityCodeName` | `CHAR(20)` | Description |
