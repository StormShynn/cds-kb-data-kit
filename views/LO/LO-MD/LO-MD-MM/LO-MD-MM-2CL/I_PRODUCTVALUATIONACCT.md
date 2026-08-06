---
name: I_PRODUCTVALUATIONACCT
description: Productvaluationacct
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
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTVALUATIONACCT

**Productvaluationacct**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Product` | `ValuationAccount.Product` |
| key `ValuationArea` | `ValuationAccount.ValuationArea` |
| key `ValuationType` | `ValuationAccount.ValuationType` |
| `CommercialPrice1InCoCodeCrcy` | `ValuationAccount.CommercialPrice1InCoCodeCrcy` |
| `CommercialPrice2InCoCodeCrcy` | `ValuationAccount.CommercialPrice2InCoCodeCrcy` |
| `CommercialPrice3InCoCodeCrcy` | `ValuationAccount.CommercialPrice3InCoCodeCrcy` |
| `DevaluationYearCount` | `ValuationAccount.DevaluationYearCount` |
| `FutureEvaluatedAmountValue` | `ValuationAccount.FuturePrice` |
| `FuturePriceValidityStartDate` | `ValuationAccount.FuturePriceValidityStartDate` |
| `IsLIFOAndFIFORelevant` | `ValuationAccount.IsLIFOAndFIFORelevant` |
| `LIFOValuationPoolNumber` | `ValuationAccount.LIFOValuationPoolNumber` |
| `StandardPricePrevYear` | `ValuationAccount.StandardPricePrevYear` |
| `TaxPricel1InCoCodeCrcy` | `ValuationAccount.TaxPricel1InCoCodeCrcy` |
| `TaxPrice2InCoCodeCrcy` | `ValuationAccount.TaxPrice2InCoCodeCrcy` |
| `TaxPrice3InCoCodeCrcy` | `ValuationAccount.TaxPrice3InCoCodeCrcy` |
| `TaxBasedPricesPriceUnitQty` | `ValuationAccount.TaxBasedPricesPriceUnitQty` |
| `CompanyCode` | `t001k.bukrs` |
| `Currency` | `t001.waers` |
| `ProdCostEstNumber` | `ValuationAccount.ProdCostEstNumber` |
| `MLIsActiveAtProductLevel` | `ValuationAccount.MLIsActiveAtProductLevel` |
| `ValuationCategory` | `ValuationAccount.ValuationCategory` |
| `ProdPrcControlInPreviousPeriod` | `ValuationAccount.ProdPrcControlInPreviousPeriod` |
| `MvgAvgPriceInPreviousPeriod` | `ValuationAccount.MvgAvgPriceInPreviousPeriod` |
| `StandardPriceInPreviousPeriod` | `ValuationAccount.StandardPriceInPreviousPeriod` |
| `ProdPrcUntQtyInPreviousPeriod` | `ValuationAccount.ProdPrcUntQtyInPreviousPeriod` |
| `ValuationClassPreviousPeriod` | `ValuationAccount.ValuationClassPreviousPeriod` |
| `ProdPriceControlInPreviousYear` | `ValuationAccount.ProdPriceControlInPreviousYear` |
| `MvgAveragePriceInPreviousYear` | `ValuationAccount.MvgAveragePriceInPreviousYear` |
| `ProdPrcUntQtyInPreviousYear` | `ValuationAccount.ProdPrcUntQtyInPreviousYear` |
| `ValuationClassPreviousYear` | `ValuationAccount.ValuationClassPreviousYear` |
| `BaseUnit` | `_Product.BaseUnit` |
| `_Product` | *Association* |
| `_BaseUnitOfMeasure` | *Association* |
| `_InvtryValnProcedPrevPerd` | *Association* |
| `_InvtryValnProcedLastYr` | *Association* |
| `_CurrencyText` | *Association* |
| `_ProductDescription` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [1..1] |
| `_ProdValuationExt` | `E_Productvaluation` | [0..1] |
| `_BaseUnitOfMeasure` | `I_UnitOfMeasure` | [1..1] |
| `_InvtryValnProcedPrevPerd` | `I_ProdValnPriceControl` | [0..1] |
| `_InvtryValnProcedLastYr` | `I_ProdValnPriceControl` | [0..1] |
| `_CurrencyText` | `I_CurrencyText` | [0..*] |
| `_ProductDescription` | `I_ProductDescription` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRDVALACCT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #BASIC
@EndUserText.label: 'Product Valuation Account'
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory : #XL
@ObjectModel.usageType.dataClass: #MIXED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #EXTRACTION_DATA_SOURCE ]

@Analytics:{
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        mapping:
        [ { table: 'MBEW',
            role: #MAIN,
            viewElement: ['Product','ValuationArea','ValuationType'],
            tableElement: ['MATNR','BWKEY','BWTAR'] },

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
@ObjectModel.sapObjectNodeType.name:'ProductValuationAccounting'

define view I_ProductValuationAcct
  as select from P_ProductValuationBasic as ValuationAccount
    inner join   t001k on ValuationAccount.ValuationArea = t001k.bwkey
    inner join   t001  on t001.bukrs = t001k.bukrs

  association [1..1] to I_Product              as _Product                  on  $projection.Product = _Product.Product
  association [0..1] to E_Productvaluation     as _ProdValuationExt         on  $projection.Product       = _ProdValuationExt.Product
                                                                            and $projection.ValuationArea = _ProdValuationExt.ValuationArea
                                                                            and $projection.ValuationType = _ProdValuationExt.ValuationType
  association [1..1] to I_UnitOfMeasure        as _BaseUnitOfMeasure        on  $projection.baseunit = _BaseUnitOfMeasure.UnitOfMeasure

  association [0..1] to I_ProdValnPriceControl as _InvtryValnProcedPrevPerd on  $projection.ProdPrcControlInPreviousPeriod = _InvtryValnProcedPrevPerd.InventoryValuationProcedure
  association [0..1] to I_ProdValnPriceControl as _InvtryValnProcedLastYr   on  $projection.ProdPriceControlInPreviousYear = _InvtryValnProcedLastYr.InventoryValuationProcedure
  association [0..*] to I_CurrencyText         as _CurrencyText             on  $projection.Currency = _CurrencyText.Currency
  association [0..*] to  I_ProductDescription  as _ProductDescription       on  $projection.Product = _ProductDescription.Product
{

  key ValuationAccount.Product,
  key ValuationAccount.ValuationArea,
  key ValuationAccount.ValuationType,
      @Semantics.amount.currencyCode: 'Currency'
      ValuationAccount.CommercialPrice1InCoCodeCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      ValuationAccount.CommercialPrice2InCoCodeCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      ValuationAccount.CommercialPrice3InCoCodeCrcy,
      ValuationAccount.DevaluationYearCount,
      ValuationAccount.FuturePrice as FutureEvaluatedAmountValue,
      ValuationAccount.FuturePriceValidityStartDate,
      ValuationAccount.IsLIFOAndFIFORelevant,
      ValuationAccount.LIFOValuationPoolNumber,
      //      ValuationAccount.vmvpr                                        as PriceCtrlInPrevPeriodInd,  // Previous period read only PSTAT
      //      ValuationAccount.vmpei                                        as PriceUnitPrevPeriod, // Previous period read only PSTAT
      //      ValuationAccount.vjpei                                        as PriceUnitPrevYear, // Previous year read only PSTAT
      @Semantics.amount.currencyCode: 'Currency'
      ValuationAccount.StandardPricePrevYear,
      //      ValuationAccount.mlmaa                                        as TaxClassificationCategory,  // PSTAT Changes Read Only
      @Semantics.amount.currencyCode: 'Currency'
      ValuationAccount.TaxPricel1InCoCodeCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      ValuationAccount.TaxPrice2InCoCodeCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      ValuationAccount.TaxPrice3InCoCodeCrcy,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      ValuationAccount.TaxBasedPricesPriceUnitQty,
      t001k.bukrs                  as CompanyCode,
      t001.waers                   as Currency,

      // Fields added due to Previous Periods
      ValuationAccount.ProdCostEstNumber,
      ValuationAccount.MLIsActiveAtProductLevel,
      @ObjectModel.sapObjectNodeTypeReference:'ProductValuationCategory'
      ValuationAccount.ValuationCategory,

      // Previous Periods Fields
      @ObjectModel.foreignKey.association: '_InvtryValnProcedPrevPerd'
      @ObjectModel.sapObjectNodeTypeReference:'ProductPriceControl'
      ValuationAccount.ProdPrcControlInPreviousPeriod,
      @Semantics.amount.currencyCode: 'Currency'
      ValuationAccount.MvgAvgPriceInPreviousPeriod,
      @Semantics.amount.currencyCode: 'Currency'
      ValuationAccount.StandardPriceInPreviousPeriod,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      ValuationAccount.ProdPrcUntQtyInPreviousPeriod,
      ValuationAccount.ValuationClassPreviousPeriod,

      @ObjectModel.foreignKey.association: '_InvtryValnProcedLastYr'
      @ObjectModel.sapObjectNodeTypeReference:'ProductPriceControl'
      ValuationAccount.ProdPriceControlInPreviousYear,
      @Semantics.amount.currencyCode: 'Currency'
      ValuationAccount.MvgAveragePriceInPreviousYear,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      ValuationAccount.ProdPrcUntQtyInPreviousYear,
      ValuationAccount.ValuationClassPreviousYear,

      @ObjectModel.foreignKey.association: '_BaseUnitOfMeasure'
      @Semantics.unitOfMeasure: true
      _Product.BaseUnit,

      _Product,
      _BaseUnitOfMeasure,
      _InvtryValnProcedPrevPerd,
      _InvtryValnProcedLastYr,
      _CurrencyText,
      _Product._BaseUnitOfMeasureText,
      _ProductDescription
}
```
