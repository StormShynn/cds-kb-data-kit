---
name: I_MFGORDERSEQUENCESTDVH
description: "Mfgordersequencestdvh"
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
  - value-help
  - standard-value-help
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_MFGORDERSEQUENCESTDVH

**Mfgordersequencestdvh**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ManufacturingOrder` | ✓ | |  |  |  |  |
| `ManufacturingOrderSequence` | ✓ | |  |  |  |  |
| `MfgOrderSequenceText` |  | |  |  |  |  |
| `ManufacturingOrderCategory` |  | |  |  |  |  |
| `ManufacturingOrderType` |  | |  |  |  |  |
| `ProductionPlant` |  | |  |  |  |  |
| `_MfgOrder` | | ✓ | | | | |

## Source Code

```abap
//GENERATED:003:E6ExH29r7kU{rc1Uxl{1wW
@AbapCatalog.sqlViewName: 'IMOS__VH'
@AbapCatalog.compiler.compareFilter: true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #NONE
@ObjectModel.representativeKey: 'ManufacturingOrderSequence'
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY]
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@Search.searchable: true
@Consumption.ranked: true

@EndUserText.label: 'Manufacturing Order Sequence'

define view I_MfgOrderSequenceStdVH as select from I_MfgOrderSequenceBasic {
  @ObjectModel.foreignKey.association: '_MfgOrder'
  @Search.defaultSearchElement: true
  @Search.ranking: #LOW
  @Search.fuzzinessThreshold: 0.90
  key ManufacturingOrder,
  @ObjectModel.text.element: ['MfgOrderSequenceText']
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  @Search.fuzzinessThreshold: 0.90
  key ManufacturingOrderSequence,
  @Semantics.text: true
  @Search.defaultSearchElement: true
  @Search.ranking: #LOW
  @Search.fuzzinessThreshold: 0.90
  MfgOrderSequenceText,
  @Consumption.hidden: true
  ManufacturingOrderCategory,
  @Consumption.hidden: true
  ManufacturingOrderType,
  @Consumption.hidden: true
  ProductionPlant,

  @Consumption.hidden: true
  _MfgOrder
};
```
