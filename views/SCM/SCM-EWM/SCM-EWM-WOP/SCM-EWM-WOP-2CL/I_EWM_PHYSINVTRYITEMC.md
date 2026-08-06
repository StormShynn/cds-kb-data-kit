---
name: I_EWM_PHYSINVTRYITEMC
description: Warehouse Physical Inventory Item - Cube
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_PHYSINVTRYITEMC')/$value
semantic_en: Warehouse Physical Inventory Item - Cube
tags:
  - SCM
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - inventory
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
  - metadata-only
---
# I_EWM_PHYSINVTRYITEMC

**Warehouse Physical Inventory Item - Cube**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_PHYSINVTRYITEMC')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `PhysicalInventoryDocNumber` | `NUMC(20)` | Physical Inventory Document Number |
| `PhysicalInventoryDocYear` | `NUMC(4)` | Document Year of Physical Inventory Document |
| `EWMWarehouse` | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `PhysicalInventoryItemNumber` | `NUMC(6)` | Item |
| `EWMNrOfPhysicalInventoryDocs` | `INT4(10)` | Number of Physical Inventory Documents |
| `EWMNrOfPhysicalInventoryItems` | `INT4(10)` | Number of Physical Inventory Document Items |
| `EWMPhysicalInventoryStatus` | `CHAR(4)` | Physical Inventory Status |
| `EWMPhysicalInventoryStatusText` | `CHAR(60)` | Status of Physical Inventory Item |
| `PhysicalInventoryDocumentType` | `CHAR(2)` | Physical Inventory Procedure (Document Type of Phys. Inv.) |
| `PInvCountedUTCDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `EWMPhysInvtryCountedDate` | `DATS(8)` |  |
| `PhysicalInventoryCountUserName` | `CHAR(12)` | User Name |
| `PhysInventoryCrtnUTCDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `EWMPhysInvtryCreationDate` | `DATS(8)` |  |
| `EWMPhysInvtryPostingDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `EWMPhysInvtryPostingDate` | `DATS(8)` |  |
| `ActivityArea` | `CHAR(4)` | Activity Area |
| `EWMPhysicalInventoryPriority` | `NUMC(1)` | Priority of Physical Inventory |
| `EWMPhysInvtryReason` | `CHAR(4)` | Reason for Physical Inventory/Inventory Difference |
| `PInvDocumentItemIsPrinted` | `CHAR(1)` | Status: Physical Inventory Document Item Already Printed Out |
| `EWMStorageType` | `CHAR(4)` | Storage Type |
| `EWMStorageBin` | `CHAR(18)` | Storage Bin |
| `EWMNumberOfStorageBins` | `INT1(3)` |  |
| `EWMStorageSection` | `CHAR(4)` | Storage Section |
| `EWMStorageBinType` | `CHAR(4)` | Storage Bin Type |
| `EWMStorageBinAccessType` | `CHAR(4)` | Bin Access Type |
| `EWMStorageBinSubdivision` | `CHAR(1)` | Storage Bin is Subdivided |
| `Product` | `CHAR(40)` | Product |
| `Batch` | `CHAR(10)` | Batch Number |
| `EWMStockType` | `CHAR(2)` | Stock Type |
| `EWMStockUsage` | `CHAR(1)` | Stock Usage |
| `EWMStockOwner` | `CHAR(10)` | Owner |
| `StockOwnerName` | `CHAR(81)` |  |
| `EntitledToDisposeParty` | `CHAR(10)` | Party Entitled to Dispose |
| `NameOfEntitledToDisposeParty` | `CHAR(81)` |  |
| `StockDocumentCategory` | `CHAR(3)` | Special Reference Stock Type |
| `WBSElementInternalID` | `NUMC(8)` | WBS Element |
| `WBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `SpecialStockIdfgSalesOrder` | `CHAR(10)` | Special Stock Identification Header |
| `SpecialStockIdfgSalesOrderItem` | `NUMC(6)` | Sales Order Item of Valuated Sales Order Stock |
| `WhseQualityInspectionType` | `CHAR(1)` | Inspection ID Type |
| `EWMStockReferenceDocCategory` | `CHAR(3)` | Doc. Category for Doc. Reference and Doc.-Related Stock |
| `EWMStockReferenceDocument` | `CHAR(35)` | Reference Document |
| `EWMStockReferenceDocumentItem` | `NUMC(10)` | Reference Document Item |
| `StockIdentificationNumber` | `CHAR(20)` | Identification Number of Stock |
| `EWMGoodsReceiptDateTime` | `DEC(15)` | Goods Receipt Date |
| `EWMGoodsReceiptDate` | `DATS(8)` | Goods Receipt Date in UTC |
| `ShelfLifeExpirationDate` | `DATS(8)` | Shelf Life Expiration Date |
| `CountryOfOrigin` | `CHAR(3)` | Country/Region of Origin |
| `MatlBatchIsInRstrcdUseStock` | `CHAR(1)` | Batch in Restricted-Use Stock |
| `EWMPhysInventoryCountingCycle` | `CHAR(1)` | Cycle Counting Indicator |
| `EWMPInvCycCountingIntvlValue` | `NUMC(4)` | Cycle Counting Interval in Working Days |
| `EWMPInvCycCountingBufferValue` | `NUMC(2)` | Cycle Counting Buffer in Working Days |
| `EWMStorageBinIsEmpty` | `CHAR(1)` | Empty Storage Bin |
| `EWMPhysInvtryHasChangeCounting` | `CHAR(1)` | Physical Inventory Has Changed Count Item |
| `EWMPhysInvtryHasDifference` | `CHAR(1)` | Physical Inventory Has Difference Item |
| `WarehouseOrder` | `NUMC(10)` | Warehouse Order Number |
| `PhysicalInventoryRefDocYear` | `NUMC(4)` | Document Year of Physical Inventory Document |
| `EWMRefPhysicalInventoryDoc` | `NUMC(20)` | Physical Inventory Document Number |
| `PhysicalInventoryRefDocItem` | `NUMC(6)` | Item |
| `PInvFreeDefinedRefText` | `CHAR(70)` | Document ID of Reference Document |
