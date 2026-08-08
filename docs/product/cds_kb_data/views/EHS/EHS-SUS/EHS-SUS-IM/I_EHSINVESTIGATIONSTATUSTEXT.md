---
name: I_EHSINVESTIGATIONSTATUSTEXT
description: "Investigation Status - Text"
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSINVESTIGATIONSTATUSTEXT')/$value
semantic_en: "Investigation Status - Text"
tags:
  - EHS
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
  - metadata-only
---
# I_EHSINVESTIGATIONSTATUSTEXT

**Investigation Status - Text**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSINVESTIGATIONSTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSInvestigationStatus` |  | |  |  | `CHAR(2)` | Investigation Status |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `EHSInvestigationStatusText` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
