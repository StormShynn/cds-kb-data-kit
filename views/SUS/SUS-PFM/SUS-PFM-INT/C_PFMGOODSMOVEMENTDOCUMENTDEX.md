---
name: C_PFMGOODSMOVEMENTDOCUMENTDEX
description: This CDS view is used by SAP Product Footprint Management for the data extraction of relevant material flows. The view provides the necessary data based upon posted material documents. The material flow data is consumed by the solution in an aggregated way.
app_component: SUS-PFM-INT
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PFMGOODSMOVEMENTDOCUMENTDEX')/$value
semantic_en: This CDS view is used by SAP Product Footprint Management for the data extraction of relevant material flows. The view provides the necessary data based upon posted material documents. The material flow data is consumed by the solution in an aggregated way.
tags:
  - SUS
  - bo:material
  - component:SUS-PFM-INT
  - consumption-view
  - document
  - material
  - product
  - SUS-PFM
  - SUS-PFM-INT
  - metadata-only
---
# C_PFMGOODSMOVEMENTDOCUMENTDEX

**This CDS view is used by SAP Product Footprint Management for the data extraction of relevant material flows. The view provides the necessary data based upon posted material documents. The material flow data is consumed by the solution in an aggregated way.**

| Property | Value |
|---|---|
| App Component | `SUS-PFM-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PFMGOODSMOVEMENTDOCUMENTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaterialDocumentKey1` |  | |  |  | `RAW(4)` | Key field 1 |
| `MaterialDocumentKey2` |  | |  |  | `RAW(4)` | Key field 2 |
| `MaterialDocumentKey3` |  | |  |  | `RAW(5)` | Key field 3 |
| `MaterialDocumentKey4` |  | |  |  | `RAW(1)` | Key field 4 |
| `MaterialDocumentKey5` |  | |  |  | `RAW(1)` | Key field 5 |
| `MaterialDocumentKey6` |  | |  |  | `RAW(1)` | Key field 6 |
| `MaterialDocument` |  | |  |  | `CHAR(10)` | Number of Material Document |
| `MaterialDocumentItem` |  | |  |  | `NUMC(4)` | Material Document Item |
| `MaterialDocumentYear` |  | |  |  | `NUMC(4)` | Material Document Year |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `InventorySpecialStockType` |  | |  |  | `CHAR(1)` | Special Stock Type |
| `InventoryStockType` |  | |  |  | `CHAR(2)` | Stock Type of Goods Movement (Stock Identifier) |
| `StockOwner` |  | |  |  | `CHAR(10)` | Additional Supplier for Special Stock |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `MaterialBaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `IsReversalMovementType` |  | |  |  | `CHAR(1)` | Has Reversal Movement Type |
| `IssuingOrReceivingPlant` |  | |  |  | `CHAR(4)` | Transfer Plant |
| `IssuingOrReceivingStorageLoc` |  | |  |  | `CHAR(4)` | Receiving/Issuing Storage Location |
| `DocumentDate` |  | |  |  | `DATS(8)` | Document Date in Document |
| `CreationDate` |  | |  |  | `DATS(8)` | Day On Which Accounting Document Was Entered |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time of Entry |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date in the Document |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Quarter (1 - 4) |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Month (1 - 12) |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week (1 - 53) |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order Number |
| `PurchaseOrder` |  | |  |  | `CHAR(10)` | Purchase Order Number |
| `ProjectNetwork` |  | |  |  | `CHAR(12)` | Network Number for Account Assignment |
| `DeliveryDocument` |  | |  |  | `CHAR(10)` | Delivery |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project definition |
| `OrderID` |  | |  |  | `CHAR(12)` | Order Number |
| `OrderCategory` |  | |  |  | `NUMC(2)` | Order Category |
| `ManufacturingOrder` |  | |  |  | `CHAR(12)` | Manufacturing Order |
| `MainProduct` |  | |  |  | `CHAR(40)` | Main Product |
| `ManufacturingOrderCategory` |  | |  |  | `NUMC(2)` | Order Category |
| `InvtryMgmtReferenceDocument` |  | |  |  | `CHAR(10)` | Document No. of a Reference Document |
| `GoodsMovementType` |  | |  |  | `CHAR(3)` | Movement Type (Inventory Management) |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `Customer` |  | |  |  | `CHAR(10)` | Account Number of Customer |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `StockChangeCategory` |  | |  |  | `CHAR(2)` | Stock Change Category |
| `IsCrossPlantTransfer` |  | |  |  | `CHAR(1)` | Is Cross Plant Transfer |
| `TotalGoodsMvtAmtInCCCrcy` |  | |  |  | `CURR(13)` | Amount in Local Currency |
| `GoodsMovementStkAmtInCCCrcy` |  | |  |  | `CURR(13)` | Amount in Local Currency with Sign of Stock Quantity |
| `GoodsMvtCnsmpnAmtInCCCrcy` |  | |  |  | `CURR(13)` | Amount in Local Currency with Sign of Consumption Quantity |
| `MatlStkChangeQtyInBaseUnit` |  | |  |  | `QUAN(31)` | Stock Quantity |
| `MatlCnsmpnQtyInMatlBaseUnit` |  | |  |  | `QUAN(31)` | Consumption Quantity |
| `QuantityInBaseUnit` |  | |  |  | `QUAN(13)` | Quantity |
