---
name: I_MRPPLANNINGSCENARIO
description: Mrpplanningscenario
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
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_MRPPLANNINGSCENARIO

**Mrpplanningscenario**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MRPPlanningScenario` | ✓ | |  | `plscn` |  |  |
| `MRPPlanningScenarioText` |  | |  | `plsct` |  |  |
| `MRPPlanningScenarioStatus` |  | |  | `psact` |  |  |
| `CapacityActiveVersion` |  | |  | `versa` |  |  |
| `PlanningVersion` |  | |  | `vrsio` |  |  |
| `PlanningPeriodStartDate` |  | |  | `pdat1` |  |  |
| `PlanningPeriodEndDate` |  | |  | `pdat2` |  |  |
| `_MRPPlanningScenarioStatus` | | ✓ | | | | |
| `_CapacityActiveVersion` | | ✓ | | | | |
| `_PlanningPeriodStartDate` | | ✓ | | | | |
| `_PlanningPeriodEndDate` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MRPPlanningScenarioStatus` | `I_PlanningScenarioStatus` | [0..1] |
| `_CapacityActiveVersion` | `I_AvailableCapacityType` | [0..1] |
| `_PlanningPeriodStartDate` | `I_CalendarDate` | [0..1] |
| `_PlanningPeriodEndDate` | `I_CalendarDate` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPMRPPLANGSCEN'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.buffering: {status: #ACTIVE, type: #SINGLE, numberOfKeyFields: 000}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'MRPPlanningScenario'
@ObjectModel.semanticKey: ['MRPPlanningScenario']
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #MASTER}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'MRP Planning Scenario'

define view I_MRPPlanningScenario
  as select from plsc as plsc

  association [0..1] to I_PlanningScenarioStatus as _MRPPlanningScenarioStatus on $projection.MRPPlanningScenarioStatus = _MRPPlanningScenarioStatus.MRPPlanningScenarioStatus
  association [0..1] to I_AvailableCapacityType  as _CapacityActiveVersion     on $projection.CapacityActiveVersion = _CapacityActiveVersion.AvailableCapacityType
  association [0..1] to I_CalendarDate           as _PlanningPeriodStartDate   on $projection.PlanningPeriodStartDate = _PlanningPeriodStartDate.CalendarDate                                                                     
  association [0..1] to I_CalendarDate           as _PlanningPeriodEndDate     on $projection.PlanningPeriodEndDate = _PlanningPeriodEndDate.CalendarDate
{
      // Key
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}  
      @ObjectModel.text.element: ['MRPPlanningScenarioText']
  key plsc.plscn as MRPPlanningScenario,

      // Attributes
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}  
      @Semantics.text: true
      plsc.plsct as MRPPlanningScenarioText,
      @ObjectModel.foreignKey.association: '_MRPPlanningScenarioStatus'
      plsc.psact as MRPPlanningScenarioStatus,
      @ObjectModel.foreignKey.association: '_CapacityActiveVersion'      
      plsc.versa as CapacityActiveVersion,
      plsc.vrsio as PlanningVersion,

      // Dates
      @ObjectModel.foreignKey.association: '_PlanningPeriodStartDate'
      plsc.pdat1 as PlanningPeriodStartDate,
      @ObjectModel.foreignKey.association: '_PlanningPeriodEndDate'
      plsc.pdat2 as PlanningPeriodEndDate,
      
      // Associations
     _MRPPlanningScenarioStatus,
     _CapacityActiveVersion,
     _PlanningPeriodStartDate,
     _PlanningPeriodEndDate
};
```
