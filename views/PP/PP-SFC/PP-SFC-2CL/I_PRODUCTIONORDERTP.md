---
name: I_PRODUCTIONORDERTP
description: Production OrderTP
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
  - component:PP-SFC-2CL
  - lob:Manufacturing
  - bo:ProductionOrder
---
# I_PRODUCTIONORDERTP

**Production OrderTP**

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
| `ManufacturingOrderCategory` | `ManufacturingOrderCategory` |
| `ProductionOrderType` | `ProductionOrderType` |
| `ProductionOrderText` | `ProductionOrderText` |
| `OrderHasLongText` | `OrderHasLongText` |
| `LongTextLanguageCode` | `LongTextLanguageCode` |
| `OrderImportance` | `OrderImportance` |
| `IsMarkedForDeletion` | `IsMarkedForDeletion` |
| `IsCompletelyDelivered` | `IsCompletelyDelivered` |
| `OrderHasMultipleItems` | `OrderHasMultipleItems` |
| `OrderIsPartOfCollectiveOrder` | `OrderIsPartOfCollectiveOrder` |
| `OrderHierarchyLevelValue` | `OrderHierarchyLevelValue` |
| `OrderIsNotCostedAutomatically` | `OrderIsNotCostedAutomatically` |
| `OrdIsNotSchedldAutomatically` | `OrdIsNotSchedldAutomatically` |
| `ProdnProcgIsFlexible` | `ProdnProcgIsFlexible` |
| `CombnOrdCombinationIdentifier` | `CombnOrdCombinationIdentifier` |
| `CreationDate` | `CreationDate` |
| `CreationTime` | `CreationTime` |
| `CreatedByUser` | `CreatedByUser` |
| `LastChangeDate` | `LastChangeDate` |
| `LastChangeTime` | `LastChangeTime` |
| `LastChangedByUser` | `LastChangedByUser` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `Product` | `Product` |
| `StorageLocation` | `StorageLocation` |
| `Batch` | `Batch` |
| `GoodsRecipientName` | `GoodsRecipientName` |
| `UnloadingPointName` | `UnloadingPointName` |
| `InventoryUsabilityCode` | `InventoryUsabilityCode` |
| `MaterialGoodsReceiptDuration` | `MaterialGoodsReceiptDuration` |
| `QuantityDistributionKey` | `QuantityDistributionKey` |
| `StockSegment` | `StockSegment` |
| `OrderInternalID` | `OrderInternalID` |
| `ReferenceOrder` | `ReferenceOrder` |
| `LeadingOrder` | `LeadingOrder` |
| `SuperiorOrder` | `SuperiorOrder` |
| `Currency` | `Currency` |
| `ProductionPlant` | `ProductionPlant` |
| `PlanningPlant` | `PlanningPlant` |
| `MRPArea` | `MRPArea` |
| `MRPController` | `MRPController` |
| `ProductionSupervisor` | `ProductionSupervisor` |
| `ProductionSchedulingProfile` | `ProductionSchedulingProfile` |
| `ResponsiblePlannerGroup` | `ResponsiblePlannerGroup` |
| `ProductionVersion` | `ProductionVersion` |
| `SalesOrder` | `SalesOrder` |
| `SalesOrderItem` | `SalesOrderItem` |
| `WBSElementInternalID` | `WBSElementInternalID` |
| `Reservation` | `Reservation` |
| `SettlementReservation` | `SettlementReservation` |
| `OrderConfirmationGroup` | `OrderConfirmationGroup` |
| `NumberOfOrderConfirmations` | `NumberOfOrderConfirmations` |
| `PlannedOrder` | `PlannedOrder` |
| `CapacityRequirement` | `CapacityRequirement` |
| `InspectionLot` | `InspectionLot` |
| `ChangeNumber` | `ChangeNumber` |
| `BasicSchedulingType` | `BasicSchedulingType` |
| `ForecastSchedulingType` | `ForecastSchedulingType` |
| `SchedulingIsAllowingForBreaks` | `SchedulingIsAllowingForBreaks` |
| `ObjectInternalID` | `ObjectInternalID` |
| `ProductConfiguration` | `ProductConfiguration` |
| `EffectivityParameterVariant` | `EffectivityParameterVariant` |
| `ConditionApplication` | `ConditionApplication` |
| `CapacityActiveVersion` | `CapacityActiveVersion` |
| `CapacityRqmtHasNotToBeCreated` | `CapacityRqmtHasNotToBeCreated` |
| `OrderSequenceNumber` | `OrderSequenceNumber` |
| `RequestOrderType` | `RequestOrderType` |
| `BillOfOperationsMaterial` | `BillOfOperationsMaterial` |
| `BillOfOperationsType` | `BillOfOperationsType` |
| `BillOfOperationsGroup` | `BillOfOperationsGroup` |
| `BillOfOperationsVariant` | `BillOfOperationsVariant` |
| `BOOInternalVersionCounter` | `BOOInternalVersionCounter` |
| `BillOfOperationsUsage` | `BillOfOperationsUsage` |
| `BillOfOperationsVersion` | `BillOfOperationsVersion` |
| `BOOExplosionDate` | `BOOExplosionDate` |
| `BOOValidityStartDate` | `BOOValidityStartDate` |
| `BillOfMaterialCategory` | `BillOfMaterialCategory` |
| `BillOfMaterial` | `BillOfMaterial` |
| `BillOfMaterialVariant` | `BillOfMaterialVariant` |
| `BillOfMaterialVariantUsage` | `BillOfMaterialVariantUsage` |
| `BillOfMaterialVersion` | `BillOfMaterialVersion` |
| `BOMExplosionDate` | `BOMExplosionDate` |
| `BOMValidityStartDate` | `BOMValidityStartDate` |
| `BusinessArea` | `BusinessArea` |
| `CompanyCode` | `CompanyCode` |
| `ControllingArea` | `ControllingArea` |
| `ProfitCenter` | `ProfitCenter` |
| `CostCenter` | `CostCenter` |
| `ResponsibleCostCenter` | `ResponsibleCostCenter` |
| `CostElement` | `CostElement` |
| `CostingSheet` | `CostingSheet` |
| `GLAccount` | `GLAccount` |
| `ProductCostCollector` | `ProductCostCollector` |
| `ActualCostsCostingVariant` | `ActualCostsCostingVariant` |
| `PlannedCostsCostingVariant` | `PlannedCostsCostingVariant` |
| `ControllingObjectClass` | `ControllingObjectClass` |
| `FunctionalArea` | `FunctionalArea` |
| `OverheadCode` | `OverheadCode` |
| `ResultAnalysisInternalID` | `ResultAnalysisInternalID` |
| `VarianceKey` | `VarianceKey` |
| `EventBasedProcessingKey` | `EventBasedProcessingKey` |
| `EventBasedPostingMethod` | `EventBasedPostingMethod` |
| `OrderSettlementTriggerType` | `OrderSettlementTriggerType` |
| `SchedulingFloatProfile` | `SchedulingFloatProfile` |
| `FloatBeforeProductionInWrkDays` | `FloatBeforeProductionInWrkDays` |
| `FloatAfterProductionInWorkDays` | `FloatAfterProductionInWorkDays` |
| `ReleasePeriodInWorkDays` | `ReleasePeriodInWorkDays` |
| `OrderPlannedStartDate` | `OrderPlannedStartDate` |
| `OrderPlannedStartTime` | `OrderPlannedStartTime` |
| `OrderPlannedEndDate` | `OrderPlannedEndDate` |
| `OrderPlannedEndTime` | `OrderPlannedEndTime` |
| `PlannedReleaseDate` | `PlannedReleaseDate` |
| `OrderScheduledStartDate` | `OrderScheduledStartDate` |
| `OrderScheduledStartTime` | `OrderScheduledStartTime` |
| `OrderScheduledEndDate` | `OrderScheduledEndDate` |
| `OrderScheduledEndTime` | `OrderScheduledEndTime` |
| `OrderScheduledReleaseDate` | `OrderScheduledReleaseDate` |
| `OrderActualStartDate` | `OrderActualStartDate` |
| `OrderActualStartTime` | `OrderActualStartTime` |
| `OrderActualEndDate` | `OrderActualEndDate` |
| `OrderActualReleaseDate` | `OrderActualReleaseDate` |
| `OrderConfirmedEndDate` | `OrderConfirmedEndDate` |
| `OrderConfirmedEndTime` | `OrderConfirmedEndTime` |
| `TotalCommitmentDate` | `TotalCommitmentDate` |
| `TechnicalCompletionDate` | `TechnicalCompletionDate` |
| `ProductionUnit` | `ProductionUnit` |
| `OrderPlannedTotalQty` | `OrderPlannedTotalQty` |
| `OrderPlannedScrapQty` | `OrderPlannedScrapQty` |
| `OrderConfirmedYieldQty` | `OrderConfirmedYieldQty` |
| `OrderConfirmedScrapQty` | `OrderConfirmedScrapQty` |
| `OrderConfirmedReworkQty` | `OrderConfirmedReworkQty` |
| `ExpectedDeviationQuantity` | `ExpectedDeviationQuantity` |
| `ActualDeliveredQuantity` | `ActualDeliveredQuantity` |
| `_Item` | *Association* |
| `_Sequence` | *Association* |
| `_Component` | *Association* |
| `_Operation` | *Association* |
| `_SerialNumber` | *Association* |
| `_PostingRule` | *Association* |
| `_OrderCapacity` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AccessControl.privilegedAssociations: [ '_PostingRule' ]

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@ObjectModel.sapObjectNodeType.name: 'ProductionOrder'

