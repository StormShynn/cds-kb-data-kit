---
name: I_PRODUCTVALUATIONBASIC
description: "Productvaluationbasic"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
atc_state: released
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
# I_PRODUCTVALUATIONBASIC

**Productvaluationbasic**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  |  |  |  |
| `ValuationArea` | ✓ | |  |  |  |  |
| `ValuationType` | ✓ | |  |  |  |  |
| `ValuationClass` |  | |  |  |  |  |
| `PriceDeterminationControl` |  | |  |  |  |  |
| `FiscalMonthCurrentPeriod` |  | |  | `lfmon` |  |  |
| `FiscalYearCurrentPeriod` |  | |  | `lfgja` |  |  |
| `StandardPrice` |  | |  |  |  |  |
| `PriceUnitQty` |  | |  |  |  |  |
| `InventoryValuationProcedure` |  | |  |  |  |  |
| `FuturePriceValidityStartDate` |  | |  |  |  |  |
| `PrevInvtryPriceInCoCodeCrcy` |  | |  |  |  |  |
| `MovingAveragePrice` |  | |  |  |  |  |
| `ValuationCategory` |  | |  |  |  |  |
| `ProductUsageType` |  | |  |  |  |  |
| `ProductOriginType` |  | |  |  |  |  |
| `IsProducedInhouse` |  | |  |  |  |  |
| `ProdCostEstNumber` |  | |  |  |  |  |
| `IsMarkedForDeletion` |  | |  |  |  |  |
| `ValuationMargin` |  | |  |  |  |  |
| `IsActiveEntity` |  | |  | `cast( 'X' as sdraft_is_active preserving type )` |  |  |
| `CompanyCode` |  | |  | `bukrs` |  |  |
| `ValuationClassSalesOrderStock` |  | |  |  |  |  |
| `ProjectStockValuationClass` |  | |  |  |  |  |
| `TaxBasedPricesPriceUnitQty` |  | |  |  |  |  |
| `PriceLastChangeDate` |  | |  |  |  |  |
| `FuturePrice` |  | |  |  |  |  |
| `MaintenanceStatus` |  | |  |  |  |  |
| `Currency` |  | |  | `waers` |  |  |
| `BaseUnit` |  | | `_Product` | `BaseUnit` |  |  |
| `MLIsActiveAtProductLevel` |  | |  |  |  |  |
| `_Product` | | ✓ | | | | |
| `_ValuationClass` | | ✓ | | | | |
| `_ValnClassSalesOrderStock` | | ✓ | | | | |
| `_ValnClassProjectStock` | | ✓ | | | | |
| `_InventoryValnProcedure` | | ✓ | | | | |
| `_PriceDeterminationControl` | | ✓ | | | | |
| `_BR_MaterialUsage` | | ✓ | | | | |
| `_BR_MaterialOrigin` | | ✓ | | | | |
| `_InventoryValuationType` | | ✓ | | | | |
| `_BaseUnitOfMeasure` | | ✓ | | | | |
| `_BaseUnitOfMeasureText` | | ✓ | | | | |
| `_ProductDescription_2` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_CurrencyText` | | ✓ | | | | |
| `_PriceDeterminationControlText` | | ✓ | | | | |
| `_InventoryValnProcedureText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [1..1] |
| `_ValuationClass` | `I_Prodvaluationclass` | [0..1] |
| `_ValnClassSalesOrderStock` | `I_Prodvaluationclass` | [0..1] |
| `_ValnClassProjectStock` | `I_Prodvaluationclass` | [0..1] |
| `_InventoryValnProcedure` | `I_ProdValnPriceControl` | [0..1] |
| `_PriceDeterminationControl` | `I_PriceDeterminationControl` | [0..1] |
| `_BR_MaterialUsage` | `I_BR_MaterialUsage` | [0..1] |
| `_BR_MaterialOrigin` | `I_BR_MaterialOrigin` | [0..1] |
| `_ProdValuationExt` | `E_Productvaluation` | [0..1] |
| `_InventoryValuationType` | `I_InventoryValuationType` | [0..1] |
| `_BaseUnitOfMeasure` | `I_UnitOfMeasure` | [1..1] |
| `_BaseUnitOfMeasureText` | `I_UnitOfMeasureText` | [0..*] |
| `_ProductDescription_2` | `I_ProductDescription_2` | [0..*] |
| `_Currency` | `I_Currency` | [0..1] |
| `_CurrencyText` | `I_CurrencyText` | [0..*] |
| `_PriceDeterminationControlText` | `I_PriceDeterminationControlTxt` | [0..*] |
| `_InventoryValnProcedureText` | `I_ProdValnPriceControlText` | [0..*] |

