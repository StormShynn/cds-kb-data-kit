---
name: D_MSRGPTTRANSFERMSMTRDNGP
description: "D Msrgpttransfermsmtrdngp"
app_component: PM-EQM-SF-MPC-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
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
# D_MSRGPTTRANSFERMSMTRDNGP

**D Msrgpttransfermsmtrdngp**

| Property | Value |
|---|---|
| App Component | `PM-EQM-SF-MPC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MsmtRdngIntervalStartDate` |  | |  | `imrc_idat1` |  |  |
| `MsmtRdngIntervalStartTime` |  | |  | `imrc_itim1` |  |  |
| `MsmtRdngIntervalEndDate` |  | |  | `imrc_idate` |  |  |
| `MsmtRdngIntervalEndTime` |  | |  | `imrc_itime` |  |  |
| `MsmtRdngSourceMeasuringPoint` |  | |  | `imrc_trans` |  |  |
| `MsmtRdngTransferMode` |  | |  | `imrc_modtr` |  |  |

## Source Code

```abap
@EndUserText.label: 'Transfer Measurement Reading'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
define abstract entity D_MsrgPtTransferMsmtRdngP
{

  MsmtRdngIntervalStartDate    : imrc_idat1;
  MsmtRdngIntervalStartTime    : imrc_itim1;
  MsmtRdngIntervalEndDate      : imrc_idate;
  MsmtRdngIntervalEndTime      : imrc_itime;
  MsmtRdngSourceMeasuringPoint : imrc_trans;
  MsmtRdngTransferMode         : imrc_modtr;
}
```
