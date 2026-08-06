---
name: I_PRODUCTCOSTESTIMATETP
description: Productcostestimatetp
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-PC
  - CO-PC-PCP
  - interface-view
  - transactional-processing
  - product
  - component:CO-PC-PCP-2CL
  - lob:Controlling
---
# I_PRODUCTCOSTESTIMATETP

**Productcostestimatetp**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CostingReferenceObject` | `CostingReferenceObject` |
| key `CostEstimate` | `CostEstimate` |
| key `CostingType` | `CostingType` |
| key `CostingDate` | `CostingDate` |
| key `CostingVersion` | `CostingVersion` |
| key `ValuationVariant` | `ValuationVariant` |
| key `CostIsEnteredManually` | `CostIsEnteredManually` |
| `Product` | `Product` |
| `Plant` | `Plant` |
| `ValuationArea` | `ValuationArea` |
| `ValuationType` | `ValuationType` |
| `ControllingArea` | `ControllingArea` |
| `CompanyCode` | `CompanyCode` |
| `CostEstimateValidityStartDate` | `CostEstimateValidityStartDate` |
| `CostEstimateValidityEndDate` | `CostEstimateValidityEndDate` |
| `ValuationDate` | `ValuationDate` |
| `QuantityStructureDate` | `QuantityStructureDate` |
| `ProductionVersion` | `ProductionVersion` |
| `BillOfMaterial` | `BillOfMaterial` |
| `ProductBOMUsage` | `ProductBOMUsage` |
| `AlternativeBillOfMaterial` | `AlternativeBillOfMaterial` |
| `TaskListGroup` | `TaskListGroup` |
| `TaskListType` | `TaskListType` |
| `TaskListGroupCounter` | `TaskListGroupCounter` |
| `CostingLotSize` | `CostingLotSize` |
| `ValuationQuantityUnit` | `ValuationQuantityUnit` |
| `CostEstimateCreatedByUser` | `CostEstimateCreatedByUser` |
| `CostEstimateCreationDate` | `CostEstimateCreationDate` |
| `CostEstimateStatus` | `CostEstimateStatus` |
| `CostEstimateStatusCriticality` | `CostEstimateStatusCriticality` |
| `CostEstimateIsReleased` | `CostEstimateIsReleased` |
| `CostingSheet` | `CostingSheet` |
| `CostingOverheadType` | `CostingOverheadType` |
| `ProductValuationStrategy` | `ProductValuationStrategy` |
| `ProductValnPurgInfoRecdStrgy` | `ProductValnPurgInfoRecdStrgy` |
| `CostingVariant` | `CostingVariant` |
| `CostingOverheadGroup` | `CostingOverheadGroup` |
| `CostingOverhead` | `CostingOverhead` |
| `CostEstimateMarkingDate` | `CostEstimateMarkingDate` |
| `CostEstimateMarkedByUser` | `CostEstimateMarkedByUser` |
| `CostEstimateMarkingUser` | `CostEstimateMarkingUser` |
| `CostEstimateReleaseDate` | `CostEstimateReleaseDate` |
| `CostEstimateReleasedByUser` | `CostEstimateReleasedByUser` |
| `CostEstimateReleaseUser` | `CostEstimateReleaseUser` |
| `CostEstimateTransferControl` | `CostEstimateTransferControl` |
| `CostComponentStructure` | `CostComponentStructure` |
| `ProfitCenter` | `ProfitCenter` |
| `CompanyCodeCurrency` | `CompanyCodeCurrency` |
| `ControllingAreaCurrency` | `ControllingAreaCurrency` |
| `ExchangeRateType` | `ExchangeRateType` |
| `EstimatedCostCostingRun` | `EstimatedCostCostingRun` |
| `EstimatedCostCostingRunDate` | `EstimatedCostCostingRunDate` |
| `TotalCostInCompanyCodeCurrency` | `TotalCostInCompanyCodeCurrency` |
| `FixedCostInCompanyCodeCurrency` | `FixedCostInCompanyCodeCurrency` |
| `TotalCostInCtrlgAreaCurrency` | `TotalCostInCtrlgAreaCurrency` |
| `FixedCostInCtrlgAreaCurrency` | `FixedCostInCtrlgAreaCurrency` |
| `CO2eqEmissionUnit` | `CO2eqEmissionUnit` |
| `CO2eqEmissionQuantity` | `CO2eqEmissionQuantity` |
| `_Item` | *Association* |
| `_CreatedByContactCard` | *Association* |
| `_MarkedByContactCard` | *Association* |
| `_ReleasedByContactCard` | *Association* |
| `_ProductText` | *Association* |
| `_PlantText` | *Association* |
| `_CostingVersionText` | *Association* |
| `_CostingVersionText_2` | *Association* |
| `_CostingVariantText` | *Association* |
| `_ValuationVariantText` | *Association* |
| `_CostingTypeText` | *Association* |
| `_CompanyCodeText` | *Association* |
| `_ProfitCenterText` | *Association* |
| `_ProfitCenterText_2` | *Association* |
| `_EstimatedCostCostingRunText` | *Association* |
| `_CostEstimateStatusText` | *Association* |
| `_CostingOverheadGroupText` | *Association* |
| `_ControllingAreaText` | *Association* |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  privilegedAssociations: [
    '_CreatedByContactCard',
    '_MarkedByContactCard',
    '_ReleasedByContactCard'
  ]
}

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   sapObjectNodeType.name: 'ProductCostEstimate',
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER, #UI_PROVIDER_PROJECTION_SOURCE],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #L,
     dataClass:      #MIXED
   }
}

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@EndUserText.label: 'Product Cost Estimate - TP'

define root view entity I_ProductCostEstimateTP
  provider contract transactional_interface
  as projection on R_ProductCostEstimateTP as ProductCostEstimate

{
  key CostingReferenceObject,
  key CostEstimate,
      @Consumption.valueHelpDefinition:[{entity: { name: 'I_CostingTypeStdVH' , element: 'CostingType' }, useAsTemplate: true }]
  key CostingType,
  key CostingDate,
  key CostingVersion,
      @Consumption.valueHelpDefinition:[{entity: { name: 'I_CostingValuationVariantStdVH' , element: 'ValuationVariant' }, useAsTemplate: true }]
  key ValuationVariant,
  key CostIsEnteredManually,
      @Consumption.valueHelpDefinition:[{entity: { name: 'I_ProductStdVH' , element: 'Product' }, useAsTemplate: true }]
      Product,
      @Consumption.valueHelpDefinition:[{entity: { name: 'I_PlantStdVH' , element: 'Plant' }, useAsTemplate: true }]
      Plant,
      @Consumption.valueHelpDefinition:[{entity: { name: 'I_ProductValuationAreaVH' , element: 'ValuationArea' }, useAsTemplate: true }]
      ValuationArea,
      @Consumption.valueHelpDefinition:[{entity: { name: 'I_MaterialValuationTypeVH' , element: 'InventoryValuationType' }, useAsTemplate: true }]
      ValuationType,
      @Consumption.valueHelpDefinition:[{entity: { name: 'I_ControllingAreaStdVH' , element: 'ControllingArea' }, useAsTemplate: true }]
      ControllingArea,
      @Consumption.valueHelpDefinition:[{entity: { name: 'I_CompanyCodeStdVH' , element: 'CompanyCode' }, useAsTemplate: true }]
      CompanyCode,
      CostEstimateValidityStartDate,
      CostEstimateValidityEndDate,
      ValuationDate,
      QuantityStructureDate,
      ProductionVersion,
      BillOfMaterial,
      ProductBOMUsage,
      AlternativeBillOfMaterial,
      TaskListGroup,
      TaskListType,
      TaskListGroupCounter,
      @Semantics.quantity.unitOfMeasure: 'ValuationQuantityUnit'
      CostingLotSize,
      ValuationQuantityUnit,

      CostEstimateCreatedByUser,
      CostEstimateCreationDate,

      CostEstimateStatus,
      CostEstimateStatusCriticality,

      CostEstimateIsReleased,
      CostingSheet,
      CostingOverheadType,
      ProductValuationStrategy,
      ProductValnPurgInfoRecdStrgy,
      @Consumption.valueHelpDefinition:[{entity: { name: 'I_CostingVariantStdVH' , element: 'CostingVariant' }, useAsTemplate: true }]
      CostingVariant,
      @Consumption.valueHelpDefinition:[{entity: { name: 'I_CostingOverheadGroupVH' , element: 'CostingOverheadGroup' }, useAsTemplate: true }]
      CostingOverheadGroup,
      CostingOverhead,

      CostEstimateMarkingDate,
      CostEstimateMarkedByUser,
      @API.element: {
        releaseState: #DEPRECATED,
        successor: 'CostEstimateMarkedByUser'
      }
      CostEstimateMarkingUser,

      CostEstimateReleaseDate,
      CostEstimateReleasedByUser,
      @API.element: {
        releaseState: #DEPRECATED,
        successor: 'CostEstimateReleasedByUser'
      }
      CostEstimateReleaseUser,

      CostEstimateTransferControl,
      CostComponentStructure,
      @Consumption.valueHelpDefinition:[{entity: { name: 'I_ProfitCenterStdVH' , element: 'ProfitCenter' }, useAsTemplate: true }]
      ProfitCenter,
      CompanyCodeCurrency,
      ControllingAreaCurrency,
      ExchangeRateType,
      EstimatedCostCostingRun,
      EstimatedCostCostingRunDate,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      TotalCostInCompanyCodeCurrency,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      FixedCostInCompanyCodeCurrency,

      @Semantics.amount.currencyCode: 'ControllingAreaCurrency'
      TotalCostInCtrlgAreaCurrency,
      @Semantics.amount.currencyCode: 'ControllingAreaCurrency'
      FixedCostInCtrlgAreaCurrency,
      
      CO2eqEmissionUnit,
      @Semantics.quantity.unitOfMeasure: 'CO2eqEmissionUnit'
      CO2eqEmissionQuantity,

      // associations
      _Item : redirected to composition child I_ProductCostEstimateItemTP,
      _CreatedByContactCard,
      _MarkedByContactCard,
      _ReleasedByContactCard,

      // text associations
      _ProductText,
      _PlantText,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CostingVersionText_2'
      _CostingVersionText,
      _CostingVersionText_2,
      _CostingVariantText,
      _ValuationVariantText,
      _CostingTypeText,
      _CompanyCodeText,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ProfitCenterText_2'
      _ProfitCenterText,
      _ProfitCenterText_2,
      _EstimatedCostCostingRunText,
      _CostEstimateStatusText,
      _CostingOverheadGroupText,
      _ControllingAreaText
      
}
```
