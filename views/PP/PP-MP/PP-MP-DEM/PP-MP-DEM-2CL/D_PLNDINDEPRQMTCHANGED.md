---
name: D_PLNDINDEPRQMTCHANGED
description: D Plndindeprqmtchanged
app_component: PP-MP-DEM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-MP
  - PP-MP-DEM
  - component:PP-MP-DEM-2CL
  - lob:Manufacturing
---
# D_PLNDINDEPRQMTCHANGED

**D Plndindeprqmtchanged**

| Property | Value |
|---|---|
| App Component | `PP-MP-DEM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `PlndIndepRqmtCllgAppl` |  | |  | `pph_pir_calling_appl` |
| `PlndIndepRqmtLastChangedBy` |  | |  | `aenam` |

## Source Code

```abap
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.sapObjectNodeType.name: 'PlannedIndependentRequirement'
@Metadata.allowExtensions: true
@EndUserText.label: 'Planned Independent Requirement Changed'
define abstract entity D_PlndIndepRqmtChanged
{
  PlndIndepRqmtCllgAppl      : pph_pir_calling_appl;
  PlndIndepRqmtLastChangedBy : aenam;
}
```
