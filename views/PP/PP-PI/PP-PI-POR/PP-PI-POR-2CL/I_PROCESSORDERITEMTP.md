---
name: I_PROCESSORDERITEMTP
description: "Processorderitemtp"
app_component: PP-PI-POR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-PI
  - PP-PI-POR
  - interface-view
  - transactional-processing
  - item-level
  - component:PP-PI-POR-2CL
  - lob:Manufacturing
---
# I_PROCESSORDERITEMTP

**Processorderitemtp**

| Property | Value |
|---|---|
| App Component | `PP-PI-POR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProcessOrder` | ✓ | |  |  |  |  |
| `ProcessOrderItem` | ✓ | |  |  |  |  |
| `ManufacturingOrderCategory` |  | |  |  |  |  |
| `ProcessOrderType` |  | |  |  |  |  |
| `OrderIsReleased` |  | |  |  |  |  |
| `IsMarkedForDeletion` |  | |  |  |  |  |
| `OrderItemIsNotRelevantForMRP` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `ProductionPlant` |  | |  |  |  |  |
| `PlanningPlant` |  | |  |  |  |  |
| `ProductionVersion` |  | |  |  |  |  |
| `MRPArea` |  | |  |  |  |  |
| `SalesOrder` |  | |  |  |  |  |
| `SalesOrderItem` |  | |  |  |  |  |
| `SalesOrderScheduleLine` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `QuotaArrangement` |  | |  |  |  |  |
| `QuotaArrangementItem` |  | |  |  |  |  |
| `SettlementReservation` |  | |  |  |  |  |
| `SettlementReservationItem` |  | |  |  |  |  |
| `CoProductReservation` |  | |  |  |  |  |
| `CoProductReservationItem` |  | |  |  |  |  |
| `MaterialProcurementCategory` |  | |  |  |  |  |
| `MaterialProcurementType` |  | |  |  |  |  |
| `SerialNumberProfile` |  | |  |  |  |  |
| `NumberOfSerialNumbers` |  | |  |  |  |  |
| `ReplenishmentElementType` |  | |  |  |  |  |
| `ProductConfiguration` |  | |  |  |  |  |
| `ObjectInternalID` |  | |  |  |  |  |
| `QuantityDistributionKey` |  | |  |  |  |  |
| `EffectivityParameterVariant` |  | |  |  |  |  |
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
| `PlannedEndDate` |  | |  |  |  |  |
| `ScheduledEndDate` |  | |  |  |  |  |
| `PlannedDeliveryDate` |  | |  |  |  |  |
| `ActualDeliveryDate` |  | |  |  |  |  |
| `TotalCommitmentDate` |  | |  |  |  |  |
| `ProductionUnit` |  | |  |  |  |  |
| `PlannedTotalQty` |  | |  |  |  |  |
| `PlannedScrapQuantity` |  | |  |  |  |  |
| `PlannedYieldQuantity` |  | |  |  |  |  |
| `GoodsReceiptQty` |  | |  |  |  |  |
| `ActualDeviationQty` |  | |  |  |  |  |
| `OpenYieldQuantity` |  | |  |  |  |  |
| `PlannedOrder` |  | |  |  |  |  |
| `PlndOrderPlannedStartDate` |  | |  |  |  |  |
| `PlannedOrderOpeningDate` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `PlndOrderPlannedTotalQty` |  | |  |  |  |  |
| `PlndOrderPlannedScrapQty` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `AccountAssignmentCategory` |  | |  |  |  |  |
| `CompanyCodeCurrency` |  | |  |  |  |  |
| `GoodsReceiptAmountInCoCodeCrcy` |  | |  |  |  |  |
| `BillOfMaterialItemNumber` |  | |  |  |  |  |
| `MaterialComponentText` |  | |  |  |  |  |
| `MatlCompFreeDefinedAttribute` |  | |  |  |  |  |
| `LeadTimeOffset` |  | |  |  |  |  |
| `OperationLeadTimeOffsetUnit` |  | |  |  |  |  |
| `OperationLeadTimeOffset` |  | |  |  |  |  |
| `BillOfMaterialItemCategory` |  | |  |  |  |  |
| `ProcessOrderOperation` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `_Order` | | ✓ | | | | |
| `_CoProductReservationItem` | | ✓ | | | | |
| `_SerialNumber` | | ✓ | | | | |
| `_PostingRule` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AccessControl.privilegedAssociations: [ '_PostingRule' ]

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@ObjectModel.sapObjectNodeType.name: 'ProcessOrderItem'

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@EndUserText.label: 'Process Order Item - TP'

define view entity I_ProcessOrderItemTP 
as projection on R_ProcessOrderItemTP as Item
{ 
      // Key
  key ProcessOrder,
  key ProcessOrderItem,
  
      // Category and Type
      ManufacturingOrderCategory,  
      ProcessOrderType,

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
      ProcessOrderOperation,
      Plant,       
  
      // Associations
      _Order : redirected to parent I_ProcessOrderTP,
      _CoProductReservationItem,
      _SerialNumber : redirected to composition child I_ProcOrderItemSerialNumberTP,
      _PostingRule  : redirected to I_EventBasedOrderPostingRuleTP
      
};
```
