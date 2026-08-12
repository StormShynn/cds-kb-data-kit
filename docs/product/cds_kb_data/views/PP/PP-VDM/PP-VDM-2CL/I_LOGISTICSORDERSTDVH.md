---
name: I_LOGISTICSORDERSTDVH
description: "Logisticsorderstdvh"
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
# I_LOGISTICSORDERSTDVH

**Logisticsorderstdvh**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OrderID` | ✓ | |  |  |  |  |
| `OrderDescription` |  | |  |  |  |  |
| `MRPController` |  | |  |  |  |  |
| `OrderCategory` |  | |  |  |  |  |
| `OrderType` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |

## Source Code

```abap
//GENERATED:003:E6ExH29r7kU{rc1Uxl{1wW
@AbapCatalog.sqlViewName: 'ILO__VH'
@AbapCatalog.compiler.compareFilter: true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'OrderID'
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY]
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL

@AccessControl.authorizationCheck: #MANDATORY

@ClientHandling.algorithm: #SESSION_VARIABLE

@Search.searchable: true
@Consumption.ranked: true

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Logistics Order'
define view I_LogisticsOrderStdVH as select from I_LogisticsOrder {
  @ObjectModel.text.element: ['OrderDescription']
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  @Search.fuzzinessThreshold: 0.90
  key OrderID,

  @Search.defaultSearchElement: true
  @Search.ranking: #LOW
  @Search.fuzzinessThreshold: 0.80
  @Semantics.text: true
  OrderDescription,

  @Consumption.hidden: true
  MRPController,
  @Consumption.hidden: true
  OrderCategory,
  @Consumption.hidden: true
  OrderType,
  @Consumption.hidden: true
  Plant
}
```
