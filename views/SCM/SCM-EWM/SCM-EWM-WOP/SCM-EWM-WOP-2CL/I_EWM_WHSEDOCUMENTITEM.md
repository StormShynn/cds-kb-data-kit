---
name: I_EWM_WHSEDOCUMENTITEM
description: "Warehouse Document Item"
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSEDOCUMENTITEM')/$value
semantic_en: "Warehouse Document Item"
tags:
  - SCM
  - component:SCM-EWM-WOP-2CL
  - document
  - interface-view
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
  - metadata-only
---
# I_EWM_WHSEDOCUMENTITEM

**Warehouse Document Item**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSEDOCUMENTITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` |  | |  |  | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `EWMWarehouseDocument` |  | |  |  | `NUMC(12)` | Warehouse Document |
| `EWMWarehouseDocumentItem` |  | |  |  | `NUMC(4)` | Warehouse Document Item |
| `WarehouseTimeZone` |  | |  |  | `CHAR(6)` | Time Zone |
| `LogicalRecordTransactionCode` |  | |  |  | `CHAR(20)` | Table Log Record: Transaction Code |
| `EWMWhseDocItemIsCancelable` |  | |  |  | `CHAR(1)` | Warehouse Document Item is Cancelable |
| `EWMWhseDocGoodsReceiptDate` |  | |  |  | `DATS(8)` | Goods Receipt Date |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ProductDescription` |  | |  |  | `CHAR(40)` | Product Description |
| `Batch` |  | |  |  | `CHAR(10)` | Batch |
| `EWMStockType` |  | |  |  | `CHAR(2)` | Stock Type |
| `StockDocumentCategory` |  | |  |  | `CHAR(3)` | Special Reference Stock Type |
| `StockDocumentNumber` |  | |  |  | `CHAR(35)` | Sales Order/Project |
| `StockItemNumber` |  | |  |  | `NUMC(10)` | Sales Order Item for Sales Order Stock |
| `ExternalStockDocumentNumber` |  | |  |  | `CHAR(35)` | Sales Order/Project |
| `EWMStockUsage` |  | |  |  | `CHAR(1)` | Stock Usage |
| `EWMStockOwner` |  | |  |  | `CHAR(10)` | Stock Owner |
| `EWMStockOwnerName` |  | |  |  | `CHAR(81)` |  |
| `EntitledToDisposeParty` |  | |  |  | `CHAR(10)` | Party Entitled to Dispose |
| `EntitledToDisposePartyName` |  | |  |  | `CHAR(81)` |  |
| `ShelfLifeExpirationDate` |  | |  |  | `DATS(8)` | Shelf Life Expiration Date |
| `CountryOfOrigin` |  | |  |  | `CHAR(3)` | Country/Region of Origin |
| `WhseTaskCapacityConsumption` |  | |  |  | `DEC(15)` | Capacity Consumption |
| `WhseTaskCrtnWhseTmznDateTime` |  | |  |  | `DEC(15)` | Created On |
| `WhseTaskCrtnUTCDateTime` |  | |  |  | `DEC(15)` | Created On |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `CreatedByUserName` |  | |  |  | `CHAR(80)` | Created By |
| `WhseTaskConfWhseTmznDateTime` |  | |  |  | `DEC(15)` | Confirmed On |
| `ConfirmationUTCDateTime` |  | |  |  | `DEC(15)` | Confirmed On |
| `ConfirmedByUser` |  | |  |  | `CHAR(12)` | Confirmed By |
| `ConfirmedByUserName` |  | |  |  | `CHAR(80)` | Confirmed By |
| `IsHandlingUnitWarehouseTask` |  | |  |  | `CHAR(1)` | Handling Unit Warehouse Task |
| `WarehouseProcessType` |  | |  |  | `CHAR(4)` | Warehouse Process Type |
| `WarehouseProcessCategory` |  | |  |  | `CHAR(1)` | Warehouse Process Category |
| `EWMWarehouseDocumentItemStatus` |  | |  |  | `CHAR(1)` | Warehouse Document Item Status |
| `EWMWhseDocumentItemStatusIcon` |  | |  |  | `INT1(3)` |  |
| `WarehouseMovementsReason` |  | |  |  | `CHAR(4)` | Reason for Movements in the Warehouse |
| `WarehouseMovementsText` |  | |  |  | `CHAR(50)` | Additional Text |
| `EWMGoodsMovementProcess` |  | |  |  | `CHAR(4)` | Reason for Movement |
| `ActualQuantityInBaseUnit` |  | |  |  | `QUAN(31)` | Actual Quantity in Base Unit of Measure |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `ActualQuantityInAltvUnit` |  | |  |  | `QUAN(31)` | Actual Quantity in Alternative Unit of Measure |
| `AlternativeUnit` |  | |  |  | `UNIT(3)` | Alternative Unit of Measure for Stockkeeping Unit |
| `EWMValuationQuantity` |  | |  |  | `QUAN(31)` | Valuation Quantity |
| `EWMValuationQuantityUnit` |  | |  |  | `UNIT(3)` | Unit for Valuation Quantity |
| `EWMValuationQuantityStatus` |  | |  |  | `CHAR(1)` | Status of Valuation Quantity |
| `EWMDifferenceValuationQuantity` |  | |  |  | `QUAN(31)` | Valuation Difference Quantity |
| `EWMDiffValuationQuantityStatus` |  | |  |  | `CHAR(1)` | Status of Difference in Valuation Quantity |
| `EWMAccountAssignmentCategory` |  | |  |  | `CHAR(2)` | Account Assignment Category |
| `EWMAccountAssignmentObject` |  | |  |  | `CHAR(35)` | Account Assignment Object (Internal Display) |
| `EWMAccountAssignmentSubObject` |  | |  |  | `CHAR(10)` | Account Assignment Subobject |
| `WhseTaskNetWeight` |  | |  |  | `QUAN(15)` | Loading or Net Weight |
| `WhseTaskNetWeightUnitOfMeasure` |  | |  |  | `UNIT(3)` | Weight Unit |
| `WhseTaskNetVolume` |  | |  |  | `QUAN(15)` | Loading or Net Volume |
| `WhseTaskNetVolumeUnitOfMeasure` |  | |  |  | `UNIT(3)` | Volume Unit |
| `EWMCanceledWarehouseDocument` |  | |  |  | `NUMC(12)` | Canceled Warehouse Document |
| `ProductionOrder` |  | |  |  | `CHAR(12)` | Manufacturing Order |
| `Kanban` |  | |  |  | `NUMC(10)` | Kanban Identification Number |
| `EWMWarehouseTaskIsJITRelevant` |  | |  |  | `CHAR(1)` | Relevance for JIT Process |
| `MaterialDocument` |  | |  |  | `CHAR(10)` | Number of Material Document |
| `MaterialDocumentYear` |  | |  |  | `NUMC(4)` | Material Document Year |
| `MaterialDocumentItem` |  | |  |  | `NUMC(4)` | Material Document Item |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date of Material Document |
| `EWMWarehouseDocumentItemUUID` |  | |  |  | `RAW(16)` | Warehouse Document Item Identifier |
| `SourceStorageType` |  | |  |  | `CHAR(4)` | Source Storage Type |
| `SourceStorageSection` |  | |  |  | `CHAR(4)` | Source Storage Section |
| `SourceStorageBin` |  | |  |  | `CHAR(18)` | Source Storage Bin |
| `SourceHandlingUnit` |  | |  |  | `CHAR(20)` | Source Handling Unit |
| `DestinationStorageType` |  | |  |  | `CHAR(4)` | Destination Storage Type |
| `DestinationStorageSection` |  | |  |  | `CHAR(4)` | Destination Storage Section |
| `DestinationStorageBin` |  | |  |  | `CHAR(18)` | Destination Storage Bin |
| `DestinationHandlingUnit` |  | |  |  | `CHAR(20)` | Destination Handling Unit |
| `EWMStorageType` |  | |  |  | `CHAR(4)` | Storage Type |
| `EWMStorageSection` |  | |  |  | `CHAR(4)` | Storage Section |
| `EWMStorageBin` |  | |  |  | `CHAR(18)` | Storage Bin |
| `HandlingUnitNumber` |  | |  |  | `CHAR(20)` | Handling Unit |
| `PurchaseOrder` |  | |  |  | `CHAR(10)` | Purchase Order Number |
| `PurchaseOrderItem` |  | |  |  | `NUMC(5)` | Item Number of Purchase Order |
