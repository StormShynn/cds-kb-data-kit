---
name: I_BATCHSTDVH
description: "Batchstdvh"
app_component: LO-BM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-BM
  - LO-BM-MD
  - interface-view
  - value-help
  - standard-value-help
  - batch
  - component:LO-BM-MD-2CL
  - lob:Logistics General
---
# I_BATCHSTDVH

**Batchstdvh**

| Property | Value |
|---|---|
| App Component | `LO-BM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Plant` | ✓ | |  |  |  |  |
| `Material` | ✓ | |  |  |  |  |
| `Batch` | ✓ | |  |  |  |  |
| `_Plant` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |

## Source Code

```abap
//GENERATED:005:GFBfhxvv7jY1iZGI9xHRSG
@AbapCatalog.sqlViewName: 'IB__VH2'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'Batch'

@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MASTER

@ObjectModel.supportedCapabilities: [
  #VALUE_HELP_PROVIDER,
  #SEARCHABLE_ENTITY
]

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE

@Search.searchable: true
@Consumption.ranked: true

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Batch information'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
define view I_BatchStdVH as select from I_BatchVH {
  @ObjectModel.foreignKey.association: '_Plant'
  --cannot be added to search (BC_CDSSRCH/021)
  --reason: defaulting by empty literal (in case of MCH1)
  --@Search.defaultSearchElement: true
  --@Search.fuzzinessThreshold: 0.8
  --@Search.ranking: #LOW
  key Plant,
  @ObjectModel.foreignKey.association: '_Product'
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #LOW
  key Material,
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #HIGH
  key Batch,


  @Consumption.hidden: true
  _Plant,
  @Consumption.hidden: true
  _Product,
  @Consumption.hidden: true
  _Material
}
```
