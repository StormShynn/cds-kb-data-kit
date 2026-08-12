---
name: I_STOCKTRANSPORTORDERITEM
description: "Stock Transport Order Item"
app_component: MM-PUR-PO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOCKTRANSPORTORDERITEM')/$value
semantic_en: "Stock Transport Order Item"
keywords:
  - "Stock Transport Order Item"
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
# I_STOCKTRANSPORTORDERITEM

**Stock Transport Order Item**

| Property | Value |
|---|---|
| App Component | `MM-PUR-PO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOCKTRANSPORTORDERITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseOrder` |  | |  |  | `CHAR(10)` | Stock Transport Order |
| `PurchaseOrderItem` |  | |  |  | `NUMC(5)` | Stock Transport Order Item |
| `PurchaseOrderItemUniqueID` |  | |  |  | `CHAR(15)` | Concatenation of EBELN and EBELP |
| `PurchaseOrderCategory` |  | |  |  | `CHAR(1)` | Purchasing Document Category |
| `DocumentCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `PurchasingDocumentDeletionCode` |  | |  |  | `CHAR(1)` | Deletion Indicator in Purchasing Document |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `ManufacturerMaterial` |  | |  |  | `CHAR(40)` | Material number |
| `MaterialType` |  | |  |  | `CHAR(4)` | Material Type |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `ReceivingPlant` |  | |  |  | `CHAR(4)` | Plant |
| `ManualDeliveryAddressID` |  | |  |  | `CHAR(10)` | Manual address number in purchasing document item |
| `ReferenceDeliveryAddressID` |  | |  |  | `CHAR(10)` | Number of delivery address |
| `Customer` |  | |  |  | `CHAR(10)` | Customer |
| `CrossPlantConfigurableProduct` |  | |  |  | `CHAR(40)` | Cross-Plant Configurable Material |
| `ReceivingStorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `PurchaseOrderQuantityUnit` |  | |  |  | `UNIT(3)` | Purchase Order Unit of Measure |
| `OrderItemQtyToBaseQtyNmrtr` |  | |  |  | `DEC(5)` | Numerator for Conversion of Order Unit to Base Unit |
| `OrderItemQtyToBaseQtyDnmntr` |  | |  |  | `DEC(5)` | Denominator for Conversion of Order Unit to Base Unit |
| `NetPriceQuantity` |  | |  |  | `DEC(5)` | Price Unit |
| `IsCompletelyDelivered` |  | |  |  | `CHAR(1)` | "Delivery Completed" Indicator |
| `IsFinallyInvoiced` |  | |  |  | `CHAR(1)` | Final Invoice Indicator |
| `GoodsReceiptIsExpected` |  | |  |  | `CHAR(1)` | Goods Receipt Indicator |
| `OutwardDeliveryIsComplete` |  | |  |  | `CHAR(1)` | "Outward Delivery Completed" Indicator |
| `InvoiceIsExpected` |  | |  |  | `CHAR(1)` | Invoice Receipt Indicator |
| `InvoiceIsGoodsReceiptBased` |  | |  |  | `CHAR(1)` | Indicator: GR-Based Invoice Verification |
| `PurchaseRequisition` |  | |  |  | `CHAR(10)` | Purchase Requisition Number |
| `PurchaseRequisitionItem` |  | |  |  | `NUMC(5)` | Item Number of Purchase Requisition |
| `EvaldRcptSettlmtIsAllowed` |  | |  |  | `CHAR(1)` | Evaluated Receipt Settlement (ERS) |
| `UnlimitedOverdeliveryIsAllowed` |  | |  |  | `CHAR(1)` | Unlimited Overdelivery Allowed |
| `OverdelivTolrtdLmtRatioInPct` |  | |  |  | `DEC(3)` | Overdelivery Tolerance |
| `UnderdelivTolrtdLmtRatioInPct` |  | |  |  | `DEC(3)` | Underdelivery Tolerance |
| `RequisitionerName` |  | |  |  | `CHAR(12)` | Name of requisitioner/requester |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `PurchaseOrderItemCategory` |  | |  |  | `CHAR(1)` | Item category in purchasing document |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `OrderPriceUnit` |  | |  |  | `UNIT(3)` | Order Price Unit (Purchasing) |
| `ItemVolumeUnit` |  | |  |  | `UNIT(3)` | Volume Unit |
| `ItemWeightUnit` |  | |  |  | `UNIT(3)` | Unit of Weight |
| `PartialInvoiceDistribution` |  | |  |  | `CHAR(1)` | Partial invoice indicator |
| `PricingDateControl` |  | |  |  | `CHAR(1)` | Price Determination (Pricing) Date Control |
| `DeliveryDocumentType` |  | |  |  | `CHAR(4)` | Delivery Type for Returns to Supplier |
| `IssuingStorageLocation` |  | |  |  | `CHAR(4)` | Issuing Storage Location for Stock Transport Order |
| `IsStatisticalItem` |  | |  |  | `CHAR(1)` | Item is statistical |
| `PurchasingParentItem` |  | |  |  | `NUMC(5)` | Higher-Level Item in Purchasing Documents |
| `IsReturnsItem` |  | |  |  | `CHAR(1)` | Returns Item |
| `SupplierConfirmationControlKey` |  | |  |  | `CHAR(4)` | Confirmation Control Key |
| `PriceIsToBePrinted` |  | |  |  | `CHAR(1)` | Price Printout |
| `AccountAssignmentCategory` |  | |  |  | `CHAR(1)` | Account Assignment Category |
| `PurchasingInfoRecord` |  | |  |  | `CHAR(10)` | Purchasing Info Record Number |
| `NetAmount` |  | |  |  | `CURR(13)` | Net Order Value in PO Currency |
| `EffectiveAmount` |  | |  |  | `CURR(13)` | Effective value of item |
| `OrderQuantity` |  | |  |  | `QUAN(13)` | Purchase Order Quantity |
| `NetPriceAmount` |  | |  |  | `CURR(11)` | Net Price in Purchasing Document (in Document Currency) |
| `ItemVolume` |  | |  |  | `QUAN(13)` | Volume |
| `ItemNetWeight` |  | |  |  | `QUAN(13)` | Net Weight |
| `OrderPriceUnitToOrderUnitNmrtr` |  | |  |  | `DEC(5)` | Numerator for Conversion of Order Price Unit into Order Unit |
| `OrdPriceUnitToOrderUnitDnmntr` |  | |  |  | `DEC(5)` | Denominator for Conv. of Order Price Unit into Order Unit |
| `GoodsReceiptIsNonValuated` |  | |  |  | `CHAR(1)` | Goods Receipt, Non-Valuated |
| `TaxCode` |  | |  |  | `CHAR(2)` | Tax on Sales/Purchases Code |
| `TaxJurisdiction` |  | |  |  | `CHAR(15)` | Tax Jurisdiction |
| `ValuationType` |  | |  |  | `CHAR(10)` | Valuation Type |
| `EarmarkedFundsDocument` |  | |  |  | `CHAR(10)` | Document Number for Earmarked Funds |
| `EarmarkedFunds` |  | |  |  | `CHAR(10)` | Document Number for Earmarked Funds |
| `EarmarkedFundsDocumentItem` |  | |  |  | `NUMC(3)` | Earmarked Funds: Document Item |
| `EarmarkedFundsItem` |  | |  |  | `NUMC(3)` | Earmarked Funds: Document Item |
| `ExpectedOverallLimitAmount` |  | |  |  | `CURR(13)` | Expected Value of Overall Limit |
| `OverallLimitAmount` |  | |  |  | `CURR(13)` | Overall Limit |
| `PartialDeliveryIsAllowed` |  | |  |  | `CHAR(1)` | Partial Delivery at Item Level (Stock Transfer) |
| `PlannedDeliveryDurationInDays` |  | |  |  | `DEC(3)` | Planned Delivery Time in Days |
| `GoodsReceiptDurationInDays` |  | |  |  | `DEC(3)` | Goods receipt processing time in days |
| `RequirementSegment` |  | |  |  | `CHAR(40)` | Requirement Segment |
| `PurchasingOrderReason` |  | |  |  | `CHAR(3)` | Reason for Ordering |
| `IncotermsClassification` |  | |  |  | `CHAR(3)` | Incoterms (Part 1) |
| `IncotermsTransferLocation` |  | |  |  | `CHAR(28)` | Incoterms (Part 2) |
| `IncotermsLocation1` |  | |  |  | `CHAR(70)` | Incoterms Location 1 |
| `IncotermsLocation2` |  | |  |  | `CHAR(70)` | Incoterms Location 2 |
| `CreationTime` |  | |  |  | `TIMS(6)` | Purchasing Document Creation Time |
| `CreationDate` |  | |  |  | `DATS(8)` | Purchasing Document Creation Date |
| `ProductSeasonYear` |  | |  |  | `CHAR(4)` | Season Year |
| `ProductSeason` |  | |  |  | `CHAR(10)` | Season |
| `ProductCollection` |  | |  |  | `CHAR(10)` | Fashion Collection |
| `ProductTheme` |  | |  |  | `CHAR(10)` | Fashion Theme |
| `SeasonCompletenessStatus` |  | |  |  | `CHAR(1)` | Season Completeness Indicator |
| `ShippingGroupRule` |  | |  |  | `CHAR(4)` | PSST Grouping Rule |
| `ShippingGroupNumber` |  | |  |  | `CHAR(10)` | PSST Group |
| `ProductCharacteristic1` |  | |  |  | `CHAR(18)` | Characteristic Value 1 |
| `ProductCharacteristic2` |  | |  |  | `CHAR(18)` | Characteristic Value 2 |
| `ProductCharacteristic3` |  | |  |  | `CHAR(18)` | Characteristic Value 3 |
| `ARunPriorityValue` |  | |  |  | `CHAR(10)` | ARun Demand Priority |
| `ARunDemandGroupPriority` |  | |  |  | `CHAR(10)` | ARun Demand Group Priority |
