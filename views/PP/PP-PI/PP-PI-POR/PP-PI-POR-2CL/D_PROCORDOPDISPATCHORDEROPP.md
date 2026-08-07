---
name: D_PROCORDOPDISPATCHORDEROPP
description: D Procordopdispatchorderopp
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
  - component:PP-PI-POR-2CL
  - lob:Manufacturing
---
# D_PROCORDOPDISPATCHORDEROPP

**D Procordopdispatchorderopp**

| Property | Value |
|---|---|
| App Component | `PP-PI-POR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SchedulingType` |  | |  | `ppopdispatchschedulingtype` |  |  |
| `OperationDispatchDate` |  | |  | `dats` |  |  |
| `OperationDispatchTime` |  | |  | `tims` |  |  |

## Source Code

```abap
@EndUserText.label: 'DispatchOrderOperation Proc Order Param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define abstract entity D_ProcOrdOpDispatchOrderOpP
{
  SchedulingType        : ppopdispatchschedulingtype;
  OperationDispatchDate : abap.dats;
  OperationDispatchTime : abap.tims;
}
```
