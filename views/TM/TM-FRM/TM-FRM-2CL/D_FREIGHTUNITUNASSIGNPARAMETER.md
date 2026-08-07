---
name: D_FREIGHTUNITUNASSIGNPARAMETER
description: D Freightunitunassignparameter
app_component: TM-FRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRM
  - freight
  - component:TM-FRM-2CL
  - lob:Other
---
# D_FREIGHTUNITUNASSIGNPARAMETER

**D Freightunitunassignparameter**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `/scmtms/vdm_freight_unit_uuid` |  | |  | `key FreightUnitUUID : /scmtms/vdm_freight_unit_uuid` |
| `_Parent` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Freight Unit Assign Parameter'
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_FreightUnitUnassignParameter
{
  key FreightUnitUUID             : /scmtms/vdm_freight_unit_uuid;
//  key TransportationOrderItemUUID : /scmtms/toritmuuid;
      _Parent                     : association to parent D_TranspOrdUnassignFrtUnitP on _Parent.FreightUnitUUID = $projection.FreightUnitUUID;
}
```
