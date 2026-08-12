---
name: D_VARCONFIGNTBLCNTNTRTRVBYKDTP
description: "D Varconfigntblcntntrtrvbykdtp"
app_component: LO-VCH-API-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-VCH
  - LO-VCH-API
  - transactional-processing
  - component:LO-VCH-API-2CL
  - lob:Logistics General
---
# D_VARCONFIGNTBLCNTNTRTRVBYKDTP

**D Varconfigntblcntntrtrvbykdtp**

| Property | Value |
|---|---|
| App Component | `LO-VCH-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `KeyDate` |  | |  | `vdm_v_key_date` |  |  |

## Source Code

```abap
@EndUserText.label: 'Abs. Entity for Content Read by Key Date'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_VarConfignTblCntntRtrvByKDtP
{
  KeyDate : vdm_v_key_date;
}
```
