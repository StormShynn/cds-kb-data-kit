---
name: I_PRODUCTIONSCHEDGPROFILEVH
description: "Productionschedgprofilevh"
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
  - product
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_PRODUCTIONSCHEDGPROFILEVH

**Productionschedgprofilevh**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductionSchedulingProfile` | ✓ | |  |  |  |  |
| `Plant` | ✓ | |  |  |  |  |
| `OrderCategory` |  | |  |  |  |  |
| `_Plant` | | ✓ | | | | |
| `_OrderCategory` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@Analytics.technicalName: 'IPRODSCHEDPROFVH'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #NONE
@ObjectModel.representativeKey: 'ProductionSchedulingProfile'
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY]
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Production Scheduling Profile'

define view entity I_ProductionSchedgProfileVH
  as select from I_ProductionSchedulingProfile
{
      // Key
      @ObjectModel.text.association: '_Text'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key ProductionSchedulingProfile,
      @ObjectModel.foreignKey.association: '_Plant'
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
  key Plant,

      // Assignments
      @ObjectModel.foreignKey.association: '_OrderCategory'
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      OrderCategory,

      //Associations
      _Plant,
      _OrderCategory,
      _Text
};
```
