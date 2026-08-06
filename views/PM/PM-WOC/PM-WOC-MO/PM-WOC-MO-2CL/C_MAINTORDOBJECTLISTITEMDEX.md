---
name: C_MAINTORDOBJECTLISTITEMDEX
description: Maintenance Order Object List Item DEX
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDOBJECTLISTITEMDEX')/$value
semantic_en: Maintenance Order Object List Item DEX
tags:
  - PM
  - component:PM-WOC-MO-2CL
  - consumption-view
  - lob:plant maintenance
  - order
  - PM-WOC
  - PM-WOC-MO
  - PM-WOC-MO-2CL
  - metadata-only
---
# C_MAINTORDOBJECTLISTITEMDEX

**Maintenance Order Object List Item DEX**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDOBJECTLISTITEMDEX')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `MaintenanceOrderObjectList` | `INT8(19)` | Object list number |
| `MaintenanceObjectListItem` | `INT4(10)` | Object list counters |
| `MaintenanceOrder` | `CHAR(12)` | Order Number |
| `MaintenanceObjectListUsageCode` | `CHAR(1)` | Object list usage |
| `MaintenanceNotification` | `CHAR(12)` | Notification Number |
| `Equipment` | `CHAR(18)` | Equipment Number |
| `Assembly` | `CHAR(40)` | Assembly |
| `Material` | `CHAR(40)` | Material Number |
| `SerialNumber` | `CHAR(18)` | Serial Number |
| `UniqueItemIdentifier` | `CHAR(72)` | Unique Item Identifier |
| `CreationDate` | `DATS(8)` | Date |
| `MaintObjectListItemSequence` | `CHAR(20)` | Object list sort field |
| `MaintObjListEntryIsProcessed` | `CHAR(1)` | Checkbox |
