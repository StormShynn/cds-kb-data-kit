---
name: I_ARUNANLYTSSLSORDREJECTION
description: Sales Order Rejection
app_component: LO-RFM-ARN
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSSLSORDREJECTION')/$value
semantic_en: Sales Order Rejection
tags:
  - LO
  - bo:salesorder
  - component:LO-RFM-ARN
  - interface-view
  - LO-RFM
  - LO-RFM-ARN
  - lob:logistics general
  - order
  - sales-order
  - metadata-only
---
# I_ARUNANLYTSSLSORDREJECTION

**Sales Order Rejection**

| Property | Value |
|---|---|
| App Component | `LO-RFM-ARN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSSLSORDREJECTION')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `RequirementDocumentNumber` | `CHAR(10)` | Sales Document |
| `RequirementDocumentItem` | `NUMC(6)` | Sales Document Item |
| `SupProtTimeBucketUUID` | `RAW(16)` |  |
| `RequestedDate` | `DATS(8)` | Material Staging/Availability Date |
| `ProductAvailabilityDate` | `DATS(8)` | Material Staging/Availability Date |
| `RequirementType` | `CHAR(2)` |  |
| `RequirementTypeName` | `CHAR(60)` | Explanatory Short Text |
| `ARunDocumentItemUniqueID` | `CHAR(17)` | Unique Identification for Supply Assignment Document Item |
| `RequestedDeliveryDate` | `DATS(8)` | Requested Delivery Date |
| `RequestedRqmtQtyInBaseUnit` | `QUAN(17)` |  |
| `BaseUnit` | `UNIT(3)` | Base Unit of Measure |
| `Product` | `CHAR(40)` | Material Number |
| `ProductGroup` | `CHAR(9)` | Material Group |
| `ProductType` | `CHAR(4)` | Material Type |
| `CrossPlantConfigurableProduct` | `CHAR(40)` | Cross-Plant Configurable Material |
| `Plant` | `CHAR(4)` | Plant |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `Division` | `CHAR(2)` | Division for Intercompany Billing |
| `SalesDistrict` | `CHAR(6)` | Sales District |
| `SalesOffice` | `CHAR(4)` | Sales Office |
| `SalesGroup` | `CHAR(3)` | Sales Group |
| `CompanyCode` | `CHAR(4)` | Company Code to Be Billed |
| `StorageLocation` | `CHAR(4)` | Storage Location |
| `RequirementSegment` | `CHAR(40)` | Requirement Segment |
| `DisplayCurrency` | `CUKY(5)` | Display Currency |
| `FashionCancelDate` | `DATS(8)` | Cancellation Date |
| `ProductSeasonYear` | `CHAR(4)` | Season Year |
| `ProductSeason` | `CHAR(10)` | Season |
| `ProductCollection` | `CHAR(10)` | Fashion Collection |
| `ProductTheme` | `CHAR(10)` | Fashion Theme |
| `ProductCharacteristic1` | `CHAR(18)` | Characteristic Value 1 |
| `ProductCharacteristic2` | `CHAR(18)` | Characteristic Value 2 |
| `ProductCharacteristic3` | `CHAR(18)` | Characteristic Value 3 |
| `SalesDocumentRjcnReason` | `CHAR(2)` | Reason for Rejection of Sales Documents |
| `ConfirmedRqmtQtyInBaseUnit` | `QUAN(15)` | Quantity field, 15 characters |
| `DeliveredQuantityInBaseUnit` | `QUAN(18)` |  |
| `OpenDemandQuantity` | `QUAN(21)` |  |
| `AssignedQuantityInBaseUnit` | `QUAN(15)` | Quantity field, 15 characters |
| `NormalAssignedQuantityInBsUnt` | `QUAN(15)` | Quantity field, 15 characters |
| `PreviewAssignedQuantityInBsUnt` | `DEC(12)` |  |
| `ARunTmpAssignedQuantityInBsUnt` | `DEC(12)` |  |
| `CalendarYear` | `NUMC(4)` | Calendar Year |
| `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `CalendarMonthName` | `CHAR(60)` | Explanatory Short Text |
| `CalendarWeek` | `CHAR(63)` |  |
| `CalendarDay` | `NUMC(2)` | Calendar Day |
| `PlantCountry` | `CHAR(3)` | Country/Region Key |
| `PlantRegion` | `CHAR(3)` | Region (State, Province, County) |
| `Country` | `CHAR(3)` | Country/Region Key |
| `Region` | `CHAR(3)` | Region (State, Province, County) |
| `SoldToParty` | `CHAR(10)` | Sold-to Party |
| `ShipToParty` | `CHAR(10)` |  |
| `SoldToPartyCountry` | `CHAR(3)` | Country/Region Key |
| `SoldToPartyRegion` | `CHAR(3)` | Region (State, Province, County) |
| `ShipToCountry` | `CHAR(3)` | Country/Region Key |
| `CustomerRegion` | `CHAR(3)` | Region (State, Province, County) |
| `SupplyProtectionName` | `CHAR(60)` | Name |
| `SupAssgmtAggrgQtyUnit` | `UNIT(3)` | Base Unit of Measure |
| `NmbrOfItemsInOrder` | `INT4(10)` | Item Issues in Order |
| `NetPriceAmount` | `CURR(11)` | Net Price |
| `DocumentCurrency` | `CUKY(5)` | SD Document Currency |
| `TotActualAmtInDisplayCurrency` | `CURR(19)` | Net Value in Display Currency |
