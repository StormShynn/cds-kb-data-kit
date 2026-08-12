---
name: D_TRANSPORDASSIGNFRTUNITP
description: "D Transpordassignfrtunitp"
app_component: TM-FRM-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRM
  - transactional-processing
  - component:TM-FRM-2CL
  - lob:Other
---
# D_TRANSPORDASSIGNFRTUNITP

**D Transpordassignfrtunitp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `/scmtms/toritmuuid` |  | |  | `key TransportationOrderItemUUID : /scmtms/toritmuuid` |  |  |
| `D_FreightUnitAssignParameter` |  | |  | `_FreightUnits : composition [0..*] of D_FreightUnitAssignParameter` |  |  |

## Source Code

```abap
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE]
@EndUserText.label: 'AssignFreightUnit Action Parameter'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_TranspOrdAssignFrtUnitP
{
  key TransportationOrderItemUUID : /scmtms/toritmuuid;
      _FreightUnits               : composition [0..*] of D_FreightUnitAssignParameter;
}
```
