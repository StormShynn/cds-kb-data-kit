---
name: I_STOCKQUANTITYVALUEBYTYPE
description: "Stockquantityvaluebytype"
app_component: MM-IM-VDM-SGM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-VDM
  - interface-view
  - component:MM-IM-VDM-SGM-2CL
  - lob:Sourcing & Procurement
---
# I_STOCKQUANTITYVALUEBYTYPE

**Stockquantityvaluebytype**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-SGM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Material` | ✓ | |  |  |  |  |
| `Plant` | ✓ | |  |  |  |  |
| `StorageLocation` | ✓ | |  |  |  |  |
| `InventoryStockType` | ✓ | |  |  |  |  |
| `InventorySpecialStockType` | ✓ | |  |  |  |  |
| `MaterialBaseUnit` | ✓ | |  |  |  |  |
| `Currency` | ✓ | |  |  |  |  |
| `ValuationAreaType` | ✓ | |  |  |  |  |
| `MatlWrhsStkQtyInMatlBaseUnit` |  | |  |  |  |  |
| `StockValueInCCCrcy` |  | |  |  |  |  |
| `_Currency` | | ✓ | | | | |
| `_ProductPlantBasic` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_StorageLocation` | | ✓ | | | | |
| `_InventoryStockType` | | ✓ | | | | |
| `_InventorySpecialStockType` | | ✓ | | | | |
| `_MaterialBaseUnit` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Currency` | `I_Currency` | [1..1] |
| `_ProductPlantBasic` | `I_ProductPlantBasic` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Stock Quantity and Value by Type'
@AccessControl: {
                  authorizationCheck: #CHECK,
                  personalData.blocking: #BLOCKED_DATA_EXCLUDED
                }
@ObjectModel: {
                usageType: {
                             sizeCategory: #XXL,
                             serviceQuality: #D,
                             dataClass:#TRANSACTIONAL
                           },
                supportedCapabilities: [#ANALYTICAL_PROVIDER],
                modelingPattern: #ANALYTICAL_CUBE
             }
@VDM: {
        viewType: #COMPOSITE,
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      }
@Analytics.dataCategory:#CUBE
@Analytics.technicalName: 'ISTOCKVALBYTYPE'
@Metadata: {
             allowExtensions: true,
             ignorePropagatedAnnotations: true
           }
@Consumption.dbHints:['USE_HEX_PLAN']
define view entity I_StockQuantityValueByType 
as select from P_StkValueByType4
association [1..1] to I_Currency as _Currency on  $projection.Currency = _Currency.Currency
association [0..1] to I_ProductPlantBasic as _ProductPlantBasic on  $projection.Material = _ProductPlantBasic.Product 
                                                                and $projection.Plant    = _ProductPlantBasic.Plant 
{
      @ObjectModel.foreignKey.association: '_Product'
  key Material,
      @ObjectModel.foreignKey.association: '_Plant'
  key Plant,
      @ObjectModel.foreignKey.association: '_StorageLocation'
  key StorageLocation,
      @ObjectModel.foreignKey.association: '_InventoryStockType'
  key InventoryStockType,
      @ObjectModel.foreignKey.association: '_InventorySpecialStockType'
  key InventorySpecialStockType,
      @ObjectModel.foreignKey.association: '_MaterialBaseUnit'
  key MaterialBaseUnit,
      @ObjectModel.foreignKey.association: '_Currency'
  key Currency, 
      @Environment.sql.passValue: true
  key ValuationAreaType,  

    @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
    @DefaultAggregation : #SUM
  MatlWrhsStkQtyInMatlBaseUnit,
    @Semantics.amount.currencyCode: 'Currency'
    @DefaultAggregation : #SUM
  StockValueInCCCrcy,

  _Product,    
  _Plant,
  _StorageLocation,
  _InventoryStockType,
  _InventorySpecialStockType,
  _Currency,
  _MaterialBaseUnit,
  _ProductPlantBasic
}
```
