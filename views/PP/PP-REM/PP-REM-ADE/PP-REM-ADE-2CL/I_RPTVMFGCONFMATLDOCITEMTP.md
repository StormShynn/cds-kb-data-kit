---
name: I_RPTVMFGCONFMATLDOCITEMTP
description: Rptvmfgconfmatldocitemtp
app_component: PP-REM-ADE-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-REM
  - PP-REM-ADE
  - interface-view
  - transactional-processing
  - item-level
  - component:PP-REM-ADE-2CL
  - lob:Manufacturing
---
# I_RPTVMFGCONFMATLDOCITEMTP

**Rptvmfgconfmatldocitemtp**

| Property | Value |
|---|---|
| App Component | `PP-REM-ADE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `RepetitiveMfgConfirmation` | `RepetitiveMfgConfirmation` |
| key `MaterialDocument` | `MaterialDocument` |
| key `MaterialDocumentYear` | `MaterialDocumentYear` |
| key `MaterialDocumentItem` | `MaterialDocumentItem` |
| `PostingDate` | `PostingDate` |
| `DocumentDate` | `DocumentDate` |
| `CreatedByUser` | `CreatedByUser` |
| `ConfirmationPlant` | `ConfirmationPlant` |
| `ReportingPointOperation` | `ReportingPointOperation` |
| `RepetitiveMfgConfScenario` | `RepetitiveMfgConfScenario` |
| `RptvMfgConfProcessingType` | `RptvMfgConfProcessingType` |
| `RptvMfgConfReversedCode` | `RptvMfgConfReversedCode` |
| `Material` | `Material` |
| `Plant` | `Plant` |
| `Reservation` | `Reservation` |
| `ReservationItem` | `ReservationItem` |
| `ReservationRecordType` | `ReservationRecordType` |
| `StorageLocation` | `StorageLocation` |
| `ProductionSupplyArea` | `ProductionSupplyArea` |
| `Batch` | `Batch` |
| `InventoryValuationType` | `InventoryValuationType` |
| `DebitCreditCode` | `DebitCreditCode` |
| `GoodsMovementType` | `GoodsMovementType` |
| `GoodsMovementRefDocType` | `GoodsMovementRefDocType` |
| `InventoryUsabilityCode` | `InventoryUsabilityCode` |
| `InventorySpecialStockType` | `InventorySpecialStockType` |
| `InventorySpecialStockValnType` | `InventorySpecialStockValnType` |
| `SalesOrder` | `SalesOrder` |
| `SalesOrderItem` | `SalesOrderItem` |
| `WBSElementInternalID` | `WBSElementInternalID` |
| `WBSElementExternalID` | `WBSElementExternalID` |
| `Supplier` | `Supplier` |
| `Customer` | `Customer` |
| `GoodsRecipientName` | `GoodsRecipientName` |
| `UnloadingPointName` | `UnloadingPointName` |
| `ReservationIsFinallyIssued` | `ReservationIsFinallyIssued` |
| `IsCompletelyDelivered` | `IsCompletelyDelivered` |
| `ShelfLifeExpirationDate` | `ShelfLifeExpirationDate` |
| `ManufactureDate` | `ManufactureDate` |
| `StorageType` | `StorageType` |
| `StorageBin` | `StorageBin` |
| `EWMWarehouse` | `EWMWarehouse` |
| `EWMStorageBin` | `EWMStorageBin` |
| `EntryUnit` | `EntryUnit` |
| `EntryUnitISOCode` | `EntryUnitISOCode` |
| `EntryUnitSAPCode` | `EntryUnitSAPCode` |
| `QuantityInEntryUnit` | `QuantityInEntryUnit` |
| `_Customer` | *Association* |
| `_CustomerCompanyByPlant` | *Association* |
| `_Supplier` | *Association* |
| `_SupplierCompanyByPlant` | *Association* |
| `_EntryUnit` | *Association* |
| `_WBSElementBasicData` | *Association* |
| `_RepetitiveMfgConfirmationTP` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@EndUserText.label: 'Material Movements for Confirmation - TP'
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XL, dataClass: #TRANSACTIONAL}

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@Metadata.ignorePropagatedAnnotations: true

define view entity I_RptvMfgConfMatlDocItemTP as projection on R_RptvMfgConfMatlDocItemTP
{
  key RepetitiveMfgConfirmation,
  key MaterialDocument,
  key MaterialDocumentYear,
  key MaterialDocumentItem,
  
  // Admin
  PostingDate,
  DocumentDate,
  CreatedByUser,
  
  // Confirmation data
  ConfirmationPlant,
  ReportingPointOperation,
  RepetitiveMfgConfScenario,
  RptvMfgConfProcessingType,
  RptvMfgConfReversedCode,
  
  // Goods Movement data
  Material,
  Plant,
  Reservation,
  ReservationItem,
  ReservationRecordType,
  StorageLocation,
  ProductionSupplyArea,
  Batch,
  InventoryValuationType,
  DebitCreditCode,
  GoodsMovementType,
  GoodsMovementRefDocType,
  InventoryUsabilityCode,
  InventorySpecialStockType,
  InventorySpecialStockValnType,
  SalesOrder,
  SalesOrderItem,
  WBSElementInternalID,
  WBSElementExternalID,
  Supplier,
  Customer,
  GoodsRecipientName,
  UnloadingPointName,
  ReservationIsFinallyIssued,
  IsCompletelyDelivered,
  ShelfLifeExpirationDate,
  ManufactureDate,
  StorageType,
  StorageBin,
  
   // EWM DATA
  EWMWarehouse,
  EWMStorageBin,
  
  // Quantities and UoM
  EntryUnit,
  EntryUnitISOCode,
  EntryUnitSAPCode,
  @Semantics.quantity.unitOfMeasure: 'EntryUnit'
  QuantityInEntryUnit,
  
  /* Associations */
  _Customer,
  _CustomerCompanyByPlant,
  _Supplier,
  _SupplierCompanyByPlant,
  _EntryUnit,
  _WBSElementBasicData,
  _RepetitiveMfgConfirmationTP : redirected to parent I_RepetitiveMfgConfirmationTP
}
```
