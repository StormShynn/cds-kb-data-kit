---
name: D_PROCESSORDERRELEASEP
description: D Processorderreleasep
app_component: PP-PI-POR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-PI
  - PP-PI-POR
  - lease
  - component:PP-PI-POR-2CL
  - lob:Manufacturing
---
# D_PROCESSORDERRELEASEP

**D Processorderreleasep**

| Property | Value |
|---|---|
| App Component | `PP-PI-POR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `OrdRelIsPmtdDsptMisgParts` | `abap_boolean` |

## Source Code

```abap
@EndUserText.label: 'Release Process Order Parameter'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define abstract entity D_ProcessOrderReleaseP
{
  OrdRelIsPmtdDsptMisgParts : abap_boolean;
}
```
