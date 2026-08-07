---
name: I_RETAILSTOREUSERASSIGNMENT
description: "User Assigned Store in Retail Store Apps"
app_component: LO-RFM-STO-FIO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RETAILSTOREUSERASSIGNMENT')/$value
semantic_en: "User Assigned Store in Retail Store Apps"
tags:
  - LO
  - bo:project
  - component:LO-RFM-STO-FIO-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-STO
  - LO-RFM-STO-FIO
  - LO-RFM-STO-FIO-2CL
  - lob:finance
  - lob:logistics general
  - metadata-only
---
# I_RETAILSTOREUSERASSIGNMENT

**User Assigned Store in Retail Store Apps**

| Property | Value |
|---|---|
| App Component | `LO-RFM-STO-FIO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RETAILSTOREUSERASSIGNMENT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Store` |  | |  |  | `CHAR(4)` | Plant |
| `AssignedUser` |  | |  |  | `CHAR(12)` | User ID |
