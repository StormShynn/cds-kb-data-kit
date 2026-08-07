---
name: I_PRODUCTPLANTBASIC
description: Productplantbasic
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
# I_PRODUCTPLANTBASIC

**Productplantbasic**

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
| `Plant` | ✓ | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `CountryOfOrigin` |  | |  |  |  |  |
| `RegionOfOrigin` |  | |  |  |  |  |
| `ProductionInvtryManagedLoc` |  | |  |  |  |  |
| `ProfileCode` |  | |  |  |  |  |
| `ProfileValidityStartDate` |  | |  |  |  |  |
| `AvailabilityCheckType` |  | |  |  |  |  |
| `FiscalYearVariant` |  | |  |  |  |  |
| `PeriodType` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `GoodsReceiptDuration` |  | |  |  |  |  |
| `MaintenanceStatusName` |  | |  | `MaintenanceStatus` |  |  |
| `IsMarkedForDeletion` |  | |  |  |  |  |
| `MRPType` |  | |  |  |  |  |
| `MRPResponsible` |  | |  |  |  |  |
| `ABCIndicator` |  | |  |  |  |  |
| `MinimumLotSizeQuantity` |  | |  |  |  |  |
| `MaximumLotSizeQuantity` |  | |  |  |  |  |
| `FixedLotSizeQuantity` |  | |  |  |  |  |
| `ConsumptionTaxCtrlCode` |  | |  |  |  |  |
| `IsCoProduct` |  | |  |  |  |  |
| `ConfigurableProduct` |  | |  |  |  |  |
| `StockDeterminationGroup` |  | |  |  |  |  |
| `HasPostToInspectionStock` |  | |  |  |  |  |
| `IsBatchManagementRequired` |  | |  |  |  |  |
| `SerialNumberProfile` |  | |  |  |  |  |
| `IsNegativeStockAllowed` |  | |  |  |  |  |
| `HasConsignmentCtrl` |  | |  | `ConsignmentControl` |  |  |
| `IsPurgAcrossPurgGroup` |  | |  |  |  |  |
| `IsInternalBatchManaged` |  | |  |  |  |  |
| `ProductCFOPCategory` |  | |  |  |  |  |
| `ProductIsExciseTaxRelevant` |  | |  |  |  |  |
| `UnderDelivToleranceLimit` |  | |  |  |  |  |
| `OverDelivToleranceLimit` |  | |  |  |  |  |
| `ProcurementType` |  | |  |  |  |  |
| `SpecialProcurementType` |  | |  | `ProcurementSubType` |  |  |
| `ProductionSchedulingProfile` |  | |  |  |  |  |
| `ProductionSupervisor` |  | |  |  |  |  |
| `SafetyStockQuantity` |  | |  |  |  |  |
| `GoodsIssueUnit` |  | |  |  |  |  |
| `SourceOfSupplyCategory` |  | |  |  |  |  |
| `ConsumptionReferenceProduct` |  | |  |  |  |  |
| `ConsumptionReferencePlant` |  | |  |  |  |  |
| `ConsumptionRefUsageEndDate` |  | |  |  |  |  |
| `ConsumptionQtyMultiplier` |  | |  |  |  |  |
| `ProductUnitGroup` |  | |  |  |  |  |
| `DistrCntrDistributionProfile` |  | |  |  |  |  |
| `ConsignmentControl` |  | |  |  |  |  |
| `GoodIssueProcessingDays` |  | |  |  |  |  |
| `PlannedDeliveryDurationInDays` |  | |  |  |  |  |
| `ProductIsCriticalPrt` |  | |  |  |  |  |
| `ProductLogisticsHandlingGroup` |  | |  |  |  |  |
| `MaterialFreightGroup` |  | |  |  |  |  |
| `OriginalBatchReferenceMaterial` |  | |  |  |  |  |
| `OriglBatchManagementIsRequired` |  | |  |  |  |  |
| `ProductConfiguration` |  | |  |  |  |  |
| `ProductMinControlTemperature` |  | |  |  |  |  |
| `ProductMaxControlTemperature` |  | |  |  |  |  |
| `ProductControlTemperatureUnit` |  | |  |  |  |  |
| `ValuationCategory` |  | |  |  |  |  |
| `BaseUnit` |  | | `_Product` | `BaseUnit` |  |  |
| `ItemUniqueIdentifierIsRelevant` |  | |  |  |  |  |
| `ItemUniqueIdentifierType` |  | |  |  |  |  |
| `ExtAllocOfItmUnqIdtIsRelevant` |  | |  |  |  |  |
| `_Product` | | ✓ | | | | |
| `_MRPController` | | ✓ | | | | |
| `_ProductStatus` | | ✓ | | | | |
| `_ProductStatusText` | | ✓ | | | | |
| `_GoodsIssueUnit` | | ✓ | | | | |
| `_UnitOfMeasureText` | | ✓ | | | | |
| `_FiscalYearVariant` | | ✓ | | | | |
| `_FiscalYearVariantDescription` | | ✓ | | | | |
| `_ConfigurableProduct` | | ✓ | | | | |
| `_ConfigurableProductName` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_ConfigurableProductName_2` | | ✓ | | | | |
| `_Text_2` | | ✓ | | | | |
| `_ABCIndicator` | | ✓ | | | | |
| `_ABCIndicatorDesc` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_Site` | | ✓ | | | | |
| `_MRPType` | | ✓ | | | | |
| `_SourceOfSupplyCategory` | | ✓ | | | | |
| `_PurchasingGroup` | | ✓ | | | | |
| `_GoodsMovementQuantity` | | ✓ | | | | |
| `_PlantProcurement` | | ✓ | | | | |
| `_ProdPlantInternationalTrade` | | ✓ | | | | |
| `_ProductPlantCosting` | | ✓ | | | | |
| `_ProductPlantForecast` | | ✓ | | | | |
| `_PlantQualityMgmt` | | ✓ | | | | |
| `_PlantSales` | | ✓ | | | | |
| `_MaterialLotSizingProcedure` | | ✓ | | | | |
| `_MaterialStock` | | ✓ | | | | |
| `_Stock` | | ✓ | | | | |
| `_CountryOfOriginText` | | ✓ | | | | |
| `_RegionText` | | ✓ | | | | |
| `_ProductStorageLocation` | | ✓ | | | | |
| `_StockDeterminationGroup` | | ✓ | | | | |
| `_StockDeterminationGroupT` | | ✓ | | | | |
| `_ProductCFOPCategory` | | ✓ | | | | |
| `_CFOPDesc` | | ✓ | | | | |
| `_PeriodType` | | ✓ | | | | |
| `_PeriodTypeText` | | ✓ | | | | |
| `_DistributionProfile` | | ✓ | | | | |
| `_DistributionProfileText` | | ✓ | | | | |
| `_PlantESPP` | | ✓ | | | | |
| `_ProdControlTemperatureUnit` | | ✓ | | | | |
| `_ProdCtrlTemperatureUnitText` | | ✓ | | | | |
| `_ProductFreightGroup` | | ✓ | | | | |
| `_ProductFreightGroupText` | | ✓ | | | | |
| `_ConsignmentControlText` | | ✓ | | | | |
| `_ProdLogisticsHandlingGroupT` | | ✓ | | | | |
| `_ProdProcurementTypeText` | | ✓ | | | | |
| `_ProductDescription_2` | | ✓ | | | | |
| `_CnsmpnReferenceProductText` | | ✓ | | | | |
| `_OriglReferenceMaterialText` | | ✓ | | | | |
| `_SerialNumberProfileText` | | ✓ | | | | |
| `_MRPTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [1..1] |
| `_MRPController` | `I_MRPController` | [0..1] |
| `_ProductStatus` | `I_ProductStatus` | [0..1] |
| `_ProductStatusText` | `I_ProductStatusText` | [0..*] |
| `_GoodsIssueUnit` | `I_UnitOfMeasure` | [0..1] |
| `_UnitOfMeasureText` | `I_UnitOfMeasureText` | [0..*] |
| `_FiscalYearVariant` | `I_FiscalYearVariant` | [0..1] |
| `_FiscalYearVariantDescription` | `I_FiscalYearVariantText` | [0..*] |
| `_ConfigurableProduct` | `I_Product` | [0..1] |
| `_ConfigurableProductName` | `I_ProductDescription` | [0..*] |
| `_Text` | `I_ProductDescription` | [0..*] |
| `_ConfigurableProductName_2` | `I_ProductDescription_2` | [0..*] |
| `_Text_2` | `I_ProductDescription_2` | [0..*] |
| `_ABCIndicator` | `I_Prodabclassfctn` | [0..1] |
| `_ABCIndicatorDesc` | `I_Prodabclassfctntxt` | [0..*] |
| `_Plant` | `I_Plant` | [1..1] |
| `_Site` | `I_Site` | [0..1] |
| `_MRPType` | `I_MRPType` | [0..1] |
| `_SourceOfSupplyCategory` | `I_SourceOfSupplyCategory` | [0..1] |
| `_PurchasingGroup` | `I_PurchasingGroup` | [0..1] |
| `_GoodsMovementQuantity` | `I_ProductWorkScheduling` | [0..1] |
| `_PlantProcurement` | `I_Productplantprocurement` | [0..1] |
| `_ProdPlantInternationalTrade` | `I_ProductPlantIntlTrd` | [0..1] |
| `_ProductPlantCosting` | `I_ProductPlantCosting` | [0..1] |
| `_ProductPlantForecast` | `I_ProductPlantForecast` | [0..1] |
| `_PlantQualityMgmt` | `I_Productplantqtmanagement` | [0..1] |
| `_PlantSales` | `I_Productplantsales` | [0..1] |
| `_MaterialLotSizingProcedure` | `I_ProductSupplyPlanning` | [1..1] |
| `_ProductPlantExt` | `E_Productplant` | [0..1] |
| `_MaterialStock` | `I_MaterialStock_2` | [0..*] |
| `_Stock` | `I_MaterialStock` | [0..*] |
| `_CountryOfOriginText` | `I_CountryText` | [0..*] |
| `_RegionText` | `I_RegionText` | [0..*] |
| `_ProductStorageLocation` | `I_ProductStorageLocation` | [0..*] |
| `_StockDeterminationGroup` | `I_StockDeterminationGroup` | [0..1] |
| `_StockDeterminationGroupT` | `I_StockDeterminationGroupText` | [0..*] |
| `_ProductCFOPCategory` | `I_BR_CFOPCategory` | [0..1] |
| `_CFOPDesc` | `I_BR_CFOPCategoryText` | [0..*] |
| `_PeriodType` | `I_ProductConsumptionPeriod` | [0..1] |
| `_PeriodTypeText` | `I_ProductConsumptionPeriodText` | [0..*] |
| `_DistributionProfile` | `I_ProductDistributionProfile` | [0..1] |
| `_DistributionProfileText` | `I_ProductDistributionProfileT` | [0..*] |
| `_PlantESPP` | `I_ProductPlantESPP` | [0..1] |
| `_ProdControlTemperatureUnit` | `I_UnitOfMeasure` | [0..1] |
| `_ProdCtrlTemperatureUnitText` | `I_UnitOfMeasureText` | [0..*] |
| `_ProductFreightGroup` | `I_MaterialFreightGroup` | [0..1] |
| `_ProductFreightGroupText` | `I_MaterialFreightGroupText` | [0..*] |
| `_ConsignmentControlText` | `I_ConsignmentControlText` | [0..*] |
| `_ProdLogisticsHandlingGroupT` | `I_ProdLogisticsHandlingGroupT` | [0..*] |
| `_ProdProcurementTypeText` | `I_ProdProcurementTypeText` | [0..*] |
| `_ProductDescription_2` | `I_ProductDescription_2` | [0..*] |
| `_CnsmpnReferenceProductText` | `I_ProductDescription_2` | [0..*] |
| `_OriglReferenceMaterialText` | `I_ProductDescription_2` | [0..*] |
| `_SerialNumberProfileText` | `I_SerialNumberProfileText` | [0..*] |
| `_MRPTypeText` | `I_MRPTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRDPLANTBASIC'
@VDM.viewType: #BASIC
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Product Plant'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #XL
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl: {
    authorizationCheck: #CHECK,
    privilegedAssociations: [ '_MRPController' ]
}
@Metadata.ignorePropagatedAnnotations:true
@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture :{
          automatic: false,
          mapping: [{ viewElement: ['PRODUCT', 'PLANT'],
                      role: #MAIN,
                      table: 'MARC',
                      tableElement: ['MATNR', 'WERKS']},
                    { viewElement: ['PRODUCT'],
                      role: #LEFT_OUTER_TO_ONE_JOIN,
                      table: 'MARA',
                      tableElement: ['MATNR']}
                    ]
           }
     }
}
@ObjectModel.representativeKey: 'Product'
@Analytics.internalName:#LOCAL
@Metadata.allowExtensions:true
@ObjectModel.sapObjectNodeType.name:'ProductPlant'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #ANALYTICAL_DIMENSION,
                                      #EXTRACTION_DATA_SOURCE
]

