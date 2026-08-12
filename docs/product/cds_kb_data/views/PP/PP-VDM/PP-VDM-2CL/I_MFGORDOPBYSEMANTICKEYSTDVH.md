---
name: I_MFGORDOPBYSEMANTICKEYSTDVH
description: "Mfgordopbysemantickeystdvh"
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
  - value-help
  - standard-value-help
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_MFGORDOPBYSEMANTICKEYSTDVH

**Mfgordopbysemantickeystdvh**

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
| `ManufacturingOrderOperation` | ✓ | |  |  |  |  |
| `OperationIsSubOperation` |  | |  | `cast(OperationIsSubOperation as vdm_subop_flag preserving type)` |  |  |
| `ManufacturingOrderText` |  | | `_MfgOrder` | `ManufacturingOrderText` |  |  |
| `MfgOrderOperationText` |  | |  |  |  |  |
| `ManufacturingOrderCategory` |  | |  |  |  |  |
| `ManufacturingOrderType` |  | |  |  |  |  |
| `ProductionPlant` |  | |  |  |  |  |
| `OrderInternalID` |  | |  |  |  |  |
| `OrderOperationInternalID` |  | |  |  |  |  |
| `Material` |  | | `_MfgOrder` | `Material` |  |  |
| `_ManufacturingOrder` |  | |  | `_MfgOrder` |  |  |
| `_MfgOrder` | | ✓ | | | | |
| `_MfgOrderSequence` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMOOBSK__VH'
@AbapCatalog.compiler.compareFilter: true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.lifecycle.status: #DEPRECATED  // due to multiple entries per key
@VDM.lifecycle.successor: 'I_MfgOrderOperationVH'
@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'ManufacturingOrderOperation'
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY]
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE

@Search.searchable: true
@Consumption.ranked: true

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Manufacturing Order Operation'

define view I_MfgOrdOpBySemanticKeyStdVH as select from I_MfgOrderOperationBySemKey {
  @ObjectModel.text.element: ['ManufacturingOrderText']
  @Search.defaultSearchElement: true
  @Search.ranking: #LOW
  @Search.fuzzinessThreshold: 0.90
  key ManufacturingOrder,

  @Search.defaultSearchElement: true
  @Search.ranking: #LOW
  @Search.fuzzinessThreshold: 0.80
  key ManufacturingOrderSequence,

  @ObjectModel.text.element: ['MfgOrderOperationText']
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  @Search.fuzzinessThreshold: 0.90
  key ManufacturingOrderOperation,

  @Semantics.booleanIndicator
  cast(OperationIsSubOperation as vdm_subop_flag preserving type) as OperationIsSubOperation,

  @Search.defaultSearchElement: true
  @Search.ranking: #LOW
  @Search.fuzzinessThreshold: 0.80
  @Semantics.text: true
  _MfgOrder.ManufacturingOrderText,

  @Search.defaultSearchElement: true
  @Search.ranking: #LOW
  @Search.fuzzinessThreshold: 0.80
  @Semantics.text: true
  MfgOrderOperationText,

  @Consumption.hidden: true
  ManufacturingOrderCategory,
  @Consumption.hidden: true
  ManufacturingOrderType,
  @Consumption.hidden: true
  ProductionPlant,
  @Consumption.hidden: true
  OrderInternalID,
  @Consumption.hidden: true
  OrderOperationInternalID,
  @Consumption.hidden: true
  _MfgOrder.Material,

  @Consumption.hidden: true
  _MfgOrder as _ManufacturingOrder,
  @Consumption.hidden: true
  _MfgOrder,
  @Consumption.hidden: true
  _MfgOrderSequence
};
```
