---
name: I_CHGMSTROBMGREMATERIALTP_2
description: "Chgmstrobmgrematerialtp 2"
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
  - material
  - component:PLM-WUI-OBJ-ECN-2CL
  - lob:Other
  - bo:Material
---
# I_CHGMSTROBMGREMATERIALTP_2

**Chgmstrobmgrematerialtp 2**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-ECN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeNumber` | ✓ | |  |  |  |  |
| `Material` | ✓ | |  |  |  |  |
| `ChgNmbrAlternativeDateID` |  | |  |  |  |  |
| `SAPObjectTechnicalID` |  | |  |  |  |  |
| `ObjMgmtRecdDescription` |  | |  |  |  |  |
| `ObjMgmtRecdItemUUID` |  | |  |  |  |  |
| `ObjMgmtRecdLastChangedAt` |  | |  |  |  |  |
| `ObjMgmtRecdLastChangedBy` |  | |  |  |  |  |
| `ObjMgmtRecdCreationDate` |  | |  |  |  |  |
| `ObjMgmtRecdCreatedBy` |  | |  |  |  |  |
| `ObjMgmtRecdObjLastChangedAt` |  | |  |  |  |  |
| `ObjMgmtRecdObjLastChangedBy` |  | |  |  |  |  |
| `ObjMgmtRecdObjIsLockedForChg` |  | |  |  |  |  |
| `ObjMgmtRecdObjIsPlanned` |  | |  |  |  |  |
| `ObjMgmtRecdObjRevisionLevel` |  | |  |  |  |  |
| `ChgNmbrAlternativeDateCounter` |  | |  |  |  |  |
| `ChangeNumberLastChgdDateTime` |  | |  |  |  |  |
| `_ChangeMaster` | | ✓ | | | | |
| `_ChangeMasterAltDate` | | ✓ | | | | |

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

@EndUserText.label: 'Change Number Object Management Record Mat TP'
define view entity I_ChgMstrObMgReMaterialTP_2
  as projection on I_ChangeMstrObMgReMaterialTP
{
  key ChangeNumber,
  key Material,

      ChgNmbrAlternativeDateID,

      SAPObjectTechnicalID,

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
      ObjMgmtRecdObjIsPlanned,
      ObjMgmtRecdObjRevisionLevel,

      @Consumption.hidden: true
      ChgNmbrAlternativeDateCounter,

      // for ETag handling
      ChangeNumberLastChgdDateTime,

      /* Associations */
      _ChangeMaster        : redirected to parent I_ChangeMasterTP_2,
      _ChangeMasterAltDate : redirected to I_ChangeMasterAltDateTP_2
}
```
