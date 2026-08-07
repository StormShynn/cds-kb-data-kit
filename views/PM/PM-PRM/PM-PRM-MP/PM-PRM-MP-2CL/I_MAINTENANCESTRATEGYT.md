---
name: I_MAINTENANCESTRATEGYT
description: Maintenancestrategyt
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
# I_MAINTENANCESTRATEGYT

**Maintenancestrategyt**

| Property | Value |
|---|---|
| App Component | `PM-PRM-MP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `MaintenanceStrategy` | ✓ | |  | `strat` |
| `Language` | ✓ | |  | `spras` |
| `MaintenanceStrategyDesc` |  | |  | `ktext` |
| `_MaintenanceStrategy` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MaintenanceStrategy` | `I_MaintenanceStrategy` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Search.searchable: true
@EndUserText.label: 'Maintenance Strategy - Text'
@ObjectModel.dataCategory:#TEXT
@Analytics.technicalName: 'IMAINTSTRATT'
@ObjectModel: {
   usageType.serviceQuality: #A,
   usageType.sizeCategory: #M,
   usageType.dataClass: #ORGANIZATIONAL
}
@ObjectModel.representativeKey: 'MaintenanceStrategy'
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE ]

define view entity I_MaintenanceStrategyT
  as select from t351t

  association [0..1] to I_MaintenanceStrategy as _MaintenanceStrategy on _MaintenanceStrategy.MaintenanceStrategy = $projection.MaintenanceStrategy

  association [0..1] to I_Language            as _Language            on _Language.Language = $projection.Language

{
      @ObjectModel.foreignKey.association: '_MaintenanceStrategy'
  key strat as MaintenanceStrategy,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras as Language,

      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      @EndUserText.label: 'Strategy Description'
      ktext as MaintenanceStrategyDesc,

      // Propagate association(s)
      _MaintenanceStrategy,
      _Language
}
```
