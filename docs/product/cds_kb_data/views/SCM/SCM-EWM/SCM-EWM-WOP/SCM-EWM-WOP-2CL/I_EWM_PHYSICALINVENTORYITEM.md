---
name: I_EWM_PHYSICALINVENTORYITEM
description: "Ewm Physicalinventoryitem"
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
  - inventory
  - item-level
  - component:SCM-EWM-WOP-2CL
  - lob:Other
  - bo:Inventory
---
# I_EWM_PHYSICALINVENTORYITEM

**Ewm Physicalinventoryitem**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PhysicalInventoryDocNumber` | ✓ | | `_logHead` | `PhysicalInventoryDocNumber` |  |  |
| `PhysicalInventoryDocYear` | ✓ | | `_logHead` | `PhysicalInventoryDocYear` |  |  |
| `EWMWarehouse` | ✓ | | `_PIItem` | `EWMWarehouse` |  |  |
| `PhysicalInventoryItemNumber` | ✓ | | `_PIItem` | `PhysicalInventoryItemNumber` |  |  |
| `PhysicalInventoryDocumentUUID` |  | | `_PIItem` | `PhysicalInventoryDocumentUUID` |  |  |
| `EWMPhysicalInventoryStatus` |  | | `_PIItem` | `EWMPhysicalInventoryStatus` |  |  |
| `PhysicalInventoryDocumentType` |  | | `_PIItem` | `PhysicalInventoryDocumentType` |  |  |
| `PInvCountedUTCDateTime` |  | | `_PIItem` | `PInvCountedUTCDateTime` |  |  |
| `PhysicalInventoryCountUserName` |  | | `_PIItem` | `PhysicalInventoryCountUserName` |  |  |
| `PhysInventoryCrtnUTCDateTime` |  | | `_PIItem` | `PhysInventoryCrtnUTCDateTime` |  |  |
| `EWMPhysInvtryPostingDateTime` |  | | `_PIItem` | `EWMPhysInvtryPostingDateTime` |  |  |
| `ActivityArea` |  | | `_PIItem` | `ActivityArea` |  |  |
| `EWMPhysicalInventoryPriority` |  | | `_PIItem` | `EWMPhysicalInventoryPriority` |  |  |
| `EWMPhysInvtryReason` |  | | `_PIItem` | `EWMPhysInvtryReason` |  |  |
| `PInvDocumentItemIsPrinted` |  | | `_PIItem` | `PInvDocumentItemIsPrinted` |  |  |
| `EWMPhysInvtryItemSequenceValue` |  | | `_PIItem` | `EWMPhysInvtryItemSequenceValue` |  |  |
| `EWMStorageType` |  | | `_PIItem` | `EWMStorageType` |  |  |
| `EWMStorageBin` |  | | `_PIItem` | `EWMStorageBin` |  |  |
| `WhseQualityInspectionType` |  | | `_PIItem` | `WhseQualityInspectionType` |  |  |
| `QualityInspectionDocUUID` |  | | `_PIItem` | `QualityInspectionDocUUID` |  |  |
| `StockIdentificationNumber` |  | | `_PIItem` | `StockIdentificationNumber` |  |  |
| `EWMStockReferenceDocCategory` |  | | `_PIItem` | `EWMStockReferenceDocCategory` |  |  |
| `EWMStockRefDocumentUUID` |  | | `_PIItem` | `EWMStockRefDocumentUUID` |  |  |
| `EWMStockRefDocItemUUID` |  | | `_PIItem` | `EWMStockRefDocItemUUID` |  |  |
| `EWMStockReferenceDocument` |  | |  | `case _PIItem.EWMStockReferenceDocCategory when 'PDI' then cast(_InbDeliveryItem.InboundDelivery as ewm_de_referencedocument preserving type ) when 'PDO' then cast(_WarehouseRequestOutItem.EWMWarehouseRequest as ewm_de_referencedocument preserving type ) when 'SPC' then cast(_WarehouseRequestOutItem.EWMWarehouseRequest as ewm_de_referencedocument preserving type ) when 'WMR' then cast(_WarehouseRequestOutItem.EWMWarehouseRequest as ewm_de_referencedocument preserving type ) when 'PWR' then cast(_ProdnMatlReqItem.EWMProductionMaterialRequest as ewm_de_referencedocument preserving type ) else cast( cast('' as /scdl/dl_docno_int) as ewm_de_referencedocument preserving type ) end` |  |  |
| `EWMStockReferenceDocumentItem` |  | |  | `case _PIItem.EWMStockReferenceDocCategory when 'PDI' then cast(_InbDeliveryItem.EWMInboundDeliveryItem as ewm_de_referencedocumentitem preserving type ) when 'PDO' then cast(_WarehouseRequestOutItem.EWMWarehouseRequestItem as ewm_de_referencedocumentitem preserving type ) when 'SPC' then cast(_WarehouseRequestOutItem.EWMWarehouseRequestItem as ewm_de_referencedocumentitem preserving type ) when 'WMR' then cast(_WarehouseRequestOutItem.EWMWarehouseRequestItem as ewm_de_referencedocumentitem preserving type ) when 'PWR' then cast(_ProdnMatlReqItem.EWMProductionMaterialReqItem as ewm_de_referencedocumentitem preserving type ) else cast( cast('' as /scdl/dl_itemno) as ewm_de_referencedocumentitem preserving type ) end` |  |  |
| `EWMGoodsReceiptDateTime` |  | | `_PIItem` | `EWMGoodsReceiptDateTime` |  |  |
| `ShelfLifeExpirationDate` |  | | `_PIItem` | `ShelfLifeExpirationDate` |  |  |
| `CountryOfOrigin` |  | | `_PIItem` | `CountryOfOrigin` |  |  |
| `MatlBatchIsInRstrcdUseStock` |  | | `_PIItem` | `MatlBatchIsInRstrcdUseStock` |  |  |
| `ProductUUID` |  | | `_PIItem` | `ProductUUID` |  |  |
| `Product` |  | | `_PIItem` | `Product` |  |  |
| `BatchUUID` |  | | `_PIItem` | `BatchUUID` |  |  |
| `Batch` |  | | `_PIItem` | `Batch` |  |  |
| `EntitledToDisposeParty` |  | | `_PIItem` | `EntitledToDisposeParty` |  |  |
| `EWMStockOwner` |  | | `_PIItem` | `EWMStockOwner` |  |  |
| `EWMStockType` |  | | `_PIItem` | `EWMStockType` |  |  |
| `EWMStockUsage` |  | | `_PIItem` | `EWMStockUsage` |  |  |
| `StockDocumentCategory` |  | |  | `cast( _PIItem.StockDocumentCategory as ewm_de_stockdocumentcat preserving type )` |  |  |
| `StockDocumentNumber` |  | | `_PIItem` | `StockDocumentNumber` |  |  |
| `WBSElementInternalID` |  | |  | `case _PIItem.StockDocumentCategory when 'PJS' then _ProjectStock.WBSElementInternalID else cast( '00000000' as ps_s4_pspnr preserving type ) end` |  |  |
| `WBSElementExternalID` |  | |  | `case _PIItem.StockDocumentCategory when 'PJS' then _ProjectStock.WBSElementExternalID else cast( '' as ps_posid_edit ) end` |  |  |
| `SpecialStockIdfgSalesOrder` |  | |  | `case _PIItem.StockDocumentCategory when 'SOS' then cast( ltrim( _PIItem.StockDocumentNumber, '0' ) as ewm_de_special_stock_idfg_hdr ) else cast( '' as ewm_de_special_stock_idfg_hdr ) end` |  |  |
| `SpecialStockIdfgSalesOrderItem` |  | |  | `case _PIItem.StockDocumentCategory when 'SOS' then cast(ltrim(_PIItem.StockItemNumber, '0') as mat_kdpos ) else cast( '000000' as mat_kdpos ) end` |  |  |
| `EWMPhysInventoryCountingCycle` |  | | `_PIItem._ProductWhse` | `EWMPhysInventoryCountingCycle` |  |  |
| `EWMPInvCycCountingIntvlValue` |  | | `_PIItem._ProductWhse` | `EWMPInvCycCountingIntvlValue` |  |  |
| `EWMPInvCycCountingBufferValue` |  | | `_PIItem._ProductWhse` | `EWMPInvCycCountingBufferValue` |  |  |
| `WarehouseOrder` |  | | `_PIItem` | `WarehouseOrder` |  |  |
| `WarehouseTask` |  | | `_PIItem` | `WarehouseTask` |  |  |
| `PhysicalInventoryRefDocYear` |  | |  | `cast(substring(_PIItem.PhysicalInventoryRefDocNumber ,5, 4) as /lime/pi_doc_year)` |  |  |
| `EWMRefPhysicalInventoryDoc` |  | |  | `cast(substring(_PIItem.PhysicalInventoryRefDocNumber ,9, 20) as /lime/pi_doc_number)` |  |  |
| `PhysicalInventoryRefDocItem` |  | |  | `cast(substring(_PIItem.PhysicalInventoryRefDocNumber ,29, 6) as /lime/line_item_id)` |  |  |
| `PInvFreeDefinedRefText` |  | | `_PIItem` | `PInvFreeDefinedRefText` |  |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_logHead` | `I_EWM_PInvDocHeaderLog` | [0..1] |
| `_InbDeliveryItem` | `I_EWM_InbDeliveryItemBasic` | [0..1] |
| `_WarehouseRequestOutItem` | `I_EWM_WarehouseRequestOutItem` | [0..1] |
| `_ProdnMatlReqItem` | `I_EWM_ProdnMatlReqItem` | [0..1] |
| `_ProjectStock` | `I_WBSElementBasicData` | [0..1] |

