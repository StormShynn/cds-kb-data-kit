---
name: D_MP_STR_FUNCIMPORTP
description: D MP Str Funcimportp
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
  - transactional-processing
  - component:PM-EQM-SF-MPC-2CL
  - lob:Plant Maintenance
---
# D_MP_STR_FUNCIMPORTP

**D MP Str Funcimportp**

| Property | Value |
|---|---|
| App Component | `PM-EQM-SF-MPC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MeasuringPointCategory` |  | |  | `imrc_mptyp` |  |  |

## Source Code

```abap
@EndUserText.label: 'Update Msrgpt Structure'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
define abstract entity D_Mp_Str_FuncImportP  {

     MeasuringPointCategory : imrc_mptyp;
    
}
```
