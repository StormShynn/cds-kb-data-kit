---
name: I_PRODNORDCONFMATLDOCITEMTP
description: Prodnordconfmatldocitemtp
app_component: PP-SFC-EXE-CON-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-SFC
  - PP-SFC-EXE
  - interface-view
  - transactional-processing
  - item-level
  - component:PP-SFC-EXE-CON-2CL
  - lob:Manufacturing
---
# I_PRODNORDCONFMATLDOCITEMTP

**Prodnordconfmatldocitemtp**

| Property | Value |
|---|---|
| App Component | `PP-SFC-EXE-CON-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ConfirmationGroup` | `ConfirmationGroup` |
| key `ConfirmationCount` | `ConfirmationCount` |
| key `MaterialDocument` | `MaterialDocument` |
| key `MaterialDocumentItem` | `MaterialDocumentItem` |
| key `MaterialDocumentYear` | `MaterialDocumentYear` |
| `OrderType` | `OrderType` |
| `OrderID` | `OrderID` |
| `OrderItem` | `OrderItem` |
| `ManufacturingOrderCategory` | `ManufacturingOrderCategory` |
| `Material` | `Material` |
| `Plant` | `Plant` |
| `Reservation` | `Reservation` |
| `ReservationItem` | `ReservationItem` |
| `StorageLocation` | `StorageLocation` |
| `ProductionSupplyArea` | `ProductionSupplyArea` |
| `Batch` | `Batch` |
| `InventoryValuationType` | `InventoryValuationType` |
| `GoodsMovementType` | `GoodsMovementType` |
| `GoodsMovementRefDocType` | `GoodsMovementRefDocType` |
| `InventoryUsabilityCode` | `InventoryUsabilityCode` |
| `InventorySpecialStockType` | `InventorySpecialStockType` |
| `SalesOrder` | `SalesOrder` |
| `SalesOrderItem` | `SalesOrderItem` |
| `WBSElementExternalID` | `WBSElementExternalID` |
| `Supplier` | `Supplier` |
| `Customer` | `Customer` |
| `ReservationIsFinallyIssued` | `ReservationIsFinallyIssued` |
| `IsCompletelyDelivered` | `IsCompletelyDelivered` |
| `ShelfLifeExpirationDate` | `ShelfLifeExpirationDate` |
| `ManufactureDate` | `ManufactureDate` |
| `StorageType` | `StorageType` |
| `StorageBin` | `StorageBin` |
| `MaterialDocumentItemText` | `MaterialDocumentItemText` |
| `EntryUnit` | `EntryUnit` |
| `EntryUnitISOCode` | `EntryUnitISOCode` |
| `EntryUnitSAPCode` | `EntryUnitSAPCode` |
| `QuantityInEntryUnit` | `QuantityInEntryUnit` |
| `_Customer` | *Association* |
| `_ProdnOrdConf` | *Association* |
| `_Supplier` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Prodn Order Conf Material Document - TP'
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@ObjectModel.usageType: {serviceQuality: #D, sizeCategory: #XL, dataClass: #MIXED}

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@Metadata.ignorePropagatedAnnotations: true

define view entity I_ProdnOrdConfMatlDocItemTP as projection on R_ProdnOrdConfMatlDocItemTP {
  //Key
  key ConfirmationGroup,
  key ConfirmationCount,
  key MaterialDocument,
  key MaterialDocumentItem,
  key MaterialDocumentYear,
  
  //Order and Operation Data
  OrderType,
  OrderID,
  OrderItem,
  ManufacturingOrderCategory,
  
  //Goods Movement Data
  Material,
  Plant,
  Reservation,
  ReservationItem,
  StorageLocation,
  ProductionSupplyArea,
  Batch,
  InventoryValuationType,
  GoodsMovementType,
  GoodsMovementRefDocType,
  InventoryUsabilityCode,
  InventorySpecialStockType,
  SalesOrder,
  SalesOrderItem,
  WBSElementExternalID,
  Supplier,
  Customer,
  ReservationIsFinallyIssued,
  IsCompletelyDelivered,
  ShelfLifeExpirationDate,
  ManufactureDate,
  StorageType,
  StorageBin,
  
  //Text
  MaterialDocumentItemText,
  
  //Quantities and UoM
  EntryUnit,
  EntryUnitISOCode,
  EntryUnitSAPCode,
  @Semantics.quantity.unitOfMeasure: 'EntryUnit'
  QuantityInEntryUnit,
  
  /* Associations */
  _Customer,
  _ProdnOrdConf : redirected to parent I_ProductionOrdConfirmationTP,
  _Supplier
}
```
