---
name: I_EWM_EXTSTORAGEPROCSTEPTEXT
description: This CDS view provides information about process steps of external storage in your warehouse.
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_EXTSTORAGEPROCSTEPTEXT')/$value
semantic_en: This CDS view provides information about process steps of external storage in your warehouse.
tags:
  - SCM
  - bo:project
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
  - metadata-only
---
# I_EWM_EXTSTORAGEPROCSTEPTEXT

**This CDS view provides information about process steps of external storage in your warehouse.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_EXTSTORAGEPROCSTEPTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `ExternalStorageProcessStep` |  | |  |  | `CHAR(4)` | External Storage Process Step |
| `ExternalStorageProcessStepName` |  | |  |  | `CHAR(40)` | Description |
