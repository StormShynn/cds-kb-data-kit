---
name: I_EWM_PRODUCTIONSUPPLYAREATEXT
description: Warehouse Production Supply Area - Text
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_PRODUCTIONSUPPLYAREATEXT')/$value
semantic_en: Warehouse Production Supply Area - Text
tags:
  - SCM
  - bo:material
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - product
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
  - metadata-only
---
# I_EWM_PRODUCTIONSUPPLYAREATEXT

**Warehouse Production Supply Area - Text**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_PRODUCTIONSUPPLYAREATEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` |  | |  |  | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `EWMProductionSupplyArea` |  | |  |  | `CHAR(15)` | Production Supply Area |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `EWMProductionSupplyAreaName` |  | |  |  | `CHAR(40)` | Production Supply Area Description |
