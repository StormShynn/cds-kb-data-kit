---
name: I_CAPACITYREQUIREMENTSTDVH
description: "Capacityrequirementstdvh"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - value-help
  - standard-value-help
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_CAPACITYREQUIREMENTSTDVH

**Capacityrequirementstdvh**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CapacityRequirement` | ✓ | |  |  |  |  |

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'ICR__VH'
@ObjectModel.modelingPattern: #NONE
@ObjectModel.representativeKey: 'CapacityRequirement'
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY]
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL

@AccessControl.authorizationCheck: #MANDATORY

@Search.searchable: true
@Consumption.ranked: true

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Capacity Requirement Header'
define view entity I_CapacityRequirementStdVH as select from I_CapacityRequirement {
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  @Search.fuzzinessThreshold: 0.90
  key CapacityRequirement
};
```
