---
name: C_CHANGEMASTERDEX_2
description: "Change MasterERDEX 2"
app_component: PLM-WUI-OBJ-ECN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PLM
  - PLM-WUI
  - PLM-WUI-OBJ
  - consumption-view
  - data-extraction
  - change-master
  - component:PLM-WUI-OBJ-ECN-2CL
  - lob:Other
---
# C_CHANGEMASTERDEX_2

**Change MasterERDEX 2**

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
| `ChangeNumberReleaseKey` |  | |  |  |  |  |
| `ReasonForChangeText` |  | |  |  |  |  |
| `ChangeNumberDescription` |  | |  |  |  |  |
| `LeadingChangeNumber` |  | | `_LeadingChangeNumber` | `PackageChangeNumber` |  |  |
| `ChangeNumberValidFromDate` |  | |  |  |  |  |
| `ChangeNumberCreationDate` |  | |  |  |  |  |
| `ChangeNumberCreatedByUser` |  | |  |  |  |  |
| `ChangeNumberLastChangedDate` |  | |  |  |  |  |
| `ChangeNumberLastChangedByUser` |  | |  |  |  |  |
| `ChangeNumberLastChgdDateTime` |  | |  |  |  |  |
| `IsTechnicallyReleased` |  | |  |  |  |  |
| `IsUsedForDataDefinition` |  | |  |  |  |  |
| `ChangeNumberIsMrkdForDeletion` |  | |  |  |  |  |
| `IsGloballyReleased` |  | | `_ChangeNumberReleaseKey` | `IsGloballyReleased` |  |  |
| `IsReleasedForCosting` |  | | `_ChangeNumberReleaseKey` | `IsReleasedForCosting` |  |  |
| `IsReleasedForPlanning` |  | | `_ChangeNumberReleaseKey` | `IsReleasedForPlanning` |  |  |
| `IsReleasedForProduction` |  | | `_ChangeNumberReleaseKey` | `IsReleasedForProduction` |  |  |
| `IsReleasedForSimulation` |  | | `_ChangeNumberReleaseKey` | `IsReleasedForSimulation` |  |  |
| `IsDateShiftCreatedOCMPresel` |  | | `_ChangeNumberReleaseKey` | `IsDateShiftCreatedOCMPresel` |  |  |
| `IsReleaseKeyCreatedOCMPresel` |  | | `_ChangeNumberReleaseKey` | `IsReleaseKeyCreatedOCMPresel` |  |  |
| `ChangeIsAllowed` |  | | `_ChangeNumberStatus` | `ChangeIsAllowed` |  |  |
| `DateChangeIsAllowed` |  | | `_ChangeNumberStatus` | `DateChangeIsAllowed` |  |  |
| `DistributionIsLocked` |  | | `_ChangeNumberStatus` | `DistributionIsLocked` |  |  |
| `_ChangeMstrObjMgmtRecord` | | ✓ | | | | |
| `_ChangeNumberStatus` | | ✓ | | | | |
| `_ChangeNumberFunction` | | ✓ | | | | |
| `_ChangeNumberReleaseKey` | | ✓ | | | | |
| `_LeadingChangeNumber` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ChangeMstrObjMgmtRecord` | `C_ChangeMstrObjMgmtRecordDEX` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #ANALYTICAL_DIMENSION,
                                      #SQL_DATA_SOURCE, 
                                      #EXTRACTION_DATA_SOURCE ]
                       
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'ChangeNumber'
@ObjectModel.sapObjectNodeType.name: 'ChangeMaster'
@ObjectModel.usageType:{
    serviceQuality: #D,
    sizeCategory: #L,
    dataClass: #MASTER
}

@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
          mapping:
          [ { table: 'aenr',
              role: #MAIN,
              viewElement: ['ChangeNumber'],
              tableElement: ['AENNR'] }
          ]
        }
    }
}
@VDM.viewType: #CONSUMPTION
@EndUserText.label: 'Engineering Change Master'
define view entity C_ChangeMasterDEX_2
  as select from I_ChangeMaster
   association [0..*] to C_ChangeMstrObjMgmtRecordDEX as _ChangeMstrObjMgmtRecord on  $projection.ChangeNumber = _ChangeMstrObjMgmtRecord.ChangeNumber
{
  key ChangeNumber,
      @ObjectModel.foreignKey.association: '_ChangeNumberStatus'
      ChangeNumberStatus,
      AuthorizationGroup,
      ChangeNumberFunction,
      ChangeNumberReleaseKey,
      @Semantics.text: true
      ReasonForChangeText,
      @Semantics.text: true
      ChangeNumberDescription,
      _LeadingChangeNumber.PackageChangeNumber as LeadingChangeNumber,
      @Semantics.businessDate.at: true
      ChangeNumberValidFromDate,
      @Semantics.systemDate.createdAt: true
      ChangeNumberCreationDate,
      @Semantics.user.createdBy: true
      ChangeNumberCreatedByUser,
      @Semantics.systemDate.lastChangedAt: true
      ChangeNumberLastChangedDate,
      @Semantics.user.lastChangedBy: true
      ChangeNumberLastChangedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      ChangeNumberLastChgdDateTime,
      @Semantics.booleanIndicator: true
      IsTechnicallyReleased,
      @Semantics.booleanIndicator: true
      IsUsedForDataDefinition,
      @Semantics.booleanIndicator: true
      ChangeNumberIsMrkdForDeletion,
      @Semantics.booleanIndicator: true
      _ChangeNumberReleaseKey.IsGloballyReleased,
      @Semantics.booleanIndicator: true
      _ChangeNumberReleaseKey.IsReleasedForCosting,
      @Semantics.booleanIndicator: true
      _ChangeNumberReleaseKey.IsReleasedForPlanning,
      @Semantics.booleanIndicator: true
      _ChangeNumberReleaseKey.IsReleasedForProduction,
      @Semantics.booleanIndicator: true
      _ChangeNumberReleaseKey.IsReleasedForSimulation,
      @Semantics.booleanIndicator: true
      _ChangeNumberReleaseKey.IsDateShiftCreatedOCMPresel,
      @Semantics.booleanIndicator: true
      _ChangeNumberReleaseKey.IsReleaseKeyCreatedOCMPresel,
      @Semantics.booleanIndicator: true
      _ChangeNumberStatus.ChangeIsAllowed,
      @Semantics.booleanIndicator: true
      _ChangeNumberStatus.DateChangeIsAllowed,
      @Semantics.booleanIndicator: true
      _ChangeNumberStatus.DistributionIsLocked,

      _ChangeNumberStatus,
      _ChangeNumberFunction,
      _ChangeNumberReleaseKey,
      _LeadingChangeNumber,
      _ChangeMstrObjMgmtRecord,
      _CreatedByUser,
      _LastChangedByUser

}
```
