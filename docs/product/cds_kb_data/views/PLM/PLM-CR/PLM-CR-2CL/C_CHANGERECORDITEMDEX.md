---
name: C_CHANGERECORDITEMDEX
description: "Extractor for Generic CR item"
app_component: PLM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHANGERECORDITEMDEX')/$value
semantic_en: "Extractor for Generic CR item"
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
