---
name: I_PRODVALUATIONACCOUNTINGTP_2
description: "Prodvaluationaccountingtp 2"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
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
# I_PRODVALUATIONACCOUNTINGTP_2

**Prodvaluationaccountingtp 2**

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
| `CommercialPrice1InCoCodeCrcy` |  | |  |  |  |  |
| `CommercialPrice2InCoCodeCrcy` |  | |  |  |  |  |
| `CommercialPrice3InCoCodeCrcy` |  | |  |  |  |  |
| `DevaluationYearCount` |  | |  |  |  |  |
| `FuturePrice` |  | |  |  |  |  |
| `FuturePriceValidityStartDate` |  | |  |  |  |  |
| `LIFOValuationPoolNumber` |  | |  |  |  |  |
| `TaxPricel1InCoCodeCrcy` |  | |  |  |  |  |
| `TaxPrice2InCoCodeCrcy` |  | |  |  |  |  |
| `TaxPrice3InCoCodeCrcy` |  | |  |  |  |  |
| `TaxBasedPricesPriceUnitQty` |  | |  |  |  |  |
| `IsLIFOAndFIFORelevant` |  | |  |  |  |  |
| `Currency` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `_Product` | | ✓ | | | | |
| `_ProductValuation` | | ✓ | | | | |
| `_CurrencyText` | | ✓ | | | | |
| `_BaseUnitOfMeasure` | | ✓ | | | | |
| `_BaseUnitOfMeasureText` | | ✓ | | | | |
| `_ProductDescription` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Product Valuation Accounting - TP'
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
define view entity I_ProdValuationAccountingTP_2
  as projection on R_ProductValuationAccountingTP as ProductValuationAccounting
{
      @ObjectModel.text.association: '_ProductDescription'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProductStdVH', element : 'Product'} , useAsTemplate: true }]
  key Product,
  key ValuationArea,
  key ValuationType,
      @Semantics.amount.currencyCode : 'Currency'
      CommercialPrice1InCoCodeCrcy,
      @Semantics.amount.currencyCode : 'Currency'
      CommercialPrice2InCoCodeCrcy,
      @Semantics.amount.currencyCode : 'Currency'
      CommercialPrice3InCoCodeCrcy,
      DevaluationYearCount,
      @Semantics.amount.currencyCode : 'Currency'
      FuturePrice,
      FuturePriceValidityStartDate,
      LIFOValuationPoolNumber,
      @Semantics.amount.currencyCode : 'Currency'
      TaxPricel1InCoCodeCrcy,
      @Semantics.amount.currencyCode : 'Currency'
      TaxPrice2InCoCodeCrcy,
      @Semantics.amount.currencyCode : 'Currency'
      TaxPrice3InCoCodeCrcy,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      TaxBasedPricesPriceUnitQty,
      @Semantics.booleanIndicator: true
      IsLIFOAndFIFORelevant,
      @ObjectModel.text.association: '_CurrencyText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_CurrencyStdVH', element : 'Currency'} , useAsTemplate: true }]
      Currency,
      @ObjectModel.text.association: '_BaseUnitOfMeasureText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UNITOFMEASURESTDVH', element : 'UnitOfMeasure'} , useAsTemplate: true }]
      BaseUnit,
      /* Associations */
      _Product          : redirected to I_ProductTP_2,
      _ProductValuation : redirected to parent I_ProductValuationTP_2,
      _CurrencyText,
      _BaseUnitOfMeasure,
      _BaseUnitOfMeasureText,
      _ProductDescription
}
```
