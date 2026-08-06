---
name: C_MATLDOCFORPRINTGDSISSSUBCONT
description: Material Doc Print Goods Mvt SubContract
app_component: MM-IM-GF-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MATLDOCFORPRINTGDSISSSUBCONT')/$value
semantic_en: Material Doc Print Goods Mvt SubContract
keywords:
  - Material Doc Print Goods Mvt SubContract
  - Material Doc Print Goods Mvt SubContract
tags:
  - MM
  - component:MM-IM-GF-2CL
  - consumption-view
  - contract
  - lob:sourcing & procurement
  - material
  - MM-IM
  - MM-IM-GF
  - MM-IM-GF-2CL
  - metadata-only
---
# C_MATLDOCFORPRINTGDSISSSUBCONT

**Material Doc Print Goods Mvt SubContract**

| Property | Value |
|---|---|
| App Component | `MM-IM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MATLDOCFORPRINTGDSISSSUBCONT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `MaterialDocumentYear` | `NUMC(4)` | Material Document Year |
| `MaterialDocument` | `CHAR(10)` | Number of Material Document |
| `MaterialDocumentItem` | `NUMC(4)` | Material Document Item |
| `StockIdentifyingMaterial` | `CHAR(40)` | Material for Stock Mamangement |
| `Plant` | `CHAR(4)` | Plant |
| `StockIdfgStorageLocation` | `CHAR(4)` | Storage Location (Stock Identifier) |
| `StockIdentifyingBatch` | `CHAR(10)` | Batch Number (Stock Identifier) |
| `SpecialStockIdfgSupplier` | `CHAR(10)` | Supplier for Special Stock |
| `SpecialStockIdfgSalesOrder` | `CHAR(10)` | Sales Order Number of Valuated Sales Order Stock |
| `SpecialStockIdfgSalesOrderItem` | `NUMC(6)` | Sales Order Item of Valuated Sales Order Stock |
| `SpecialStockIdfgWBSElement` | `NUMC(8)` | Valuated Sales Order Stock WBS Element |
| `SpclStkIdfgWBSElementExtID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `SpclStkIdfgWBSElmntDescription` | `CHAR(40)` | Work Breakdown Structure Element Name |
| `SpecialStockIdfgCustomer` | `CHAR(10)` | Customer for Special Stock |
| `InventorySpecialStockType` | `CHAR(1)` | Special Stock Type |
| `InventoryStockType` | `CHAR(2)` | Stock Type of Goods Movement (Stock Identifier) |
| `SpecialStockIdfgStockOwner` | `CHAR(10)` | Add. Supplier for Special Stock |
| `Material` | `CHAR(40)` | Material Number |
| `StorageLocation` | `CHAR(4)` | Storage Location |
| `Batch` | `CHAR(10)` | Batch Number |
| `Supplier` | `CHAR(10)` | Account Number of Supplier |
| `SalesOrder` | `CHAR(10)` | Sales Order Number |
| `SalesOrderItem` | `NUMC(6)` | Sales Order Item |
| `SalesOrderScheduleLine` | `NUMC(4)` | Sales Order Schedule |
| `Customer` | `CHAR(10)` | Account Number of Customer |
| `StockOwner` | `CHAR(10)` | Additional Supplier for Special Stock |
| `WBSElement` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `WBSElementInternalID` | `NUMC(8)` | WBS Element Internal ID |
| `WBSDescription` | `CHAR(40)` | Work Breakdown Structure Element Name |
| `IssgOrRcvgMaterial` | `CHAR(40)` | Transfer Material |
| `IssuingOrReceivingPlant` | `CHAR(4)` | Transfer Plant |
| `IssuingOrReceivingStorageLoc` | `CHAR(4)` | Receiving/Issuing Storage Location |
| `IssgOrRcvgBatch` | `CHAR(10)` | Transfer Batch |
| `IssgOrRcvgSpclStockInd` | `CHAR(1)` | Special Stock Indicator |
| `IssuingOrReceivingValType` | `CHAR(10)` | Transfer Batch (Valuation Type) |
| `IssuingOrReceivingStockType` | `CHAR(2)` | Transfer Stock Type |
| `GoodsMovementRefDocType` | `CHAR(1)` | Goods Movement Reference Document Type |
| `ConsumptionPosting` | `CHAR(1)` | Consumption Posting |
| `GoodsMovementReasonCode` | `NUMC(4)` | Reason for Movement |
| `GoodsMovementType` | `CHAR(3)` | Movement Type (Inventory Management) |
| `DebitCreditCode` | `CHAR(1)` | Debit/Credit Indicator |
| `InventoryUsabilityCode` | `CHAR(1)` | Posting Control Stock Type |
| `QuantityInBaseUnit` | `QUAN(13)` | Quantity |
| `MaterialBaseUnit` | `UNIT(3)` | Base Unit of Measure |
| `MatlStkChangeQtyInBaseUnit` | `QUAN(31)` | Stock Quantity |
| `MatlCnsmpnQtyInMatlBaseUnit` | `QUAN(31)` | Consumption Quantity |
| `DocumentDate` | `DATS(8)` | Document Date in Document |
| `AccountingDocumentType` | `CHAR(2)` | Document Type |
| `InventoryTransactionType` | `CHAR(2)` | Transaction/Event Type |
| `InventorySpecialStockValnType` | `CHAR(1)` | Separate Valuation Type |
| `CreationDate` | `DATS(8)` | Day On Which Accounting Document Was Entered |
| `CreationTime` | `TIMS(6)` | Time of Entry |
| `CreatedByUser` | `CHAR(12)` | User Name |
| `MaterialDocumentHeaderText` | `CHAR(25)` | Document Header Text |
| `MaterialDocumentItemText` | `CHAR(50)` | Item Text |
| `DeliveryInMatlDocumentHeader` | `CHAR(10)` | Delivery Document on Header |
| `BillOfLading` | `CHAR(16)` | Number of Bill of Lading at Time of Goods Receipt |
| `ShelfLifeExpirationDate` | `DATS(8)` | Shelf Life Expiration or Best-Before Date |
| `ManufactureDate` | `DATS(8)` | Date of Manufacture |
| `QuantityInEntryUnit` | `QUAN(13)` | Quantity in Unit of Entry |
| `EntryUnit` | `UNIT(3)` | Unit of Entry |
| `InventoryValuationType` | `CHAR(10)` | Valuation Type |
| `PurchaseOrder` | `CHAR(10)` | Purchase Order Number |
| `PurchaseOrderItem` | `NUMC(5)` | Item Number of Purchasing Document |
| `ProjectNetwork` | `CHAR(12)` | Network Number for Account Assignment |
| `ManufacturingOrder` | `CHAR(12)` | Manufacturing Order |
| `ManufacturingOrderItem` | `NUMC(4)` | Manufacturing Order Item |
| `OrderID` | `CHAR(12)` | Order Number |
| `OrderItem` | `NUMC(4)` | Order Item |
| `Reservation` | `NUMC(10)` | Number of Reservation/Dependent Requirements |
| `ReservationItem` | `NUMC(4)` | Item Number of Reservation / Dependent Requirements |
| `ReservationIsFinallyIssued` | `CHAR(1)` | Final Issue for Reservation |
| `DeliveryDocument` | `CHAR(10)` | Delivery |
| `DeliveryDocumentItem` | `NUMC(6)` | Delivery Document Item |
| `IsCompletelyDelivered` | `CHAR(1)` | "Delivery Completed" Indicator |
| `ReversedMaterialDocumentYear` | `NUMC(4)` | Reversed Material Document Year |
| `ReversedMaterialDocument` | `CHAR(10)` | Reversed Material Document |
| `ReversedMaterialDocumentItem` | `NUMC(4)` | Reversed Material Document Item |
| `RvslOfGoodsReceiptIsAllowed` | `CHAR(1)` | Reversal of GR Allowed Despite Invoice |
| `IsReversalMovementType` | `CHAR(1)` | Has Reversal Movement Type |
| `GoodsMovementIsCancelled` | `CHAR(1)` | Item has been Canceled |
| `GoodsMovementCancellationType` | `CHAR(1)` | Relevance for Analytics |
| `GoodsRecipientName` | `CHAR(12)` | Goods Recipient |
| `UnloadingPointName` | `CHAR(25)` | Unloading Point |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `GLAccount` | `CHAR(10)` | G/L Account Number |
| `CostObject` | `CHAR(12)` | Cost Object |
| `ProfitabilitySegment` | `NUMC(10)` | Deprecated: Profitability Segment |
| `ProfitabilitySegment_2` | `CHAR(10)` | Profitability Segment |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `CostEstimate` | `NUMC(12)` | Cost Estimate Number - Product Costing |
| `ReferenceDocument` | `CHAR(16)` | Reference Document Number |
| `ServicePerformer` | `CHAR(10)` | Service Performer |
| `EmploymentInternalID` | `NUMC(8)` | Employment ID (Deprecated) |
| `AccountAssignmentCategory` | `CHAR(1)` | Account Assignment Category |
| `WorkItem` | `CHAR(10)` | Work Item ID |
| `ServicesRenderedDate` | `DATS(8)` | Date on which Services were Provided |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `OriginalMaterialDocumentItem` | `NUMC(4)` | Original Line in Material Document |
| `MultiAcctAssgmtOriglMatlDocItm` | `NUMC(4)` | Original Line for Account Assignment Item in Material Doc. |
| `GoodsReceiptIsNonValuated` | `CHAR(1)` | Goods Receipt, Non-Valuated |
| `HasMultipleAccountAssignment` | `CHAR(1)` | Multiple Account Assignment |
| `MultipleAccountAssignmentCode` | `CHAR(1)` | Multiple Account Assignment Code |
| `MasterFixedAsset` | `CHAR(12)` | Main Asset Number |
| `FixedAsset` | `CHAR(4)` | Asset Subnumber |
| `PostingDate` | `DATS(8)` | Posting Date in the Document |
| `FiscalYearPeriod` | `NUMC(7)` | Period Year |
| `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
| `FundsCenter` | `CHAR(16)` | Funds Center |
| `Fund` | `CHAR(10)` | Fund |
| `CommitmentItemShortID` | `CHAR(14)` | Commitment Item Short ID |
| `GrantID` | `CHAR(20)` | Grant |
| `StorageType` | `CHAR(3)` | Storage Type |
| `StorageBin` | `CHAR(10)` | Storage Bin |
| `EWMWarehouse` | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `EWMStorageBin` | `CHAR(18)` | Storage Bin |
| `HandlingUnitExternalID` | `CHAR(20)` | External Handling Unit Identification |
| `YearDay` | `NUMC(7)` | Year-Day-Combination |
| `YearWeek` | `NUMC(6)` | Year-Week-Combination |
| `YearMonth` | `NUMC(6)` | Year-Month-Combination |
| `YearQuarter` | `NUMC(5)` | Year-Quarter-Combination |
| `DocumentYear` | `NUMC(4)` | Year |
| `CalendarQuarter` | `NUMC(1)` | Quarter (1 - 4) |
| `CalendarMonth` | `NUMC(2)` | Month (1 - 12) |
| `CalendarWeek` | `NUMC(2)` | Calendar Week (1 - 53) |
| `CalendarDay` | `NUMC(3)` | Day of Year (1 - 366) |
| `WeekDay` | `NUMC(1)` | Day of Week |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `YearPeriod` | `NUMC(7)` | Fiscal Year + Fiscal Period |
| `TotalGoodsMvtAmtInCCCrcy` | `CURR(13)` | Amount in Local Currency |
| `GoodsMovementStkAmtInCCCrcy` | `CURR(13)` | Amount in Local Currency with Sign of Stock Quantity |
| `GoodsMvtCnsmpnAmtInCCCrcy` | `CURR(13)` | Amount in Local Currency with Sign of Consumption Quantity |
| `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `GdsMvtExtAmtInCoCodeCrcy` | `CURR(13)` | Externally Entered Posting Amount in Local Currency |
| `SlsPrcAmtInclVATInCoCodeCrcy` | `CURR(13)` | Sales Value Including Value-Added Tax |
| `EnteredSlsAmtInCoCodeCrcy` | `CURR(13)` | Externally Entered Sales Value in Local Currency |
| `TransactionCode` | `CHAR(20)` | Transaction Code |
| `IsAutomaticallyCreated` | `CHAR(1)` | Item Automatically Created Indicator |
| `MaterialDocumentLine` | `NUMC(6)` | Unique Identification of Document Line |
| `MaterialDocumentParentLine` | `NUMC(6)` | Identifier of immediately superior line |
| `HierarchyNodeLevel` | `NUMC(2)` | Hierarchy Level of Line in Document |
| `MaterialDocumentRecordType` | `CHAR(30)` | Record Type |
| `IsMaterialDocumentHeader` | `INT4(10)` | Material Document Counter |
| `MaintOrderRoutingNumber` | `NUMC(10)` | Routing Number of Operations in the Order |
| `MaintOrderOperationCounter` | `NUMC(8)` | Internal Counter |
| `ManufacturerMaterial` | `CHAR(40)` | Material Number Corresponding to Manufacturer Part Number |
| `ActivityInWarehouseIsPending` | `CHAR(1)` | Posting in Warehouse Management System |
| `IssgOrRcvgWBSElement` | `NUMC(8)` | Work Breakdown Structure Element (Stock Identifier) |
| `IssgOrRcvgWBSElementExtID` | `CHAR(24)` | Complementary Valuated Sales Order Stock WBS Element |
| `IssgOrRcvgWBSDescription` | `CHAR(40)` | Descr. of Complementary Valuated Sales Order Stock WBS Elem. |
| `WarehouseNumber` | `CHAR(3)` | Warehouse Number / Warehouse Complex |
| `TransferRequirementNumber` | `NUMC(10)` | Transfer Requirement Number |
| `TransferPriority` | `CHAR(1)` | Transfer Priority |
| `VersionForPrintingSlip` | `CHAR(1)` | Version for Printing GR/GI Slip |
| `IssgOrRcvgSalesOrder` | `CHAR(10)` | Sales and Distribution Document Number (Stock Identifier) |
| `IssgOrRcvgSalesOrderItem` | `NUMC(6)` | Item Number of the SD Document (Stock Identifier) |
| `ShippingInstruction` | `CHAR(2)` | Shipping Instructions |
| `ShipgInstrnSupplierCompliance` | `CHAR(2)` | Compliance with Shipping Instructions |
| `QuantityInDeliveryQtyUnit` | `QUAN(13)` | Quantity in Unit of Measure from Delivery Note |
| `DeliveryQuantityUnit` | `UNIT(3)` | Unit of Measure From Delivery Note |
| `QtyInPurchaseOrderPriceUnit` | `QUAN(13)` | Quantity in Purchase Order Price Unit |
| `OrderPriceUnit` | `UNIT(3)` | Order Price Unit (Purchasing) |
| `PlantName` | `CHAR(30)` | Plant Name |
| `AddressID` | `CHAR(10)` | Address |
| `StorageLocationName` | `CHAR(16)` | Storage Location Name |
| `IssuingOrReceivingStorLocName` | `CHAR(16)` | Storage Location Name |
| `SupplierName` | `CHAR(80)` | Name of Supplier |
| `MaterialName` | `CHAR(40)` | Product Description |
| `InventorySpecialStockTypeName` | `CHAR(20)` | Special Stock Type Name |
| `GoodsMovementTypeName` | `CHAR(20)` | Movement Type Text (Inventory Management) |
| `WarehouseStorageBin` | `CHAR(10)` | Storage Bin |
