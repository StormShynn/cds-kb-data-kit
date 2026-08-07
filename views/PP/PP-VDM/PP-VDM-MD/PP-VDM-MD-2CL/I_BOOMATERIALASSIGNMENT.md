---
name: I_BOOMATERIALASSIGNMENT
description: Material assgmt to Bill of Operations
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BOOMATERIALASSIGNMENT')/$value
semantic_en: Material assgmt to Bill of Operations
tags:
  - PP
  - component:PP-VDM-MD-2CL
  - interface-view
  - lob:manufacturing
  - material
  - PP-VDM
  - PP-VDM-MD
  - PP-VDM-MD-2CL
  - metadata-only
---
# I_BOOMATERIALASSIGNMENT

**Material assgmt to Bill of Operations**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BOOMATERIALASSIGNMENT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `BillOfOperationsType` |  | |  |  | `CHAR(1)` | Task List Type |
| `BillOfOperationsGroup` |  | |  |  | `CHAR(8)` | Key for Task List Group |
| `BillOfOperationsVariant` |  | |  |  | `CHAR(2)` | Group Counter |
| `BOOToMaterialInternalID` |  | |  |  | `NUMC(7)` | Counter for Additional Criteria |
