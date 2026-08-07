---
name: I_PRODNRTGINSPCHARACTERISTIC
description: Inspection characteristic of prodn rtg
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNRTGINSPCHARACTERISTIC')/$value
semantic_en: Inspection characteristic of prodn rtg
tags:
  - PP
  - component:PP-VDM-MD-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-MD
  - PP-VDM-MD-2CL
  - metadata-only
---
# I_PRODNRTGINSPCHARACTERISTIC

**Inspection characteristic of prodn rtg**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNRTGINSPCHARACTERISTIC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfOperationsType` |  | |  |  | `CHAR(1)` | Task List Type |
| `ProductionRoutingGroup` |  | |  |  | `CHAR(8)` | Key for Task List Group |
| `ProductionRoutingOpIntID` |  | |  |  | `NUMC(8)` | Number of the Task List Node |
| `BOOCharacteristic` |  | |  |  | `NUMC(4)` | Inspection Characteristic Number |
| `BillOfOperationsVersion` |  | |  |  | `CHAR(4)` | Routing Version |
