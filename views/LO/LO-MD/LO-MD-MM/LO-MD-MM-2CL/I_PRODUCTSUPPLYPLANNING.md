---
name: I_PRODUCTSUPPLYPLANNING
description: Productsupplyplanning
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
  - product
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTSUPPLYPLANNING

**Productsupplyplanning**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Product` | `SupplyPlanning.Product` |
| key `Plant` | `SupplyPlanning.Plant` |
| `FixedLotSizeQuantity` | `SupplyPlanning.FixedLotSizeQuantity` |
| `MaximumLotSizeQuantity` | `SupplyPlanning.MaximumLotSizeQuantity` |
| `MinimumLotSizeQuantity` | `SupplyPlanning.MinimumLotSizeQuantity` |
| `LotSizeRoundingQuantity` | `SupplyPlanning.LotSizeRoundingQuantity` |
| `LotSizingProcedure` | `SupplyPlanning.LotSizingProcedure` |
| `MRPType` | `SupplyPlanning.MRPType` |
| `MRPResponsible` | `SupplyPlanning.MRPResponsible` |
| `SafetyStockQuantity` | `SupplyPlanning.SafetyStockQuantity` |
| `MinimumSafetyStockQuantity` | `SupplyPlanning.MinimumSafetyStockQuantity` |
| `PlanningTimeFence` | `SupplyPlanning.PlanningTimeFence` |
| `ABCIndicator` | `SupplyPlanning.ABCIndicator` |
| `MaximumStockQuantity` | `SupplyPlanning.MaximumStockQuantity` |
| `ReorderThresholdQuantity` | `SupplyPlanning.ReorderThresholdQuantity` |
| `PlannedDeliveryDurationInDays` | `SupplyPlanning.PlannedDeliveryDurationInDays` |
| `SafetyDuration` | `SupplyPlanning.SafetyDuration` |
| `PlanningStrategyGroup` | `SupplyPlanning.PlanningStrategyGroup` |
| `TotalReplenishmentLeadTime` | `SupplyPlanning.TotalReplenishmentLeadTime` |
| `ATPCheckHorizonInDays` | `SupplyPlanning.ATPCheckHorizonInDays` |
| `ATPCheckHorizonFactoryCalendar` | `SupplyPlanning.ATPCheckHorizonFactoryCalendar` |
| `ProcurementType` | `SupplyPlanning.ProcurementType` |
| `ProcurementSubType` | `SupplyPlanning.ProcurementSubType` |
| `AssemblyScrapPercent` | `SupplyPlanning.AssemblyScrapPercent` |
| `AvailabilityCheckType` | `SupplyPlanning.AvailabilityCheckType` |
| `GoodsReceiptDuration` | `SupplyPlanning.GoodsReceiptDuration` |
| `PlanAndOrderDayDetermination` | `SupplyPlanning.PlanAndOrderDayDetermination` |
| `RoundingProfile` | `SupplyPlanning.RoundingProfile` |
| `DfltStorageLocationExtProcmt` | `SupplyPlanning.DfltStorageLocationExtProcmt` |
| `GoodIssueProcessingDays` | `SupplyPlanning.GoodIssueProcessingDays` |
| `ConsignmentControl` | `SupplyPlanning.ConsignmentControl` |
| `IsActiveEntity` | `cast( 'X' as sdraft_is_active preserving type )` |
| `MRPGroup` | `SupplyPlanning.MRPGroup` |
| `LotSizeIndependentCosts` | `SupplyPlanning.LotSizeIndependentCosts` |
| `IsStorageCosts` | `SupplyPlanning.StorageCostsPercentageCode` |
| `RqmtQtyRcptTaktTmeInWrkgDays` | `SupplyPlanning.RqmtQtyRcptTaktTmeInWrkgDays` |
| `MRPPlanningCalendar` | `SupplyPlanning.MRPPlanningCalendar` |
| `RangeOfCvrgPrflCode` | `SupplyPlanning.RangeOfCvrgPrflCode` |
| `IsSafetyTime` | `SupplyPlanning.IsSafetyTime` |
| `PerdPrflForSftyTme` | `SupplyPlanning.PerdPrflForSftyTme` |
| `IsMRPDependentRqmt` | `SupplyPlanning.IsMRPDependentRqmt` |
| `SrvcLvl` | `SupplyPlanning.SrvcLvl` |
| `InHouseProductionTime` | `SupplyPlanning.InHouseProductionTime` |
| `MRPAvailabilityType` | `SupplyPlanning.MRPAvailabilityType` |
| `ProductIsForCrossProject` | `SupplyPlanning.ProductIsForCrossProject` |
| `StorageCostsPercentageCode` | `SupplyPlanning.StorageCostsPercentageCode` |
| `ProdnPlngAndControlCalendar` | `SupplyPlanning.MRPPlanningCalendar` |
| `FollowUpProduct` | `SupplyPlanning.FollowUpProduct` |
| `RepetitiveManufacturingIsAllwd` | `SupplyPlanning.RepetitiveManufacturingIsAllwd` |
| `DependentRequirementsType` | `SupplyPlanning.DependentRequirementsType` |
| `IsBulkMaterialComponent` | `SupplyPlanning.IsBulkMaterialComponent` |
| `RepetitiveManufacturingProfile` | `SupplyPlanning.RepetitiveManufacturingProfile` |
| `BackwardCnsmpnPeriodInWorkDays` | `SupplyPlanning.BackwardCnsmpnPeriodInWorkDays` |
| `FwdConsumptionPeriodInWorkDays` | `SupplyPlanning.FwdConsumptionPeriodInWorkDays` |
| `ProdRqmtsConsumptionMode` | `SupplyPlanning.ProdRqmtsConsumptionMode` |
| `ForecastRequirementsAreSplit` | `SupplyPlanning.ForecastRequirementsAreSplit` |
| `EffectiveOutDate` | `SupplyPlanning.EffectiveOutDate` |
| `MRPProfile` | `SupplyPlanning.MRPProfile` |
| `SchedulingMarginKey` | `SupplyPlanning.SchedulingMarginKey` |
| `ComponentScrapInPercent` | `SupplyPlanning.ComponentScrapInPercent` |
| `ProductIsToBeDiscontinued` | `SupplyPlanning.ProductIsToBeDiscontinued` |
| `ProdRqmtsAreConsolidated` | `SupplyPlanning.ProdRqmtsAreConsolidated` |
| `ProductionInvtryManagedLoc` | `SupplyPlanning.ProductionInvtryManagedLoc` |
| `MatlCompIsMarkedForBackflush` | `SupplyPlanning.MatlCompIsMarkedForBackflush` |
| `ProposedProductSupplyArea` | `SupplyPlanning.ProposedProductSupplyArea` |
| `PlannedOrderActionControl` | `SupplyPlanning.PlannedOrderActionControl` |
| `ProductUnitGroup` | `SupplyPlanning.ProductUnitGroup` |
| `MRPSafetyStockMethod` | `SupplyPlanning.MRPSafetyStockMethod` |
| `JITProdnConfProfile` | `SupplyPlanning.JITProdnConfProfile` |
| `Currency` | `t001.waers` |
| `CompanyCode` | `t001k.bukrs` |
| `ValuationArea` | `t001k.bwkey` |
| `BaseUnit` | `_Product.BaseUnit` |
| `_Product` | *Association* |
| `_RangeOfCvrgPrflCode` | *Association* |
| `_RangeOfCvrgPrflCodeText` | *Association* |
| `_IsStorageCosts` | *Association* |
| `_StorageCostsPercentage` | *Association* |
| `_SafetyTimePeriodProfile` | *Association* |
| `_SafetyTimePeriodProfileText` | *Association* |
| `_AvailabilityCheckType` | *Association* |
| `_AvailabilityCheckTypeText` | *Association* |
| `_AvailabilityCheckType_2` | *Association* |
| `_AvailabilityCheckTypeText_2` | *Association* |
| `_ConsignmentControl` | *Association* |
| `_ConsignmentControlText` | *Association* |
| `_MRPPlanningCalendar` | *Association* |
| `_MRPPlanningCalendarText` | *Association* |
| `_MRPGroup` | *Association* |
| `_MRPGroupText` | *Association* |
| `_LotSizingProcedure` | *Association* |
| `_LotSizingProcedureText` | *Association* |
| `_MRPTypeText` | *Association* |
| `_ABCIndicator` | *Association* |
| `_ABCIndicatorText` | *Association* |
| `_DfltStorageLocationExtProcmt` | *Association* |
| `_ProdRqmtsConsumptionMode` | *Association* |
| `_ProdRqmtsConsumptionModeText` | *Association* |
| `_LogisticalRoundingProfile` | *Association* |
| `_LogisticalRoundingProfileT` | *Association* |
| `_LoglRndgUoMGroup` | *Association* |
| `_LoglRndngUoMGroup` | *Association* |
| `_ProdProcurementType` | *Association* |
| `_ProdProcurementTypeText` | *Association* |
| `_ProductProcmtProfile` | *Association* |
| `_ProductProcmtProfileText` | *Association* |
| `_Plant` | *Association* |
| `_PlannedOrderActionControl` | *Association* |
| `_ProdBackflushType` | *Association* |
| `_ProdBackflushTypeText` | *Association* |
| `_RepetitiveMfgProfile` | *Association* |
| `_RepetitiveMfgProfileText` | *Association* |
| `_MRPSafetyStockMethod` | *Association* |
| `_MRPSafetyStockMethodText` | *Association* |
| `_ProdSafetyTimeMRPRlvnceText` | *Association* |
| `_DepdntRqmtMRPRelevanceText` | *Association* |
| `_ProdDepdntRqmtsTypeText` | *Association* |
| `_ProdRequirementsGroupingText` | *Association* |
| `_ProdComponentBackflushCodeT` | *Association* |
| `_ProductionSupplyAreaText` | *Association* |
| `_PlanningStrategyGroupText` | *Association* |
| `_UnitOfMeasureText` | *Association* |
| `_CurrencyText` | *Association* |
| `_ProductMRPAvailabilityTypeT` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [1..1] |
| `_ProdSupplyPlanExt` | `E_Productplant` | [0..1] |
| `_RangeOfCvrgPrflCode` | `I_RangeOfCoverageProfile` | [0..1] |
| `_RangeOfCvrgPrflCodeText` | `I_RangeOfCoverageProfileText` | [0..*] |
| `_IsStorageCosts` | `I_StorageCostsPercentageCode` | [0..1] |
| `_StorageCostsPercentage` | `I_StorageCostsPercentageCode` | [0..1] |
| `_SafetyTimePeriodProfile` | `I_SafetyTimePeriodProfile` | [0..1] |
| `_SafetyTimePeriodProfileText` | `I_SafetyTimePeriodProfileText` | [0..*] |
| `_AvailabilityCheckType` | `I_ProdAvailabilityCheckGroup` | [0..1] |
| `_AvailabilityCheckTypeText` | `I_ProdAvailabilityCheckGroupT` | [0..*] |
| `_AvailabilityCheckType_2` | `I_ATPCheckingGroup` | [0..1] |
| `_AvailabilityCheckTypeText_2` | `I_ATPCheckingGroupText` | [0..*] |
| `_ConsignmentControl` | `I_ConsignmentControl` | [0..1] |
| `_ConsignmentControlText` | `I_ConsignmentControlText` | [0..*] |
| `_MRPPlanningCalendar` | `I_MRPPlanningPeriod` | [0..1] |
| `_MRPPlanningCalendarText` | `I_MRPPlanningPeriodText` | [0..*] |
| `_MRPGroup` | `I_MRPGroup` | [0..1] |
| `_MRPGroupText` | `I_MRPGroupText` | [0..*] |
| `_LotSizingProcedure` | `I_MRPLotSizingProcedure` | [0..1] |
| `_LotSizingProcedureText` | `I_MRPLotSizingProcedureText` | [0..*] |
| `_MRPTypeText` | `I_MRPTypeText` | [0..*] |
| `_ABCIndicator` | `I_Prodabclassfctn` | [0..1] |
| `_ABCIndicatorText` | `I_Prodabclassfctntxt` | [0..*] |
| `_DfltStorageLocationExtProcmt` | `I_StorageLocation` | [0..1] |
| `_ProdRqmtsConsumptionMode` | `I_ProdConsumptionMode` | [0..1] |
| `_ProdRqmtsConsumptionModeText` | `I_ProdConsumptionModeText` | [0..*] |
| `_LogisticalRoundingProfile` | `I_LogisticalRoundingProfile` | [0..1] |
| `_LogisticalRoundingProfileT` | `I_LogisticalRoundingProfileT` | [0..*] |
| `_LoglRndgUoMGroup` | `I_LogisticalRoundingUoMGroup` | [0..1] |
| `_LoglRndngUoMGroup` | `I_LogisticalRoundingUoMGroup` | [0..1] |
| `_ProdProcurementType` | `I_ProdProcurementType` | [0..1] |
| `_ProdProcurementTypeText` | `I_ProdProcurementTypeText` | [0..*] |
| `_ProductProcmtProfile` | `I_ProductProcmtProfile` | [0..1] |
| `_ProductProcmtProfileText` | `I_ProductProcmtProfileText` | [0..*] |
| `_Plant` | `I_Plant` | [1..1] |
| `_PlannedOrderActionControl` | `I_PlannedOrderActionControl` | [0..1] |
| `_ProdBackflushType` | `I_ProdBackflushType` | [0..1] |
| `_ProdBackflushTypeText` | `I_ProdBackflushTypeText` | [0..*] |
| `_RepetitiveMfgProfile` | `I_RepetitiveMfgProfile` | [0..1] |
| `_RepetitiveMfgProfileText` | `I_RepetitiveMfgProfileText` | [0..*] |
| `_MRPSafetyStockMethod` | `I_MRPSafetyStockMethod` | [0..1] |
| `_MRPSafetyStockMethodText` | `I_MRPSafetyStockMethodText` | [0..*] |
| `_ProdSafetyTimeMRPRlvnceText` | `I_ProdSafetyTimeMRPRlvnceText` | [0..*] |
| `_DepdntRqmtMRPRelevanceText` | `I_DepdntRqmtMRPRelevanceText` | [0..*] |
| `_ProdDepdntRqmtsTypeText` | `I_ProdDepdntRqmtsTypeText` | [0..*] |
| `_ProdRequirementsGroupingText` | `I_ProdRequirementsGroupingText` | [0..*] |
| `_ProdComponentBackflushCodeT` | `I_ProdComponentBackflushCodeT` | [0..*] |
| `_ProductionSupplyAreaText` | `I_ProductionSupplyAreaText` | [0..*] |
| `_PlanningStrategyGroupText` | `I_PlanningStrategyGroupText` | [0..*] |
| `_UnitOfMeasureText` | `I_UnitOfMeasureText` | [0..*] |
| `_CurrencyText` | `I_CurrencyText` | [0..*] |
| `_ProductMRPAvailabilityTypeT` | `I_ProductMRPAvailabilityTypeT` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRDSUPPLYPLAN'
@AbapCatalog.preserveKey: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Product SupPlanning active core entity'
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory : #XL
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Analytics:{
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture.automatic: true

    }
}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #EXTRACTION_DATA_SOURCE
]
@ObjectModel.sapObjectNodeType.name:'ProductPlantSupplyPlanning'

define view I_ProductSupplyPlanning
  as select from P_ProductPlantBasic as SupplyPlanning
    inner join   t001w on SupplyPlanning.Plant = t001w.werks
    inner join   t001k on t001k.bwkey = t001w.bwkey
    inner join   t001  on t001.bukrs = t001k.bukrs

  association [1..1] to I_Product                     as _Product                      on  $projection.Product = _Product.Product

  association [0..1] to E_Productplant                as _ProdSupplyPlanExt            on  $projection.Product = _ProdSupplyPlanExt.Product
                                                                                       and $projection.Plant   = _ProdSupplyPlanExt.Plant
  association [0..1] to I_RangeOfCoverageProfile      as _RangeOfCvrgPrflCode          on  $projection.Plant               = _RangeOfCvrgPrflCode.Plant
                                                                                       and $projection.RangeOfCvrgPrflCode = _RangeOfCvrgPrflCode.RangeOfCoverageProfile

  association [0..*] to I_RangeOfCoverageProfileText  as _RangeOfCvrgPrflCodeText      on  $projection.Plant               = _RangeOfCvrgPrflCodeText.Plant
                                                                                       and $projection.RangeOfCvrgPrflCode = _RangeOfCvrgPrflCodeText.RangeOfCoverageProfile

  association [0..1] to I_StorageCostsPercentageCode  as _IsStorageCosts               on  $projection.IsStorageCosts = _IsStorageCosts.StorageCostsPercentageCode
                                                                                       and $projection.Plant          = _IsStorageCosts.Plant
  association [0..1] to I_StorageCostsPercentageCode  as _StorageCostsPercentage       on  $projection.StorageCostsPercentageCode = _StorageCostsPercentage.StorageCostsPercentageCode
                                                                                       and $projection.Plant                      = _StorageCostsPercentage.Plant
  association [0..1] to I_SafetyTimePeriodProfile     as _SafetyTimePeriodProfile      on  $projection.Plant              = _SafetyTimePeriodProfile.Plant
                                                                                       and $projection.PerdPrflForSftyTme = _SafetyTimePeriodProfile.SafetyTimePeriodProfile
  association [0..*] to I_SafetyTimePeriodProfileText as _SafetyTimePeriodProfileText  on  $projection.Plant              = _SafetyTimePeriodProfileText.Plant
                                                                                       and $projection.PerdPrflForSftyTme = _SafetyTimePeriodProfileText.SafetyTimePeriodProfile
  association [0..1] to I_ProdAvailabilityCheckGroup  as _AvailabilityCheckType        on  $projection.AvailabilityCheckType = _AvailabilityCheckType.ProdAvailabilityCheckGroup
  association [0..*] to I_ProdAvailabilityCheckGroupT as _AvailabilityCheckTypeText    on  $projection.AvailabilityCheckType = _AvailabilityCheckTypeText.ProdAvailabilityCheckGroup

  association [0..1] to I_ATPCheckingGroup          as _AvailabilityCheckType_2      on  $projection.AvailabilityCheckType = _AvailabilityCheckType_2.ATPCheckingGroup
  association [0..*] to I_ATPCheckingGroupText        as _AvailabilityCheckTypeText_2  on  $projection.AvailabilityCheckType = _AvailabilityCheckTypeText_2.ATPCheckingGroup

  association [0..1] to I_ConsignmentControl          as _ConsignmentControl           on  $projection.ConsignmentControl = _ConsignmentControl.ConsignmentControl
  association [0..*] to I_ConsignmentControlText      as _ConsignmentControlText       on  $projection.ConsignmentControl = _ConsignmentControlText.ConsignmentControl

  association [0..1] to I_MRPPlanningPeriod           as _MRPPlanningCalendar          on  $projection.Plant               = _MRPPlanningCalendar.MRPPlant
                                                                                       and $projection.MRPPlanningCalendar = _MRPPlanningCalendar.MRPPlanningCalendar

  association [0..*] to I_MRPPlanningPeriodText       as _MRPPlanningCalendarText      on  $projection.Plant               = _MRPPlanningCalendarText.MRPPlant
                                                                                       and $projection.MRPPlanningCalendar = _MRPPlanningCalendarText.MRPPlanningCalendar

  association [0..1] to I_MRPGroup                    as _MRPGroup                     on  $projection.Plant    = _MRPGroup.MRPPlant
                                                                                       and $projection.MRPGroup = _MRPGroup.MRPGroup

  association [0..*] to I_MRPGroupText                as _MRPGroupText                 on  $projection.Plant    = _MRPGroupText.MRPPlant
                                                                                       and $projection.MRPGroup = _MRPGroupText.MRPGroup

  association [0..1] to I_MRPLotSizingProcedure       as _LotSizingProcedure           on  $projection.LotSizingProcedure = _LotSizingProcedure.MaterialLotSizingProcedure
  association [0..*] to I_MRPLotSizingProcedureText   as _LotSizingProcedureText       on  $projection.LotSizingProcedure = _LotSizingProcedureText.MaterialLotSizingProcedure

  association [0..*] to I_MRPTypeText                 as _MRPTypeText                  on  $projection.MRPType = _MRPTypeText.MRPType

  association [0..1] to I_Prodabclassfctn             as _ABCIndicator                 on  $projection.ABCIndicator = _ABCIndicator.MaterialABCClassification

  association [0..*] to I_Prodabclassfctntxt          as _ABCIndicatorText             on  $projection.ABCIndicator = _ABCIndicatorText.MaterialABCClassification

  association [0..1] to I_StorageLocation             as _DfltStorageLocationExtProcmt on  $projection.Plant                        = _DfltStorageLocationExtProcmt.Plant
                                                                                       and $projection.DfltStorageLocationExtProcmt = _DfltStorageLocationExtProcmt.StorageLocation

  association [0..1] to I_ProdConsumptionMode         as _ProdRqmtsConsumptionMode     on  $projection.ProdRqmtsConsumptionMode = _ProdRqmtsConsumptionMode.ProdRqmtsConsumptionMode
  association [0..*] to I_ProdConsumptionModeText     as _ProdRqmtsConsumptionModeText on  $projection.ProdRqmtsConsumptionMode = _ProdRqmtsConsumptionModeText.ProdRqmtsConsumptionMode

  association [0..1] to I_LogisticalRoundingProfile   as _LogisticalRoundingProfile    on  $projection.Plant           = _LogisticalRoundingProfile.Plant
                                                                                       and $projection.RoundingProfile = _LogisticalRoundingProfile.LogisticalRoundingProfile

  association [0..*] to I_LogisticalRoundingProfileT  as _LogisticalRoundingProfileT   on  $projection.Plant           = _LogisticalRoundingProfileT.Plant
                                                                                       and $projection.RoundingProfile = _LogisticalRoundingProfileT.LogisticalRoundingProfile

  association [0..1] to I_LogisticalRoundingUoMGroup  as _LoglRndgUoMGroup             on  $projection.ProductUnitGroup = _LoglRndgUoMGroup.LogisticalRoundingUoMGroup
  association [0..1] to I_LogisticalRoundingUoMGroup  as _LoglRndngUoMGroup            on  $projection.ProductUnitGroup = _LoglRndngUoMGroup.LogisticalRoundingUoMGroup
  association [0..1] to I_ProdProcurementType         as _ProdProcurementType          on  $projection.ProcurementType = _ProdProcurementType.ProcurementType
  association [0..*] to I_ProdProcurementTypeText     as _ProdProcurementTypeText      on  $projection.ProcurementType = _ProdProcurementTypeText.ProcurementType
  association [0..1] to I_ProductProcmtProfile        as _ProductProcmtProfile         on  $projection.Plant              = _ProductProcmtProfile.Plant
                                                                                       and $projection.ProcurementSubType = _ProductProcmtProfile.ProcurementSubType

  association [0..*] to I_ProductProcmtProfileText    as _ProductProcmtProfileText     on  $projection.Plant              = _ProductProcmtProfileText.Plant
                                                                                       and $projection.ProcurementSubType = _ProductProcmtProfileText.ProcurementSubType
  association [1..1] to I_Plant                       as _Plant                        on  $projection.Plant = _Plant.Plant
  association [0..1] to I_PlannedOrderActionControl   as _PlannedOrderActionControl    on  $projection.PlannedOrderActionControl = _PlannedOrderActionControl.PlannedOrderActionControl

  association [0..1] to I_ProdBackflushType           as _ProdBackflushType            on  $projection.MatlCompIsMarkedForBackflush = _ProdBackflushType.MatlCompIsMarkedForBackflush
  association [0..*] to I_ProdBackflushTypeText       as _ProdBackflushTypeText        on  $projection.MatlCompIsMarkedForBackflush = _ProdBackflushTypeText.MatlCompIsMarkedForBackflush
  association [0..1] to I_RepetitiveMfgProfile        as _RepetitiveMfgProfile         on  $projection.RepetitiveManufacturingProfile = _RepetitiveMfgProfile.RepetitiveManufacturingProfile
  association [0..*] to I_RepetitiveMfgProfileText    as _RepetitiveMfgProfileText     on  $projection.RepetitiveManufacturingProfile = _RepetitiveMfgProfileText.RepetitiveManufacturingProfile

  association [0..1] to I_MRPSafetyStockMethod        as _MRPSafetyStockMethod         on  $projection.MRPSafetyStockMethod = _MRPSafetyStockMethod.MRPSafetyStockMethod
  association [0..*] to I_MRPSafetyStockMethodText    as _MRPSafetyStockMethodText     on  $projection.MRPSafetyStockMethod = _MRPSafetyStockMethodText.MRPSafetyStockMethod
  
  association [0..*] to I_ProdSafetyTimeMRPRlvnceText as _ProdSafetyTimeMRPRlvnceText  on  $projection.IsSafetyTime = _ProdSafetyTimeMRPRlvnceText.ProductSafetyTimeMRPRelevance
  association [0..*] to I_DepdntRqmtMRPRelevanceText  as _DepdntRqmtMRPRelevanceText   on  $projection.IsMRPDependentRqmt = _DepdntRqmtMRPRelevanceText.DependentRqmtMRPRelevance
  association [0..*] to I_ProdDepdntRqmtsTypeText     as _ProdDepdntRqmtsTypeText      on  $projection.DependentRequirementsType = _ProdDepdntRqmtsTypeText.DependentRequirementsType
  association [0..*] to I_ProdRequirementsGroupingText as _ProdRequirementsGroupingText  on  $projection.ProdRqmtsAreConsolidated = _ProdRequirementsGroupingText.ProductRequirementsGrouping
  association [0..*] to I_ProdComponentBackflushCodeT as _ProdComponentBackflushCodeT  on  $projection.MatlCompIsMarkedForBackflush = _ProdComponentBackflushCodeT.ProductComponentBackflushCode
  association [0..*] to I_ProductionSupplyAreaText    as _ProductionSupplyAreaText     on  $projection.Plant                = _ProductionSupplyAreaText.Plant
                                                                                       and $projection.ProposedProductSupplyArea = _ProductionSupplyAreaText.ProductionSupplyArea
  association [0..*] to I_PlanningStrategyGroupText   as _PlanningStrategyGroupText    on $projection.PlanningStrategyGroup = _PlanningStrategyGroupText.PlanningStrategyGroup
  association [0..*] to I_UnitOfMeasureText           as _UnitOfMeasureText            on  $projection.BaseUnit = _UnitOfMeasureText.UnitOfMeasure
  association [0..*] to I_CurrencyText                as _CurrencyText                 on  $projection.Currency = _CurrencyText.Currency
  association [0..*] to I_ProductMRPAvailabilityTypeT as _ProductMRPAvailabilityTypeT on $projection.MRPAvailabilityType = _ProductMRPAvailabilityTypeT.MRPAvailabilityType
  
{
      @ObjectModel.foreignKey.association: '_Product'
  key SupplyPlanning.Product,
      @ObjectModel.foreignKey.association: '_Plant'
  key SupplyPlanning.Plant,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      SupplyPlanning.FixedLotSizeQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      SupplyPlanning.MaximumLotSizeQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      SupplyPlanning.MinimumLotSizeQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      SupplyPlanning.LotSizeRoundingQuantity,
      @ObjectModel.foreignKey.association: '_LotSizingProcedure'
      @ObjectModel.text.association: '_LotSizingProcedureText'
      SupplyPlanning.LotSizingProcedure,
      @ObjectModel.text.association: '_MRPTypeText'
      SupplyPlanning.MRPType,
      @ObjectModel.sapObjectNodeTypeReference:'MRPController'
      SupplyPlanning.MRPResponsible,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      SupplyPlanning.SafetyStockQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      SupplyPlanning.MinimumSafetyStockQuantity,
      SupplyPlanning.PlanningTimeFence,
      @ObjectModel.foreignKey.association: '_ABCIndicator'
      // @ObjectModel.text.association: '_ABCIndicatorText'
      @ObjectModel.sapObjectNodeTypeReference:'ProdConsumptionValueCategory'
      SupplyPlanning.ABCIndicator,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      SupplyPlanning.MaximumStockQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      SupplyPlanning.ReorderThresholdQuantity,
      SupplyPlanning.PlannedDeliveryDurationInDays,
      SupplyPlanning.SafetyDuration,
//      @ObjectModel.text.association:'_PlanningStrategyGroupText'
      SupplyPlanning.PlanningStrategyGroup,
      SupplyPlanning.TotalReplenishmentLeadTime,
      SupplyPlanning.ATPCheckHorizonInDays,
      SupplyPlanning.ATPCheckHorizonFactoryCalendar,
      @ObjectModel.foreignKey.association: '_ProdProcurementType'
      @ObjectModel.text.association:'_ProdProcurementTypeText'
      @ObjectModel.sapObjectNodeTypeReference:'ProcurementType'
      SupplyPlanning.ProcurementType,
      @ObjectModel.foreignKey.association: '_ProductProcmtProfile'
      @ObjectModel.text.association:'_ProductProcmtProfileText'
      @ObjectModel.sapObjectNodeTypeReference:'ProcurementSubType'
      SupplyPlanning.ProcurementSubType,
      SupplyPlanning.AssemblyScrapPercent,
      @ObjectModel.foreignKey.association: '_AvailabilityCheckType_2'
      @ObjectModel.text.association:'_AvailabilityCheckTypeText_2'
      SupplyPlanning.AvailabilityCheckType,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_AvailabilityCheckType_2'
      _AvailabilityCheckType,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_AvailabilityCheckTypeText_2'
      _AvailabilityCheckTypeText,
      SupplyPlanning.GoodsReceiptDuration,

      //Retail fields

      SupplyPlanning.PlanAndOrderDayDetermination,
      @ObjectModel.foreignKey.association: '_LogisticalRoundingProfile'
      @ObjectModel.text.association:'_LogisticalRoundingProfileT'
      SupplyPlanning.RoundingProfile,
      @ObjectModel.foreignKey.association: '_DfltStorageLocationExtProcmt'
      @ObjectModel.sapObjectNodeTypeReference:'StorageLocation'
      SupplyPlanning.DfltStorageLocationExtProcmt,
      SupplyPlanning.GoodIssueProcessingDays,
      @ObjectModel.foreignKey.association: '_ConsignmentControl'
      @ObjectModel.text.association:'_ConsignmentControlText'
      SupplyPlanning.ConsignmentControl,
      cast( 'X' as sdraft_is_active preserving type ) as IsActiveEntity, // to enbale extensibility in Draft 2.0

      //New fields added as part of MRP area to be added at plant level also
      @ObjectModel.foreignKey.association: '_MRPGroup'
      @ObjectModel.text.association:'_MRPGroupText'
      SupplyPlanning.MRPGroup,
      // SupplyPlanning.lfrhy                                        as PlanAndOrderDayDetermination,
      //SupplyPlanning.rdprf                                        as RoundingProfile,
      @Semantics.amount.currencyCode: 'Currency'
      SupplyPlanning.LotSizeIndependentCosts,
      @ObjectModel.foreignKey.association: '_IsStorageCosts'
      @ObjectModel.sapObjectNodeTypeReference:'StorageCostsPercentageCode'
      SupplyPlanning.StorageCostsPercentageCode       as IsStorageCosts,
      SupplyPlanning.RqmtQtyRcptTaktTmeInWrkgDays, //to be added
      //SupplyPlanning.takzt                                              as TaktTime,
      @ObjectModel.foreignKey.association: '_MRPPlanningCalendar'
      @ObjectModel.text.association:'_MRPPlanningCalendarText'
      SupplyPlanning.MRPPlanningCalendar,
      //SupplyPlanning.plifz                                        as PlannedDeliveryDurationInDays,
      @ObjectModel.foreignKey.association: '_RangeOfCvrgPrflCode'
      @ObjectModel.text.association:'_RangeOfCvrgPrflCodeText'
      SupplyPlanning.RangeOfCvrgPrflCode,
      @ObjectModel.text.association:'_ProdSafetyTimeMRPRlvnceText'
      SupplyPlanning.IsSafetyTime,
      @ObjectModel.foreignKey.association: '_SafetyTimePeriodProfile'
      @ObjectModel.text.association:'_SafetyTimePeriodProfileText'
      SupplyPlanning.PerdPrflForSftyTme,
      @ObjectModel.text.association:'_DepdntRqmtMRPRelevanceText'
      SupplyPlanning.IsMRPDependentRqmt,
      SupplyPlanning.SrvcLvl,
      SupplyPlanning.InHouseProductionTime,
      @ObjectModel.sapObjectNodeTypeReference:'MRPAvailabilityType'
      @ObjectModel.text.association: '_ProductMRPAvailabilityTypeT'
      SupplyPlanning.MRPAvailabilityType,

      //New fields from MDG model, as part of unified API development
      SupplyPlanning.ProductIsForCrossProject,
      @ObjectModel.foreignKey.association: '_StorageCostsPercentage'
      @ObjectModel.sapObjectNodeTypeReference:'StorageCostsPercentageCode'
      SupplyPlanning.StorageCostsPercentageCode,
      // SupplyPlanning.lgrad                                              as SrvcLvl,
      // SupplyPlanning.losfx                                              as LotSizeIndependentCosts,
      // SupplyPlanning.MISKZ                                              as MRPAvailabilityType,
      SupplyPlanning.MRPPlanningCalendar              as ProdnPlngAndControlCalendar,
      SupplyPlanning.FollowUpProduct,
      // SupplyPlanning.rwpro                                              as RangeOfCvrgPrflCode,
      SupplyPlanning.RepetitiveManufacturingIsAllwd,
      @ObjectModel.sapObjectNodeTypeReference:'ProdDependentRequirementsType'
      @ObjectModel.text.association:'_ProdDepdntRqmtsTypeText'
      SupplyPlanning.DependentRequirementsType,
      SupplyPlanning.IsBulkMaterialComponent,
      @ObjectModel.foreignKey.association: '_RepetitiveMfgProfile'
      @ObjectModel.text.association:'_RepetitiveMfgProfileText'
      SupplyPlanning.RepetitiveManufacturingProfile,
      // SupplyPlanning.shpro                                              as PerdPrflForSftyTme,
      // SupplyPlanning.shflg                                              as IsSafetyTime,
      // SupplyPlanning.takzt                                              as RqmtQtyRcptTaktTmeInWrkgDays,
      SupplyPlanning.BackwardCnsmpnPeriodInWorkDays,
      SupplyPlanning.FwdConsumptionPeriodInWorkDays,
      @ObjectModel.foreignKey.association: '_ProdRqmtsConsumptionMode'
      @ObjectModel.text.association:'_ProdRqmtsConsumptionModeText'
      @ObjectModel.sapObjectNodeTypeReference:'ProdRqmtsConsumptionMode'
      SupplyPlanning.ProdRqmtsConsumptionMode,
      SupplyPlanning.ForecastRequirementsAreSplit,
      SupplyPlanning.EffectiveOutDate,
      @ObjectModel.sapObjectNodeTypeReference:'MRPProfile'
      SupplyPlanning.MRPProfile,
      SupplyPlanning.SchedulingMarginKey,
      SupplyPlanning.ComponentScrapInPercent,
      SupplyPlanning.ProductIsToBeDiscontinued,
      @ObjectModel.text.association: '_ProdRequirementsGroupingText'
      SupplyPlanning.ProdRqmtsAreConsolidated,
      @ObjectModel.sapObjectNodeTypeReference:'StorageLocation'
      SupplyPlanning.ProductionInvtryManagedLoc,
      @ObjectModel.foreignKey.association: '_ProdBackflushType'
      @ObjectModel.text.association: '_ProdBackflushTypeText'
      SupplyPlanning.MatlCompIsMarkedForBackflush,
      @ObjectModel.text.association: '_ProductionSupplyAreaText'
      SupplyPlanning.ProposedProductSupplyArea,
      @ObjectModel.foreignKey.association: '_PlannedOrderActionControl'
      SupplyPlanning.PlannedOrderActionControl,
      @ObjectModel.foreignKey.association: '_LoglRndgUoMGroup'
      //      @ObjectModel.foreignKey.association: '_LoglRndngUoMGroup'
      SupplyPlanning.ProductUnitGroup, // to be used only for retail
      @ObjectModel.foreignKey.association: '_MRPSafetyStockMethod'
      @ObjectModel.text.association: '_MRPSafetyStockMethodText'
      SupplyPlanning.MRPSafetyStockMethod,
      @ObjectModel.sapObjectNodeTypeReference:'JITProdnConfProfile'
      SupplyPlanning.JITProdnConfProfile,
      @Semantics.currencyCode: true
      t001.waers                                      as Currency,
      t001k.bukrs                                     as CompanyCode,
      t001k.bwkey                                     as ValuationArea,
      @Semantics.unitOfMeasure: true
      _Product.BaseUnit                               as BaseUnit,
      _Product,
      _RangeOfCvrgPrflCode,
      _RangeOfCvrgPrflCodeText,
      _SafetyTimePeriodProfile,
      _SafetyTimePeriodProfileText,
      _MRPPlanningCalendar,
      _MRPPlanningCalendarText,
      _MRPGroup,
      _MRPGroupText,
      _LotSizingProcedureText,
      _MRPTypeText,
      _ABCIndicator,
      _ABCIndicatorText,
      _IsStorageCosts,
      _StorageCostsPercentage,
      _LotSizingProcedure,
      _DfltStorageLocationExtProcmt,
      _ProdRqmtsConsumptionMode,
      _ProdRqmtsConsumptionModeText,
      _ConsignmentControl,
      _ConsignmentControlText,
      _LogisticalRoundingProfile,
      _LogisticalRoundingProfileT,
      _ProdProcurementType,
      _ProdProcurementTypeText,
      _ProductProcmtProfile,
      _ProductProcmtProfileText,
      _Plant,
      _PlannedOrderActionControl,
      _ProdBackflushType,
      _ProdBackflushTypeText,
      _RepetitiveMfgProfile,
      _MRPSafetyStockMethod,
      _MRPSafetyStockMethodText,
      _LoglRndgUoMGroup,
      _LoglRndngUoMGroup,
      _AvailabilityCheckType_2,
      _AvailabilityCheckTypeText_2,
      _ProdSafetyTimeMRPRlvnceText,
      _DepdntRqmtMRPRelevanceText,
      _ProdDepdntRqmtsTypeText,
      _ProdRequirementsGroupingText,
      _ProdComponentBackflushCodeT,
      _ProductionSupplyAreaText,
      _RepetitiveMfgProfileText,
      _PlanningStrategyGroupText,
      _UnitOfMeasureText,
      _CurrencyText,
      _ProductMRPAvailabilityTypeT

}
```
