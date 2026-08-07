---
name: I_PRODUCTIONSUPERVISOR
description: "Productionsupervisor"
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
  - product
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_PRODUCTIONSUPERVISOR

**Productionsupervisor**

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
| `ProductionSupervisor` | ✓ | |  | `cast(t024f.fevor as pph_fevor preserving type)` |  |  |
| `ProductionSupervisorName` |  | |  | `cast(t024f.txt as txt_fevor preserving type)` |  |  |
| `ProductionSchedulingProfile` |  | |  | `cast(t024f.sfcpf as pph_prodprf preserving type)` |  |  |
| `_Plant` | | ✓ | | | | |
| `_ProductionSchedulingProfile` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |
| `_ProductionSchedulingProfile` | `I_ProductionSchedulingProfile` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPPRODNSUPRVISR'
@AbapCatalog.buffering: {status: #ACTIVE, type: #SINGLE, numberOfKeyFields: 000}
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.representativeKey: 'ProductionSupervisor'
@ObjectModel.sapObjectNodeType.name: 'ProductionSupervisor'
@ObjectModel.semanticKey: ['Plant', 'ProductionSupervisor']
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@Search.searchable: true
@EndUserText.label: 'Production Supervisor'

define view I_ProductionSupervisor
  as select from t024f as t024f
  association [1..1] to I_Plant                       as _Plant                       on  $projection.Plant = _Plant.Plant
  association [0..1] to I_ProductionSchedulingProfile as _ProductionSchedulingProfile on  $projection.Plant = _ProductionSchedulingProfile.Plant
                                                                                      and $projection.ProductionSchedulingProfile = _ProductionSchedulingProfile.ProductionSchedulingProfile
{
      // Key
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @ObjectModel.foreignKey.association: '_Plant'
  key t024f.werks                                      as Plant,
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      @ObjectModel.text.element: ['ProductionSupervisorName']
  key cast(t024f.fevor as pph_fevor preserving type)   as ProductionSupervisor,

      // Attributes
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      cast(t024f.txt   as txt_fevor preserving type)   as ProductionSupervisorName,
      @ObjectModel.foreignKey.association: '_ProductionSchedulingProfile'
      cast(t024f.sfcpf as pph_prodprf preserving type) as ProductionSchedulingProfile,

      // Associations
      _Plant,
      _ProductionSchedulingProfile
};
```
