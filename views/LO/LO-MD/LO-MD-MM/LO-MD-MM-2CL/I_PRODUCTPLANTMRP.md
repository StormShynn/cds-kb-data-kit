---
name: I_PRODUCTPLANTMRP
description: Productplantmrp
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
  - plant
  - component:LO-MD-MM-2CL
  - lob:Logistics General
  - bo:Plant
---
# I_PRODUCTPLANTMRP

**Productplantmrp**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Product` | `MRPAreaData.matnr` |
| key `MRPArea` | `MRPAreaData.berid` |
| key `Plant` | `MRPAreaData.werks` |
| `MRPType` | `MRPAreaData.dismm` |
| `MRPResponsible` | `MRPAreaData.dispo` |
| `MRPGroup` | `MRPAreaData.disgr` |
| `ReorderThresholdQuantity` | `MRPAreaData.minbe` |
| `PlanAndOrderDayDetermination` | `MRPAreaData.lfrhy` |
| `PlanningTimeFence` | `MRPAreaData.fxhor` |
| `LotSizingProcedure` | `MRPAreaData.disls` |
| `RoundingProfile` | `MRPAreaData.rdprf` |
| `LotSizeRoundingQuantity` | `MRPAreaData.bstrf` |
| `MinimumLotSizeQuantity` | `MRPAreaData.bstmi` |
| `MaximumLotSizeQuantity` | `MRPAreaData.bstma` |
| `MaximumStockQuantity` | `MRPAreaData.mabst` |
| `AssemblyScrapPercent` | `MRPAreaData.ausss` |
| `ProcurementSubType` | `MRPAreaData.sobsl` |
| `StorageLocation` | `MRPAreaData.lgpro` |
| `DfltStorageLocationExtProcmt` | `MRPAreaData.lgfsb` |
| `MRPPlanningCalendar` | `MRPAreaData.mrppp` |
| `SafetyStockQuantity` | `MRPAreaData.eisbe` |
| `RangeOfCvrgPrflCode` | `MRPAreaData.rwpro` |
| `SafetyDuration` | `MRPAreaData.shzet` |
| `FixedLotSizeQuantity` | `MRPAreaData.bstfe` |
| `LotSizeIndependentCosts` | `MRPAreaData.losfx` |
| `StorageCostsPercentageCode` | `MRPAreaData.lagpr` |
| `SrvcLvl` | `MRPAreaData.lgrad` |
| `CreationDate` | `MRPAreaData.vrbdt` |
| `IsMarkedForDeletion` | `MRPAreaData.loekz` |
| `PerdPrflForSftyTme` | `MRPAreaData.shpro` |
| `IsMRPDependentRqmt` | `MRPAreaData.ahdis` |
| `DependentRqmtMRPRelevance` | `MRPAreaData.ahdis` |
| `MaintenanceStatusName` | `MRPAreaData.pstat` |
| `IsSafetyTime` | `MRPAreaData.shflg` |
| `ProductSafetyTimeMRPRelevance` | `MRPAreaData.shflg` |
| `PlannedDeliveryDurationInDays` | `MRPAreaData.plifz` |
| `IsPlannedDeliveryTime` | `cast(MRPAreaData.plifzx as isplanneddeliverytime preserving type )` |
| `RqmtQtyRcptTaktTmeInWrkgDays` | `MRPAreaData.takzt` |
| `PPPlanningProcedure` | `MRPAreaData.scm_rrp_type` |
| `ProdnPlngHeuristic` | `MRPAreaData.scm_heur_id` |
| `ProductPlanningGroup` | `MRPAreaData.scm_rrp_sel_group` |
| `ProductPlanningPackage` | `MRPAreaData.scm_package_id` |
| `AdvncdPlngPPDSHorizonInDays` | `MRPAreaData.convh` |
| `LotSizeUnit` | `MRPAreaData.scm_lsuom` |
| `TargetDaysSupplyInWorkDays` | `cast (MRPAreaData.scm_target_dur as cmd_prd_target_dur_n preserving type )` |
| `ReorderDaysSupplyInWorkDays` | `cast (MRPAreaData.scm_reord_dur as cmd_prd_reord_dur_n preserving type )` |
| `PlngCalendarPerdcLotSizing` | `MRPAreaData.scm_tstrid` |
| `LocProdGoodsReceiptProcHours` | `cast (MRPAreaData.scm_grprt as cmd_prd_good_rcpt_proc_time_n preserving type )` |
| `LocProdGoodsIssueProcHours` | `cast (MRPAreaData.scm_giprt as cmd_prd_good_issue_proc_time_n preserving type )` |
| `GRHandlingCapacityQuantity` | `MRPAreaData.scm_conhap` |
| `GRHandlingCapacityUnit` | `MRPAreaData.scm_hunit` |
| `GIHandlingCapacityQuantity` | `MRPAreaData.scm_conhap_out` |
| `GIHandlingCapacityUnit` | `MRPAreaData.scm_hunit_out` |
| `SrvcPartsThroughputTimeDurn` | `cast(MRPAreaData.scm_thruput_time as cmd_prd_srvc_prts_thruput_time preserving type )` |
| `ParLocSafetyStockQuantity` | `MRPAreaData.scm_ppsaftystk` |
| `VCLSafetyStockQuantity` | `MRPAreaData.scm_safty_v` |
| `VCLParLocSafetyStockQuantity` | `MRPAreaData.scm_ppsaftystk_v` |
| `VCLReorderPointQuantity` | `MRPAreaData.scm_reord_v` |
| `VCLMaximumStockQuantity` | `MRPAreaData.scm_maxstock_v` |
| `CostFactorForStockHoldingVal` | `MRPAreaData.scm_scost_prcnt` |
| `ProductProcurementCostsVal` | `MRPAreaData.scm_proc_cost` |
| `GoodsReceiptHandlingCost` | `MRPAreaData.scm_ndcostwe` |
| `GoodsIssueHandlingCost` | `MRPAreaData.scm_ndcostwa` |
| `ConsumptionOfStorageCapacity` | `MRPAreaData.scm_coninp` |
| `ConsumptionOfStorageCapUnit` | `MRPAreaData.scm_iunit` |
| `MRPSafetyStockMethod` | `MRPAreaData.sfty_stk_meth` |
| `Currency` | `t001.waers` |
| `BaseUnit` | `_Product.BaseUnit` |
| `MaxDaysOfSupplyIsActive` | `MRPAreaData.maxdos_flg` |
| `MaxDaysOfSupplyPenaltyAmount` | `MRPAreaData.maxdos_pen` |
| `AdvncdPlngSftyStkMeth` | `MRPAreaData.saftystock_method` |
| `AdvncdPlngTgtStkLvlMeth` | `MRPAreaData.target_stock_level_meth` |
| `SftyStkMethIsAutomlyDtmnd` | `cast(MRPAreaData.auto_det_sftystk_meth as xfeld)` |
| `PeriodFactorIsUsed` | `MRPAreaData.use_period_factor` |
| `AdvncdPlngPeriodFactorValue` | `MRPAreaData.period_factor_value` |
| `TimeDepdntStkLvlPerdFactorVal` | `MRPAreaData.period_factor_tds` |
| `LocProdStorageCostValue` | `MRPAreaData.scm_scost` |
| `SftyStkVioltnPnltyCostValue` | `MRPAreaData.scm_sspen` |
| `_MRPType` | *Association* |
| `_MRPTypeName` | *Association* |
| `_LotSizingProcedure` | *Association* |
| `_LotSizingProcedureText` | *Association* |
| `_PlantInvtryManagedLoc` | *Association* |
| `_Product` | *Association* |
| `_MRPResponsible` | *Association* |
| `_LotSizeUnit` | *Association* |
| `_GRHandlingCapacityUnit` | *Association* |
| `_GIHandlingCapacityUnit` | *Association* |
| `_SafetyTimePeriodProfile` | *Association* |
| `_SafetyTimePeriodProfileText` | *Association* |
| `_ProdnPlngHeuristic` | *Association* |
| `_PPPlanningProcedure` | *Association* |
| `_ProductPlanningPackage` | *Association* |
| `_RangeOfCvrgPrflCode` | *Association* |
| `_RangeOfCvrgPrflCodeText` | *Association* |
| `_MRPGroupText` | *Association* |
| `_MRPPlanningCalendarText` | *Association* |
| `_StorageCostsPercentageCode` | *Association* |
| `_PlantVH` | *Association* |
| `_ProductProcmtProfile` | *Association* |
| `_ProductProcmtProfileText` | *Association* |
| `_MRPSafetyStockMethod` | *Association* |
| `_MRPSafetyStockMethodText` | *Association* |
| `_CurrencyText` | *Association* |
| `_ProdSafetyTimeMRPRlvnceText` | *Association* |
| `_DepdntRqmtMRPRelevanceText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MRPType` | `I_MRPType` | [0..1] |
| `_MRPTypeName` | `I_MRPTypeText` | [0..*] |
| `_LotSizingProcedure` | `I_MRPLotSizingProcedure` | [0..1] |
| `_LotSizingProcedureText` | `I_MRPLotSizingProcedureText` | [0..*] |
| `_PlantInvtryManagedLoc` | `I_StorageLocation` | [0..1] |
| `_Product` | `I_Product` | [1..1] |
| `_MRPResponsible` | `I_MRPController` | [0..1] |
| `_LotSizeUnit` | `I_UnitOfMeasure` | [0..1] |
| `_GRHandlingCapacityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_GIHandlingCapacityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_SafetyTimePeriodProfile` | `I_SafetyTimePeriodProfile` | [0..1] |
| `_SafetyTimePeriodProfileText` | `I_SafetyTimePeriodProfileText` | [0..*] |
| `_ProdnPlngHeuristic` | `I_ProductHeuristic` | [0..1] |
| `_PPPlanningProcedure` | `I_ProdnPlanningProcedure` | [0..1] |
| `_ProductPlanningPackage` | `I_PlanningPackage` | [0..1] |
| `_RangeOfCvrgPrflCode` | `I_RangeOfCoverageProfile` | [0..1] |
| `_RangeOfCvrgPrflCodeText` | `I_RangeOfCoverageProfileText` | [0..*] |
| `_MRPGroupText` | `I_MRPGroupText` | [0..*] |
| `_MRPPlanningCalendarText` | `I_MRPPlanningPeriodText` | [0..*] |
| `_StorageCostsPercentageCode` | `I_StorageCostsPercentageCode` | [0..1] |
| `_PlantVH` | `I_Plant` | [0..1] |
| `_ProductProcmtProfile` | `I_ProductProcmtProfile` | [0..1] |
| `_ProductProcmtProfileText` | `I_ProductProcmtProfileText` | [0..*] |
| `_MRPSafetyStockMethod` | `I_MRPSafetyStockMethod` | [0..1] |
| `_MRPSafetyStockMethodText` | `I_MRPSafetyStockMethodText` | [0..*] |
| `_CurrencyText` | `I_CurrencyText` | [0..*] |
| `_ProdSafetyTimeMRPRlvnceText` | `I_ProdSafetyTimeMRPRlvnceText` | [0..*] |
| `_DepdntRqmtMRPRelevanceText` | `I_DepdntRqmtMRPRelevanceText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRDPLNTMRP'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_MRPResponsible']
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'MRP area data of a Product'
@ObjectModel: {
  usageType.serviceQuality: #C,
  usageType.sizeCategory : #L,
  usageType.dataClass: #MASTER
}
@VDM.viewType : #BASIC
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_ProductPlantMRP
  as select from mdma as MRPAreaData
    inner join   t001w on MRPAreaData.werks = t001w.werks
    inner join   t001k on t001k.bwkey = t001w.bwkey
    inner join   t001  on t001.bukrs = t001k.bukrs

  association [0..1] to I_MRPType                     as _MRPType                     on  $projection.MRPType = _MRPType.MRPType
  association [0..*] to I_MRPTypeText                 as _MRPTypeName                 on  $projection.MRPType = _MRPTypeName.MRPType
  association [0..1] to I_MRPLotSizingProcedure       as _LotSizingProcedure          on  $projection.LotSizingProcedure = _LotSizingProcedure.MaterialLotSizingProcedure
  association [0..*] to I_MRPLotSizingProcedureText   as _LotSizingProcedureText      on  $projection.LotSizingProcedure = _LotSizingProcedureText.MaterialLotSizingProcedure
  association [0..1] to I_StorageLocation             as _PlantInvtryManagedLoc       on  $projection.StorageLocation = _PlantInvtryManagedLoc.StorageLocation
                                                                                      and $projection.Plant           = _PlantInvtryManagedLoc.Plant
  association [1..1] to I_Product                     as _Product                     on  $projection.Product = _Product.Product
  association [0..1] to I_MRPController               as _MRPResponsible              on  $projection.MRPResponsible = _MRPResponsible.MRPController
                                                                                      and $projection.Plant          = _MRPResponsible.Plant
  association [0..1] to I_UnitOfMeasure               as _LotSizeUnit                 on  $projection.LotSizeUnit = _LotSizeUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure               as _GRHandlingCapacityUnit      on  $projection.GRHandlingCapacityUnit = _GRHandlingCapacityUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure               as _GIHandlingCapacityUnit      on  $projection.GIHandlingCapacityUnit = _GIHandlingCapacityUnit.UnitOfMeasure

  association [0..1] to I_SafetyTimePeriodProfile     as _SafetyTimePeriodProfile     on  $projection.Plant              = _SafetyTimePeriodProfile.Plant
                                                                                      and $projection.PerdPrflForSftyTme = _SafetyTimePeriodProfile.SafetyTimePeriodProfile
  association [0..*] to I_SafetyTimePeriodProfileText as _SafetyTimePeriodProfileText on  $projection.Plant              = _SafetyTimePeriodProfileText.Plant
                                                                                      and $projection.PerdPrflForSftyTme = _SafetyTimePeriodProfileText.SafetyTimePeriodProfile

  association [0..1] to I_ProductHeuristic            as _ProdnPlngHeuristic          on  $projection.ProdnPlngHeuristic = _ProdnPlngHeuristic.ProdnPlngHeuristic
  association [0..1] to I_ProdnPlanningProcedure      as _PPPlanningProcedure         on  $projection.PPPlanningProcedure = _PPPlanningProcedure.ProdnPlanningProcedure
  association [0..1] to I_PlanningPackage             as _ProductPlanningPackage      on  $projection.ProductPlanningPackage = _ProductPlanningPackage.PlanningPackage
  association [0..1] to I_RangeOfCoverageProfile      as _RangeOfCvrgPrflCode         on  $projection.Plant               = _RangeOfCvrgPrflCode.Plant
                                                                                      and $projection.RangeOfCvrgPrflCode = _RangeOfCvrgPrflCode.RangeOfCoverageProfile

  association [0..*] to I_RangeOfCoverageProfileText  as _RangeOfCvrgPrflCodeText     on  $projection.Plant               = _RangeOfCvrgPrflCodeText.Plant
                                                                                      and $projection.RangeOfCvrgPrflCode = _RangeOfCvrgPrflCodeText.RangeOfCoverageProfile
  association [0..*] to I_MRPGroupText                as _MRPGroupText                on  $projection.Plant    = _MRPGroupText.MRPPlant
                                                                                      and $projection.MRPGroup = _MRPGroupText.MRPGroup
  association [0..*] to I_MRPPlanningPeriodText       as _MRPPlanningCalendarText     on  $projection.Plant               = _MRPPlanningCalendarText.MRPPlant
                                                                                      and $projection.MRPPlanningCalendar = _MRPPlanningCalendarText.MRPPlanningCalendar
  association [0..1] to I_StorageCostsPercentageCode  as _StorageCostsPercentageCode  on  $projection.Plant                      = _StorageCostsPercentageCode.Plant
                                                                                      and $projection.StorageCostsPercentageCode = _StorageCostsPercentageCode.StorageCostsPercentageCode

  association [0..1] to I_Plant                       as _PlantVH                     on  $projection.Plant = _PlantVH.Plant

  //  association [0..1] to E_ProductPlantMRP            as _ProductPlantMRPExt      on  $projection.Product = _ProductPlantMRPExt.Product
  //                                                                                 and $projection.MRPArea = _ProductPlantMRPExt.MRPArea
  //                                                                                 and $projection.Plant   = _ProductPlantMRPExt.Plant

  association [0..1] to I_ProductProcmtProfile        as _ProductProcmtProfile        on  $projection.Plant              = _ProductProcmtProfile.Plant
                                                                                      and $projection.ProcurementSubType = _ProductProcmtProfile.ProcurementSubType
  association [0..*] to I_ProductProcmtProfileText    as _ProductProcmtProfileText    on  $projection.Plant              = _ProductProcmtProfileText.Plant
                                                                                      and $projection.ProcurementSubType = _ProductProcmtProfileText.ProcurementSubType

  association [0..1] to I_MRPSafetyStockMethod        as _MRPSafetyStockMethod        on  $projection.MRPSafetyStockMethod = _MRPSafetyStockMethod.MRPSafetyStockMethod
  association [0..*] to I_MRPSafetyStockMethodText    as _MRPSafetyStockMethodText    on  $projection.MRPSafetyStockMethod = _MRPSafetyStockMethodText.MRPSafetyStockMethod
  association [0..*] to I_CurrencyText                as _CurrencyText                on  $projection.Currency = _CurrencyText.Currency
  association [0..*] to I_ProdSafetyTimeMRPRlvnceText as _ProdSafetyTimeMRPRlvnceText  on  $projection.ProductSafetyTimeMRPRelevance = _ProdSafetyTimeMRPRlvnceText.ProductSafetyTimeMRPRelevance
  association [0..*] to I_DepdntRqmtMRPRelevanceText  as _DepdntRqmtMRPRelevanceText   on  $projection.DependentRqmtMRPRelevance = _DepdntRqmtMRPRelevanceText.DependentRqmtMRPRelevance
  
