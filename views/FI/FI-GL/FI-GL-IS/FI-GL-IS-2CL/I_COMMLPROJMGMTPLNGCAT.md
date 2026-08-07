---
name: I_COMMLPROJMGMTPLNGCAT
description: "Commercial Project Management Planning Category"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMMLPROJMGMTPLNGCAT')/$value
semantic_en: "Commercial Project Management Planning Category"
tags:
  - FI
  - bo:project
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
  - plan
  - project
  - metadata-only
---
# I_COMMLPROJMGMTPLNGCAT

**Commercial Project Management Planning Category**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMMLPROJMGMTPLNGCAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `PlngCategoryApplicationType` |  | |  |  | `NUMC(2)` | Application Type |
| `IsBaselinePlngCategory` |  | |  |  | `CHAR(1)` | Category is used for baseline plan version |
| `IsOngoingPlngCategory` |  | |  |  | `CHAR(1)` | Category is used for ongoing plan version |
