---
name: I_CHANGEMSTROBMGREMATERIAL
description: "This CDS view provides the prerequisites for answering the following business questions: Which materials are assigned to a change master? If a material was changed using a change master, who initiated these changes and when?"
app_component: PLM-WUI-OBJ-ECN-2CL
software_component: SAPSCORE
release_state: released
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
