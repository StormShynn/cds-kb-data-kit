---
name: I_PRODUCTIONORDERITEMTP
description: Production OrderITEMTP
app_component: PP-SFC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-SFC
  - interface-view
  - transactional-processing
  - product
  - production-order
  - item-level
  - component:PP-SFC-2CL
  - lob:Manufacturing
  - bo:ProductionOrder
---
# I_PRODUCTIONORDERITEMTP

**Production OrderITEMTP**

| Property | Value |
|---|---|
| App Component | `PP-SFC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ProductionOrder` | `ProductionOrder` |
| key `ProductionOrderItem` | `ProductionOrderItem` |
| `ManufacturingOrderCategory` | `ManufacturingOrderCategory` |
| `ProductionOrderType` | `ProductionOrderType` |
| `OrderIsReleased` | `OrderIsReleased` |
| `IsMarkedForDeletion` | `IsMarkedForDeletion` |
| `OrderItemIsNotRelevantForMRP` | `OrderItemIsNotRelevantForMRP` |
| `Product` | `Product` |
| `ProductionPlant` | `ProductionPlant` |
| `PlanningPlant` | `PlanningPlant` |
| `ProductionVersion` | `ProductionVersion` |
| `MRPArea` | `MRPArea` |
| `SalesOrder` | `SalesOrder` |
| `SalesOrderItem` | `SalesOrderItem` |
| `SalesOrderScheduleLine` | `SalesOrderScheduleLine` |
| `WBSElementInternalID` | `WBSElementInternalID` |
| `QuotaArrangement` | `QuotaArrangement` |
| `QuotaArrangementItem` | `QuotaArrangementItem` |
| `SettlementReservation` | `SettlementReservation` |
| `SettlementReservationItem` | `SettlementReservationItem` |
| `CoProductReservation` | `CoProductReservation` |
| `CoProductReservationItem` | `CoProductReservationItem` |
| `MaterialProcurementCategory` | `MaterialProcurementCategory` |
| `MaterialProcurementType` | `MaterialProcurementType` |
| `SerialNumberProfile` | `SerialNumberProfile` |
| `NumberOfSerialNumbers` | `NumberOfSerialNumbers` |
| `ReplenishmentElementType` | `ReplenishmentElementType` |
| `ProductConfiguration` | `ProductConfiguration` |
| `ObjectInternalID` | `ObjectInternalID` |
| `QuantityDistributionKey` | `QuantityDistributionKey` |
| `EffectivityParameterVariant` | `EffectivityParameterVariant` |
| `GoodsReceiptIsExpected` | `GoodsReceiptIsExpected` |
| `GoodsReceiptIsNonValuated` | `GoodsReceiptIsNonValuated` |
| `IsCompletelyDelivered` | `IsCompletelyDelivered` |
| `MaterialGoodsReceiptDuration` | `MaterialGoodsReceiptDuration` |
| `UnderdelivTolrtdLmtRatioInPct` | `UnderdelivTolrtdLmtRatioInPct` |
| `OverdelivTolrtdLmtRatioInPct` | `OverdelivTolrtdLmtRatioInPct` |
| `UnlimitedOverdeliveryIsAllowed` | `UnlimitedOverdeliveryIsAllowed` |
| `StorageLocation` | `StorageLocation` |
| `Batch` | `Batch` |
| `InventoryValuationType` | `InventoryValuationType` |
| `InventoryValuationCategory` | `InventoryValuationCategory` |
| `InventoryUsabilityCode` | `InventoryUsabilityCode` |
| `InventorySpecialStockType` | `InventorySpecialStockType` |
| `InventorySpecialStockValnType` | `InventorySpecialStockValnType` |
| `ConsumptionPosting` | `ConsumptionPosting` |
| `GoodsRecipientName` | `GoodsRecipientName` |
| `UnloadingPointName` | `UnloadingPointName` |
| `StockSegment` | `StockSegment` |
| `PlannedEndDate` | `PlannedEndDate` |
| `ScheduledEndDate` | `ScheduledEndDate` |
| `PlannedDeliveryDate` | `PlannedDeliveryDate` |
| `ActualDeliveryDate` | `ActualDeliveryDate` |
| `TotalCommitmentDate` | `TotalCommitmentDate` |
| `ProductionUnit` | `ProductionUnit` |
| `PlannedTotalQty` | `PlannedTotalQty` |
| `PlannedScrapQuantity` | `PlannedScrapQuantity` |
| `PlannedYieldQuantity` | `PlannedYieldQuantity` |
| `GoodsReceiptQty` | `GoodsReceiptQty` |
| `ActualDeviationQty` | `ActualDeviationQty` |
| `OpenYieldQuantity` | `OpenYieldQuantity` |
| `PlannedOrder` | `PlannedOrder` |
| `PlndOrderPlannedStartDate` | `PlndOrderPlannedStartDate` |
| `PlannedOrderOpeningDate` | `PlannedOrderOpeningDate` |
| `BaseUnit` | `BaseUnit` |
| `PlndOrderPlannedTotalQty` | `PlndOrderPlannedTotalQty` |
| `PlndOrderPlannedScrapQty` | `PlndOrderPlannedScrapQty` |
| `BusinessArea` | `BusinessArea` |
| `AccountAssignmentCategory` | `AccountAssignmentCategory` |
| `CompanyCodeCurrency` | `CompanyCodeCurrency` |
| `GoodsReceiptAmountInCoCodeCrcy` | `GoodsReceiptAmountInCoCodeCrcy` |
| `BillOfMaterialItemNumber` | `BillOfMaterialItemNumber` |
| `MaterialComponentText` | `MaterialComponentText` |
| `MatlCompFreeDefinedAttribute` | `MatlCompFreeDefinedAttribute` |
| `LeadTimeOffset` | `LeadTimeOffset` |
| `OperationLeadTimeOffsetUnit` | `OperationLeadTimeOffsetUnit` |
| `OperationLeadTimeOffset` | `OperationLeadTimeOffset` |
| `BillOfMaterialItemCategory` | `BillOfMaterialItemCategory` |
| `ProductionOrderSequence` | `ProductionOrderSequence` |
| `ProductionOrderOperation` | `ProductionOrderOperation` |
| `Plant` | `Plant` |
| `CombinedOrderOriginalOrder` | `CombinedOrderOriginalOrder` |
| `CombinedOrderItemConfQuantity` | `CombinedOrderItemConfQuantity` |
| `_ProductionOrder` | *Association* |
| `_CoProductReservationItem` | *Association* |
| `_SerialNumber` | *Association* |
| `_PostingRule` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AccessControl.privilegedAssociations: [ '_PostingRule' ]
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@ObjectModel.sapObjectNodeType.name: 'ProductionOrderItem'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@EndUserText.label: 'Production Order Item - TP'

