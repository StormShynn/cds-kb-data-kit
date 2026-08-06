---
name: C_ARUNANLYTSSLSORDREJECTION
description: Sales Order Rejection
app_component: LO-RFM-ARN
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSSLSORDREJECTION')/$value
semantic_en: Sales Order Rejection
tags:
  - LO
  - bo:salesorder
  - component:LO-RFM-ARN
  - consumption-view
  - LO-RFM
  - LO-RFM-ARN
  - lob:logistics general
  - order
  - sales-order
  - metadata-only
---
# C_ARUNANLYTSSLSORDREJECTION

**Sales Order Rejection**

| Property | Value |
|---|---|
| App Component | `LO-RFM-ARN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSSLSORDREJECTION')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `RequirementDocumentNumber` | `CHAR(10)` | Sales Document |
| `RequirementDocumentItem` | `NUMC(6)` | Sales Document Item |
| `SupProtTimeBucketUUID` | `RAW(16)` |  |
| `RequestedDate` | `DATS(8)` | Material Staging/Availability Date |
| `ProductAvailabilityDate` | `DATS(8)` | Material Staging/Availability Date |
| `RequirementType` | `CHAR(2)` |  |
| `RequestedDeliveryDate` | `DATS(8)` | Requested Delivery Date |
| `RequestedRqmtQtyInBaseUnit` | `QUAN(17)` |  |
| `BaseUnit` | `UNIT(3)` | Base Unit of Measure |
| `Product` | `CHAR(40)` | Material Number |
| `ProductGroup` | `CHAR(9)` | Material Group |
| `ProductType` | `CHAR(4)` | Material Type |
| `RequirementSegment` | `CHAR(40)` | Requirement Segment |
| `CrossPlantConfigurableProduct` | `CHAR(40)` | Cross-Plant Configurable Material |
| `Plant` | `CHAR(4)` | Plant |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `Division` | `CHAR(2)` | Division for Intercompany Billing |
| `SalesDistrict` | `CHAR(6)` | Sales District |
| `SalesOffice` | `CHAR(4)` | Sales Office |
| `SalesGroup` | `CHAR(3)` | Sales Group |
| `SoldToParty` | `CHAR(10)` | Sold-to Party |
| `CompanyCode` | `CHAR(4)` | Company Code to Be Billed |
| `DisplayCurrency` | `CUKY(5)` | Display Currency |
| `FashionCancelDate` | `DATS(8)` | Cancellation Date |
| `ProductSeasonYear` | `CHAR(4)` | Season Year |
| `ProductSeason` | `CHAR(10)` | Season |
| `ProductCollection` | `CHAR(10)` | Fashion Collection |
| `ProductTheme` | `CHAR(10)` | Fashion Theme |
| `ProductCharacteristic1` | `CHAR(18)` | Characteristic Value 1 |
| `ProductCharacteristic2` | `CHAR(18)` | Characteristic Value 2 |
| `ProductCharacteristic3` | `CHAR(18)` | Characteristic Value 3 |
| `ConfirmedRqmtQtyInBaseUnit` | `QUAN(15)` | Quantity field, 15 characters |
| `AssignedQuantityInBaseUnit` | `QUAN(15)` | Quantity field, 15 characters |
| `DeliveredQuantityInBaseUnit` | `QUAN(18)` |  |
| `OpenDemandQuantity` | `QUAN(21)` |  |
| `NormalAssignedQuantityInBsUnt` | `QUAN(15)` | Quantity field, 15 characters |
| `PreviewAssignedQuantityInBsUnt` | `DEC(12)` |  |
| `SupAssgmtAggrgQtyUnit` | `UNIT(3)` | Base Unit of Measure |
| `SupplyProtectionName` | `CHAR(60)` | Name |
| `PlantCountry` | `CHAR(3)` | Country/Region Key |
| `PlantRegion` | `CHAR(3)` | Region (State, Province, County) |
| `Country` | `CHAR(3)` | Country/Region Key |
| `Region` | `CHAR(3)` | Region (State, Province, County) |
| `ShipToParty` | `CHAR(10)` |  |
| `ShipToCountry` | `CHAR(3)` | Country/Region Key |
| `CustomerRegion` | `CHAR(3)` | Region (State, Province, County) |
| `SoldToPartyCountry` | `CHAR(3)` | Country/Region Key |
| `SoldToPartyRegion` | `CHAR(3)` | Region (State, Province, County) |
| `SalesDocumentRjcnReason` | `CHAR(2)` | Reason for Rejection of Sales Documents |
| `TotActualAmtInDisplayCurrency` | `CURR(19)` | Net Value in Display Currency |
| `NmbrOfItemsInOrder` | `INT4(10)` | Item Issues in Order |
| `ARunReqdRqmtQtyFlfmtPercent` | `DEC(13)` | Ratio of Unconfirmed Sales Order Items as Requested |
| `ARunConfdRqmtQtyFlfmtPercent` | `DEC(13)` | Ratio of Unconfirmed Sales Order Items as Requested |
| `ARunConfdAsReqdPercent` | `DEC(13)` | Ratio of Unconfirmed Sales Order Items as Requested |
| `ARunDeliveredQtyFlfmtPercent` | `DEC(13)` | Ratio of Unconfirmed Sales Order Items as Requested |
| `ARunDeliveredAsConfdPercent` | `DEC(13)` | Ratio of Unconfirmed Sales Order Items as Requested |
| `ARunOpenDemandQtyFlfmtPercent` | `DEC(13)` | Ratio of Unconfirmed Sales Order Items as Requested |
