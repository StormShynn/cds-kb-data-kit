---
name: I_FUNCTIONALLOCATIONSTATUS
description: Functional Location Status
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCTIONALLOCATIONSTATUS')/$value
semantic_en: Functional Location Status
tags:
  - PM
  - component:PM-EQM-EQ-2CL
  - interface-view
  - lob:plant maintenance
  - lob:quality management
  - PM-EQM
  - PM-EQM-EQ
  - PM-EQM-EQ-2CL
  - metadata-only
---
# I_FUNCTIONALLOCATIONSTATUS

**Functional Location Status**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCTIONALLOCATIONSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FunctionalLocation` |  | |  |  | `CHAR(30)` | Functional Location |
| `MaintObjectInternalID` |  | |  |  | `CHAR(22)` | Object Number |
| `FuncnlLocIsMarkedForDeletion` |  | |  |  | `CHAR(1)` | Checkbox |
| `FuncnlLocIsDeleted` |  | |  |  | `CHAR(1)` | Checkbox |
| `FunctionalLocationIsActive` |  | |  |  | `CHAR(1)` | Checkbox |
| `FunctionalLocationIsCreated` |  | |  |  | `CHAR(1)` | Checkbox |
| `FuncnlLocIsDeactivated` |  | |  |  | `CHAR(1)` | Checkbox |
