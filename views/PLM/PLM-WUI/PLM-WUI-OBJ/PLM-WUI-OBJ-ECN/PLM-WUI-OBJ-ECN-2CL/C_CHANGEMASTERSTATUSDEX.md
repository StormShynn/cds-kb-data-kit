---
name: C_CHANGEMASTERSTATUSDEX
description: Change MasterERSTATUSDEX
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
  - consumption-view
  - data-extraction
  - change-master
  - status
  - component:PLM-WUI-OBJ-ECN-2CL
  - lob:Other
---
# C_CHANGEMASTERSTATUSDEX

**Change MasterERSTATUSDEX**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-ECN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ChangeNumberStatus` | ✓ | |  |  |
| `ChangeIsAllowed` |  | |  |  |
| `DateChangeIsAllowed` |  | |  |  |
| `DistributionIsLocked` |  | |  |  |
| `_Text` | | ✓ | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #CONSUMPTION
@EndUserText.label: 'Change Master Status'
@ObjectModel.representativeKey: 'ChangeNumberStatus'
@ObjectModel.semanticKey: [ 'ChangeNumberStatus' ]
@ObjectModel.sapObjectNodeType.name: 'ChangeMasterStatus'
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #ANALYTICAL_DIMENSION,
                                      #EXTRACTION_DATA_SOURCE ]

@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@Analytics:{
    dataCategory: #DIMENSION,
    internalName:#LOCAL,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
          mapping:
          [ { table: 'T419S',
              role: #MAIN,
              viewElement: ['ChangeNumberStatus'],
              tableElement: ['AENST'] }
          ]
        }
    }
}

define view entity C_ChangeMasterStatusDEX
  as select from I_ChangeMasterStatus
{
  key ChangeNumberStatus,
      @Semantics.booleanIndicator: true
      ChangeIsAllowed,
      @Semantics.booleanIndicator: true
      DateChangeIsAllowed,
      @Semantics.booleanIndicator: true
      DistributionIsLocked,
      /* Associations */
      _Text
}
```
