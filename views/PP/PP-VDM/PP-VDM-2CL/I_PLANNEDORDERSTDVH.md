---
name: I_PLANNEDORDERSTDVH
description: Planned OrderSTDVH
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
  - standard-value-help
  - planned-order
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_PLANNEDORDERSTDVH

**Planned OrderSTDVH**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PlannedOrder` | ✓ | |  |  |  |  |
| `MRPController` |  | |  |  |  |  |
| `MRPPlant` |  | |  |  |  |  |

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'IPO__VH'
@ObjectModel.modelingPattern: #NONE
@ObjectModel.representativeKey: 'PlannedOrder'
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY]
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED

@Search.searchable: true
@Consumption.ranked: true

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Planned Order'

define view entity I_PlannedOrderStdVH as select from I_PlannedOrder {
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  @Search.fuzzinessThreshold: 0.8
  key PlannedOrder,

  @Consumption.hidden: true
  MRPController,
  @Consumption.hidden: true
  MRPPlant
};
```
