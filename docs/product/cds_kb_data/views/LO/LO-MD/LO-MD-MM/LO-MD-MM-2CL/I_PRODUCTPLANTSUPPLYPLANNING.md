---
name: I_PRODUCTPLANTSUPPLYPLANNING
description: "Productplantsupplyplanning"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - product
  - plant
  - component:LO-MD-MM-2CL
  - lob:Logistics General
  - bo:Plant
---
# I_PRODUCTPLANTSUPPLYPLANNING

**Productplantsupplyplanning**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  | `cast (SupplyPlanning.Product as productnumber preserving type )` |  |  |
| `Plant` | ✓ | |  |  |  |  |
| `FixedLotSizeQuantity` |  | |  |  |  |  |
| `MaximumLotSizeQuantity` |  | |  |  |  |  |
| `MinimumLotSizeQuantity` |  | |  |  |  |  |
| `LotSizeRoundingQuantity` |  | |  |  |  |  |
| `LotSizingProcedure` |  | |  |  |  |  |
| `MRPType` |  | |  |  |  |  |
| `MRPResponsible` |  | |  |  |  |  |
| `SafetyStockQuantity` |  | |  |  |  |  |
| `MinimumSafetyStockQuantity` |  | |  |  |  |  |
| `PlanningTimeFence` |  | |  |  |  |  |
| `ConsumptionValueCategory` |  | |  | `ABCIndicator` |  |  |
| `MaximumStockQuantity` |  | |  |  |  |  |
| `ReorderThresholdQuantity` |  | |  |  |  |  |
| `PlannedDeliveryDurationInDays` |  | |  |  |  |  |
| `SafetySupplyDurationInDays` |  | |  | `SafetyDuration` |  |  |
| `PlanningStrategyGroup` |  | |  |  |  |  |
| `TotalReplenishmentLeadTime` |  | |  |  |  |  |
| `ProcurementType` |  | |  |  |  |  |
| `ProcurementSubType` |  | |  |  |  |  |
| `AssemblyScrapPercent` |  | |  |  |  |  |
| `AvailabilityCheckType` |  | |  |  |  |  |
| `GoodsReceiptDuration` |  | |  |  |  |  |
| `PlanAndOrderDayDetermination` |  | |  |  |  |  |
| `RoundingProfile` |  | |  |  |  |  |
| `DfltStorageLocationExtProcmt` |  | |  |  |  |  |
| `GoodIssueProcessingDays` |  | |  |  |  |  |
| `ConsignmentControl` |  | |  |  |  |  |
| `IsActiveEntity` |  | |  | `cast( 'X' as sdraft_is_active preserving type )` |  |  |
| `MRPGroup` |  | |  |  |  |  |
| `LotSizeIndependentCosts` |  | |  |  |  |  |
| `StorageCostsPercentageCode` |  | |  |  |  |  |
| `RqmtQtyRcptTaktTmeInWrkgDays` |  | |  |  |  |  |
| `MRPPlanningCalendar` |  | |  |  |  |  |
| `RangeOfCvrgPrflCode` |  | |  |  |  |  |
| `ProductSafetyTimeMRPRelevance` |  | |  | `IsSafetyTime` |  |  |
| `SafetyTimePeriodProfile` |  | |  | `PerdPrflForSftyTme` |  |  |
| `DependentRqmtMRPRelevance` |  | |  | `IsMRPDependentRqmt` |  |  |
| `ProductServiceLevelInPercent` |  | |  | `SrvcLvl` |  |  |
| `ProdInhProdnDurationInWorkDays` |  | |  | `InHouseProductionTime` |  |  |
| `MRPAvailabilityType` |  | |  |  |  |  |
| `CrossProjectProduct` |  | |  | `ProductIsForCrossProject` |  |  |
| `ProdnPlngAndControlCalendar` |  | |  | `MRPPlanningCalendar` |  |  |
| `FollowUpProduct` |  | |  |  |  |  |
| `RepetitiveManufacturingIsAllwd` |  | |  |  |  |  |
| `DependentRequirementsType` |  | |  |  |  |  |
| `ProductIsBulkComponent` |  | |  | `IsBulkMaterialComponent` |  |  |
| `RepetitiveManufacturingProfile` |  | |  |  |  |  |
| `BackwardCnsmpnPeriodInWorkDays` |  | |  |  |  |  |
| `FwdConsumptionPeriodInWorkDays` |  | |  |  |  |  |
| `ProdRqmtsConsumptionMode` |  | |  |  |  |  |
| `ProdFcstRequirementsSplitCode` |  | |  | `ForecastRequirementsAreSplit` |  |  |
| `EffectiveOutDate` |  | |  |  |  |  |
| `MRPProfile` |  | |  |  |  |  |
| `SchedulingFloatProfile` |  | |  | `SchedulingMarginKey` |  |  |
| `ComponentScrapInPercent` |  | |  |  |  |  |
| `ProductDiscontinuationCode` |  | |  | `ProductIsToBeDiscontinued` |  |  |
| `ProductRequirementsGrouping` |  | |  | `ProdRqmtsAreConsolidated` |  |  |
| `ProductionInvtryManagedLoc` |  | |  |  |  |  |
| `ProductComponentBackflushCode` |  | |  | `MatlCompIsMarkedForBackflush` |  |  |
| `ProposedProductSupplyArea` |  | |  |  |  |  |
| `PlannedOrderActionControl` |  | |  |  |  |  |
| `ProductUnitGroup` |  | |  |  |  |  |
| `MRPSafetyStockMethod` |  | |  |  |  |  |
| `JITProdnConfProfile` |  | |  |  |  |  |
| `Currency` |  | |  | `waers` |  |  |
| `CompanyCode` |  | |  | `bukrs` |  |  |
| `ValuationArea` |  | |  | `bwkey` |  |  |
| `BaseUnit` |  | | `_Product` | `BaseUnit` |  |  |
| `_Product` | | ✓ | | | | |
| `_RangeOfCvrgPrflCode` | | ✓ | | | | |
| `_StorageCostsPercentage` | | ✓ | | | | |
| `_SafetyTimePeriodProfile` | | ✓ | | | | |
| `_AvailabilityCheckType_2` | | ✓ | | | | |
| `_ConsignmentControl` | | ✓ | | | | |
| `_MRPPlanningCalendar` | | ✓ | | | | |
| `_MRPGroup` | | ✓ | | | | |
| `_LotSizingProcedure` | | ✓ | | | | |
| `_MRPTypeText` | | ✓ | | | | |
| `_ABCIndicator` | | ✓ | | | | |
| `_DfltStorageLocationExtProcmt` | | ✓ | | | | |
| `_ProdRqmtsConsumptionMode` | | ✓ | | | | |
| `_LogisticalRoundingProfile` | | ✓ | | | | |
| `_ProdUoMGroup` | | ✓ | | | | |
| `_ProdProcurementType` | | ✓ | | | | |
| `_ProductProcmtProfile` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_PlannedOrderActionControl` | | ✓ | | | | |
| `_ProdBackflushType` | | ✓ | | | | |
| `_RepetitiveMfgProfile` | | ✓ | | | | |
| `_MRPSafetyStockMethod` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [1..1] |
| `_RangeOfCvrgPrflCode` | `I_RangeOfCoverageProfile` | [0..1] |
| `_StorageCostsPercentage` | `I_StorageCostsPercentageCode` | [0..1] |
| `_SafetyTimePeriodProfile` | `I_SafetyTimePeriodProfile` | [0..1] |
| `_AvailabilityCheckType_2` | `I_ATPCheckingGroup` | [0..1] |
| `_ConsignmentControl` | `I_ConsignmentControl` | [0..1] |
| `_MRPPlanningCalendar` | `I_MRPPlanningPeriod` | [0..1] |
| `_MRPGroup` | `I_MRPGroup` | [0..1] |
| `_LotSizingProcedure` | `I_MRPLotSizingProcedure` | [0..1] |
| `_MRPTypeText` | `I_MRPTypeText` | [0..*] |
| `_ABCIndicator` | `I_Prodabclassfctn` | [0..1] |
| `_DfltStorageLocationExtProcmt` | `I_StorageLocation` | [0..1] |
| `_ProdRqmtsConsumptionMode` | `I_ProdConsumptionMode` | [0..1] |
| `_LogisticalRoundingProfile` | `I_LogisticalRoundingProfile` | [0..1] |
| `_ProdUoMGroup` | `I_LogisticalRoundingUoMGroup` | [0..1] |
| `_ProdProcurementType` | `I_ProdProcurementType` | [0..1] |
| `_ProductProcmtProfile` | `I_ProductProcmtProfile` | [0..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_PlannedOrderActionControl` | `I_PlannedOrderActionControl` | [0..1] |
| `_ProdBackflushType` | `I_ProdBackflushType` | [0..1] |
| `_RepetitiveMfgProfile` | `I_RepetitiveMfgProfile` | [0..1] |
| `_MRPSafetyStockMethod` | `I_MRPSafetyStockMethod` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Product Plant Supply Planning'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #XL,
  dataClass: #MIXED
}
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #EXTRACTION_DATA_SOURCE
]
@ObjectModel.modelingPattern: #NONE
@Analytics:{
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        mapping:
        [ { table: 'MARC',
            role: #MAIN,
            viewElement: ['Product','Plant'],
            tableElement: ['MATNR','WERKS'] },
          
          { table: 'T001W',
            role: #LEFT_OUTER_TO_ONE_JOIN,
            viewElement: ['Plant'],
            tableElement: ['WERKS']
          },  

          { table: 'T001K',
            role: #LEFT_OUTER_TO_ONE_JOIN,
            viewElement: ['ValuationArea'],
            tableElement: ['BWKEY']
          },

          { table: 'T001',
            role: #LEFT_OUTER_TO_ONE_JOIN,
            viewElement: ['CompanyCode'],
            tableElement: ['BUKRS']
          },
          { table: 'MARA',
            role: #LEFT_OUTER_TO_ONE_JOIN,
            viewElement: ['Product'],
            tableElement: ['MATNR']

          }
       ]
     }
    }
}

