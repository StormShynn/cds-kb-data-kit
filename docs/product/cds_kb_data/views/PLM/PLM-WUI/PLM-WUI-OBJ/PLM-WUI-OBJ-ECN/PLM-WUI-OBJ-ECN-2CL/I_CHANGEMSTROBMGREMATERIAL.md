---
name: I_CHANGEMSTROBMGREMATERIAL
description: "This CDS view provides the prerequisites for answering the following business questions: Which materials are assigned to a change master? If a material was changed using a change master, who initiated these changes and when?"
app_component: PLM-WUI-OBJ-ECN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMSTROBMGREMATERIAL')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: Which materials are assigned to a change master? If a material was changed using a change master, who initiated these changes and when?"
semantic_vi: "Change Number ObMaRe of Material — CDS view giao diện dựa trên I_ChangeMstrObjectMgmtRecord."
keywords:
  - "change"
  - "number"
  - "obmare"
  - "material"
  - "mgmt"
  - "recd"
  - "object"
  - "internal"
  - "nmbr"
  - "alternative"
  - "date"
  - "counter"
tags:
  - PLM
  - bo:plant
  - component:PLM-WUI-OBJ-ECN-2CL
  - interface-view
  - material
  - PLM-WUI
  - PLM-WUI-OBJ
  - PLM-WUI-OBJ-ECN
  - PLM-WUI-OBJ-ECN-2CL
---
# I_CHANGEMSTROBMGREMATERIAL

**This CDS view provides the prerequisites for answering the following business questions: Which materials are assigned to a change master? If a material was changed using a change master, who initiated these changes and when?**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMSTROBMGREMATERIAL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeNumber` | ✓ | |  |  | `CHAR(12)` | Change Number |
| `Material` | ✓ | |  | `cast(ObjMgmtRecdObject as /plmb/matnr )` | `CHAR(40)` | Material Number |
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
| `_Product` | | ✓ | | | | |
| `_ChangeMaster` | | ✓ | | | | |
| `_ChangeMasterAltDate` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMSTROBMGREMATERIAL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMSTROBMGREMATERIAL')/$value)*

```abap
@AccessControl.authorizationCheck: #CHECK

@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE ]

@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #MASTER

@Metadata.ignorePropagatedAnnotations: true

@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@EndUserText.label: 'Change Number ObMaRe of Material'
define view entity I_ChangeMstrObMgReMaterial
  as select from I_ChangeMstrObjectMgmtRecord
  association [0..1] to I_Product as _Product on $projection.Material = _Product.Product

{
  key ChangeNumber,
  key cast(ObjMgmtRecdObject as /plmb/matnr  ) as Material,

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
      _ChangeMasterAltDate,
      _Product
}
where
  ChangeNumberObjectType = '41'
```
