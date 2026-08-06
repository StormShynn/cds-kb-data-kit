---
name: I_CONTROLRECIPE
description: Control Recipe Header
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONTROLRECIPE')/$value
semantic_en: Control Recipe Header
tags:
  - PP
  - component:PP-VDM-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-2CL
  - metadata-only
---
# I_CONTROLRECIPE

**Control Recipe Header**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONTROLRECIPE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `ControlRecipe` | `NUMC(18)` | Control Recipe |
| `Plant` | `CHAR(4)` | Plant |
| `ProcessOrder` | `CHAR(12)` | Process Order |
| `ControlRecipeDestination` | `CHAR(2)` | Control Recipe Destination |
| `ControlRecipeDestinationType` | `CHAR(1)` | Type of Control Recipe Destination |
| `ControlRecipeDestAddressName` | `CHAR(32)` | Address of the Control Recipe Destination |
| `ControlRecipeStatus` | `CHAR(5)` | Control Recipe Status |
| `ControlRecipeIsForTesting` | `CHAR(1)` | Indicator: Message or Control Recipe for Test Purposes |
| `ControlRecipeText` | `CHAR(40)` | Description |
| `Product` | `CHAR(40)` | Product |
| `ProductName` | `CHAR(40)` | Product Description |
| `Batch` | `CHAR(10)` | Batch Number |
| `InspectionLot` | `NUMC(12)` | Inspection Lot Number |
| `CreationDate` | `DATS(8)` | Record Creation Date |
| `CreationTime` | `TIMS(6)` | Time when the record was created |
| `LastChangeDate` | `DATS(8)` | Last Changed On |
| `ScheduledEarliestStartDate` | `DATS(8)` | Earliest Scheduled Execution Start Date |
| `ScheduledEarliestStartTime` | `TIMS(6)` | Earliest Scheduled Execution Start Time |
