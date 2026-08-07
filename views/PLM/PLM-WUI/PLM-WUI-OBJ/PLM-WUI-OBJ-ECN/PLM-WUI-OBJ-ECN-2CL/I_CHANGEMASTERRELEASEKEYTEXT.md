---
name: I_CHANGEMASTERRELEASEKEYTEXT
description: "These CDS views provide the prerequisites for answering the following business question: Is a change released globally within my company, or only for a specific operative area (for example costing, planning, or production)?"
app_component: PLM-WUI-OBJ-ECN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERRELEASEKEYTEXT')/$value
semantic_en: "These CDS views provide the prerequisites for answering the following business question: Is a change released globally within my company, or only for a specific operative area (for example costing, planning, or production)?"
tags:
  - PLM
  - bo:companycode
  - component:PLM-WUI-OBJ-ECN-2CL
  - interface-view
  - plan
  - PLM-WUI
  - PLM-WUI-OBJ
  - PLM-WUI-OBJ-ECN
  - PLM-WUI-OBJ-ECN-2CL
  - product
  - metadata-only
---
# I_CHANGEMASTERRELEASEKEYTEXT

**These CDS views provide the prerequisites for answering the following business question: Is a change released globally within my company, or only for a specific operative area (for example costing, planning, or production)?**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-ECN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERRELEASEKEYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeNumberReleaseKey` |  | |  |  | `NUMC(2)` | ECM: Release Key |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `ChangeNumberReleaseKeyText` |  | |  |  | `CHAR(30)` | Description for release key |
