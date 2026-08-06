---
name: I_PRODUCTVALUATIONCOSTING
description: Productvaluationcosting
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
# I_PRODUCTVALUATIONCOSTING

**Productvaluationcosting**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Product` | `ProdCosting.Product` |
| key `ValuationArea` | `ProdCosting.ValuationArea` |
| key `ValuationType` | `ProdCosting.ValuationType` |
| `IsMaterialCostedWithQtyStruc` | `ProdCosting.IsMaterialCostedWithQtyStruc` |
| `IsMaterialRelatedOrigin` | `ProdCosting.IsMaterialRelatedOrigin` |
| `CostOriginGroup` | `ProdCosting.CostOriginGroup` |
| `CostingOverheadGroup` | `ProdCosting.CostingOverheadGroup` |
| `PlannedPrice1InCoCodeCrcy` | `ProdCosting.PlannedPrice1InCoCodeCrcy` |
| `PlannedPrice2InCoCodeCrcy` | `ProdCosting.PlannedPrice2InCoCodeCrcy` |
| `PlannedPrice3InCoCodeCrcy` | `ProdCosting.PlannedPrice3InCoCodeCrcy` |
| `FuturePlndPrice1ValdtyDate` | `ProdCosting.FuturePlndPrice1ValdtyDate` |
| `FuturePlndPrice2ValdtyDate` | `ProdCosting.FuturePlndPrice2ValdtyDate` |
| `FuturePlndPrice3ValdtyDate` | `ProdCosting.FuturePlndPrice3ValdtyDate` |
| `PlannedPrice` | `ProdCosting.PlannedPrice` |
| `Currency` | `t001.waers` |
| `CompanyCode` | `t001.bukrs` |
| `_Product` | *Association* |
| `_CostOriginGroupText` | *Association* |
| `_Currency` | *Association* |
| `_CurrencyText` | *Association* |
| `_ProductDescription` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [1..1] |
| `_ProdValuationExt` | `E_Productvaluation` | [0..1] |
| `_CostOriginGroupText` | `I_CostOriginGroupText` | [0..*] |
| `_Currency` | `I_Currency` | [1..1] |
| `_CurrencyText` | `I_CurrencyText` | [0..*] |
| `_ProductDescription` | `I_ProductDescription_2` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRODVALCOST'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #BASIC
@EndUserText.label: 'Product Valuation Costing Core Entity'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #XL
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true

@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #EXTRACTION_DATA_SOURCE ]
@Analytics:{
    dataExtraction: {
        enabled: true,
       delta.changeDataCapture :{
          mapping: [
          { table: 'MBEW',
            role: #MAIN,
            viewElement: ['Product','ValuationArea','ValuationType'],
            tableElement: ['MATNR','BWKEY','BWTAR'] },

          { table: 'T001K',
            role: #LEFT_OUTER_TO_ONE_JOIN,
            viewElement: ['ValuationArea'],
            tableElement: ['BWKEY']},

          { table: 'T001',
            role: #LEFT_OUTER_TO_ONE_JOIN,
            viewElement: ['CompanyCode'],
            tableElement: ['BUKRS']
          } ]
           }
    }
}
@ObjectModel.sapObjectNodeType.name:'ProductValuationCosting'
define view I_ProductValuationCosting
  as select from P_ProductValuationBasic as ProdCosting
    inner join   t001k on ProdCosting.ValuationArea = t001k.bwkey
    inner join   t001  on t001.bukrs = t001k.bukrs

  association [1..1] to I_Product              as _Product              on  $projection.Product = _Product.Product
  association [0..1] to E_Productvaluation     as _ProdValuationExt     on  $projection.Product       = _ProdValuationExt.Product
                                                                        and $projection.ValuationArea = _ProdValuationExt.ValuationArea
                                                                        and $projection.ValuationType = _ProdValuationExt.ValuationType
  association [0..*] to I_CostOriginGroupText  as _CostOriginGroupText  on  $projection.CostOriginGroup = _CostOriginGroupText.CostOriginGroup
  association [1..1] to I_Currency             as _Currency             on  $projection.Currency = _Currency.Currency
  association [0..*] to I_CurrencyText         as _CurrencyText         on  $projection.Currency = _CurrencyText.Currency
  association [0..*] to I_ProductDescription_2 as _ProductDescription   on  $projection.Product = _ProductDescription.Product
//  association [0..1] to I_CostingOverheadGroup as _CostingOverheadGroup on  $projection.ValuationArea        = _CostingOverheadGroup.ValuationArea
//                                                                        and $projection.CostingOverheadGroup = _CostingOverheadGroup.costingoverheadgroup
{

  key ProdCosting.Product,
  key ProdCosting.ValuationArea,
  key ProdCosting.ValuationType,
      ProdCosting.IsMaterialCostedWithQtyStruc,
      @Semantics.booleanIndicator
      ProdCosting.IsMaterialRelatedOrigin,
      @ObjectModel.text.association: '_CostOriginGroupText'
      ProdCosting.CostOriginGroup,
      @ObjectModel.sapObjectNodeTypeReference:'CostingOverheadGroup'
      ProdCosting.CostingOverheadGroup,
      @Semantics.amount.currencyCode: 'Currency'
      ProdCosting.PlannedPrice1InCoCodeCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      ProdCosting.PlannedPrice2InCoCodeCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      ProdCosting.PlannedPrice3InCoCodeCrcy,
      ProdCosting.FuturePlndPrice1ValdtyDate,
      ProdCosting.FuturePlndPrice2ValdtyDate,
      ProdCosting.FuturePlndPrice3ValdtyDate,
      @Semantics.amount.currencyCode: 'Currency'
      ProdCosting.PlannedPrice,
      @Semantics.currencyCode: true
      t001.waers as Currency,
      t001.bukrs as CompanyCode,
      _Product,
      _CostOriginGroupText,
      _Currency,
      _CurrencyText,
      _ProductDescription
//      _CostingOverheadGroup

}
```
