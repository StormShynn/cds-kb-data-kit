---
name: I_PRODUCTIONSCHEDULINGPROFILE
description: "Productionschedulingprofile"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_PRODUCTIONSCHEDULINGPROFILE

**Productionschedulingprofile**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductionSchedulingProfile` | ✓ | |  | `cast(tco43.co_prodprf as pph_prodprf preserving type)` |  |  |
| `Plant` | ✓ | |  | `werks` |  |  |
| `OrderCategory` |  | |  | `cast(tco43.autyp as pph_autyp preserving type)` |  |  |
| `GRIsPostedAutomatically` |  | |  | `autwe` |  |  |
| `MfgOrderEWMSynchronousPosting` |  | |  | `sync_gm_for_ewm` |  |  |
| `_Plant` | | ✓ | | | | |
| `_OrderCategory` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |
| `_OrderCategory` | `I_OrderCategory` | [0..1] |
| `_Text` | `I_ProductionSchedgProfileText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRODNSCHEDGPROF'
@AbapCatalog.buffering: {status: #ACTIVE, type: #FULL, numberOfKeyFields: 000}
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.compositionRoot: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'ProductionSchedulingProfile'
@ObjectModel.semanticKey: ['ProductionSchedulingProfile']
@ObjectModel.sapObjectNodeType.name: 'ProductionSchedulingProfile'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@Search.searchable: true
@EndUserText.label: 'Production Scheduling Profile'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_ProductionSchedulingProfile
  as select from tco43 as tco43
  association [1..1] to I_Plant         as _Plant              on  $projection.Plant = _Plant.Plant
  association [0..1] to I_OrderCategory as _OrderCategory      on  $projection.OrderCategory = _OrderCategory.OrderCategory
  association [0..*] to I_ProductionSchedgProfileText as _Text on  $projection.Plant                       = _Text.Plant 
                                                               and $projection.ProductionSchedulingProfile = _Text.ProductionSchedulingProfile
{
      // Key
      @ObjectModel.text.association: '_Text'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key cast(tco43.co_prodprf as pph_prodprf preserving type) as ProductionSchedulingProfile,
      @ObjectModel.foreignKey.association: '_Plant'
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
  key tco43.werks as Plant,

      // Assignments
      @ObjectModel.foreignKey.association: '_OrderCategory'
      cast(tco43.autyp as pph_autyp preserving type) as OrderCategory,

      // Control parameters
      tco43.autwe                                    as GRIsPostedAutomatically,
      tco43.sync_gm_for_ewm                          as MfgOrderEWMSynchronousPosting,

      //Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text,
      _Plant,
      _OrderCategory
};
```
