---
name: I_PRODUCTCOSTESTIMATEITEMTP
description: Productcostestimateitemtp
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
  - item-level
  - component:CO-PC-PCP-2CL
  - lob:Controlling
---
# I_PRODUCTCOSTESTIMATEITEMTP

**Productcostestimateitemtp**

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
| `CostingItem` | ✓ | |  |  |  |  |
| `CostingItemCategory` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `ValuationType` |  | |  |  |  |  |
| `ControllingAreaCurrency` |  | |  |  |  |  |
| `TotalPriceInInCtrlgAreaCrcy` |  | |  |  |  |  |
| `FixedPriceInCtrlgAreaCrcy` |  | |  |  |  |  |
| `TotalAmountInCtrlgAreaCrcy` |  | |  |  |  |  |
| `FixedAmountInCtrlgAreaCrcy` |  | |  |  |  |  |
| `CompanyCodeCurrency` |  | |  |  |  |  |
| `TotalPriceInCompanyCodeCrcy` |  | |  |  |  |  |
| `FixedPriceInCompanyCodeCrcy` |  | |  |  |  |  |
| `TotalAmountInCoCodeCrcy` |  | |  |  |  |  |
| `FixedAmountInCoCodeCrcy` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `QuantityInBaseUnit` |  | |  |  |  |  |
| `CostingPriceUnitQty` |  | |  |  |  |  |
| `CostingPriceQtyUnit` |  | |  |  |  |  |
| `CostElement` |  | |  |  |  |  |
| `CostOriginGroup` |  | |  |  |  |  |
| `CostComponent` |  | |  |  |  |  |
| `Creditor` |  | |  |  |  |  |
| `TransferCostEstimate` |  | |  |  |  |  |
| `TransferCostingType` |  | |  |  |  |  |
| `TransferCostingDate` |  | |  |  |  |  |
| `TransferCostingVersion` |  | |  |  |  |  |
| `TransferValuationVariant` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `CostCtrActivityType` |  | |  |  |  |  |
| `CostingObject` |  | |  |  |  |  |
| `Operation` |  | |  |  |  |  |
| `PurchasingInfoRecord` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingInfoRecordCategory` |  | |  |  |  |  |
| `PurchasingDocument` |  | |  |  |  |  |
| `PurchasingDocumentItem` |  | |  |  |  |  |
| `CostingValuationStrategy` |  | |  |  |  |  |
| `ProductValnPurgInfoRecdStrgy` |  | |  |  |  |  |
| `BillOfMaterialItemNumber` |  | |  |  |  |  |
| `CostingItemIsAssembly` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `CostCompSplitIsExisting` |  | |  |  |  |  |
| `HasError` |  | |  |  |  |  |
| `_ProductCostEstimate` | | ✓ | | | | |
| `_CostingVersionText` | | ✓ | | | | |
| `_CostingVersionText_2` | | ✓ | | | | |
| `_CostingValuationVarText` | | ✓ | | | | |
| `_ProductText` | | ✓ | | | | |
| `_CostOriginGroupText` | | ✓ | | | | |
| `_CostComponentText` | | ✓ | | | | |
| `_CostingTypeText` | | ✓ | | | | |
| `_CostCenterText` | | ✓ | | | | |
| `_ProfitCenterText` | | ✓ | | | | |
| `_BusinessAreaText` | | ✓ | | | | |
| `_PlantText` | | ✓ | | | | |
| `_TransferCostingTypeText` | | ✓ | | | | |
| `_TransferCostingVersionText` | | ✓ | | | | |
| `_TransferValuationVarText` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Product Cost Estimate Item - TP'
@AccessControl.authorizationCheck: #MANDATORY

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

@ObjectModel: {
    usageType: {
        dataClass:      #TRANSACTIONAL,
        serviceQuality: #B,
        sizeCategory:   #XL
    },
    modelingPattern:        #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}

@Metadata.ignorePropagatedAnnotations: true

define view entity I_ProductCostEstimateItemTP
  as projection on R_ProductCostEstimateItemTP

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
  key CostingItem,

      CostingItemCategory,
      @Consumption.valueHelpDefinition:[{entity: { name: 'I_PlantStdVH' , element: 'Plant' }, useAsTemplate: true }]
      Plant,
      @Consumption.valueHelpDefinition:[{entity: { name: 'I_ProductStdVH' , element: 'Product' }, useAsTemplate: true }]
      Product,
      ValuationType,
      ControllingAreaCurrency,
      @Semantics.amount.currencyCode: 'ControllingAreaCurrency'
      TotalPriceInInCtrlgAreaCrcy,
      @Semantics.amount.currencyCode: 'ControllingAreaCurrency'
      FixedPriceInCtrlgAreaCrcy,
      @Semantics.amount.currencyCode: 'ControllingAreaCurrency'
      TotalAmountInCtrlgAreaCrcy,
      @Semantics.amount.currencyCode: 'ControllingAreaCurrency'
      FixedAmountInCtrlgAreaCrcy,
      CompanyCodeCurrency,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      TotalPriceInCompanyCodeCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      FixedPriceInCompanyCodeCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      TotalAmountInCoCodeCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      FixedAmountInCoCodeCrcy,
      BaseUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      QuantityInBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'CostingPriceQtyUnit'
      CostingPriceUnitQty,
      CostingPriceQtyUnit,
      CostElement,
      @Consumption.valueHelpDefinition:[{entity: { name: 'I_CostOriginGroupStdVH' , element: 'CostOriginGroup' }, useAsTemplate: true }]
      CostOriginGroup,
      @Consumption.valueHelpDefinition:[{entity: { name: 'I_CostComponentStdVH' , element: 'CostComponent' }, useAsTemplate: true }]
      CostComponent,
      @Consumption.valueHelpDefinition:[{entity: { name: 'I_Supplier_VH' , element: 'Supplier' }, useAsTemplate: true }]
      Creditor,
      TransferCostEstimate,
      @Consumption.valueHelpDefinition:[{entity: { name: 'I_CostingTypeStdVH' , element: 'CostingType' }, useAsTemplate: true }]
      TransferCostingType,
      TransferCostingDate,
      TransferCostingVersion,
      @Consumption.valueHelpDefinition:[{entity: { name: 'I_CostingValuationVariantStdVH' , element: 'ValuationVariant' }, useAsTemplate: true }]
      TransferValuationVariant,
      @Consumption.valueHelpDefinition:[{entity: { name: 'I_CostCenterStdVH' , element: 'CostCenter' }, useAsTemplate: true }]
      CostCenter,
      @Consumption.valueHelpDefinition:[{entity: { name: 'I_ProfitCenterStdVH' , element: 'ProfitCenter' }, useAsTemplate: true }]
      ProfitCenter,
      @Consumption.valueHelpDefinition:[{entity: { name: 'I_BusinessAreaStdVH' , element: 'BusinessArea' }, useAsTemplate: true }]
      BusinessArea,
      CostCtrActivityType,
      CostingObject,
      Operation,
      PurchasingInfoRecord,
      PurchasingOrganization,
      PurchasingInfoRecordCategory,
      PurchasingDocument,
      PurchasingDocumentItem,
      CostingValuationStrategy,
      ProductValnPurgInfoRecdStrgy,
      BillOfMaterialItemNumber,
      CostingItemIsAssembly,
      WBSElementInternalID,
      CostCompSplitIsExisting,
      HasError,

      /* Associations */
      _ProductCostEstimate : redirected to parent I_ProductCostEstimateTP,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CostingVersionText_2'
      _CostingVersionText,
      _CostingVersionText_2,
      _CostingValuationVarText,
      _ProductText,
      _CostOriginGroupText,
      _CostComponentText,
      _CostingTypeText,
      _CostCenterText,
      _ProfitCenterText,
      _BusinessAreaText,
      _PlantText,
      _TransferCostingTypeText,
      _TransferCostingVersionText,
      _TransferValuationVarText

}
```
