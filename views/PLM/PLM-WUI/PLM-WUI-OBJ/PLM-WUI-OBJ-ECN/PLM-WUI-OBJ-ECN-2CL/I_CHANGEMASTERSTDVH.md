---
name: I_CHANGEMASTERSTDVH
description: Change MasterERSTDVH
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
  - value-help
  - standard-value-help
  - change-master
  - component:PLM-WUI-OBJ-ECN-2CL
  - lob:Other
---
# I_CHANGEMASTERSTDVH

**Change MasterERSTDVH**

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
| `ChangeNumberDescription` |  | |  |  |  |  |
| `AuthorizationGroup` |  | |  |  |  |  |
| `ChangeNumberFunction` |  | |  |  |  |  |
| `ChangeNumberReleaseKey` |  | |  |  |  |  |
| `ChangeNumberStatus` |  | |  |  |  |  |
| `ChangeNumberIsMrkdForDeletion` |  | |  |  |  |  |
| `ChangeNumberValidFromDate` |  | |  |  |  |  |
| `_LogAccMObjectTypeActive` | | ✓ | | | | |
| `_LogAccMObjectUserAuthzn` | | ✓ | | | | |
| `_LogAccMObjSecureIDAssgmt` | | ✓ | | | | |
| `_ChangeMasterLogAccMActive` | | ✓ | | | | |
| `_ChgMstrLogAccMSecureIDAssgmt` | | ✓ | | | | |
| `_ChangeMstrLogAccMUserAuthzn` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: [
  '_LogAccMObjectTypeActive'  ,
  '_LogAccMObjectUserAuthzn'  ,
  '_LogAccMObjSecureIDAssgmt'  ]

@Consumption.ranked: true

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'ICHANGEMASTR_SVH'
@ObjectModel.representativeKey: 'ChangeNumber'

@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER

@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #MASTER

@Search.searchable: true

@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API

@EndUserText.label: 'Change Number'
define view entity I_ChangeMasterStdVH
  as select from I_ChangeMaster
{
      @ObjectModel.text.element: ['ChangeNumberDescription']

      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
  key ChangeNumber,

      @Search.defaultSearchElement: true
      @Search.ranking: #LOW
      @Search.fuzzinessThreshold: 0.8
      ChangeNumberDescription,
      @Search.ranking: #LOW
      AuthorizationGroup,
      @Consumption.hidden: true
      ChangeNumberFunction,
      @Search.ranking: #LOW
      ChangeNumberReleaseKey,
      @Search.ranking: #LOW
      ChangeNumberStatus,
      @Search.ranking: #LOW
      ChangeNumberIsMrkdForDeletion,
      @Search.ranking: #LOW
      ChangeNumberValidFromDate,

      // Access Control Management
      @Consumption.hidden:true
      _LogAccMObjectTypeActive,
      @Consumption.hidden:true
      _LogAccMObjectUserAuthzn,
      @Consumption.hidden:true
      _LogAccMObjSecureIDAssgmt,

      @Consumption.hidden:true
      _ChangeMasterLogAccMActive,
      @Consumption.hidden:true
      _ChgMstrLogAccMSecureIDAssgmt,
      @Consumption.hidden:true
      _ChangeMstrLogAccMUserAuthzn
}
```
