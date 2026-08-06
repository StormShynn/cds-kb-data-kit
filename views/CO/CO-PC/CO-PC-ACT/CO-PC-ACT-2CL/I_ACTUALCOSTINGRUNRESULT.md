---
name: I_ACTUALCOSTINGRUNRESULT
description: Actualcostingrunresult
app_component: CO-PC-ACT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-PC
  - CO-PC-ACT
  - interface-view
  - component:CO-PC-ACT-2CL
  - lob:Controlling
---
# I_ACTUALCOSTINGRUNRESULT

**Actualcostingrunresult**

| Property | Value |
|---|---|
| App Component | `CO-PC-ACT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CostEstimate` | `CostEstimate` |
| key `CurrencyRole` | `CurrencyRole` |
| key `Ledger` | `Ledger` |
| key `MaterialLedgerCategory` | `MaterialLedgerCategory` |
| key `ProcessCategory` | `ProcessCategory` |
| `ValuationArea` | `ValuationArea` |
| `Material` | `Material` |
| `InventoryValuationType` | `InventoryValuationType` |
| `SalesOrder` | `SalesOrder` |
| `SalesOrderItem` | `SalesOrderItem` |
| `InventorySpecialStockType` | `InventorySpecialStockType` |
| `Supplier` | `Supplier` |
| `WBSElementExternalID` | `WBSElementExternalID` |
| `MaterialLedgerCategoryText` | `MaterialLedgerCategoryText` |
| `ProcessCategoryName` | `ProcessCategoryName` |
| `InventorySpecialStockTypeName` | `InventorySpecialStockTypeName` |
| `TotalVltdStockQuantity` | `TotalVltdStockQuantity` |
| `ValuationQuantityUnit` | `ValuationQuantityUnit` |
| `InventoryAmtInDspCrcy` | `InventoryAmtInDspCrcy` |
| `InvtryTransacAmtInDisplayCrcy` | `InvtryTransacAmtInDisplayCrcy` |
| `PriceDiffAmtInDisplayCrcy` | `PriceDiffAmtInDisplayCrcy` |
| `ExchRateDiffAmtInDspCurrency` | `ExchRateDiffAmtInDspCurrency` |
| `Currency` | `Currency` |
| `ControllingArea` | `ControllingArea` |
| `ControllingValuationType` | `ControllingValuationType` |
| `_Product` | *Association* |
| `_Plant` | *Association* |
| `_Ledger` | *Association* |
| `_Currency` | *Association* |
| `_QuantityUnit` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [1..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_Ledger` | `I_Ledger` | [1..1] |
| `_Currency` | `I_Currency` | [1..1] |
| `_QuantityUnit` | `I_UnitOfMeasure` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl: {
                  authorizationCheck: #MANDATORY,
                  personalData.blocking: #REQUIRED
                }
@ObjectModel: {
                usageType: {
                             serviceQuality: #D,
                             sizeCategory: #XXL,
                             dataClass: #MIXED
                           },
                supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
                modelingPattern: #ANALYTICAL_CUBE
              }
@VDM: {
        viewType: #COMPOSITE,
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      }
@Metadata: {
             ignorePropagatedAnnotations: true
           }
@EndUserText.label: 'Actual Costing Run Results'
define view entity I_ActualCostingRunResult
  with parameters
    P_CostingRunType :ckml_run_type,
    P_FiscalPeriod   :fins_fiscalperiod,
    P_FiscalYear     :fis_gjahr_no_conv
  as select from P_ActlCostgRunRsltAggrgnWthTxt(P_CostingRunType : $parameters.P_CostingRunType,
                                                P_FiscalPeriod: $parameters.P_FiscalPeriod,
                                                P_FiscalYear: $parameters.P_FiscalYear)

  association [1..1] to I_Product       as _Product      on $projection.Material = _Product.Product
  association [0..1] to I_Plant         as _Plant        on $projection.ValuationArea = _Plant.Plant
  association [1..1] to I_Ledger        as _Ledger       on $projection.Ledger = _Ledger.Ledger
  association [1..1] to I_Currency      as _Currency     on $projection.Currency = _Currency.Currency
  association [1..1] to I_UnitOfMeasure as _QuantityUnit on $projection.ValuationQuantityUnit = _QuantityUnit.UnitOfMeasure
{
  key CostEstimate,
  key CurrencyRole,
      @ObjectModel.foreignKey.association: '_Ledger'
  key Ledger,
      @ObjectModel.text.element: ['MaterialLedgerCategoryText']
  key MaterialLedgerCategory,
      @ObjectModel.text.element: ['ProcessCategoryName']
  key ProcessCategory,
      @ObjectModel.foreignKey.association: '_Plant'
      ValuationArea,
      @ObjectModel.foreignKey.association: '_Product'
      Material,
      InventoryValuationType,
      SalesOrder,
      SalesOrderItem,
      @ObjectModel.text.element: ['InventorySpecialStockTypeName']
      InventorySpecialStockType,
      Supplier,
      WBSElementExternalID,
      @Semantics.text: true
      MaterialLedgerCategoryText,
      @Semantics.text: true
      ProcessCategoryName,
      @Semantics.text: true
      InventorySpecialStockTypeName,
      @Semantics.quantity.unitOfMeasure: 'ValuationQuantityUnit'
      TotalVltdStockQuantity,
      @ObjectModel.foreignKey.association: '_QuantityUnit'
      ValuationQuantityUnit,
      @Semantics.amount.currencyCode: 'Currency'
      InventoryAmtInDspCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      InvtryTransacAmtInDisplayCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      PriceDiffAmtInDisplayCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      ExchRateDiffAmtInDspCurrency,
      @ObjectModel.foreignKey.association: '_Currency'
      Currency,

      @Consumption.hidden: true
      ControllingArea,
      @Consumption.hidden: true
      ControllingValuationType,

      _Product,
      _Plant,
      _Ledger,
      _Currency,
      _QuantityUnit
}
```
