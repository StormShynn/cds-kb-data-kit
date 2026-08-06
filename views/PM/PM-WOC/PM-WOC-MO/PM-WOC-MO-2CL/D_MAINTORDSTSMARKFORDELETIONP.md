---
name: D_MAINTORDSTSMARKFORDELETIONP
description: D Maintordstsmarkfordeletionp
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
# D_MAINTORDSTSMARKFORDELETIONP

**D Maintordstsmarkfordeletionp**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `AssgdMaintNotifIsToBeSetDel` | `abap_boolean` |

## Source Code

```abap
@EndUserText.label: 'Maintenance Order SetDelFlag Parameters'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]

define abstract entity D_MaintOrdStsMarkForDeletionP
{
  @EndUserText.label          : 'Also set the deletion flag for the assigned notifications'
  @Semantics.booleanIndicator : true
  AssgdMaintNotifIsToBeSetDel : abap_boolean;
}
```
