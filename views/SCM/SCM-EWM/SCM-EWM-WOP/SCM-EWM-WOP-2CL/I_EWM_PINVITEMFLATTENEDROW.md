---
name: I_EWM_PINVITEMFLATTENEDROW
description: Ewm Pinvitemflattenedrow
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
# I_EWM_PINVITEMFLATTENEDROW

**Ewm Pinvitemflattenedrow**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `EWMWarehouse` | `_PIHeader.EWMWarehouse` |
| key `PhysicalInventoryDocNumber` | `_PIHeader.PhysicalInventoryDocNumber` |
| key `PhysicalInventoryDocYear` | `_PIHeader.PhysicalInventoryDocYear` |
| key `PhysicalInventoryItemNumber` | `item.PhysicalInventoryItemNumber` |
| key `LineIndexOfPInvItem` | `item.LineIndexOfPInvItem` |
| `EWMStorageType` | `_storagebin.EWMStorageType` |
| `EWMStorageBin` | `_storagebin.EWMStorageBin` |
| `EWMPhysicalInventoryStatus` | `item.EWMPhysicalInventoryStatus` |
| `ActivityArea` | `_PIAreaMapping.ActivityArea` |
| `EWMStorageBinIsEmpty` | `cast( _PIItemBinEmpty.EWMStorageBinIsEmpty as boole_d )` |
| `HandlingUnitNumber` | `case when item.HandlingUnitVirtual = 'A' then '' when _parent.ParentHandlingUnitNumber is not initial then _parent.ParentHandlingUnitNumber when item.ParentHandlingUnitNumber is not initial then item.ParentHandlingUnitNumber else item.HandlingUnitNumber end` |
| `HndlgUnitItemCountedIsComplete` | `case when _parent.HandlingUnitNumber is not initial then _parent.HndlgUnitItemCountedIsComplete else item.HndlgUnitItemCountedIsComplete end` |
| `HndlgUnitItemCountedIsEmpty` | `case when _parent.HandlingUnitNumber is not initial then _parent.HndlgUnitItemCountedIsEmpty else item.HndlgUnitItemCountedIsEmpty end` |
| `HndlgUnitItemCountedIsNotExist` | `case when _parent.HandlingUnitNumber is not initial then _parent.HndlgUnitItemCountedIsNotExist else item.HndlgUnitItemCountedIsNotExist end` |
| `PackagingMaterial` | `_parent.PackagingMaterial` |
| `HandlingUnitType` | `_parent.HandlingUnitType` |
| `EWMPInvHasExtraHndlgUnitLevel` | `cast ( case when _parent.ParentHandlingUnitNumber is not initial and item.ParentHandlingUnitNumber is not initial then 'X' else '' end as boole_d )` |
| `Product` | `_PIItemBusKey.Product` |
| `ProductUUID` | `_PIItemBusKey.ProductUUID` |
| `Batch` | `_PIItemBusKey.Batch` |
| `BatchUUID` | `_PIItemBusKey.BatchUUID` |
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
| `WhseQualityInspectionType` | `item.WhseQualityInspectionType` |
| `QualityInspectionDocUUID` | `item.QualityInspectionDocUUID` |
| `QualityInspectionDocument` | `_QualityInspection.QualityInspectionDocument` |
| `StockIdentificationNumber` | `item.StockIdentificationNumber` |
| `EWMStockReferenceDocCategory` | `item.EWMStockReferenceDocCategory` |
| `EWMStockRefDocumentUUID` | `item.EWMStockRefDocumentUUID` |
| `EWMStockRefDocItemUUID` | `item.EWMStockRefDocItemUUID` |
| `EWMStockReferenceDocument` | `case item.EWMStockReferenceDocCategory when 'PDI' then cast(_WarehouseRequestInbHdr.EWMWarehouseRequest as ewm_de_referencedocument preserving type ) when 'PDO' then cast(_WarehouseRequestOutHdr.EWMWarehouseRequest as ewm_de_referencedocument preserving type ) when 'SPC' then cast(_WarehouseRequestOutHdr.EWMWarehouseRequest as ewm_de_referencedocument preserving type ) when 'WMR' then cast(_WarehouseRequestOutHdr.EWMWarehouseRequest as ewm_de_referencedocument preserving type ) when 'PWR' then cast(_ProdnMatlReqHeader.EWMProductionMaterialRequest as ewm_de_referencedocument preserving type ) else cast( cast('' as /scdl/dl_docno_int) as ewm_de_referencedocument preserving type ) end` |
| `EWMStockReferenceDocumentItem` | `case item.EWMStockReferenceDocCategory when 'PDI' then cast(_InbDeliveryItem.EWMInboundDeliveryItem as ewm_de_referencedocumentitem preserving type ) when 'PDO' then cast(_WarehouseRequestOutItem.EWMWarehouseRequestItem as ewm_de_referencedocumentitem preserving type ) when 'SPC' then cast(_WarehouseRequestOutItem.EWMWarehouseRequestItem as ewm_de_referencedocumentitem preserving type ) when 'WMR' then cast(_WarehouseRequestOutItem.EWMWarehouseRequestItem as ewm_de_referencedocumentitem preserving type ) when 'PWR' then cast(_ProdnMatlReqItem.EWMProductionMaterialReqItem as ewm_de_referencedocumentitem preserving type ) else cast( cast('' as /scdl/dl_itemno) as ewm_de_referencedocumentitem preserving type ) end` |
| `EWMGoodsReceiptDateTime` | `item.EWMGoodsReceiptDateTime` |
| `ShelfLifeExpirationDate` | `item.ShelfLifeExpirationDate` |
| `CountryOfOrigin` | `item.CountryOfOrigin` |
| `MatlBatchIsInRstrcdUseStock` | `item.MatlBatchIsInRstrcdUseStock` |
| `PInvIsZeroCount` | `cast( _PIItemCountedQuan.PInvIsZeroCount as boole_d )` |
| `PInvQuantitySequence` | `case when _PIItemCountedQuan.PInvQuantitySequence is not initial then _PIItemCountedQuan.PInvQuantitySequence else _PIItemProposedQuan.PInvQuantitySequence end` |
| `EWMPhysInvtrySuggestedQty` | `} cast(_PIItemProposedQuan.QuantityOfPInvItemInBaseUoM as ewm_de_pi_suggestedquantity preserving type )` |
| `EWMPhysInvtrySuggestedQtyUnit` | `cast(_PIItemProposedQuan.UnitOfMeasure as ewm_de_pi_suggestedquantityuom preserving type )` |
| `EWMPhysInvtryBookQuantity` | `} cast(_PIItemProposedQuan.QuantityOfPInvItemInBaseUoM as ewm_de_pi_bookedquantity preserving type )` |
| `EWMPhysInvtryBookQtyUnit` | `cast(_PIItemProposedQuan.UnitOfMeasure as ewm_de_pi_bookedquantityuom preserving type )` |
| `EWMPhysInvtryCountedQuantity` | `} cast( case when _PIItemCountedQuan.UnitOfMeasure <> '' then _PIItemCountedQuan.QuantityOfPInvItemInBaseUoM else case when item.PInvDocumentItemType = 'B' then _PIItemProposedQuan.QuantityOfPInvItemInBaseUoM end end as ewm_de_pi_countedquantity preserving type )` |
| `EWMPhysInvtryCountedQtyUnit` | `cast( case when _PIItemCountedQuan.UnitOfMeasure <> '' then _PIItemCountedQuan.UnitOfMeasure else case when item.PInvDocumentItemType = 'B' then _PIItemProposedQuan.UnitOfMeasure end end as ewm_de_pi_countedquantityuom preserving type )` |
| `EWMPhysInvtryEnteredQuantity` | `} cast(_PIItemCountedQuan.EnteredQuantityOfPInvItem as ewm_de_pi_enteredquanity preserving type )` |
| `EWMPhysInvtryEnteredQtyUnit` | `cast(_PIItemCountedQuan.EnteredUoMOfPInv as ewm_de_pi_enteredquanityuom preserving type )` |
| `EWMPhysInvtryDiffQuantity` | `} cast(_PIItemDiffQuan.EWMPhysInvtryDiffQuantity as ewm_de_pi_differencequantity preserving type )` |
| `EWMPhysInvtryDiffQuantityUnit` | `cast(_PIItemDiffQuan.EWMPhysInvtryDiffQuantityUnit as ewm_de_pi_differenceqtyuom preserving type )` |
| `PhysicalInventoryStockUUID` | `item.PhysicalInventoryStockUUID` |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_storagebin` | `P_EWM_PhysicalInventoryItem01` | [0..1] |
| `_parent` | `P_EWM_PInvItemFlattenedRow04` | [0..1] |
| `_PIHeader` | `I_EWM_PInvDocHeaderLog` | [1..1] |
| `_PIAreaMapping` | `P_EWM_ActyAreaMappgPInvArea` | [0..1] |
| `_QualityInspection` | `I_EWM_QltyInspDocUUID` | [0..1] |
| `_WarehouseRequestInbHdr` | `I_EWM_WarehouseRequestInbHdr` | [0..1] |
| `_WarehouseRequestOutHdr` | `I_EWM_WarehouseRequestOutHdr` | [0..1] |
| `_ProdnMatlReqHeader` | `I_EWM_ProdnMatlReqHeader` | [0..1] |
| `_InbDeliveryItem` | `I_EWM_InbDeliveryItemBasic` | [0..1] |
| `_WarehouseRequestOutItem` | `I_EWM_WarehouseRequestOutItem` | [0..1] |
| `_ProdnMatlReqItem` | `I_EWM_ProdnMatlReqItem` | [0..1] |
| `_PIItemBusKey` | `P_EWM_PInvDocBusKeyItem` | [0..1] |
| `_PIItemProposedQuan` | `P_EWM_PInvDocBusItemQty` | [0..1] |
| `_PIItemCountedQuan` | `P_EWM_PInvDocBusItemQty` | [0..1] |
| `_PIItemDiffQuan` | `P_EWM_PInvItemRow_DiffQty` | [0..1] |
| `_PIItemBinEmpty` | `P_EWM_PhysInvtryStorBinIsEmpty` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Flattened Row of PInv Item in Warehouse'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #COMPOSITE
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE ]
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@ObjectModel.usageType:{
    serviceQuality: #D,
    sizeCategory: #XL,
    dataClass: #MIXED
}
define view entity I_EWM_PInvItemFlattenedRow
  //  as select from           P_EWM_PInvItemFlattenedRow02 as item
  //    left outer to one join P_EWM_PInvItemFlattenedRow03 as _parent on  item.PhysicalInventoryDocumentUUID  = _parent.PhysicalInventoryDocumentUUID
  //                                                                   and item.PhysicalInventoryItemNumber    = _parent.PhysicalInventoryItemNumber
  //    //and item.PInvDocumentItemType           = _parent.PInvDocumentItemType
  //                                                                   and item.PhysicalInventoryChangeVersion = _parent.PhysicalInventoryChangeVersion
  //                                                                   and item.LineIndexOfPInvItem            = _parent.LineIndexOfPInvItem
  //                                                                   and item.ParentHandlingUnitNumber       = _parent.HandlingUnitNumber
  as select from P_EWM_PInvItemFlattenedRow06 as item

  association [0..1] to P_EWM_PhysicalInventoryItem01  as _storagebin              on  _storagebin.PhysicalInventoryDocumentUUID = item.PhysicalInventoryDocumentUUID
                                                                                   and _storagebin.PhysicalInventoryItemNumber   = item.PhysicalInventoryItemNumber

  association [0..1] to P_EWM_PInvItemFlattenedRow04   as _parent                  on  item.PhysicalInventoryDocumentUUID  = _parent.PhysicalInventoryDocumentUUID
                                                                                   and item.PhysicalInventoryItemNumber    = _parent.PhysicalInventoryItemNumber
                                                                                   and item.PhysicalInventoryChangeVersion = _parent.PhysicalInventoryChangeVersion
                                                                                   and item.ParentHandlingUnitNumber       = _parent.HandlingUnitNumber
                                                                                   and item.ParentHandlingUnitNumber       is not initial

  association [1..1] to I_EWM_PInvDocHeaderLog         as _PIHeader                on  _PIHeader.PhysicalInventoryDocumentUUID = item.PhysicalInventoryDocumentUUID
  association [0..1] to P_EWM_ActyAreaMappgPInvArea    as _PIAreaMapping           on  _PIAreaMapping.PhysicalInventoryAreaUUID = item.PhysicalInventoryAreaUUID
  //Quality Inspection
  association [0..1] to I_EWM_QltyInspDocUUID          as _QualityInspection       on  _QualityInspection.QualityInspectionDocUUID = item.QualityInspectionDocUUID
  //associations for Reference Document
  association [0..1] to I_EWM_WarehouseRequestInbHdr   as _WarehouseRequestInbHdr  on  _WarehouseRequestInbHdr.EWMWarehouseRequestUUID = item.EWMStockRefDocumentUUID
  association [0..1] to I_EWM_WarehouseRequestOutHdr   as _WarehouseRequestOutHdr  on  _WarehouseRequestOutHdr.EWMWarehouseRequestUUID = item.EWMStockRefDocumentUUID
  association [0..1] to I_EWM_ProdnMatlReqHeader       as _ProdnMatlReqHeader      on  _ProdnMatlReqHeader.EWMProductionMaterialReqUUID = item.EWMStockRefDocumentUUID
  //associations for Reference Document Item
  association [0..1] to I_EWM_InbDeliveryItemBasic     as _InbDeliveryItem         on  _InbDeliveryItem.InboundDeliveryUUID     = item.EWMStockRefDocumentUUID
                                                                                   and _InbDeliveryItem.InboundDeliveryItemUUID = item.EWMStockRefDocItemUUID

  association [0..1] to I_EWM_WarehouseRequestOutItem  as _WarehouseRequestOutItem on  _WarehouseRequestOutItem.EWMWarehouseRequestUUID     = item.EWMStockRefDocumentUUID
                                                                                   and _WarehouseRequestOutItem.EWMWarehouseRequestItemUUID = item.EWMStockRefDocItemUUID

  association [0..1] to I_EWM_ProdnMatlReqItem         as _ProdnMatlReqItem        on  _ProdnMatlReqItem.EWMProductionMaterialReqUUID = item.EWMStockRefDocumentUUID
                                                                                   and _ProdnMatlReqItem.EWMProductionMatlReqItemUUID = item.EWMStockRefDocItemUUID
  association [0..1] to P_EWM_PInvDocBusKeyItem        as _PIItemBusKey            on  _PIItemBusKey.PhysicalInventoryDocumentUUID  = item.PhysicalInventoryDocumentUUID
                                                                                   and _PIItemBusKey.PhysicalInventoryItemNumber    = item.PhysicalInventoryItemNumber
                                                                                   and _PIItemBusKey.LineIndexOfPInvItem            = item.LineIndexOfPInvItem
                                                                                   and _PIItemBusKey.PhysicalInventoryChangeVersion = item.PhysicalInventoryChangeVersion
                                                                                   and _PIItemBusKey.PInvDocumentItemType           = item.PInvDocumentItemType
  // Suggested Quantity
  association [0..1] to P_EWM_PInvDocBusItemQty        as _PIItemProposedQuan      on  _PIItemProposedQuan.PhysicalInventoryDocumentUUID  = item.PhysicalInventoryDocumentUUID
                                                                                   and _PIItemProposedQuan.PhysicalInventoryItemNumber    = item.PhysicalInventoryItemNumber
                                                                                   and _PIItemProposedQuan.LineIndexOfPInvItem            = item.LineIndexOfPInvItem
                                                                                   and _PIItemProposedQuan.PhysicalInventoryChangeVersion = item.PhysicalInventoryChangeVersion
                                                                                   and _PIItemProposedQuan.PInvDocumentItemType           = 'P' // default suggested item
                                                                                   and _PIItemProposedQuan.PInvQuantityDocStatus          = 'PR' // default line
                                                                                   and _PIItemProposedQuan.PInvQuantitySequence           = 1 // always 1 as no Catch Weight in cloud
  // Counted Quantity
  association [0..1] to P_EWM_PInvDocBusItemQty        as _PIItemCountedQuan       on  _PIItemCountedQuan.PhysicalInventoryDocumentUUID  = item.PhysicalInventoryDocumentUUID
                                                                                   and _PIItemCountedQuan.PhysicalInventoryItemNumber    = item.PhysicalInventoryItemNumber
                                                                                   and _PIItemCountedQuan.LineIndexOfPInvItem            = item.LineIndexOfPInvItem
                                                                                   and _PIItemCountedQuan.PhysicalInventoryChangeVersion = item.PhysicalInventoryChangeVersion
                                                                                   and _PIItemCountedQuan.PInvDocumentItemType           = 'C' // count item
                                                                                   and _PIItemCountedQuan.PInvQuantityDocStatus          = 'CO' // default line
                                                                                   and _PIItemCountedQuan.PInvQuantitySequence           = 1 // always 1 as no Catch Weight in cloud

  association [0..1] to P_EWM_PInvItemRow_DiffQty      as _PIItemDiffQuan          on  _PIItemDiffQuan.PhysicalInventoryDocumentUUID = item.PhysicalInventoryDocumentUUID
                                                                                   and _PIItemDiffQuan.PhysicalInventoryItemNumber   = item.PhysicalInventoryItemNumber
                                                                                   and _PIItemDiffQuan.LineIndexOfPInvItem           = item.LineIndexOfPInvItem
  association [0..1] to P_EWM_PhysInvtryStorBinIsEmpty as _PIItemBinEmpty          on  item.PhysicalInventoryDocumentUUID   = _PIItemBinEmpty.PhysicalInventoryDocumentUUID
                                                                                   and item.PhysicalInventoryItemNumber     = _PIItemBinEmpty.PhysicalInventoryItemNumber
                                                                                   and _PIItemBinEmpty.PInvDocumentItemType = 'C'
                                                                                   and item.PhysicalInventoryChangeVersion  = _PIItemBinEmpty.PhysicalInventoryChangeVersion
  //  association [0..1] to P_EWM_PInvItemHasStock         as _PIItemHasStock          on  item.PhysicalInventoryDocumentUUID = _PIItemHasStock.PhysicalInventoryDocumentUUID
  //                                                                                   and item.PhysicalInventoryItemNumber   = _PIItemHasStock.PhysicalInventoryItemNumber

{
  key _PIHeader.EWMWarehouse,
  key _PIHeader.PhysicalInventoryDocNumber,
  key _PIHeader.PhysicalInventoryDocYear,
  key item.PhysicalInventoryItemNumber,
  key item.LineIndexOfPInvItem,
      //item.EWMStorageBin,
      _storagebin.EWMStorageType, // newly added
      _storagebin.EWMStorageBin,
      item.EWMPhysicalInventoryStatus,
      _PIAreaMapping.ActivityArea,
      cast( _PIItemBinEmpty.EWMStorageBinIsEmpty as boole_d )                                               as EWMStorageBinIsEmpty,

      /************************** HU Part ************************/
      //case 1: H + S
      // case 2: H
      //case 3: H + H + S
      //      case
      //        when item.HandlingUnitVirtual = 'A'
      //        then ''
      //        when _parent.HigherParentHandlingUnitNumber is not initial //parent HU of parent HU --> used for 2 level HU, then top HU will be used here
      //        then _parent.HigherParentHandlingUnitNumber
      //        when item.ParentHandlingUnitNumber is not initial
      //        then item.ParentHandlingUnitNumber
      //        else item.HandlingUnitNumber
      //        end                                                                                                 as HandlingUnitNumber,
      case
        when item.HandlingUnitVirtual = 'A'
        then ''
        when _parent.ParentHandlingUnitNumber is not initial //parent HU of parent HU --> used for 2 level HU, then top HU will be used here
        then _parent.ParentHandlingUnitNumber
        when item.ParentHandlingUnitNumber is not initial
        then item.ParentHandlingUnitNumber
        else item.HandlingUnitNumber
        end                                                                                                 as HandlingUnitNumber,

      @Semantics.booleanIndicator:true
      case
          when _parent.HandlingUnitNumber is not initial
          then _parent.HndlgUnitItemCountedIsComplete
          else item.HndlgUnitItemCountedIsComplete
          end                                                                                               as HndlgUnitItemCountedIsComplete,
      @Semantics.booleanIndicator:true
      case
          when _parent.HandlingUnitNumber is not initial
          then _parent.HndlgUnitItemCountedIsEmpty
          else item.HndlgUnitItemCountedIsEmpty
          end                                                                                               as HndlgUnitItemCountedIsEmpty,
      @Semantics.booleanIndicator:true
      case
          when _parent.HandlingUnitNumber is not initial
          then _parent.HndlgUnitItemCountedIsNotExist
          else item.HndlgUnitItemCountedIsNotExist
          end                                                                                               as HndlgUnitItemCountedIsNotExist,

      //      _PIItemBusKey.PackagingMaterial,
      //      item.PackagingMaterial,
      //      _PIItemBusKey.HandlingUnitType,
      //      item.HandlingUnitType,
      _parent.PackagingMaterial,
      _parent.HandlingUnitType,

      //      cast (
      //      case
      //      when _parent.HigherParentHandlingUnitNumber is not initial and item.ParentHandlingUnitNumber is not initial
      //      then 'X'
      //      else ''
      //      end   as boole_d )                                                                                    as EWMPInvHasExtraHndlgUnitLevel,
      cast (
      case
      when _parent.ParentHandlingUnitNumber is not initial and item.ParentHandlingUnitNumber is not initial
      then 'X'
      else ''
      end   as boole_d )                                                                                    as EWMPInvHasExtraHndlgUnitLevel,


      /************************** Product Part ************************/
      _PIItemBusKey.Product,
      _PIItemBusKey.ProductUUID,
      _PIItemBusKey.Batch,
      _PIItemBusKey.BatchUUID,
      _PIItemBusKey.SerialNumberRequiredLevel,
      _PIItemBusKey.EWMStockType,
      _PIItemBusKey.EWMStockOwner,
      _PIItemBusKey.StockOwnerPartnerRole,
      _PIItemBusKey.EWMStockUsage,
      _PIItemBusKey.EntitledToDisposeParty,
      _PIItemBusKey.EntitledToDisposePartnerRole,
      _PIItemBusKey.StockDocumentCategory,
      _PIItemBusKey.WBSElementInternalID,
      _PIItemBusKey.WBSElementExternalID,
      _PIItemBusKey.SpecialStockIdfgSalesOrder,
      _PIItemBusKey.SpecialStockIdfgSalesOrderItem,
      item.WhseQualityInspectionType,
      item.QualityInspectionDocUUID,
      _QualityInspection.QualityInspectionDocument                                                          as QualityInspectionDocument,
      item.StockIdentificationNumber,
      item.EWMStockReferenceDocCategory,
      item.EWMStockRefDocumentUUID,
      item.EWMStockRefDocItemUUID,
      case item.EWMStockReferenceDocCategory
        when 'PDI' then cast(_WarehouseRequestInbHdr.EWMWarehouseRequest as ewm_de_referencedocument preserving type )
        when 'PDO' then cast(_WarehouseRequestOutHdr.EWMWarehouseRequest as ewm_de_referencedocument preserving type )
        when 'SPC' then cast(_WarehouseRequestOutHdr.EWMWarehouseRequest as ewm_de_referencedocument preserving type )
        when 'WMR' then cast(_WarehouseRequestOutHdr.EWMWarehouseRequest as ewm_de_referencedocument preserving type )
        when 'PWR' then cast(_ProdnMatlReqHeader.EWMProductionMaterialRequest as ewm_de_referencedocument preserving type )
        else cast( cast('' as /scdl/dl_docno_int) as ewm_de_referencedocument preserving type )
        end                                                                                                 as EWMStockReferenceDocument,
      case item.EWMStockReferenceDocCategory
        when 'PDI' then cast(_InbDeliveryItem.EWMInboundDeliveryItem as ewm_de_referencedocumentitem preserving type )
        when 'PDO' then cast(_WarehouseRequestOutItem.EWMWarehouseRequestItem as ewm_de_referencedocumentitem preserving type )
        when 'SPC' then cast(_WarehouseRequestOutItem.EWMWarehouseRequestItem as ewm_de_referencedocumentitem preserving type )
        when 'WMR' then cast(_WarehouseRequestOutItem.EWMWarehouseRequestItem as ewm_de_referencedocumentitem preserving type )
        when 'PWR' then cast(_ProdnMatlReqItem.EWMProductionMaterialReqItem as ewm_de_referencedocumentitem preserving type )
        else cast( cast('' as /scdl/dl_itemno) as ewm_de_referencedocumentitem preserving type )
        end                                                                                                 as EWMStockReferenceDocumentItem,

      item.EWMGoodsReceiptDateTime,
      item.ShelfLifeExpirationDate,
      item.CountryOfOrigin,
      item.MatlBatchIsInRstrcdUseStock,
      @Semantics.booleanIndicator:true
      cast( _PIItemCountedQuan.PInvIsZeroCount as boole_d )                                                 as PInvIsZeroCount,
      //      _PIItemCountedQuan.PInvQuantitySequence                                                               as PInvQuantitySequence, // newly added
      case when _PIItemCountedQuan.PInvQuantitySequence is not initial then _PIItemCountedQuan.PInvQuantitySequence
       else _PIItemProposedQuan.PInvQuantitySequence
      end                                                                                                   as PInvQuantitySequence, // newly added

      /*-- Suggested Quantity & Unit --*/
      @Semantics: {quantity : {unitOfMeasure: 'EWMPhysInvtrySuggestedQtyUnit'}}
      cast(_PIItemProposedQuan.QuantityOfPInvItemInBaseUoM as ewm_de_pi_suggestedquantity preserving type ) as EWMPhysInvtrySuggestedQty,
      cast(_PIItemProposedQuan.UnitOfMeasure as ewm_de_pi_suggestedquantityuom preserving type )            as EWMPhysInvtrySuggestedQtyUnit,

      /*-- Booked Quantity & Unit --*/
      @Semantics: {quantity : {unitOfMeasure: 'EWMPhysInvtryBookQtyUnit'}}
      cast(_PIItemProposedQuan.QuantityOfPInvItemInBaseUoM as ewm_de_pi_bookedquantity preserving type )    as EWMPhysInvtryBookQuantity,
      cast(_PIItemProposedQuan.UnitOfMeasure as ewm_de_pi_bookedquantityuom preserving type )               as EWMPhysInvtryBookQtyUnit,

      // Counted Quantity & Unit
      // if the index has booked quantity, but without Counted quantity, then counted quantity is equals to Booked quantity
      @Semantics: {quantity : {unitOfMeasure: 'EWMPhysInvtryCountedQtyUnit'}}
      cast(
        case
          when _PIItemCountedQuan.UnitOfMeasure <> '' then _PIItemCountedQuan.QuantityOfPInvItemInBaseUoM
          else case when item.PInvDocumentItemType = 'B' then _PIItemProposedQuan.QuantityOfPInvItemInBaseUoM
               end
        end
      as ewm_de_pi_countedquantity preserving type )                                                        as EWMPhysInvtryCountedQuantity,
      cast(
        case
          when _PIItemCountedQuan.UnitOfMeasure <> '' then _PIItemCountedQuan.UnitOfMeasure
          else case when item.PInvDocumentItemType = 'B' then _PIItemProposedQuan.UnitOfMeasure
               end
        end
      as ewm_de_pi_countedquantityuom preserving type )                                                     as EWMPhysInvtryCountedQtyUnit,


      /*-- Entered Quantity & Unit --*/
      @Semantics: {quantity : {unitOfMeasure: 'EWMPhysInvtryEnteredQtyUnit'}}
      cast(_PIItemCountedQuan.EnteredQuantityOfPInvItem as ewm_de_pi_enteredquanity preserving type )       as EWMPhysInvtryEnteredQuantity,
      cast(_PIItemCountedQuan.EnteredUoMOfPInv as ewm_de_pi_enteredquanityuom preserving type )             as EWMPhysInvtryEnteredQtyUnit,

      /*-- Difference Quantity & Unit --*/
      @Semantics: {quantity : {unitOfMeasure: 'EWMPhysInvtryDiffQuantityUnit'}}
      cast(_PIItemDiffQuan.EWMPhysInvtryDiffQuantity as ewm_de_pi_differencequantity preserving type )      as EWMPhysInvtryDiffQuantity,
      cast(_PIItemDiffQuan.EWMPhysInvtryDiffQuantityUnit as ewm_de_pi_differenceqtyuom preserving type )    as EWMPhysInvtryDiffQuantityUnit,
      item.PhysicalInventoryStockUUID

}
//where
//         not(
//           item.PhysicalInventoryStockUUID          is not initial // exclude the HU with Complete/Missing/Empty case
//           and  item.PhysicalInventoryItemType      =  'H'
//           and(
//                item.HandlingUnitVirtual            <> 'A' //Exclude the case that Bin is empty
//             or _PIItemHasStock.EWMPInvItemHasStock >  0
//           )
//         )
```
