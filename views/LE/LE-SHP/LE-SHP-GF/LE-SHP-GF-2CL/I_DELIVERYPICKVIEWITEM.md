---
name: I_DELIVERYPICKVIEWITEM
description: Deliverypickviewitem
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-GF
  - interface-view
  - delivery
  - item-level
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_DELIVERYPICKVIEWITEM

**Deliverypickviewitem**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `DeliveryDocument` | `I_DeliveryDocumentItem.DeliveryDocument` |
| key `DeliveryDocumentItem` | `I_DeliveryDocumentItem.DeliveryDocumentItem` |
| `DeliveryDocumentItemText` | `I_DeliveryDocumentItem.DeliveryDocumentItemText` |
| `RetailPromotion` | `I_DeliveryDocumentItem.RetailPromotion` |
| `GoodsMovementType` | `I_DeliveryDocumentItem.GoodsMovementType` |
| `Batch` | `I_DeliveryDocumentItem.Batch` |
| `InventoryValuationType` | `I_DeliveryDocumentItem.InventoryValuationType` |
| `MaterialByCustomer` | `I_DeliveryDocumentItem.MaterialByCustomer` |
| `ActualDeliveryQuantity` | `I_DeliveryDocumentItem.ActualDeliveryQuantity` |
| `ActualDeliveredQtyInBaseUnit` | `I_DeliveryDocumentItem.ActualDeliveredQtyInBaseUnit` |
| `Warehouse` | `I_DeliveryDocumentItem.Warehouse` |
| `StorageLocation` | `I_DeliveryDocumentItem.StorageLocation` |
| `WarehouseStorageBin` | `I_DeliveryDocumentItem.WarehouseStorageBin` |
| `StorageBin` | `I_DeliveryDocumentItem.StorageBin` |
| `StorageType` | `I_DeliveryDocumentItem.StorageType` |
| `Material` | `I_DeliveryDocumentItem.Material` |
| `ProductAvailabilityDate` | `I_DeliveryDocumentItem.ProductAvailabilityDate` |
| `BaseUnit` | `I_DeliveryDocumentItem.BaseUnit` |
| `HigherLvlItmOfBatSpltItm` | `I_DeliveryDocumentItem.HigherLvlItmOfBatSpltItm` |
| `DeliveryToBaseQuantityDnmntr` | `I_DeliveryDocumentItem.DeliveryToBaseQuantityDnmntr` |
| `DeliveryToBaseQuantityNmrtr` | `I_DeliveryDocumentItem.DeliveryToBaseQuantityNmrtr` |
| `DeliveryQuantityUnit` | `I_DeliveryDocumentItem.DeliveryQuantityUnit` |
| `Plant` | `I_DeliveryDocumentItem.Plant` |
| `InventorySpecialStockType` | `I_DeliveryDocumentItem.InventorySpecialStockType` |
| `PickingControl` | `I_DeliveryDocumentItem.PickingControl` |
| `ReferenceSDDocument` | `I_DeliveryDocumentItem.ReferenceSDDocument` |
| `ReferenceSDDocumentItem` | `I_DeliveryDocumentItem.ReferenceSDDocumentItem` |
| `ReferenceSDDocumentCategory` | `I_DeliveryDocumentItem.ReferenceSDDocumentCategory` |
| `ItemGrossWeight` | `I_DeliveryDocumentItem.ItemGrossWeight` |
| `ItemNetWeight` | `I_DeliveryDocumentItem.ItemNetWeight` |
| `ItemWeightUnit` | `I_DeliveryDocumentItem.ItemWeightUnit` |
| `ItemVolume` | `I_DeliveryDocumentItem.ItemVolume` |
| `ItemVolumeUnit` | `I_DeliveryDocumentItem.ItemVolumeUnit` |
| `MaterialIsBatchManaged` | `I_DeliveryDocumentItem.MaterialIsBatchManaged` |
| `MaterialIsIntBatchManaged` | `I_DeliveryDocumentItem.MaterialIsIntBatchManaged` |
| `ReceivingPoint` | `I_DeliveryDocumentItem.ReceivingPoint` |
| `DepartmentClassificationByCust` | `I_DeliveryDocumentItem.DepartmentClassificationByCust` |
| `NumberOfSerialNumbers` | `I_DeliveryDocumentItem.NumberOfSerialNumbers` |
| `BatchBySupplier` | `I_DeliveryDocumentItem.BatchBySupplier` |
| `InternationalArticleNumber` | `I_DeliveryDocumentItem.InternationalArticleNumber` |
| `WarehouseStockCategory` | `I_DeliveryDocumentItem.WarehouseStockCategory` |
| `IssgOrRcvgStockCategory` | `I_DeliveryDocumentItem.IssgOrRcvgStockCategory` |
| `IssgOrRcvgMaterial` | `I_DeliveryDocumentItem.IssgOrRcvgMaterial` |
| `IssuingOrReceivingPlant` | `I_DeliveryDocumentItem.IssuingOrReceivingPlant` |
| `IssuingOrReceivingStorageLoc` | `I_DeliveryDocumentItem.IssuingOrReceivingStorageLoc` |
| `IssgOrRcvgBatch` | `I_DeliveryDocumentItem.IssgOrRcvgBatch` |
| `IssgOrRcvgSpclStockInd` | `I_DeliveryDocumentItem.IssgOrRcvgSpclStockInd` |
| `WarehouseStagingArea` | `I_DeliveryDocumentItem.WarehouseStagingArea` |
| `PrimaryPostingSwitch` | `I_DeliveryDocumentItem.PrimaryPostingSwitch` |
| `InspectionLot` | `I_DeliveryDocumentItem.InspectionLot` |
| `OrderID` | `I_DeliveryDocumentItem.OrderID` |
| `ShelfLifeExpirationDate` | `I_DeliveryDocumentItem.ShelfLifeExpirationDate` |
| `WarehouseActivityStatus` | `I_DeliveryDocumentItem.WarehouseActivityStatus` |
| `PickingStatus` | `I_DeliveryDocumentItem.PickingStatus` |
| `HigherLevelItem` | `I_DeliveryDocumentItem.HigherLevelItem` |
| `HigherLevelItemUsage` | `I_DeliveryDocumentItem.HigherLevelItemUsage` |
| `DeliveryGroup` | `I_DeliveryDocumentItem.DeliveryGroup` |
| `_DeliveryDocumentItem` | *Association* |
| `_DocumentFlow` | *Association* |
| `_DeliveryDocument` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DeliveryDocumentItem` | `I_DeliveryDocumentItem` | [1..1] |
| `_DocumentFlow` | `I_DeliveryPickViewDocFlow` | [0..*] |
| `_PickViewItemExtension` | `E_DeliveryDocumentItem` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IDELIVERYPICKI'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@EndUserText.label: 'Delivery Pick List Item'
@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #NONE ]

define view I_DeliveryPickViewItem
  as select from I_DeliveryDocumentItem
  association [1..1] to I_DeliveryDocumentItem    as _DeliveryDocumentItem  on  $projection.DeliveryDocument     = _DeliveryDocumentItem.DeliveryDocument
                                                                            and $projection.DeliveryDocumentItem = _DeliveryDocumentItem.DeliveryDocumentItem                                                                                                                                                        
  association [0..*] to I_DeliveryPickViewDocFlow as _DocumentFlow          on  _DocumentFlow.PrecedingDocument     = $projection.DeliveryDocument
                                                                            and _DocumentFlow.PrecedingDocumentItem = $projection.DeliveryDocumentItem
  association [0..1] to E_DeliveryDocumentItem    as _PickViewItemExtension on  $projection.DeliveryDocument     = _PickViewItemExtension.DeliveryDocument
                                                                            and $projection.DeliveryDocumentItem = _PickViewItemExtension.DeliveryDocumentItem
{

      // key
  key I_DeliveryDocumentItem.DeliveryDocument as DeliveryDocument,
  key I_DeliveryDocumentItem.DeliveryDocumentItem as DeliveryDocumentItem,

      I_DeliveryDocumentItem.DeliveryDocumentItemText,
      I_DeliveryDocumentItem.RetailPromotion,
      -- I_DeliveryDocumentItem.serail,
      -- I_DeliveryDocumentItem.sgt_rcat,
      --I_DeliveryDocumentItem.sgt_scat,
      -- I_DeliveryDocumentItem.wrf_charstc1,
      -- I_DeliveryDocumentItem.wrf_charstc2,
      -- I_DeliveryDocumentItem.wrf_charstc3,
      I_DeliveryDocumentItem.GoodsMovementType,
      --I_DeliveryDocumentItem.bwlvs,
      I_DeliveryDocumentItem.Batch,
      I_DeliveryDocumentItem.InventoryValuationType,
      I_DeliveryDocumentItem.MaterialByCustomer,
      --I_DeliveryDocumentItem.kzdlg,
      @Semantics.quantity.unitOfMeasure:'BaseUnit'
      I_DeliveryDocumentItem.ActualDeliveryQuantity,
      @Semantics.quantity.unitOfMeasure:'BaseUnit'
      I_DeliveryDocumentItem.ActualDeliveredQtyInBaseUnit,
      --I_DeliveryDocumentItem.lfimg_flo,
      --I_DeliveryDocumentItem.lgmng_flo,
      I_DeliveryDocumentItem.Warehouse,
      I_DeliveryDocumentItem.StorageLocation,
      I_DeliveryDocumentItem.WarehouseStorageBin,
      I_DeliveryDocumentItem.StorageBin,
      I_DeliveryDocumentItem.StorageType,
      -- I_DeliveryDocumentItem.flgwm,
      I_DeliveryDocumentItem.Material,
      I_DeliveryDocumentItem.ProductAvailabilityDate,
      @Semantics.unitOfMeasure: true
      I_DeliveryDocumentItem.BaseUnit,
//      I_DeliveryDocumentItem.DeliveryDocumentItem,
      I_DeliveryDocumentItem.HigherLvlItmOfBatSpltItm,
      I_DeliveryDocumentItem.DeliveryToBaseQuantityDnmntr,
      I_DeliveryDocumentItem.DeliveryToBaseQuantityNmrtr,
      --I_DeliveryDocumentItem.umrev,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_DeliveryDocumentStdVH', element: 'DeliveryDocument' } } ]
//      I_DeliveryDocumentItem.DeliveryDocument,
      I_DeliveryDocumentItem.DeliveryQuantityUnit,
      I_DeliveryDocumentItem.Plant,
      I_DeliveryDocumentItem.InventorySpecialStockType,
      I_DeliveryDocumentItem.PickingControl,
      I_DeliveryDocumentItem.ReferenceSDDocument,
      I_DeliveryDocumentItem.ReferenceSDDocumentItem,
      I_DeliveryDocumentItem.ReferenceSDDocumentCategory,
      @Semantics.quantity.unitOfMeasure:'BaseUnit'
      I_DeliveryDocumentItem.ItemGrossWeight,
      @Semantics.quantity.unitOfMeasure:'BaseUnit'
      I_DeliveryDocumentItem.ItemNetWeight,
      I_DeliveryDocumentItem.ItemWeightUnit,
      @Semantics.quantity.unitOfMeasure:'BaseUnit'
      I_DeliveryDocumentItem.ItemVolume,
      I_DeliveryDocumentItem.ItemVolumeUnit,
      I_DeliveryDocumentItem.MaterialIsBatchManaged,
      I_DeliveryDocumentItem.MaterialIsIntBatchManaged,
      I_DeliveryDocumentItem.ReceivingPoint,
      I_DeliveryDocumentItem.DepartmentClassificationByCust,
      I_DeliveryDocumentItem.NumberOfSerialNumbers,
      -- I_DeliveryDocumentItem.kzwi1,
      --I_DeliveryDocumentItem.kzwi2,
      --I_DeliveryDocumentItem.kzwi3,
      --I_DeliveryDocumentItem.kzwi4,
      --I_DeliveryDocumentItem.kzwi5,
      --I_DeliveryDocumentItem.kzwi6,
      --I_DeliveryDocumentItem.kpein,
      --I_DeliveryDocumentItem.kmein,
      -- I_DeliveryDocumentItem.netpr,
      --I_DeliveryDocumentItem.netwr,
      --I_DeliveryDocumentItem.uecha,
      --I_DeliveryDocumentItem.ps_psp_pnr,
      --I_DeliveryDocumentItem.vbelv,
      --I_DeliveryDocumentItem.posnv,
      --I_DeliveryDocumentItem.magrv,
      --I_DeliveryDocumentItem.kzfme,
      I_DeliveryDocumentItem.BatchBySupplier,
      I_DeliveryDocumentItem.InternationalArticleNumber,
      --I_DeliveryDocumentItem.kzbew,
      -- I_DeliveryDocumentItem.mtart,
      -- I_DeliveryDocumentItem.rblvs,
      I_DeliveryDocumentItem.WarehouseStockCategory,
      I_DeliveryDocumentItem.IssgOrRcvgStockCategory,
      I_DeliveryDocumentItem.IssgOrRcvgMaterial,
      I_DeliveryDocumentItem.IssuingOrReceivingPlant,
      I_DeliveryDocumentItem.IssuingOrReceivingStorageLoc,
      I_DeliveryDocumentItem.IssgOrRcvgBatch,
      I_DeliveryDocumentItem.IssgOrRcvgSpclStockInd,
      -- I_DeliveryDocumentItem.sonum,
      --I_DeliveryDocumentItem.usonu,
      I_DeliveryDocumentItem.WarehouseStagingArea,
      --I_DeliveryDocumentItem.kzech,
      --I_DeliveryDocumentItem.hupos,
      I_DeliveryDocumentItem.PrimaryPostingSwitch,
      I_DeliveryDocumentItem.InspectionLot,
      --I_DeliveryDocumentItem.rsnum,
      --I_DeliveryDocumentItem.rsart,
      --I_DeliveryDocumentItem.rspos,
      I_DeliveryDocumentItem.OrderID,
      --I_DeliveryDocumentItem.pckpf,
      I_DeliveryDocumentItem.ShelfLifeExpirationDate,
      I_DeliveryDocumentItem.WarehouseActivityStatus,

      I_DeliveryDocumentItem.PickingStatus,

      I_DeliveryDocumentItem.HigherLevelItem,
      I_DeliveryDocumentItem.HigherLevelItemUsage,
      I_DeliveryDocumentItem.DeliveryGroup,
      
      /* Associations */
      _DeliveryDocument,
      _DeliveryDocumentItem,
      _DocumentFlow

}
```
