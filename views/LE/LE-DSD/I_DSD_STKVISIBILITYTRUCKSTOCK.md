---
name: I_DSD_STKVISIBILITYTRUCKSTOCK
description: Dsd Stkvisibilitytruckstock
app_component: LE-DSD
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-DSD
  - interface-view
  - component:LE-DSD
  - lob:Logistics Execution
---
# I_DSD_STKVISIBILITYTRUCKSTOCK

**Dsd Stkvisibilitytruckstock**

| Property | Value |
|---|---|
| App Component | `LE-DSD` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `DeliveryVehicleNumber` | ✓ | |  | `vehicle` |
| `StkVisibilitySequentialNumber` | ✓ | |  | `itm_no` |
| `Material` |  | |  | `matnr` |
| `Batch` |  | |  | `charg` |
| `StockVisibilityVehicleQuantity` |  | |  | `} quantity` |
| `StockVisibilityStorLocQuantity` |  | |  | `} quantity_ts` |
| `UnitOfMeasure` |  | |  | `meins` |
| `DSD_TourIdentification` |  | |  | `tour_id` |
| `Plant` |  | |  | `werks` |
| `PlantAssignedToVehicle` |  | |  | `werks_c` |
| `StockVisibilityStatus` |  | |  | `sv_status` |
| `_Equipment` | | ✓ | | |
| `_Product` | | ✓ | | |
| `_Batch` | | ✓ | | |
| `_UnitOfMeasure` | | ✓ | | |
| `_Plant` | | ✓ | | |
| `_PlantAssignedToVehicle` | | ✓ | | |
| `_StockVisibilityStatus` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Equipment` | `I_Equipment` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_Batch` | `I_Batch` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_PlantAssignedToVehicle` | `I_Plant` | [0..1] |
| `_StockVisibilityStatus` | `I_DSD_TourStkVisibilityStatus` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Stock Visibility Truck Stock'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}
@VDM: { viewType: #BASIC }
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE ]

define view entity I_DSD_StkVisibilityTruckStock
  as select from /dsd/sv_quant as _TruckStock

  association [0..1] to I_Equipment                   as _Equipment              on $projection.DeliveryVehicleNumber = _Equipment.Equipment
  association [0..1] to I_Product                     as _Product                on $projection.Material              = _Product.Product
  association [0..1] to I_Batch                       as _Batch                  on $projection.Plant                 = _Batch.Plant
                                                                                and $projection.Material              = _Batch.Material 
                                                                                and $projection.Batch                 = _Batch.Batch
  association [0..1] to I_UnitOfMeasure               as _UnitOfMeasure          on $projection.UnitOfMeasure         = _UnitOfMeasure.UnitOfMeasure
  association [0..1] to I_Plant                       as _Plant                  on $projection.Plant                 = _Plant.Plant
  association [0..1] to I_Plant                       as _PlantAssignedToVehicle on $projection.Plant                 = _PlantAssignedToVehicle.Plant
  association [0..1] to I_DSD_TourStkVisibilityStatus as _StockVisibilityStatus  on $projection.StockVisibilityStatus = _StockVisibilityStatus.StockVisibilityStatus
{

  key vehicle     as DeliveryVehicleNumber,
  key itm_no      as StkVisibilitySequentialNumber,
      matnr       as Material,
      charg       as Batch,
      @Semantics:{ quantity: { unitOfMeasure: 'UnitOfMeasure' } } 
      quantity    as StockVisibilityVehicleQuantity,
      @Semantics:{ quantity: { unitOfMeasure: 'UnitOfMeasure' } } 
      quantity_ts as StockVisibilityStorLocQuantity,
      meins       as UnitOfMeasure,
      tour_id     as DSD_TourIdentification,
      werks       as Plant,
      werks_c     as PlantAssignedToVehicle,
      sv_status   as StockVisibilityStatus,
      
      _Equipment,
      _Product,
      _Batch,
      _UnitOfMeasure,
      _Plant,
      _PlantAssignedToVehicle,
      _StockVisibilityStatus
      
}
```
