---
name: I_KNBNCALCDEPDNTRQMTSSELRULE
description: "Knbncalcdepdntrqmtsselrule"
app_component: PP-KAB-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-KAB
  - PP-KAB-VDM
  - interface-view
  - component:PP-KAB-VDM-2CL
  - lob:Manufacturing
---
# I_KNBNCALCDEPDNTRQMTSSELRULE

**Knbncalcdepdntrqmtsselrule**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `KanbanControlCycle` | ✓ | |  | `pknum` |  |  |
| `KnbnCalcDepdntRqmtsSelRule` | ✓ | |  | `lfdzl` |  |  |
| `Plant` |  | |  | `werks` |  |  |
| `StorageLocation` |  | |  | `lgort` |  |  |
| `ProductionSupplyArea` |  | |  | `prvbe` |  |  |
| `Supplier` |  | | `_KanbanControlCycle` | `Supplier` |  |  |
| `_KanbanControlCycle` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_SupplierCompanyByPlant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_KanbanControlCycle` | `I_KanbanControlCycle` | [1..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_SupplierCompanyByPlant` | `I_SupplierCompanyByPlant` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IKNBNCLCDEPRQMT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Dependent Requirements Selection Rule'

@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #MASTER }
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view I_KnbnCalcDepdntRqmtsSelRule 
  as select from pksl 
  association [1..1] to I_KanbanControlCycle     as _KanbanControlCycle     on  $projection.KanbanControlCycle = _KanbanControlCycle.KanbanControlCycle
 
  // Only for DCL
  association [0..1] to I_Supplier               as _Supplier               on  $projection.supplier = _Supplier.Supplier
  association [0..1] to I_SupplierCompanyByPlant as _SupplierCompanyByPlant on  $projection.supplier = _SupplierCompanyByPlant.Supplier
                                                                            and $projection.Plant    = _SupplierCompanyByPlant.Plant
  {
    key pknum as KanbanControlCycle,
    key lfdzl as KnbnCalcDepdntRqmtsSelRule,
        werks as Plant,
        lgort as StorageLocation,
        prvbe as ProductionSupplyArea,
        
        // Associations
        _KanbanControlCycle,
        
        // Only for DCL 
        @Consumption.hidden: true
        _KanbanControlCycle.Supplier,
        @Consumption.hidden: true
        _Supplier,
        @Consumption.hidden: true
        _SupplierCompanyByPlant  
}
```
