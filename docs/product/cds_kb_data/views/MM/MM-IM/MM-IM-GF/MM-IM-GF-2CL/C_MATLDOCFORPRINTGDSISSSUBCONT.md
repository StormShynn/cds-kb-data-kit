---
name: C_MATLDOCFORPRINTGDSISSSUBCONT
description: "This CDS view provides the data that determines whether the system generates an output for material documents with subcontracting, and determines which goods movement data is used. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: MM-IM-GF-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MATLDOCFORPRINTGDSISSSUBCONT')/$value
semantic_en: "This CDS view provides the data that determines whether the system generates an output for material documents with subcontracting, and determines which goods movement data is used. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Material Doc Print Goods Mvt SubContract — CDS view tiêu dùng (transactional data) dựa trên I_MaterialDocumentForPrint."
keywords:
  - "Material Doc Print Goods Mvt SubContract"
  - "material"
  - "doc"
  - "print"
  - "goods"
  - "mvt"
  - "subcontract"
  - "document"
  - "year"
  - "item"
  - "stock"
  - "identifying"
  - "plant"
tags:
  - MM
  - bo:companycode
  - component:MM-IM-GF-2CL
  - consumption-view
  - contract
  - document
  - lob:sourcing & procurement
  - material
  - MM-IM
  - MM-IM-GF
  - MM-IM-GF-2CL
---
# C_MATLDOCFORPRINTGDSISSSUBCONT

