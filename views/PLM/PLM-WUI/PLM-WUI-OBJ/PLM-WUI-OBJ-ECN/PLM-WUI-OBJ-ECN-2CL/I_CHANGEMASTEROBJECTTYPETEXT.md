---
name: I_CHANGEMASTEROBJECTTYPETEXT
description: These CDS views provide the prerequisites for answering the following business questions: Which are the possible object type assignments to a change master? What's the name of these object types in various languages?
app_component: PLM-WUI-OBJ-ECN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTEROBJECTTYPETEXT')/$value
semantic_en: These CDS views provide the prerequisites for answering the following business questions: Which are the possible object type assignments to a change master? What's the name of these object types in various languages?
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
# I_CHANGEMASTEROBJECTTYPETEXT

**These CDS views provide the prerequisites for answering the following business questions: Which are the possible object type assignments to a change master? What's the name of these object types in various languages?**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-ECN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTEROBJECTTYPETEXT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `ChangeNumberObjectType` | `NUMC(2)` | Object Type |
| `Language` | `LANG(1)` | Language Key |
| `ObjectTypeText` | `CHAR(30)` | Object Type Description |
| `ObjectTypeShortText` | `CHAR(10)` | Object Type Short Description |
