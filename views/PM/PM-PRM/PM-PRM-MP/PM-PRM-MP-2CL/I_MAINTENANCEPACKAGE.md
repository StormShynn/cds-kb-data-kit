---
name: I_MAINTENANCEPACKAGE
description: "Maintenancepackage"
app_component: PM-PRM-MP-2CL
software_component: SAPSCORE
release_state: released
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
# I_MAINTENANCEPACKAGE

**Maintenancepackage**

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
| `MaintenancePackage` | ✓ | |  | `zaehl` |  |  |
| `MaintenanceTaskPerformanceUnit` |  | |  | `zeieh` |  |  |
| `MaintenancePackageCycle` |  | |  | `zykzt` |  |  |
| `MaintPackageTimeStartOffset` |  | |  | `offzt` |  |  |
| `MaintenancePackageNature` |  | |  | `hiera` |  |  |
| `MaintenanceLeadFloatInDays` |  | |  | `puffp` |  |  |
| `FollowUpFloat` |  | |  | `puffn` |  |  |
| `MaintPackagePeriodType` |  | |  | `perkn` |  |  |
| `CallHorizonInDays` |  | |  | `eroef` |  |  |
| `_MaintenanceStrategy` | | ✓ | | | | |
| `_MaintenancePackageText` | | ✓ | | | | |
| `_MaintenancePackageUnit` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MaintenanceStrategy` | `I_MaintenanceStrategy` | [0..1] |
| `_MaintenancePackageText` | `I_MaintenancePackageText` | [0..*] |
| `_MaintenancePackageUnit` | `I_UnitOfMeasure` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Maintenance Package'
@ObjectModel.representativeKey: 'MaintenancePackage'
@Analytics.technicalName: 'IMNTPCKG'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@VDM.viewType: #BASIC
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'MaintenancePackage'
define view entity I_MaintenancePackage
  as select from t351p

  association [0..1] to I_MaintenanceStrategy       as _MaintenanceStrategy         on  _MaintenanceStrategy.MaintenanceStrategy = $projection.MaintenanceStrategy

  association [0..*] to I_MaintenancePackageText    as _MaintenancePackageText      on  _MaintenancePackageText.MaintenanceStrategy = $projection.MaintenanceStrategy
                                                                                    and _MaintenancePackageText.MaintenancePackage  = $projection.MaintenancePackage                                                                         
  association [0..1] to I_UnitOfMeasure             as _MaintenancePackageUnit      on _MaintenancePackageUnit.UnitOfMeasure = $projection.MaintenanceTaskPerformanceUnit
  
{
      @ObjectModel.foreignKey.association: '_MaintenanceStrategy'
  key strat as MaintenanceStrategy,

      @ObjectModel.text.association: '_MaintenancePackageText'
  key zaehl as MaintenancePackage,

      @ObjectModel.foreignKey.association: '_MaintenancePackageUnit'
      zeieh as MaintenanceTaskPerformanceUnit,

      zykzt as MaintenancePackageCycle,
           
      offzt as MaintPackageTimeStartOffset,         

      hiera as MaintenancePackageNature,
      
      puffp as MaintenanceLeadFloatInDays,
      
      puffn as FollowUpFloat,                      
      
      perkn as MaintPackagePeriodType,              
      
      eroef as CallHorizonInDays,

      /* Associations - locally defined */
      _MaintenancePackageText,
      _MaintenanceStrategy,
      _MaintenancePackageUnit
}
```