## Source Code

```abap
@VDM.viewType:#COMPOSITE
@ObjectModel.usageType: {serviceQuality: #D,
                         dataClass: #MIXED,
                         sizeCategory: #XL}
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@EndUserText.label: 'Warehouse Physical Inventory Item'

@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.sapObjectNodeType.name: 'WarehousePhysicalInventoryDoc'

@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE ]
@Consumption.dbHints: ['USE_HEX_PLAN']                                       
define view entity I_EWM_PhysicalInventoryItem
  as select from P_EWM_PhysicalInventoryItem02 as _PIItem
  association [0..1] to I_EWM_PInvDocHeaderLog        as _logHead                 on  $projection.PhysicalInventoryDocumentUUID = _logHead.PhysicalInventoryDocumentUUID

  //Quality Inspection
  //association [0..1] to I_EWM_QltyInspDocUUID         as _QualityInspection       on  $projection.QualityInspectionDocUUID = _QualityInspection.QualityInspectionDocUUID

  //Associations for Reference Document/Item
  association [0..1] to I_EWM_InbDeliveryItemBasic    as _InbDeliveryItem         on  $projection.EWMStockRefDocumentUUID = _InbDeliveryItem.InboundDeliveryUUID
                                                                                  and $projection.EWMStockRefDocItemUUID  = _InbDeliveryItem.InboundDeliveryItemUUID
  association [0..1] to I_EWM_WarehouseRequestOutItem as _WarehouseRequestOutItem on  $projection.EWMStockRefDocumentUUID = _WarehouseRequestOutItem.EWMWarehouseRequestUUID
                                                                                  and $projection.EWMStockRefDocItemUUID  = _WarehouseRequestOutItem.EWMWarehouseRequestItemUUID
  association [0..1] to I_EWM_ProdnMatlReqItem        as _ProdnMatlReqItem        on  $projection.EWMStockRefDocumentUUID = _ProdnMatlReqItem.EWMProductionMaterialReqUUID
                                                                                  and $projection.EWMStockRefDocItemUUID  = _ProdnMatlReqItem.EWMProductionMatlReqItemUUID
  //Project Stock
  association [0..1] to I_WBSElementBasicData         as _ProjectStock            on  $projection.StockDocumentNumber   = _ProjectStock.WBSElementInternalID
                                                                                  and $projection.StockDocumentCategory = 'PJS'

{
  key  _logHead.PhysicalInventoryDocNumber,
  key  _logHead.PhysicalInventoryDocYear,
  key  _PIItem.EWMWarehouse,
  key  _PIItem.PhysicalInventoryItemNumber,

       _PIItem.PhysicalInventoryDocumentUUID,
       _PIItem.EWMPhysicalInventoryStatus,
       _PIItem._Status._Text[1:Language = $session.system_language].EWMPhysicalInventoryStatusText,
       _PIItem.PhysicalInventoryDocumentType,
       _PIItem._DocType._Text[1:Language = $session.system_language].PInvDocumentTypeText,
       _PIItem.PInvCountedUTCDateTime,
       _PIItem.PhysicalInventoryCountUserName,
       _PIItem.PhysInventoryCrtnUTCDateTime,
       _PIItem.EWMPhysInvtryPostingDateTime,

       _PIItem.ActivityArea,
       _PIItem.EWMPhysicalInventoryPriority,
       _PIItem._Priority._Text[1:Language = $session.system_language].PInvPriorityText,
       _PIItem.EWMPhysInvtryReason,
       _PIItem._Reason._Text[1:Language = $session.system_language].PInvReasonText,

       @Semantics.booleanIndicator
       _PIItem.PInvDocumentItemIsPrinted,
       _PIItem.EWMPhysInvtryItemSequenceValue,

       _PIItem.EWMStorageType,
       _PIItem.EWMStorageBin,

       _PIItem.WhseQualityInspectionType,
       _PIItem.QualityInspectionDocUUID,
       //_QualityInspection.QualityInspectionDocument,
       _PIItem.StockIdentificationNumber,
       _PIItem.EWMStockReferenceDocCategory,
       _PIItem.EWMStockRefDocumentUUID,
       _PIItem.EWMStockRefDocItemUUID,
       case _PIItem.EWMStockReferenceDocCategory
         when 'PDI' then cast(_InbDeliveryItem.InboundDelivery as ewm_de_referencedocument preserving type )
         when 'PDO' then cast(_WarehouseRequestOutItem.EWMWarehouseRequest as ewm_de_referencedocument preserving type )
         when 'SPC' then cast(_WarehouseRequestOutItem.EWMWarehouseRequest as ewm_de_referencedocument preserving type )
         when 'WMR' then cast(_WarehouseRequestOutItem.EWMWarehouseRequest as ewm_de_referencedocument preserving type )
         when 'PWR' then cast(_ProdnMatlReqItem.EWMProductionMaterialRequest as ewm_de_referencedocument preserving type )
         else cast( cast('' as /scdl/dl_docno_int) as ewm_de_referencedocument preserving type )
         end                                                                                as EWMStockReferenceDocument,
       case _PIItem.EWMStockReferenceDocCategory
         when 'PDI' then cast(_InbDeliveryItem.EWMInboundDeliveryItem as ewm_de_referencedocumentitem preserving type )
         when 'PDO' then cast(_WarehouseRequestOutItem.EWMWarehouseRequestItem as ewm_de_referencedocumentitem preserving type )
         when 'SPC' then cast(_WarehouseRequestOutItem.EWMWarehouseRequestItem as ewm_de_referencedocumentitem preserving type )
         when 'WMR' then cast(_WarehouseRequestOutItem.EWMWarehouseRequestItem as ewm_de_referencedocumentitem preserving type )
         when 'PWR' then cast(_ProdnMatlReqItem.EWMProductionMaterialReqItem as ewm_de_referencedocumentitem preserving type )
         else cast( cast('' as /scdl/dl_itemno) as ewm_de_referencedocumentitem preserving type )
         end                                                                                as EWMStockReferenceDocumentItem,

       _PIItem.EWMGoodsReceiptDateTime,
       _PIItem.ShelfLifeExpirationDate,
       _PIItem.CountryOfOrigin,
       _PIItem.MatlBatchIsInRstrcdUseStock,

       _PIItem.ProductUUID,
       _PIItem.Product,
       _PIItem.BatchUUID,
       _PIItem.Batch,
       _PIItem.EntitledToDisposeParty,
       _PIItem.EWMStockOwner,
       _PIItem.EWMStockType,
       _PIItem.EWMStockUsage,

       cast( _PIItem.StockDocumentCategory as ewm_de_stockdocumentcat preserving type )     as StockDocumentCategory,
       _PIItem.StockDocumentNumber,
       //_PIItem.StockItemNumber,

       /* Project Stock - Internal WBS Element */
       case _PIItem.StockDocumentCategory
         when 'PJS'
           then _ProjectStock.WBSElementInternalID
         else cast( '00000000' as ps_s4_pspnr preserving type ) end                         as WBSElementInternalID,

       /* Project Stock - External WBS Element */
       case _PIItem.StockDocumentCategory
         when 'PJS'
           then _ProjectStock.WBSElementExternalID
         else cast( '' as ps_posid_edit ) end                                               as WBSElementExternalID,

       case _PIItem.StockDocumentCategory
         when 'SOS'
           then cast( ltrim( _PIItem.StockDocumentNumber, '0' ) as ewm_de_special_stock_idfg_hdr )
         else cast( '' as ewm_de_special_stock_idfg_hdr ) end                               as SpecialStockIdfgSalesOrder,

       case _PIItem.StockDocumentCategory
         when 'SOS'
           then cast(ltrim(_PIItem.StockItemNumber, '0') as mat_kdpos )
         else cast( '000000' as mat_kdpos ) end                                             as SpecialStockIdfgSalesOrderItem,

       _PIItem._ProductWhse.EWMPhysInventoryCountingCycle,
       _PIItem._ProductWhse.EWMPInvCycCountingIntvlValue,
       _PIItem._ProductWhse.EWMPInvCycCountingBufferValue,       
       //_PIItem._ProductWhse._PhysInvtryCycleCounting.EWMPInvCycCountingIntvlValue,
       //_PIItem._ProductWhse._PhysInvtryCycleCounting.EWMPInvCycCountingBufferValue,

       _PIItem.WarehouseOrder,
       _PIItem.WarehouseTask,
       cast(substring(_PIItem.PhysicalInventoryRefDocNumber ,5, 4)  as /lime/pi_doc_year)   as PhysicalInventoryRefDocYear,
       cast(substring(_PIItem.PhysicalInventoryRefDocNumber ,9, 20) as /lime/pi_doc_number) as EWMRefPhysicalInventoryDoc,
       cast(substring(_PIItem.PhysicalInventoryRefDocNumber ,29, 6) as /lime/line_item_id)  as PhysicalInventoryRefDocItem,
       _PIItem.PInvFreeDefinedRefText,

       _PIItem._Priority,
       _PIItem._Reason,
       _PIItem._DocType
}
```