{
  key MRPAreaData.matnr                                                                      as Product,
  key MRPAreaData.berid                                                                      as MRPArea,
      @ObjectModel.foreignKey.association: '_PlantVH'
  key MRPAreaData.werks                                                                      as Plant,

      @ObjectModel.foreignKey.association: '_MRPType'
      @ObjectModel.text.association: '_MRPTypeName'
      @ObjectModel.sapObjectNodeTypeReference:'MRPType'
      MRPAreaData.dismm                                                                      as MRPType,
      @ObjectModel.foreignKey.association: '_MRPResponsible'
      @ObjectModel.sapObjectNodeTypeReference:'MRPController'
      MRPAreaData.dispo                                                                      as MRPResponsible,
      @ObjectModel.text.association:'_MRPGroupText'
      @ObjectModel.sapObjectNodeTypeReference:'MRPGroup'
      MRPAreaData.disgr                                                                      as MRPGroup,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      MRPAreaData.minbe                                                                      as ReorderThresholdQuantity,
      MRPAreaData.lfrhy                                                                      as PlanAndOrderDayDetermination,
      MRPAreaData.fxhor                                                                      as PlanningTimeFence,
      @ObjectModel.foreignKey.association: '_LotSizingProcedure'
      @ObjectModel.text.association: '_LotSizingProcedureText'
      MRPAreaData.disls                                                                      as LotSizingProcedure,
      MRPAreaData.rdprf                                                                      as RoundingProfile,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      MRPAreaData.bstrf                                                                      as LotSizeRoundingQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      MRPAreaData.bstmi                                                                      as MinimumLotSizeQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      MRPAreaData.bstma                                                                      as MaximumLotSizeQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      MRPAreaData.mabst                                                                      as MaximumStockQuantity,
      MRPAreaData.ausss                                                                      as AssemblyScrapPercent,
      @ObjectModel.foreignKey.association: '_ProductProcmtProfile'
      @ObjectModel.text.association:'_ProductProcmtProfileText'
      @ObjectModel.sapObjectNodeTypeReference:'ProcurementSubType'
      MRPAreaData.sobsl                                                                      as ProcurementSubType,
      @ObjectModel.foreignKey.association: '_PlantInvtryManagedLoc'
      MRPAreaData.lgpro                                                                      as StorageLocation,
      @ObjectModel.sapObjectNodeTypeReference:'StorageLocation'
      MRPAreaData.lgfsb                                                                      as DfltStorageLocationExtProcmt,
      @ObjectModel.text.association: '_MRPPlanningCalendarText'
      @ObjectModel.sapObjectNodeTypeReference:'MRPPlanningCalendar'
      MRPAreaData.mrppp                                                                      as MRPPlanningCalendar,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      MRPAreaData.eisbe                                                                      as SafetyStockQuantity,
      @ObjectModel.foreignKey.association: '_RangeOfCvrgPrflCode'
      @ObjectModel.text.association:'_RangeOfCvrgPrflCodeText'
      @ObjectModel.sapObjectNodeTypeReference:'MatlStkRangeOfCoverageProfile'
      MRPAreaData.rwpro                                                                      as RangeOfCvrgPrflCode,
      MRPAreaData.shzet                                                                      as SafetyDuration,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      MRPAreaData.bstfe                                                                      as FixedLotSizeQuantity,
      @Semantics.amount.currencyCode: 'Currency'
      MRPAreaData.losfx                                                                      as LotSizeIndependentCosts,
      @ObjectModel.foreignKey.association: '_StorageCostsPercentageCode'
      @ObjectModel.sapObjectNodeTypeReference:'StorageCostsPercentageCode'
      MRPAreaData.lagpr                                                                      as StorageCostsPercentageCode,
      MRPAreaData.lgrad                                                                      as SrvcLvl,
      MRPAreaData.vrbdt                                                                      as CreationDate,
      MRPAreaData.loekz                                                                      as IsMarkedForDeletion,
      @ObjectModel.foreignKey.association: '_SafetyTimePeriodProfile'
      @ObjectModel.text.association:'_SafetyTimePeriodProfileText'
      @ObjectModel.sapObjectNodeTypeReference:'MatlStkSafetyTimePeriodProfile'
      MRPAreaData.shpro                                                                      as PerdPrflForSftyTme,
      @VDM.lifecycle:{
             status: #DEPRECATED,
             successor: 'DependentRqmtMRPRelevance'
      }
      MRPAreaData.ahdis                                                                      as IsMRPDependentRqmt,
      @ObjectModel.text.association:'_DepdntRqmtMRPRelevanceText' 
      MRPAreaData.ahdis                                                                      as DependentRqmtMRPRelevance,
      MRPAreaData.pstat                                                                      as MaintenanceStatusName,
      @VDM.lifecycle:{
             status: #DEPRECATED,
             successor: 'ProductSafetyTimeMRPRelevance'
      }
      MRPAreaData.shflg                                                                      as IsSafetyTime,
      @ObjectModel.text.association:'_ProdSafetyTimeMRPRlvnceText' 
      MRPAreaData.shflg                                                                      as ProductSafetyTimeMRPRelevance,
      MRPAreaData.plifz                                                                      as PlannedDeliveryDurationInDays,
      cast(MRPAreaData.plifzx as isplanneddeliverytime preserving type )                     as IsPlannedDeliveryTime,
      //takzt                                                      as     TaktTime,
      MRPAreaData.takzt                                                                      as RqmtQtyRcptTaktTmeInWrkgDays,
      // proc / ppds fields for MRP Area
      @ObjectModel.foreignKey.association: '_PPPlanningProcedure'
      MRPAreaData.scm_rrp_type                                                               as PPPlanningProcedure,
      @ObjectModel.foreignKey.association: '_ProdnPlngHeuristic'
      MRPAreaData.scm_heur_id                                                                as ProdnPlngHeuristic,

      MRPAreaData.scm_rrp_sel_group                                                          as ProductPlanningGroup,
      @ObjectModel.foreignKey.association: '_ProductPlanningPackage'
      MRPAreaData.scm_package_id                                                             as ProductPlanningPackage,
      MRPAreaData.convh                                                                      as AdvncdPlngPPDSHorizonInDays,

      //lot size fields
      @ObjectModel.foreignKey.association: '_LotSizeUnit'
      MRPAreaData.scm_lsuom                                                                  as LotSizeUnit,
      cast (MRPAreaData.scm_target_dur as cmd_prd_target_dur_n preserving type )             as TargetDaysSupplyInWorkDays,
      cast (MRPAreaData.scm_reord_dur as cmd_prd_reord_dur_n preserving type )               as ReorderDaysSupplyInWorkDays,
      //   @ObjectModel.foreignKey.association: '_PlngCalendarPerdcLotSizing'
      MRPAreaData.scm_tstrid                                                                 as PlngCalendarPerdcLotSizing,

      // GR/GI fields
      cast (MRPAreaData.scm_grprt as cmd_prd_good_rcpt_proc_time_n preserving type )         as LocProdGoodsReceiptProcHours,
      cast (MRPAreaData.scm_giprt as cmd_prd_good_issue_proc_time_n preserving type )        as LocProdGoodsIssueProcHours,
      @Semantics.quantity.unitOfMeasure: 'GRHandlingCapacityUnit'
      MRPAreaData.scm_conhap                                                                 as GRHandlingCapacityQuantity,
      @ObjectModel.foreignKey.association: '_GRHandlingCapacityUnit'
      @Semantics.unitOfMeasure: true
      MRPAreaData.scm_hunit                                                                  as GRHandlingCapacityUnit,
      @Semantics.quantity.unitOfMeasure: 'GIHandlingCapacityUnit'
      MRPAreaData.scm_conhap_out                                                             as GIHandlingCapacityQuantity,
      @ObjectModel.foreignKey.association: '_GIHandlingCapacityUnit'
      @Semantics.unitOfMeasure: true
      MRPAreaData.scm_hunit_out                                                              as GIHandlingCapacityUnit,
      cast(MRPAreaData.scm_thruput_time  as cmd_prd_srvc_prts_thruput_time preserving type ) as SrvcPartsThroughputTimeDurn,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      MRPAreaData.scm_ppsaftystk                                                             as ParLocSafetyStockQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      MRPAreaData.scm_safty_v                                                                as VCLSafetyStockQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      MRPAreaData.scm_ppsaftystk_v                                                           as VCLParLocSafetyStockQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      MRPAreaData.scm_reord_v                                                                as VCLReorderPointQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      MRPAreaData.scm_maxstock_v                                                             as VCLMaximumStockQuantity,
      MRPAreaData.scm_scost_prcnt                                                            as CostFactorForStockHoldingVal,
      MRPAreaData.scm_proc_cost                                                              as ProductProcurementCostsVal,
      MRPAreaData.scm_ndcostwe                                                               as GoodsReceiptHandlingCost,
      MRPAreaData.scm_ndcostwa                                                               as GoodsIssueHandlingCost,
      @Semantics.quantity.unitOfMeasure: 'ConsumptionOfStorageCapUnit'
      MRPAreaData.scm_coninp                                                                 as ConsumptionOfStorageCapacity,
      @Semantics.unitOfMeasure: true
      MRPAreaData.scm_iunit                                                                  as ConsumptionOfStorageCapUnit,
      @ObjectModel.foreignKey.association: '_MRPSafetyStockMethod'
      @ObjectModel.text.association:'_MRPSafetyStockMethodText'
      MRPAreaData.sfty_stk_meth                                                              as MRPSafetyStockMethod,
      @Semantics.currencyCode: true
      t001.waers                                                                             as Currency,
      @Semantics.unitOfMeasure: true
      _Product.BaseUnit                                                                      as BaseUnit,

      MRPAreaData.maxdos_flg                                                                 as MaxDaysOfSupplyIsActive,
      MRPAreaData.maxdos_pen                                                                 as MaxDaysOfSupplyPenaltyAmount,
      MRPAreaData.saftystock_method                                                          as AdvncdPlngSftyStkMeth,
      MRPAreaData.target_stock_level_meth                                                    as AdvncdPlngTgtStkLvlMeth,
      cast(MRPAreaData.auto_det_sftystk_meth as xfeld)                                       as SftyStkMethIsAutomlyDtmnd,
      MRPAreaData.use_period_factor                                                          as PeriodFactorIsUsed,
      MRPAreaData.period_factor_value                                                        as AdvncdPlngPeriodFactorValue,
      MRPAreaData.period_factor_tds                                                          as TimeDepdntStkLvlPerdFactorVal,
      MRPAreaData.scm_scost                                                                  as LocProdStorageCostValue,
      MRPAreaData.scm_sspen                                                                  as SftyStkVioltnPnltyCostValue,

      _MRPType,
      _MRPTypeName,
      _MRPResponsible,
      _LotSizingProcedure,
      _PlantInvtryManagedLoc,
      _Product,
      _LotSizeUnit,
      _GRHandlingCapacityUnit,
      _GIHandlingCapacityUnit,
      _ProdnPlngHeuristic,
      _PPPlanningProcedure,
      _ProductPlanningPackage,
      _RangeOfCvrgPrflCode,
      _RangeOfCvrgPrflCodeText,
      _MRPGroupText,
      _LotSizingProcedureText,
      _MRPPlanningCalendarText,
      _StorageCostsPercentageCode,
      _SafetyTimePeriodProfile,
      _SafetyTimePeriodProfileText,
      _PlantVH,
      _ProductProcmtProfile,
      _ProductProcmtProfileText,
      _MRPSafetyStockMethod,
      _MRPSafetyStockMethodText,
      
      _Product._BaseUnitOfMeasureText,
      _CurrencyText ,
      _DepdntRqmtMRPRelevanceText,
      _ProdSafetyTimeMRPRlvnceText

}
```
