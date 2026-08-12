---
name: I_STOCKTRANSPORTORDERITEM_2
description: "Item in Stock Transport Order"
app_component: MM-PUR-PO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOCKTRANSPORTORDERITEM_2')/$value
semantic_en: "Item in Stock Transport Order"
keywords:
  - "Item in Stock Transport Order"
tags:
  - MM
  - bo:inventory
  - component:MM-PUR-PO-2CL
  - interface-view
  - lob:sourcing & procurement
  - MM-PUR
  - MM-PUR-PO
  - MM-PUR-PO-2CL
  - order
  - stock
  - metadata-only
---
# I_STOCKTRANSPORTORDERITEM_2

**Item in Stock Transport Order**

| Property | Value |
|---|---|
| App Component | `MM-PUR-PO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOCKTRANSPORTORDERITEM_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `StockTransportOrder` |  | |  |  | `CHAR(10)` | Stock Transport Order |
| `StockTransportOrderItem` |  | |  |  | `NUMC(5)` | Stock Transport Order Item |
| `STOItemUniqueID` |  | |  |  | `CHAR(15)` | Unique Item ID of Stock Transport Order |
| `StockTransportOrderItemText` |  | |  |  | `CHAR(40)` | Item Text of Stock Transport Order |
| `DocumentCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `PurchasingDocumentDeletionCode` |  | |  |  | `CHAR(1)` | Deletion Indicator in Purchasing Document |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ProductTypeCode` |  | |  |  | `CHAR(2)` | Product Type Group |
| `ProductType` |  | |  |  | `CHAR(4)` | Material Type |
| `ManufacturerMaterial` |  | |  |  | `CHAR(40)` | Material number |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `OrderQuantityUnit` |  | |  |  | `UNIT(3)` | Purchase Order Unit of Measure |
| `OrderQuantity` |  | |  |  | `QUAN(13)` | Purchase Order Quantity |
| `NetPriceQuantity` |  | |  |  | `DEC(5)` | Price Unit |
| `IsCompletelyDelivered` |  | |  |  | `CHAR(1)` | "Delivery Completed" Indicator |
| `IsFinallyInvoiced` |  | |  |  | `CHAR(1)` | Final Invoice Indicator |
| `GoodsReceiptIsExpected` |  | |  |  | `CHAR(1)` | Goods Receipt Indicator |
| `OutwardDeliveryIsComplete` |  | |  |  | `CHAR(1)` | "Outward Delivery Completed" Indicator |
| `InvoiceIsExpected` |  | |  |  | `CHAR(1)` | Invoice Receipt Indicator |
| `InvoiceIsGoodsReceiptBased` |  | |  |  | `CHAR(1)` | Indicator: GR-Based Invoice Verification |
| `EvaldRcptSettlmtIsAllowed` |  | |  |  | `CHAR(1)` | Evaluated Receipt Settlement (ERS) |
| `UnlimitedOverdeliveryIsAllowed` |  | |  |  | `CHAR(1)` | Unlimited Overdelivery Allowed |
| `OverdelivTolrtdLmtRatioInPct` |  | |  |  | `DEC(3)` | Overdelivery Tolerance |
| `UnderdelivTolrtdLmtRatioInPct` |  | |  |  | `DEC(3)` | Underdelivery Tolerance |
| `GoodsReceiptIsNonValuated` |  | |  |  | `CHAR(1)` | Goods Receipt, Non-Valuated |
| `RequisitionerName` |  | |  |  | `CHAR(12)` | Name of requisitioner/requester |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `STOItemCategory` |  | |  |  | `CHAR(1)` | Item category in purchasing document |
| `OrderPriceUnit` |  | |  |  | `UNIT(3)` | Order Price Unit (Purchasing) |
| `ItemVolumeUnit` |  | |  |  | `UNIT(3)` | Volume Unit |
| `ItemWeightUnit` |  | |  |  | `UNIT(3)` | Unit of Weight |
| `PricingDateControl` |  | |  |  | `CHAR(1)` | Price Determination (Pricing) Date Control |
| `DeliveryDocumentType` |  | |  |  | `CHAR(4)` | Delivery Type for Returns to Supplier |
| `IssuingStorageLocation` |  | |  |  | `CHAR(4)` | Issuing Storage Location for Stock Transport Order |
| `IsStatisticalItem` |  | |  |  | `CHAR(1)` | Item is statistical |
| `PurchasingParentItem` |  | |  |  | `NUMC(5)` | Higher-Level Item in Purchasing Documents |
| `IsReturnsItem` |  | |  |  | `CHAR(1)` | Returns Item |
| `AccountAssignmentCategory` |  | |  |  | `CHAR(1)` | Account Assignment Category |
| `PurchasingInfoRecord` |  | |  |  | `CHAR(10)` | Purchasing Info Record Number |
| `NetAmount` |  | |  |  | `CURR(13)` | Net Order Value in PO Currency |
| `EffectiveAmount` |  | |  |  | `CURR(13)` | Effective value of item |
| `NetPriceAmount` |  | |  |  | `CURR(11)` | Net Price in Purchasing Document (in Document Currency) |
| `ItemVolume` |  | |  |  | `QUAN(13)` | Volume |
| `ItemNetWeight` |  | |  |  | `QUAN(13)` | Net Weight |
| `ItemGrossWeight` |  | |  |  | `QUAN(13)` | Gross Weight |
| `OrderPriceUnitToOrderUnitNmrtr` |  | |  |  | `DEC(5)` | Quantity Conversion Numerator |
| `OrdPriceUnitToOrderUnitDnmntr` |  | |  |  | `DEC(5)` | Denominator for Conv. of Order Price Unit into Order Unit |
| `TaxCode` |  | |  |  | `CHAR(2)` | Tax on Sales/Purchases Code |
| `TaxJurisdiction` |  | |  |  | `CHAR(15)` | Tax Jurisdiction |
| `TaxCountry` |  | |  |  | `CHAR(3)` | Tax Reporting Country/Region |
| `TaxDeterminationDate` |  | |  |  | `DATS(8)` | Date for Determining Tax Rates |
| `PartialDeliveryIsAllowed` |  | |  |  | `CHAR(1)` | Partial Delivery at Item Level (Stock Transfer) |
| `PlannedDeliveryDurationInDays` |  | |  |  | `DEC(3)` | Planned Delivery Time in Days |
| `GoodsReceiptDurationInDays` |  | |  |  | `DEC(3)` | Goods receipt processing time in days |
| `IncotermsClassification` |  | |  |  | `CHAR(3)` | Incoterms (Part 1) |
| `IncotermsTransferLocation` |  | |  |  | `CHAR(28)` | Incoterms (Part 2) |
| `IncotermsLocation1` |  | |  |  | `CHAR(70)` | Incoterms Location 1 |
| `IncotermsLocation2` |  | |  |  | `CHAR(70)` | Incoterms Location 2 |
| `PartialInvoiceDistribution` |  | |  |  | `CHAR(1)` | Partial invoice indicator |
| `ShippingInstruction` |  | |  |  | `CHAR(2)` | Shipping Instructions |
| `InventoryUsabilityCode` |  | |  |  | `CHAR(1)` | Stock Type |
| `InventorySpecialStockType` |  | |  |  | `CHAR(1)` | Special Stock Indicator |
| `PurchasingOrderReason` |  | |  |  | `CHAR(3)` | Reason for Ordering |
| `StockTransportOrderType` |  | |  |  | `CHAR(4)` | Purchasing Document Type |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `SupplierConfirmationControlKey` |  | |  |  | `CHAR(4)` | Confirmation Control Key |
| `Subcontractor` |  | |  |  | `CHAR(10)` | Supplier to be Supplied/Who is to Receive Delivery |
| `Customer` |  | |  |  | `CHAR(10)` | Customer |
