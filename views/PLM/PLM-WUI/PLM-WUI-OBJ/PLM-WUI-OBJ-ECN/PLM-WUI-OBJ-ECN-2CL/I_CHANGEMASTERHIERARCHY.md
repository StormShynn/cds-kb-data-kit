---
name: I_CHANGEMASTERHIERARCHY
description: This CDS view provides the prerequisites for answering the following business question: Which change masters belong together, for example because they are part of the same complex change process?
app_component: PLM-WUI-OBJ-ECN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERHIERARCHY')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business question: Which change masters belong together, for example because they are part of the same complex change process?
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
# I_CHANGEMASTERHIERARCHY

**This CDS view provides the prerequisites for answering the following business question: Which change masters belong together, for example because they are part of the same complex change process?**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-ECN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERHIERARCHY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PackageChangeNumber` |  | |  |  | `CHAR(12)` | Change package |
| `LeadingChangeNumber` |  | |  |  | `CHAR(12)` | Leading change master record |
| `LeadChangeNumberCreationDate` |  | |  |  | `DATS(8)` | Date record created on |
| `LeadChangeNumberCreatedByUser` |  | |  |  | `CHAR(12)` | User who created record |
