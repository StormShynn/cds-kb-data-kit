---
name: D_MAINTORDERSTATUSCLOSEDP
description: D Maintorderstatusclosedp
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
  - status
  - component:PM-WOC-MO-2CL
  - lob:Plant Maintenance
---
# D_MAINTORDERSTATUSCLOSEDP

**D Maintorderstatusclosedp**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `MaintOrderReferenceDateTime` |  | |  | `timestamp` |
| `AssignedMaintNotifIsToBeClosed` |  | |  | `abap_boolean` |

## Source Code

```abap
@EndUserText.label: 'Maintenance Order Closed Parameters'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]

define abstract entity D_MaintOrderStatusClosedP
{
  @EndUserText.label             : 'Completion Date/Time'
  //@ObjectModel.mandatory         : true //incompatable changes for public API
  MaintOrderReferenceDateTime    : timestamp;
  @EndUserText.label             : 'Complete Assigned Notifications'
  AssignedMaintNotifIsToBeClosed : abap_boolean;

}
```
