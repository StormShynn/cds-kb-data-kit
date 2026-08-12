---
name: I_MAINTENANCESTRATEGY
description: "Maintenancestrategy"
app_component: PM-PRM-MP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-PRM
  - PM-PRM-MP
  - interface-view
  - component:PM-PRM-MP-2CL
  - lob:Plant Maintenance
---
# I_MAINTENANCESTRATEGY

**Maintenancestrategy**

| Property | Value |
|---|---|
| App Component | `PM-PRM-MP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceStrategy` | ✓ | |  | `strat` |  |  |
| `MaintenanceTaskPerformanceUnit` |  | |  | `zeieh` |  |  |
| `MaintenanceStrategyActyUnit` |  | |  | `leieh` |  |  |
| `MaintenanceStrategyCycTotDurn` |  | |  | `zyk1g` |  |  |
| `MaintenanceStrategyCycDurn` |  | |  | `zyk2g` |  |  |
| `MaintPackageMinimumStepValue` |  | |  | `zyk1k` |  |  |
| `PerfBasedMaintPckgMinStepValue` |  | |  | `zyk2k` |  |  |
| `NumberOfMaintenancePackages` |  | |  | `anzp1` |  |  |
| `NumberOfPerfBasedMaintPackages` |  | |  | `anzp2` |  |  |
| `LateCompletionTolerancePercent` |  | |  | `tole1` |  |  |
| `EarlyCompletionTolerancePct` |  | |  | `tole2` |  |  |
| `LateCompletionShiftInPercent` |  | |  | `vers1` |  |  |
| `EarlyCompletionShiftInPercent` |  | |  | `vers2` |  |  |
| `MaintStrategySchedulingCode` |  | |  | `termk` |  |  |
| `MaintenanceCallHorizonPercent` |  | |  | `horiz` |  |  |
| `MaintenanceCallHorizonCalcType` |  | |  | `cast(t351.horiz_qualifier as eam_cc_callhorizon_calc_type preserving type)` |  |  |
| `FactoryCalendar` |  | |  | `fabkl` |  |  |
| `AuthorizationGroup` |  | |  | `authgr` |  |  |
| `_MaintenanceStrategyText` | | ✓ | | | | |
| `_MaintenanceStrategyUnit` | | ✓ | | | | |
| `_FactoryCalendar` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MaintenanceStrategyText` | `I_MaintenanceStrategyT` | [0..*] |
| `_MaintenanceStrategyUnit` | `I_UnitOfMeasure` | [0..1] |
| `_FactoryCalendar` | `I_FactoryCalendar` | [0..1] |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'IMAINTSTRAT'
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Maintenance Strategy'
@ObjectModel.representativeKey: 'MaintenanceStrategy'
@ObjectModel.semanticKey: 'MaintenanceStrategy'
@ObjectModel: {
   usageType.serviceQuality: #A,
   usageType.sizeCategory: #M,
   usageType.dataClass: #ORGANIZATIONAL
}
@VDM.viewType: #BASIC
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,#EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@Analytics.dataExtraction.enabled: true
@ObjectModel.sapObjectNodeType.name: 'MaintenanceStrategy'

define view I_MaintenanceStrategy
  as select from t351

  association [0..*] to I_MaintenanceStrategyT as _MaintenanceStrategyText on _MaintenanceStrategyText.MaintenanceStrategy = $projection.MaintenanceStrategy

  association [0..1] to I_UnitOfMeasure        as _MaintenanceStrategyUnit on _MaintenanceStrategyUnit.UnitOfMeasure = $projection.MaintenanceTaskPerformanceUnit

  association [0..1] to I_FactoryCalendar      as _FactoryCalendar         on _FactoryCalendar.FactoryCalendar = $projection.FactoryCalendar
{
      @ObjectModel.text.association: '_MaintenanceStrategyText'
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key t351.strat                                                                 as MaintenanceStrategy,

      @ObjectModel.foreignKey.association: '_MaintenanceStrategyUnit'
      t351.zeieh                                                                 as MaintenanceTaskPerformanceUnit,

      t351.leieh                                                                 as MaintenanceStrategyActyUnit,

      t351.zyk1g                                                                 as MaintenanceStrategyCycTotDurn,

      t351.zyk2g                                                                 as MaintenanceStrategyCycDurn, // same as zyk1g ?

      t351.zyk1k                                                                 as MaintPackageMinimumStepValue,

      t351.zyk2k                                                                 as PerfBasedMaintPckgMinStepValue,

      @EndUserText.label: 'No. of Maintenance Packages'
      t351.anzp1                                                                 as NumberOfMaintenancePackages,
      @EndUserText.label: 'No. of Maintenance Packages(Performance)'
      t351.anzp2                                                                 as NumberOfPerfBasedMaintPackages,

      t351.tole1                                                                 as LateCompletionTolerancePercent,

      t351.tole2                                                                 as EarlyCompletionTolerancePct,

      t351.vers1                                                                 as LateCompletionShiftInPercent,

      @EndUserText.label: 'Early Completion'
      t351.vers2                                                                 as EarlyCompletionShiftInPercent,
      //
      //      @EndUserText.label: 'Early Completion'
      //      t351.vers2                                                                 as EarlyCompletionShiftFactor,

      t351.termk                                                                 as MaintStrategySchedulingCode,

      t351.horiz                                                                 as MaintenanceCallHorizonPercent,

      cast(t351.horiz_qualifier as eam_cc_callhorizon_calc_type preserving type) as MaintenanceCallHorizonCalcType,

      @ObjectModel.foreignKey.association: '_FactoryCalendar'
      t351.fabkl                                                                 as FactoryCalendar,

      t351.authgr                                                                as AuthorizationGroup,

      // Association(s)
      _MaintenanceStrategyText,
      _MaintenanceStrategyUnit,
      _FactoryCalendar
}
```
