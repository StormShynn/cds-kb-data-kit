---
name: C_SUSTGOODSMOVEMENTDOCUMENTDEX
description: This CDS view is used by SAP sustainability applications (such as SAP Responsible Design and Production) for the data extraction of goods movement data. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: SUS-INT
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUSTGOODSMOVEMENTDOCUMENTDEX')/$value
semantic_en: This CDS view is used by SAP sustainability applications (such as SAP Responsible Design and Production) for the data extraction of goods movement data. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - SUS
  - bo:companycode
  - component:SUS-INT
  - consumption-view
  - product
  - SUS-INT
  - metadata-only
---
# C_SUSTGOODSMOVEMENTDOCUMENTDEX

**This CDS view is used by SAP sustainability applications (such as SAP Responsible Design and Production) for the data extraction of goods movement data. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SUS-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUSTGOODSMOVEMENTDOCUMENTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaterialDocumentKey1` |  | |  |  | `RAW(4)` | Key field 1 |
| `MaterialDocumentKey2` |  | |  |  | `RAW(4)` | Key field 2 |
| `MaterialDocumentKey3` |  | |  |  | `RAW(5)` | Key field 3 |
| `MaterialDocumentKey4` |  | |  |  | `RAW(1)` | Key field 4 |
| `MaterialDocumentKey5` |  | |  |  | `RAW(1)` | Key field 5 |
| `MaterialDocumentKey6` |  | |  |  | `RAW(1)` | Key field 6 |
| `MaterialDocumentRecordType` |  | |  |  | `CHAR(30)` | Record Type |
| `MaterialDocumentYear` |  | |  |  | `NUMC(4)` | Material Document Year |
| `MaterialDocument` |  | |  |  | `CHAR(10)` | Number of Material Document |
| `MaterialDocumentItem` |  | |  |  | `NUMC(4)` | Material Document Item |
| `MaterialDocumentLine` |  | |  |  | `NUMC(6)` | Unique Identification of Document Line |
| `GoodsMovementType` |  | |  |  | `CHAR(3)` | Movement Type (Inventory Management) |
| `GoodsMovementRefDocType` |  | |  |  | `CHAR(1)` | Goods Movement Reference Document Type |
| `GoodsMovementIsCancelled` |  | |  |  | `CHAR(1)` | Item has been Canceled |
| `IsReversalMovementType` |  | |  |  | `CHAR(1)` | Has Reversal Movement Type |
| `StockIdentifyingMaterial` |  | |  |  | `CHAR(40)` | Material for Stock Mamangement |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `StorageLocationPlant` |  | |  |  | `CHAR(4)` | Plant |
| `StorageLocationAddressID` |  | |  |  | `CHAR(10)` | Address Number |
| `StorageLocationCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `StorageLocationRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `InventorySpecialStockType` |  | |  |  | `CHAR(1)` | Special Stock Type |
| `InventoryStockType` |  | |  |  | `CHAR(2)` | Stock Type of Goods Movement (Stock Identifier) |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date in the Document |
| `DocumentDate` |  | |  |  | `DATS(8)` | Document Date in Document |
| `ManufactureDate` |  | |  |  | `DATS(8)` | Date of Manufacture |
| `CreationDate` |  | |  |  | `DATS(8)` | Day On Which Accounting Document Was Entered |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time of Entry |
| `CalendarDayOfYear` |  | |  |  | `NUMC(3)` | Day of Year (1 - 366) |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Quarter (1 - 4) |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Month (1 - 12) |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week (1 - 53) |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order Number |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `SalesOrderScheduleLine` |  | |  |  | `NUMC(4)` | Sales Order Schedule |
| `PurchaseOrder` |  | |  |  | `CHAR(10)` | Purchase Order Number |
| `PurchaseOrderItem` |  | |  |  | `NUMC(5)` | Item Number of Purchasing Document |
| `InvtryMgmtReferenceDocument` |  | |  |  | `CHAR(10)` | Document No. of a Reference Document |
| `ManufacturingOrder` |  | |  |  | `CHAR(12)` | Manufacturing Order |
| `AccountingDocExternalReference` |  | |  |  | `CHAR(16)` | Reference Document Number |
| `DeliveryDocument` |  | |  |  | `CHAR(10)` | Delivery |
| `DeliveryDocumentItem` |  | |  |  | `NUMC(6)` | Delivery Document Item |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `Customer` |  | |  |  | `CHAR(10)` | Account Number of Customer |
| `GoodsRecipientName` |  | |  |  | `CHAR(12)` | Goods Recipient |
| `IssgOrRcvgMaterial` |  | |  |  | `CHAR(40)` | Transfer Material |
| `IssgOrRcvgBatch` |  | |  |  | `CHAR(10)` | Transfer Batch |
| `IssuingOrReceivingPlant` |  | |  |  | `CHAR(4)` | Transfer Plant |
| `InventoryTransactionType` |  | |  |  | `CHAR(2)` | Transaction/Event Type |
| `StockOwner` |  | |  |  | `CHAR(10)` | Additional Supplier for Special Stock |
| `IssuingOrReceivingStorageLoc` |  | |  |  | `CHAR(4)` | Receiving/Issuing Storage Location |
| `IssgOrRcvgStorLocAddressID` |  | |  |  | `CHAR(10)` | Address Number |
| `IssgOrRcvgStorLocCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `IssgOrRcvgStorLocRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `MainProduct` |  | |  |  | `CHAR(40)` | Main Product |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `PurchaseOrderType` |  | |  |  | `CHAR(4)` | Purchase Order Type |
| `PurchaseOrderSubtype` |  | |  |  | `CHAR(1)` | Control indicator for purchasing document type |
| `ProjectNetwork` |  | |  |  | `CHAR(12)` | Network Number for Account Assignment |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project definition |
| `MaterialType` |  | |  |  | `CHAR(4)` | Material Type |
| `MaterialCategory` |  | |  |  | `CHAR(2)` | Material Category |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `OrderID` |  | |  |  | `CHAR(12)` | Order Number |
| `OrderCategory` |  | |  |  | `NUMC(2)` | Order Category |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Document Type |
| `ManufacturingOrderCategory` |  | |  |  | `NUMC(2)` | Order Category |
| `PlantAddressID` |  | |  |  | `CHAR(10)` | Address |
| `IssgOrRcvgPlantAddressID` |  | |  |  | `CHAR(10)` | Address |
| `PlantCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `PlantRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `IssuingOrReceivingPlantCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `IssuingOrReceivingPlantRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `SupplierCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `SupplierRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `SupplierPlant` |  | |  |  | `CHAR(4)` | Plant (Own or External) |
| `CustomerCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `CustomerRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Customer Number |
| `SoldToPartyAddressID` |  | |  |  | `CHAR(10)` | Address |
| `SoldToPartyCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `SoldToPartyRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Customer Number |
| `ShipToPartyAddressID` |  | |  |  | `CHAR(10)` | Address |
| `ShipToPartyCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `ShipToPartyRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `SupplyingPlant` |  | |  |  | `CHAR(4)` | Supplying (issuing) plant in case of stock transport order |
| `SupplyingPlantCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `SupplyingPlantRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `SupplyingSupplier` |  | |  |  | `CHAR(10)` | Goods Supplier |
| `SupplyingSupplierCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `SupplyingSupplierRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `IssuingStorageLocation` |  | |  |  | `CHAR(4)` | Issuing Storage Location for Stock Transport Order |
| `IssuingStorageLocationCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `IssuingStorageLocationRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `ManualDeliveryAddressID` |  | |  |  | `CHAR(10)` | Manual address number in purchasing document item |
| `ManualDeliveryAddressCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `ManualDeliveryAddressRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `Subcontractor` |  | |  |  | `CHAR(10)` | Supplier to be Supplied/Who is to Receive Delivery |
| `SubcontractorCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `SubcontractorRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `PurchaseOrderReceivingCustomer` |  | |  |  | `CHAR(10)` | Customer |
| `PurOrdReceivingCustomerCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `PurOrdReceivingCustomerRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `StockChangeCategory` |  | |  |  | `CHAR(2)` | Stock Change Category |
| `IsCrossPlantTransfer` |  | |  |  | `CHAR(1)` | Is Cross Plant Transfer |
| `IncotermsClassification` |  | |  |  | `CHAR(3)` | Incoterms (Part 1) |
| `IsConsumptionMovement` |  | |  |  | `CHAR(1)` | Is Consumption Movement |
| `MaterialBaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `EntryUnit` |  | |  |  | `UNIT(3)` | Unit of Entry |
| `TotalGoodsMvtAmtInCCCrcy` |  | |  |  | `CURR(13)` | Amount in Local Currency |
| `GoodsMovementStkAmtInCCCrcy` |  | |  |  | `CURR(13)` | Amount in Local Currency with Sign of Stock Quantity |
| `GoodsMvtCnsmpnAmtInCCCrcy` |  | |  |  | `CURR(13)` | Amount in Local Currency with Sign of Consumption Quantity |
| `MatlStkChangeQtyInBaseUnit` |  | |  |  | `QUAN(31)` | Stock Quantity |
| `MatlCnsmpnQtyInMatlBaseUnit` |  | |  |  | `QUAN(31)` | Consumption Quantity |
| `QuantityInBaseUnit` |  | |  |  | `QUAN(13)` | Quantity |
| `QuantityInEntryUnit` |  | |  |  | `QUAN(13)` | Quantity in Unit of Entry |
