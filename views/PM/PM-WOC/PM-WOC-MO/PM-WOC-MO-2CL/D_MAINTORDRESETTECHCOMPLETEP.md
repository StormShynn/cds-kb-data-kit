---
name: D_MAINTORDRESETTECHCOMPLETEP
description: "D Maintordresettechcompletep"
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MO
  - component:PM-WOC-MO-2CL
  - lob:Plant Maintenance
---
# D_MAINTORDRESETTECHCOMPLETEP

**D Maintordresettechcompletep**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AssgdMaintNotifIsToBePutInProc` |  | |  | `abap_boolean` |  |  |

## Source Code

```abap
@EndUserText.label: 'MaintOrder ResetTechCompl Parameters'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]

define abstract entity D_MaintOrdResetTechCompleteP
{
  @EndUserText.label             : 'Put Assigned Notifications In Process Again'
  AssgdMaintNotifIsToBePutInProc : abap_boolean;

}
```
