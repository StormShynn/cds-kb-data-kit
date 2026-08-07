---
name: D_MSRGPTCANCELMSMTRDNGP
description: D Msrgptcancelmsmtrdngp
app_component: PM-EQM-SF-MPC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-SF
  - component:PM-EQM-SF-MPC-2CL
  - lob:Plant Maintenance
---
# D_MSRGPTCANCELMSMTRDNGP

**D Msrgptcancelmsmtrdngp**

| Property | Value |
|---|---|
| App Component | `PM-EQM-SF-MPC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MsmtRdngIntervalEndDate` |  | |  | `imrc_idate` |  |  |
| `MsmtRdngIntervalEndTime` |  | |  | `imrc_itime` |  |  |

## Source Code

```abap
@EndUserText.label: 'Stop Measurement Reading Transfer'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
define abstract entity D_MsrgPtCancelMsmtRdngP
 {
   MsmtRdngIntervalEndDate   : imrc_idate;
   MsmtRdngIntervalEndTime   : imrc_itime;  
}
```
