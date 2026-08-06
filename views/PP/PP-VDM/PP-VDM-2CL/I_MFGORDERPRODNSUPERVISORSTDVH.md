---
name: I_MFGORDERPRODNSUPERVISORSTDVH
description: Mfgorderprodnsupervisorstdvh
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
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_MFGORDERPRODNSUPERVISORSTDVH

**Mfgorderprodnsupervisorstdvh**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Plant` | `ProductionSupervisor.Plant` |
| key `ProductionSupervisor` | `ProductionSupervisor.ProductionSupervisor` |
| `ProductionSupervisorName` | `ProductionSupervisor.ProductionSupervisorName` |
| `_Plant` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics.technicalName: 'IMFGORDSUPVSTDHV'
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #NONE
@ObjectModel.representativeKey: 'ProductionSupervisor'
@ObjectModel.supportedCapabilities: [#SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER]
@ObjectModel.usageType: {serviceQuality: #B, sizeCategory: #S, dataClass: #CUSTOMIZING}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@Search.searchable: true
@EndUserText.label: 'Production Supervisor'
// Dedicated StdVH view on protected I_ProductionSupervisor with MfgOrder authorization objects

define view entity I_MfgOrderProdnSupervisorStdVH
  as select from I_ProductionSupervisor as ProductionSupervisor
{
      @ObjectModel.foreignKey.association: '_Plant'
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
  key ProductionSupervisor.Plant,
      @ObjectModel.text.element: ['ProductionSupervisorName']
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key ProductionSupervisor.ProductionSupervisor,

      @Semantics.text: true
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      ProductionSupervisor.ProductionSupervisorName,

      @Consumption.hidden: true
      _Plant
};
```
