---
name: I_STORAGECOSTSPERCENTAGECODE
description: "Storagecostspercentagecode"
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
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_STORAGECOSTSPERCENTAGECODE

**Storagecostspercentagecode**

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
| `StorageCostsPercentageCode` | ✓ | |  | `lagpr` |  |  |
| `StorageCostsInPercent` |  | |  | `lkost` |  |  |
| `_Plant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISTORCOSTSPCT'
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER]
@ObjectModel.representativeKey: 'StorageCostsPercentageCode'
@ObjectModel.sapObjectNodeType.name: 'StorageCostsPercentageCode'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Percentage Code for Storage Costs'

define view I_StorageCostsPercentageCode
  as select from t439l

  association [1..1] to I_Plant as _Plant on $projection.Plant = _Plant.Plant
{
      // Key
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @ObjectModel.foreignKey.association: '_Plant'      
  key werks as Plant,
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key lagpr as StorageCostsPercentageCode,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}  
      lkost as StorageCostsInPercent,

      // Associations
      _Plant
};
```
