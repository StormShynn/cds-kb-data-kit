---
name: I_PRODVALNLEDGERACCOUNTTP_2
description: Prodvalnledgeraccounttp 2
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
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODVALNLEDGERACCOUNTTP_2

**Prodvalnledgeraccounttp 2**

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
| `ValuationArea` | ✓ | |  |  |  |  |
| `ValuationType` | ✓ | |  |  |  |  |
| `CurrencyRole` | ✓ | |  |  |  |  |
| `Ledger` | ✓ | |  |  |  |  |
| `ProductPriceControl` |  | |  |  |  |  |
| `ProductPriceUnitQuantity` |  | |  |  |  |  |
| `Currency` |  | |  |  |  |  |
| `MovingAveragePrice` |  | |  |  |  |  |
| `StandardPrice` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `_Product` | | ✓ | | | | |
| `_ProductValuation` | | ✓ | | | | |
| `_ProdValnPriceControlText` | | ✓ | | | | |
| `_CurrencyText` | | ✓ | | | | |
| `_BaseUnitOfMeasure` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Product Valuation Ledger Account - TP'
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
define view entity I_ProdValnLedgerAccountTP_2
  as projection on R_ProdValuationLedgerAccountTP as ProductValuationLedgerAccount
{
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProductStdVH', element : 'Product'} , useAsTemplate: true }]
  key Product,
  key ValuationArea,
  key ValuationType,
  key CurrencyRole,
  key Ledger,
      @ObjectModel.text.association: '_ProdValnPriceControlText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_PRODVALNPRICECONTROL', element : 'InventoryValuationProcedure'} , useAsTemplate: true }]
      ProductPriceControl,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      ProductPriceUnitQuantity,
      @ObjectModel.text.association: '_CurrencyText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_CurrencyStdVH', element : 'Currency'} , useAsTemplate: true }]
      Currency,
      @Semantics.amount.currencyCode : 'Currency'
      MovingAveragePrice,
      @Semantics.amount.currencyCode : 'Currency'
      StandardPrice,
      @Consumption.hidden: true
      CompanyCode,
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UNITOFMEASURESTDVH', element : 'UnitOfMeasure'} , useAsTemplate: true }]
      BaseUnit,
      /* Associations */
      _Product          : redirected to I_ProductTP_2,
      _ProductValuation : redirected to parent I_ProductValuationTP_2,
      _ProdValnPriceControlText,
      _CurrencyText,
      _BaseUnitOfMeasure
}
```
