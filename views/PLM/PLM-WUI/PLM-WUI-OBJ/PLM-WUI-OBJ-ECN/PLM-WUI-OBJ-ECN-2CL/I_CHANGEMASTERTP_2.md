---
name: I_CHANGEMASTERTP_2
description: "Change MasterERTP 2"
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
  - change-master
  - component:PLM-WUI-OBJ-ECN-2CL
  - lob:Other
---
# I_CHANGEMASTERTP_2

**Change MasterERTP 2**

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
| `ChangeNumberStatus` |  | |  |  |  |  |
| `AuthorizationGroup` |  | |  |  |  |  |
| `ChangeNumberFunction` |  | |  |  |  |  |
| `IsTechnicallyReleased` |  | |  |  |  |  |
| `ChangeNumberReleaseKey` |  | |  |  |  |  |
| `ReasonForChangeText` |  | |  |  |  |  |
| `ChangeNumberDescription` |  | |  |  |  |  |
| `ChangeNumberValidFromDate` |  | |  |  |  |  |
| `ChangeNumberCreationDate` |  | |  |  |  |  |
| `ChangeNumberCreatedByUser` |  | |  |  |  |  |
| `ChangeNumberLastChangedDate` |  | |  |  |  |  |
| `ChangeNumberLastChangedByUser` |  | |  |  |  |  |
| `IsUsedForDataDefinition` |  | |  |  |  |  |
| `ChangeNumberIsMrkdForDeletion` |  | |  |  |  |  |
| `ChangeNumberLastChgdDateTime` |  | |  |  |  |  |
| `_ChangeNumberStatus` | | ✓ | | | | |
| `_AlternativeDate` | | ✓ | | | | |
| `_ObjTypeAssignment` | | ✓ | | | | |
| `_ChangeMstrObjectMgmtRecord` | | ✓ | | | | |
| `_ChangeMstrObMgReMaterial` | | ✓ | | | | |
| `_ChangeMstrObMgReMatlBOM` | | ✓ | | | | |
| `_ChangeMstrObMgReDocInfoRecd` | | ✓ | | | | |
| `_LogAccMObjectTypeActive` | | ✓ | | | | |
| `_LogAccMObjectUserAuthzn` | | ✓ | | | | |
| `_LogAccMObjSecureIDAssgmt` | | ✓ | | | | |
| `_ChangeMasterLogAccMActive` | | ✓ | | | | |
| `_ChgMstrLogAccMSecureIDAssgmt` | | ✓ | | | | |
| `_ChangeMstrLogAccMUserAuthzn` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.representativeKey: 'ChangeNumber'
@ObjectModel.sapObjectNodeType.name: 'ChangeMaster'
@ObjectModel.semanticKey: [ 'ChangeNumber' ]
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #MASTER

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@EndUserText.label: 'Change Number Transactional Processing'
define root view entity I_ChangeMasterTP_2
  provider contract transactional_interface
  as projection on I_ChangeMasterTP
{
  key ChangeNumber,

      ChangeNumberStatus,

      AuthorizationGroup,

      ChangeNumberFunction,
      @Semantics.booleanIndicator: true
      IsTechnicallyReleased,

      ChangeNumberReleaseKey,
      ReasonForChangeText,
      ChangeNumberDescription,
      ChangeNumberValidFromDate,

      ChangeNumberCreationDate,

      ChangeNumberCreatedByUser,

      ChangeNumberLastChangedDate,

      ChangeNumberLastChangedByUser,

      IsUsedForDataDefinition,

      ChangeNumberIsMrkdForDeletion,

      ChangeNumberLastChgdDateTime,

      _ChangeNumberStatus,
      _AlternativeDate             : redirected to composition child I_ChangeMasterAltDateTP_2,
      _ObjTypeAssignment           : redirected to composition child I_ChgMstrObjTypeAssgmtTP_2,
      _ChangeMstrObjectMgmtRecord  : redirected to composition child I_ChgMstrObjectMgmtRecordTP_2,
      _ChangeMstrObMgReMaterial    : redirected to composition child I_ChgMstrObMgReMaterialTP_2,
      _ChangeMstrObMgReMatlBOM     : redirected to composition child I_ChgMstrObMgReMatlBOMTP_2,
      _ChangeMstrObMgReDocInfoRecd : redirected to composition child I_ChgMstrObMgReDocInfoRecdTP_2,

      // Access Control Management non C1 released, not used in DCL anymore
      @Consumption.hidden:true
      _LogAccMObjectTypeActive,
      @Consumption.hidden:true
      _LogAccMObjectUserAuthzn,
      @Consumption.hidden:true
      _LogAccMObjSecureIDAssgmt,

      // Access Control Management C1 released, used in DCL
      @Consumption.hidden:true
      _ChangeMasterLogAccMActive,
      @Consumption.hidden:true
      _ChgMstrLogAccMSecureIDAssgmt,
      @Consumption.hidden:true
      _ChangeMstrLogAccMUserAuthzn
}
```
