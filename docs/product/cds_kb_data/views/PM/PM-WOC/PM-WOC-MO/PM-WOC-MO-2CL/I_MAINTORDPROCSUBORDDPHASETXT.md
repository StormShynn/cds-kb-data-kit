---
name: I_MAINTORDPROCSUBORDDPHASETXT
description: "Maint Order Process Sub Phase - Txt"
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTORDPROCSUBORDDPHASETXT')/$value
semantic_en: "Maint Order Process Sub Phase - Txt"
tags:
  - PM
  - component:PM-WOC-MO-2CL
  - interface-view
  - lob:plant maintenance
  - order
  - PM-WOC
  - PM-WOC-MO
  - PM-WOC-MO-2CL
  - metadata-only
---
# I_MAINTORDPROCSUBORDDPHASETXT

**Maint Order Process Sub Phase - Txt**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTORDPROCSUBORDDPHASETXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceProcessingPhase` |  | |  |  | `CHAR(1)` | Maintenance Processing Phase |
| `MaintOrdProcessSubPhaseCode` |  | |  |  | `CHAR(4)` | Process Subphase |
| `EAMOverallStatusEntity` |  | |  |  | `CHAR(3)` | Entity Type |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `MaintOrdProcessSubPhaseCodeTxt` |  | |  |  | `CHAR(40)` | Description of Overall Process Subphase |
