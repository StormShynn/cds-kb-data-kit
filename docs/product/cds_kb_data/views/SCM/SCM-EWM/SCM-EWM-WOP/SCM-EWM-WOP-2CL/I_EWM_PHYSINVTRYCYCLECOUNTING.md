---
name: I_EWM_PHYSINVTRYCYCLECOUNTING
description: "Physical Inventory Cycle Counting"
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_PHYSINVTRYCYCLECOUNTING')/$value
semantic_en: "Physical Inventory Cycle Counting"
tags:
  - SCM
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - inventory
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
  - metadata-only
---
# I_EWM_PHYSINVTRYCYCLECOUNTING

**Physical Inventory Cycle Counting**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_PHYSINVTRYCYCLECOUNTING')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` |  | |  |  | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `EWMPhysInventoryCountingCycle` |  | |  |  | `CHAR(1)` | Cycle Counting Indicator |
| `EWMPInvCycCountingIntvlValue` |  | |  |  | `NUMC(4)` | Cycle Counting Interval in Working Days |
| `EWMPInvCycCountingBufferValue` |  | |  |  | `NUMC(2)` | Cycle Counting Buffer in Working Days |
