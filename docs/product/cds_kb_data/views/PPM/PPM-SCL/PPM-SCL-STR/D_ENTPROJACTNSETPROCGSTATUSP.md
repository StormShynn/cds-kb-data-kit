---
name: D_ENTPROJACTNSETPROCGSTATUSP
description: "D Entprojactnsetprocgstatusp"
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-STR
  - status
  - component:PPM-SCL-STR
  - lob:Other
---
# D_ENTPROJACTNSETPROCGSTATUSP

**D Entprojactnsetprocgstatusp**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProcessingStatus` |  | |  | `dpr_tv_proc_status_sup` |  |  |

## Source Code

```abap
@EndUserText.label: 'Enterprise Project Action set processing status'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
define abstract entity D_EntProjActnSetProcgStatusP
{
  ProcessingStatus : dpr_tv_proc_status_sup;
}
```
