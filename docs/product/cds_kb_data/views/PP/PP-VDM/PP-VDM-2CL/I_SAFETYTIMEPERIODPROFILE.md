---
name: I_SAFETYTIMEPERIODPROFILE
description: "Safetytimeperiodprofile"
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
# I_SAFETYTIMEPERIODPROFILE

**Safetytimeperiodprofile**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Plant` | ✓ | |  | `werks` |  |  |
| `SafetyTimePeriodProfile` | ✓ | |  | `cast(shpro as pph_shpro preserving type)` |  |  |
| `_Plant` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |
| `_Text` | `I_SafetyTimePeriodProfileText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISAFTTMEPERPRFL'
@AbapCatalog.buffering: {status: #ACTIVE, type: #FULL, numberOfKeyFields: 000}
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.compositionRoot: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER]
@ObjectModel.representativeKey: 'SafetyTimePeriodProfile'
@ObjectModel.sapObjectNodeType.name: 'MatlStkSafetyTimePeriodProfile'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Period Profile for Safety Time'

define view I_SafetyTimePeriodProfile
  as select from t438v

  association [1..1] to I_Plant                       as _Plant on  $projection.Plant = _Plant.Plant
  association [0..*] to I_SafetyTimePeriodProfileText as _Text  on  $projection.Plant                   = _Text.Plant
                                                                and $projection.SafetyTimePeriodProfile = _Text.SafetyTimePeriodProfile
{
      // Key
      @ObjectModel.foreignKey.association: '_Plant'
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
  key werks as Plant,
      @ObjectModel.text.association: '_Text'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key cast(shpro as pph_shpro preserving type) as SafetyTimePeriodProfile,
  
      // Associations
      _Plant,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text
};
```
