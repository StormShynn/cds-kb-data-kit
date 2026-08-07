---
name: I_MATLINVTRYLDGRQTYSTRUCTURE
description: "Matlinvtryldgrqtystructure"
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
# I_MATLINVTRYLDGRQTYSTRUCTURE

**Matlinvtryldgrqtystructure**

| Property | Value |
|---|---|
| App Component | `CO-PC-ACT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CostEstimate` | ✓ | |  |  |  |  |
| `CurrencyRole` | ✓ | |  |  |  |  |
| `Ledger` | ✓ | |  |  |  |  |
| `MaterialLedgerCategory` | ✓ | |  |  |  |  |
| `ProcessCategory` | ✓ | |  |  |  |  |
| `ValuationArea` | ✓ | |  |  |  |  |
| `PriceDeterminationControl` | ✓ | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `InventoryValuationType` |  | |  |  |  |  |
| `SalesOrder` |  | |  |  |  |  |
| `SalesOrderItem` |  | |  |  |  |  |
| `InventorySpecialStockType` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `WBSElementExternalID` |  | |  |  |  |  |
| `MaterialLedgerCategoryText` |  | |  |  |  |  |
| `ProcessCategoryName` |  | |  |  |  |  |
| `InventorySpecialStockTypeName` |  | |  |  |  |  |
| `TotalVltdStockQuantity` |  | |  |  |  |  |
| `ValuationQuantityUnit` |  | |  |  |  |  |
| `InventoryAmtInDspCrcy` |  | |  |  |  |  |
| `InvtryTransacAmtInDisplayCrcy` |  | |  |  |  |  |
| `PriceDiffAmtInDisplayCrcy` |  | |  |  |  |  |
| `ExchRateDiffAmtInDspCurrency` |  | |  |  |  |  |
| `Currency` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `ControllingValuationType` |  | |  |  |  |  |
| `_Product` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_QuantityUnit` | | ✓ | | | | |

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
@EndUserText.label: 'Matl Invtry Ledger with Qty Structure'
define view entity I_MatlInvtryLdgrQtyStructure
  with parameters
    @Semantics.fiscal.yearPeriod: true
    P_FromFiscalYearPeriod :fml_fyearperiod_from,
    @Semantics.fiscal.yearPeriod: true
    P_ToFiscalYearPeriod   :fml_fyearperiod_to
  as select from P_MatlInvtryLdgrQtyStructure(P_FromFiscalYearPeriod : $parameters.P_FromFiscalYearPeriod,
                                              P_ToFiscalYearPeriod: $parameters.P_ToFiscalYearPeriod)

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
  key ValuationArea,
  key PriceDeterminationControl,
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
