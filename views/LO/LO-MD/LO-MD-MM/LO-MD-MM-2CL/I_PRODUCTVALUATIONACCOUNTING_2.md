---
name: I_PRODUCTVALUATIONACCOUNTING_2
description: Productvaluationaccounting 2
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
# I_PRODUCTVALUATIONACCOUNTING_2

**Productvaluationaccounting 2**

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
| `IsLIFOAndFIFORelevant` |  | |  |  |  |  |
| `LIFOValuationPoolNumber` |  | |  |  |  |  |
| `StandardPricePrevYear` |  | |  |  |  |  |
| `TaxPricel1InCoCodeCrcy` |  | |  |  |  |  |
| `TaxPrice2InCoCodeCrcy` |  | |  |  |  |  |
| `TaxPrice3InCoCodeCrcy` |  | |  |  |  |  |
| `TaxBasedPricesPriceUnitQty` |  | |  |  |  |  |
| `CompanyCode` |  | |  | `bukrs` |  |  |
| `Currency` |  | |  | `waers` |  |  |
| `BaseUnit` |  | | `_Product` | `BaseUnit` |  |  |
| `_Product` | | ✓ | | | | |
| `_BaseUnitOfMeasure` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [1..1] |
| `_BaseUnitOfMeasure` | `I_UnitOfMeasure` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Product Valuation Account'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #XL,
  dataClass: #MIXED
}
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
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
@Analytics.technicalName: 'IPRODVALACCT2'
@ObjectModel.sapObjectNodeType.name:'ProductValuationAccounting'

define view entity I_ProductValuationAccounting_2 
 as select from P_ProductValuationBasic as ValuationAccount
    inner join   t001k on ValuationAccount.ValuationArea = t001k.bwkey
    inner join   t001  on t001.bukrs = t001k.bukrs

  association [1..1] to I_Product          as _Product           on  $projection.Product = _Product.Product
//  association [0..1] to E_Productvaluation as _ProdValuationExt  on  $projection.Product       = _ProdValuationExt.Product
//                                                                 and $projection.ValuationArea = _ProdValuationExt.ValuationArea
//                                                                 and $projection.ValuationType = _ProdValuationExt.ValuationType
  association [1..1] to I_UnitOfMeasure    as _BaseUnitOfMeasure on  $projection.baseunit = _BaseUnitOfMeasure.UnitOfMeasure
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
      @Semantics.amount.currencyCode: 'Currency'
      ValuationAccount.FuturePrice,
      ValuationAccount.FuturePriceValidityStartDate,
      ValuationAccount.IsLIFOAndFIFORelevant,
      ValuationAccount.LIFOValuationPoolNumber,

      @Semantics.amount.currencyCode: 'Currency'
      ValuationAccount.StandardPricePrevYear,
     
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
      @ObjectModel.foreignKey.association: '_BaseUnitOfMeasure'
      //@Semantics.unitOfMeasure: true
      _Product.BaseUnit,

      _Product,
      _BaseUnitOfMeasure  
}
```
