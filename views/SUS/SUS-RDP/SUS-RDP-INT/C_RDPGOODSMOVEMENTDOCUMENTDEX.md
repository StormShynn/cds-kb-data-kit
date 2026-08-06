---
name: C_RDPGOODSMOVEMENTDOCUMENTDEX
description: This CDS view is used by SAP Responsible Design and Production for the data extraction of relevant material flows. The view provides the necessary data based upon posted material documents.
app_component: SUS-RDP-INT
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RDPGOODSMOVEMENTDOCUMENTDEX')/$value
semantic_en: This CDS view is used by SAP Responsible Design and Production for the data extraction of relevant material flows. The view provides the necessary data based upon posted material documents.
tags:
  - SUS
  - bo:material
  - component:SUS-RDP-INT
  - consumption-view
  - document
  - material
  - product
  - SUS-RDP
  - SUS-RDP-INT
  - metadata-only
---
# C_RDPGOODSMOVEMENTDOCUMENTDEX

**This CDS view is used by SAP Responsible Design and Production for the data extraction of relevant material flows. The view provides the necessary data based upon posted material documents.**

| Property | Value |
|---|---|
| App Component | `SUS-RDP-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RDPGOODSMOVEMENTDOCUMENTDEX')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `MaterialDocumentKey1` | `RAW(4)` | Key field 1 |
| `MaterialDocumentKey2` | `RAW(4)` | Key field 2 |
| `MaterialDocumentKey3` | `RAW(5)` | Key field 3 |
| `MaterialDocumentKey4` | `RAW(1)` | Key field 4 |
| `MaterialDocumentKey5` | `RAW(1)` | Key field 5 |
| `MaterialDocumentKey6` | `RAW(1)` | Key field 6 |
| `StockIdentifyingMaterial` | `CHAR(40)` | Material for Stock Mamangement |
| `Plant` | `CHAR(4)` | Plant |
| `InventorySpecialStockType` | `CHAR(1)` | Special Stock Type |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `MaterialBaseUnit` | `UNIT(3)` | Base Unit of Measure |
| `QuantityInBaseUnit` | `QUAN(13)` | Quantity |
| `MatlStkChangeQtyInBaseUnit` | `QUAN(31)` | Stock Quantity |
| `EntryUnit` | `UNIT(3)` | Unit of Entry |
| `QuantityInEntryUnit` | `QUAN(13)` | Quantity in Unit of Entry |
| `PostingDate` | `DATS(8)` | Posting Date in the Document |
| `CreationDate` | `DATS(8)` | Day On Which Accounting Document Was Entered |
| `CreationTime` | `TIMS(6)` | Time of Entry |
| `CalendarQuarter` | `NUMC(1)` | Quarter (1 - 4) |
| `CalendarMonth` | `NUMC(2)` | Month (1 - 12) |
| `CalendarWeek` | `NUMC(2)` | Calendar Week (1 - 53) |
| `CalendarDayOfYear` | `NUMC(3)` | Day of Year (1 - 366) |
| `ManufactureDate` | `DATS(8)` | Date of Manufacture |
| `MaterialDocument` | `CHAR(10)` | Number of Material Document |
| `MaterialDocumentYear` | `NUMC(4)` | Material Document Year |
| `MaterialDocumentItem` | `NUMC(4)` | Material Document Item |
| `MaterialDocumentLine` | `NUMC(6)` | Unique Identification of Document Line |
| `SalesOrder` | `CHAR(10)` | Sales Order Number |
| `PurchaseOrder` | `CHAR(10)` | Purchase Order Number |
| `InvtryMgmtReferenceDocument` | `CHAR(10)` | Document No. of a Reference Document |
| `ManufacturingOrder` | `CHAR(12)` | Manufacturing Order |
| `AccountingDocExternalReference` | `CHAR(16)` | Reference Document Number |
| `DeliveryDocument` | `CHAR(10)` | Delivery |
| `GoodsMovementIsCancelled` | `CHAR(1)` | Item has been Canceled |
| `IsReversalMovementType` | `CHAR(1)` | Has Reversal Movement Type |
| `GoodsMovementType` | `CHAR(3)` | Movement Type (Inventory Management) |
| `Material` | `CHAR(40)` | Material Number |
| `Batch` | `CHAR(10)` | Batch Number |
| `Supplier` | `CHAR(10)` | Account Number of Supplier |
| `Customer` | `CHAR(10)` | Account Number of Customer |
| `GoodsRecipientName` | `CHAR(12)` | Goods Recipient |
| `IssgOrRcvgMaterial` | `CHAR(40)` | Transfer Material |
| `IssgOrRcvgBatch` | `CHAR(10)` | Transfer Batch |
| `GoodsMovementRefDocType` | `CHAR(1)` | Goods Movement Reference Document Type |
| `IssuingOrReceivingPlant` | `CHAR(4)` | Transfer Plant |
| `AccountingDocumentType` | `CHAR(2)` | Document Type |
| `InventoryTransactionType` | `CHAR(2)` | Transaction/Event Type |
| `PlantAddressID` | `CHAR(10)` | Address |
| `IssgOrRcvgPlantAddressID` | `CHAR(10)` | Address |
| `PlantCountry` | `CHAR(3)` | Country/Region Key |
| `IssuingOrReceivingPlantCountry` | `CHAR(3)` | Country/Region Key |
| `SupplierCountry` | `CHAR(3)` | Country/Region Key |
| `CustomerCountry` | `CHAR(3)` | Country/Region Key |
| `MaterialType` | `CHAR(4)` | Product Type |
| `MaterialCategory` | `CHAR(2)` | Product Category |
| `StockChangeCategory` | `CHAR(2)` | Stock Change Category |
| `IsCrossPlantTransfer` | `CHAR(1)` | Is Cross Plant Transfer |
| `IncotermsClassification` | `CHAR(3)` | Incoterms (Part 1) |
