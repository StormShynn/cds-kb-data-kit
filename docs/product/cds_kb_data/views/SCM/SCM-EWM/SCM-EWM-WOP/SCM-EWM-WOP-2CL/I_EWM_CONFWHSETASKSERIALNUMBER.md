---
name: I_EWM_CONFWHSETASKSERIALNUMBER
description: "Srl Number of Confirmed Warehouse Task"
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_CONFWHSETASKSERIALNUMBER')/$value
semantic_en: "Srl Number of Confirmed Warehouse Task"
tags:
  - SCM
  - bo:companycode
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
  - task
  - metadata-only
---
# I_EWM_CONFWHSETASKSERIALNUMBER

**Srl Number of Confirmed Warehouse Task**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_CONFWHSETASKSERIALNUMBER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` |  | |  |  | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `WarehouseTask` |  | |  |  | `NUMC(12)` | Warehouse Task |
| `WarehouseTaskItem` |  | |  |  | `NUMC(4)` | Warehouse Task Item |
| `EWMSerialNumber` |  | |  |  | `CHAR(30)` | 30 Characters |
