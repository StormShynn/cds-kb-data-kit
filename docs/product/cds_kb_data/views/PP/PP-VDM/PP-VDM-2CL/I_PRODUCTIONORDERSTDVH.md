---
name: I_PRODUCTIONORDERSTDVH
description: "Production OrderSTDVH"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - value-help
  - standard-value-help
  - product
  - production-order
  - component:PP-VDM-2CL
  - lob:Manufacturing
  - bo:ProductionOrder
---
# I_PRODUCTIONORDERSTDVH

**Production OrderSTDVH**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductionOrder` | ✓ | |  |  |  |  |
| `ProductionOrderText` |  | |  |  |  |  |
| `OrderCategory` |  | |  |  |  |  |
| `ProductionOrderType` |  | |  |  |  |  |
| `ProductionPlant` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRNO__VH'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #NONE
@ObjectModel.representativeKey: 'ProductionOrder'
@ObjectModel.supportedCapabilities: [#SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER]
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Production Order'

define view I_ProductionOrderStdVH as select from I_ProductionOrder {
  @ObjectModel.text.element: ['ProductionOrderText']
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  @Search.fuzzinessThreshold: 0.8
  key ProductionOrder,
  @Search.defaultSearchElement: true
  @Search.ranking: #LOW
  @Search.fuzzinessThreshold: 0.80
  @Semantics.text: true
  ProductionOrderText,

  @Consumption.hidden: true
  OrderCategory,
  @Consumption.hidden: true
  ProductionOrderType,
  @Consumption.hidden: true
  ProductionPlant
};
```
