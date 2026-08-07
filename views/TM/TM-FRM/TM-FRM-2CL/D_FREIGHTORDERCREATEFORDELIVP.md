---
name: D_FREIGHTORDERCREATEFORDELIVP
description: D Freightordercreatefordelivp
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
# D_FREIGHTORDERCREATEFORDELIVP

**D Freightordercreatefordelivp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `TransportationOrderType` |  | |  | `/scmtms/tor_type` |

## Source Code

```abap
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE]
@EndUserText.label: 'FreightOrderCreateForDeliv Act Param'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_FreightOrderCreateForDelivP
{
  TransportationOrderType : /scmtms/tor_type; 
  _FreightBookingItems    : association [0..*] to D_FreightOrdCrteForDelivItmP on 1 = 0; 
}
```
