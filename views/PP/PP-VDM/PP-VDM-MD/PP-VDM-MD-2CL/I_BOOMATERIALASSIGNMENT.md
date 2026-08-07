---
name: I_BOOMATERIALASSIGNMENT
description: This CDS view can build foreign key associations to the sixth key field of material assignment data (MAPL-ZKRIZ) in analytical CDS views.
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BOOMATERIALASSIGNMENT')/$value
semantic_en: This CDS view can build foreign key associations to the sixth key field of material assignment data (MAPL-ZKRIZ) in analytical CDS views.
tags:
  - PP
  - bo:companycode
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

**This CDS view can build foreign key associations to the sixth key field of material assignment data (MAPL-ZKRIZ) in analytical CDS views.**

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
