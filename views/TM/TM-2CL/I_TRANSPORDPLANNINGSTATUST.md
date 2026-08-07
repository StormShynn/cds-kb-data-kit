---
name: I_TRANSPORDPLANNINGSTATUST
description: "Transportation Order Planning Status - Text"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDPLANNINGSTATUST')/$value
semantic_en: "Transportation Order Planning Status - Text"
tags:
  - TM
  - bo:purchaseorder
  - component:TM-2CL
  - interface-view
  - order
  - plan
  - TM-2CL
  - metadata-only
---
# I_TRANSPORDPLANNINGSTATUST

**Transportation Order Planning Status - Text**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDPLANNINGSTATUST')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdPlanningStatus` |  | |  |  | `CHAR(2)` | Planning Status |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `TranspOrdPlanningStatusDesc` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
