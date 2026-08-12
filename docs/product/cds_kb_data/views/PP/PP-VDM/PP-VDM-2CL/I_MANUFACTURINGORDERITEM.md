---
name: I_MANUFACTURINGORDERITEM
description: "Manufacturingorderitem"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - item-level
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_MANUFACTURINGORDERITEM

**Manufacturingorderitem**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ManufacturingOrder` | ✓ | |  | `cast(item.OrderID as manufacturingorder preserving type)` |  |  |
| `ManufacturingOrderItem` | ✓ | |  | `cast(item.OrderItem as manufacturingorderitem preserving type)` |  |  |
| `ManufacturingOrderCategory` |  | |  | `cast(item.OrderCategory as manufacturingordercategory preserving type)` |  |  |
| `ManufacturingOrderType` |  | |  | `cast(item.OrderType as manufacturingordertype preserving type)` |  |  |
| `OrderIsReleased` |  | |  | `cast(item.OrderIsReleased as orderisreleased preserving type)` |  |  |
| `IsMarkedForDeletion` |  | |  |  |  |  |
| `OrderItemIsNotRelevantForMRP` |  | |  | `cast(item.OrderItemIsNotRelevantForMRP as vdm_dnrel preserving type)` |  |  |
| `Material` |  | |  |  |  |  |
| `Product` |  | |  | `cast(item.Material as productnumber preserving type)` |  |  |
| `ProductionPlant` |  | |  |  |  |  |
| `PlanningPlant` |  | |  | `MRPPlant` |  |  |
| `MRPController` |  | |  | `cast(head.MRPController as pph_dispo preserving type)` |  |  |
| `ProductionSupervisor` |  | |  | `cast(head.ProductionSupervisor as pph_fevor preserving type)` |  |  |
| `Reservation` |  | |  |  |  |  |
| `ProductionVersion` |  | |  |  |  |  |
| `MRPArea` |  | |  |  |  |  |
| `SalesOrder` |  | |  |  |  |  |
| `SalesOrderItem` |  | |  |  |  |  |
| `SalesOrderScheduleLine` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `WBSElementInternalID_2` |  | |  |  |  |  |
| `QuotaArrangement` |  | |  |  |  |  |
| `QuotaArrangementItem` |  | |  |  |  |  |
| `SettlementReservation` |  | |  |  |  |  |
| `SettlementReservationItem` |  | |  |  |  |  |
| `CoProductReservation` |  | |  |  |  |  |
| `CoProductReservationItem` |  | |  |  |  |  |
| `MaterialProcurementCategory` |  | |  |  |  |  |
| `MaterialProcurementType` |  | |  |  |  |  |
| `SerialNumberAssgmtProfile` |  | |  |  |  |  |
| `NumberOfSerialNumbers` |  | |  |  |  |  |
| `MfgOrderItemReplnmtElmntType` |  | |  |  |  |  |
| `ProductConfiguration` |  | |  | `cast(item.ProductConfiguration as product_configuration preserving type)` |  |  |
| `ObjectInternalID` |  | |  |  |  |  |
| `ManufacturingObject` |  | |  | `ObjectInternalID` |  |  |
| `QuantityDistributionKey` |  | |  |  |  |  |
| `EffectivityParameterVariant` |  | |  |  |  |  |
| `OriginalEffctyParameterVariant` |  | |  |  |  |  |
| `GoodsReceiptIsExpected` |  | |  |  |  |  |
| `GoodsReceiptIsNonValuated` |  | |  |  |  |  |
| `IsCompletelyDelivered` |  | |  |  |  |  |
| `MaterialGoodsReceiptDuration` |  | |  |  |  |  |
| `UnderdelivTolrtdLmtRatioInPct` |  | |  |  |  |  |
| `OverdelivTolrtdLmtRatioInPct` |  | |  |  |  |  |
| `UnlimitedOverdeliveryIsAllowed` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `Batch` |  | |  |  |  |  |
| `InventoryValuationType` |  | |  |  |  |  |
| `InventoryValuationCategory` |  | |  |  |  |  |
| `InventoryUsabilityCode` |  | |  |  |  |  |
| `InventorySpecialStockType` |  | |  |  |  |  |
| `InventorySpecialStockValnType` |  | |  |  |  |  |
| `ConsumptionPosting` |  | |  |  |  |  |
| `GoodsRecipientName` |  | |  |  |  |  |
| `UnloadingPointName` |  | |  |  |  |  |
| `StockSegment` |  | |  |  |  |  |
| `MfgOrderPlannedStartDate` |  | |  | `cast(head.PlannedStartDate as mfgorderplannedstartdate preserving type)` |  |  |
| `MfgOrderPlannedStartTime` |  | |  | `cast(head.PlannedStartTime as mfgorderplannedstarttime preserving type)` |  |  |
| `MfgOrderScheduledStartDate` |  | |  | `cast(head.ScheduledBasicStartDate as mfgorderscheduledstartdate preserving type)` |  |  |
| `MfgOrderScheduledStartTime` |  | |  | `cast(head.ScheduledBasicStartTime as mfgorderscheduledstarttime preserving type)` |  |  |
| `MfgOrderActualStartDate` |  | |  | `cast(head.ActualStartDate as mfgorderactualstartdate preserving type)` |  |  |
| `MfgOrderActualStartTime` |  | |  | `cast(head.ActualStartTime as mfgorderactualstarttime preserving type)` |  |  |
| `MfgOrderPlannedEndDate` |  | |  | `cast(head.PlannedEndDate as mfgorderplannedenddate preserving type)` |  |  |
| `MfgOrderPlannedEndTime` |  | |  | `cast(head.PlannedEndTime as mfgorderplannedendtime preserving type)` |  |  |
| `MfgOrderScheduledEndDate` |  | |  | `cast(head.ScheduledBasicEndDate as mfgorderscheduledenddate preserving type)` |  |  |
| `MfgOrderScheduledEndTime` |  | |  | `cast(head.ScheduledBasicEndTime as mfgorderscheduledendtime preserving type)` |  |  |
| `MfgOrderConfirmedEndDate` |  | |  | `cast(head.ConfirmedEndDate as mfgorderconfirmedenddate preserving type)` |  |  |
| `MfgOrderConfirmedEndTime` |  | |  | `cast(head.ConfirmedEndTime as mfgorderconfirmedendtime preserving type)` |  |  |
| `MfgOrderActualEndDate` |  | |  | `cast(head.ActualDeliveryDate as mfgorderactualenddate preserving type)` |  |  |
| `MfgOrderScheduledReleaseDate` |  | |  | `cast(head.ScheduledReleaseDate as mfgorderscheduledreleasedate preserving type)` |  |  |
| `MfgOrderActualReleaseDate` |  | |  | `cast(head.ActualReleasedDate as mfgorderactualreleasedate preserving type)` |  |  |
| `MfgOrderItemPlannedEndDate` |  | |  | `cast(item.PlannedEndDate as mfgorderitemplannedenddate preserving type)` |  |  |
| `MfgOrderItemScheduledEndDate` |  | |  | `cast(item.ScheduledBasicEndDate as mfgorderitemscheduledenddate preserving type)` |  |  |
| `MfgOrderItemPlndDeliveryDate` |  | |  | `PlannedDeliveryDate` |  |  |
| `MfgOrderItemActualDeliveryDate` |  | |  | `ActualDeliveryDate` |  |  |
| `MfgOrderItemTotalCmtmtDate` |  | |  | `TotalCommitmentDate` |  |  |
| `ProductionUnit` |  | |  |  |  |  |
| `MfgOrderItemPlannedTotalQty` |  | |  | `cast(item.ItemQuantity as co_psmng preserving type)` |  |  |
| `MfgOrderItemPlannedScrapQty` |  | |  | `cast(item.MfgOrderItemPlannedScrapQty as co_psamg preserving type)` |  |  |
| `MfgOrderItemPlannedYieldQty` |  | |  | `cast(item.ItemQuantity - item.MfgOrderItemPlannedScrapQty as plannedyieldquantity)` |  |  |
| `MfgOrderItemGoodsReceiptQty` |  | |  | `cast(item.MfgOrderItemGoodsReceiptQty as co_wemng preserving type)` |  |  |
| `MfgOrderItemActualDeviationQty` |  | |  | `cast(item.MfgOrderItemActualDeviationQty as co_iamng preserving type)` |  |  |
| `MfgOrderItemOpenYieldQty` |  | |  | `cast(item.MfgOrderItemOpenYieldQty as openyieldquantity preserving type)` |  |  |
| `MfgOrderConfirmedYieldQty` |  | |  | `cast(head.OrderConfirmedYieldQty as co_igmng preserving type)` |  |  |
| `MfgOrderConfirmedScrapQty` |  | |  | `cast(head.OrderConfirmedScrapQty as co_iasmg preserving type)` |  |  |
| `MfgOrderConfirmedReworkQty` |  | |  | `cast(head.MfgOrderConfirmedReworkQty as rmnga preserving type)` |  |  |
| `MfgOrderConfirmedTotalQty` |  | |  | `cast(head.OrderConfirmedYieldQty + head.OrderConfirmedScrapQty + head.MfgOrderConfirmedReworkQty as pph_tmnga)` |  |  |
| `MfgOrderPlannedTotalQty` |  | |  | `cast(head.OrderPlannedTotalQty as gamng preserving type)` |  |  |
| `MfgOrderPlannedScrapQty` |  | |  | `cast(head.OrderPlannedScrapQty as gasmg preserving type)` |  |  |
| `PlannedOrder` |  | |  |  |  |  |
| `PlndOrderPlannedStartDate` |  | |  | `cast(item.PlndOrderPlannedStartDate as vdm_strmp preserving type)` |  |  |
| `PlannedOrderOpeningDate` |  | |  | `cast(item.PlannedOrderOpeningDate as vdm_etrmp preserving type)` |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `PlndOrderPlannedTotalQty` |  | |  | `cast(item.OrderPlannedTotalQty as vdm_pgmng preserving type)` |  |  |
| `PlndOrderPlannedScrapQty` |  | |  | `cast(item.OrderPlannedScrapQty as vdm_pamng preserving type)` |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `AccountAssignmentCategory` |  | |  |  |  |  |
| `CompanyCodeCurrency` |  | |  | `Currency` |  |  |
| `GoodsReceiptAmountInCoCodeCrcy` |  | |  |  |  |  |
| `MasterProductionOrder` |  | |  |  |  |  |
| `_MfgOrderCategory` | | ✓ | | | | |
| `_MfgOrderType` | | ✓ | | | | |
| `_MRPController` | | ✓ | | | | |
| `_ProductionSupervisor` | | ✓ | | | | |
| `_Reservation` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ProductPlant` | | ✓ | | | | |
| `_ProductPlanningPlant` | | ✓ | | | | |
| `_ProductPlant2` | | ✓ | | | | |
| `_ProductPlanningPlant2` | | ✓ | | | | |
| `_ProductSupplyPlanning` | | ✓ | | | | |
| `_ProductStorageLocation` | | ✓ | | | | |
| `_ProductStorageLocation2` | | ✓ | | | | |
| `_ProductUnitsOfMeasure` | | ✓ | | | | |
| `_ProductMRPArea` | | ✓ | | | | |
| `_ProductPlantMRPArea` | | ✓ | | | | |
| `_Batch` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_MfgOrder` | | ✓ | | | | |
| `_MfgOrderItemSrlNmbr` | | ✓ | | | | |
| `_MfgOrderItemLongText` | | ✓ | | | | |
| `_ProductionPlantText` | | ✓ | | | | |
| `_PlanningPlantText` | | ✓ | | | | |
| `_MaterialText` | | ✓ | | | | |
| `_ProductText` | | ✓ | | | | |
| `_ProductionVersionText` | | ✓ | | | | |
| `_MRPAreaText` | | ✓ | | | | |
| `_WBSElementText` | | ✓ | | | | |
| `_StorageLocationText` | | ✓ | | | | |
| `_StatusObjectHeader` | | ✓ | | | | |
| `_StatusObjectItem` | | ✓ | | | | |
| `_BusinessAreaText` | | ✓ | | | | |
| `_CompanyCodeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MfgOrderCategory` | `I_MfgOrderCategory` | [1..1] |
| `_MfgOrderType` | `I_MfgOrderType` | [1..1] |
| `_MRPController` | `I_MRPController` | [0..1] |
| `_ProductionSupervisor` | `I_ProductionSupervisor` | [0..1] |
| `_Reservation` | `I_ReservationDocumentHeader` | [1..1] |
| `_Product` | `I_Product` | [0..1] |
| `_ProductPlant` | `I_ProductPlant` | [0..1] |
| `_ProductPlanningPlant` | `I_ProductPlant` | [0..1] |
| `_ProductPlant2` | `I_ProductPlantBasic` | [0..1] |
| `_ProductPlanningPlant2` | `I_ProductPlantBasic` | [0..1] |
| `_ProductSupplyPlanning` | `I_ProductSupplyPlanning` | [0..1] |
| `_ProductStorageLocation` | `I_ProductStorageLocation` | [0..1] |
| `_ProductStorageLocation2` | `I_ProductStorageLocationBasic` | [0..1] |
| `_ProductUnitsOfMeasure` | `I_ProductUnitsOfMeasure` | [0..*] |
| `_ProductMRPArea` | `I_ProductMRPArea` | [0..1] |
| `_ProductPlantMRPArea` | `I_ProductPlantMRP` | [0..1] |
| `_Batch` | `I_Batch` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_MfgOrder` | `I_ManufacturingOrder` | [1..1] |
| `_MfgOrderItemSrlNmbr` | `I_MfgOrderItemSerialNumber` | [0..*] |
| `_MfgOrderItemLongText` | `I_MfgOrderItemLongText` | [0..*] |
| `_ProductionPlantText` | `I_Plant` | [1..1] |
| `_PlanningPlantText` | `I_Plant` | [0..1] |
| `_MaterialText` | `I_MaterialText` | [0..*] |
| `_ProductText` | `I_ProductText` | [0..*] |
| `_ProductionVersionText` | `I_ProductionVersion` | [0..1] |
| `_MRPAreaText` | `I_MRPArea` | [0..1] |
| `_WBSElementText` | `I_WBSElementBasicData` | [0..1] |
| `_StorageLocationText` | `I_StorageLocation` | [0..1] |
| `_StatusObjectHeader` | `I_StatusObject` | [1..1] |
| `_StatusObjectItem` | `I_StatusObject` | [1..1] |
| `_BusinessAreaText` | `I_BusinessAreaText` | [0..*] |
| `_CompanyCodeText` | `I_CompanyCode` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMFGORDERITEM'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AccessControl.privilegedAssociations: ['_MRPController', '_ProductionSupervisor', '_StatusObjectHeader', '_StatusObjectItem']
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction: { enabled: true,
                             delta.changeDataCapture:
                                    { mapping:
                                      [ { role: #MAIN,
                                          table: 'afpo',
                                          tableElement: ['aufnr'             , 'posnr'],
                                          viewElement:  ['ManufacturingOrder', 'ManufacturingOrderItem']
                                        },
                                        { role: #LEFT_OUTER_TO_ONE_JOIN,
                                          table: 'afko',
                                          tableElement: ['aufnr'],
                                          viewElement:  ['ManufacturingOrder']
                                        } ] } }
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@ClientHandling.type: #CLIENT_DEPENDENT
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE]
@ObjectModel.representativeKey: 'ManufacturingOrderItem'
@ObjectModel.sapObjectNodeType.name: 'ProductionOrderItem'
@ObjectModel.semanticKey: ['ManufacturingOrder', 'ManufacturingOrderItem']
@ObjectModel.usageType: {serviceQuality: #B, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Manufacturing Order Item'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_ManufacturingOrderItem
  as select from I_OrderItem      as item
    inner join   I_LogisticsOrder as head on  head.OrderID       = item.OrderID
                                          and head.OrderCategory = item.OrderCategory  //filter push-down

  association [1..1] to I_MfgOrderCategory            as _MfgOrderCategory        on  $projection.ManufacturingOrderCategory = _MfgOrderCategory.ManufacturingOrderCategory
  association [1..1] to I_MfgOrderType                as _MfgOrderType            on  $projection.ManufacturingOrderType = _MfgOrderType.ManufacturingOrderType
  association [0..1] to I_MRPController               as _MRPController           on  $projection.ProductionPlant = _MRPController.Plant
                                                                                  and $projection.MRPController   = _MRPController.MRPController
  association [0..1] to I_ProductionSupervisor        as _ProductionSupervisor    on  $projection.ProductionPlant      = _ProductionSupervisor.Plant
                                                                                  and $projection.ProductionSupervisor = _ProductionSupervisor.ProductionSupervisor
  association [1..1] to I_ReservationDocumentHeader   as _Reservation             on  $projection.Reservation = _Reservation.Reservation
  association [0..1] to I_Product                     as _Product                 on  $projection.Product = _Product.Product
  association [0..1] to I_ProductPlant                as _ProductPlant            on  $projection.ProductionPlant = _ProductPlant.Plant
                                                                                  and $projection.Product         = _ProductPlant.Product
  association [0..1] to I_ProductPlant                as _ProductPlanningPlant    on  $projection.PlanningPlant = _ProductPlanningPlant.Plant
                                                                                  and $projection.Product       = _ProductPlanningPlant.Product
  association [0..1] to I_ProductPlantBasic           as _ProductPlant2           on  $projection.ProductionPlant = _ProductPlant2.Plant
                                                                                  and $projection.Product         = _ProductPlant2.Product
  association [0..1] to I_ProductPlantBasic           as _ProductPlanningPlant2   on  $projection.PlanningPlant = _ProductPlanningPlant2.Plant
                                                                                  and $projection.Product       = _ProductPlanningPlant2.Product                                                
  association [0..1] to I_ProductSupplyPlanning       as _ProductSupplyPlanning   on  $projection.PlanningPlant = _ProductSupplyPlanning.Plant
                                                                                  and $projection.Product       = _ProductSupplyPlanning.Product
  association [0..1] to I_ProductStorageLocation      as _ProductStorageLocation  on  $projection.Material        = _ProductStorageLocation.Product
                                                                                  and $projection.ProductionPlant = _ProductStorageLocation.Plant
                                                                                  and $projection.StorageLocation = _ProductStorageLocation.StorageLocation
  association [0..1] to I_ProductStorageLocationBasic as _ProductStorageLocation2 on  $projection.Material        = _ProductStorageLocation2.Product
                                                                                  and $projection.ProductionPlant = _ProductStorageLocation2.Plant
                                                                                  and $projection.StorageLocation = _ProductStorageLocation2.StorageLocation
  association [0..*] to I_ProductUnitsOfMeasure       as _ProductUnitsOfMeasure   on  $projection.Product = _ProductUnitsOfMeasure.Product
  association [0..1] to I_ProductMRPArea              as _ProductMRPArea          on  $projection.Product         = _ProductMRPArea.Product
                                                                                  and $projection.MRPArea         = _ProductMRPArea.MRPArea
  association [0..1] to I_ProductPlantMRP             as _ProductPlantMRPArea     on  $projection.Product         = _ProductPlantMRPArea.Product
                                                                                  and $projection.ProductionPlant = _ProductPlantMRPArea.Plant
                                                                                  and $projection.MRPArea         = _ProductPlantMRPArea.MRPArea
  association [0..1] to I_Batch                       as _Batch                   on  $projection.ProductionPlant = _Batch.Plant
                                                                                  and $projection.Product         = _Batch.Material
                                                                                  and $projection.Batch           = _Batch.Batch
  association [0..1] to I_Currency                    as _Currency                on  $projection.CompanyCodeCurrency = _Currency.Currency
 -- to root:  Header
  association [1..1] to I_ManufacturingOrder          as _MfgOrder                on  $projection.ManufacturingOrder = _MfgOrder.ManufacturingOrder
  -- to child: Serial numbers
  association [0..*] to I_MfgOrderItemSerialNumber    as _MfgOrderItemSrlNmbr     on  $projection.ManufacturingOrder     = _MfgOrderItemSrlNmbr.ManufacturingOrder
                                                                                  and $projection.ManufacturingOrderItem = _MfgOrderItemSrlNmbr.ManufacturingOrderItem
  -- to child: Longtext
  association [0..*] to I_MfgOrderItemLongText        as _MfgOrderItemLongText    on  $projection.ManufacturingOrder     = _MfgOrderItemLongText.ManufacturingOrder
                                                                                  and $projection.ManufacturingOrderItem = _MfgOrderItemLongText.ManufacturingOrderItem
-- start new associations for full coverage of text relations
  association [1..1] to I_Plant                       as _ProductionPlantText     on  $projection.ProductionPlant = _ProductionPlantText.Plant
  association [0..1] to I_Plant                       as _PlanningPlantText       on  $projection.PlanningPlant = _PlanningPlantText.Plant
  association [0..*] to I_MaterialText                as _MaterialText            on  $projection.Material = _MaterialText.Material
  association [0..*] to I_ProductText                 as _ProductText             on  $projection.Product = _ProductText.Product
  association [0..1] to I_ProductionVersion           as _ProductionVersionText   on  $projection.Material          = _ProductionVersionText.Material
                                                                                  and $projection.ProductionPlant   = _ProductionVersionText.Plant
                                                                                  and $projection.ProductionVersion = _ProductionVersionText.ProductionVersion
  association [0..1] to I_MRPArea                     as _MRPAreaText             on  $projection.MRPArea = _MRPAreaText.MRPArea
  association [0..1] to I_WBSElementBasicData         as _WBSElementText          on  $projection.WBSElementInternalID_2 = _WBSElementText.WBSElementInternalID
  association [0..1] to I_StorageLocation             as _StorageLocationText     on  $projection.ProductionPlant = _StorageLocationText.Plant
                                                                                  and $projection.StorageLocation = _StorageLocationText.StorageLocation
  association [1..1] to I_StatusObject                as _StatusObjectHeader      on  $projection.ManufacturingObject = _StatusObjectHeader.StatusObject
  association [1..1] to I_StatusObject                as _StatusObjectItem        on  $projection.ObjectInternalID = _StatusObjectItem.StatusObject   
  association [0..*] to I_BusinessAreaText            as _BusinessAreaText        on  $projection.BusinessArea = _BusinessAreaText.BusinessArea
  association [0..1] to I_CompanyCode                 as _CompanyCodeText         on  $projection.CompanyCode = _CompanyCodeText.CompanyCode
-- end new associations for full coverage of text relations
{
      // Key
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderStdVH', element: 'ManufacturingOrder' } } ]
      @ObjectModel.foreignKey.association: '_MfgOrder'
  key cast(item.OrderID as manufacturingorder preserving type)               as ManufacturingOrder,
  key cast(item.OrderItem as manufacturingorderitem preserving type)         as ManufacturingOrderItem,

      // Category and Type
      @ObjectModel.foreignKey.association: '_MfgOrderCategory'
      cast(item.OrderCategory as manufacturingordercategory preserving type) as ManufacturingOrderCategory,
      @ObjectModel.foreignKey.association: '_MfgOrderType'
      cast(item.OrderType as manufacturingordertype preserving type)         as ManufacturingOrderType,

      // Attributes
      cast(item.OrderIsReleased as orderisreleased preserving type)          as OrderIsReleased,
      item.IsMarkedForDeletion,
      cast(item.OrderItemIsNotRelevantForMRP as vdm_dnrel preserving type)   as OrderItemIsNotRelevantForMRP,

      // Assignments
      @ObjectModel.foreignKey.association: '_Material'
      @ObjectModel.text.association: '_MaterialText'      
      item.Material,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' } } ]
      @ObjectModel.foreignKey.association: '_Product'
      @ObjectModel.text.association: '_ProductText'
      cast(item.Material as productnumber preserving type)                   as Product,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_ProductionPlant'
--    @ObjectModel.text.association: '_ProductionPlantText'
      item.ProductionPlant,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_MRPPlant'
--    @ObjectModel.text.association: '_PlanningPlantText'
      item.MRPPlant                                                          as PlanningPlant,
      @ObjectModel.foreignKey.association: '_MRPController'
      cast(head.MRPController        as pph_dispo preserving type)           as MRPController,
      @ObjectModel.foreignKey.association: '_ProductionSupervisor'
      cast(head.ProductionSupervisor as pph_fevor preserving type)           as ProductionSupervisor,
--    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ReservationHeaderStdVH', element: 'Reservation' } } ]
      @ObjectModel.foreignKey.association: '_Reservation'
      head.Reservation,
--    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionVersionStdVH', element: 'ProductionVersion' } } ]
      @ObjectModel.foreignKey.association: '_ProductionVersion'
--    @ObjectModel.text.association: '_ProductionVersionText'
      item.ProductionVersion,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MRPAreaVH', element: 'MRPArea' } } ]
      @ObjectModel.foreignKey.association: '_MRPArea'
--    @ObjectModel.text.association: '_MRPAreaText'
      item.MRPArea,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderStdVH', element: 'SalesOrder' } } ]
      @ObjectModel.foreignKey.association: '_SalesOrder'
      item.SalesOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderItemStdVH', element: 'SalesOrderItem' } } ]
      @ObjectModel.foreignKey.association: '_SalesOrderItem'
      item.SalesOrderItem,
      @ObjectModel.foreignKey.association: '_SalesOrderScheduleLine'   
      item.SalesOrderScheduleLine,     
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'WBSElementInternalID_2'
      @ObjectModel.foreignKey.association: '_WBSElement'
      item.WBSElementInternalID,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WBSElementBasicDataStdVH', element: 'WBSElementInternalID' } } ]
      @ObjectModel.foreignKey.association: '_WBSElementBasicData2'
--    @ObjectModel.text.association: '_WBSElementText'
      item.WBSElementInternalID_2,
--    @ObjectModel.foreignKey.association: '_QuotaArrangement'
      item.QuotaArrangement,
--    @ObjectModel.foreignKey.association: '_QuotaArrangementItem'
      item.QuotaArrangementItem,
      @ObjectModel.foreignKey.association: '_SettlementReservation'
      item.SettlementReservation,
      @ObjectModel.foreignKey.association: '_SettlementReservationItem'
      item.SettlementReservationItem,
      @ObjectModel.foreignKey.association: '_CoProductReservation'
      item.CoProductReservation,
      @ObjectModel.foreignKey.association: '_CoProductReservationItem'
      item.CoProductReservationItem,
      @ObjectModel.foreignKey.association: '_MatlProcurementCategory'
      item.MaterialProcurementCategory,
      @ObjectModel.foreignKey.association: '_MatlProcurementType'
      item.MaterialProcurementType,
--    @ObjectModel.foreignKey.association: '_SerialNumberProfile'
      item.SerialNumberAssgmtProfile,
      item.NumberOfSerialNumbers,
      item.MfgOrderItemReplnmtElmntType,
      cast(item.ProductConfiguration as product_configuration preserving type) as ProductConfiguration,
      @ObjectModel.foreignKey.association: '_StatusObjectItem'
      item.ObjectInternalID,
      @ObjectModel.foreignKey.association: '_StatusObjectHeader'
      head.ObjectInternalID                                                    as ManufacturingObject,
      item.QuantityDistributionKey,
      item.EffectivityParameterVariant,
      item.OriginalEffctyParameterVariant,

      // Goods Receipt data
      item.GoodsReceiptIsExpected,
      item.GoodsReceiptIsNonValuated,
      @ObjectModel.foreignKey.association: '_DeliveryCompletedIndicator'
      item.IsCompletelyDelivered,
      item.MaterialGoodsReceiptDuration,
      item.UnderdelivTolrtdLmtRatioInPct,
      item.OverdelivTolrtdLmtRatioInPct,
      item.UnlimitedOverdeliveryIsAllowed,
      @ObjectModel.foreignKey.association: '_StorageLocation'
--    @ObjectModel.text.association: '_StorageLocationText'
      item.StorageLocation,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BatchStdVH', element: 'Batch' } } ]
      item.Batch,
      @ObjectModel.foreignKey.association: '_InventoryValuationType'
      item.InventoryValuationType,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductValuationCategoryVH', element: 'InventoryValuationCategory' } } ]
      item.InventoryValuationCategory,
      @ObjectModel.foreignKey.association: '_InventoryUsabilityCode'
      item.InventoryUsabilityCode,
      @ObjectModel.foreignKey.association: '_InventorySpecialStockType'
      item.InventorySpecialStockType,
      @ObjectModel.foreignKey.association: '_InventorySpecialStockValnType'
      item.InventorySpecialStockValnType,
      @ObjectModel.foreignKey.association: '_ConsumptionPosting'
      item.ConsumptionPosting,
      @Semantics.text: true
      item.GoodsRecipientName,
      @Semantics.text: true
      item.UnloadingPointName,
      item.StockSegment,

      // Order Header Dates and Times
      cast(head.PlannedStartDate as mfgorderplannedstartdate preserving type)            as MfgOrderPlannedStartDate,
      cast(head.PlannedStartTime as mfgorderplannedstarttime preserving type)            as MfgOrderPlannedStartTime,
      cast(head.ScheduledBasicStartDate as mfgorderscheduledstartdate preserving type)   as MfgOrderScheduledStartDate,
      cast(head.ScheduledBasicStartTime as mfgorderscheduledstarttime preserving type)   as MfgOrderScheduledStartTime,
      cast(head.ActualStartDate as mfgorderactualstartdate preserving type)              as MfgOrderActualStartDate,
      cast(head.ActualStartTime as mfgorderactualstarttime preserving type)              as MfgOrderActualStartTime,
      cast(head.PlannedEndDate as mfgorderplannedenddate preserving type)                as MfgOrderPlannedEndDate,
      cast(head.PlannedEndTime as mfgorderplannedendtime preserving type)                as MfgOrderPlannedEndTime,
      cast(head.ScheduledBasicEndDate as mfgorderscheduledenddate preserving type)       as MfgOrderScheduledEndDate,
      cast(head.ScheduledBasicEndTime as mfgorderscheduledendtime preserving type)       as MfgOrderScheduledEndTime,
      cast(head.ConfirmedEndDate as mfgorderconfirmedenddate preserving type)            as MfgOrderConfirmedEndDate,
      cast(head.ConfirmedEndTime as mfgorderconfirmedendtime preserving type)            as MfgOrderConfirmedEndTime,
      cast(head.ActualDeliveryDate as mfgorderactualenddate preserving type)             as MfgOrderActualEndDate,
      cast(head.ScheduledReleaseDate as mfgorderscheduledreleasedate preserving type)    as MfgOrderScheduledReleaseDate,
      cast(head.ActualReleasedDate as mfgorderactualreleasedate preserving type)         as MfgOrderActualReleaseDate,

      // Order Item Dates
      cast(item.PlannedEndDate as mfgorderitemplannedenddate preserving type)            as MfgOrderItemPlannedEndDate,
      cast(item.ScheduledBasicEndDate as mfgorderitemscheduledenddate preserving type)   as MfgOrderItemScheduledEndDate,
      item.PlannedDeliveryDate                                                           as MfgOrderItemPlndDeliveryDate,
      item.ActualDeliveryDate                                                            as MfgOrderItemActualDeliveryDate,
      item.TotalCommitmentDate                                                           as MfgOrderItemTotalCmtmtDate,

      // Item Quantities and UoM
      @ObjectModel.foreignKey.association: '_ProductionUnit'
      @Semantics.unitOfMeasure: true
      item.ProductionUnit,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      cast(item.ItemQuantity as co_psmng preserving type)                                as MfgOrderItemPlannedTotalQty,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      cast(item.MfgOrderItemPlannedScrapQty as co_psamg preserving type)                 as MfgOrderItemPlannedScrapQty,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      cast(item.ItemQuantity - item.MfgOrderItemPlannedScrapQty as plannedyieldquantity) as MfgOrderItemPlannedYieldQty,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      cast(item.MfgOrderItemGoodsReceiptQty as co_wemng preserving type)                 as MfgOrderItemGoodsReceiptQty,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      cast(item.MfgOrderItemActualDeviationQty as co_iamng preserving type)              as MfgOrderItemActualDeviationQty,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      cast(item.MfgOrderItemOpenYieldQty as openyieldquantity preserving type)           as MfgOrderItemOpenYieldQty,

      // Header Quantities and UoM
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      cast(head.OrderConfirmedYieldQty as co_igmng preserving type)                      as MfgOrderConfirmedYieldQty,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      cast(head.OrderConfirmedScrapQty as co_iasmg preserving type)                      as MfgOrderConfirmedScrapQty,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      cast(head.MfgOrderConfirmedReworkQty as rmnga preserving type)                     as MfgOrderConfirmedReworkQty,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      cast(head.OrderConfirmedYieldQty + head.OrderConfirmedScrapQty + head.MfgOrderConfirmedReworkQty as pph_tmnga)  
                                                                                         as MfgOrderConfirmedTotalQty,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      cast(head.OrderPlannedTotalQty as gamng preserving type)                           as MfgOrderPlannedTotalQty,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      cast(head.OrderPlannedScrapQty as gasmg preserving type)                           as MfgOrderPlannedScrapQty,

      // Planned Order data
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlannedOrderStdVH', element: 'PlannedOrder' } } ]
      @ObjectModel.foreignKey.association: '_PlannedOrder'
      item.PlannedOrder,
      cast(item.PlndOrderPlannedStartDate as vdm_strmp preserving type)                  as PlndOrderPlannedStartDate,
      cast(item.PlannedOrderOpeningDate as vdm_etrmp preserving type)                    as PlannedOrderOpeningDate,
      @ObjectModel.foreignKey.association: '_BaseUnit'
      @Semantics.unitOfMeasure: true
      item.BaseUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Aggregation.default: #SUM
      cast(item.OrderPlannedTotalQty as vdm_pgmng preserving type)                       as PlndOrderPlannedTotalQty,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Aggregation.default: #SUM
      cast(item.OrderPlannedScrapQty as vdm_pamng preserving type)                       as PlndOrderPlannedScrapQty,

      // Assignments FI/CO
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' } } ]
      @ObjectModel.foreignKey.association: '_CompanyCode'
      head.CompanyCode,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BusinessAreaStdVH', element: 'BusinessArea' } } ]
      @ObjectModel.foreignKey.association: '_BusinessArea'
      @ObjectModel.text.association: '_BusinessAreaText'
      item.BusinessArea,
      @ObjectModel.foreignKey.association: '_AccountAssignmentCategory'
      item.AccountAssignmentCategory,

      // Amount and Currency
      @ObjectModel.foreignKey.association: '_Currency'
      @Semantics.currencyCode: true
      head.Currency as CompanyCodeCurrency,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM
      item.GoodsReceiptAmountInCoCodeCrcy,

      // Fashion fields
      head.MasterProductionOrder,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT, #TO_COMPOSITION_PARENT]
      _MfgOrder,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _MfgOrderItemSrlNmbr,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]  // available only for co-products
      _MfgOrderItemLongText,
      _MfgOrderCategory,
      _MfgOrderType,
      item._ProductionPlant,
      _ProductionSupervisor,
      _MRPController,
      item._MRPPlant,
      item._MRPArea,
      item._PlannedOrder,
      item._Material,
      _Product,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ProductPlant2'
      _ProductPlant,
      _ProductPlant2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ProductPlanningPlant2'
      _ProductPlanningPlant,
      _ProductPlanningPlant2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ProductStorageLocation2'
      _ProductStorageLocation,
      _ProductStorageLocation2,
      _ProductSupplyPlanning,
      _ProductMRPArea,
      _ProductPlantMRPArea,
      _ProductUnitsOfMeasure,
      item._BaseUnit,
      item._ProductionUnit,
      item._ProductionVersion,
      _Reservation,
      _StatusObjectHeader,
      _StatusObjectItem,
      item._MatlProcurementCategory,
      item._MatlProcurementType,
      item._DeliveryCompletedIndicator,
      item._StorageLocation,
      _Batch,
      item._InventorySpecialStockType,
      item._InventorySpecialStockValnType,
      item._InventoryValuationType,
      item._InventoryUsabilityCode,
      item._SerialNumberProfile,
      item._ConsumptionPosting,
      item._SalesOrder,
      item._SalesOrderItem,
      item._SalesOrderScheduleLine,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_WBSElementBasicData2'  
      item._WBSElement,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_WBSElementBasicData2'  
      item._WBSElementBasicData,
      item._WBSElementBasicData2,
      item._EnterpriseProjectElement,
      item._QuotaArrangement,
      item._QuotaArrangementItem,
      item._SettlementReservation,
      item._SettlementReservationItem,
      item._CoProductReservation,
      item._CoProductReservationItem,
      item._BusinessArea,
      item._AccountAssignmentCategory,
      head._CompanyCode,
      _Currency,
      
      // Text relations
      _MaterialText,
      _ProductText,
      _ProductionPlantText,
      _PlanningPlantText,
      _ProductionVersionText,
      _MRPAreaText,
      _WBSElementText,
      _StorageLocationText,
      _BusinessAreaText,
      _CompanyCodeText    
}
where
  (    item.OrderCategory = '10'
    or item.OrderCategory = '40'
  );
```