define view entity I_ProductionOrderItemTP 
as projection on R_ProductionOrderItemTP as Item
{ 
      // Key
  key ProductionOrder,
  key ProductionOrderItem,
  
      // Category and Type
      ManufacturingOrderCategory,  
      ProductionOrderType,

      // Attributes
      OrderIsReleased,
      IsMarkedForDeletion,
      OrderItemIsNotRelevantForMRP,
      
      // Assignments      
      Product,
      ProductionPlant,            
      PlanningPlant,     
      ProductionVersion,         
      MRPArea,           
      SalesOrder,            
      SalesOrderItem,         
      SalesOrderScheduleLine,
      WBSElementInternalID,
      QuotaArrangement,
      QuotaArrangementItem,      
      SettlementReservation,      
      SettlementReservationItem,      
      CoProductReservation,      
      CoProductReservationItem,      
      MaterialProcurementCategory,      
      MaterialProcurementType,
      SerialNumberProfile,
      NumberOfSerialNumbers,
      ReplenishmentElementType,
      ProductConfiguration,
      ObjectInternalID,
      QuantityDistributionKey,
      EffectivityParameterVariant,        

      // Goods Receipt data
      GoodsReceiptIsExpected,
      GoodsReceiptIsNonValuated,      
      IsCompletelyDelivered,
      MaterialGoodsReceiptDuration,
      UnderdelivTolrtdLmtRatioInPct,
      OverdelivTolrtdLmtRatioInPct,
      UnlimitedOverdeliveryIsAllowed,      
      StorageLocation,
      Batch,
      InventoryValuationType,
      InventoryValuationCategory,
      InventoryUsabilityCode,
      InventorySpecialStockType,
      InventorySpecialStockValnType,
      ConsumptionPosting,
      @Semantics.text: true
      GoodsRecipientName,
      @Semantics.text: true
      UnloadingPointName,
      StockSegment,  
  
      // Order Item Dates
      PlannedEndDate,
      ScheduledEndDate,
      PlannedDeliveryDate,
      ActualDeliveryDate,
      TotalCommitmentDate,
      
      // Item Quantities and UoM      
      ProductionUnit,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'      
      PlannedTotalQty,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      PlannedScrapQuantity,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      PlannedYieldQuantity,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      GoodsReceiptQty,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      ActualDeviationQty,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      OpenYieldQuantity,
      
      // Planned Order data      
      PlannedOrder,
      PlndOrderPlannedStartDate,
      PlannedOrderOpeningDate,      
      BaseUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'    
      PlndOrderPlannedTotalQty,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'            
      PlndOrderPlannedScrapQty,             
  
      // Assignments FI/CO         
      BusinessArea,      
      AccountAssignmentCategory,

      // Amount and Currency      
      CompanyCodeCurrency, 
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      GoodsReceiptAmountInCoCodeCrcy,

      // Co-product Reservation Item
      BillOfMaterialItemNumber,
      MaterialComponentText,     
      MatlCompFreeDefinedAttribute, 
      LeadTimeOffset,            
      OperationLeadTimeOffsetUnit,           
      OperationLeadTimeOffset,            
      BillOfMaterialItemCategory,
      ProductionOrderSequence,
      ProductionOrderOperation,
      Plant,
      
      // Mill fields
      CombinedOrderOriginalOrder,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      CombinedOrderItemConfQuantity,      
  
      // Associations
      _ProductionOrder : redirected to parent I_ProductionOrderTP,
      _CoProductReservationItem,
      _SerialNumber : redirected to composition child I_ProdnOrderItemSerialNumberTP,
      _PostingRule : redirected to I_EventBasedOrderPostingRuleTP
};
```
