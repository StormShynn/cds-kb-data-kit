---
name: I_CHANGEMASTERALTDATE
description: This CDS view provides the prerequisites for answering the following business questions: How many alternative dates have been defined for a given change master? What is the exact date value of an alternative date ID?
app_component: PLM-WUI-OBJ-ECN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERALTDATE')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: How many alternative dates have been defined for a given change master? What is the exact date value of an alternative date ID?
tags:
  - PLM
  - bo:companycode
  - component:PLM-WUI-OBJ-ECN-2CL
  - interface-view
  - PLM-WUI
  - PLM-WUI-OBJ
  - PLM-WUI-OBJ-ECN
  - PLM-WUI-OBJ-ECN-2CL
  - metadata-only
---
# I_CHANGEMASTERALTDATE

**This CDS view provides the prerequisites for answering the following business questions: How many alternative dates have been defined for a given change master? What is the exact date value of an alternative date ID?**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-ECN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERALTDATE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `ChangeNumber` | `CHAR(12)` | Change Number |
| `ChgNmbrAlternativeDateCounter` | `NUMC(3)` | Engineering change management: alternative date counter |
| `ChgNmbrAlternativeDateID` | `CHAR(18)` | Alternative date external key |
| `ChgNmbrAlternativeDate` | `DATS(8)` | Valid-From Date |
| `ChgNmbrAlternativeDateText` | `CHAR(18)` | Alternative date external key |
| `ChgNmbrAltvDateIsAssignedToObj` | `CHAR(1)` | Objects Allocated |
