---
name: I_BOOOPBOMITMINTID
description: BOO Op BOM Item Internal ID
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BOOOPBOMITMINTID')/$value
semantic_en: BOO Op BOM Item Internal ID
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
# I_BOOOPBOMITMINTID

**BOO Op BOM Item Internal ID**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BOOOPBOMITMINTID')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfOperationsType` |  | |  |  | `CHAR(1)` | Task List Type |
| `BillOfOperationsGroup` |  | |  |  | `CHAR(8)` | Key for Task List Group |
| `BOOOpBOMItemInternalID` |  | |  |  | `NUMC(8)` | No. for material comp. allocation to task list |
