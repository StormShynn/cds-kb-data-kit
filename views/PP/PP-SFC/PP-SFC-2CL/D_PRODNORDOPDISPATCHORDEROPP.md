---
name: D_PRODNORDOPDISPATCHORDEROPP
description: D Prodnordopdispatchorderopp
app_component: PP-SFC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-SFC
  - component:PP-SFC-2CL
  - lob:Manufacturing
---
# D_PRODNORDOPDISPATCHORDEROPP

**D Prodnordopdispatchorderopp**

| Property | Value |
|---|---|
| App Component | `PP-SFC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SchedulingType` |  | |  | `ppopdispatchschedulingtype` |
| `OperationDispatchDate` |  | |  | `dats` |
| `OperationDispatchTime` |  | |  | `tims` |

## Source Code

```abap
@EndUserText.label: 'DispatchOrderOperation Prodn Order Param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define root abstract entity D_ProdnOrdOpDispatchOrderOpP
{
  SchedulingType        : ppopdispatchschedulingtype;
  OperationDispatchDate : abap.dats;
  OperationDispatchTime : abap.tims;
}
```
