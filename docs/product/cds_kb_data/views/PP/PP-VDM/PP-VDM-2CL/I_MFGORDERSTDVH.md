---
name: I_MFGORDERSTDVH
description: "Mfgorderstdvh"
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
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_MFGORDERSTDVH

**Mfgorderstdvh**

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
| `ManufacturingOrderText` |  | |  |  |  |  |
| `ManufacturingOrderCategory` |  | |  |  |  |  |
| `ManufacturingOrderType` |  | |  |  |  |  |
| `ProductionPlant` |  | |  |  |  |  |

## Source Code

```abap
//GENERATED:003:E6ExH29r7kU{rc1Uxl{1wW
@AbapCatalog.sqlViewName: 'IMO__VH2'
@AbapCatalog.compiler.compareFilter: true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'ManufacturingOrder'
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY]
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE

@Search.searchable: true
@Consumption.ranked: true

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Manufacturing Order'

define view I_MfgOrderStdVH as select from I_ManufacturingOrder {
  @ObjectModel.text.element: ['ManufacturingOrderText']
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  @Search.fuzzinessThreshold: 0.90
  key ManufacturingOrder,
  @Search.defaultSearchElement: true
  @Search.ranking: #LOW
  @Search.fuzzinessThreshold: 0.90
  @Semantics.text: true
  ManufacturingOrderText,

  @Consumption.hidden: true
  ManufacturingOrderCategory,
  @Consumption.hidden: true
  ManufacturingOrderType,
  @Consumption.hidden: true
  ProductionPlant
}
```
