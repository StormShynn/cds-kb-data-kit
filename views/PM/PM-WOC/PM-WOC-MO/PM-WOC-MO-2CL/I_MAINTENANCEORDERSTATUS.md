---
name: I_MAINTENANCEORDERSTATUS
description: Maintenance Order Status
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEORDERSTATUS')/$value
semantic_en: Maintenance Order Status
tags:
  - PM
  - component:PM-WOC-MO-2CL
  - interface-view
  - lob:plant maintenance
  - order
  - PM-WOC
  - PM-WOC-MO
  - PM-WOC-MO-2CL
  - metadata-only
---
# I_MAINTENANCEORDERSTATUS

**Maintenance Order Status**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEORDERSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceOrder` |  | |  |  | `CHAR(12)` | Order Number |
| `MaintenanceOrderInternalID` |  | |  |  | `CHAR(22)` | Object Number |
| `MaintenanceOrderIsCreated` |  | |  |  | `CHAR(1)` | Checkbox |
| `MaintenanceOrderIsReleased` |  | |  |  | `CHAR(1)` | Checkbox |
| `MaintOrderMainWorkIsCompleted` |  | |  |  | `CHAR(1)` | Checkbox |
| `MaintOrdIsTechlyCmpltd` |  | |  |  | `CHAR(1)` | Checkbox |
| `MaintOrderIsBusinessCompleted` |  | |  |  | `CHAR(1)` | Checkbox |
