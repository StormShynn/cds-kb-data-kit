---
name: I_PLANTSECTION
description: "Plant Section"
app_component: PM-EQM-FL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PLANTSECTION')/$value
semantic_en: "Plant Section"
tags:
  - PM
  - component:PM-EQM-FL-2CL
  - interface-view
  - lob:plant maintenance
  - lob:quality management
  - plan
  - PM-EQM
  - PM-EQM-FL
  - PM-EQM-FL-2CL
  - metadata-only
---
# I_PLANTSECTION

**Plant Section**

| Property | Value |
|---|---|
| App Component | `PM-EQM-FL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PLANTSECTION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PlantSection` |  | |  |  | `CHAR(3)` | Plant Section |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `PlantSectionPersonRespName` |  | |  |  | `CHAR(14)` | Group of Employees Responsible for Company Area |
| `PlantSectionPersonRespPhone` |  | |  |  | `CHAR(12)` | Phone Number of Employee Group Responsible for Company Area |
