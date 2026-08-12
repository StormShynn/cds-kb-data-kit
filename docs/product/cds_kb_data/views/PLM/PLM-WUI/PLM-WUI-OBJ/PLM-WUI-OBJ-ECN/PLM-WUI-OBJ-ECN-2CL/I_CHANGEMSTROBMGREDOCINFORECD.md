---
name: I_CHANGEMSTROBMGREDOCINFORECD
description: "This CDS view provides the prerequisites for answering the following business questions: Which documents are controlled by a change master? If a document was changed using a change master, who initiated these changes and when?"
app_component: PLM-WUI-OBJ-ECN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMSTROBMGREDOCINFORECD')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: Which documents are controlled by a change master? If a document was changed using a change master, who initiated these changes and when?"
semantic_vi: "Change Number ObMaRe of Doc Info Record — CDS view giao diện dựa trên I_ChangeMstrObjectMgmtRecord."
keywords:
  - "change"
  - "number"
  - "obmare"
  - "doc"
  - "info"
  - "record"
  - "document"
  - "type"
  - "part"
  - "version"
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
---
# I_CHANGEMSTROBMGREDOCINFORECD

**This CDS view provides the prerequisites for answering the following business questions: Which documents are controlled by a change master? If a document was changed using a change master, who initiated these changes and when?**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-ECN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMSTROBMGREDOCINFORECD')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeNumber` | ✓ | |  |  | `CHAR(12)` | Change Number |
| `DocumentType` | ✓ | |  | `cast(substring(ObjMgmtRecdObject, 1, 3) as dokar)` | `CHAR(3)` | Document Type |
| `DocumentInfoRecord` | ✓ | |  | `cast(substring(ObjMgmtRecdObject, 4, 25) as doknr)` | `CHAR(25)` | Document Number |
| `DocumentPart` | ✓ | |  | `cast(substring(ObjMgmtRecdObject, 29, 3) as doktl_d)` | `CHAR(3)` | Document Part |
| `DocumentVersion` | ✓ | |  | `cast(substring(ObjMgmtRecdObject, 32, 2) as dokvr)` | `CHAR(2)` | Document Version |
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
| `_ChangeMaster` | | ✓ | | | | |
| `_ChangeMasterAltDate` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DocumentInfoRecord` | `I_DocumentInfoRecord` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMSTROBMGREDOCINFORECD')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMSTROBMGREDOCINFORECD')/$value)*

```abap
@AccessControl.authorizationCheck: #CHECK

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE ]

@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #MASTER

@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@EndUserText.label: 'Change Number ObMaRe of Doc Info Record'
define view entity I_ChangeMstrObMgReDocInfoRecd
  as select from I_ChangeMstrObjectMgmtRecord
  association [0..1] to I_DocumentInfoRecord as _DocumentInfoRecord on  $projection.DocumentType       = _DocumentInfoRecord.DocumentInfoRecordDocType
                                                                    and $projection.DocumentInfoRecord = _DocumentInfoRecord.DocumentInfoRecordDocNumber
                                                                    and $projection.DocumentPart       = _DocumentInfoRecord.DocumentInfoRecordDocPart
                                                                    and $projection.DocumentVersion    = _DocumentInfoRecord.DocumentInfoRecordDocVersion
{
  key ChangeNumber,
  key cast(substring(ObjMgmtRecdObject, 1, 3) as dokar)    as DocumentType,
  key cast(substring(ObjMgmtRecdObject, 4, 25) as doknr)   as DocumentInfoRecord,
  key cast(substring(ObjMgmtRecdObject, 29, 3) as doktl_d) as DocumentPart,
  key cast(substring(ObjMgmtRecdObject, 32, 2) as dokvr)   as DocumentVersion,

      ObjMgmtRecdObject,
      ObjMgmtRecdObjectInternalID,

      ChgNmbrAlternativeDateCounter,
      ObjMgmtRecdDescription,
      ObjMgmtRecdItemUUID,

      ObjMgmtRecdLastChangedAt,
      ObjMgmtRecdLastChangedBy,

      ObjMgmtRecdCreationDate,
      ObjMgmtRecdCreatedBy,
      ObjMgmtRecdObjLastChangedAt,
      ObjMgmtRecdObjLastChangedBy,

      ObjMgmtRecdObjIsLockedForChg,
      ObjMgmtRecdObjIsBaselined,
      ObjMgmtRecdChangeType,
      ObjMgmtRecdObjIsPlanned,
      ObjMgmtRecdObjRevisionLevel,

      /* Associations */
      _ChangeMaster,
      _ChangeMasterAltDate
      //      _DocumentInfoRecord
}
where
  ChangeNumberObjectType = '31'
```
