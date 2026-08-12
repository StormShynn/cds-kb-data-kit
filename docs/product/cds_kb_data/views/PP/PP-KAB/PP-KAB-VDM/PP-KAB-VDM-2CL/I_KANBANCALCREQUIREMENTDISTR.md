---
name: I_KANBANCALCREQUIREMENTDISTR
description: "Kanbancalcrequirementdistr"
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
# I_KANBANCALCREQUIREMENTDISTR

**Kanbancalcrequirementdistr**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  | `matnr` |  |  |
| `Plant` | ✓ | |  | `werks` |  |  |
| `StorageLocation` | ✓ | |  | `lgort` |  |  |
| `ProductionSupplyArea` | ✓ | |  | `prvbe` |  |  |
| `KnbnCalcRqmtDistrWeightValue` |  | |  | `weight` |  |  |
| `KnbnCalcTotalRqmtDistrWgtValue` |  | |  | `wtsum` |  |  |
| `KnbnCalcRqmtDistrWgtPct` |  | |  | `wprcnt` |  |  |
| `_Product` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_StorageLocation` | | ✓ | | | | |
| `_ProductionSupplyArea` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [1..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_StorageLocation` | `I_StorageLocation` | [1..1] |
| `_ProductionSupplyArea` | `I_ProductionSupplyArea` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IKNBCALCREQDISTR'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Kanban Calculation Requirement Distribution'

@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #MIXED}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view I_KanbanCalcRequirementDistr 
  as select from tpkrqdis
  association [1..1] to I_Product              as _Product              on  $projection.Product = _Product.Product
  association [1..1] to I_Plant                as _Plant                on  $projection.Plant = _Plant.Plant
  association [1..1] to I_StorageLocation      as _StorageLocation      on  $projection.Plant           = _StorageLocation.Plant
                                                                        and $projection.StorageLocation = _StorageLocation.StorageLocation
  association [1..1] to I_ProductionSupplyArea as _ProductionSupplyArea on  $projection.Plant                = _ProductionSupplyArea.Plant
                                                                        and $projection.ProductionSupplyArea = _ProductionSupplyArea.ProductionSupplyArea  
{ 
  key matnr as Product,
  key werks as Plant,
  key lgort as StorageLocation,
  key prvbe as ProductionSupplyArea,
      weight as KnbnCalcRqmtDistrWeightValue,
      wtsum  as KnbnCalcTotalRqmtDistrWgtValue,
      wprcnt as KnbnCalcRqmtDistrWgtPct,
      
      _Product,
      _Plant,
      _StorageLocation,
      _ProductionSupplyArea
  
}
```
