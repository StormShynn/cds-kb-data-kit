---
name: I_PRODUCTIONORDERITEM
description: Production OrderITEM
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - product
  - production-order
  - item-level
  - component:PP-VDM-2CL
  - lob:Manufacturing
  - bo:ProductionOrder
---
# I_PRODUCTIONORDERITEM

**Production OrderITEM**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductionOrder` | ✓ | |  | `cast(item.OrderID as vdm_manufacturingorder preserving type)` |  |  |
| `ProductionOrderItem` | ✓ | |  | `OrderItem` |  |  |
| `OrderIsReleased` |  | |  | `cast(item.OrderIsReleased as orderisreleased preserving type)` |  |  |
| `IsMarkedForDeletion` |  | |  |  |  |  |
| `OrderItemIsNotRelevantForMRP` |  | |  | `cast(item.OrderItemIsNotRelevantForMRP as vdm_dnrel preserving type)` |  |  |
| `ProductionOrderType` |  | |  | `cast(item.OrderType as vdm_prodnordertype preserving type)` |  |  |
| `Product` |  | |  | `cast(item.Material as productnumber preserving type)` |  |  |
| `ProductionPlant` |  | |  |  |  |  |
| `PlanningPlant` |  | |  | `MRPPlant` |  |  |
| `ProductionVersion` |  | |  |  |  |  |
| `MRPArea` |  | |  |  |  |  |
| `SalesOrder` |  | |  |  |  |  |
| `SalesOrderItem` |  | |  |  |  |  |
| `SalesOrderScheduleLine` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  | `WBSElementInternalID_2` |  |  |
| `QuotaArrangement` |  | |  |  |  |  |
| `QuotaArrangementItem` |  | |  |  |  |  |
| `SettlementReservation` |  | |  |  |  |  |
| `SettlementReservationItem` |  | |  |  |  |  |
| `CoProductReservation` |  | |  |  |  |  |
| `CoProductReservationItem` |  | |  |  |  |  |
| `SerialNumberProfile` |  | |  | `SerialNumberAssgmtProfile` |  |  |
| `NumberOfSerialNumbers` |  | |  |  |  |  |
| `ReplenishmentElementType` |  | |  | `MfgOrderItemReplnmtElmntType` |  |  |
| `ProductConfiguration` |  | |  | `cast(item.ProductConfiguration as product_configuration preserving type)` |  |  |
| `ObjectInternalID` |  | |  |  |  |  |
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
| `PlannedEndDate` |  | |  | `cast(item.PlannedEndDate as mfgorderitemplannedenddate preserving type)` |  |  |
| `ScheduledEndDate` |  | |  | `cast(item.ScheduledBasicEndDate as mfgorderitemscheduledenddate preserving type)` |  |  |
| `ActualDeliveryDate` |  | |  |  |  |  |
| `TotalCommitmentDate` |  | |  |  |  |  |
| `ProductionUnit` |  | |  |  |  |  |
| `PlannedTotalQty` |  | |  | `cast(item.ItemQuantity as co_psmng preserving type)` |  |  |
| `PlannedScrapQuantity` |  | |  | `cast(item.MfgOrderItemPlannedScrapQty as co_psamg preserving type)` |  |  |
| `PlannedYieldQuantity` |  | |  | `cast(item.ItemQuantity - item.MfgOrderItemPlannedScrapQty as plannedyieldquantity)` |  |  |
| `GoodsReceiptQty` |  | |  | `cast(item.MfgOrderItemGoodsReceiptQty as co_wemng preserving type)` |  |  |
| `ActualDeviationQty` |  | |  | `cast(item.MfgOrderItemActualDeviationQty as co_iamng preserving type)` |  |  |
| `OpenYieldQuantity` |  | |  | `cast(item.MfgOrderItemOpenYieldQty as openyieldquantity preserving type)` |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `PlannedTotalQtyInBaseUnit` |  | |  | `cast(item.OrderPlannedTotalQty as vdm_pgmng preserving type)` |  |  |
| `PlannedScrapQtyInBaseUnit` |  | |  | `cast(item.OrderPlannedScrapQty as vdm_pamng preserving type)` |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `AccountAssignmentCategory` |  | |  |  |  |  |
| `PlannedOrder` |  | |  |  |  |  |
| `PlannedOrderPlannedDeliveryDte` |  | |  | `PlannedDeliveryDate` |  |  |
| `PlndOrderPlannedStartDate` |  | |  | `cast(item.PlndOrderPlannedStartDate as vdm_strmp preserving type)` |  |  |
| `PlannedOrderOpeningDate` |  | |  | `cast(item.PlannedOrderOpeningDate as vdm_etrmp preserving type)` |  |  |
| `CompanyCodeCurrency` |  | |  | `Currency` |  |  |
| `GoodsReceiptAmountInCoCodeCrcy` |  | |  |  |  |  |
| `_PlanningPlant` |  | |  | `_MRPPlant` |  |  |
| `_StatusObject` |  | |  | `_StatusObjectItem` |  |  |
| `_ProductionOrderType` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ProductPlant` | | ✓ | | | | |
| `_ProductPlanningPlant` | | ✓ | | | | |
| `_ProductSupplyPlanning` | | ✓ | | | | |
| `_ProductStorageLocation` | | ✓ | | | | |
| `_WBSElementBasicData` | | ✓ | | | | |
| `_EnterpriseProjectElement` | | ✓ | | | | |
| `_ProductMRPArea` | | ✓ | | | | |
| `_ProductPlantMRPArea` | | ✓ | | | | |
| `_Batch` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_ProductionOrderText` | | ✓ | | | | |
| `_ProductionPlantText` | | ✓ | | | | |
| `_PlanningPlantText` | | ✓ | | | | |
| `_ProductText` | | ✓ | | | | |
| `_ProductionVersionText` | | ✓ | | | | |
| `_MRPAreaText` | | ✓ | | | | |
| `_WBSElementText` | | ✓ | | | | |
| `_StorageLocationText` | | ✓ | | | | |
| `_BusinessAreaText` | | ✓ | | | | |
| `_CompanyCodeText` | | ✓ | | | | |
| `_ProductionOrderHeader` | | ✓ | | | | |
| `_SerialNumber` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductionOrderType` | `I_ProductionOrderType` | [1..1] |
| `_Product` | `I_Product` | [0..1] |
| `_ProductPlant` | `I_ProductPlantBasic` | [0..1] |
| `_ProductPlanningPlant` | `I_ProductPlantBasic` | [0..1] |
| `_ProductSupplyPlanning` | `I_ProductSupplyPlanning` | [0..1] |
| `_ProductStorageLocation` | `I_ProductStorageLocationBasic` | [0..1] |
| `_WBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_EnterpriseProjectElement` | `I_EnterpriseProjectElement` | [0..1] |
| `_ProductMRPArea` | `I_ProductMRPArea` | [0..1] |
| `_ProductPlantMRPArea` | `I_ProductPlantMRP` | [0..1] |
| `_Batch` | `I_Batch` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_ProductionOrderText` | `I_ProductionOrder` | [1..1] |
| `_ProductionPlantText` | `I_Plant` | [1..1] |
| `_PlanningPlantText` | `I_Plant` | [0..1] |
| `_ProductText` | `I_ProductText` | [0..*] |
| `_ProductionVersionText` | `I_ProductionVersion` | [0..1] |
| `_MRPAreaText` | `I_MRPArea` | [0..1] |
| `_WBSElementText` | `I_WBSElementBasicData` | [0..1] |
| `_StorageLocationText` | `I_StorageLocation` | [0..1] |
| `_StatusObjectItem` | `I_StatusObject` | [1..1] |
| `_BusinessAreaText` | `I_BusinessAreaText` | [0..*] |
| `_CompanyCodeText` | `I_CompanyCode` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AccessControl.privilegedAssociations: ['_StatusObject']
@Analytics.dataCategory: #FACT
@Analytics.dataExtraction: { enabled: true,
                             delta.changeDataCapture:
                                    { mapping:
                                      [ { role: #MAIN,
                                          table: 'afpo',
                                          tableElement: ['aufnr'          , 'posnr'],
                                          viewElement:  ['ProductionOrder', 'ProductionOrderItem']
                                        },
                                        { role: #LEFT_OUTER_TO_ONE_JOIN,
                                          table: 'aufk',
                                          tableElement: ['aufnr'],
                                          viewElement:  ['ProductionOrder']
                                        } ] } }
@Analytics.technicalName: 'IPRODNORDERITEM'
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name: 'ProductionOrderItem'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Production Order Item'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_ProductionOrderItem
  as select from I_OrderItem  as item
    inner join   I_OrderBasic as head on  head.OrderID       = item.OrderID
                                      and head.OrderCategory = item.OrderCategory  //filter push-down

  association [1..1] to I_ProductionOrderType         as _ProductionOrderType     on  $projection.ProductionOrderType = _ProductionOrderType.ProductionOrderType
  association [0..1] to I_Product                     as _Product                 on  $projection.Product = _Product.Product
  association [0..1] to I_ProductPlantBasic           as _ProductPlant            on  $projection.ProductionPlant = _ProductPlant.Plant
                                                                                  and $projection.Product         = _ProductPlant.Product
  association [0..1] to I_ProductPlantBasic           as _ProductPlanningPlant    on  $projection.PlanningPlant = _ProductPlanningPlant.Plant
                                                                                  and $projection.Product       = _ProductPlanningPlant.Product                                                
  association [0..1] to I_ProductSupplyPlanning       as _ProductSupplyPlanning   on  $projection.PlanningPlant = _ProductSupplyPlanning.Plant
                                                                                  and $projection.Product       = _ProductSupplyPlanning.Product
  association [0..1] to I_ProductStorageLocationBasic as _ProductStorageLocation  on  $projection.Product         = _ProductStorageLocation.Product
                                                                                  and $projection.ProductionPlant = _ProductStorageLocation.Plant
                                                                                  and $projection.StorageLocation = _ProductStorageLocation.StorageLocation
  association [0..1] to I_WBSElementBasicData         as _WBSElementBasicData     on  $projection.WBSElementInternalID = _WBSElementBasicData.WBSElementInternalID
  association [0..1] to I_EnterpriseProjectElement    as _EnterpriseProjectElement on $projection.WBSElementInternalID = _EnterpriseProjectElement.WBSElementInternalID  
  association [0..1] to I_ProductMRPArea              as _ProductMRPArea          on  $projection.Product         = _ProductMRPArea.Product
                                                                                  and $projection.MRPArea         = _ProductMRPArea.MRPArea
  association [0..1] to I_ProductPlantMRP             as _ProductPlantMRPArea     on  $projection.Product         = _ProductPlantMRPArea.Product
                                                                                  and $projection.ProductionPlant = _ProductPlantMRPArea.Plant
                                                                                  and $projection.MRPArea         = _ProductPlantMRPArea.MRPArea
  association [0..1] to I_Batch                       as _Batch                   on  $projection.ProductionPlant = _Batch.Plant
                                                                                  and $projection.Product         = _Batch.Material
                                                                                  and $projection.Batch           = _Batch.Batch
  association [0..1] to I_Currency                    as _Currency                on  $projection.CompanyCodeCurrency = _Currency.Currency

  // SOT relations
  association to parent I_ProductionOrder             as _ProductionOrderHeader   on  $projection.ProductionOrder = _ProductionOrderHeader.ProductionOrder
  composition [0..*] of I_ProdnOrderItemSerialNumber  as _SerialNumber

-- start new associations for full coverage of text relations
  association [1..1] to I_ProductionOrder             as _ProductionOrderText     on  $projection.ProductionOrder = _ProductionOrderText.ProductionOrder
  association [1..1] to I_Plant                       as _ProductionPlantText     on  $projection.ProductionPlant = _ProductionPlantText.Plant
  association [0..1] to I_Plant                       as _PlanningPlantText       on  $projection.PlanningPlant = _PlanningPlantText.Plant
  association [0..*] to I_ProductText                 as _ProductText             on  $projection.Product = _ProductText.Product
  association [0..1] to I_ProductionVersion           as _ProductionVersionText   on  $projection.Product           = _ProductionVersionText.Material
                                                                                  and $projection.ProductionPlant   = _ProductionVersionText.Plant
                                                                                  and $projection.ProductionVersion = _ProductionVersionText.ProductionVersion
  association [0..1] to I_MRPArea                     as _MRPAreaText             on  $projection.MRPArea = _MRPAreaText.MRPArea
  association [0..1] to I_WBSElementBasicData         as _WBSElementText          on  $projection.WBSElementInternalID = _WBSElementText.WBSElementInternalID
  association [0..1] to I_StorageLocation             as _StorageLocationText     on  $projection.ProductionPlant = _StorageLocationText.Plant
                                                                                  and $projection.StorageLocation = _StorageLocationText.StorageLocation
  association [1..1] to I_StatusObject                as _StatusObjectItem        on  $projection.ObjectInternalID = _StatusObjectItem.StatusObject   
  association [0..*] to I_BusinessAreaText            as _BusinessAreaText        on  $projection.BusinessArea = _BusinessAreaText.BusinessArea
  association [0..1] to I_CompanyCode                 as _CompanyCodeText         on  $projection.CompanyCode = _CompanyCodeText.CompanyCode
-- end new associations for full coverage of text relations

{
      // Key
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionOrderStdVH', element: 'ProductionOrder' } } ]
      @ObjectModel.foreignKey.association: '_ProductionOrderHeader'
  key cast(item.OrderID as vdm_manufacturingorder preserving type)           as ProductionOrder,
      -- representative key
  key item.OrderItem                                                         as ProductionOrderItem,

      // Attributes
      @Semantics.booleanIndicator: true
      cast(item.OrderIsReleased as orderisreleased preserving type)          as OrderIsReleased,
      @Semantics.booleanIndicator: true
      item.IsMarkedForDeletion,
      @Semantics.booleanIndicator: true
      cast(item.OrderItemIsNotRelevantForMRP as vdm_dnrel preserving type)   as OrderItemIsNotRelevantForMRP,

      // Assignments
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionOrderTypeStdVH', element: 'ProductionOrderType' } } ]
      @ObjectModel.foreignKey.association: '_ProductionOrderType'
      cast(item.OrderType as vdm_prodnordertype preserving type)             as ProductionOrderType,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' } } ]
      @ObjectModel.foreignKey.association: '_Product'
      @ObjectModel.text.association: '_ProductText'
      cast(item.Material as productnumber preserving type)                   as Product,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_ProductionPlant'
      item.ProductionPlant,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_PlanningPlant'
      item.MRPPlant                                                          as PlanningPlant,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionVersionBasicStdVH', element: 'ProductionVersion' } } ]
      @ObjectModel.foreignKey.association: '_ProductionVersion'
      item.ProductionVersion,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MRPAreaVH', element: 'MRPArea' } } ]
      @ObjectModel.foreignKey.association: '_MRPArea'
      item.MRPArea,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderStdVH', element: 'SalesOrder' } } ]
      @ObjectModel.foreignKey.association: '_SalesOrder'
      item.SalesOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderItemStdVH', element: 'SalesOrderItem' } } ]
      @ObjectModel.foreignKey.association: '_SalesOrderItem'
      item.SalesOrderItem,
      @ObjectModel.foreignKey.association: '_SalesOrderScheduleLine'   
      item.SalesOrderScheduleLine,     
--    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WBSElementBasicDataStdVH', element: 'WBSElementInternalID' } } ]
      @ObjectModel.foreignKey.association: '_WBSElementBasicData'
      item.WBSElementInternalID_2                                             as WBSElementInternalID,
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
--    @ObjectModel.foreignKey.association: '_SerialNumberProfile'
      item.SerialNumberAssgmtProfile                                           as SerialNumberProfile,
      item.NumberOfSerialNumbers,
      item.MfgOrderItemReplnmtElmntType                                        as ReplenishmentElementType,
      cast(item.ProductConfiguration as product_configuration preserving type) as ProductConfiguration,
      @ObjectModel.foreignKey.association: '_StatusObject'
      item.ObjectInternalID,
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
      item.StorageLocation,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BatchStdVH', element: 'Batch' } } ]
      @ObjectModel.foreignKey.association: '_Batch'
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

      // Dates
      cast(item.PlannedEndDate as mfgorderitemplannedenddate preserving type)            as PlannedEndDate,
      cast(item.ScheduledBasicEndDate as mfgorderitemscheduledenddate preserving type)   as ScheduledEndDate,
      item.ActualDeliveryDate,
      item.TotalCommitmentDate,

      // Quantities and UoM
      @ObjectModel.foreignKey.association: '_ProductionUnit'
      item.ProductionUnit,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      cast(item.ItemQuantity as co_psmng preserving type)                                as PlannedTotalQty,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      cast(item.MfgOrderItemPlannedScrapQty as co_psamg preserving type)                 as PlannedScrapQuantity,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      cast(item.ItemQuantity - item.MfgOrderItemPlannedScrapQty as plannedyieldquantity) as PlannedYieldQuantity,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      cast(item.MfgOrderItemGoodsReceiptQty as co_wemng preserving type)                 as GoodsReceiptQty,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      cast(item.MfgOrderItemActualDeviationQty as co_iamng preserving type)              as ActualDeviationQty,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      @Aggregation.default: #SUM
      cast(item.MfgOrderItemOpenYieldQty as openyieldquantity preserving type)           as OpenYieldQuantity,
      -- in base unit
      @ObjectModel.foreignKey.association: '_BaseUnit'
      item.BaseUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Aggregation.default: #SUM
      cast(item.OrderPlannedTotalQty as vdm_pgmng preserving type)                       as PlannedTotalQtyInBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Aggregation.default: #SUM
      cast(item.OrderPlannedScrapQty as vdm_pamng preserving type)                       as PlannedScrapQtyInBaseUnit,

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

      // Planned Order data
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlannedOrderStdVH', element: 'PlannedOrder' } } ]
      @ObjectModel.foreignKey.association: '_PlannedOrder'
      item.PlannedOrder,
      item.PlannedDeliveryDate                                                           as PlannedOrderPlannedDeliveryDte,
      cast(item.PlndOrderPlannedStartDate as vdm_strmp preserving type)                  as PlndOrderPlannedStartDate,
      cast(item.PlannedOrderOpeningDate as vdm_etrmp preserving type)                    as PlannedOrderOpeningDate,

      // Amount and Currency
      @ObjectModel.foreignKey.association: '_Currency'
      head.Currency                                                                      as CompanyCodeCurrency,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM
      item.GoodsReceiptAmountInCoCodeCrcy,

      // Associations
      _ProductionOrderHeader,
      _ProductionOrderType,
      _SerialNumber,
      item._ProductionPlant,
      item._MRPPlant as _PlanningPlant,
      item._MRPArea,
      item._PlannedOrder,
      _Product,
      _ProductPlant,
      _ProductPlanningPlant,
      _ProductStorageLocation,
      _ProductSupplyPlanning,
      _ProductMRPArea,
      _ProductPlantMRPArea,
      item._BaseUnit,
      item._ProductionUnit,
      item._ProductionVersion,
      _StatusObjectItem as _StatusObject,
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
      _WBSElementBasicData,
      _EnterpriseProjectElement,
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
      _ProductionOrderText,
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
  item.OrderCategory = '10';
```
