---
name: D_MAINTORDCONFIRMATIONCANCELP
description: D Maintordconfirmationcancelp
app_component: PM-WOC-JC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-JC
  - component:PM-WOC-JC-2CL
  - lob:Plant Maintenance
---
# D_MAINTORDCONFIRMATIONCANCELP

**D Maintordconfirmationcancelp**

| Property | Value |
|---|---|
| App Component | `PM-WOC-JC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `MaintOrderConfLongText` | `esh_e_sr_longtext` |

## Source Code

```abap
@EndUserText.label: 'Maintenance Order Cancel Confirmation'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_MaintOrdConfirmationCancelP 
{

MaintOrderConfLongText : esh_e_sr_longtext; 
}
```
