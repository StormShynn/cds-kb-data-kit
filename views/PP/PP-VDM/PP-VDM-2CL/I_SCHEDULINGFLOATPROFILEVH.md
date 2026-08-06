---
name: I_SCHEDULINGFLOATPROFILEVH
description: Schedulingfloatprofilevh
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - value-help
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_SCHEDULINGFLOATPROFILEVH

**Schedulingfloatprofilevh**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Plant` | `Plant` |
| key `SchedulingFloatProfile` | `SchedulingFloatProfile` |
| `_Plant` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'SchedulingFloatProfile'
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER]
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #MASTER}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Scheduling Float Profile'

define view entity I_SchedulingFloatProfileVH
    as select from I_SchedulingFloatProfile
{
      // Key
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
  key Plant,
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key SchedulingFloatProfile,

      // Associations
      @Consumption.hidden: true
      _Plant
};
```
