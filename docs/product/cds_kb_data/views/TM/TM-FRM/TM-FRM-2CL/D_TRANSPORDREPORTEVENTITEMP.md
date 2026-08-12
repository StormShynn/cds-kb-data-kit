---
name: D_TRANSPORDREPORTEVENTITEMP
description: "D Transpordreporteventitemp"
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
  - item-level
  - component:TM-FRM-2CL
  - lob:Other
---
# D_TRANSPORDREPORTEVENTITEMP

**D Transpordreporteventitemp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationOrderItemUUID` |  | |  | `/scmtms/toritmuuid` |  |  |

## Source Code

```abap
@EndUserText.label: 'Report Event Action Item Parameter'
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_TranspOrdReportEventItemP
{
   TransportationOrderItemUUID : /scmtms/toritmuuid;
}
```
