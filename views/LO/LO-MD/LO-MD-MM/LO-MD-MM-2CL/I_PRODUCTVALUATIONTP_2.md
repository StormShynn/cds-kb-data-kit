---
name: I_PRODUCTVALUATIONTP_2
description: Productvaluationtp 2
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
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTVALUATIONTP_2

**Productvaluationtp 2**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Product` | `Product` |
| key `ValuationArea` | `ValuationArea` |
| key `ValuationType` | `ValuationType` |
| `ValuationClass` | `ValuationClass` |
| `PriceDeterminationControl` | `PriceDeterminationControl` |
| `StandardPrice` | `StandardPrice` |
| `ProductPriceUnitQuantity` | `ProductPriceUnitQuantity` |
| `InventoryValuationProcedure` | `InventoryValuationProcedure` |
| `MovingAveragePrice` | `MovingAveragePrice` |
| `ValuationCategory` | `ValuationCategory` |
| `ProductUsageType` | `ProductUsageType` |
| `ProductOriginType` | `ProductOriginType` |
| `IsProducedInhouse` | `IsProducedInhouse` |
| `IsMarkedForDeletion` | `IsMarkedForDeletion` |
| `ValuationClassSalesOrderStock` | `ValuationClassSalesOrderStock` |
| `ProjectStockValuationClass` | `ProjectStockValuationClass` |
| `Currency` | `Currency` |
| `BaseUnit` | `BaseUnit` |
| `ValuationMarginPercent` | `ValuationMarginPercent` |
| `_Product` | *Association* |
| `_ProductValuationAccounting` | *Association* |
| `_ProductValuationLedgerAccount` | *Association* |
| `_ProductValuationLedgerPrices` | *Association* |
| `_ProductValuationCosting` | *Association* |
| `_ValuationClass` | *Association* |
| `_PriceDeterminationControl` | *Association* |
| `_InventoryValnProcedure` | *Association* |
| `_BR_MaterialUsage` | *Association* |
| `_BR_MaterialOrigin` | *Association* |
| `_ValnClassSalesOrderStock` | *Association* |
| `_ValnClassProjectStock` | *Association* |
| `_BaseUnitOfMeasure` | *Association* |
| `_Currency` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Product Valuation - TP'
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel: {
    usageType.serviceQuality: #C,
    usageType.sizeCategory : #XL,
    usageType.dataClass: #MASTER,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    modelingPattern: #TRANSACTIONAL_INTERFACE
}
@Metadata.ignorePropagatedAnnotations: true
@Consumption.dbHints: ['USE_HEX_PLAN']
define view entity I_ProductValuationTP_2
  as projection on R_ProductValuationTP as ProductValuation
{
 //     @ObjectModel.text.association: '_Product._ProductDescription'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProductStdVH', element : 'Product'} , useAsTemplate: true }]
  key Product,
  key ValuationArea,
  key ValuationType,
//      @ObjectModel.text.association: '_ValuationClass._ValuationClassText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_Prodvaluationclass', element : 'ValuationClass'} , useAsTemplate: true }]
      ValuationClass,
//      @ObjectModel.text.association: '_PriceDeterminationControl._Text'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_PRDETERMINATIONCONTROLSTDVH', element : 'PriceDeterminationControl'} , useAsTemplate: true }]
      PriceDeterminationControl,
      @Semantics.amount.currencyCode : 'Currency'
      StandardPrice,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      ProductPriceUnitQuantity,
//      @ObjectModel.text.association: '_InventoryValnProcedure._Text'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_PRODVALNPRICECONTROL', element : 'InventoryValuationProcedure'} , useAsTemplate: true }]
      InventoryValuationProcedure,
      @Semantics.amount.currencyCode : 'Currency'
      MovingAveragePrice,
      ValuationCategory,
//     @ObjectModel.text.association: '_BR_MaterialUsage._Text'
//      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_BR_MATERIALUSAGE', element : 'BR_MaterialUsage'} , useAsTemplate: true }]
      ProductUsageType,
//     @ObjectModel.text.association: '_BR_MaterialOrigin._Text'
//      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_BR_MATERIALORIGIN', element : 'BR_MaterialOrigin'} , useAsTemplate: true }]
      ProductOriginType,
      @Semantics.booleanIndicator: true
      IsProducedInhouse,
      @Semantics.booleanIndicator: true
      IsMarkedForDeletion,
//      @ObjectModel.text.association: '_ValnClassSalesOrderStock._ValuationClassText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_Prodvaluationclass', element : 'ValuationClass'} , useAsTemplate: true }]
      ValuationClassSalesOrderStock,
//      @ObjectModel.text.association: '_ValnClassProjectStock._ValuationClassText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_Prodvaluationclass', element : 'ValuationClass'} , useAsTemplate: true }]
      ProjectStockValuationClass,
//      @ObjectModel.text.association: '_Currency._Text'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_CurrencyStdVH', element : 'Currency'} , useAsTemplate: true }]
      Currency,
//      @ObjectModel.text.association: '_BaseUnitOfMeasure._Text'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UnitOfMeasureStdVH', element : 'UnitOfMeasure'} , useAsTemplate: true }]
      BaseUnit,
      @Feature: 'SW:CMD_API_PRODUCT'
      ValuationMarginPercent,
      /* Associations */
      _Product                       : redirected to parent I_ProductTP_2,
      _ProductValuationAccounting    : redirected to composition child I_ProdValuationAccountingTP_2,
      _ProductValuationLedgerAccount : redirected to composition child I_ProdValnLedgerAccountTP_2,
      _ProductValuationLedgerPrices  : redirected to composition child I_ProdValnLedgerPricesTP_2,
      _ProductValuationCosting       : redirected to composition child I_ProductValuationCostingTP_2,
      _ValuationClass,
      _PriceDeterminationControl,
      _InventoryValnProcedure,
      _BR_MaterialUsage,
      _BR_MaterialOrigin,
      _ValnClassSalesOrderStock,
      _ValnClassProjectStock,
      _BaseUnitOfMeasure,
      _Currency
}
```
