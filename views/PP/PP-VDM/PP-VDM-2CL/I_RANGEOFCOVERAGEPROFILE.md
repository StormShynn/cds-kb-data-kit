---
name: I_RANGEOFCOVERAGEPROFILE
description: "Rangeofcoverageprofile"
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
# I_RANGEOFCOVERAGEPROFILE

**Rangeofcoverageprofile**

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
| `RangeOfCoverageProfile` | ✓ | |  | `cast(rwpro as pph_rwpro preserving type)` |  |  |
| `_Plant` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |
| `_Text` | `I_RangeOfCoverageProfileText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IRANGEOPFCOVPRFL'
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
@ObjectModel.representativeKey: 'RangeOfCoverageProfile'
@ObjectModel.sapObjectNodeType.name: 'MatlStkRangeOfCoverageProfile'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Range of Coverage Profile'

define view I_RangeOfCoverageProfile
  as select from t438r

  association [1..1] to I_Plant                      as _Plant on  $projection.Plant = _Plant.Plant
  association [0..*] to I_RangeOfCoverageProfileText as _Text  on  $projection.Plant                  = _Text.Plant
                                                               and $projection.RangeOfCoverageProfile = _Text.RangeOfCoverageProfile
{
      // Key
      @ObjectModel.foreignKey.association: '_Plant'
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
  key werks as Plant,
      @ObjectModel.text.association: '_Text'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key cast(rwpro as pph_rwpro preserving type) as RangeOfCoverageProfile,
  
      // Associations
      _Plant,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text
};
```
