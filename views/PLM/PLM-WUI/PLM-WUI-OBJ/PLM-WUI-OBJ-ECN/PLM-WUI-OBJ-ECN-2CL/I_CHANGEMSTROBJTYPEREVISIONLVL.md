---
name: I_CHANGEMSTROBJTYPEREVISIONLVL
description: This CDS view provides the prerequisites for answering the following business questions: Which are the possible revision levels that can be assigned to materials? Which are the possible revision levels that can be assigned to documents? In which sequence can these revision levels be assigned to a material or document?
app_component: PLM-WUI-OBJ-ECN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMSTROBJTYPEREVISIONLVL')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: Which are the possible revision levels that can be assigned to materials? Which are the possible revision levels that can be assigned to documents? In which sequence can these revision levels be assigned to a material or document?
tags:
  - PLM
  - bo:plant
  - component:PLM-WUI-OBJ-ECN-2CL
  - document
  - interface-view
  - material
  - PLM-WUI
  - PLM-WUI-OBJ
  - PLM-WUI-OBJ-ECN
  - PLM-WUI-OBJ-ECN-2CL
  - metadata-only
---
# I_CHANGEMSTROBJTYPEREVISIONLVL

**This CDS view provides the prerequisites for answering the following business questions: Which are the possible revision levels that can be assigned to materials? Which are the possible revision levels that can be assigned to documents? In which sequence can these revision levels be assigned to a material or document?**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-ECN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMSTROBJTYPEREVISIONLVL')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `ChangeNumberObjectType` | `NUMC(2)` | Object Type |
| `RevisionLevel` | `CHAR(2)` | Revision Level without Conversion Exit |
| `RevisionLevelOrdinalNumber` | `NUMC(3)` | Revision Level Order |
