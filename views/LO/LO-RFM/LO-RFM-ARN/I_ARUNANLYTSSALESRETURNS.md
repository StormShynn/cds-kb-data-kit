---
name: I_ARUNANLYTSSALESRETURNS
description: Return Sales Order
app_component: LO-RFM-ARN
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSSALESRETURNS')/$value
semantic_en: Return Sales Order
tags:
  - LO
  - component:LO-RFM-ARN
  - interface-view
  - LO-RFM
  - LO-RFM-ARN
  - lob:logistics general
  - order
  - sales-order
  - metadata-only
---
# I_ARUNANLYTSSALESRETURNS

**Return Sales Order**

| Property | Value |
|---|---|
| App Component | `LO-RFM-ARN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSSALESRETURNS')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `RequirementDocumentNumber` | `CHAR(10)` | Sales Document |
| `RequirementDocumentItem` | `NUMC(6)` | Sales Document Item |
| `SupplyScheduleLine` | `NUMC(4)` | Schedule Line Number |
| `AssignedSupplyType` | `CHAR(1)` |  |
| `SupAssgmtSource` | `CHAR(1)` |  |
| `SupplyDeliveryDate` | `DATS(8)` | Requested Delivery Date |
| `ProductAvailabilityDate` | `DATS(8)` | Requested Delivery Date |
| `RequestedDeliveryDate` | `DATS(8)` | Requested Delivery Date |
| `TotalQuantity` | `QUAN(15)` | Overall confirmed sales order schedule lines: quantity |
| `OpenSupplyQuantity` | `QUAN(16)` |  |
| `BaseUnit` | `UNIT(3)` | Base Unit of Measure |
| `Product` | `CHAR(40)` | Material Number |
| `ProductGroup` | `CHAR(9)` | Material Group |
| `Plant` | `CHAR(4)` | Plant (Own or External) |
| `OrderType` | `CHAR(4)` | Sales Document Type |
| `ProductType` | `CHAR(4)` | Material Type |
| `StockSegment` | `CHAR(40)` | Requirement Segment |
| `CrossPlantConfigurableProduct` | `CHAR(40)` | Cross-Plant Configurable Material |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `Division` | `CHAR(2)` | Division |
| `SalesDistrict` | `CHAR(6)` | Sales District |
| `PurchasingOrganization` | `CHAR(4)` | Purchasing Organization |
| `PurchasingGroup` | `CHAR(3)` | Purchasing Group |
| `Batch` | `CHAR(10)` | Batch Number |
| `StorageLocation` | `CHAR(4)` | Storage Location |
| `Customer` | `CHAR(10)` | Customer Number |
| `CompanyCode` | `CHAR(4)` | Company Code to Be Billed |
| `SDDocumentReason` | `CHAR(3)` | Order Reason (Reason for the Business Transaction) |
| `SalesDocumentRjcnReason` | `CHAR(2)` | Reason for Rejection of Sales Documents |
| `NetPriceAmount` | `CURR(11)` | Net Price |
| `DocumentCurrency` | `CUKY(5)` | SD Document Currency |
| `NetAmount` | `CURR(15)` | Net Value of the Document Item in Document Currency |
| `RequirementSegment` | `CHAR(40)` | Requirement Segment |
| `RequestedRqmtQtyInBaseUnit` | `QUAN(15)` | Requested Order Quantity in Base Unit |
| `SalesOffice` | `CHAR(4)` | Sales Office |
| `SalesGroup` | `CHAR(3)` | Sales Group |
| `SoldToParty` | `CHAR(10)` | Sold-to Party |
| `FashionCancelDate` | `DATS(8)` | Cancellation Date |
| `ProductSeasonYear` | `CHAR(4)` | Season Year |
| `ProductSeason` | `CHAR(10)` | Season |
| `ProductCollection` | `CHAR(10)` | Fashion Collection |
| `ProductTheme` | `CHAR(10)` | Fashion Theme |
| `ProductCharacteristic1` | `CHAR(18)` | Characteristic Value 1 |
| `ProductCharacteristic2` | `CHAR(18)` | Characteristic Value 2 |
| `ProductCharacteristic3` | `CHAR(18)` | Characteristic Value 3 |
