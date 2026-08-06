---
name: I_WIPQUANTITYDOCUMENT
description: Wipquantitydocument
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
  - document
  - component:CO-PC-ACT-2CL
  - lob:Controlling
---
# I_WIPQUANTITYDOCUMENT

**Wipquantitydocument**

| Property | Value |
|---|---|
| App Component | `CO-PC-ACT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ControllingDocument` | `ControllingDocument` |
| key `Plant` | `Plant` |
| key `CostEstimate` | `CostEstimate` |
| key `FiscalYear` | `FiscalYear` |
| key `FiscalPeriod` | `FiscalPeriod` |
| `FiscalYearPeriod` | `FiscalYearPeriod` |
| `ObjectInternalID` | `ObjectInternalID` |
| `OrderID` | `OrderID` |
| `OrderItem` | `OrderItem` |
| `ControllingArea` | `ControllingArea` |
| `ProductionProcess` | `ProductionProcess` |
| `PostingPeriod` | `PostingPeriod` |
| `PostingDate` | `PostingDate` |
| `CreatedByUser` | `CreatedByUser` |
| `ActualCostingObjectType` | `ActualCostingObjectType` |
| `ActualCostingObjectTypeName` | `ActualCostingObjectTypeName` |
| `Material` | `Material` |
| `InventoryValuationType` | `InventoryValuationType` |
| `InventorySpecialStockType` | `InventorySpecialStockType` |
| `InventorySpecialStockTypeName` | `InventorySpecialStockTypeName` |
| `InventorySpecialStockValnType` | `InventorySpecialStockValnType` |
| `SalesOrder` | `SalesOrder` |
| `SalesOrderItem` | `SalesOrderItem` |
| `WBSElementExternalID` | `WBSElementExternalID` |
| `CostCenter` | `CostCenter` |
| `CostCtrActivityType` | `CostCtrActivityType` |
| `QuantityUnit` | `QuantityUnit` |
| `WIPQuantity` | `WIPQuantity` |
| `DeltaQuantity` | `DeltaQuantity` |
| `_Product` | *Association* |
| `_Plant` | *Association* |
| `_QuantityUnit` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [1..1] |
| `_Plant` | `I_Plant` | [0..1] |
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
                supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
              }
@VDM: {
        viewType: #COMPOSITE,
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      }
@Metadata: {
             ignorePropagatedAnnotations: true
           }
@EndUserText.label: 'Work In Process Quantity Document'
define view entity I_WIPQuantityDocument
  with parameters
    P_FromFiscalYearPeriod :fml_fyearperiod_from,
    P_ToFiscalYearPeriod   :fml_fyearperiod_to
  as select from P_MLWIPQuantityDoc( P_FromFiscalYearPeriod : $parameters.P_FromFiscalYearPeriod,
                                     P_ToFiscalYearPeriod   : $parameters.P_ToFiscalYearPeriod)

  association [1..1] to I_Product       as _Product      on $projection.Material = _Product.Product
  association [0..1] to I_Plant         as _Plant        on $projection.Plant = _Plant.Plant
  association [1..1] to I_UnitOfMeasure as _QuantityUnit on $projection.QuantityUnit = _QuantityUnit.UnitOfMeasure

{
  key  ControllingDocument,
       @ObjectModel.foreignKey.association: '_Plant'
  key  Plant,
  key  CostEstimate,
       @Semantics.fiscal.year: true
  key  FiscalYear,
       @Semantics.fiscal.period: true
       @EndUserText.label: 'Document Period'
  key  FiscalPeriod,
       @Semantics.fiscal.yearPeriod: true
       FiscalYearPeriod,
       ObjectInternalID,
       OrderID,
       OrderItem,
       ControllingArea,
       ProductionProcess,
       @Semantics.fiscal.period: true
       @EndUserText.label: 'WIP Quantity Period'
       PostingPeriod,
       PostingDate,
       CreatedByUser,
       ActualCostingObjectType,
       @Semantics.text: true
       ActualCostingObjectTypeName,
       @ObjectModel.foreignKey.association: '_Product'
       Material,
       InventoryValuationType,
       InventorySpecialStockType,
       @Semantics.text: true
       InventorySpecialStockTypeName,
       InventorySpecialStockValnType,
       SalesOrder,
       SalesOrderItem,
       WBSElementExternalID,
       CostCenter,
       CostCtrActivityType,
       @ObjectModel.foreignKey.association: '_QuantityUnit'
       QuantityUnit,
       @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
       @EndUserText.label: 'Total WIP Quantity'
       WIPQuantity,
       @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
       @EndUserText.label: 'Delta WIP Quantity'
       DeltaQuantity,

       _Product,
       _Plant,
       _QuantityUnit
}
```
