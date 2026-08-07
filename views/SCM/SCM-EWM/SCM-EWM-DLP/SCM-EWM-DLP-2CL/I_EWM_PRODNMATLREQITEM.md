---
name: I_EWM_PRODNMATLREQITEM
description: "Ewm Prodnmatlreqitem"
app_component: SCM-EWM-DLP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SCM
  - SCM-EWM
  - SCM-EWM-DLP
  - interface-view
  - item-level
  - component:SCM-EWM-DLP-2CL
  - lob:Other
---
# I_EWM_PRODNMATLREQITEM

**Ewm Prodnmatlreqitem**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-DLP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMProductionMaterialRequest` | ✓ | |  |  |  |  |
| `EWMProductionMaterialReqItem` | ✓ | |  |  |  |  |
| `EWMProductionMaterialReqUUID` |  | |  |  |  |  |
| `EWMProductionMatlReqItemUUID` |  | |  |  |  |  |
| `EWMWarehouse` |  | |  |  |  |  |
| `EWMProdnMatlReqDocCategory` |  | |  |  |  |  |
| `EWMProdnMatlReqItemCategory` |  | |  |  |  |  |
| `EWMProductionMatlReqItemType` |  | |  |  |  |  |
| `EWMProdnMatlReqCrtnUTCDateTime` |  | |  |  |  |  |
| `EWMProdnMatlReqCreatedByUser` |  | |  |  |  |  |
| `EWMDelivLastChangeUTCDateTime` |  | |  |  |  |  |
| `EWMProdnMatlReqLastChgdByUser` |  | |  |  |  |  |
| `EWMPlndCompRqmtStrtUTCDateTime` |  | | `_PlndCompRqmtStrtUTCDateTime` | `DeliveryRelatedStartDateTime` |  |  |
| `Product` |  | |  |  |  |  |
| `ProductUUID` |  | |  |  |  |  |
| `Batch` |  | |  |  |  |  |
| `ProductQuantity` |  | |  |  |  |  |
| `QuantityUnit` |  | |  |  |  |  |
| `EWMStockUsage` |  | |  |  |  |  |
| `EWMStockType` |  | |  |  |  |  |
| `EntitledToDisposeParty` |  | |  |  |  |  |
| `EntitledToDisposePartyName` |  | | `_Entitled` | `BusinessPartnerName` |  |  |
| `EWMStockOwner` |  | |  |  |  |  |
| `EWMStockOwnerName` |  | | `_StockOwner` | `BusinessPartnerName` |  |  |
| `StockDocumentCategory` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `WBSElementExternalID` |  | |  |  |  |  |
| `SpecialStockIdfgSalesOrder` |  | |  |  |  |  |
| `SpecialStockIdfgSalesOrderItem` |  | |  |  |  |  |
| `ManufacturingOrder` |  | |  | `cast( _ManufacturingOrder.EWMWhseReqRefDocumentNumber as manufacturingorder )` |  |  |
| `Reservation` |  | |  | `cast( ltrim( _Reservation.EWMWhseReqRefDocumentNumber, '0' ) as rsnum )` |  |  |
| `ReservationItem` |  | |  | `cast( ltrim( _Reservation.EWMWhseRequestRefDocumentItem, '0' ) as pph_rspos )` |  |  |
| `ReservationType` |  | |  |  |  |  |
| `WarehouseProcessType` |  | |  |  |  |  |
| `EWMMovementControl` |  | |  |  |  |  |
| `EWMStagingMethod` |  | |  |  |  |  |
| `EWMProductionSupplyArea` |  | |  |  |  |  |
| `EWMGoodsMovementStorageBin` |  | |  |  |  |  |
| `BatchClassification` |  | |  |  |  |  |
| `BatchClass` |  | |  |  |  |  |
| `EWMBackflushIsActive` |  | |  |  |  |  |
| `Operation` |  | |  |  |  |  |
| `OperationDescription` |  | |  |  |  |  |
| `WorkCenter` |  | |  |  |  |  |
| `EWMProdnMatlReqItemIsDeleted` |  | |  |  |  |  |
| `GoodsIssueStatus` |  | |  |  |  |  |
| `CompletionStatus` |  | |  |  |  |  |
| `EWMPlannedStagingStatus` |  | |  |  |  |  |
| `EWMStagingStatus` |  | |  |  |  |  |
| `EWMManufacturingOrderStatus` |  | |  |  |  |  |
| `EWMGoodsMovementLockStatus` |  | |  |  |  |  |
| `EWMStagingLockStatus` |  | |  |  |  |  |
| `EWMItmInconsistencyBlockStatus` |  | |  |  |  |  |
| `OverallBlockStatus` |  | |  |  |  |  |
| `_Entitled` | | ✓ | | | | |
| `_StockOwner` | | ✓ | | | | |
| `_ManufacturingOrder` | | ✓ | | | | |
| `_Reservation` | | ✓ | | | | |
| `_EWMProdnMatlReqItmCatTxt` | | ✓ | | | | |
| `_EWMProdnMatlReqItemTypeTxt` | | ✓ | | | | |
| `_ProductTxt` | | ✓ | | | | |
| `_EWMStockTypeTxt` | | ✓ | | | | |
| `_EWMStockUsageTxt` | | ✓ | | | | |
| `_EWMWarehouseProcessTypeTxt` | | ✓ | | | | |
| `_EWMStagingMethodTxt` | | ✓ | | | | |
| `_EWMProductionSupplyAreaTxt` | | ✓ | | | | |
| `_StockDocCategoryTxt` | | ✓ | | | | |
| `_EWMPlannedStagingStatusTxt` | | ✓ | | | | |
| `_EWMStagingStatusTxt` | | ✓ | | | | |
| `_GoodsIssueStatusTxt` | | ✓ | | | | |
| `_CompletionStatusTxt` | | ✓ | | | | |
| `_EWMManufacturingOrdStatusTxt` | | ✓ | | | | |
| `_EWMGoodsMvtLockStatusTxt` | | ✓ | | | | |
| `_EWMStagingLockStatusTxt` | | ✓ | | | | |
| `_EWMItmInconstcyBlkStsTxt` | | ✓ | | | | |
| `_OverallBlockStatusTxt` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PlndCompRqmtStrtUTCDateTime` | `I_EWM_DeliveryDateAndTime` | [0..1] |
| `_Entitled` | `I_BusinessPartner` | [0..1] |
| `_StockOwner` | `I_BusinessPartner` | [0..1] |
| `_ManufacturingOrder` | `I_EWM_WarehouseRequestRefDoc` | [0..1] |
| `_Reservation` | `I_EWM_WarehouseRequestRefDoc` | [0..1] |
| `_EWMProdnMatlReqItmCatTxt` | `I_EWM_DeliveryItemCatText_2` | [0..*] |
| `_EWMProdnMatlReqItemTypeTxt` | `I_EWM_DeliveryItemTypeText_2` | [0..*] |
| `_ProductTxt` | `I_ProductText` | [0..*] |
| `_EWMStockTypeTxt` | `I_EWM_StockTypeText_2` | [0..*] |
| `_EWMStockUsageTxt` | `I_EWM_StockUsageText_2` | [0..*] |
| `_EWMWarehouseProcessTypeTxt` | `I_EWM_WrhsProcTypeText_2` | [0..*] |
| `_EWMStagingMethodTxt` | `I_EWM_StagingMethodText` | [0..*] |
| `_EWMProductionSupplyAreaTxt` | `I_EWM_ProductionSupplyAreaText` | [0..*] |
| `_StockDocCategoryTxt` | `I_EWM_StockDocCategoryText` | [0..*] |
| `_EWMPlannedStagingStatusTxt` | `I_EWM_WhseReqStatusValueText` | [0..*] |
| `_EWMStagingStatusTxt` | `I_EWM_WhseReqStatusValueText` | [0..*] |
| `_GoodsIssueStatusTxt` | `I_EWM_WhseReqStatusValueText` | [0..*] |
| `_CompletionStatusTxt` | `I_EWM_WhseReqStatusValueText` | [0..*] |
| `_EWMManufacturingOrdStatusTxt` | `I_EWM_WhseReqStatusValueText` | [0..*] |
| `_EWMGoodsMvtLockStatusTxt` | `I_EWM_WhseReqStatusValueText` | [0..*] |
| `_EWMStagingLockStatusTxt` | `I_EWM_WhseReqStatusValueText` | [0..*] |
| `_EWMItmInconstcyBlkStsTxt` | `I_EWM_WhseReqStatusValueText` | [0..*] |
| `_OverallBlockStatusTxt` | `I_EWM_WhseReqStatusValueText` | [0..*] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Production Material Request Item'
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.usageType:{
  serviceQuality: #D,
  sizeCategory: #L,
  dataClass: #MIXED
}
//@ObjectModel.sapObjectNodeType.name: 'WhseProductionMaterialReqItem'
@VDM.viewType: #COMPOSITE
@Consumption.dbHints: ['USE_HEX_PLAN']
define view entity I_EWM_ProdnMatlReqItem
  as select from I_EWM_ProdnMatlReqItmBasic

  ---------- Associates to Planned Requirement Start Date for Component ----------
  association [0..1] to I_EWM_DeliveryDateAndTime      as _PlndCompRqmtStrtUTCDateTime  on  $projection.EWMProductionMaterialReqUUID              = _PlndCompRqmtStrtUTCDateTime.DeliveryOrderUUID
                                                                                        and $projection.EWMProductionMatlReqItemUUID              = _PlndCompRqmtStrtUTCDateTime.DeliveryOrderItemUUID
                                                                                        and $projection.EWMProdnMatlReqDocCategory                = _PlndCompRqmtStrtUTCDateTime.EWMDeliveryDocumentCategory
                                                                                        and _PlndCompRqmtStrtUTCDateTime.DeliveryDateTimeType     = 'SCMPREQ'
                                                                                        and _PlndCompRqmtStrtUTCDateTime.DeliveryDateTimeCategory = 'PLAN'
                                                                                        //and _PlndCompRqmtStrtUTCDateTime.TimeZoneName             = 'CET'
                                                                                        // always UTC, the _PlndCompRqmtStrtUTCDateTime.TimeZoneName is not valid

  ---------- Associates to Business Partner ----------
  association [0..1] to I_BusinessPartner              as _Entitled                     on  $projection.EntitledToDisposeParty = _Entitled.BusinessPartner

  association [0..1] to I_BusinessPartner              as _StockOwner                   on  $projection.EWMStockOwner = _StockOwner.BusinessPartner


  ---------- Associates to Manufacturing Order ----------
  association [0..1] to I_EWM_WarehouseRequestRefDoc   as _ManufacturingOrder           on  $projection.EWMProductionMaterialReqUUID         = _ManufacturingOrder.EWMWarehouseRequestUUID
                                                                                        and $projection.EWMProdnMatlReqDocCategory           = _ManufacturingOrder.EWMWhseRequestDocumentCategory
                                                                                        and _ManufacturingOrder.EWMReferenceDocumentCategory = 'PPO'

  association [0..1] to I_EWM_WarehouseRequestRefDoc   as _Reservation                  on  $projection.EWMProductionMaterialReqUUID  = _Reservation.EWMWarehouseRequestUUID
                                                                                        and $projection.EWMProductionMatlReqItemUUID  = _Reservation.EWMWarehouseRequestItemUUID
                                                                                        and $projection.EWMProdnMatlReqDocCategory    = _Reservation.EWMWhseRequestDocumentCategory
                                                                                        and _Reservation.EWMReferenceDocumentCategory = 'RES'

  ---------- Associates to Texts ----------
  association [0..*] to I_EWM_DeliveryItemCatText_2    as _EWMProdnMatlReqItmCatTxt on  $projection.EWMProdnMatlReqItemCategory = _EWMProdnMatlReqItmCatTxt.EWMInboundDeliveryItemCategory
                                                                                        //and _EWMProdnMatlReqItmCatTxt.Language  = $session.system_language

  association [0..*] to I_EWM_DeliveryItemTypeText_2   as _EWMProdnMatlReqItemTypeTxt   on  $projection.EWMProdnMatlReqDocCategory   = _EWMProdnMatlReqItemTypeTxt.EWMDeliveryDocumentCategory
                                                                                        and $projection.EWMProductionMatlReqItemType = _EWMProdnMatlReqItemTypeTxt.DeliveryItemType
                                                                                        //and _EWMProdnMatlReqItemTypeTxt.Language     = $session.system_language

  association [0..*] to I_ProductText                  as _ProductTxt                   on  $projection.Product  = _ProductTxt.Product
                                                                                        //and _ProductTxt.Language = $session.system_language

  association [0..*] to I_EWM_StockTypeText_2          as _EWMStockTypeTxt              on  $projection.EWMWarehouse  = _EWMStockTypeTxt.EWMWarehouse
                                                                                        and $projection.EWMStockType  = _EWMStockTypeTxt.EWMStockType
                                                                                        //and _EWMStockTypeTxt.Language = $session.system_language

  association [0..*] to I_EWM_StockUsageText_2         as _EWMStockUsageTxt             on  $projection.EWMStockUsage  = _EWMStockUsageTxt.EWMStockUsage
                                                                                        //and _EWMStockUsageTxt.Language = $session.system_language

  association [0..*] to I_EWM_WrhsProcTypeText_2       as _EWMWarehouseProcessTypeTxt   on  $projection.EWMWarehouse             = _EWMWarehouseProcessTypeTxt.EWMWarehouse
                                                                                        and $projection.WarehouseProcessType     = _EWMWarehouseProcessTypeTxt.WarehouseProcessType
                                                                                        //and _EWMWarehouseProcessTypeTxt.Language = $session.system_language

  association [0..*] to I_EWM_StagingMethodText        as _EWMStagingMethodTxt          on  $projection.EWMStagingMethod  = _EWMStagingMethodTxt.EWMStagingMethod
                                                                                        //and _EWMStagingMethodTxt.Language = $session.system_language

  association [0..*] to I_EWM_ProductionSupplyAreaText as _EWMProductionSupplyAreaTxt   on  $projection.EWMWarehouse             = _EWMProductionSupplyAreaTxt.EWMWarehouse
                                                                                        and $projection.EWMProductionSupplyArea  = _EWMProductionSupplyAreaTxt.EWMProductionSupplyArea
                                                                                        //and _EWMProductionSupplyAreaTxt.Language = $session.system_language

  association [0..*] to I_EWM_StockDocCategoryText     as _StockDocCategoryTxt          on  $projection.StockDocumentCategory = _StockDocCategoryTxt.StockDocumentCategory
                                                                                        //and _StockDocCategoryTxt.Language     = $session.system_language

  ---------- Associates to Status Texts ----------
  association [0..*] to I_EWM_WhseReqStatusValueText   as _EWMPlannedStagingStatusTxt   on  $projection.EWMPlannedStagingStatus                       = _EWMPlannedStagingStatusTxt.EWMWarehouseRequestStatus
                                                                                        and _EWMPlannedStagingStatusTxt.EWMWarehouseRequestStatusType = 'DMP'
                                                                                        //and _EWMPlannedStagingStatusTxt.Language                      = $session.system_language

  association [0..*] to I_EWM_WhseReqStatusValueText   as _EWMStagingStatusTxt          on  $projection.EWMStagingStatus                       = _EWMStagingStatusTxt.EWMWarehouseRequestStatus
                                                                                        and _EWMStagingStatusTxt.EWMWarehouseRequestStatusType = 'DMS'
                                                                                        //and _EWMStagingStatusTxt.Language                      = $session.system_language

  association [0..*] to I_EWM_WhseReqStatusValueText   as _GoodsIssueStatusTxt          on  $projection.GoodsIssueStatus                       = _GoodsIssueStatusTxt.EWMWarehouseRequestStatus
                                                                                        and _GoodsIssueStatusTxt.EWMWarehouseRequestStatusType = 'DGI'
                                                                                        //and _GoodsIssueStatusTxt.Language                      = $session.system_language

  association [0..*] to I_EWM_WhseReqStatusValueText   as _CompletionStatusTxt          on  $projection.CompletionStatus                       = _CompletionStatusTxt.EWMWarehouseRequestStatus
                                                                                        and _CompletionStatusTxt.EWMWarehouseRequestStatusType = 'DCO'
                                                                                        //and _CompletionStatusTxt.Language                      = $session.system_language

  association [0..*] to I_EWM_WhseReqStatusValueText   as _EWMManufacturingOrdStatusTxt on  $projection.EWMManufacturingOrderStatus                     = _EWMManufacturingOrdStatusTxt.EWMWarehouseRequestStatus
                                                                                        and _EWMManufacturingOrdStatusTxt.EWMWarehouseRequestStatusType = 'DMC'
                                                                                        //and _EWMManufacturingOrdStatusTxt.Language                      = $session.system_language

  association [0..*] to I_EWM_WhseReqStatusValueText   as _EWMGoodsMvtLockStatusTxt     on  $projection.EWMGoodsMovementLockStatus                  = _EWMGoodsMvtLockStatusTxt.EWMWarehouseRequestStatus
                                                                                        and _EWMGoodsMvtLockStatusTxt.EWMWarehouseRequestStatusType = 'DBG'
                                                                                        //and _EWMGoodsMvtLockStatusTxt.Language                      = $session.system_language

  association [0..*] to I_EWM_WhseReqStatusValueText   as _EWMStagingLockStatusTxt      on  $projection.EWMStagingLockStatus                       = _EWMStagingLockStatusTxt.EWMWarehouseRequestStatus
                                                                                        and _EWMStagingLockStatusTxt.EWMWarehouseRequestStatusType = 'DBS'
                                                                                        //and _EWMStagingLockStatusTxt.Language                      = $session.system_language

  association [0..*] to I_EWM_WhseReqStatusValueText   as _EWMItmInconstcyBlkStsTxt  on  $projection.EWMItmInconsistencyBlockStatus                 = _EWMItmInconstcyBlkStsTxt.EWMWarehouseRequestStatus
                                                                                        and _EWMItmInconstcyBlkStsTxt.EWMWarehouseRequestStatusType = 'DBD'
                                                                                        //and _EWMItmInconstcyBlkStsTxt.Language                      = $session.system_language

  association [0..*] to I_EWM_WhseReqStatusValueText   as _OverallBlockStatusTxt        on  $projection.OverallBlockStatus                       = _OverallBlockStatusTxt.EWMWarehouseRequestStatus
                                                                                        and _OverallBlockStatusTxt.EWMWarehouseRequestStatusType = 'DBO'
                                                                                        //and _OverallBlockStatusTxt.Language                      = $session.system_language

