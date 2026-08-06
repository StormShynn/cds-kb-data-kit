---
name: I_EWM_PHYSINVTRYITEMROW
description: Ewm Physinvtryitemrow
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
# I_EWM_PHYSINVTRYITEMROW

**Ewm Physinvtryitemrow**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `EWMWarehouse` | `_PIDocItem.EWMWarehouse` |
| key `PhysicalInventoryDocNumber` | `_PIDocItem.PhysicalInventoryDocNumber` |
| key `PhysicalInventoryDocYear` | `_PIDocItem.PhysicalInventoryDocYear` |
| key `PhysicalInventoryItemNumber` | `_PIDocItem.PhysicalInventoryItemNumber` |
| key `LineIndexOfPInvItem` | `_PIDocItem.LineIndexOfPInvItem` |
| `PhysicalInventoryDocumentType` | `_PIDocItem.PhysicalInventoryDocumentType` |
| `PhysicalInventoryItemLevel` | `_PIDocItem.PhysicalInventoryItemLevel` |
| `PInvItemParentType` | `_PIDocItem.PInvItemParentType` |
| `PhysicalInventoryDocumentUUID` | `_PIDocItem.PhysicalInventoryDocumentUUID` |
| `EWMPhysicalInventoryStatus` | `_PIDocItem.EWMPhysicalInventoryStatus` |
| `EWMStorageType` | `_PIDocItem.EWMStorageType` |
| `EWMStorageBin` | `cast(_PIDocItem.EWMStorageBin as /scwm/lgpla )` |
| `ActivityArea` | `_PIDocItem.ActivityArea` |
| `EWMStorageBinIsEmpty` | `_PIDocItem.EWMStorageBinIsEmpty` |
| `ParentHandlingUnitNumber` | `_PIDocItem.ParentHandlingUnitNumber` |
| `PInvItemParentUUID` | `_PIDocItem.PInvItemParentUUID` |
| `PhysicalInventoryStockUUID` | `_PIDocItem.PhysicalInventoryStockUUID` |
| `PhysicalInventoryItemType` | `_PIDocItem.PhysicalInventoryItemType` |
| `HandlingUnitNumber` | `_PIDocItem.HandlingUnitNumber` |
| `HndlgUnitItemCountedIsComplete` | `_PIDocItem.HndlgUnitItemCountedIsComplete` |
| `HndlgUnitItemCountedIsEmpty` | `_PIDocItem.HndlgUnitItemCountedIsEmpty` |
| `HndlgUnitItemCountedIsNotExist` | `_PIDocItem.HndlgUnitItemCountedIsNotExist` |
| `PackagingMaterial` | `_PIDocItem.PackagingMaterial` |
| `HandlingUnitType` | `_PIDocItem.HandlingUnitType` |
| `ProductUUID` | `_PIItemBusKey.ProductUUID` |
| `Product` | `_PIItemBusKey.Product` |
| `BatchUUID` | `_PIItemBusKey.BatchUUID` |
| `Batch` | `_PIItemBusKey.Batch` |
| `SerialNumberRequiredLevel` | `_PIItemBusKey.SerialNumberRequiredLevel` |
| `EWMStockType` | `_PIItemBusKey.EWMStockType` |
| `EWMStockOwner` | `_PIItemBusKey.EWMStockOwner` |
| `StockOwnerPartnerRole` | `_PIItemBusKey.StockOwnerPartnerRole` |
| `EWMStockUsage` | `_PIItemBusKey.EWMStockUsage` |
| `EntitledToDisposeParty` | `_PIItemBusKey.EntitledToDisposeParty` |
| `EntitledToDisposePartnerRole` | `_PIItemBusKey.EntitledToDisposePartnerRole` |
| `StockDocumentCategory` | `_PIItemBusKey.StockDocumentCategory` |
| `WBSElementInternalID` | `_PIItemBusKey.WBSElementInternalID` |
| `WBSElementExternalID` | `_PIItemBusKey.WBSElementExternalID` |
| `SpecialStockIdfgSalesOrder` | `_PIItemBusKey.SpecialStockIdfgSalesOrder` |
| `SpecialStockIdfgSalesOrderItem` | `_PIItemBusKey.SpecialStockIdfgSalesOrderItem` |
| `WhseQualityInspectionType` | `_PIDocItem.WhseQualityInspectionType` |
| `QualityInspectionDocUUID` | `_PIDocItem.QualityInspectionDocUUID` |
| `QualityInspectionDocument` | `_QualityInspection.QualityInspectionDocument` |
| `StockIdentificationNumber` | `_PIDocItem.StockIdentificationNumber` |
| `EWMStockReferenceDocCategory` | `_PIDocItem.EWMStockReferenceDocCategory` |
| `EWMStockRefDocumentUUID` | `_PIDocItem.EWMStockRefDocumentUUID` |
| `EWMStockRefDocItemUUID` | `_PIDocItem.EWMStockRefDocItemUUID` |
| `EWMStockReferenceDocument` | `case _PIDocItem.EWMStockReferenceDocCategory when 'PDI' then cast(_InbDeliveryItem.InboundDelivery as ewm_de_referencedocument preserving type ) when 'PDO' then cast(_WarehouseRequestOutItem.EWMWarehouseRequest as ewm_de_referencedocument preserving type ) when 'SPC' then cast(_WarehouseRequestOutItem.EWMWarehouseRequest as ewm_de_referencedocument preserving type ) when 'WMR' then cast(_WarehouseRequestOutItem.EWMWarehouseRequest as ewm_de_referencedocument preserving type ) when 'PWR' then cast(_ProdnMatlReqItem.EWMProductionMaterialRequest as ewm_de_referencedocument preserving type ) else cast( cast('' as /scdl/dl_docno_int) as ewm_de_referencedocument preserving type ) end` |
| `EWMStockReferenceDocumentItem` | `case _PIDocItem.EWMStockReferenceDocCategory when 'PDI' then cast(_InbDeliveryItem.EWMInboundDeliveryItem as ewm_de_referencedocumentitem preserving type ) when 'PDO' then cast(_WarehouseRequestOutItem.EWMWarehouseRequestItem as ewm_de_referencedocumentitem preserving type ) when 'SPC' then cast(_WarehouseRequestOutItem.EWMWarehouseRequestItem as ewm_de_referencedocumentitem preserving type ) when 'WMR' then cast(_WarehouseRequestOutItem.EWMWarehouseRequestItem as ewm_de_referencedocumentitem preserving type ) when 'PWR' then cast(_ProdnMatlReqItem.EWMProductionMaterialReqItem as ewm_de_referencedocumentitem preserving type ) else cast( cast('' as /scdl/dl_itemno) as ewm_de_referencedocumentitem preserving type ) end` |
| `EWMGoodsReceiptDateTime` | `_PIDocItem.EWMGoodsReceiptDateTime` |
| `ShelfLifeExpirationDate` | `_PIDocItem.ShelfLifeExpirationDate` |
| `CountryOfOrigin` | `_PIDocItem.CountryOfOrigin` |
| `MatlBatchIsInRstrcdUseStock` | `_PIDocItem.MatlBatchIsInRstrcdUseStock` |
| `PInvIsZeroCount` | `_PIDocItem.PInvIsZeroCount` |
| `PInvQuantitySequence` | `_PIDocItem.PInvQuantitySequence` |
| `EWMPhysInvtrySuggestedQty` | `} _PIDocItem.EWMPhysInvtrySuggestedQty` |
| `EWMPhysInvtrySuggestedQtyUnit` | `_PIDocItem.EWMPhysInvtrySuggestedQtyUnit` |
| `EWMPhysInvtryBookQuantity` | `} _PIDocItem.EWMPhysInvtryBookQuantity` |
| `EWMPhysInvtryBookQtyUnit` | `_PIDocItem.EWMPhysInvtryBookQtyUnit` |
| `EWMPhysInvtryCountedQuantity` | `} _PIDocItem.EWMPhysInvtryCountedQuantity` |
| `EWMPhysInvtryCountedQtyUnit` | `_PIDocItem.EWMPhysInvtryCountedQtyUnit` |
| `EWMPhysInvtryEnteredQuantity` | `} _PIDocItem.EWMPhysInvtryEnteredQuantity` |
| `EWMPhysInvtryEnteredQtyUnit` | `_PIDocItem.EWMPhysInvtryEnteredQtyUnit` |
| `EWMPhysInvtryDiffQuantity` | `} _PIDocItem.EWMPhysInvtryDiffQuantity` |
| `EWMPhysInvtryDiffQuantityUnit` | `_PIDocItem.EWMPhysInvtryDiffQuantityUnit` |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PIItemBusKey` | `P_EWM_PInvDocBusKeyItem` | [0..1] |
| `_QualityInspection` | `I_EWM_QltyInspDocUUID` | [0..1] |
| `_InbDeliveryItem` | `I_EWM_InbDeliveryItemBasic` | [0..1] |
| `_WarehouseRequestOutItem` | `I_EWM_WarehouseRequestOutItem` | [0..1] |
| `_ProdnMatlReqItem` | `I_EWM_ProdnMatlReqItem` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Row of PInv Item with Quantity in Whse'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType: {serviceQuality: #D,
                         dataClass: #MIXED,
                         sizeCategory: #XL}

//@AccessControl.personalData.blocking: #NOT_REQUIRED
//@Analytics.dataExtraction.enabled:true
//@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ]
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE ]
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@ObjectModel.sapObjectNodeType.name: 'WhsePhysicalInventoryCountItem'
@VDM.viewType:#COMPOSITE

@Consumption.dbHints: ['USE_HEX_PLAN']
define view entity I_EWM_PhysInvtryItemRow

  as select from P_EWM_PhysInventoryItemRow07 as _PIDocItem

  association [0..1] to P_EWM_PInvDocBusKeyItem       as _PIItemBusKey            on  _PIItemBusKey.PhysicalInventoryDocumentUUID  = _PIDocItem.PhysicalInventoryDocumentUUID
                                                                                  and _PIItemBusKey.PhysicalInventoryItemNumber    = _PIDocItem.PhysicalInventoryItemNumber
                                                                                  and _PIItemBusKey.LineIndexOfPInvItem            = _PIDocItem.LineIndexOfPInvItem
                                                                                  and _PIItemBusKey.PhysicalInventoryChangeVersion = _PIDocItem.PhysicalInventoryChangeVersion
                                                                                  and _PIItemBusKey.PInvDocumentItemType           = _PIDocItem.PInvDocumentItemType
  //Quality Inspection
  association [0..1] to I_EWM_QltyInspDocUUID         as _QualityInspection       on  _QualityInspection.QualityInspectionDocUUID = _PIDocItem.QualityInspectionDocUUID

  //associations for Reference Document / Document Item
  association [0..1] to I_EWM_InbDeliveryItemBasic    as _InbDeliveryItem         on  _InbDeliveryItem.InboundDeliveryUUID     = _PIDocItem.EWMStockRefDocumentUUID
                                                                                  and _InbDeliveryItem.InboundDeliveryItemUUID = _PIDocItem.EWMStockRefDocItemUUID

  association [0..1] to I_EWM_WarehouseRequestOutItem as _WarehouseRequestOutItem on  _WarehouseRequestOutItem.EWMWarehouseRequestUUID     = _PIDocItem.EWMStockRefDocumentUUID
                                                                                  and _WarehouseRequestOutItem.EWMWarehouseRequestItemUUID = _PIDocItem.EWMStockRefDocItemUUID

  association [0..1] to I_EWM_ProdnMatlReqItem        as _ProdnMatlReqItem        on  _ProdnMatlReqItem.EWMProductionMaterialReqUUID = _PIDocItem.EWMStockRefDocumentUUID
                                                                                  and _ProdnMatlReqItem.EWMProductionMatlReqItemUUID = _PIDocItem.EWMStockRefDocItemUUID

{
  key _PIDocItem.EWMWarehouse                        as EWMWarehouse,
  key _PIDocItem.PhysicalInventoryDocNumber          as PhysicalInventoryDocNumber,
  key _PIDocItem.PhysicalInventoryDocYear            as PhysicalInventoryDocYear,
  key _PIDocItem.PhysicalInventoryItemNumber         as PhysicalInventoryItemNumber,
  key _PIDocItem.LineIndexOfPInvItem                 as LineIndexOfPInvItem,

      _PIDocItem.PhysicalInventoryDocumentType       as PhysicalInventoryDocumentType,
      // _PIDocItem.PInvQuantitySequence                as PInvQuantitySequence,
      _PIDocItem.PhysicalInventoryItemLevel          as PhysicalInventoryItemLevel,
      _PIDocItem.PInvItemParentType                  as PInvItemParentType,
      _PIDocItem.PhysicalInventoryDocumentUUID       as PhysicalInventoryDocumentUUID,
      _PIDocItem.EWMPhysicalInventoryStatus          as EWMPhysicalInventoryStatus,

      /*-- Parent Object Related --*/
      _PIDocItem.EWMStorageType                      as EWMStorageType, // newly added, not from _PIItemBusKey
      cast(_PIDocItem.EWMStorageBin as /scwm/lgpla ) as EWMStorageBin,
      _PIDocItem.ActivityArea                        as ActivityArea,
      _PIDocItem.EWMStorageBinIsEmpty                as EWMStorageBinIsEmpty,
      _PIDocItem.ParentHandlingUnitNumber            as ParentHandlingUnitNumber,
      _PIDocItem.PInvItemParentUUID                  as PInvItemParentUUID,

      /*-- Item Object Related --*/
      _PIDocItem.PhysicalInventoryStockUUID          as PhysicalInventoryStockUUID,
      /*------- item:HU -------*/
      _PIDocItem.PhysicalInventoryItemType           as PhysicalInventoryItemType,
      _PIDocItem.HandlingUnitNumber                  as HandlingUnitNumber,
      _PIDocItem.HndlgUnitItemCountedIsComplete      as HndlgUnitItemCountedIsComplete,
      _PIDocItem.HndlgUnitItemCountedIsEmpty         as HndlgUnitItemCountedIsEmpty,
      _PIDocItem.HndlgUnitItemCountedIsNotExist      as HndlgUnitItemCountedIsNotExist,
      //_PIItemBusKey.PackagingMaterial                as PackagingMaterial,
      //_PIItemBusKey.HandlingUnitType                 as HandlingUnitType,
      _PIDocItem.PackagingMaterial                   as PackagingMaterial,
      _PIDocItem.HandlingUnitType                    as HandlingUnitType,
      /*------- item:Stock -------*/
      _PIItemBusKey.ProductUUID                      as ProductUUID,
      _PIItemBusKey.Product                          as Product,
      _PIItemBusKey.BatchUUID                        as BatchUUID,
      _PIItemBusKey.Batch                            as Batch,
      _PIItemBusKey.SerialNumberRequiredLevel        as SerialNumberRequiredLevel,
      _PIItemBusKey.EWMStockType                     as EWMStockType,
      _PIItemBusKey.EWMStockOwner                    as EWMStockOwner,
      _PIItemBusKey.StockOwnerPartnerRole            as StockOwnerPartnerRole,
      _PIItemBusKey.EWMStockUsage                    as EWMStockUsage,
      _PIItemBusKey.EntitledToDisposeParty           as EntitledToDisposeParty,
      _PIItemBusKey.EntitledToDisposePartnerRole     as EntitledToDisposePartnerRole,
      /*-- special stocks --*/
      _PIItemBusKey.StockDocumentCategory            as StockDocumentCategory,
      _PIItemBusKey.WBSElementInternalID             as WBSElementInternalID,
      _PIItemBusKey.WBSElementExternalID             as WBSElementExternalID,
      _PIItemBusKey.SpecialStockIdfgSalesOrder       as SpecialStockIdfgSalesOrder,
      _PIItemBusKey.SpecialStockIdfgSalesOrderItem   as SpecialStockIdfgSalesOrderItem,

      /*-- Stock Soft Key Related (Quant Seperation)--*/
      _PIDocItem.WhseQualityInspectionType           as WhseQualityInspectionType,
      _PIDocItem.QualityInspectionDocUUID            as QualityInspectionDocUUID,
      _QualityInspection.QualityInspectionDocument   as QualityInspectionDocument,
      _PIDocItem.StockIdentificationNumber           as StockIdentificationNumber,
      /*-- reference doc --*/
      _PIDocItem.EWMStockReferenceDocCategory        as EWMStockReferenceDocCategory,
      _PIDocItem.EWMStockRefDocumentUUID             as EWMStockRefDocumentUUID,
      _PIDocItem.EWMStockRefDocItemUUID              as EWMStockRefDocItemUUID,
      case _PIDocItem.EWMStockReferenceDocCategory
        when 'PDI' then cast(_InbDeliveryItem.InboundDelivery as ewm_de_referencedocument preserving type )
        when 'PDO' then cast(_WarehouseRequestOutItem.EWMWarehouseRequest as ewm_de_referencedocument preserving type )
        when 'SPC' then cast(_WarehouseRequestOutItem.EWMWarehouseRequest as ewm_de_referencedocument preserving type )
        when 'WMR' then cast(_WarehouseRequestOutItem.EWMWarehouseRequest as ewm_de_referencedocument preserving type )
        when 'PWR' then cast(_ProdnMatlReqItem.EWMProductionMaterialRequest as ewm_de_referencedocument preserving type )
        else cast( cast('' as /scdl/dl_docno_int) as ewm_de_referencedocument preserving type )
        end                                          as EWMStockReferenceDocument,
      case _PIDocItem.EWMStockReferenceDocCategory
        when 'PDI' then cast(_InbDeliveryItem.EWMInboundDeliveryItem as ewm_de_referencedocumentitem preserving type )
        when 'PDO' then cast(_WarehouseRequestOutItem.EWMWarehouseRequestItem as ewm_de_referencedocumentitem preserving type )
        when 'SPC' then cast(_WarehouseRequestOutItem.EWMWarehouseRequestItem as ewm_de_referencedocumentitem preserving type )
        when 'WMR' then cast(_WarehouseRequestOutItem.EWMWarehouseRequestItem as ewm_de_referencedocumentitem preserving type )
        when 'PWR' then cast(_ProdnMatlReqItem.EWMProductionMaterialReqItem as ewm_de_referencedocumentitem preserving type )
        else cast( cast('' as /scdl/dl_itemno) as ewm_de_referencedocumentitem preserving type )
        end                                          as EWMStockReferenceDocumentItem,

      /*-- Stock Soft Key Related (without Quant Seperation)--*/
      _PIDocItem.EWMGoodsReceiptDateTime             as EWMGoodsReceiptDateTime,
      _PIDocItem.ShelfLifeExpirationDate             as ShelfLifeExpirationDate,
      _PIDocItem.CountryOfOrigin                     as CountryOfOrigin,
      _PIDocItem.MatlBatchIsInRstrcdUseStock         as MatlBatchIsInRstrcdUseStock,


      /*-- Stock Quantity Related --*/
      @Semantics.booleanIndicator:true
      _PIDocItem.PInvIsZeroCount                     as PInvIsZeroCount,
      _PIDocItem.PInvQuantitySequence                as PInvQuantitySequence,
      // Suggested Quantity & Unit
      @Semantics: {quantity : {unitOfMeasure: 'EWMPhysInvtrySuggestedQtyUnit'}}
      _PIDocItem.EWMPhysInvtrySuggestedQty           as EWMPhysInvtrySuggestedQty,
      _PIDocItem.EWMPhysInvtrySuggestedQtyUnit       as EWMPhysInvtrySuggestedQtyUnit,

      // Booked Quantity & Unit
      @Semantics: {quantity : {unitOfMeasure: 'EWMPhysInvtryBookQtyUnit'}}
      _PIDocItem.EWMPhysInvtryBookQuantity           as EWMPhysInvtryBookQuantity,
      _PIDocItem.EWMPhysInvtryBookQtyUnit            as EWMPhysInvtryBookQtyUnit,

      // Counted Quantity & Unit
      @Semantics: {quantity : {unitOfMeasure: 'EWMPhysInvtryCountedQtyUnit'}}
      _PIDocItem.EWMPhysInvtryCountedQuantity        as EWMPhysInvtryCountedQuantity,
      _PIDocItem.EWMPhysInvtryCountedQtyUnit         as EWMPhysInvtryCountedQtyUnit,

      // Entered Quantity & Unit
      @Semantics: {quantity : {unitOfMeasure: 'EWMPhysInvtryEnteredQtyUnit'}}
      _PIDocItem.EWMPhysInvtryEnteredQuantity        as EWMPhysInvtryEnteredQuantity,
      _PIDocItem.EWMPhysInvtryEnteredQtyUnit         as EWMPhysInvtryEnteredQtyUnit,

      // Difference Quantity & Unit
      @Semantics: {quantity : {unitOfMeasure: 'EWMPhysInvtryDiffQuantityUnit'}}
      _PIDocItem.EWMPhysInvtryDiffQuantity           as EWMPhysInvtryDiffQuantity,
      _PIDocItem.EWMPhysInvtryDiffQuantityUnit       as EWMPhysInvtryDiffQuantityUnit

}
```
