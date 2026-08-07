---
name: I_PRODPLANTSUPPLYPLANNINGTP_2
description: Prodplantsupplyplanningtp 2
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - transactional-processing
  - plant
  - component:LO-MD-MM-2CL
  - lob:Logistics General
  - bo:Plant
---
# I_PRODPLANTSUPPLYPLANNINGTP_2

**Prodplantsupplyplanningtp 2**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Product` | ✓ | |  |  |
| `Plant` | ✓ | |  |  |
| `FixedLotSizeQuantity` |  | |  |  |
| `MaximumLotSizeQuantity` |  | |  |  |
| `MinimumLotSizeQuantity` |  | |  |  |
| `LotSizeRoundingQuantity` |  | |  |  |
| `LotSizingProcedure` |  | |  |  |
| `MRPType` |  | |  |  |
| `MRPResponsible` |  | |  |  |
| `SafetyStockQuantity` |  | |  |  |
| `MinimumSafetyStockQuantity` |  | |  |  |
| `PlanningTimeFence` |  | |  |  |
| `ConsumptionValueCategory` |  | |  |  |
| `MaximumStockQuantity` |  | |  |  |
| `ReorderThresholdQuantity` |  | |  |  |
| `PlannedDeliveryDurationInDays` |  | |  |  |
| `SafetySupplyDurationInDays` |  | |  |  |
| `PlanningStrategyGroup` |  | |  |  |
| `TotalReplenishmentLeadTime` |  | |  |  |
| `ProcurementType` |  | |  |  |
| `ProcurementSubType` |  | |  |  |
| `AssemblyScrapPercent` |  | |  |  |
| `AvailabilityCheckType` |  | |  |  |
| `GoodsReceiptDuration` |  | |  |  |
| `PlanAndOrderDayDetermination` |  | |  |  |
| `RoundingProfile` |  | |  |  |
| `DfltStorageLocationExtProcmt` |  | |  |  |
| `MRPGroup` |  | |  |  |
| `LotSizeIndependentCosts` |  | |  |  |
| `RqmtQtyRcptTaktTmeInWrkgDays` |  | |  |  |
| `MRPPlanningCalendar` |  | |  |  |
| `RangeOfCvrgPrflCode` |  | |  |  |
| `ProductSafetyTimeMRPRelevance` |  | |  |  |
| `SafetyTimePeriodProfile` |  | |  |  |
| `DependentRqmtMRPRelevance` |  | |  |  |
| `ProductServiceLevelInPercent` |  | |  |  |
| `ProdInhProdnDurationInWorkDays` |  | |  |  |
| `MRPAvailabilityType` |  | |  |  |
| `CrossProjectProduct` |  | |  |  |
| `StorageCostsPercentageCode` |  | |  |  |
| `FollowUpProduct` |  | |  |  |
| `RepetitiveManufacturingIsAllwd` |  | |  |  |
| `DependentRequirementsType` |  | |  |  |
| `ProductIsBulkComponent` |  | |  |  |
| `RepetitiveManufacturingProfile` |  | |  |  |
| `BackwardCnsmpnPeriodInWorkDays` |  | |  |  |
| `FwdConsumptionPeriodInWorkDays` |  | |  |  |
| `ProdRqmtsConsumptionMode` |  | |  |  |
| `ProdFcstRequirementsSplitCode` |  | |  |  |
| `EffectiveOutDate` |  | |  |  |
| `SchedulingFloatProfile` |  | |  |  |
| `ComponentScrapInPercent` |  | |  |  |
| `ProductDiscontinuationCode` |  | |  |  |
| `ProductRequirementsGrouping` |  | |  |  |
| `ProductionInvtryManagedLoc` |  | |  |  |
| `ProductComponentBackflushCode` |  | |  |  |
| `ProposedProductSupplyArea` |  | |  |  |
| `MRPSafetyStockMethod` |  | |  |  |
| `JITProdnConfProfile` |  | |  |  |
| `PlannedOrderActionControl` |  | |  |  |
| `Currency` |  | |  |  |
| `BaseUnit` |  | |  |  |
| `MRPProfile` |  | |  |  |
| `ProdnPlngAndControlCalendar` |  | |  |  |
| `GoodIssueProcessingDays` |  | |  |  |
| `ConsignmentControl` |  | |  |  |
| `ProductUnitGroup` |  | |  |  |
| `ATPCheckHorizonInDays` |  | |  |  |
| `ATPCheckHorizonFactoryCalendar` |  | |  |  |
| `_ProductPlant` | | ✓ | | |
| `_Product` | | ✓ | | |
| `_ABCIndicatorText` | | ✓ | | |
| `_SafetyTimePeriodProfileText` | | ✓ | | |
| `_ProdSafetyTimeMRPRlvnceText` | | ✓ | | |
| `_DepdntRqmtMRPRelevanceText` | | ✓ | | |
| `_ProdDepdntRqmtsTypeText` | | ✓ | | |
| `_ProdRqmtsConsumptionModeText` | | ✓ | | |
| `_ProdRequirementsGroupingText` | | ✓ | | |
| `_ProdComponentBackflushCodeT` | | ✓ | | |
| `_MRPSafetyStockMethodText` | | ✓ | | |
| `_ConsignmentControlText` | | ✓ | | |
| `_LotSizingProcedureText` | | ✓ | | |
| `_MRPTypeText` | | ✓ | | |
| `_ProductionSupplyAreaText` | | ✓ | | |
| `_MRPGroupText` | | ✓ | | |
| `_RangeOfCvrgPrflCodeText` | | ✓ | | |
| `_RepetitiveMfgProfileText` | | ✓ | | |
| `_UnitOfMeasureText` | | ✓ | | |
| `_CurrencyText` | | ✓ | | |
| `_PlanningStrategyGroupText` | | ✓ | | |
| `_ProductMRPAvailabilityTypeT` | | ✓ | | |
| `_ProdProcurementTypeText` | | ✓ | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Product Plant Supply Planning - TP'
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel: {
    usageType.serviceQuality: #B,
    usageType.sizeCategory : #XL,
    usageType.dataClass: #MASTER,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    modelingPattern: #TRANSACTIONAL_INTERFACE
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_ProdPlantSupplyPlanningTP_2
  as projection on R_ProductPlantSupplyPlanningTP as ProductPlantSupplyPlanning
{
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProductStdVH', element : 'Product'} , useAsTemplate: true }]
  key Product,
  key Plant,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      FixedLotSizeQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      MaximumLotSizeQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      MinimumLotSizeQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      LotSizeRoundingQuantity,
      @ObjectModel.text.association: '_LotSizingProcedureText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_MRPLotSizingProcedureVH', element : 'MaterialLotSizingProcedure'} , useAsTemplate: true }]
      LotSizingProcedure,
      @ObjectModel.text.association: '_MRPTypeText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_MRPTypeVH', element : 'MRPType'} , useAsTemplate: true }]
      MRPType,
      MRPResponsible,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      SafetyStockQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      MinimumSafetyStockQuantity,
      PlanningTimeFence,
      @ObjectModel.text.association: '_ABCIndicatorText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_Prodabclassfctn', element : 'MaterialABCClassification'} , useAsTemplate: true }]
      ConsumptionValueCategory,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      MaximumStockQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      ReorderThresholdQuantity,
      PlannedDeliveryDurationInDays,
      SafetySupplyDurationInDays,
      @ObjectModel.text.association: '_PlanningStrategyGroupText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_PlanningStrategyGroupVH', element : 'PlanningStrategyGroup'} , useAsTemplate: true }]
      PlanningStrategyGroup,
      TotalReplenishmentLeadTime,
      @ObjectModel.text.association: '_ProdProcurementTypeText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProdProcurementType', element : 'ProcurementType'} , useAsTemplate: true }]
      ProcurementType,
      ProcurementSubType,
      AssemblyScrapPercent,
      AvailabilityCheckType,
      GoodsReceiptDuration,
      PlanAndOrderDayDetermination,
      RoundingProfile,
      DfltStorageLocationExtProcmt,
      @ObjectModel.text.association:'_MRPGroupText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_MRPGroup', element : 'MRPGroup'} , useAsTemplate: true }]
      MRPGroup,
      @Semantics.amount.currencyCode: 'Currency'
      LotSizeIndependentCosts,
      RqmtQtyRcptTaktTmeInWrkgDays,
      MRPPlanningCalendar,
      @ObjectModel.text.association: '_RangeOfCvrgPrflCodeText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_RangeOfCoverageProfile', element : 'RangeOfCoverageProfile'} , useAsTemplate: true }]
      RangeOfCvrgPrflCode,
      @ObjectModel.text.association: '_ProdSafetyTimeMRPRlvnceText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProdSafetyTimeMRPRelevance', element : 'ProductSafetyTimeMRPRelevance'} , useAsTemplate: true }]
      ProductSafetyTimeMRPRelevance,
      @ObjectModel.text.association: '_SafetyTimePeriodProfileText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_SafetyTimePeriodProfile', element : 'SafetyTimePeriodProfile'} , useAsTemplate: true }]
      SafetyTimePeriodProfile,
      @ObjectModel.text.association: '_DepdntRqmtMRPRelevanceText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_DepdntRqmtMRPRelevance', element : 'DependentRqmtMRPRelevance'} , useAsTemplate: true }]
      DependentRqmtMRPRelevance,
      ProductServiceLevelInPercent,
      ProdInhProdnDurationInWorkDays,
      @ObjectModel.text.association: '_ProductMRPAvailabilityTypeT'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProductMRPAvailabilityTypeVH', element : 'MRPAvailabilityType'} , useAsTemplate: true }]
      MRPAvailabilityType,
      CrossProjectProduct,
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_StorageCostsPercentageCode', element : 'StorageCostsPercentageCode'} , useAsTemplate: true }]
      StorageCostsPercentageCode,
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProductStdVH', element : 'Product'} , useAsTemplate: true }]
      FollowUpProduct,
      @Semantics.booleanIndicator: true
      RepetitiveManufacturingIsAllwd,
      @ObjectModel.text.association: '_ProdDepdntRqmtsTypeText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProdDepdntRqmtsTypeVH', element : 'DependentRequirementsType'} , useAsTemplate: true }]
      DependentRequirementsType,
      @Semantics.booleanIndicator: true
      ProductIsBulkComponent,
      @ObjectModel.text.association: '_RepetitiveMfgProfileText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_RepetitiveMfgProfileVH', element : 'RepetitiveManufacturingProfile'} , useAsTemplate: true }]
      RepetitiveManufacturingProfile,
      BackwardCnsmpnPeriodInWorkDays,
      FwdConsumptionPeriodInWorkDays,
      @ObjectModel.text.association: '_ProdRqmtsConsumptionModeText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProdConsumptionMode', element : 'ProdRqmtsConsumptionMode'} , useAsTemplate: true }]
      ProdRqmtsConsumptionMode,
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProductForecastRqmtsSplitVH', element : 'ProdFcstRequirementsSplitCode'} , useAsTemplate: true }]
      ProdFcstRequirementsSplitCode,
      EffectiveOutDate,
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_SchedulingFloatProfileVH', element : 'SchedulingFloatProfile'} , useAsTemplate: true }]
      SchedulingFloatProfile,
      ComponentScrapInPercent,
      ProductDiscontinuationCode,
      @ObjectModel.text.association: '_ProdRequirementsGroupingText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProdRequirementsGroupingVH', element : 'ProductRequirementsGrouping'} , useAsTemplate: true }]
      ProductRequirementsGrouping,
      ProductionInvtryManagedLoc,
      @ObjectModel.text.association: '_ProdComponentBackflushCodeT'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProdComponentBackflushCodeVH', element : 'ProductComponentBackflushCode'} , useAsTemplate: true }]
      ProductComponentBackflushCode,
      @ObjectModel.text.association: '_ProductionSupplyAreaText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProductionSupplyAreaStdVH', element : 'ProductionSupplyArea'} , useAsTemplate: true }]
      ProposedProductSupplyArea,
      @ObjectModel.text.association: '_MRPSafetyStockMethodText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_MRPSafetyStockMethod', element : 'MRPSafetyStockMethod'} , useAsTemplate: true }]
      MRPSafetyStockMethod,
      JITProdnConfProfile,
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_PlannedOrderActionControlVH', element : 'PlannedOrderActionControl'} , useAsTemplate: true }]
      PlannedOrderActionControl,
      @ObjectModel.text.association: '_CurrencyText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_CurrencyStdVH', element : 'Currency'} , useAsTemplate: true }]
      Currency,
      @ObjectModel.text.association: '_UnitOfMeasureText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UnitOfMeasureStdVH', element : 'UnitOfMeasure'} , useAsTemplate: true }]
      BaseUnit,
      MRPProfile,
      ProdnPlngAndControlCalendar,
      @Feature: 'SW:CMD_API_PRODUCT'  
      GoodIssueProcessingDays, //Retail field     
      @ObjectModel.text.association: '_ConsignmentControlText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ConsignmentControl', element : 'ConsignmentControl'} , useAsTemplate: true }]
      ConsignmentControl, 
      @Feature: 'SW:CMD_API_PRODUCT' 
      ProductUnitGroup, //Retail field  
      ATPCheckHorizonInDays,
      ATPCheckHorizonFactoryCalendar,
      /* Associations */
      _ProductPlant : redirected to parent I_ProductPlantTP_2,
      _Product      : redirected to I_ProductTP_2,
      _ABCIndicatorText,
      _SafetyTimePeriodProfileText,
      _ProdSafetyTimeMRPRlvnceText,
      _DepdntRqmtMRPRelevanceText,
      _ProdDepdntRqmtsTypeText,
      _ProdRqmtsConsumptionModeText,
      _ProdRequirementsGroupingText,
      _ProdComponentBackflushCodeT,
      _MRPSafetyStockMethodText,
      _ConsignmentControlText,
      _LotSizingProcedureText,
      _MRPTypeText,
      _ProductionSupplyAreaText,
      _MRPGroupText,
      _RangeOfCvrgPrflCodeText,
      _RepetitiveMfgProfileText,
      _UnitOfMeasureText,
      _CurrencyText,
      _PlanningStrategyGroupText,
      _ProductMRPAvailabilityTypeT,
      _ProdProcurementTypeText

}
```