define view I_ProductPlantBasic
  as select from P_ProductPlantBasic as Plant

  association [1..1] to I_Product                      as _Product                      on  $projection.Product = _Product.Product
  association [0..1] to I_MRPController                as _MRPController                on  $projection.Plant          = _MRPController.Plant
                                                                                        and $projection.MRPResponsible = _MRPController.MRPController

  association [0..1] to I_ProductStatus                as _ProductStatus                on  $projection.ProfileCode = _ProductStatus.Status
  association [0..*] to I_ProductStatusText            as _ProductStatusText            on  $projection.ProfileCode = _ProductStatusText.Status
  association [0..1] to I_UnitOfMeasure                as _GoodsIssueUnit               on  $projection.GoodsIssueUnit = _GoodsIssueUnit.UnitOfMeasure
  association [0..*] to I_UnitOfMeasureText            as _UnitOfMeasureText            on  $projection.GoodsIssueUnit = _UnitOfMeasureText.UnitOfMeasure
  association [0..1] to I_FiscalYearVariant            as _FiscalYearVariant            on  $projection.FiscalYearVariant = _FiscalYearVariant.FiscalYearVariant
  association [0..*] to I_FiscalYearVariantText        as _FiscalYearVariantDescription on  $projection.FiscalYearVariant = _FiscalYearVariantDescription.FiscalYearVariant

  association [0..1] to I_Product                      as _ConfigurableProduct          on  $projection.ConfigurableProduct = _ConfigurableProduct.Product
  association [0..*] to I_ProductDescription           as _ConfigurableProductName      on  $projection.ConfigurableProduct = _ConfigurableProductName.Product

  association [0..*] to I_ProductDescription           as _Text                         on  $projection.Product = _Text.Product

  association [0..*] to I_ProductDescription_2         as _ConfigurableProductName_2    on  $projection.ConfigurableProduct = _ConfigurableProductName_2.Product
  association [0..*] to I_ProductDescription_2         as _Text_2                       on  $projection.Product = _Text_2.Product

  association [0..1] to I_Prodabclassfctn              as _ABCIndicator                 on  $projection.ABCIndicator = _ABCIndicator.MaterialABCClassification
  association [0..*] to I_Prodabclassfctntxt           as _ABCIndicatorDesc             on  $projection.ABCIndicator = _ABCIndicatorDesc.MaterialABCClassification

  association [1..1] to I_Plant                        as _Plant                        on  $projection.Plant = _Plant.Plant
  association [0..1] to I_Site                         as _Site                         on  $projection.Plant = _Site.Site
  association [0..1] to I_MRPType                      as _MRPType                      on  $projection.MRPType = _MRPType.MRPType
  association [0..1] to I_SourceOfSupplyCategory       as _SourceOfSupplyCategory       on  $projection.SourceOfSupplyCategory = _SourceOfSupplyCategory.SourceOfSupplyCategory
  association [0..1] to I_PurchasingGroup              as _PurchasingGroup              on  $projection.PurchasingGroup = _PurchasingGroup.PurchasingGroup


  association [0..1] to I_ProductWorkScheduling        as _GoodsMovementQuantity        on  $projection.Product = _GoodsMovementQuantity.Product
                                                                                        and $projection.Plant   = _GoodsMovementQuantity.Plant

  association [0..1] to I_Productplantprocurement      as _PlantProcurement             on  $projection.Product = _PlantProcurement.Product
                                                                                        and $projection.Plant   = _PlantProcurement.Plant

  association [0..1] to I_ProductPlantIntlTrd          as _ProdPlantInternationalTrade  on  $projection.Product = _ProdPlantInternationalTrade.Product
                                                                                        and $projection.Plant   = _ProdPlantInternationalTrade.Plant

  association [0..1] to I_ProductPlantCosting          as _ProductPlantCosting          on  $projection.Product = _ProductPlantCosting.Product
                                                                                        and $projection.Plant   = _ProductPlantCosting.Plant

  association [0..1] to I_ProductPlantForecast         as _ProductPlantForecast         on  $projection.Product = _ProductPlantForecast.Product
                                                                                        and $projection.Plant   = _ProductPlantForecast.Plant

  association [0..1] to I_Productplantqtmanagement     as _PlantQualityMgmt             on  $projection.Product = _PlantQualityMgmt.Product
                                                                                        and $projection.Plant   = _PlantQualityMgmt.Plant

  association [0..1] to I_Productplantsales            as _PlantSales                   on  $projection.Product = _PlantSales.Product
                                                                                        and $projection.Plant   = _PlantSales.Plant

  association [1..1] to I_ProductSupplyPlanning        as _MaterialLotSizingProcedure   on  $projection.Product = _MaterialLotSizingProcedure.Product
                                                                                        and $projection.Plant   = _MaterialLotSizingProcedure.Plant



  association [0..1] to E_Productplant                 as _ProductPlantExt              on  $projection.Product = _ProductPlantExt.Product
                                                                                        and $projection.Plant   = _ProductPlantExt.Plant


  association [0..*] to I_MaterialStock_2              as _MaterialStock                on  $projection.Product = _MaterialStock.Material
                                                                                        and $projection.Plant   = _MaterialStock.Plant

  association [0..*] to I_MaterialStock                as _Stock                        on  $projection.Product = _Stock.Material
                                                                                        and $projection.Plant   = _Stock.Plant

  //Start: enterprise search help (ESH) related associations------------------------------------------------------------------------------------
  //These associations are required in I_ProductPlant as N_ProductPlant has these associations
  //There can be no associations in N_ProductPlant which are not present in I_ProductPlant
  association [0..*] to I_CountryText                  as _CountryOfOriginText          on  $projection.CountryOfOrigin = _CountryOfOriginText.Country
  association [0..*] to I_RegionText                   as _RegionText                   on  $projection.CountryOfOrigin = _RegionText.Country
  association [0..*] to I_ProductStorageLocation       as _ProductStorageLocation       on  $projection.Product = _ProductStorageLocation.Product
                                                                                        and $projection.Plant   = _ProductStorageLocation.Plant

  //End of ESH related associations-------------------------------------------------------------------------------------------------------------
  association [0..1] to I_StockDeterminationGroup      as _StockDeterminationGroup      on  $projection.Plant                   = _StockDeterminationGroup.Plant
                                                                                        and $projection.StockDeterminationGroup = _StockDeterminationGroup.StockDeterminationGroup

  association [0..*] to I_StockDeterminationGroupText  as _StockDeterminationGroupT     on  $projection.Plant                   = _StockDeterminationGroupT.Plant
                                                                                        and $projection.StockDeterminationGroup = _StockDeterminationGroupT.StockDeterminationGroup

  association [0..1] to I_BR_CFOPCategory              as _ProductCFOPCategory          on  $projection.ProductCFOPCategory = _ProductCFOPCategory.BR_CFOPCategory
  association [0..*] to I_BR_CFOPCategoryText          as _CFOPDesc                     on  $projection.ProductCFOPCategory = _CFOPDesc.BR_CFOPCategory

  association [0..1] to I_ProductConsumptionPeriod     as _PeriodType                   on  $projection.PeriodType = _PeriodType.PeriodType
  association [0..*] to I_ProductConsumptionPeriodText as _PeriodTypeText               on  $projection.PeriodType = _PeriodTypeText.PeriodType

  association [0..1] to I_ProductDistributionProfile   as _DistributionProfile          on  $projection.DistrCntrDistributionProfile = _DistributionProfile.ProductDistributionProfile
  association [0..*] to I_ProductDistributionProfileT  as _DistributionProfileText      on  $projection.DistrCntrDistributionProfile = _DistributionProfileText.ProductDistributionProfile

  association [0..1] to I_ProductPlantESPP             as _PlantESPP                    on  $projection.Product = _PlantESPP.Product
                                                                                        and $projection.Plant   = _PlantESPP.Plant

  //  association [0..1] to P_Productplantreferences       as _PlantReference               on  $projection.Product  = _PlantReference.Product
  //                                                                                        and $projection.Plant    = _PlantReference.Plant
  association [0..1] to I_UnitOfMeasure                as _ProdControlTemperatureUnit   on  $projection.ProductControlTemperatureUnit = _ProdControlTemperatureUnit.UnitOfMeasure
  association [0..*] to I_UnitOfMeasureText            as _ProdCtrlTemperatureUnitText  on  $projection.ProductControlTemperatureUnit = _ProdCtrlTemperatureUnitText.UnitOfMeasure

  association [0..1] to I_MaterialFreightGroup         as _ProductFreightGroup          on  $projection.MaterialFreightGroup = _ProductFreightGroup.MaterialFreightGroup
  association [0..*] to I_MaterialFreightGroupText     as _ProductFreightGroupText      on  $projection.MaterialFreightGroup = _ProductFreightGroupText.MaterialFreightGroup

  association [0..*] to I_ConsignmentControlText       as _ConsignmentControlText       on  $projection.ConsignmentControl = _ConsignmentControlText.ConsignmentControl
  association [0..*] to I_ProdLogisticsHandlingGroupT  as _ProdLogisticsHandlingGroupT  on  $projection.ProductLogisticsHandlingGroup = _ProdLogisticsHandlingGroupT.ProductLogisticsHandlingGroup
  association [0..*] to I_ProdProcurementTypeText      as _ProdProcurementTypeText      on  $projection.ProcurementType = _ProdProcurementTypeText.ProcurementType

  association [0..*] to I_ProductDescription_2         as _ProductDescription_2         on  $projection.Product = _ProductDescription_2.Product
  association [0..*] to I_ProductDescription_2         as _CnsmpnReferenceProductText   on  $projection.ConsumptionReferenceProduct  = _CnsmpnReferenceProductText .Product
  association [0..*] to I_ProductDescription_2         as _OriglReferenceMaterialText   on  $projection.OriginalBatchReferenceMaterial = _OriglReferenceMaterialText.Product
  association [0..*] to I_SerialNumberProfileText      as _SerialNumberProfileText      on  $projection.SerialNumberProfile = _SerialNumberProfileText.SerialNumberProfile
  association [0..*] to I_MRPTypeText                  as _MRPTypeText                  on  $projection.MRPType = _MRPTypeText.MRPType
{
         //@ObjectModel.foreignKey.association: '_Product'
         @Consumption.valueHelpDefinition: [
          { entity:  { name:    'I_ProductStdVH',
                       element: 'Product' },
            useAsTemplate: true
          }]
         @ObjectModel.text.association: '_ProductDescription_2'
  key    Product,
         @ObjectModel.foreignKey.association: '_Plant'
         @Consumption.valueHelpDefinition: [
           { entity:  { name:    'I_PlantStdVH',
                        element: 'Plant' },
            useAsTemplate: true
           }]
  key    Plant,
         @ObjectModel.foreignKey.association: '_PurchasingGroup'
         PurchasingGroup,
         @ObjectModel.text.association: '_CountryOfOriginText'
         @Consumption.valueHelpDefinition: [
           { entity:  { name:    'I_CountryVH',
             element: 'Country' },
             useAsTemplate: true
           }]
         CountryOfOrigin,
         @Consumption.valueHelpDefinition: [
           { entity:  { name:    'I_RegionVH', element: 'Region' },
             additionalBinding: [{ element: 'Country', localElement: 'CountryOfOrigin' }]
             , useAsTemplate: true
           }]
         RegionOfOrigin,
         @ObjectModel.sapObjectNodeTypeReference:'StorageLocation'
         ProductionInvtryManagedLoc,


         @ObjectModel : {
            foreignKey.association: '_ProductStatus',
            text.association: '_ProductStatusText'
         }
         @ObjectModel.sapObjectNodeTypeReference:'ProductProfileCode'
         @Consumption.valueHelpDefinition: [
           { entity:  { name:    'I_ProductStatus',
                        element: 'Status' },
             useAsTemplate: true
           }]
         ProfileCode,
         ProfileValidityStartDate,
         AvailabilityCheckType,

         @ObjectModel:{
          foreignKey.association: '_FiscalYearVariant',
          text.association: '_FiscalYearVariantDescription'
         }
         FiscalYearVariant,

         @ObjectModel:{
          foreignKey.association: '_PeriodType',
          text.association: '_PeriodTypeText'
         }
         @ObjectModel.sapObjectNodeTypeReference:'ProductConsumptionPeriodType'
         @Consumption.valueHelpDefinition: [
           { entity:  { name:    'I_ProductConsumptionPeriod',
                        element: 'PeriodType' },
             useAsTemplate: true
           }]
         PeriodType,
         @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProfitCenterStdVH', element : 'ProfitCenter'}, useAsTemplate: true }]
         ProfitCenter,

         GoodsReceiptDuration,
         MaintenanceStatus  as MaintenanceStatusName,
         IsMarkedForDeletion,


         @ObjectModel.foreignKey.association: '_MRPType'
         @ObjectModel.sapObjectNodeTypeReference:'MRPType'
         @ObjectModel.text.association: '_MRPTypeText'
         @Consumption.valueHelpDefinition:[{ entity : { name: 'I_MRPTypeVH', element : 'MRPType'} , useAsTemplate: true }]
         MRPType,
         @ObjectModel.foreignKey.association: '_MRPController'
         @ObjectModel.sapObjectNodeTypeReference:'MRPController'
         MRPResponsible,
         @ObjectModel.sapObjectNodeTypeReference:'ProdConsumptionValueCategory'
         @Consumption.valueHelpDefinition: [
           { entity:  { name:    'I_Prodabclassfctn',
                        element: 'MaterialABCClassification' },
             useAsTemplate: true
           }]
         @ObjectModel.text.association: '_ABCIndicatorDesc'
         ABCIndicator,
         @Semantics.quantity.unitOfMeasure: 'BaseUnit'
         MinimumLotSizeQuantity,
         @Semantics.quantity.unitOfMeasure: 'BaseUnit'
         MaximumLotSizeQuantity,
         @Semantics.quantity.unitOfMeasure: 'BaseUnit'
         FixedLotSizeQuantity,


         ConsumptionTaxCtrlCode,
         IsCoProduct,

         //--[ GENERATED:012:29JlHNUf7jY4nhtQM3fYJ0
         @Consumption.valueHelpDefinition: [
           { entity:  { name:    'I_ProductStdVH',
                        element: 'Product' }
           }]
         // ]--GENERATED
         @ObjectModel:{
           foreignKey.association: '_ConfigurableProduct',
           text.association: '_ConfigurableProductName'
         }
         ConfigurableProduct,

         @ObjectModel:{
            foreignKey.association: '_StockDeterminationGroup',
            text.association: '_StockDeterminationGroupT'
          }
          @Consumption.valueHelpDefinition: [
          { entity:  { name:    'I_StockDeterminationGroup',
                       element: 'StockDeterminationGroup' },
            useAsTemplate: true
           }]
         StockDeterminationGroup,

         HasPostToInspectionStock,
         IsBatchManagementRequired,

         @ObjectModel.text.association: '_SerialNumberProfileText'
         @Consumption.valueHelpDefinition:[{ entity : { name: 'I_SerialNumberProfileVH', element : 'SerialNumberProfile'}, useAsTemplate: true }]
         SerialNumberProfile,
         IsNegativeStockAllowed,

         ConsignmentControl as HasConsignmentCtrl,

         IsPurgAcrossPurgGroup,
         IsInternalBatchManaged,


         ProductCFOPCategory,

         //Excise Tax Relevance Indicator "15.4.2019
         ProductIsExciseTaxRelevant,

         -- Added on 21.4.16 not relevent for Product master

         UnderDelivToleranceLimit,
         OverDelivToleranceLimit,
         @ObjectModel.sapObjectNodeTypeReference:'ProcurementType'
         @Consumption.valueHelpDefinition: [
           { entity:  { name:    'I_ProdProcurementType',
                        element: 'ProcurementType' },
             useAsTemplate: true
           }]
         @ObjectModel.text.association: '_ProdProcurementTypeText'
         ProcurementType,
         ProcurementSubType as SpecialProcurementType,
         ProductionSchedulingProfile,
         ProductionSupervisor,
         @Semantics.quantity.unitOfMeasure: 'BaseUnit'
         SafetyStockQuantity,
         //
         //         --Retail fields Addd on 21.4.16

         @Semantics.unitOfMeasure: true
         @ObjectModel.foreignKey.association: '_GoodsIssueUnit'
         @ObjectModel.text.association: '_UnitOfMeasureText'
         @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UnitOfMeasureStdVH', element : 'UnitOfMeasure'} , useAsTemplate: true }]
         GoodsIssueUnit,
         @ObjectModel.foreignKey.association: '_SourceOfSupplyCategory'
         SourceOfSupplyCategory,
         @Consumption.valueHelpDefinition: [
          { entity:  { name:    'I_ProductStdVH',
                       element: 'Product' },
            useAsTemplate: true
          }]
         @ObjectModel.text.association: '_CnsmpnReferenceProductText'
         ConsumptionReferenceProduct,
         @Consumption.valueHelpDefinition: [
           { entity:  { name:    'I_PlantStdVH',
                        element: 'Plant' },
            useAsTemplate: true
           }]
         ConsumptionReferencePlant,
         ConsumptionRefUsageEndDate,
         ConsumptionQtyMultiplier,
         ProductUnitGroup,
         @ObjectModel:{
           foreignKey.association: '_DistributionProfile',
           text.association: '_DistributionProfileText'
         }
         @Consumption.valueHelpDefinition: [
           { entity:  { name:    'I_ProdDistributionProfileStdVH',
                        element: 'ProductDistributionProfile' },
            useAsTemplate: true
           }]
         DistrCntrDistributionProfile,
         @Consumption.valueHelpDefinition: [
           { entity:  { name:    'I_ConsignmentControl',
                        element: 'ConsignmentControl' },
            useAsTemplate: true
           }]
         @ObjectModel.text.association: '_ConsignmentControlText'
         ConsignmentControl,
         GoodIssueProcessingDays,
         PlannedDeliveryDurationInDays,

         // New fields from MDG model, as part of unified API development
         ProductIsCriticalPrt,
         @ObjectModel.sapObjectNodeTypeReference:'ProductLogisticsHandlingGroup'
         @Consumption.valueHelpDefinition: [
           { entity:  { name:    'I_ProdLogisticsHandlingGroupVH',
                        element: 'ProductLogisticsHandlingGroup' },
            useAsTemplate: true
           }]
         @ObjectModel.text.association: '_ProdLogisticsHandlingGroupT'
         ProductLogisticsHandlingGroup,

         @ObjectModel:{
            foreignKey.association: '_ProductFreightGroup',
            text.association: '_ProductFreightGroupText'
         }
         MaterialFreightGroup,
         @Consumption.valueHelpDefinition: [
          { entity:  { name:    'I_ProductStdVH',
                       element: 'Product' },
            useAsTemplate: true
          }]
         @ObjectModel.text.association: '_OriglReferenceMaterialText'
         OriginalBatchReferenceMaterial,
         OriglBatchManagementIsRequired,
         // added on CRM request
         ProductConfiguration,

         // Transportation Temperature Control Fields
         @Semantics.quantity.unitOfMeasure: 'ProductControlTemperatureUnit'
         ProductMinControlTemperature,
         @Semantics.quantity.unitOfMeasure: 'ProductControlTemperatureUnit'
         ProductMaxControlTemperature,
         @Semantics.unitOfMeasure: true
         @ObjectModel.foreignKey.association: '_ProdControlTemperatureUnit'
         @ObjectModel.text.association: '_ProdCtrlTemperatureUnitText'
         @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UnitOfMeasureStdVH', element : 'UnitOfMeasure'}, useAsTemplate: true }]
         ProductControlTemperatureUnit,
         ValuationCategory,
         @Semantics.unitOfMeasure: true
         @ObjectModel.text.association: '_UnitOfMeasureText'
         @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UnitOfMeasureStdVH', element : 'UnitOfMeasure'}, useAsTemplate: true }]
         _Product.BaseUnit  as BaseUnit,

         // Addition of Item UID fields, as part of MM17 Deprecation
         @Semantics.booleanIndicator: true
         ItemUniqueIdentifierIsRelevant,
         ItemUniqueIdentifierType,
         @Semantics.booleanIndicator: true
         ExtAllocOfItmUnqIdtIsRelevant,

         _Product,
         _Plant,
         _Site,
         _MRPController,
         _MRPType,
         _SourceOfSupplyCategory,
         _PurchasingGroup,
         _Text,
         _Text_2,
         _ABCIndicator,
         _ABCIndicatorDesc,
         _GoodsMovementQuantity,
         _PlantProcurement,
         _ProdPlantInternationalTrade,
         _ProductPlantCosting,
         _ProductPlantForecast,
         _PlantQualityMgmt,
         _PlantSales,
         _MaterialLotSizingProcedure,
         _GoodsIssueUnit,
         _UnitOfMeasureText,
         _ProductStatus,
         _ProductStatusText,
         _FiscalYearVariant,
         _FiscalYearVariantDescription,
         _ConfigurableProduct,
         _ConfigurableProductName,
         _ConfigurableProductName_2,
          @API.element.releaseState: #DEPRECATED
          @API.element.successor: '_MaterialStock'
         _Stock,

         //Start of ESH related associations---------------------------
         _CountryOfOriginText,
         _RegionText,
         _ProductStorageLocation,
         //End of ESH related associations------------------------------
         _PlantESPP,
         _StockDeterminationGroup,
         _StockDeterminationGroupT,
         _ProductCFOPCategory,
         _CFOPDesc,
         _PeriodType,
         _PeriodTypeText,
         _DistributionProfile,
         _DistributionProfileText,
         //_PlantReference
         _ProdControlTemperatureUnit,
         _ProdCtrlTemperatureUnitText,
         _ProductFreightGroup,
         _ProductFreightGroupText,
         _MaterialStock,
         _ConsignmentControlText,
         _ProdLogisticsHandlingGroupT,
         _ProdProcurementTypeText,
         @Analytics.hidden: true
         _ProductDescription_2,
         _CnsmpnReferenceProductText,
         _OriglReferenceMaterialText,
         _SerialNumberProfileText,
         _MRPTypeText

}
```
