---
name: I_TRANSPORDSTOPROLETEXT
description: "Transportation Order Stop Role - Text"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDSTOPROLETEXT')/$value
semantic_en: "Transportation Order Stop Role - Text"
tags:
  - TM
  - bo:purchaseorder
  - component:TM-2CL
  - interface-view
  - order
  - TM-2CL
  - metadata-only
---
# I_TRANSPORDSTOPROLETEXT

**Transportation Order Stop Role - Text**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDSTOPROLETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdStopRole` |  | |  |  | `CHAR(2)` | Role of the Stop |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `TranspOrdStopRoleDesc` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
