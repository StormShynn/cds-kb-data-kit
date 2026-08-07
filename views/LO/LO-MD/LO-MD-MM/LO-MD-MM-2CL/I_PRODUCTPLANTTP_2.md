---
name: I_PRODUCTPLANTTP_2
description: Productplanttp 2
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
  - product
  - plant
  - component:LO-MD-MM-2CL
  - lob:Logistics General
  - bo:Plant
---
# I_PRODUCTPLANTTP_2

**Productplanttp 2**

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
| `ProfileCode` |  | |  |  |
| `ProfileValidityStartDate` |  | |  |  |
| `FiscalYearVariant` |  | |  |  |
| `PeriodType` |  | |  |  |
| `ProfitCenter` |  | |  |  |
| `IsMarkedForDeletion` |  | |  |  |
| `ConfigurableProduct` |  | |  |  |
| `StockDeterminationGroup` |  | |  |  |
| `IsBatchManagementRequired` |  | |  |  |
| `SerialNumberProfile` |  | |  |  |
| `IsNegativeStockAllowed` |  | |  |  |
| `ProductCFOPCategory` |  | |  |  |
| `ProductIsExciseTaxRelevant` |  | |  |  |
| `GoodsIssueUnit` |  | |  |  |
| `DistrCntrDistributionProfile` |  | |  |  |
| `ProductIsCriticalPrt` |  | |  |  |
| `ProductLogisticsHandlingGroup` |  | |  |  |
| `ProductFreightGroup` |  | |  |  |
| `OriginalBatchReferenceProduct` |  | |  |  |
| `ProductMinControlTemperature` |  | |  |  |
| `ProductMaxControlTemperature` |  | |  |  |
| `ProductControlTemperatureUnit` |  | |  |  |
| `BaseUnit` |  | |  |  |
| `_Product` | | ✓ | | |
| `_ProductPlantWorkScheduling` | | ✓ | | |
| `_ProductPlantCosting` | | ✓ | | |
| `_ProductPlantSupplyPlanning` | | ✓ | | |
| `_ProductPlantPurchaseTax` | | ✓ | | |
| `_ProductPlantQualityManagement` | | ✓ | | |
| `_ProductPlantProcurement` | | ✓ | | |
| `_ProductPlantSales` | | ✓ | | |
| `_ProdPlantInternationalTrade` | | ✓ | | |
| `_ProductPlantForecast` | | ✓ | | |
| `_ProductPlantStorage` | | ✓ | | |
| `_ProductPlantStorageLocation` | | ✓ | | |
| `_ProductPlantMRP` | | ✓ | | |
| `_ProductPlantInspTypeSetting` | | ✓ | | |
| `_ProductPlantPlanning` | | ✓ | | |
| `_ProdPlntMRPText` | | ✓ | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Product Plant - TP'
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel: {
    usageType.serviceQuality: #A,
    usageType.sizeCategory : #L,
    usageType.dataClass: #MASTER,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    modelingPattern: #TRANSACTIONAL_INTERFACE
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_ProductPlantTP_2
  as projection on R_ProductPlantTP as ProductPlant
{
  key Product,
  key Plant,
      ProfileCode,
      ProfileValidityStartDate,
      FiscalYearVariant,
      PeriodType,
      ProfitCenter,
      @Semantics.booleanIndicator: true
      IsMarkedForDeletion,
      ConfigurableProduct,
      StockDeterminationGroup,
      @Semantics.booleanIndicator: true
      IsBatchManagementRequired,
      SerialNumberProfile,
      @Semantics.booleanIndicator: true
      IsNegativeStockAllowed,
      ProductCFOPCategory,
      @Semantics.booleanIndicator: true
      ProductIsExciseTaxRelevant,
      GoodsIssueUnit,
      DistrCntrDistributionProfile,
      @Semantics.booleanIndicator: true
      ProductIsCriticalPrt,
      ProductLogisticsHandlingGroup,
      ProductFreightGroup,
      OriginalBatchReferenceProduct,
      @Semantics.quantity.unitOfMeasure: 'ProductControlTemperatureUnit'
      ProductMinControlTemperature,
      @Semantics.quantity.unitOfMeasure: 'ProductControlTemperatureUnit'
      ProductMaxControlTemperature,
      ProductControlTemperatureUnit,
      BaseUnit,
      /* Associations */
      _Product                       : redirected to parent I_ProductTP_2,
      _ProductPlantWorkScheduling    : redirected to composition child I_ProdPlantWorkSchedulingTP_2,
      _ProductPlantCosting           : redirected to composition child I_ProductPlantCostingTP_2,
      _ProductPlantSupplyPlanning    : redirected to composition child I_ProdPlantSupplyPlanningTP_2,
      @Semantics.valueRange.maximum: '1'
      _ProductPlantPurchaseTax       : redirected to composition child I_ProductPlantPurchaseTaxTP_2,
      _ProductPlantQualityManagement : redirected to composition child I_ProdPlntQltyManagementTP_2,
      _ProductPlantProcurement       : redirected to composition child I_ProductPlantProcurementTP_2,
      _ProductPlantSales             : redirected to composition child I_ProductPlantSalesTP_2,
      _ProdPlantInternationalTrade   : redirected to composition child I_ProdPlntIntlTradeTP_2,
      _ProductPlantForecast          : redirected to composition child I_ProductPlantForecastTP_2,
      _ProductPlantStorage           : redirected to composition child I_ProductPlantStorageTP_2,
      _ProductPlantStorageLocation   : redirected to composition child I_ProdPlantStorageLocationTP_2,
      _ProductPlantMRP               : redirected to composition child I_ProductPlantMRPTP_2,
      _ProductPlantInspTypeSetting   : redirected to composition child I_ProdPlntInspTypeSettingTP_2,
      _ProductPlantPlanning          : redirected to composition child I_ProductPlantPlanningTP_2,
      @Semantics.valueRange.maximum: '1' 
      _ProdPlntMRPText               : redirected to composition child I_ProdPlntMRPTextTP_2 
}
```
