---
name: I_CHANGEMSTROBMGREDOCINFORECD
description: "This CDS view provides the prerequisites for answering the following business questions: Which documents are controlled by a change master? If a document was changed using a change master, who initiated these changes and when?"
app_component: PLM-WUI-OBJ-ECN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMSTROBMGREDOCINFORECD')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: Which documents are controlled by a change master? If a document was changed using a change master, who initiated these changes and when?"
tags:
  - PLM
  - bo:plant
  - component:PLM-WUI-OBJ-ECN-2CL
  - document
  - interface-view
  - PLM-WUI
  - PLM-WUI-OBJ
  - PLM-WUI-OBJ-ECN
  - PLM-WUI-OBJ-ECN-2CL
  - metadata-only
---
# I_CHANGEMSTROBMGREDOCINFORECD

**This CDS view provides the prerequisites for answering the following business questions: Which documents are controlled by a change master? If a document was changed using a change master, who initiated these changes and when?**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-ECN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMSTROBMGREDOCINFORECD')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeNumber` |  | |  |  | `CHAR(12)` | Change Number |
| `DocumentType` |  | |  |  | `CHAR(3)` | Document Type |
| `DocumentInfoRecord` |  | |  |  | `CHAR(25)` | Document Number |
| `DocumentPart` |  | |  |  | `CHAR(3)` | Document Part |
| `DocumentVersion` |  | |  |  | `CHAR(2)` | Document Version |
| `ObjMgmtRecdObject` |  | |  |  | `CHAR(90)` | Change object (internal use) |
| `ObjMgmtRecdObjectInternalID` |  | |  |  | `CHAR(90)` | Identification of object to be changed |
| `ChgNmbrAlternativeDateCounter` |  | |  |  | `NUMC(3)` | Engineering change management: alternative date counter |
| `ObjMgmtRecdDescription` |  | |  |  | `CHAR(40)` | Object management record description |
| `ObjMgmtRecdItemUUID` |  | |  |  | `CHAR(32)` | Object Management Record Item GUID |
| `ObjMgmtRecdLastChangedAt` |  | |  |  | `DATS(8)` | Date of Last Change |
| `ObjMgmtRecdLastChangedBy` |  | |  |  | `CHAR(12)` | Name of person who changed object |
| `ObjMgmtRecdCreationDate` |  | |  |  | `DATS(8)` | Date record created on |
| `ObjMgmtRecdCreatedBy` |  | |  |  | `CHAR(12)` | User who created record |
| `ObjMgmtRecdObjLastChangedAt` |  | |  |  | `DATS(8)` | Date on Which Object Was Last Changed |
| `ObjMgmtRecdObjLastChangedBy` |  | |  |  | `CHAR(12)` | User who last changed the object |
| `ObjMgmtRecdObjIsLockedForChg` |  | |  |  | `CHAR(1)` | Indicator: Object locked for changes |
| `ObjMgmtRecdObjIsBaselined` |  | |  |  | `CHAR(1)` | Baselining for object was performed |
| `ObjMgmtRecdChangeType` |  | |  |  | `NUMC(3)` | Change Type for Object |
| `ObjMgmtRecdObjIsPlanned` |  | |  |  | `CHAR(1)` | Indicator: planned record |
| `ObjMgmtRecdObjRevisionLevel` |  | |  |  | `CHAR(2)` | Revision Level without Conversion Exit |
