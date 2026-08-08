---
name: I_SECONDARYGEOGRLLOCATIONT
description: "Secondary Geographical Location Name - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECONDARYGEOGRLLOCATIONT')/$value
semantic_en: "Secondary Geographical Location Name - Text"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - metadata-only
---
# I_SECONDARYGEOGRLLOCATIONT

**Secondary Geographical Location Name - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECONDARYGEOGRLLOCATIONT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` |  | |  |  | `CHAR(2)` | Primary Geographical Location |
| `SecondaryGeogrlLocation` |  | |  |  | `CHAR(3)` | Secondary geographic location |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `SecondaryGeogrlLocationName` |  | |  |  | `CHAR(30)` | Secondary Geographical Location Description |
