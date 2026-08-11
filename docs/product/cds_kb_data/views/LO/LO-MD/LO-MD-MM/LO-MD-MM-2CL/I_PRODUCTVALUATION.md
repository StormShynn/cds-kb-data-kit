---
name: I_PRODUCTVALUATION
description: "This CDS view is a basic view and this is for maintaining multiple Valuation Areas for a Product."
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTVALUATION')/$value
semantic_en: "This CDS view is a basic view and this is for maintaining multiple Valuation Areas for a Product."
semantic_vi: "Product Valuation — CDS view tổng hợp dựa trên mbew."
keywords:
  - "Product Valuation"
  - "product"
  - "valuation"
  - "area"
  - "type"
  - "class"
  - "price"
  - "determination"
  - "control"
tags:
  - LO
  - bo:material
  - component:LO-MD-MM-2CL
  - interface-view
  - LO-MD
  - LO-MD-MM
  - LO-MD-MM-2CL
  - lob:logistics general
  - lob:sourcing & procurement
  - product
---
# I_PRODUCTVALUATION

**This CDS view is a basic view and this is for maintaining multiple Valuation Areas for a Product.**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTVALUATION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  | `matnr` | `CHAR(40)` | Material Number |
| `ValuationArea` | ✓ | |  | `bwkey` | `CHAR(4)` | Valuation Area |
| `ValuationType` | ✓ | |  | `bwtar` | `CHAR(10)` | Valuation Type |
| `ValuationClass` |  | |  | `bklas` | `CHAR(4)` | Valuation Class |
| `PriceDeterminationControl` |  | |  | `mlast` | `CHAR(1)` | Material Price Determination: Control |
| `FiscalMonthCurrentPeriod` |  | |  | `lfmon` | `NUMC(2)` | Current period (posting period) |
| `FiscalYearCurrentPeriod` |  | |  | `lfgja` | `NUMC(4)` | Fiscal Year of Current Period |
| `StandardPrice` |  | |  | `stprs` | `CURR(11)` | Standard price |
| `PriceUnitQty` |  | |  | `peinh` | `DEC(5)` | Price Unit |
| `InventoryValuationProcedure` |  | |  | `cast(Valuation.vprsv as inventoryvaluationprocedure preserving type )` | `CHAR(1)` | Price Control |
| `FutureEvaluatedAmountValue` |  | |  | `zkprs` | `CURR(11)` | Future Price |
| `FuturePriceValidityStartDate` |  | |  | `zkdat` | `DATS(8)` | Date as of which the price is valid |
| `PrevInvtryPriceInCoCodeCrcy` |  | |  | `stprv` | `CURR(11)` | Previous Price |
| `MovingAveragePrice` |  | |  | `verpr` | `CURR(11)` | Moving Average Price/Periodic Unit Price |
| `ValuationCategory` |  | |  | `bwtty` | `CHAR(1)` | Valuation Category |
| `ProductUsageType` |  | |  | `cast (Valuation.mtuse as productusagetype preserving type )` | `CHAR(1)` | Usage of the Product |
| `ProductOriginType` |  | |  | `cast (Valuation.mtorg as productorigintype preserving type )` | `CHAR(1)` | Origin of the Product |
| `IsProducedInhouse` |  | |  | `ownpr` | `CHAR(1)` | In-House Production |
| `ProdCostEstNumber` |  | |  | `kaln1` | `NUMC(12)` | Cost Estimate Number - Product Costing |
| `IsMarkedForDeletion` |  | |  | `lvorm` | `CHAR(1)` | Deletion flag for all material data of a valuation type |
| `ValuationMargin` |  | |  | `bwspa` | `DEC(6)` | Valuation margin |
| `IsActiveEntity` |  | |  | `cast( 'X' as sdraft_is_active preserving type )` | `CHAR(1)` | Draft - Indicator - Is active document |
| `CompanyCode` |  | |  | `bukrs` | `CHAR(4)` | Company Code |
| `ValuationClassSalesOrderStock` |  | |  | `eklas` | `CHAR(4)` | Valuation Class for Sales Order Stock |
| `ProjectStockValuationClass` |  | |  | `qklas` | `CHAR(4)` | Valuation Class for Project Stock |
| `PlannedPrice1InCoCodeCrcy` |  | |  | `zplp1` | `CURR(11)` | Future Planned Price 1 |
| `PlannedPrice2InCoCodeCrcy` |  | |  | `zplp2` | `CURR(11)` | Future Planned Price 2 |
| `PlannedPrice3InCoCodeCrcy` |  | |  | `zplp3` | `CURR(11)` | Future Planned Price 3 |
| `FuturePlndPrice1ValdtyDate` |  | |  | `zpld1` | `DATS(8)` | Date from Which Future Planned Price 1 Is Valid |
| `FuturePlndPrice2ValdtyDate` |  | |  | `zpld2` | `DATS(8)` | Date from Which Future Planned Price 2 Is Valid |
| `FuturePlndPrice3ValdtyDate` |  | |  | `zpld3` | `DATS(8)` | Date from Which Future Planned Price 3 Is Valid |
| `TaxBasedPricesPriceUnitQty` |  | |  | `bwpei` | `DEC(5)` | Price unit for valuation prices based on tax/commercial law |
| `PriceLastChangeDate` |  | |  | `laepr` | `DATS(8)` | Date of Last Price Change |
| `PlannedPrice` |  | |  | `zplpr` | `CURR(11)` | Future Planned Price |
| `Currency` |  | |  | `waers` | `CUKY(5)` | Currency Key |
| `MLIsActiveAtProductLevel` |  | |  | `mlmaa` | `CHAR(1)` | Material Ledger Activated at Material Level |
| `BaseUnit` |  | | `_Product` | `BaseUnit` | `UNIT(3)` | Base Unit of Measure |
| `_Product` | | ✓ | | | | |
| `_ValuationClass` | | ✓ | | | | |
| `_ValuationClassText` | | ✓ | | | | |
| `_ValnClassSalesOrderStock` | | ✓ | | | | |
| `_ValnClassSalesOrderStockText` | | ✓ | | | | |
| `_ValnClassProjectStock` | | ✓ | | | | |
| `_ValnClassProjectStockText` | | ✓ | | | | |
| `_InventoryValnProcedure` | | ✓ | | | | |
| `_InventoryValnProcedureText` | | ✓ | | | | |
| `_PriceDeterminationControl` | | ✓ | | | | |
| `_PriceDeterminationControlText` | | ✓ | | | | |
| `_BR_MaterialUsage` | | ✓ | | | | |
| `_BR_MaterialUsageText` | | ✓ | | | | |
| `_BR_MaterialOrigin` | | ✓ | | | | |
| `_BR_MaterialOriginText` | | ✓ | | | | |
| `_InventoryValuationType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [1..1] |
| `_ValuationClass` | `I_Prodvaluationclass` | [0..1] |
| `_ValuationClassText` | `I_Prodvaluationclasstxt` | [0..*] |
| `_ValnClassSalesOrderStock` | `I_Prodvaluationclass` | [0..1] |
| `_ValnClassSalesOrderStockText` | `I_Prodvaluationclasstxt` | [0..*] |
| `_ValnClassProjectStock` | `I_Prodvaluationclass` | [0..1] |
| `_ValnClassProjectStockText` | `I_Prodvaluationclasstxt` | [0..*] |
| `_InventoryValnProcedure` | `I_ProdValnPriceControl` | [0..1] |
| `_InventoryValnProcedureText` | `I_ProdValnPriceControlText` | [0..*] |
| `_PriceDeterminationControl` | `I_PriceDeterminationControl` | [0..1] |
| `_PriceDeterminationControlText` | `I_PriceDeterminationControlTxt` | [0..*] |
| `_BR_MaterialUsage` | `I_BR_MaterialUsage` | [0..1] |
| `_BR_MaterialUsageText` | `I_BR_MaterialUsageText` | [0..*] |
| `_BR_MaterialOrigin` | `I_BR_MaterialOrigin` | [0..1] |
| `_BR_MaterialOriginText` | `I_BR_MaterialOriginText` | [0..*] |
| `_ProdValuationExt` | `E_Productvaluation` | [0..1] |
| `_InventoryValuationType` | `I_InventoryValuationType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTVALUATION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTVALUATION')/$value)*

