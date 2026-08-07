---
name: C_CHANGERECORDITEMDEX
description: Extractor for Generic CR item
app_component: PLM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHANGERECORDITEMDEX')/$value
semantic_en: Extractor for Generic CR item
tags:
  - PLM
  - component:PLM-CR-2CL
  - consumption-view
  - PLM-CR
  - PLM-CR-2CL
  - metadata-only
---
# C_CHANGERECORDITEMDEX

**Extractor for Generic CR item**

| Property | Value |
|---|---|
| App Component | `PLM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHANGERECORDITEMDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeRecordReferenceUUID` |  | |  |  | `RAW(16)` | NodeID |
| `ChangeRecordUUID` |  | |  |  | `RAW(16)` | NodeID |
| `ChangeRecordReferenceType` |  | |  |  | `CHAR(3)` | Object Type |
| `ChangeRecordReferenceSubtype` |  | |  |  | `CHAR(3)` | Object Subtype |
| `ChangeRecordRefObjectUUID` |  | |  |  | `RAW(16)` | Internal Key of type GUID |
| `ChgRecRefInternalKey1` |  | |  |  | `CHAR(40)` | Internal Key of an Object Reference |
| `ChgRecRefInternalKey2` |  | |  |  | `CHAR(40)` | Internal Key of an Object Reference |
| `ChgRecRefInternalKey3` |  | |  |  | `CHAR(40)` | Internal Key of an Object Reference |
| `ChgRecRefInternalKey4` |  | |  |  | `CHAR(40)` | Internal Key of an Object Reference |
| `ParentChangeRecordRefUUID` |  | |  |  | `RAW(16)` | Business Object Node ID |
| `IsMainReference` |  | |  |  | `CHAR(1)` | Main Reference |
| `ChangeRecordReference` |  | |  |  | `CHAR(90)` | Reference Object ID |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Changed By |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `ChangeRecordVirtualRefInd` |  | |  |  | `CHAR(1)` | Virtual object indicated in Change Record |
| `ChangeRecordItemRelevance` |  | |  |  | `CHAR(3)` | Change Record Item Relevance |
