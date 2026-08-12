---
name: I_PLANNINGSTRATEGYGROUPVH
description: "Planningstrategygroupvh"
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
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_PLANNINGSTRATEGYGROUPVH

**Planningstrategygroupvh**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PlanningStrategyGroup` | ✓ | |  |  |  |  |
| `MainPlanningStrategy` |  | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.technicalName: 'IPPPLNGSTRGRPVH'
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.supportedCapabilities: [#SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER]
@ObjectModel.representativeKey: 'PlanningStrategyGroup'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Planning Strategy Group'

define view entity I_PlanningStrategyGroupVH
  as select distinct from I_PlanningStrategyGroup as grp
{
      // Key
      @ObjectModel.text.association: '_Text'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key grp.PlanningStrategyGroup,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8} 
      grp.MainPlanningStrategy,

      // Associations
      _Text
};
```
