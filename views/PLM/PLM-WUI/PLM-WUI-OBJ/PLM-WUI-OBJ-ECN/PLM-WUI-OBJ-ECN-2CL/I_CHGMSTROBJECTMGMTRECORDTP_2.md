---
name: I_CHGMSTROBJECTMGMTRECORDTP_2
description: Chgmstrobjectmgmtrecordtp 2
app_component: PLM-WUI-OBJ-ECN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PLM
  - PLM-WUI
  - PLM-WUI-OBJ
  - interface-view
  - transactional-processing
  - component:PLM-WUI-OBJ-ECN-2CL
  - lob:Other
---
# I_CHGMSTROBJECTMGMTRECORDTP_2

**Chgmstrobjectmgmtrecordtp 2**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-ECN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ChangeNumber` | ✓ | |  |  |
| `SAPObjectType` | ✓ | |  |  |
| `SAPObjectTechnicalID` | ✓ | |  |  |
| `SAPObjectReadableID` |  | |  |  |
| `ObjMgmtRecdObject` |  | |  |  |
| `ChgNmbrAlternativeDateID` |  | |  |  |
| `ObjMgmtRecdDescription` |  | |  |  |
| `ObjMgmtRecdItemUUID` |  | |  |  |
| `ObjMgmtRecdLastChangedAt` |  | |  |  |
| `ObjMgmtRecdLastChangedBy` |  | |  |  |
| `ObjMgmtRecdCreationDate` |  | |  |  |
| `ObjMgmtRecdCreatedBy` |  | |  |  |
| `ObjMgmtRecdObjLastChangedAt` |  | |  |  |
| `ObjMgmtRecdObjLastChangedBy` |  | |  |  |
| `ObjMgmtRecdObjIsLockedForChg` |  | |  |  |
| `ObjMgmtRecdObjIsBaselined` |  | |  |  |
| `ObjMgmtRecdObjIsPlanned` |  | |  |  |
| `ObjMgmtRecdObjRevisionLevel` |  | |  |  |
| `ChangeNumberObjectType` |  | |  |  |
| `ChgNmbrAlternativeDateCounter` |  | |  |  |
| `ChangeNumberLastChgdDateTime` |  | |  |  |
| `_ChangeMaster` | | ✓ | | |
| `_ChangeMasterAltDate` | | ✓ | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.dataClass: #MASTER

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@EndUserText.label: 'Change Number Object Management Record TP'
define view entity I_ChgMstrObjectMgmtRecordTP_2
  as projection on I_ChangeMstrObjectMgmtRecordTP
{
  key  ChangeNumber,
  key  SAPObjectType,
  key  SAPObjectTechnicalID,

       SAPObjectReadableID,

       @Consumption.hidden: true
       ObjMgmtRecdObject,

       ChgNmbrAlternativeDateID,

       ObjMgmtRecdDescription,

       ObjMgmtRecdItemUUID,

       ObjMgmtRecdLastChangedAt,

       ObjMgmtRecdLastChangedBy,

       ObjMgmtRecdCreationDate,

       ObjMgmtRecdCreatedBy,

       ObjMgmtRecdObjLastChangedAt,

       ObjMgmtRecdObjLastChangedBy,

       @Semantics.booleanIndicator: true
       ObjMgmtRecdObjIsLockedForChg,

       @Semantics.booleanIndicator: true
       ObjMgmtRecdObjIsBaselined,

       @Semantics.booleanIndicator: true
       ObjMgmtRecdObjIsPlanned,

       ObjMgmtRecdObjRevisionLevel,

       @Consumption.hidden: true
       ChangeNumberObjectType,

       @Consumption.hidden: true
       ChgNmbrAlternativeDateCounter,

       // for ETag handling
       ChangeNumberLastChgdDateTime,

       _ChangeMaster        : redirected to parent I_ChangeMasterTP_2,
       _ChangeMasterAltDate : redirected to I_ChangeMasterAltDateTP_2
}
```
