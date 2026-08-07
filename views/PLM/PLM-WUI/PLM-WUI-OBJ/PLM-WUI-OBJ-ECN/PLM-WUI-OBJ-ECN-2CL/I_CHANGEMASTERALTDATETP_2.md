---
name: I_CHANGEMASTERALTDATETP_2
description: "Change MasterERALTDATETP 2"
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
# I_CHANGEMASTERALTDATETP_2

**Change MasterERALTDATETP 2**

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
| `ChgNmbrAlternativeDateID` | ✓ | |  |  |  |  |
| `ChgNmbrAlternativeDate` |  | |  |  |  |  |
| `ChgNmbrAltvDateIsAssignedToObj` |  | |  |  |  |  |
| `ChgNmbrAlternativeDateCounter` |  | |  |  |  |  |
| `ChangeNumberLastChgdDateTime` |  | |  |  |  |  |
| `_ChangeMaster` | | ✓ | | | | |

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

@EndUserText.label: 'Change Number Alternative Data Transactional Processing'
define view entity I_ChangeMasterAltDateTP_2
  as projection on I_ChangeMasterAltDateTP
{
  key ChangeNumber,
  key ChgNmbrAlternativeDateID,

      ChgNmbrAlternativeDate,
      ChgNmbrAltvDateIsAssignedToObj,

      @Consumption.hidden: true
      ChgNmbrAlternativeDateCounter,

      // for ETag handling
      ChangeNumberLastChgdDateTime,

      //_ChangeMaster,
      _ChangeMaster : redirected to parent I_ChangeMasterTP_2
}
```
