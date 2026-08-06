---
name: I_GOODSMOVEMENTSUBSTITUTEDEX
description: The system contains actual material document data and substitute data for material documents that have been archived. Both are necessary to calculate current stocks. This CDS view is used for data extraction of the substitute material document data and should be used in combination with the CDS view I_GoodsMovementDocumentDEX, for actual material document data, so that stocks can be calculated. You may build your own BW content based on the data provided by this view. This CDS view provides the data to answer the following business questions: Which material has been posted to which stock type? Which material has been posted to which special stock type and to which reference object? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: MM-IM-VDM-SGM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GOODSMOVEMENTSUBSTITUTEDEX')/$value
semantic_en: The system contains actual material document data and substitute data for material documents that have been archived. Both are necessary to calculate current stocks. This CDS view is used for data extraction of the substitute material document data and should be used in combination with the CDS view I_GoodsMovementDocumentDEX, for actual material document data, so that stocks can be calculated. You may build your own BW content based on the data provided by this view. This CDS view provides the data to answer the following business questions: Which material has been posted to which stock type? Which material has been posted to which special stock type and to which reference object? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - MM
  - bo:companycode
  - component:MM-IM-VDM-SGM-2CL
  - document
  - interface-view
  - lob:sourcing & procurement
  - material
  - MM-IM
  - MM-IM-VDM
  - MM-IM-VDM-SGM
  - MM-IM-VDM-SGM-2CL
  - stock
  - metadata-only
---
# I_GOODSMOVEMENTSUBSTITUTEDEX

**The system contains actual material document data and substitute data for material documents that have been archived. Both are necessary to calculate current stocks. This CDS view is used for data extraction of the substitute material document data and should be used in combination with the CDS view I_GoodsMovementDocumentDEX, for actual material document data, so that stocks can be calculated. You may build your own BW content based on the data provided by this view. This CDS view provides the data to answer the following business questions: Which material has been posted to which stock type? Which material has been posted to which special stock type and to which reference object? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-SGM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GOODSMOVEMENTSUBSTITUTEDEX')/$value) |

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
| `StockIdfgStorageLocation` | `CHAR(4)` | Storage Location (Stock Identifier) |
| `StockIdentifyingBatch` | `CHAR(10)` | Batch Number (Stock Identifier) |
| `SpecialStockIdfgSupplier` | `CHAR(10)` | Supplier for Special Stock |
| `SpecialStockIdfgSalesOrder` | `CHAR(10)` | Sales Order Number of Valuated Sales Order Stock |
| `SpecialStockIdfgSalesOrderItem` | `NUMC(6)` | Sales Order Item of Valuated Sales Order Stock |
| `SpecialStockIdfgWBSElement` | `NUMC(8)` | Valuated Sales Order Stock WBS Element |
| `SpecialStockIdfgCustomer` | `CHAR(10)` | Customer for Special Stock |
| `InventorySpecialStockType` | `CHAR(1)` | Special Stock Type |
| `InventoryStockType` | `CHAR(2)` | Stock Type of Goods Movement (Stock Identifier) |
| `SpecialStockIdfgStockOwner` | `CHAR(10)` | Add. Supplier for Special Stock |
| `ResourceID` | `CHAR(40)` | Resource |
| `CostEstimate` | `NUMC(12)` | Cost Estimate Number - Product Costing |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `InventorySpecialStockValnType` | `CHAR(1)` | Separate Valuation Type |
| `MatlStkChangeQtyInBaseUnit` | `QUAN(31)` | Stock Quantity |
| `MatlCnsmpnQtyInMatlBaseUnit` | `QUAN(31)` | Consumption Quantity |
| `MaterialBaseUnit` | `UNIT(3)` | Base Unit of Measure |
| `GoodsMovementStkAmtInCCCrcy` | `CURR(13)` | Amount in Local Currency with Sign of Stock Quantity |
| `GoodsMvtCnsmpnAmtInCCCrcy` | `CURR(13)` | Amount in Local Currency with Sign of Consumption Quantity |
| `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `InventoryValuationType` | `CHAR(10)` | Valuation Type |
| `DocumentDate` | `DATS(8)` | Document Date in Document |
| `PostingDate` | `DATS(8)` | Posting Date in the Document |
| `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `FiscalYearPeriod` | `NUMC(7)` | Period Year |
| `YearDay` | `NUMC(7)` | Year-Day-Combination |
| `YearWeek` | `NUMC(6)` | Year-Week-Combination |
| `YearMonth` | `NUMC(6)` | Year-Month-Combination |
| `YearQuarter` | `NUMC(5)` | Year-Quarter-Combination |
| `CalendarQuarter` | `NUMC(1)` | Quarter (1 - 4) |
| `CalendarMonth` | `NUMC(2)` | Month (1 - 12) |
| `CalendarWeek` | `NUMC(2)` | Calendar Week (1 - 53) |
| `CalendarDayOfYear` | `NUMC(3)` | Day of Year (1 - 366) |
| `WeekDay` | `NUMC(1)` | Day of Week |
