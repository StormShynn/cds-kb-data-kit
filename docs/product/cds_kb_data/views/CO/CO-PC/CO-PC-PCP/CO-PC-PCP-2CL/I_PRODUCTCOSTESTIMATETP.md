---
name: I_PRODUCTCOSTESTIMATETP
description: "Productcostestimatetp"
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CostingReferenceObject` | ✓ | |  |  |  |  |
| `CostEstimate` | ✓ | |  |  |  |  |
| `CostingType` | ✓ | |  |  |  |  |
| `CostingDate` | ✓ | |  |  |  |  |
| `CostingVersion` | ✓ | |  |  |  |  |
| `ValuationVariant` | ✓ | |  |  |  |  |
| `CostIsEnteredManually` | ✓ | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `ValuationArea` |  | |  |  |  |  |
| `ValuationType` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `CostEstimateValidityStartDate` |  | |  |  |  |  |
| `CostEstimateValidityEndDate` |  | |  |  |  |  |
| `ValuationDate` |  | |  |  |  |  |
| `QuantityStructureDate` |  | |  |  |  |  |
| `ProductionVersion` |  | |  |  |  |  |
| `BillOfMaterial` |  | |  |  |  |  |
| `ProductBOMUsage` |  | |  |  |  |  |
| `AlternativeBillOfMaterial` |  | |  |  |  |  |
| `TaskListGroup` |  | |  |  |  |  |
| `TaskListType` |  | |  |  |  |  |
| `TaskListGroupCounter` |  | |  |  |  |  |
| `CostingLotSize` |  | |  |  |  |  |
| `ValuationQuantityUnit` |  | |  |  |  |  |
| `CostEstimateCreatedByUser` |  | |  |  |  |  |
| `CostEstimateCreationDate` |  | |  |  |  |  |
| `CostEstimateStatus` |  | |  |  |  |  |
| `CostEstimateStatusCriticality` |  | |  |  |  |  |
| `CostEstimateIsReleased` |  | |  |  |  |  |
| `CostingSheet` |  | |  |  |  |  |
| `CostingOverheadType` |  | |  |  |  |  |
| `ProductValuationStrategy` |  | |  |  |  |  |
| `ProductValnPurgInfoRecdStrgy` |  | |  |  |  |  |
| `CostingVariant` |  | |  |  |  |  |
| `CostingOverheadGroup` |  | |  |  |  |  |
| `CostingOverhead` |  | |  |  |  |  |
| `CostEstimateMarkingDate` |  | |  |  |  |  |
| `CostEstimateMarkedByUser` |  | |  |  |  |  |
| `CostEstimateMarkingUser` |  | |  |  |  |  |
| `CostEstimateReleaseDate` |  | |  |  |  |  |
| `CostEstimateReleasedByUser` |  | |  |  |  |  |
| `CostEstimateReleaseUser` |  | |  |  |  |  |
| `CostEstimateTransferControl` |  | |  |  |  |  |
| `CostComponentStructure` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `CompanyCodeCurrency` |  | |  |  |  |  |
| `ControllingAreaCurrency` |  | |  |  |  |  |
| `ExchangeRateType` |  | |  |  |  |  |
| `EstimatedCostCostingRun` |  | |  |  |  |  |
| `EstimatedCostCostingRunDate` |  | |  |  |  |  |
| `TotalCostInCompanyCodeCurrency` |  | |  |  |  |  |
| `FixedCostInCompanyCodeCurrency` |  | |  |  |  |  |
| `TotalCostInCtrlgAreaCurrency` |  | |  |  |  |  |
| `FixedCostInCtrlgAreaCurrency` |  | |  |  |  |  |
| `CO2eqEmissionUnit` |  | |  |  |  |  |
| `CO2eqEmissionQuantity` |  | |  |  |  |  |
| `_Item` | | ✓ | | | | |
| `_CreatedByContactCard` | | ✓ | | | | |
| `_MarkedByContactCard` | | ✓ | | | | |
| `_ReleasedByContactCard` | | ✓ | | | | |
| `_ProductText` | | ✓ | | | | |
| `_PlantText` | | ✓ | | | | |
| `_CostingVersionText` | | ✓ | | | | |
| `_CostingVersionText_2` | | ✓ | | | | |
| `_CostingVariantText` | | ✓ | | | | |
| `_ValuationVariantText` | | ✓ | | | | |
| `_CostingTypeText` | | ✓ | | | | |
| `_CompanyCodeText` | | ✓ | | | | |
| `_ProfitCenterText` | | ✓ | | | | |
| `_ProfitCenterText_2` | | ✓ | | | | |
| `_EstimatedCostCostingRunText` | | ✓ | | | | |
| `_CostEstimateStatusText` | | ✓ | | | | |
| `_CostingOverheadGroupText` | | ✓ | | | | |
| `_ControllingAreaText` | | ✓ | | | | |

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
