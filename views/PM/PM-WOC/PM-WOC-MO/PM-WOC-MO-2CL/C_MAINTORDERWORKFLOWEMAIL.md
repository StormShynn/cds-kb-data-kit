---
name: C_MAINTORDERWORKFLOWEMAIL
description: Maintenance Order Details for WF
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDERWORKFLOWEMAIL')/$value
semantic_en: Maintenance Order Details for WF
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
# C_MAINTORDERWORKFLOWEMAIL

**Maintenance Order Details for WF**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDERWORKFLOWEMAIL')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `WorkflowTaskInternalID` | `NUMC(12)` | Work item ID |
| `MaintenanceOrder` | `CHAR(12)` | Order Number |
| `MaintenanceOrderDesc` | `CHAR(40)` | Description |
| `MaintPriority` | `CHAR(1)` | Priority |
| `MaintenancePlanningPlant` | `CHAR(4)` | Maintenance Planning Plant |
| `MaintenancePlannerGroup` | `CHAR(3)` | Planner Group for Customer Service and Plant Maintenance |
| `MaintenanceOrderType` | `CHAR(4)` | Order Type |
| `MaintOrdBasicStartDate` | `DATS(8)` | Basic Start Date |
| `MaintOrdBasicEndDate` | `DATS(8)` | Basic Finish Date |
| `TechnicalObject` | `CHAR(40)` | Technical Object |
| `TechObjIsEquipOrFuncnlLocDesc` | `CHAR(40)` | Description of Technical Object Type |
| `TechnicalObjectDescription` | `CHAR(40)` | Technical Object Description |