@Analytics.technicalName: 'IPRODPLANSUPPlAN'
@ObjectModel.sapObjectNodeType.name:'ProductPlantSupplyPlanning'

define view entity I_ProductPlantSupplyPlanning
  as select from P_ProductPlantBasic as SupplyPlanning
    inner join   t001w on SupplyPlanning.Plant = t001w.werks
    inner join   t001k on t001k.bwkey = t001w.bwkey
    inner join   t001  on t001.bukrs = t001k.bukrs
  
  association [1..1] to I_Product                     as _Product                      on  $projection.Product = _Product.Product

  association [0..1] to I_RangeOfCoverageProfile      as _RangeOfCvrgPrflCode          on  $projection.Plant               = _RangeOfCvrgPrflCode.Plant
                                                                                       and $projection.RangeOfCvrgPrflCode = _RangeOfCvrgPrflCode.RangeOfCoverageProfile
  
  association [0..1] to I_StorageCostsPercentageCode  as _StorageCostsPercentage       on  $projection.StorageCostsPercentageCode = _StorageCostsPercentage.StorageCostsPercentageCode
                                                                                       and $projection.Plant          = _StorageCostsPercentage.Plant    
                                                                                                                                                                        
  association [0..1] to I_SafetyTimePeriodProfile     as _SafetyTimePeriodProfile      on  $projection.Plant              = _SafetyTimePeriodProfile.Plant
                                                                                       and $projection.SafetyTimePeriodProfile = _SafetyTimePeriodProfile.SafetyTimePeriodProfile
 
  association [0..1] to I_ATPCheckingGroup            as _AvailabilityCheckType_2      on  $projection.AvailabilityCheckType = _AvailabilityCheckType_2.ATPCheckingGroup
  
  association [0..1] to I_ConsignmentControl          as _ConsignmentControl           on  $projection.ConsignmentControl = _ConsignmentControl.ConsignmentControl
 
  association [0..1] to I_MRPPlanningPeriod           as _MRPPlanningCalendar          on  $projection.Plant               = _MRPPlanningCalendar.MRPPlant
                                                                                       and $projection.MRPPlanningCalendar = _MRPPlanningCalendar.MRPPlanningCalendar

  
  association [0..1] to I_MRPGroup                    as _MRPGroup                     on  $projection.Plant    = _MRPGroup.MRPPlant
                                                                                       and $projection.MRPGroup = _MRPGroup.MRPGroup

  
  association [0..1] to I_MRPLotSizingProcedure       as _LotSizingProcedure           on  $projection.LotSizingProcedure = _LotSizingProcedure.MaterialLotSizingProcedure
  
  association [0..*] to I_MRPTypeText                 as _MRPTypeText                  on  $projection.MRPType = _MRPTypeText.MRPType

  association [0..1] to I_Prodabclassfctn             as _ABCIndicator                 on  $projection.ConsumptionValueCategory = _ABCIndicator.MaterialABCClassification

  
  association [0..1] to I_StorageLocation             as _DfltStorageLocationExtProcmt on  $projection.Plant                        = _DfltStorageLocationExtProcmt.Plant
                                                                                       and $projection.DfltStorageLocationExtProcmt = _DfltStorageLocationExtProcmt.StorageLocation

  association [0..1] to I_ProdConsumptionMode         as _ProdRqmtsConsumptionMode     on  $projection.ProdRqmtsConsumptionMode = _ProdRqmtsConsumptionMode.ProdRqmtsConsumptionMode
  
  association [0..1] to I_LogisticalRoundingProfile   as _LogisticalRoundingProfile    on  $projection.Plant           = _LogisticalRoundingProfile.Plant
                                                                                       and $projection.RoundingProfile = _LogisticalRoundingProfile.LogisticalRoundingProfile

 
  association [0..1] to I_LogisticalRoundingUoMGroup  as _ProdUoMGroup                 on  $projection.ProductUnitGroup   = _ProdUoMGroup.LogisticalRoundingUoMGroup                                                                                       
  association [0..1] to I_ProdProcurementType         as _ProdProcurementType          on  $projection.ProcurementType = _ProdProcurementType.ProcurementType
  association [0..1] to I_ProductProcmtProfile        as _ProductProcmtProfile         on  $projection.Plant              = _ProductProcmtProfile.Plant
                                                                                       and $projection.ProcurementSubType = _ProductProcmtProfile.ProcurementSubType

  association [1..1] to I_Plant                       as _Plant                        on  $projection.Plant = _Plant.Plant
  association [0..1] to I_PlannedOrderActionControl   as _PlannedOrderActionControl    on  $projection.PlannedOrderActionControl = _PlannedOrderActionControl.PlannedOrderActionControl

  association [0..1] to I_ProdBackflushType           as _ProdBackflushType            on  $projection.ProductComponentBackflushCode = _ProdBackflushType.MatlCompIsMarkedForBackflush
  association [0..1] to I_RepetitiveMfgProfile        as _RepetitiveMfgProfile         on  $projection.RepetitiveManufacturingProfile = _RepetitiveMfgProfile.RepetitiveManufacturingProfile

  association [0..1] to I_MRPSafetyStockMethod        as _MRPSafetyStockMethod         on  $projection.MRPSafetyStockMethod = _MRPSafetyStockMethod.MRPSafetyStockMethod

