---
name: I_CITYCODE
description: City Code
app_component: AP-MD-BP
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITYCODE')/$value
semantic_en: City Code
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - component:AP-MD-BP
  - interface-view
  - metadata-only
---
# I_CITYCODE

**City Code**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITYCODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `CityCode` |  | |  |  | `CHAR(4)` | City Code |
