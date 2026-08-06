---
name: I_CHANGEMASTEROBJTYPEASSGMT
description: This CDS view provides the prerequisites for answering the following business questions: To which business object types (for example material, document, characteristics) can a certain change master be assigned? Which change masters can be assigned to a certain object type? Are there any change masters for which the assignment of a specific object type is locked? Who has activated the assignment of a certain business object to a certain change master?
app_component: PLM-WUI-OBJ-ECN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTEROBJTYPEASSGMT')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: To which business object types (for example material, document, characteristics) can a certain change master be assigned? Which change masters can be assigned to a certain object type? Are there any change masters for which the assignment of a specific object type is locked? Who has activated the assignment of a certain business object to a certain change master?
tags:
  - PLM
  - bo:companycode
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
# I_CHANGEMASTEROBJTYPEASSGMT

**This CDS view provides the prerequisites for answering the following business questions: To which business object types (for example material, document, characteristics) can a certain change master be assigned? Which change masters can be assigned to a certain object type? Are there any change masters for which the assignment of a specific object type is locked? Who has activated the assignment of a certain business object to a certain change master?**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-ECN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTEROBJTYPEASSGMT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `ChangeNumber` | `CHAR(12)` | Change Number |
| `ChangeNumberObjectType` | `NUMC(2)` | Object Type |
| `IsActiveForChangeNumber` | `CHAR(1)` | Object Type Active for Change Number |
| `IsLockedForChanges` | `CHAR(1)` | Indicator: Object type locked for changes |
| `IsPartiallyDisplayed` | `CHAR(1)` | Indicator: display partial objects for object |
| `ObjMgmtRecdIsRequired` | `CHAR(1)` | Management Record Is Required for Each Object |
| `ObjMgmtRecdIsGenerated` | `CHAR(1)` | Object Management Record Was Generated |
| `ObjMgmtRecdIsAutomlyCrted` | `CHAR(1)` | Mgmt Record Generated Automatically Only for New Objects |
| `ObjMgmtRecdIsAutomlyCrtedByDlg` | `CHAR(1)` | Automatic Generation with Dialog Box |
| `ObjectTypeCreationDate` | `DATS(8)` | Date record created on |
| `ObjectTypeCreatedByUser` | `CHAR(12)` | User who created record |
| `ObjectTypeLastChangedDate` | `DATS(8)` | Date of Last Change |
| `ObjectTypeLastChangedByUser` | `CHAR(12)` | Name of person who changed object |