{
  key       EWMProductionMaterialRequest,
  key       EWMProductionMaterialReqItem,

            EWMProductionMaterialReqUUID,
            EWMProductionMatlReqItemUUID,


            ---------- PMR Doc Item ----------
            EWMWarehouse,
            EWMProdnMatlReqDocCategory,
            EWMProdnMatlReqItemCategory,
            EWMProductionMatlReqItemType,
            EWMProdnMatlReqCrtnUTCDateTime,
            EWMProdnMatlReqCreatedByUser,
            EWMDelivLastChangeUTCDateTime,
            EWMProdnMatlReqLastChgdByUser,
            _PlndCompRqmtStrtUTCDateTime.DeliveryRelatedStartDateTime                     as EWMPlndCompRqmtStrtUTCDateTime,

            ---------- Item Stock ----------
            Product,
            ProductUUID,
            Batch,
            @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
            ProductQuantity,
            QuantityUnit,
            EWMStockUsage,
            EWMStockType,
            @ObjectModel.foreignKey.association: '_Entitled'
            EntitledToDisposeParty,
            _Entitled.BusinessPartnerName                                                 as EntitledToDisposePartyName,
            @ObjectModel.foreignKey.association: '_StockOwner'
            EWMStockOwner,
            _StockOwner.BusinessPartnerName                                               as EWMStockOwnerName,


            ---------- Special Stock ----------
            StockDocumentCategory,
            WBSElementInternalID,
            WBSElementExternalID,
            SpecialStockIdfgSalesOrder,
            SpecialStockIdfgSalesOrderItem,


            ---------- Manufacturing Order ----------
            cast( _ManufacturingOrder.EWMWhseReqRefDocumentNumber as manufacturingorder ) as ManufacturingOrder,
            cast( ltrim( _Reservation.EWMWhseReqRefDocumentNumber, '0' ) as rsnum )       as Reservation,
            cast( ltrim( _Reservation.EWMWhseRequestRefDocumentItem, '0' ) as pph_rspos ) as ReservationItem,
            ReservationType,
            WarehouseProcessType,
            EWMMovementControl,
            EWMStagingMethod,
            EWMProductionSupplyArea,
            EWMGoodsMovementStorageBin,
            BatchClassification,
            BatchClass,
            EWMBackflushIsActive,
            Operation,
            OperationDescription,
            WorkCenter,
            EWMProdnMatlReqItemIsDeleted,


            ---------- Status ----------
            GoodsIssueStatus,
            CompletionStatus,
            EWMPlannedStagingStatus,
            EWMStagingStatus,
            EWMManufacturingOrderStatus,
            EWMGoodsMovementLockStatus,
            EWMStagingLockStatus,
            EWMItmInconsistencyBlockStatus,
            OverallBlockStatus,

            ---------- Associations ----------
            _Entitled,
            _StockOwner,
            _ManufacturingOrder,
            _Reservation,
                        
            _EWMProdnMatlReqItmCatTxt,
            _EWMProdnMatlReqItemTypeTxt,
            _ProductTxt,
            _EWMStockTypeTxt,
            _EWMStockUsageTxt,
            _StockDocCategoryTxt,
            _EWMWarehouseProcessTypeTxt,
            _EWMStagingMethodTxt,
            _EWMProductionSupplyAreaTxt,
            _EWMPlannedStagingStatusTxt,
            _EWMStagingStatusTxt,
            _GoodsIssueStatusTxt,
            _CompletionStatusTxt,
            _EWMManufacturingOrdStatusTxt,
            _EWMGoodsMvtLockStatusTxt,
            _EWMStagingLockStatusTxt,
            _EWMItmInconstcyBlkStsTxt,
            _OverallBlockStatusTxt
}
```
