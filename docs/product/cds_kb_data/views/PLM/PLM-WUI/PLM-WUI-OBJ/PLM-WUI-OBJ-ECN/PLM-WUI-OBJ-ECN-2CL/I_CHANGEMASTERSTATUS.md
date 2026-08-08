---
name: I_CHANGEMASTERSTATUS
description: "These CDS views provide the prerequisites for answering the following business questions: Which change masters are active in my system? Which change masters can be used to make changes to business objects?"
app_component: PLM-WUI-OBJ-ECN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERSTATUS')/$value
semantic_en: "These CDS views provide the prerequisites for answering the following business questions: Which change masters are active in my system? Which change masters can be used to make changes to business objects?"
tags:
  - PLM
  - bo:plant
  - component:PLM-WUI-OBJ-ECN-2CL
  - interface-view
  - PLM-WUI
  - PLM-WUI-OBJ
  - PLM-WUI-OBJ-ECN
  - PLM-WUI-OBJ-ECN-2CL
  - metadata-only
---
# I_CHANGEMASTERSTATUS

**These CDS views provide the prerequisites for answering the following business questions: Which change masters are active in my system? Which change masters can be used to make changes to business objects?**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-ECN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeNumberStatus` |  | |  |  | `NUMC(2)` | Status of Change Number |
| `ChangeIsAllowed` |  | |  |  | `CHAR(1)` | Status allows changes |
| `DateChangeIsAllowed` |  | |  |  | `CHAR(1)` | Valid-from date can be changed |
| `DistributionIsLocked` |  | |  |  | `CHAR(1)` | Indicator: Distribution lock |
