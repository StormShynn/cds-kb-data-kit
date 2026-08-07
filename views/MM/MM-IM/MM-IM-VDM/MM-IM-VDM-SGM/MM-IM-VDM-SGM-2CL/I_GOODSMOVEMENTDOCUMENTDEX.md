---
name: I_GOODSMOVEMENTDOCUMENTDEX
description: This CDS view is intended to be used for data extraction of the material document. The view provides all important data of the material document posting. The view is enabled for delta extraction. You may build your own BW content based on the data provided by this view. This CDS view provides the prerequisites for answering the following business questions: Which material has been posted to which stock type? Which material has been posted to which special stock type and to which reference object? How many transfer postings have been done last month? Between which plants have materials be transferred?
app_component: MM-IM-VDM-SGM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GOODSMOVEMENTDOCUMENTDEX')/$value
semantic_en: This CDS view is intended to be used for data extraction of the material document. The view provides all important data of the material document posting. The view is enabled for delta extraction. You may build your own BW content based on the data provided by this view. This CDS view provides the prerequisites for answering the following business questions: Which material has been posted to which stock type? Which material has been posted to which special stock type and to which reference object? How many transfer postings have been done last month? Between which plants have materials be transferred?
tags:
  - MM
  - bo:inventory
  - component:MM-IM-VDM-SGM-2CL
  - document
  - interface-view
  - lob:sourcing & procurement
  - material
  - MM-IM
  - MM-IM-VDM
  - MM-IM-VDM-SGM
  - MM-IM-VDM-SGM-2CL
  - plan
  - stock
  - metadata-only
---
# I_GOODSMOVEMENTDOCUMENTDEX

