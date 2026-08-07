---
name: I_TRANSPORDEVENTCODE
description: Transp Order Event Code
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDEVENTCODE')/$value
semantic_en: Transp Order Event Code
tags:
  - TM
  - bo:purchaseorder
  - component:TM-2CL
  - interface-view
  - order
  - TM-2CL
  - metadata-only
---
# I_TRANSPORDEVENTCODE

**Transp Order Event Code**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDEVENTCODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdEventCode` |  | |  |  | `CHAR(20)` | Event Occurring for a Transportation Activity |
| `TransportationActivity` |  | |  |  | `CHAR(2)` | Transportation Activity |
| `TranspOrdStopCategory` |  | |  |  | `CHAR(1)` | Stop Category |
