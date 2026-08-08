---
name: I_TRANSPORDEVENTSTATUSTEXT
description: "Transportation Order Event Status - Text"
app_component: TM-FRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDEVENTSTATUSTEXT')/$value
semantic_en: "Transportation Order Event Status - Text"
tags:
  - TM
  - bo:purchaseorder
  - component:TM-FRM-2CL
  - interface-view
  - order
  - TM-FRM
  - TM-FRM-2CL
  - metadata-only
---
# I_TRANSPORDEVENTSTATUSTEXT

**Transportation Order Event Status - Text**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDEVENTSTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdEventStatus` |  | |  |  | `CHAR(1)` | Event Status |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `TranspOrdEventStatusDesc` |  | |  |  | `CHAR(60)` | Transportation Order Event Status Description |
