---
name: I_CHGMSTROBJTYPEASSGMTTP_2
description: Chgmstrobjtypeassgmttp 2
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
# I_CHGMSTROBJTYPEASSGMTTP_2

**Chgmstrobjtypeassgmttp 2**

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
| `ChangeNumberObjectType` | ✓ | |  |  |
| `SAPObjectType` | ✓ | |  |  |
| `IsActiveForChangeNumber` |  | |  |  |
| `IsLockedForChanges` |  | |  |  |
| `IsPartiallyDisplayed` |  | |  |  |
| `ObjMgmtRecdIsRequired` |  | |  |  |
| `ObjMgmtRecdIsGenerated` |  | |  |  |
| `ObjMgmtRecdIsAutomlyCrted` |  | |  |  |
| `ObjMgmtRecdIsAutomlyCrtedByDlg` |  | |  |  |
| `ObjectTypeCreationDate` |  | |  |  |
| `ObjectTypeCreatedByUser` |  | |  |  |
| `ObjectTypeLastChangedDate` |  | |  |  |
| `ObjectTypeLastChangedByUser` |  | |  |  |
| `ChangeNumberLastChgdDateTime` |  | |  |  |
| `_ChangeMaster` | | ✓ | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #MASTER

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@EndUserText.label: 'Change Number Object Type Assignment TP'
define view entity I_ChgMstrObjTypeAssgmtTP_2
  as projection on I_ChangeMasterObjTypeAssgmtTP
{
  key ChangeNumber,
  @Consumption.hidden: true
  key ChangeNumberObjectType,
  key SAPObjectType,

      IsActiveForChangeNumber,
      @Semantics.booleanIndicator: true
      IsLockedForChanges,
      @Semantics.booleanIndicator: true
      IsPartiallyDisplayed,

      ObjMgmtRecdIsRequired,
      ObjMgmtRecdIsGenerated,
      ObjMgmtRecdIsAutomlyCrted,
      ObjMgmtRecdIsAutomlyCrtedByDlg,

      ObjectTypeCreationDate,
      ObjectTypeCreatedByUser,
      ObjectTypeLastChangedDate,
      ObjectTypeLastChangedByUser,

      // for ETag handling
      ChangeNumberLastChgdDateTime,

      _ChangeMaster : redirected to parent I_ChangeMasterTP_2
}
```