{
   @ObjectModel.foreignKey.association: '_Product'
 key cast (SupplyPlanning.Product as productnumber preserving type ) as Product,
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
      
      @ObjectModel.sapObjectNodeTypeReference:'ProdConsumptionValueCategory'
      SupplyPlanning.ABCIndicator as ConsumptionValueCategory,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      SupplyPlanning.MaximumStockQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      SupplyPlanning.ReorderThresholdQuantity,
      SupplyPlanning.PlannedDeliveryDurationInDays,
      SupplyPlanning.SafetyDuration as SafetySupplyDurationInDays,
      SupplyPlanning.PlanningStrategyGroup,
      SupplyPlanning.TotalReplenishmentLeadTime,
      @ObjectModel.foreignKey.association: '_ProdProcurementType'
      @ObjectModel.sapObjectNodeTypeReference:'ProcurementType'
      SupplyPlanning.ProcurementType,
      @ObjectModel.foreignKey.association: '_ProductProcmtProfile'
      @ObjectModel.sapObjectNodeTypeReference:'ProcurementSubType'
      SupplyPlanning.ProcurementSubType,
      SupplyPlanning.AssemblyScrapPercent,
      @ObjectModel.foreignKey.association: '_AvailabilityCheckType_2'
      SupplyPlanning.AvailabilityCheckType,
      SupplyPlanning.GoodsReceiptDuration,
      SupplyPlanning.PlanAndOrderDayDetermination,
      @ObjectModel.foreignKey.association: '_LogisticalRoundingProfile'
      SupplyPlanning.RoundingProfile,
      @ObjectModel.foreignKey.association: '_DfltStorageLocationExtProcmt'
      @ObjectModel.sapObjectNodeTypeReference:'StorageLocation'
      SupplyPlanning.DfltStorageLocationExtProcmt,
      SupplyPlanning.GoodIssueProcessingDays,
      @ObjectModel.foreignKey.association: '_ConsignmentControl'
      SupplyPlanning.ConsignmentControl,
      cast( 'X' as sdraft_is_active preserving type ) as IsActiveEntity, // to enbale extensibility in Draft 2.0 
      
      //New fields added as part of MRP area to be added at plant level also
      @ObjectModel.foreignKey.association: '_MRPGroup'
      SupplyPlanning.MRPGroup,
      // SupplyPlanning.lfrhy                                        as PlanAndOrderDayDetermination,
      //SupplyPlanning.rdprf                                        as RoundingProfile,
      @Semantics.amount.currencyCode: 'Currency'
      SupplyPlanning.LotSizeIndependentCosts,
      @ObjectModel.foreignKey.association: '_StorageCostsPercentage'
      @ObjectModel.sapObjectNodeTypeReference:'StorageCostsPercentageCode'
      SupplyPlanning.StorageCostsPercentageCode,
      SupplyPlanning.RqmtQtyRcptTaktTmeInWrkgDays, //to be added
      //SupplyPlanning.takzt                                              as TaktTime,
      @ObjectModel.foreignKey.association: '_MRPPlanningCalendar'
      SupplyPlanning.MRPPlanningCalendar,
      //SupplyPlanning.plifz                                        as PlannedDeliveryDurationInDays,
      @ObjectModel.foreignKey.association: '_RangeOfCvrgPrflCode'
      SupplyPlanning.RangeOfCvrgPrflCode,
      SupplyPlanning.IsSafetyTime as ProductSafetyTimeMRPRelevance,
      @ObjectModel.foreignKey.association: '_SafetyTimePeriodProfile'
      SupplyPlanning.PerdPrflForSftyTme    as SafetyTimePeriodProfile,
      SupplyPlanning.IsMRPDependentRqmt    as DependentRqmtMRPRelevance,
      SupplyPlanning.SrvcLvl               as ProductServiceLevelInPercent,
      SupplyPlanning.InHouseProductionTime as ProdInhProdnDurationInWorkDays,
      @ObjectModel.sapObjectNodeTypeReference:'MRPAvailabilityType'
      SupplyPlanning.MRPAvailabilityType,

      //New fields from MDG model, as part of unified API development
      SupplyPlanning.ProductIsForCrossProject as CrossProjectProduct,
      
      SupplyPlanning.MRPPlanningCalendar              as ProdnPlngAndControlCalendar,
      SupplyPlanning.FollowUpProduct,
      SupplyPlanning.RepetitiveManufacturingIsAllwd,
      @ObjectModel.sapObjectNodeTypeReference:'ProdDependentRequirementsType'
      SupplyPlanning.DependentRequirementsType,
      SupplyPlanning.IsBulkMaterialComponent as ProductIsBulkComponent,
      @ObjectModel.foreignKey.association: '_RepetitiveMfgProfile'
      SupplyPlanning.RepetitiveManufacturingProfile,

      SupplyPlanning.BackwardCnsmpnPeriodInWorkDays,
      SupplyPlanning.FwdConsumptionPeriodInWorkDays,
      @ObjectModel.foreignKey.association: '_ProdRqmtsConsumptionMode'
      @ObjectModel.sapObjectNodeTypeReference:'ProdRqmtsConsumptionMode'
      SupplyPlanning.ProdRqmtsConsumptionMode,
      SupplyPlanning.ForecastRequirementsAreSplit as ProdFcstRequirementsSplitCode,
      SupplyPlanning.EffectiveOutDate,
      @ObjectModel.sapObjectNodeTypeReference:'MRPProfile'
      SupplyPlanning.MRPProfile,
      SupplyPlanning.SchedulingMarginKey as SchedulingFloatProfile,
      SupplyPlanning.ComponentScrapInPercent,
      SupplyPlanning.ProductIsToBeDiscontinued as ProductDiscontinuationCode,
      SupplyPlanning.ProdRqmtsAreConsolidated as ProductRequirementsGrouping,
      @ObjectModel.sapObjectNodeTypeReference:'StorageLocation'
      SupplyPlanning.ProductionInvtryManagedLoc,
      @ObjectModel.foreignKey.association: '_ProdBackflushType'
      SupplyPlanning.MatlCompIsMarkedForBackflush as ProductComponentBackflushCode,
      SupplyPlanning.ProposedProductSupplyArea,
      @ObjectModel.foreignKey.association: '_PlannedOrderActionControl'
      SupplyPlanning.PlannedOrderActionControl,
      @ObjectModel.foreignKey.association: '_ProdUoMGroup' 
      SupplyPlanning.ProductUnitGroup, // to be used only for retail
      @ObjectModel.foreignKey.association: '_MRPSafetyStockMethod'
      SupplyPlanning.MRPSafetyStockMethod,
      SupplyPlanning.JITProdnConfProfile,
            //@Semantics.currencyCode: true
      t001.waers                                      as Currency,
      t001k.bukrs                  as CompanyCode,
      t001k.bwkey                  as ValuationArea,
      //@Semantics.unitOfMeasure: true
      _Product.BaseUnit                               as BaseUnit,
      _Product,
      _RangeOfCvrgPrflCode,
      _SafetyTimePeriodProfile,
      _MRPPlanningCalendar,
      _MRPGroup,
      _MRPTypeText,
      _ABCIndicator,
      _StorageCostsPercentage,
      _LotSizingProcedure,
      _DfltStorageLocationExtProcmt,
      _ProdRqmtsConsumptionMode,
      _ConsignmentControl,
      _LogisticalRoundingProfile,
      _ProdProcurementType,
      _ProductProcmtProfile,
      _Plant,
      _PlannedOrderActionControl,
      _ProdBackflushType,
      _RepetitiveMfgProfile,
      _MRPSafetyStockMethod,
      _ProdUoMGroup,
      _AvailabilityCheckType_2
      
      
}
```
