---
name: I_GRANTSTATUS
description: Grant status
app_component: PSM-GM-GTE-IS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTSTATUS')/$value
semantic_en: Grant status
tags:
  - PSM
  - component:PSM-GM-GTE-IS
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-IS
  - metadata-only
---
# I_GRANTSTATUS

**Grant status**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTSTATUS')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `SystemStatus` | `CHAR(5)` | System status |
| `StatusIsHidden` | `CHAR(1)` | 'Do not display status' flag |