**This CDS view is intended to be used for data extraction of the material document. The view provides all important data of the material document posting. The view is enabled for delta extraction. You may build your own BW content based on the data provided by this view. This CDS view provides the prerequisites for answering the following business questions: Which material has been posted to which stock type? Which material has been posted to which special stock type and to which reference object? How many transfer postings have been done last month? Between which plants have materials be transferred?**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-SGM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GOODSMOVEMENTDOCUMENTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaterialDocumentKey1` |  | |  |  | `RAW(4)` | Key field 1 |
| `MaterialDocumentKey2` |  | |  |  | `RAW(4)` | Key field 2 |
| `MaterialDocumentKey3` |  | |  |  | `RAW(5)` | Key field 3 |
| `MaterialDocumentKey4` |  | |  |  | `RAW(1)` | Key field 4 |
| `MaterialDocumentKey5` |  | |  |  | `RAW(1)` | Key field 5 |
| `MaterialDocumentKey6` |  | |  |  | `RAW(1)` | Key field 6 |
| `MaterialDocumentYear` |  | |  |  | `NUMC(4)` | Material Document Year |
| `MaterialDocument` |  | |  |  | `CHAR(10)` | Number of Material Document |
| `MaterialDocumentItem` |  | |  |  | `NUMC(4)` | Material Document Item |
| `StockIdentifyingMaterial` |  | |  |  | `CHAR(40)` | Material for Stock Mamangement |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `StockIdfgStorageLocation` |  | |  |  | `CHAR(4)` | Storage Location (Stock Identifier) |
| `StockIdentifyingBatch` |  | |  |  | `CHAR(10)` | Batch Number (Stock Identifier) |
| `SpecialStockIdfgSupplier` |  | |  |  | `CHAR(10)` | Supplier for Special Stock |
| `SpecialStockIdfgSalesOrder` |  | |  |  | `CHAR(10)` | Sales Order Number of Valuated Sales Order Stock |
| `SpecialStockIdfgSalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item of Valuated Sales Order Stock |
| `SpecialStockIdfgWBSElement` |  | |  |  | `NUMC(8)` | Valuated Sales Order Stock WBS Element |
| `SpecialStockIdfgCustomer` |  | |  |  | `CHAR(10)` | Customer for Special Stock |
| `InventorySpecialStockType` |  | |  |  | `CHAR(1)` | Special Stock Type |
| `InventoryStockType` |  | |  |  | `CHAR(2)` | Stock Type of Goods Movement (Stock Identifier) |
| `SpecialStockIdfgStockOwner` |  | |  |  | `CHAR(10)` | Add. Supplier for Special Stock |
| `ResourceID` |  | |  |  | `CHAR(40)` | Resource |
| `CostEstimate` |  | |  |  | `NUMC(12)` | Cost Estimate Number - Product Costing |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `StockOwner` |  | |  |  | `CHAR(10)` | Additional Supplier for Special Stock |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `InventorySpecialStockValnType` |  | |  |  | `CHAR(1)` | Separate Valuation Type |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `MaterialBaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `EntryUnit` |  | |  |  | `UNIT(3)` | Unit of Entry |
| `OrderQuantityUnit` |  | |  |  | `UNIT(3)` | Purchase Order Unit of Measure |
| `IsReversalMovementType` |  | |  |  | `CHAR(1)` | Has Reversal Movement Type |
| `InventoryTransactionType` |  | |  |  | `CHAR(2)` | Transaction/Event Type |
| `ConsumptionPosting` |  | |  |  | `CHAR(1)` | Consumption Posting |
| `GoodsReceiptType` |  | |  |  | `CHAR(1)` | Receipt Indicator |
| `IssuingOrReceivingPlant` |  | |  |  | `CHAR(4)` | Transfer Plant |
| `IssuingOrReceivingStorageLoc` |  | |  |  | `CHAR(4)` | Receiving/Issuing Storage Location |
| `IssgOrRcvgMaterial` |  | |  |  | `CHAR(40)` | Transfer Material |
| `IssgOrRcvgBatch` |  | |  |  | `CHAR(10)` | Transfer Batch |
| `IssgOrRcvgSpclStockInd` |  | |  |  | `CHAR(1)` | Special Stock Indicator |
| `IssuingOrReceivingStockType` |  | |  |  | `CHAR(2)` | Transfer Stock Type |
| `IssuingOrReceivingValType` |  | |  |  | `CHAR(10)` | Transfer Batch (Valuation Type) |
| `IssgOrRcvgResourceID` |  | |  |  | `CHAR(40)` | Transfer Resource |
| `GoodsMovementIsCancelled` |  | |  |  | `CHAR(1)` | Item has been Canceled |
| `ReversedMaterialDocument` |  | |  |  | `CHAR(10)` | Reversed Material Document |
| `ReversedMaterialDocumentItem` |  | |  |  | `NUMC(4)` | Reversed Material Document Item |
| `ReversedMaterialDocumentYear` |  | |  |  | `NUMC(4)` | Reversed Material Document Year |
| `DocumentDate` |  | |  |  | `DATS(8)` | Document Date in Document |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Document Type |
| `CreationDate` |  | |  |  | `DATS(8)` | Day On Which Accounting Document Was Entered |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time of Entry |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date in the Document |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Period Year |
| `YearDay` |  | |  |  | `NUMC(7)` | Year-Day-Combination |
| `YearWeek` |  | |  |  | `NUMC(6)` | Year-Week-Combination |
| `YearMonth` |  | |  |  | `NUMC(6)` | Year-Month-Combination |
| `YearQuarter` |  | |  |  | `NUMC(5)` | Year-Quarter-Combination |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Quarter (1 - 4) |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Month (1 - 12) |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week (1 - 53) |
| `CalendarDay` |  | |  |  | `NUMC(3)` | Day of Year (1 - 366) |
| `WeekDay` |  | |  |  | `NUMC(1)` | Day of Week |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order Number |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `SalesOrderScheduleLine` |  | |  |  | `NUMC(4)` | Sales Order Schedule |
| `PurchaseOrder` |  | |  |  | `CHAR(10)` | Purchase Order Number |
| `PurchaseOrderItem` |  | |  |  | `NUMC(5)` | Item Number of Purchasing Document |
| `ProjectNetwork` |  | |  |  | `CHAR(12)` | Network Number for Account Assignment |
| `DeliveryDocument` |  | |  |  | `CHAR(10)` | Delivery |
| `DeliveryDocumentItem` |  | |  |  | `NUMC(6)` | Delivery Item |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `ManufacturingOrder` |  | |  |  | `CHAR(12)` | Manufacturing Order |
| `ManufacturingOrderItem` |  | |  |  | `NUMC(4)` | Manufacturing Order Item |
| `ReferenceDocument` |  | |  |  | `CHAR(16)` | Reference Document Number |
| `GoodsIssueOrReceiptSlipNumber` |  | |  |  | `CHAR(10)` | Goods Receipt/Issue Slip Number |
| `ReferenceDocumentFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of a Reference Document |
| `InvtryMgmtRefDocumentItem` |  | |  |  | `NUMC(4)` | Item of a Reference Document |
| `InvtryMgmtReferenceDocument` |  | |  |  | `CHAR(10)` | Document No. of a Reference Document |
| `GoodsMovementType` |  | |  |  | `CHAR(3)` | Movement Type (Inventory Management) |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Valuation Type |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | User Name |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `Customer` |  | |  |  | `CHAR(10)` | Account Number of Customer |
| `IsMaterialDocumentHeader` |  | |  |  | `INT4(10)` | Material Document Counter |
| `MaterialDocumentHeaderText` |  | |  |  | `CHAR(25)` | Document Header Text |
| `MaterialDocumentItemText` |  | |  |  | `CHAR(50)` | Item Text |
| `IsCompletelyDelivered` |  | |  |  | `CHAR(1)` | "Delivery Completed" Indicator |
| `GoodsRecipientName` |  | |  |  | `CHAR(12)` | Goods Recipient |
| `UnloadingPointName` |  | |  |  | `CHAR(25)` | Unloading Point |
| `GoodsMovementRefDocType` |  | |  |  | `CHAR(1)` | Goods Movement Reference Document Type |
| `GoodsMovementReasonCode` |  | |  |  | `NUMC(4)` | Reason for Movement |
| `ShelfLifeExpirationDate` |  | |  |  | `DATS(8)` | Shelf Life Expiration or Best-Before Date |
| `ManufactureDate` |  | |  |  | `DATS(8)` | Date of Manufacture |
| `SerialNumbersAreCreatedAutomly` |  | |  |  | `CHAR(1)` | Create Serial Number Automatically |
| `VersionForPrintingSlip` |  | |  |  | `CHAR(1)` | Version for Printing GR/GI Slip |
| `ManualPrintIsTriggered` |  | |  |  | `CHAR(1)` | Print via Output Control |
| `AccountAssignmentCategory` |  | |  |  | `CHAR(1)` | Account Assignment Category |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CostObject` |  | |  |  | `CHAR(12)` | Cost Object |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account Number |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `ProfitabilitySegment` |  | |  |  | `NUMC(10)` | Deprecated: Profitability Segment |
| `ProfitabilitySegment_2` |  | |  |  | `CHAR(10)` | Profitability Segment |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `MasterFixedAsset` |  | |  |  | `CHAR(12)` | Main Asset Number |
| `FixedAsset` |  | |  |  | `CHAR(4)` | Asset Subnumber |
| `FundsCenter` |  | |  |  | `CHAR(16)` | Funds Center |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `CommitmentItemShortID` |  | |  |  | `CHAR(14)` | Commitment Item Short ID |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `Reservation` |  | |  |  | `NUMC(10)` | Number of Reservation/Dependent Requirements |
| `ReservationItem` |  | |  |  | `NUMC(4)` | Item Number of Reservation / Dependent Requirements |
| `ReservationIsFinallyIssued` |  | |  |  | `CHAR(1)` | Final Issue for Reservation |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Indicator |
| `TotalGoodsMvtAmtInCCCrcy` |  | |  |  | `CURR(13)` | Amount in Local Currency |
| `GoodsMovementStkAmtInCCCrcy` |  | |  |  | `CURR(13)` | Amount in Local Currency with Sign of Stock Quantity |
| `GoodsMvtCnsmpnAmtInCCCrcy` |  | |  |  | `CURR(13)` | Amount in Local Currency with Sign of Consumption Quantity |
| `GdsMvtExtAmtInCoCodeCrcy` |  | |  |  | `CURR(13)` | Externally Entered Posting Amount in Local Currency |
| `SlsPrcAmtInclVATInCoCodeCrcy` |  | |  |  | `CURR(13)` | Sales Value Including Value-Added Tax |
| `EnteredSlsAmtInCoCodeCrcy` |  | |  |  | `CURR(13)` | Externally Entered Sales Value in Local Currency |
| `MatlStkChangeQtyInBaseUnit` |  | |  |  | `QUAN(31)` | Stock Quantity |
| `MatlCnsmpnQtyInMatlBaseUnit` |  | |  |  | `QUAN(31)` | Consumption Quantity |
| `QuantityInBaseUnit` |  | |  |  | `QUAN(13)` | Quantity |
| `QuantityInEntryUnit` |  | |  |  | `QUAN(13)` | Quantity in Unit of Entry |
| `GoodsReceiptQtyInOrderUnit` |  | |  |  | `QUAN(13)` | Goods Reciepts Quantity in Order Unit |
| `TransactionCode` |  | |  |  | `CHAR(20)` | Transaction Code |
| `IsAutomaticallyCreated` |  | |  |  | `CHAR(1)` | Item Automatically Created Indicator |
| `MaterialDocumentLine` |  | |  |  | `NUMC(6)` | Unique Identification of Document Line |
| `MaterialDocumentParentLine` |  | |  |  | `NUMC(6)` | Identifier of immediately superior line |
| `HierarchyNodeLevel` |  | |  |  | `NUMC(2)` | Hierarchy Level of Line in Document |
