---
name: I_VOLUMESOURCETEXT
description: "Volume Source - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VOLUMESOURCETEXT')/$value
semantic_en: "Volume Source - Text"
tags:
  - IS
  - bo:salesorder
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - metadata-only
---
# I_VOLUMESOURCETEXT

**Volume Source - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VOLUMESOURCETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `VolumeSource` |  | |  |  | `CHAR(1)` | Volume Source Code |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `VolumeSourceName` |  | |  |  | `CHAR(50)` | Volume source description |