**This CDS view provides the data that determines whether the system generates an output for material documents with subcontracting, and determines which goods movement data is used. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `MM-IM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MATLDOCFORPRINTGDSISSSUBCONT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaterialDocumentYear` | ✓ | |  |  | `NUMC(4)` | Material Document Year |
| `MaterialDocument` | ✓ | |  |  | `CHAR(10)` | Number of Material Document |
| `MaterialDocumentItem` | ✓ | |  |  | `NUMC(4)` | Material Document Item |
| `StockIdentifyingMaterial` |  | |  |  | `CHAR(40)` | Material for Stock Mamangement |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `StockIdfgStorageLocation` |  | |  |  | `CHAR(4)` | Storage Location (Stock Identifier) |
| `StockIdentifyingBatch` |  | |  |  | `CHAR(10)` | Batch Number (Stock Identifier) |
| `SpecialStockIdfgSupplier` |  | |  |  | `CHAR(10)` | Supplier for Special Stock |
| `SpecialStockIdfgSalesOrder` |  | |  |  | `CHAR(10)` | Sales Order Number of Valuated Sales Order Stock |
| `SpecialStockIdfgSalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item of Valuated Sales Order Stock |
| `SpecialStockIdfgWBSElement` |  | |  |  | `NUMC(8)` | Valuated Sales Order Stock WBS Element |
| `SpclStkIdfgWBSElementExtID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `SpclStkIdfgWBSElmntDescription` |  | | `_SpecialStockIdfgWBSElement` | `WBSDescription` | `CHAR(40)` | Work Breakdown Structure Element Name |
| `SpecialStockIdfgCustomer` |  | |  |  | `CHAR(10)` | Customer for Special Stock |
| `InventorySpecialStockType` |  | |  |  | `CHAR(1)` | Special Stock Type |
| `InventoryStockType` |  | |  |  | `CHAR(2)` | Stock Type of Goods Movement (Stock Identifier) |
| `SpecialStockIdfgStockOwner` |  | |  |  | `CHAR(10)` | Add. Supplier for Special Stock |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order Number |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `SalesOrderScheduleLine` |  | |  |  | `NUMC(4)` | Sales Order Schedule |
| `Customer` |  | |  |  | `CHAR(10)` | Account Number of Customer |
| `StockOwner` |  | |  |  | `CHAR(10)` | Additional Supplier for Special Stock |
| `WBSElement` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element Internal ID |
| `WBSDescription` |  | | `_WBSElement` | `WBSDescription` | `CHAR(40)` | Work Breakdown Structure Element Name |
| `IssgOrRcvgMaterial` |  | |  |  | `CHAR(40)` | Transfer Material |
| `IssuingOrReceivingPlant` |  | |  |  | `CHAR(4)` | Transfer Plant |
| `IssuingOrReceivingStorageLoc` |  | |  |  | `CHAR(4)` | Receiving/Issuing Storage Location |
| `IssgOrRcvgBatch` |  | |  |  | `CHAR(10)` | Transfer Batch |
| `IssgOrRcvgSpclStockInd` |  | |  |  | `CHAR(1)` | Special Stock Indicator |
| `IssuingOrReceivingValType` |  | |  |  | `CHAR(10)` | Transfer Batch (Valuation Type) |
| `IssuingOrReceivingStockType` |  | |  |  | `CHAR(2)` | Transfer Stock Type |
| `GoodsMovementRefDocType` |  | |  |  | `CHAR(1)` | Goods Movement Reference Document Type |
| `ConsumptionPosting` |  | |  |  | `CHAR(1)` | Consumption Posting |
| `GoodsMovementReasonCode` |  | |  |  | `NUMC(4)` | Reason for Movement |
| `GoodsMovementType` |  | |  |  | `CHAR(3)` | Movement Type (Inventory Management) |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Indicator |
| `InventoryUsabilityCode` |  | |  |  | `CHAR(1)` | Posting Control Stock Type |
| `QuantityInBaseUnit` |  | |  |  | `QUAN(13)` | Quantity |
| `MaterialBaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `MatlStkChangeQtyInBaseUnit` |  | |  |  | `QUAN(31)` | Stock Quantity |
| `MatlCnsmpnQtyInMatlBaseUnit` |  | |  |  | `QUAN(31)` | Consumption Quantity |
| `DocumentDate` |  | |  |  | `DATS(8)` | Document Date in Document |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Document Type |
| `InventoryTransactionType` |  | |  |  | `CHAR(2)` | Transaction/Event Type |
| `InventorySpecialStockValnType` |  | |  |  | `CHAR(1)` | Separate Valuation Type |
| `CreationDate` |  | |  |  | `DATS(8)` | Day On Which Accounting Document Was Entered |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time of Entry |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | User Name |
| `MaterialDocumentHeaderText` |  | |  |  | `CHAR(25)` | Document Header Text |
| `MaterialDocumentItemText` |  | |  |  | `CHAR(50)` | Item Text |
| `DeliveryInMatlDocumentHeader` |  | |  |  | `CHAR(10)` | Delivery Document on Header |
| `BillOfLading` |  | |  |  | `CHAR(16)` | Number of Bill of Lading at Time of Goods Receipt |
| `ShelfLifeExpirationDate` |  | |  |  | `DATS(8)` | Shelf Life Expiration or Best-Before Date |
| `ManufactureDate` |  | |  |  | `DATS(8)` | Date of Manufacture |
| `QuantityInEntryUnit` |  | |  |  | `QUAN(13)` | Quantity in Unit of Entry |
| `EntryUnit` |  | |  |  | `UNIT(3)` | Unit of Entry |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Valuation Type |
| `PurchaseOrder` |  | |  |  | `CHAR(10)` | Purchase Order Number |
| `PurchaseOrderItem` |  | |  |  | `NUMC(5)` | Item Number of Purchasing Document |
| `ProjectNetwork` |  | |  |  | `CHAR(12)` | Network Number for Account Assignment |
| `ManufacturingOrder` |  | |  |  | `CHAR(12)` | Manufacturing Order |
| `ManufacturingOrderItem` |  | |  |  | `NUMC(4)` | Manufacturing Order Item |
| `OrderID` |  | |  |  | `CHAR(12)` | Order Number |
| `OrderItem` |  | |  |  | `NUMC(4)` | Order Item |
| `Reservation` |  | |  |  | `NUMC(10)` | Number of Reservation/Dependent Requirements |
| `ReservationItem` |  | |  |  | `NUMC(4)` | Item Number of Reservation / Dependent Requirements |
| `ReservationIsFinallyIssued` |  | |  |  | `CHAR(1)` | Final Issue for Reservation |
| `DeliveryDocument` |  | |  |  | `CHAR(10)` | Delivery |
| `DeliveryDocumentItem` |  | |  |  | `NUMC(6)` | Delivery Document Item |
| `IsCompletelyDelivered` |  | |  |  | `CHAR(1)` | "Delivery Completed" Indicator |
| `ReversedMaterialDocumentYear` |  | |  |  | `NUMC(4)` | Reversed Material Document Year |
| `ReversedMaterialDocument` |  | |  |  | `CHAR(10)` | Reversed Material Document |
| `ReversedMaterialDocumentItem` |  | |  |  | `NUMC(4)` | Reversed Material Document Item |
| `RvslOfGoodsReceiptIsAllowed` |  | |  |  | `CHAR(1)` | Reversal of GR Allowed Despite Invoice |
| `IsReversalMovementType` |  | |  |  | `CHAR(1)` | Has Reversal Movement Type |
| `GoodsMovementIsCancelled` |  | |  |  | `CHAR(1)` | Item has been Canceled |
| `GoodsMovementCancellationType` |  | |  |  | `CHAR(1)` | Relevance for Analytics |
| `GoodsRecipientName` |  | |  |  | `CHAR(12)` | Goods Recipient |
| `UnloadingPointName` |  | |  |  | `CHAR(25)` | Unloading Point |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account Number |
| `CostObject` |  | |  |  | `CHAR(12)` | Cost Object |
| `ProfitabilitySegment` |  | |  |  | `NUMC(10)` | Deprecated: Profitability Segment |
| `ProfitabilitySegment_2` |  | |  |  | `CHAR(10)` | Profitability Segment |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostEstimate` |  | |  |  | `NUMC(12)` | Cost Estimate Number - Product Costing |
| `ReferenceDocument` |  | |  |  | `CHAR(16)` | Reference Document Number |
| `ServicePerformer` |  | |  |  | `CHAR(10)` | Service Performer |
| `EmploymentInternalID` |  | |  |  | `NUMC(8)` | Employment ID (Deprecated) |
| `AccountAssignmentCategory` |  | |  |  | `CHAR(1)` | Account Assignment Category |
| `WorkItem` |  | |  |  | `CHAR(10)` | Work Item ID |
| `ServicesRenderedDate` |  | |  |  | `DATS(8)` | Date on which Services were Provided |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `OriginalMaterialDocumentItem` |  | |  |  | `NUMC(4)` | Original Line in Material Document |
| `MultiAcctAssgmtOriglMatlDocItm` |  | |  |  | `NUMC(4)` | Original Line for Account Assignment Item in Material Doc. |
| `GoodsReceiptIsNonValuated` |  | |  |  | `CHAR(1)` | Goods Receipt, Non-Valuated |
| `HasMultipleAccountAssignment` |  | |  |  | `CHAR(1)` | Multiple Account Assignment |
| `MultipleAccountAssignmentCode` |  | |  |  | `CHAR(1)` | Multiple Account Assignment Code |
| `MasterFixedAsset` |  | |  |  | `CHAR(12)` | Main Asset Number |
| `FixedAsset` |  | |  |  | `CHAR(4)` | Asset Subnumber |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date in the Document |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Period Year |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FundsCenter` |  | |  |  | `CHAR(16)` | Funds Center |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `CommitmentItemShortID` |  | |  |  | `CHAR(14)` | Commitment Item Short ID |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `StorageType` |  | |  |  | `CHAR(3)` | Storage Type |
| `StorageBin` |  | |  |  | `CHAR(10)` | Storage Bin |
| `EWMWarehouse` |  | |  |  | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `EWMStorageBin` |  | |  |  | `CHAR(18)` | Storage Bin |
| `HandlingUnitExternalID` |  | |  |  | `CHAR(20)` | External Handling Unit Identification |
| `YearDay` |  | |  |  | `NUMC(7)` | Year-Day-Combination |
| `YearWeek` |  | |  |  | `NUMC(6)` | Year-Week-Combination |
| `YearMonth` |  | |  |  | `NUMC(6)` | Year-Month-Combination |
| `YearQuarter` |  | |  |  | `NUMC(5)` | Year-Quarter-Combination |
| `DocumentYear` |  | |  |  | `NUMC(4)` | Year |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Quarter (1 - 4) |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Month (1 - 12) |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week (1 - 53) |
| `CalendarDay` |  | |  |  | `NUMC(3)` | Day of Year (1 - 366) |
| `WeekDay` |  | |  |  | `NUMC(1)` | Day of Week |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `YearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year + Fiscal Period |
| `TotalGoodsMvtAmtInCCCrcy` |  | |  |  | `CURR(13)` | Amount in Local Currency |
| `GoodsMovementStkAmtInCCCrcy` |  | |  |  | `CURR(13)` | Amount in Local Currency with Sign of Stock Quantity |
| `GoodsMvtCnsmpnAmtInCCCrcy` |  | |  |  | `CURR(13)` | Amount in Local Currency with Sign of Consumption Quantity |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `GdsMvtExtAmtInCoCodeCrcy` |  | |  |  | `CURR(13)` | Externally Entered Posting Amount in Local Currency |
| `SlsPrcAmtInclVATInCoCodeCrcy` |  | |  |  | `CURR(13)` | Sales Value Including Value-Added Tax |
| `EnteredSlsAmtInCoCodeCrcy` |  | |  |  | `CURR(13)` | Externally Entered Sales Value in Local Currency |
| `TransactionCode` |  | |  |  | `CHAR(20)` | Transaction Code |
| `IsAutomaticallyCreated` |  | |  |  | `CHAR(1)` | Item Automatically Created Indicator |
| `MaterialDocumentLine` |  | |  |  | `NUMC(6)` | Unique Identification of Document Line |
| `MaterialDocumentParentLine` |  | |  |  | `NUMC(6)` | Identifier of immediately superior line |
| `HierarchyNodeLevel` |  | |  |  | `NUMC(2)` | Hierarchy Level of Line in Document |
| `MaterialDocumentRecordType` |  | |  |  | `CHAR(30)` | Record Type |
| `IsMaterialDocumentHeader` |  | |  |  | `INT4(10)` | Material Document Counter |
| `MaintOrderRoutingNumber` |  | |  |  | `NUMC(10)` | Routing Number of Operations in the Order |
| `MaintOrderOperationCounter` |  | |  |  | `NUMC(8)` | Internal Counter |
| `ManufacturerMaterial` |  | |  |  | `CHAR(40)` | Material Number Corresponding to Manufacturer Part Number |
| `ActivityInWarehouseIsPending` |  | |  |  | `CHAR(1)` | Posting in Warehouse Management System |
| `IssgOrRcvgWBSElement` |  | |  |  | `NUMC(8)` | Work Breakdown Structure Element (Stock Identifier) |
| `IssgOrRcvgWBSElementExtID` |  | |  |  | `CHAR(24)` | Complementary Valuated Sales Order Stock WBS Element |
| `IssgOrRcvgWBSDescription` |  | |  | `cast(_IssgOrRcvgWBSElement.WBSDescription as mmim_ir_wbs_element_descr)` | `CHAR(40)` | Descr. of Complementary Valuated Sales Order Stock WBS Elem. |
| `WarehouseNumber` |  | |  |  | `CHAR(3)` | Warehouse Number / Warehouse Complex |
| `TransferRequirementNumber` |  | |  |  | `NUMC(10)` | Transfer Requirement Number |
| `TransferPriority` |  | |  |  | `CHAR(1)` | Transfer Priority |
| `VersionForPrintingSlip` |  | |  |  | `CHAR(1)` | Version for Printing GR/GI Slip |
| `IssgOrRcvgSalesOrder` |  | |  |  | `CHAR(10)` | Sales and Distribution Document Number (Stock Identifier) |
| `IssgOrRcvgSalesOrderItem` |  | |  |  | `NUMC(6)` | Item Number of the SD Document (Stock Identifier) |
| `ShippingInstruction` |  | |  |  | `CHAR(2)` | Shipping Instructions |
| `ShipgInstrnSupplierCompliance` |  | |  |  | `CHAR(2)` | Compliance with Shipping Instructions |
| `QuantityInDeliveryQtyUnit` |  | |  |  | `QUAN(13)` | Quantity in Unit of Measure from Delivery Note |
| `DeliveryQuantityUnit` |  | |  |  | `UNIT(3)` | Unit of Measure From Delivery Note |
| `QtyInPurchaseOrderPriceUnit` |  | |  |  | `QUAN(13)` | Quantity in Purchase Order Price Unit |
| `OrderPriceUnit` |  | |  |  | `UNIT(3)` | Order Price Unit (Purchasing) |
| `PlantName` |  | |  |  | `CHAR(30)` | Plant Name |
| `AddressID` |  | |  |  | `CHAR(10)` | Address |
| `StorageLocationName` |  | |  |  | `CHAR(16)` | Storage Location Name |
| `IssuingOrReceivingStorLocName` |  | |  |  | `CHAR(16)` | Storage Location Name |
| `SupplierName` |  | |  |  | `CHAR(80)` | Name of Supplier |
| `MaterialName` |  | |  | `ProductName` | `CHAR(40)` | Product Description |
| `InventorySpecialStockTypeName` |  | |  |  | `CHAR(20)` | Special Stock Type Name |
| `WarehouseStorageBin` |  | |  |  | `CHAR(10)` | Storage Bin |
| `_Product` | | ✓ | | | | |
| `_ProductPlant` | | ✓ | | | | |
| `_ProductIsRecPlant` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_IssgOrRcvgPlant` | | ✓ | | | | |
| `_Batch` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_ProdStorLocBasic` | | ✓ | | | | |
| `_ProdIsRecStorLocBasic` | | ✓ | | | | |
| `_PurchaseOrderItem` | | ✓ | | | | |
| `_MaterialDocumentItem` | | ✓ | | | | |
| `_StorageLocation` | | ✓ | | | | |
| `_CustomerCompanyByPlant` | | ✓ | | | | |
| `_IssuingOrReceivingStorageLoc` | | ✓ | | | | |
| `_BPStockOwner` | | ✓ | | | | |
| `_SupplierCompanyByPlant` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [0..1] |
| `_ProductPlant` | `I_ProductPlant` | [1..1] |
| `_ProductIsRecPlant` | `I_ProductPlant` | [1..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_IssgOrRcvgPlant` | `I_Plant` | [1..1] |
| `_Batch` | `I_Batch` | [1..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_ProdStorLocBasic` | `I_ProductStorageLocationBasic` | [1..1] |
| `_ProdIsRecStorLocBasic` | `I_ProductStorageLocationBasic` | [1..1] |
| `_PurchaseOrderItem` | `I_PurchaseOrderItemAPI01` | [1..1] |
| `_MaterialDocumentItem` | `I_MaterialDocumentItem_2` | [0..1] |
| `_PrintExtension` | `E_MaterialDocumentItem` | [0..1] |
| `_PrintExtensionMatdoc` | `E_MaterialDocumentItem_2` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MATLDOCFORPRINTGDSISSSUBCONT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MATLDOCFORPRINTGDSISSSUBCONT')/$value)*

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Material Doc Print Goods Mvt SubContract'

@VDM:
      {
        viewType: #CONSUMPTION
      }
@ObjectModel: {
                 usageType: {
                              serviceQuality: #C,
                              sizeCategory: #XL,
                              dataClass: #TRANSACTIONAL
                            },
                  supportedCapabilities: [ #OUTPUT_FORM_DATA_PROVIDER, #SQL_DATA_SOURCE ]
                } 
@AccessControl.personalData.blocking:#REQUIRED
@Metadata.ignorePropagatedAnnotations:true
define view entity C_MatlDocForPrintGdsIssSubCont
  as select from I_MaterialDocumentForPrint 

  // Datasource extensibility
  association [0..1] to I_Product               as _Product           on  $projection.Material = _Product.Product
  association [1..1] to I_ProductPlant          as _ProductPlant      on  $projection.Material = _ProductPlant.Product
                                                                      and $projection.Plant = _ProductPlant.Plant
  association [1..1] to I_ProductPlant          as _ProductIsRecPlant on  $projection.Material = _ProductIsRecPlant.Product
                                                                      and $projection.IssuingOrReceivingPlant = _ProductIsRecPlant.Plant    
  association [1..1] to I_Plant                 as _Plant             on  $projection.Plant = _Plant.Plant
  association [1..1] to I_Plant                 as _IssgOrRcvgPlant   on  $projection.IssuingOrReceivingPlant = _IssgOrRcvgPlant.Plant
  association [1..1] to I_Batch                 as _Batch             on  $projection.Material = _Batch.Material         
                                                                      and $projection.Plant = _Batch.Plant                                                                                                                                                 
                                                                      and $projection.Batch = _Batch.Batch
  association [0..1] to I_Supplier              as _Supplier          on  $projection.Supplier = _Supplier.Supplier
  
  association [1..1] to I_ProductStorageLocationBasic as _ProdStorLocBasic      on  $projection.Material = _ProdStorLocBasic.Product
                                                                                and $projection.Plant = _ProdStorLocBasic.Plant
                                                                                and $projection.StorageLocation = _ProdStorLocBasic.StorageLocation
  association [1..1] to I_ProductStorageLocationBasic as _ProdIsRecStorLocBasic on  $projection.IssgOrRcvgMaterial = _ProdIsRecStorLocBasic.Product
                                                                                and $projection.IssuingOrReceivingPlant = _ProdIsRecStorLocBasic.Plant
                                                                                and $projection.IssuingOrReceivingStorageLoc = _ProdIsRecStorLocBasic.StorageLocation  
  association [1..1] to I_PurchaseOrderItemAPI01 as _PurchaseOrderItem  on  $projection.PurchaseOrder           = _PurchaseOrderItem.PurchaseOrder
                                                                        and $projection.PurchaseOrderItem       = _PurchaseOrderItem.PurchaseOrderItem

  association [0..1] to I_MaterialDocumentItem_2 as _MaterialDocumentItem on  $projection.MaterialDocumentYear = _MaterialDocumentItem.MaterialDocumentYear
                                                                          and $projection.MaterialDocument     = _MaterialDocumentItem.MaterialDocument
                                                                          and $projection.MaterialDocumentItem = _MaterialDocumentItem.MaterialDocumentItem

// Custom Fields extensibility  
  association [0..1] to E_MaterialDocumentItem  as _PrintExtension    on  $projection.MaterialDocumentYear = _PrintExtension.MaterialDocumentYear
                                                                      and $projection.MaterialDocument     = _PrintExtension.MaterialDocument
                                                                      and $projection.MaterialDocumentItem = _PrintExtension.MaterialDocumentItem
                                                                      and $projection.MaterialDocumentRecordType = _PrintExtension.MaterialDocumentRecordType
                                                                      
// Custom Fields extensibility for Business Context: MaterialDocumentItem  
  association [0..1] to E_MaterialDocumentItem_2  as _PrintExtensionMatdoc  on  $projection.MaterialDocumentYear = _PrintExtensionMatdoc.MaterialDocumentYear
                                                                            and $projection.MaterialDocument     = _PrintExtensionMatdoc.MaterialDocument
                                                                            and $projection.MaterialDocumentItem = _PrintExtensionMatdoc.MaterialDocumentItem
                                                                            and $projection.MaterialDocumentRecordType = _PrintExtensionMatdoc.MaterialDocumentRecordType
  
{

 key  MaterialDocumentYear,
 key  MaterialDocument,
 key  MaterialDocumentItem,
 
 StockIdentifyingMaterial,
 Plant,
 StockIdfgStorageLocation,
 StockIdentifyingBatch,
 SpecialStockIdfgSupplier,
 SpecialStockIdfgSalesOrder,
 SpecialStockIdfgSalesOrderItem,
 SpecialStockIdfgWBSElement,
 SpclStkIdfgWBSElementExtID,
 _SpecialStockIdfgWBSElement.WBSDescription as SpclStkIdfgWBSElmntDescription,
 SpecialStockIdfgCustomer,
 InventorySpecialStockType,
 InventoryStockType,
 SpecialStockIdfgStockOwner,

 Material,
 StorageLocation,
 Batch,
 Supplier,
 SalesOrder,
 SalesOrderItem,
 SalesOrderScheduleLine,
 Customer,
 StockOwner,
 WBSElement,
 WBSElementInternalID,
 _WBSElement.WBSDescription,
 IssgOrRcvgMaterial,
 IssuingOrReceivingPlant,
 IssuingOrReceivingStorageLoc,
 IssgOrRcvgBatch,
 IssgOrRcvgSpclStockInd,
 IssuingOrReceivingValType,
 IssuingOrReceivingStockType,

 GoodsMovementRefDocType,
 ConsumptionPosting,
 GoodsMovementReasonCode,
 GoodsMovementType,
 DebitCreditCode,
 InventoryUsabilityCode,
  @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
  @DefaultAggregation: #NONE
  QuantityInBaseUnit,
  MaterialBaseUnit,

  @DefaultAggregation:#NONE
  @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
  MatlStkChangeQtyInBaseUnit,

  @DefaultAggregation:#NONE
  @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
  MatlCnsmpnQtyInMatlBaseUnit,

  @Semantics.businessDate.at: true
  DocumentDate,
  AccountingDocumentType,
 InventoryTransactionType,
 InventorySpecialStockValnType,

 CreationDate,
 CreationTime,
 CreatedByUser,
 MaterialDocumentHeaderText,
 MaterialDocumentItemText,
 DeliveryInMatlDocumentHeader,
 BillOfLading,

 ShelfLifeExpirationDate,
 ManufactureDate,

  @Semantics.quantity.unitOfMeasure: 'EntryUnit'
  @DefaultAggregation: #NONE
 QuantityInEntryUnit,
 EntryUnit,
 InventoryValuationType,

  PurchaseOrder,
  PurchaseOrderItem,
 ProjectNetwork,
 ManufacturingOrder,
 ManufacturingOrderItem,
 OrderID,
 OrderItem,
 Reservation,
 ReservationItem,
 ReservationIsFinallyIssued,
 DeliveryDocument,
 DeliveryDocumentItem,
 IsCompletelyDelivered,

 ReversedMaterialDocumentYear,
 ReversedMaterialDocument,
 ReversedMaterialDocumentItem,
 RvslOfGoodsReceiptIsAllowed,
 IsReversalMovementType,
 GoodsMovementIsCancelled,
 GoodsMovementCancellationType,

 GoodsRecipientName,
 UnloadingPointName,
 CostCenter,
 GLAccount,
 CostObject,
 @VDM.lifecycle.status: #DEPRECATED
 @VDM.lifecycle.successor: 'ProfitabilitySegment_2'
 ProfitabilitySegment,
 ProfitabilitySegment_2,
 ProfitCenter,
 CostEstimate,

 ReferenceDocument,
 ServicePerformer,
 EmploymentInternalID,
 AccountAssignmentCategory,
 WorkItem,
 ServicesRenderedDate,

 CompanyCode,
 BusinessArea,
 ControllingArea,
 FunctionalArea,
 OriginalMaterialDocumentItem,
 MultiAcctAssgmtOriglMatlDocItm,
 GoodsReceiptIsNonValuated,
  @Semantics.booleanIndicator: true
  @VDM.lifecycle.status: #DEPRECATED
  @VDM.lifecycle.successor: 'MultipleAccountAssignmentCode'
 HasMultipleAccountAssignment,
 MultipleAccountAssignmentCode,
 MasterFixedAsset,
 FixedAsset,
  @Semantics.businessDate.at: true
 PostingDate,
  @Semantics.fiscal.yearPeriod: true
 FiscalYearPeriod,
  @Semantics.fiscal.yearVariant: true
 FiscalYearVariant,

 FundsCenter,
 Fund,
 CommitmentItemShortID, // replacement for CommitmentItem 
 GrantID,

 StorageType,
 StorageBin,
 
 EWMWarehouse,
 EWMStorageBin,
 HandlingUnitExternalID, 

 YearDay,
  @Semantics.calendar.yearWeek: true
 YearWeek,
  @Semantics.calendar.yearMonth: true
 YearMonth,
  @Semantics.calendar.yearQuarter: true
 YearQuarter,
  @Semantics.calendar.year: true
 DocumentYear,
  @Semantics.calendar.quarter: true
 CalendarQuarter,
  @Semantics.calendar.month: true
 CalendarMonth,
  @Semantics.calendar.week: true
 CalendarWeek,
  @Semantics.calendar.dayOfYear: true
 CalendarDay,
 WeekDay,
 FiscalYear,
 YearPeriod,

  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @DefaultAggregation: #NONE
 TotalGoodsMvtAmtInCCCrcy,
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @DefaultAggregation: #NONE
 GoodsMovementStkAmtInCCCrcy,
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @DefaultAggregation: #NONE
 GoodsMvtCnsmpnAmtInCCCrcy,
 CompanyCodeCurrency,

  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @DefaultAggregation: #NONE
 GdsMvtExtAmtInCoCodeCrcy,
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @DefaultAggregation: #NONE
 SlsPrcAmtInclVATInCoCodeCrcy,
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @DefaultAggregation: #NONE
 EnteredSlsAmtInCoCodeCrcy,

  @Consumption.hidden: true
 TransactionCode,

  @Consumption.hidden: true
  @Semantics.booleanIndicator: true
 IsAutomaticallyCreated,
  @Consumption.hidden: true
 MaterialDocumentLine,
  @Consumption.hidden: true
 MaterialDocumentParentLine,
  @Consumption.hidden: true
 HierarchyNodeLevel,

  @Consumption.hidden: true
  MaterialDocumentRecordType,
  IsMaterialDocumentHeader,
  
  MaintOrderRoutingNumber,
  MaintOrderOperationCounter,
  ManufacturerMaterial,
  ActivityInWarehouseIsPending,
  IssgOrRcvgWBSElement,
  IssgOrRcvgWBSElementExtID,
  cast(_IssgOrRcvgWBSElement.WBSDescription as mmim_ir_wbs_element_descr) as IssgOrRcvgWBSDescription,
  WarehouseNumber,
  TransferRequirementNumber,
  TransferPriority,
  VersionForPrintingSlip,
  IssgOrRcvgSalesOrder,
  IssgOrRcvgSalesOrderItem,
  ShippingInstruction,
  ShipgInstrnSupplierCompliance,
  @Semantics.quantity.unitOfMeasure: 'DeliveryQuantityUnit'
  QuantityInDeliveryQtyUnit,
  DeliveryQuantityUnit,
  @Semantics.quantity.unitOfMeasure: 'OrderPriceUnit'
  QtyInPurchaseOrderPriceUnit,
  OrderPriceUnit,
  PlantName,
  AddressID,
  StorageLocationName,
  IssuingOrReceivingStorLocName,
  SupplierName,
  I_MaterialDocumentForPrint._ProductText.ProductName as MaterialName,
  I_MaterialDocumentForPrint._InventorySpecialStockTypeText.InventorySpecialStockTypeName,
  _GoodsMvtTypeBySpclStkIndT[1: Language=$session.system_language].GoodsMovementTypeName,
  WarehouseStorageBin,
  
  _Product,
  _ProductPlant,
  _ProductIsRecPlant,
  _Plant,
  _IssgOrRcvgPlant,
  _Batch,
  _Supplier,
  _ProdStorLocBasic,
  _ProdIsRecStorLocBasic,
  _PurchaseOrderItem,
  _MaterialDocumentItem,
  
  //Exposed for DCL check
  _StorageLocation,
  _CustomerCompanyByPlant,
  _IssuingOrReceivingStorageLoc,
  _BPStockOwner,
  _SupplierCompanyByPlant,
  _Customer
  
  
}

where  InventorySpecialStockType = ' ' or ( InventorySpecialStockType= 'O' 
    and IsAutomaticallyCreated = ' ' )
```
