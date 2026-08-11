---
name: I_WASTESTREAMRGTYCODECONFIGN
description: "Waste Stream Regulatory Code Confign"
app_component: EHS-SUS-WA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTESTREAMRGTYCODECONFIGN')/$value
semantic_en: "Waste Stream Regulatory Code Confign"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-WA
  - EHS-SUS
  - EHS-SUS-WA
  - interface-view
  - metadata-only
---
# I_WASTESTREAMRGTYCODECONFIGN

**Waste Stream Regulatory Code Confign**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-WA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTESTREAMRGTYCODECONFIGN')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WasteStreamRgtyCode` |  | |  |  | `CHAR(4)` | Waste Stream Regulatory Code |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `WasteStreamRgtyCodeText` |  | |  |  | `CHAR(60)` | Description (Short) |
| `CountryName` |  | |  |  | `CHAR(50)` | Country/Region Name |
