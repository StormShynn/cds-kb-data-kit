---
name: I_EWM_WAVEITEM_3
description: "Ewm Waveitem 3"
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SCM
  - SCM-EWM
  - SCM-EWM-WOP
  - interface-view
  - item-level
  - component:SCM-EWM-WOP-2CL
  - lob:Other
---
# I_EWM_WAVEITEM_3

**Ewm Waveitem 3**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` | ✓ | |  | `lgnum` |  |  |
| `EWMWave` | ✓ | |  | `cast( wave as ewm_de_wave )` |  |  |
| `EWMWaveItem` | ✓ | |  | `cast( wave_itm as ewm_de_waveitem )` |  |  |
| `WarehouseTaskCreationStatus` |  | |  | `stat_cr` |  |  |
| `ItemWeight` |  | |  | `weight` |  |  |
| `ItemWeightUnit` |  | |  | `unit_w` |  |  |
| `ItemVolume` |  | |  | `volum` |  |  |
| `ItemVolumeUnit` |  | |  | `unit_v` |  |  |
| `EWMWaveItemCnsmdCapacityValue` |  | |  | `capa` |  |  |
| `ShipToParty` |  | |  | `shipto` |  |  |
| `ProductName` |  | |  | `matnr` |  |  |
| `Batch` |  | |  | `charg` |  |  |
| `EWMStockOwner` |  | |  | `owner` |  |  |
| `EntitledToDisposeParty` |  | |  | `entitled` |  |  |
| `ItemQuantity` |  | |  | `quan` |  |  |
| `ItemQuantityUnit` |  | |  | `unit` |  |  |
| `ReferenceDocumentUUID` |  | |  | `rdocid` |  |  |
| `ReferenceDocumentItemUUID` |  | |  | `ritmid` |  |  |
| `EWMWaveSplitNumber` |  | |  | `split_id` |  |  |
| `EWMRefDeliveryDocumentNumber` |  | |  | `cast(docno as ewm_de_ref_dlv_no_conv preserving type)` |  |  |
| `EWMRefDeliveryDocumentItem` |  | |  | `itemno` |  |  |
| `EWMWaveItemErrorStatus` |  | |  | `wv_error` |  |  |
| `EWMRoute` |  | |  | `route_id` |  |  |
| `SalesOrder` |  | |  | `refdocno_so` |  |  |
| `ActivityArea` |  | |  | `aarea` |  |  |
| `WarehouseProcessType` |  | |  | `procty` |  |  |
| `EWMWaveItemSimulationStatus` |  | |  | `sim_status_itm` |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck:#MANDATORY  //#PRIVILEGED_ONLY
@EndUserText.label: 'Warehouse Wave Item'
@VDM.viewType:#BASIC
@ObjectModel.usageType: {serviceQuality: #A,
                         dataClass: #TRANSACTIONAL,
                         sizeCategory: #M}
@Analytics.internalName:#LOCAL  
@AccessControl.personalData.blocking: #REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:[ #CDS_MODELING_DATA_SOURCE ]

define view entity I_EWM_WaveItem_3 
  as select from /scwm/waveitm
{
  key lgnum                                     as EWMWarehouse, 
  key cast( wave as ewm_de_wave )               as EWMWave,
  key cast( wave_itm as ewm_de_waveitem )       as EWMWaveItem,
      stat_cr                                   as WarehouseTaskCreationStatus,
      @Semantics.quantity.unitOfMeasure: 'ITEMWEIGHTUNIT' 
      weight                                    as ItemWeight,
      unit_w                                    as ItemWeightUnit,
      @Semantics.quantity.unitOfMeasure: 'ITEMVOLUMEUNIT' 
      volum                                     as ItemVolume,
      unit_v                                    as ItemVolumeUnit,
      capa                                      as EWMWaveItemCnsmdCapacityValue,
      shipto                                    as ShipToParty,
      matnr                                     as ProductName,
      charg                                     as Batch,
      owner                                     as EWMStockOwner,
      entitled                                  as EntitledToDisposeParty,
      @Semantics.quantity.unitOfMeasure: 'ITEMQUANTITYUNIT' 
      quan                                      as ItemQuantity,
      unit                                      as ItemQuantityUnit,
//      tu_num                                    as TranspUnitInternalNumber,
      rdocid                                    as ReferenceDocumentUUID,
      ritmid                                    as ReferenceDocumentItemUUID,
      split_id                                  as EWMWaveSplitNumber,
      cast(docno as ewm_de_ref_dlv_no_conv preserving type)                                    as EWMRefDeliveryDocumentNumber,
      itemno                                    as EWMRefDeliveryDocumentItem,
//      type_2st                                  as TwoStepPickingWaveItemCategory,
      wv_error                                  as EWMWaveItemErrorStatus,
      route_id                                  as EWMRoute,
      refdocno_so                               as SalesOrder,
      aarea                                     as ActivityArea,
      procty                                    as WarehouseProcessType,
      sim_status_itm                            as EWMWaveItemSimulationStatus
}
```
