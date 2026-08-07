---
name: I_ASSIGNEDORDERANDCATEGORY
description: All Order IDs and Categories for ETO
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSIGNEDORDERANDCATEGORY')/$value
semantic_en: All Order IDs and Categories for ETO
tags:
  - CO
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - interface-view
  - lob:controlling
  - lob:finance
  - order
  - metadata-only
---
# I_ASSIGNEDORDERANDCATEGORY

**All Order IDs and Categories for ETO**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSIGNEDORDERANDCATEGORY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AssignedOrderNumber` |  | |  |  | `CHAR(12)` | Standing order number |
| `ETOOrdCategory` |  | |  |  | `CHAR(2)` | Order Category |
| `AssignedOrdName` |  | |  |  | `CHAR(40)` | Assigned Ord Description |