//@AbapCatalog.extensibility: {
//  extensible: true,
//  dataSources: ['ProductionOrder'],
//  elementSuffix: 'ORD',
//  quota: {
//    maximumFields: 204, // calculated with formula for FINS_ORDER - 2* <Customer Percentage from SCFD_REGISTRY> * <max number of fields in SCFD_REGISTRY>
//    maximumBytes: 2040  // calculated with formula for FINS_ORDER - 2* <Customer Percentage from SCFD_REGISTRY> * <number of chars as defined in SCFD_REGISTRY>
//  }
//}

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@EndUserText.label: 'Production Order Header - TP'

define root view entity I_ProductionOrderTP
  provider contract transactional_interface
  as projection on R_ProductionOrderTP as ProductionOrder
{

  key ProductionOrder,

      // Category and Type
      @Consumption.hidden: true
      ManufacturingOrderCategory, // for DCLS
      ProductionOrderType,

      // Text
      @Semantics.text: true
      ProductionOrderText,
      OrderHasLongText,
      LongTextLanguageCode,

      // Attributes
      OrderImportance,
      IsMarkedForDeletion,
      IsCompletelyDelivered,
      @Semantics.booleanIndicator
      OrderHasMultipleItems,
      @Semantics.booleanIndicator
      OrderIsPartOfCollectiveOrder,
      OrderHierarchyLevelValue,
      @Semantics.booleanIndicator
      OrderIsNotCostedAutomatically,
      @Semantics.booleanIndicator
      OrdIsNotSchedldAutomatically,
      ProdnProcgIsFlexible,
      CombnOrdCombinationIdentifier,

      // Admin data
      @Semantics.systemDate.createdAt: true
      CreationDate,
      @Semantics.systemTime.createdAt: true
      CreationTime,
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,
      @Semantics.systemTime.lastChangedAt: true
      LastChangeTime,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser,
      // ETag
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,

      // Header Material data
      Product,
      StorageLocation,
      Batch,
      @Semantics.text: true
      GoodsRecipientName,
      @Semantics.text: true
      UnloadingPointName,
      InventoryUsabilityCode,
      MaterialGoodsReceiptDuration,
      QuantityDistributionKey,
      StockSegment,

      // Assignments
      OrderInternalID,
      ReferenceOrder,
      LeadingOrder,
      SuperiorOrder,
      Currency,
      ProductionPlant,
      PlanningPlant,
      MRPArea,
      MRPController,
      ProductionSupervisor,
      ProductionSchedulingProfile,
      ResponsiblePlannerGroup,
      ProductionVersion,
      SalesOrder,
      SalesOrderItem,
      WBSElementInternalID,
      Reservation,
      SettlementReservation,
      OrderConfirmationGroup,
      NumberOfOrderConfirmations,
      PlannedOrder,
      CapacityRequirement,
      InspectionLot,
      ChangeNumber,
      BasicSchedulingType,
      ForecastSchedulingType,
      SchedulingIsAllowingForBreaks,
      ObjectInternalID,
      ProductConfiguration,
      EffectivityParameterVariant,
      ConditionApplication,
      CapacityActiveVersion,
      CapacityRqmtHasNotToBeCreated,
      OrderSequenceNumber,
      RequestOrderType,

      // Assignments BOO
      BillOfOperationsMaterial,
      BillOfOperationsType,
      BillOfOperationsGroup,
      BillOfOperationsVariant,
      BOOInternalVersionCounter,
      BillOfOperationsUsage,
      BillOfOperationsVersion,
      BOOExplosionDate,
      BOOValidityStartDate,

      // Assignments BOM
      BillOfMaterialCategory,
      BillOfMaterial,
      BillOfMaterialVariant,
      BillOfMaterialVariantUsage,
      BillOfMaterialVersion,
      BOMExplosionDate,
      BOMValidityStartDate,

      // Assignments FI/CO
      BusinessArea,
      CompanyCode,
      ControllingArea,
      ProfitCenter,
      CostCenter,
      ResponsibleCostCenter,
      CostElement,
      CostingSheet,
      GLAccount,
      ProductCostCollector,
      ActualCostsCostingVariant,
      PlannedCostsCostingVariant,
      ControllingObjectClass,
      FunctionalArea,
      OverheadCode,
      ResultAnalysisInternalID,
      VarianceKey,      
      EventBasedProcessingKey,
      EventBasedPostingMethod,
      OrderSettlementTriggerType,

      // Scheduling
      SchedulingFloatProfile,
      FloatBeforeProductionInWrkDays,
      FloatAfterProductionInWorkDays,
      ReleasePeriodInWorkDays,

      // Dates and Times
      OrderPlannedStartDate,
      OrderPlannedStartTime,
      OrderPlannedEndDate,
      OrderPlannedEndTime,
      PlannedReleaseDate,
      OrderScheduledStartDate,
      OrderScheduledStartTime,
      OrderScheduledEndDate,
      OrderScheduledEndTime,
      OrderScheduledReleaseDate,
      OrderActualStartDate,
      OrderActualStartTime,
      OrderActualEndDate,
      OrderActualReleaseDate,
      OrderConfirmedEndDate,
      OrderConfirmedEndTime,
      TotalCommitmentDate,
      TechnicalCompletionDate,

      // Quantities and UoM
      ProductionUnit,

      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      OrderPlannedTotalQty,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      OrderPlannedScrapQty,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      OrderConfirmedYieldQty,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      OrderConfirmedScrapQty,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      OrderConfirmedReworkQty,

      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      ExpectedDeviationQuantity,
      @Semantics.quantity.unitOfMeasure: 'ProductionUnit'
      ActualDeliveredQuantity,

      // Compositions
      _Item      : redirected to composition child I_ProductionOrderItemTP,
      _Sequence  : redirected to composition child I_ProductionOrderSequenceTP,
      _Component : redirected to composition child I_ProductionOrderOpComponentTP,

      // Associations
      _Operation : redirected to I_ProductionOrderOperationTP,
      _SerialNumber : redirected to I_ProdnOrderItemSerialNumberTP,
      _PostingRule : redirected to I_EventBasedOrderPostingRuleTP,
      _OrderCapacity : redirected to I_ProdnOrdOperationCapacityTP

};
```
