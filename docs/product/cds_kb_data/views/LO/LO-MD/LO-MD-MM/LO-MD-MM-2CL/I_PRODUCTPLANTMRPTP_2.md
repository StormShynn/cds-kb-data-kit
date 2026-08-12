---
name: I_PRODUCTPLANTMRPTP_2
description: "Productplantmrptp 2"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - transactional-processing
  - product
  - plant
  - component:LO-MD-MM-2CL
  - lob:Logistics General
  - bo:Plant
---
# I_PRODUCTPLANTMRPTP_2

**Productplantmrptp 2**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  |  |  |  |
| `MRPArea` | ✓ | |  |  |  |  |
| `Plant` | ✓ | |  |  |  |  |
| `MRPType` |  | |  |  |  |  |
| `MRPResponsible` |  | |  |  |  |  |
| `MRPGroup` |  | |  |  |  |  |
| `ReorderThresholdQuantity` |  | |  |  |  |  |
| `PlanAndOrderDayDetermination` |  | |  |  |  |  |
| `PlanningTimeFence` |  | |  |  |  |  |
| `LotSizingProcedure` |  | |  |  |  |  |
| `RoundingProfile` |  | |  |  |  |  |
| `LotSizeRoundingQuantity` |  | |  |  |  |  |
| `MinimumLotSizeQuantity` |  | |  |  |  |  |
| `MaximumLotSizeQuantity` |  | |  |  |  |  |
| `MaximumStockQuantity` |  | |  |  |  |  |
| `AssemblyScrapPercent` |  | |  |  |  |  |
| `ProcurementSubType` |  | |  |  |  |  |
| `ProductionInvtryManagedLoc` |  | |  |  |  |  |
| `DfltStorageLocationExtProcmt` |  | |  |  |  |  |
| `MRPPlanningCalendar` |  | |  |  |  |  |
| `SafetyStockQuantity` |  | |  |  |  |  |
| `RangeOfCvrgPrflCode` |  | |  |  |  |  |
| `SafetySupplyDurationInDays` |  | |  |  |  |  |
| `FixedLotSizeQuantity` |  | |  |  |  |  |
| `LotSizeIndependentCosts` |  | |  |  |  |  |
| `StorageCostsPercentageCode` |  | |  |  |  |  |
| `ProductServiceLevelInPercent` |  | |  |  |  |  |
| `IsMarkedForDeletion` |  | |  |  |  |  |
| `SafetyTimePeriodProfile` |  | |  |  |  |  |
| `DependentRqmtMRPRelevance` |  | |  |  |  |  |
| `ProductSafetyTimeMRPRelevance` |  | |  |  |  |  |
| `PlannedDeliveryDurationInDays` |  | |  |  |  |  |
| `IsPlannedDeliveryTime` |  | |  |  |  |  |
| `RqmtQtyRcptTaktTmeInWrkgDays` |  | |  |  |  |  |
| `MRPSafetyStockMethod` |  | |  |  |  |  |
| `Currency` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `_ProductPlant` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_MRPGroupText` | | ✓ | | | | |
| `_MRPTypeName` | | ✓ | | | | |
| `_LotSizingProcedureText` | | ✓ | | | | |
| `_RangeOfCvrgPrflCodeText` | | ✓ | | | | |
| `_SafetyTimePeriodProfileText` | | ✓ | | | | |
| `_DepdntRqmtMRPRelevanceText` | | ✓ | | | | |
| `_ProdSafetyTimeMRPRlvnceText` | | ✓ | | | | |
| `_BaseUnitOfMeasureText` | | ✓ | | | | |
| `_CurrencyText` | | ✓ | | | | |
| `_MRPSafetyStockMethodText` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Product Plant MRP - TP'
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel: {
    usageType.serviceQuality: #C,
    usageType.sizeCategory : #L,
    usageType.dataClass: #MASTER,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    modelingPattern: #TRANSACTIONAL_INTERFACE
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_ProductPlantMRPTP_2
  as projection on R_ProductPlantMRPTP as ProductPlantMRP
{
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProductStdVH', element : 'Product'} , useAsTemplate: true }]
  key Product,
  key MRPArea,
  key Plant,
      @ObjectModel.text.association: '_MRPTypeName'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_MRPTypeVH', element : 'MRPType'} , useAsTemplate: true }]
      MRPType,
      MRPResponsible,
      @ObjectModel.text.association: '_MRPGroupText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_MRPGROUP', element : 'MRPGroup'} , useAsTemplate: true }]
      MRPGroup,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      ReorderThresholdQuantity,
      PlanAndOrderDayDetermination,
      PlanningTimeFence,
      @ObjectModel.text.association: '_LotSizingProcedureText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_MRPLotSizingProcedureVH', element : 'MaterialLotSizingProcedure'} , useAsTemplate: true }]
      LotSizingProcedure,
      //@Consumption.valueHelpDefinition:[{ entity : { name: 'I_LoglRoundingProfileVH', element : 'LogisticalRoundingProfile' } , useAsTemplate: true }]
      RoundingProfile,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      LotSizeRoundingQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      MinimumLotSizeQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      MaximumLotSizeQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      MaximumStockQuantity,
      AssemblyScrapPercent,
      ProcurementSubType,
      ProductionInvtryManagedLoc,
      DfltStorageLocationExtProcmt,
      MRPPlanningCalendar,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      SafetyStockQuantity,
      @ObjectModel.text.association: '_RangeOfCvrgPrflCodeText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_RangeOfCoverageProfile', element : 'RangeOfCoverageProfile' } , useAsTemplate: true }]
      RangeOfCvrgPrflCode,
      SafetySupplyDurationInDays,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      FixedLotSizeQuantity,
      @Semantics.amount.currencyCode: 'Currency'
      LotSizeIndependentCosts,
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_StorageCostsPercentageCode', element : 'StorageCostsPercentageCode'} , useAsTemplate: true }]
      StorageCostsPercentageCode,
      ProductServiceLevelInPercent,
      @Semantics.booleanIndicator: true
      IsMarkedForDeletion,
      @ObjectModel.text.association: '_SafetyTimePeriodProfileText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_SafetyTimePeriodProfile', element : 'SafetyTimePeriodProfile' } , useAsTemplate: true }]
      SafetyTimePeriodProfile,
      @ObjectModel.text.association: '_DepdntRqmtMRPRelevanceText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_DepdntRqmtMRPRelevance', element : 'DependentRqmtMRPRelevance' } , useAsTemplate: true }]
      DependentRqmtMRPRelevance,
      @ObjectModel.text.association: '_ProdSafetyTimeMRPRlvnceText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProdSafetyTimeMRPRelevance', element : 'ProductSafetyTimeMRPRelevance' } , useAsTemplate: true }]
      ProductSafetyTimeMRPRelevance,
      PlannedDeliveryDurationInDays,
      @Semantics.booleanIndicator: true
      IsPlannedDeliveryTime,
      RqmtQtyRcptTaktTmeInWrkgDays,
      @ObjectModel.text.association: '_MRPSafetyStockMethodText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_MRPSafetyStockMethod', element : 'MRPSafetyStockMethod' } , useAsTemplate: true }]
      MRPSafetyStockMethod,
      @ObjectModel.text.association: '_CurrencyText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_CurrencyStdVH', element : 'Currency'} , useAsTemplate: true }]
      Currency,
      @ObjectModel.text.association: '_BaseUnitOfMeasureText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UnitOfMeasureStdVH', element : 'UnitOfMeasure'} , useAsTemplate: true }]
      BaseUnit,

      /* Associations */
      _ProductPlant : redirected to parent I_ProductPlantTP_2,
      _Product      : redirected to I_ProductTP_2,
      _MRPGroupText,
      _MRPTypeName,
      _LotSizingProcedureText,
      _RangeOfCvrgPrflCodeText,
      _SafetyTimePeriodProfileText,
      _DepdntRqmtMRPRelevanceText,
      _ProdSafetyTimeMRPRlvnceText,
      _BaseUnitOfMeasureText,
      _CurrencyText,
      _MRPSafetyStockMethodText
      
}
```
