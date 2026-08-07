---
name: I_KANBANCONTROLCYCLESTDVH
description: Kanbancontrolcyclestdvh
app_component: PP-KAB-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-KAB
  - PP-KAB-VDM
  - interface-view
  - value-help
  - standard-value-help
  - component:PP-KAB-VDM-2CL
  - lob:Manufacturing
---
# I_KANBANCONTROLCYCLESTDVH

**Kanbancontrolcyclestdvh**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `KanbanControlCycle` | ✓ | |  |  |
| `Plant` |  | |  |  |
| `ProductionSupplyArea` |  | |  |  |
| `Product` |  | |  |  |
| `Supplier` |  | |  |  |
| `_Supplier` | | ✓ | | |
| `_SupplierCompanyByPlant` | | ✓ | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPKANBANCCSTDVH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Kanban Control Cycle'

@Metadata.ignorePropagatedAnnotations:true

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'KanbanControlCycle'
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #L, dataClass: #MIXED }
@ObjectModel.supportedCapabilities: [ #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER ]
@ObjectModel.dataCategory: #VALUE_HELP

@VDM.viewType: #COMPOSITE

@Search.searchable: true
@Consumption.ranked: true

define view I_KanbanControlCycleStdVH as select from I_KanbanControlCycle {
    @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
    key KanbanControlCycle,

    Plant,
    ProductionSupplyArea,
    Product,
    
    @Consumption.hidden: true
    Supplier,
    @Consumption.hidden: true
    _Supplier,
    @Consumption.hidden: true
    _SupplierCompanyByPlant
}
```
