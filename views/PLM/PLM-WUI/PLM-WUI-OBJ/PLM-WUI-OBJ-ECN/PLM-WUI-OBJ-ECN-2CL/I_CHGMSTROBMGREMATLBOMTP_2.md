---
name: I_CHGMSTROBMGREMATLBOMTP_2
description: Chgmstrobmgrematlbomtp 2
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
  - bom
  - component:PLM-WUI-OBJ-ECN-2CL
  - lob:Other
---
# I_CHGMSTROBMGREMATLBOMTP_2

**Chgmstrobmgrematlbomtp 2**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-ECN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ChangeNumber` | `ChangeNumber` |
| key `Material` | `Material` |
| key `Plant` | `Plant` |
| key `BillOfMaterialVariantUsage` | `BillOfMaterialVariantUsage` |
| `ChgNmbrAlternativeDateID` | `ChgNmbrAlternativeDateID` |
| `SAPObjectTechnicalID` | `SAPObjectTechnicalID` |
| `ObjMgmtRecdDescription` | `ObjMgmtRecdDescription` |
| `ObjMgmtRecdItemUUID` | `ObjMgmtRecdItemUUID` |
| `ObjMgmtRecdLastChangedAt` | `ObjMgmtRecdLastChangedAt` |
| `ObjMgmtRecdLastChangedBy` | `ObjMgmtRecdLastChangedBy` |
| `ObjMgmtRecdCreationDate` | `ObjMgmtRecdCreationDate` |
| `ObjMgmtRecdCreatedBy` | `ObjMgmtRecdCreatedBy` |
| `ObjMgmtRecdObjLastChangedAt` | `ObjMgmtRecdObjLastChangedAt` |
| `ObjMgmtRecdObjLastChangedBy` | `ObjMgmtRecdObjLastChangedBy` |
| `ObjMgmtRecdObjIsLockedForChg` | `ObjMgmtRecdObjIsLockedForChg` |
| `ObjMgmtRecdObjIsBaselined` | `ObjMgmtRecdObjIsBaselined` |
| `ObjMgmtRecdObjIsPlanned` | `ObjMgmtRecdObjIsPlanned` |
| `ChgNmbrAlternativeDateCounter` | `ChgNmbrAlternativeDateCounter` |
| `ChangeNumberLastChgdDateTime` | `ChangeNumberLastChgdDateTime` |
| `_ChangeMaster` | *Association* |
| `_ChangeMasterAltDate` | *Association* |

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

@EndUserText.label: 'Change Number Object Management Record Material BOM TP'
define view entity I_ChgMstrObMgReMatlBOMTP_2
  as projection on I_ChangeMstrObMgReMatlBOMTP
{
  key ChangeNumber,
  key Material,
  key Plant,
  key BillOfMaterialVariantUsage,

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
      ObjMgmtRecdObjIsBaselined,
      @Semantics.booleanIndicator: true
      ObjMgmtRecdObjIsPlanned,

      @Consumption.hidden: true
      ChgNmbrAlternativeDateCounter,

      // for ETag handling
      ChangeNumberLastChgdDateTime,

      /* Associations */
      _ChangeMaster        : redirected to parent I_ChangeMasterTP_2,
      _ChangeMasterAltDate : redirected to I_ChangeMasterAltDateTP_2
}
```