```abap
// Product Valuation
@AbapCatalog.sqlViewName: 'IPRDVALUATION'
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Product Valuation'
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #XL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET ]

@VDM:{
  viewType: #COMPOSITE,
   lifecycle: {
   status: #DEPRECATED,
   successor: 'I_ProductValuationBasic'
 }
}


define view I_ProductValuation
  as select from mbew as Valuation
    inner join   t001k on Valuation.bwkey = t001k.bwkey
    inner join   marv  on marv.bukrs = t001k.bukrs
    inner join   t001  on t001.bukrs = t001k.bukrs


  association [1..1] to I_Product                      as _Product                       on  $projection.Product = _Product.Product

  association [0..1] to I_Prodvaluationclass           as _ValuationClass                on  $projection.ValuationClass = _ValuationClass.ValuationClass
  association [0..*] to I_Prodvaluationclasstxt        as _ValuationClassText            on  $projection.ValuationClass = _ValuationClassText.ValuationClass
  association [0..1] to I_Prodvaluationclass           as _ValnClassSalesOrderStock      on  $projection.ValuationClassSalesOrderStock = _ValnClassSalesOrderStock.ValuationClass
  association [0..*] to I_Prodvaluationclasstxt        as _ValnClassSalesOrderStockText  on  $projection.ValuationClassSalesOrderStock = _ValnClassSalesOrderStockText.ValuationClass
  association [0..1] to I_Prodvaluationclass           as _ValnClassProjectStock         on  $projection.ProjectStockValuationClass = _ValnClassProjectStock.ValuationClass
  association [0..*] to I_Prodvaluationclasstxt        as _ValnClassProjectStockText     on  $projection.ProjectStockValuationClass = _ValnClassProjectStockText.ValuationClass
  association [0..1] to I_ProdValnPriceControl         as _InventoryValnProcedure        on  $projection.InventoryValuationProcedure = _InventoryValnProcedure.InventoryValuationProcedure
  association [0..*] to I_ProdValnPriceControlText     as _InventoryValnProcedureText    on  $projection.InventoryValuationProcedure = _InventoryValnProcedureText.InventoryValuationProcedure
  association [0..1] to I_PriceDeterminationControl    as _PriceDeterminationControl     on  $projection.PriceDeterminationControl = _PriceDeterminationControl.PriceDeterminationControl
  association [0..*] to I_PriceDeterminationControlTxt as _PriceDeterminationControlText on  $projection.PriceDeterminationControl = _PriceDeterminationControlText.PriceDeterminationControl
  association [0..1] to I_BR_MaterialUsage             as _BR_MaterialUsage              on  $projection.ProductUsageType = _BR_MaterialUsage.BR_MaterialUsage
  association [0..*] to I_BR_MaterialUsageText         as _BR_MaterialUsageText          on  $projection.ProductUsageType = _BR_MaterialUsageText.BR_MaterialUsage
  association [0..1] to I_BR_MaterialOrigin            as _BR_MaterialOrigin             on  $projection.ProductOriginType = _BR_MaterialOrigin.BR_MaterialOrigin
  association [0..*] to I_BR_MaterialOriginText        as _BR_MaterialOriginText         on  $projection.ProductOriginType = _BR_MaterialOriginText.BR_MaterialOrigin

  association [0..1] to E_Productvaluation             as _ProdValuationExt              on  $projection.Product       = _ProdValuationExt.Product
                                                                                         and $projection.ValuationArea = _ProdValuationExt.ValuationArea
                                                                                         and $projection.ValuationType = _ProdValuationExt.ValuationType

  association [0..1] to I_InventoryValuationType       as _InventoryValuationType        on  $projection.ValuationType = _InventoryValuationType.InventoryValuationType

{
  key Valuation.matnr                                                       as Product,
  key Valuation.bwkey                                                       as ValuationArea,
      @ObjectModel.foreignKey.association: '_InventoryValuationType'
  key Valuation.bwtar                                                       as ValuationType,
      @ObjectModel : {
                foreignKey.association: '_ValuationClass',
                text.association: '_ValuationClassText'
             }
      Valuation.bklas                                                       as ValuationClass,
      @ObjectModel.foreignKey.association: '_PriceDeterminationControl'
      @ObjectModel.text.association:'_PriceDeterminationControlText'
      Valuation.mlast                                                       as PriceDeterminationControl,
      //      Valuation.mlmaa                                        as TaxClassificationCategory,   //PSTAT Move : Moved to I_ProductValuationAcct
      //      Valuation.vjbkl                                        as ValuationClassInPrevYear, //pstat changes
      //      Valuation.vmbkl                                        as ValuationClassInPrevPeriod, //pstat changes
      marv.lfmon                                                            as FiscalMonthCurrentPeriod, // pstat
      marv.lfgja                                                            as FiscalYearCurrentPeriod,  //pstat
      @Semantics.amount.currencyCode: 'Currency'
      Valuation.stprs                                                       as StandardPrice,
      Valuation.peinh                                                       as PriceUnitQty,
      @ObjectModel.foreignKey.association: '_InventoryValnProcedure'
      @ObjectModel.text.association:'_InventoryValnProcedureText'
      cast(Valuation.vprsv as inventoryvaluationprocedure preserving type ) as InventoryValuationProcedure,
      Valuation.zkprs                                                       as FutureEvaluatedAmountValue, //PSTAT Move : Moved to I_ProductValuationAcct
      Valuation.zkdat                                                       as FuturePriceValidityStartDate, //PSTAT Move : Moved to I_ProductValuationAcct

      //NEW FIELDS
      @Semantics.amount.currencyCode: 'Currency'
      Valuation.stprv                                                       as PrevInvtryPriceInCoCodeCrcy,

      //      cast (Valuation.lbkum as totalvalstockquantity )       as TotalValStockQuantity,
      @Semantics.amount.currencyCode: 'Currency'
      Valuation.verpr                                                       as MovingAveragePrice,
      //      cast (Valuation.vmkum as totalvalstockprevperiod )     as TotalValStockPrevPeriod,    //pstat
      //      cast (Valuation.vmsal as totalvalstockprevperiodvalue) as TotalValStockPrevPeriodValue, //pstat
      //      cast (Valuation.vjkum as totalvalstockprevyear )       as TotalValStockPrevYear,  //PSTAT Delete
      //      cast (Valuation.vjsal as totalvalstockprevyearvalue )  as TotalValStockPrevYearValue,  //PSTAT Delete
      Valuation.bwtty                                                       as ValuationCategory,
      //      cast (Valuation.salk3 as totalvalstockvalue   )        as TotalValStockValue,   //pstat
      @ObjectModel.foreignKey.association: '_BR_MaterialUsage'
      @ObjectModel.text.association:'_BR_MaterialUsageText'
      cast (Valuation.mtuse    as productusagetype preserving type )        as ProductUsageType,
      @ObjectModel.foreignKey.association: '_BR_MaterialOrigin'
      @ObjectModel.text.association:'_BR_MaterialOriginText'
      cast (Valuation.mtorg    as productorigintype preserving type )       as ProductOriginType,
      Valuation.ownpr                                                       as IsProducedInhouse,
      //      Valuation.oklas                                        as ValnClsForSpclStkAtVndr,    //pstat
      Valuation.kaln1                                                       as ProdCostEstNumber,
      //      Valuation.kalnr                                        as CostEstimateNumber,
      Valuation.lvorm                                                       as IsMarkedForDeletion,
      //Retail field

      Valuation.bwspa                                                       as ValuationMargin,
      cast( 'X' as sdraft_is_active preserving type )                       as IsActiveEntity, // to enbale extensibility in Draft 2.0

      //ML fields
      t001k.bukrs                                                           as CompanyCode,
      @ObjectModel : {
         foreignKey.association: '_ValnClassSalesOrderStock',
         text.association: '_ValnClassSalesOrderStockText'
      }

      Valuation.eklas                                                       as ValuationClassSalesOrderStock,
      @ObjectModel : {
                      foreignKey.association: '_ValnClassProjectStock',
                      text.association: '_ValnClassProjectStockText'
                   }
      Valuation.qklas                                                       as ProjectStockValuationClass,
      @Semantics.amount.currencyCode: 'Currency'
      @VDM.lifecycle.status: #DEPRECATED
      Valuation.zplp1                                                       as PlannedPrice1InCoCodeCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      @VDM.lifecycle.status: #DEPRECATED
      Valuation.zplp2                                                       as PlannedPrice2InCoCodeCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      @VDM.lifecycle.status: #DEPRECATED
      Valuation.zplp3                                                       as PlannedPrice3InCoCodeCrcy,
      @VDM.lifecycle.status: #DEPRECATED
      Valuation.zpld1                                                       as FuturePlndPrice1ValdtyDate,
      @VDM.lifecycle.status: #DEPRECATED
      Valuation.zpld2                                                       as FuturePlndPrice2ValdtyDate,
      @VDM.lifecycle.status: #DEPRECATED
      Valuation.zpld3                                                       as FuturePlndPrice3ValdtyDate,
      //      Valuation.bwprs                                        as TaxPricel1InCoCodeCrcy,  //PSTAT Move : Moved to I_ProductValuationAcct
      //      Valuation.bwps1                                        as TaxPrice2InCoCodeCrcy,  //PSTAT Move : Moved to I_ProductValuationAcct
      //      Valuation.vjbws                                        as TaxPrice3InCoCodeCrcy,  //PSTAT Move : Moved to I_ProductValuationAcct
      //      Valuation.bwprh                                        as CommercialPrice1InCoCodeCrcy,  //PSTAT Move : Moved to I_ProductValuationAcct
      //      Valuation.bwph1                                        as CommercialPrice2InCoCodeCrcy,  //PSTAT Move : Moved to I_ProductValuationAcct
      //      Valuation.vjbwh                                        as CommercialPrice3InCoCodeCrcy,  //PSTAT Move : Moved to I_ProductValuationAcct
      //      Valuation.abwkz                                        as DevaluationYearCount,    //PSTAT Move : Moved to I_ProductValuationAcct
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      Valuation.bwpei                                                       as TaxBasedPricesPriceUnitQty,
      //      Valuation.mypol                                        as LIFOValuationPoolNumber,    //PSTAT Move : Moved to I_ProductValuationAcct
      //      Valuation.xlifo                                        as IsLIFOAndFIFORelevant,    //PSTAT Move : Moved to I_ProductValuationAcct
      Valuation.laepr                                                       as PriceLastChangeDate,
      @Semantics.amount.currencyCode: 'Currency'
      @VDM.lifecycle.status: #DEPRECATED
      Valuation.zplpr                                                       as PlannedPrice,
      //      Valuation.bwva1                                                        as FutrCostEstValuationVariant, //PSTAT Delete : Read only
      //      Valuation.fbwst                                                        as FutrPlanProjSlsOrdValnStrategy, //PSTAT Delete : Read only
      //      Valuation.fplpx                                                        as FixedPortionOfPlannedPrice,  //PSTAT Delete : Read only
      //      Valuation.vers1                                                        as FutureCostEstCostingVersion, //PSTAT Delete : Read only
      t001.waers                                                            as Currency,
      Valuation.mlmaa                                                       as MLIsActiveAtProductLevel,
      @Semantics.unitOfMeasure: true
      _Product.BaseUnit,
      //      Valuation.pprdz                                                        as FutureCostEstimateFiscalPeriod,
      //      Valuation.pdatz                                                        as FutureCostEstFiscalYear,
      _Product,
      _ValuationClass,
      _ValuationClassText,
      _ValnClassSalesOrderStock,
      _ValnClassSalesOrderStockText,
      _ValnClassProjectStock,
      _ValnClassProjectStockText,
      _InventoryValnProcedure,
      _InventoryValnProcedureText,
      _PriceDeterminationControl,
      _PriceDeterminationControlText,
      _BR_MaterialUsage,
      _BR_MaterialUsageText,
      _BR_MaterialOrigin,
      _BR_MaterialOriginText,
      _InventoryValuationType





}
```