## Source Code

```abap
// Product Valuation  Basic
@AbapCatalog.sqlViewName: 'IPRDVALBASIC'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Product Valuation'
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #XL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
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

          { table: 'MARV',
            role: #LEFT_OUTER_TO_ONE_JOIN,
            viewElement: ['CompanyCode'],
            tableElement: ['BUKRS']
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

@ObjectModel.sapObjectNodeType.name:'ProductValuation'

define view I_ProductValuationBasic
  as select from P_ProductValuationBasic as Valuation
    inner join   t001k on Valuation.ValuationArea = t001k.bwkey
    inner join   marv  on marv.bukrs = t001k.bukrs
    inner join   t001  on t001.bukrs = t001k.bukrs


  association [1..1] to I_Product                   as _Product                    on  $projection.Product = _Product.Product

  association [0..1] to I_Prodvaluationclass        as _ValuationClass             on  $projection.ValuationClass = _ValuationClass.ValuationClass
  association [0..1] to I_Prodvaluationclass        as _ValnClassSalesOrderStock   on  $projection.ValuationClassSalesOrderStock = _ValnClassSalesOrderStock.ValuationClass
  association [0..1] to I_Prodvaluationclass        as _ValnClassProjectStock      on  $projection.ProjectStockValuationClass = _ValnClassProjectStock.ValuationClass
  association [0..1] to I_ProdValnPriceControl      as _InventoryValnProcedure     on  $projection.InventoryValuationProcedure = _InventoryValnProcedure.InventoryValuationProcedure
  association [0..1] to I_PriceDeterminationControl as _PriceDeterminationControl  on  $projection.PriceDeterminationControl = _PriceDeterminationControl.PriceDeterminationControl
  association [0..1] to I_BR_MaterialUsage          as _BR_MaterialUsage           on  $projection.ProductUsageType = _BR_MaterialUsage.BR_MaterialUsage
  association [0..1] to I_BR_MaterialOrigin         as _BR_MaterialOrigin          on  $projection.ProductOriginType = _BR_MaterialOrigin.BR_MaterialOrigin
  association [0..1] to E_Productvaluation          as _ProdValuationExt           on  $projection.Product       = _ProdValuationExt.Product
                                                                                   and $projection.ValuationArea = _ProdValuationExt.ValuationArea
                                                                                   and $projection.ValuationType = _ProdValuationExt.ValuationType

  association [0..1] to I_InventoryValuationType    as _InventoryValuationType     on  $projection.ValuationType = _InventoryValuationType.InventoryValuationType
  association [1..1] to I_UnitOfMeasure             as _BaseUnitOfMeasure          on  $projection.baseunit = _BaseUnitOfMeasure.UnitOfMeasure
  association [0..*] to I_UnitOfMeasureText         as _BaseUnitOfMeasureText      on  $projection.baseunit = _BaseUnitOfMeasureText.UnitOfMeasure
  association [0..*] to I_ProductDescription_2      as _ProductDescription_2       on  $projection.Product = _ProductDescription_2.Product
  association [0..1] to I_Currency                  as _Currency                   on  $projection.Currency = _Currency.Currency
  association [0..*] to I_CurrencyText              as _CurrencyText               on  $projection.Currency = _CurrencyText.Currency
  association [0..*] to I_PriceDeterminationControlTxt as _PriceDeterminationControlText  on  $projection.PriceDeterminationControl = _PriceDeterminationControlText.PriceDeterminationControl
  association [0..*] to I_ProdValnPriceControlText  as _InventoryValnProcedureText   on $projection.InventoryValuationProcedure = _InventoryValnProcedureText.InventoryValuationProcedure
{
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ProductStdVH',
                     element: 'Product' },
          useAsTemplate: true
        }]
      @ObjectModel.text.association: '_ProductDescription_2'
  key Valuation.Product,
  key Valuation.ValuationArea,
      @ObjectModel.foreignKey.association: '_InventoryValuationType'
  key Valuation.ValuationType,
      @ObjectModel.foreignKey.association: '_ValuationClass'
      @ObjectModel.sapObjectNodeTypeReference:'ProductValuationClass'
      @Consumption.valueHelpDefinition: [  { entity: { name: 'I_Prodvaluationclass', element: 'ValuationClass' }, useAsTemplate: true  }]
      Valuation.ValuationClass,
      @ObjectModel.text.association: '_PriceDeterminationControlText'
//      @Consumption.valueHelpDefinition: [  { entity: { name: 'I_PriceDeterminationControl', element: 'PriceDeterminationControl' }, useAsTemplate: true  }]
      Valuation.PriceDeterminationControl,
      marv.lfmon                                      as FiscalMonthCurrentPeriod,
      marv.lfgja                                      as FiscalYearCurrentPeriod,
      @Semantics.amount.currencyCode: 'Currency'
      Valuation.StandardPrice,
      Valuation.PriceUnitQty,
      @ObjectModel.foreignKey.association: '_InventoryValnProcedure'
      @ObjectModel.sapObjectNodeTypeReference:'ProductPriceControl'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProdValnPriceControl', element : 'InventoryValuationProcedure'}, useAsTemplate: true }]
      @ObjectModel.text.association: '_InventoryValnProcedureText'
      Valuation.InventoryValuationProcedure,
      Valuation.FuturePriceValidityStartDate,
      @Semantics.amount.currencyCode: 'Currency'
      Valuation.PrevInvtryPriceInCoCodeCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      Valuation.MovingAveragePrice,
      @ObjectModel.sapObjectNodeTypeReference:'ProductValuationCategory'
      Valuation.ValuationCategory,
      @ObjectModel.foreignKey.association: '_BR_MaterialUsage'
      Valuation.ProductUsageType,
      @ObjectModel.foreignKey.association: '_BR_MaterialOrigin'
      Valuation.ProductOriginType,
      Valuation.IsProducedInhouse,
      Valuation.ProdCostEstNumber,
      Valuation.IsMarkedForDeletion,
      //Retail field
      Valuation.ValuationMargin,
      cast( 'X' as sdraft_is_active preserving type ) as IsActiveEntity, // to enbale extensibility in Draft 2.0

      //ML fields
      @Consumption.valueHelpDefinition: [  { entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' }, useAsTemplate: true  }]
      t001k.bukrs                                     as CompanyCode,
      @ObjectModel.foreignKey.association: '_ValnClassSalesOrderStock'
      @ObjectModel.sapObjectNodeTypeReference:'ProductValuationClass'
      @Consumption.valueHelpDefinition: [  { entity: { name: 'I_Prodvaluationclass', element: 'ValuationClass' }, useAsTemplate: true  }]
      Valuation.ValuationClassSalesOrderStock,
      @ObjectModel.foreignKey.association: '_ValnClassProjectStock'
      @ObjectModel.sapObjectNodeTypeReference:'ProductValuationClass'
      @Consumption.valueHelpDefinition: [  { entity: { name: 'I_Prodvaluationclass', element: 'ValuationClass' }, useAsTemplate: true  }]
      Valuation.ProjectStockValuationClass,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      Valuation.TaxBasedPricesPriceUnitQty,
      Valuation.PriceLastChangeDate,
      @Semantics.amount.currencyCode: 'Currency'
      Valuation.FuturePrice,
      Valuation.MaintenanceStatus,
      @Semantics.currencyCode: true
      @ObjectModel.text.association: '_CurrencyText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_CurrencyStdVH', element : 'Currency'} , useAsTemplate: true }]
      t001.waers                                      as Currency,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_BaseUnitOfMeasure'
      @ObjectModel.text.association: '_BaseUnitOfMeasureText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UnitOfMeasureStdVH', element : 'UnitOfMeasure'}, useAsTemplate: true }]  
      _Product.BaseUnit,
      Valuation.MLIsActiveAtProductLevel,
      _Product,
      _ValuationClass,
      _ValnClassSalesOrderStock,
      _ValnClassProjectStock,
      _InventoryValnProcedure,
      _PriceDeterminationControl,
      _BR_MaterialUsage,
      _BR_MaterialOrigin,
      _InventoryValuationType,
      _BaseUnitOfMeasure,
      _ProductDescription_2,
      _BaseUnitOfMeasureText,
      _Currency,
      _CurrencyText,
      _PriceDeterminationControlText,
      _InventoryValnProcedureText

}
```
