---
name: I_MAINTPLNRGRPSTDVH
description: Maintplnrgrpstdvh
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-EQ
  - interface-view
  - value-help
  - standard-value-help
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
---
# I_MAINTPLNRGRPSTDVH

**Maintplnrgrpstdvh**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `MaintenancePlannerGroup` | `MaintenancePlannerGroup` |
| key `MaintenancePlanningPlant` | `MaintenancePlanningPlant` |
| `MaintenancePlannerGroupName` | `MaintenancePlannerGroupName` |
| `_MaintenancePlanningPlant` | *Association* |

## Source Code

```abap
@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'IMPG__VH'
@ObjectModel.representativeKey: 'MaintenancePlannerGroup'

@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S

@AccessControl.authorizationCheck: #CHECK

@Search.searchable: true
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER]
@EndUserText.label: 'Maintenance Planner Group'
define view entity I_MaintPlnrGrpStdVH as select from I_MaintenancePlannerGroup {
  @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  @ObjectModel.text.element: ['MaintenancePlannerGroupName']
  @Consumption.valueHelpDefault.binding.usage:#FILTER_AND_RESULT
  key MaintenancePlannerGroup,
  @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
  @ObjectModel.foreignKey.association: '_MaintenancePlanningPlant'
  @Consumption.valueHelpDefault.binding.usage:#FILTER_AND_RESULT
  key MaintenancePlanningPlant,
  @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  MaintenancePlannerGroupName,

  @Consumption.hidden: true
  _MaintenancePlanningPlant
}
```
