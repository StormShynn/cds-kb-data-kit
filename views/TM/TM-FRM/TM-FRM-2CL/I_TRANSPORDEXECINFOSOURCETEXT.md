---
name: I_TRANSPORDEXECINFOSOURCETEXT
description: Transportation Order Execution Info Source - Text
app_component: TM-FRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDEXECINFOSOURCETEXT')/$value
semantic_en: Transportation Order Execution Info Source - Text
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
# I_TRANSPORDEXECINFOSOURCETEXT

**Transportation Order Execution Info Source - Text**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDEXECINFOSOURCETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdExecInfoSource` |  | |  |  | `CHAR(1)` | Source of Execution Information |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `ExecInfoSourceDesc` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
