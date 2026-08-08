---
name: I_CONTROLLINGOBJECTVH
description: "Controlling Object"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONTROLLINGOBJECTVH')/$value
semantic_en: "Controlling Object"
tags:
  - FI
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_CONTROLLINGOBJECTVH

**Controlling Object**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONTROLLINGOBJECTVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ControllingObject` |  | |  |  | `CHAR(22)` | Object Number |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `OrderID` |  | |  |  | `CHAR(12)` | Order Number |
| `BusinessProcess` |  | |  |  | `CHAR(12)` | Business Process |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element Internal ID |
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project Internal ID |
| `ControllingObjectType` |  | |  |  | `CHAR(2)` | Object Type |
