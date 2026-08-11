---
name: I_CHANGEMSTROBJECTMGMTRECORD
description: "This CDS view provides the prerequisites for answering the following business questions: Which business objects have been changed with a change master? If changes to a business object are controlled by a change master, who has initiated these changes and when?"
app_component: PLM-WUI-OBJ-ECN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMSTROBJECTMGMTRECORD')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: Which business objects have been changed with a change master? If changes to a business object are controlled by a change master, who has initiated these changes and when?"
semantic_vi: "Change Number Object Management Record — CDS view giao diện dựa trên aeoi."
keywords:
  - "change"
  - "number"
  - "object"
  - "management"
  - "record"
  - "type"
  - "mgmt"
  - "recd"
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
  - PLM-WUI
  - PLM-WUI-OBJ
  - PLM-WUI-OBJ-ECN
  - PLM-WUI-OBJ-ECN-2CL
---
# I_CHANGEMSTROBJECTMGMTRECORD

**This CDS view provides the prerequisites for answering the following business questions: Which business objects have been changed with a change master? If changes to a business object are controlled by a change master, who has initiated these changes and when?**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-ECN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMSTROBJECTMGMTRECORD')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeNumber` | ✓ | |  | `aennr` | `CHAR(12)` | Change Number |
| `ChangeNumberObjectType` | ✓ | |  | `aetyp` | `NUMC(2)` | Object Type |
| `ObjMgmtRecdObjectInternalID` | ✓ | |  | `objkt` | `CHAR(90)` | Identification of object to be changed |
| `ObjMgmtRecdObject` |  | |  | `usobj` | `CHAR(90)` | Change object (internal use) |
| `ChgNmbrAlternativeDateCounter` |  | |  | `aedtz` | `NUMC(3)` | Engineering change management: alternative date counter |
| `ObjMgmtRecdDescription` |  | |  | `oitxt` | `CHAR(40)` | Object management record description |
| `ObjMgmtRecdItemUUID` |  | |  | `aeoi_guid` | `CHAR(32)` | Object Management Record Item GUID |
| `ObjMgmtRecdLastChangedAt` |  | |  | `aedat` | `DATS(8)` | Date of Last Change |
| `ObjMgmtRecdLastChangedBy` |  | |  | `aenam` | `CHAR(12)` | Name of person who changed object |
| `ObjMgmtRecdCreationDate` |  | |  | `andat` | `DATS(8)` | Date record created on |
| `ObjMgmtRecdCreatedBy` |  | |  | `annam` | `CHAR(12)` | User who created record |
| `ObjMgmtRecdObjLastChangedAt` |  | |  | `objdt` | `DATS(8)` | Date on Which Object Was Last Changed |
| `ObjMgmtRecdObjLastChangedBy` |  | |  | `objnm` | `CHAR(12)` | User who last changed the object |
| `ObjMgmtRecdObjIsLockedForChg` |  | |  | `cclck` | `CHAR(1)` | Indicator: Object locked for changes |
| `ObjMgmtRecdObjIsBaselined` |  | |  | `aeost` | `CHAR(1)` | Baselining for object was performed |
| `ObjMgmtRecdChangeType` |  | |  | `ccoaa` | `NUMC(3)` | Change Type for Object |
| `ObjMgmtRecdObjIsPlanned` |  | |  | `ccvms` | `CHAR(1)` | Indicator: planned record |
| `ObjMgmtRecdObjRevisionLevel` |  | |  | `cast(revlv as cc_revlv_nex preserving type)` | `CHAR(2)` | Revision Level without Conversion Exit |
| `_ChangeMasterObjectType` | | ✓ | | | | |
| `_ChangeMaster` | | ✓ | | | | |
| `_ChangeMasterAltDate` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ChangeMasterObjectType` | `I_ChangeMasterObjectType` | [0..1] |
| `_ChangeMaster` | `I_ChangeMaster` | [0..1] |
| `_ChangeMasterAltDate` | `I_ChangeMasterAltDate` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMSTROBJECTMGMTRECORD')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMSTROBJECTMGMTRECORD')/$value)*

```abap
@AccessControl.authorizationCheck: #CHECK

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE ]

@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #MASTER

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API

@EndUserText.label: 'Change Number Object Management Record'
define view entity I_ChangeMstrObjectMgmtRecord
  as select from aeoi
  association [0..1] to I_ChangeMasterObjectType as _ChangeMasterObjectType on  $projection.ChangeNumberObjectType = _ChangeMasterObjectType.ChangeNumberObjectType
  association [0..1] to I_ChangeMaster           as _ChangeMaster           on  $projection.ChangeNumber = _ChangeMaster.ChangeNumber
  association [0..1] to I_ChangeMasterAltDate    as _ChangeMasterAltDate    on  $projection.ChangeNumber                  = _ChangeMasterAltDate.ChangeNumber
                                                                            and $projection.ChgNmbrAlternativeDateCounter = _ChangeMasterAltDate.ChgNmbrAlternativeDateCounter

{
      @ObjectModel.text.element: [ 'ObjMgmtRecdDescription']
  key aennr                                       as ChangeNumber,
  key aetyp                                       as ChangeNumberObjectType,
  key objkt                                       as ObjMgmtRecdObjectInternalID,
      usobj                                       as ObjMgmtRecdObject,
      aedtz                                       as ChgNmbrAlternativeDateCounter,

      oitxt                                       as ObjMgmtRecdDescription,
      aeoi_guid                                   as ObjMgmtRecdItemUUID,

      aedat                                       as ObjMgmtRecdLastChangedAt,
      aenam                                       as ObjMgmtRecdLastChangedBy,
      andat                                       as ObjMgmtRecdCreationDate,
      annam                                       as ObjMgmtRecdCreatedBy,
      objdt                                       as ObjMgmtRecdObjLastChangedAt,
      objnm                                       as ObjMgmtRecdObjLastChangedBy,

      cclck                                       as ObjMgmtRecdObjIsLockedForChg,
      aeost                                       as ObjMgmtRecdObjIsBaselined,
      ccoaa                                       as ObjMgmtRecdChangeType,
      ccvms                                       as ObjMgmtRecdObjIsPlanned,
      //      revlv     as ObjMgmtRecdObjRevisionLevel,
      cast(revlv as cc_revlv_nex preserving type) as ObjMgmtRecdObjRevisionLevel,

      //ltxsp, // Long text original language
      //ccsto, // Partial key for status in engineering change management
      //cont1, // Digital signature status for ECR integration

      _ChangeMasterObjectType,
      _ChangeMasterAltDate,
      _ChangeMaster
}
```
