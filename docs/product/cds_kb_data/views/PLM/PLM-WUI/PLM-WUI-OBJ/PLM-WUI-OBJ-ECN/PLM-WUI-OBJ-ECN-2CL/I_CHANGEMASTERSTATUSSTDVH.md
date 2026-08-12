---
name: I_CHANGEMASTERSTATUSSTDVH
description: "Change MasterERSTATUSSTDVH"
app_component: PLM-WUI-OBJ-ECN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
  - status
  - component:PLM-WUI-OBJ-ECN-2CL
  - lob:Other
---
# I_CHANGEMASTERSTATUSSTDVH

**Change MasterERSTATUSSTDVH**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-ECN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeNumberStatus` | ✓ | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_Text']

@Consumption.ranked: true

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'IECNSTATUS_SVH'
@ObjectModel.representativeKey: 'ChangeNumberStatus'

@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]

@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.resultSet.sizeCategory: #XS

@Search.searchable: true

@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API

@EndUserText.label: 'Change Number Status'
define view entity I_ChangeMasterStatusStdVH
  as select from I_ChangeMasterStatus
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key ChangeNumberStatus,
  
      _Text
}
```
