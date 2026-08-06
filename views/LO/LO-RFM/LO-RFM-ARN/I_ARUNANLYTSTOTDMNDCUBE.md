---
name: I_ARUNANLYTSTOTDMNDCUBE
description: Supply Assignment Total Demand - Cube
app_component: LO-RFM-ARN
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSTOTDMNDCUBE')/$value
semantic_en: Supply Assignment Total Demand - Cube
tags:
  - LO
  - component:LO-RFM-ARN
  - interface-view
  - LO-RFM
  - LO-RFM-ARN
  - lob:logistics general
  - metadata-only
---
# I_ARUNANLYTSTOTDMNDCUBE

**Supply Assignment Total Demand - Cube**

| Property | Value |
|---|---|
| App Component | `LO-RFM-ARN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSTOTDMNDCUBE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `RequirementDocumentNumber` | `CHAR(10)` | Sales Document |
| `RequirementDocumentItem` | `NUMC(6)` | Sales Document Item |
| `SupProtTimeBucketUUID` | `RAW(16)` |  |
| `RequestedDate` | `DATS(8)` | Product Availability Date |
| `ProductAvailabilityDate` | `DATS(8)` | Product Availability Date |
| `RequirementType` | `CHAR(2)` |  |
| `RequirementTypeName` | `CHAR(60)` | Short Text for Fixed Values |
| `ARunDocumentItemUniqueID` | `CHAR(17)` | Unique Identification for Supply Assignment Document Item |
| `RequestedDeliveryDate` | `DATS(8)` | Schedule Line Date |
| `RequestedRqmtQtyInBaseUnit` | `QUAN(17)` |  |
| `ConfirmedRqmtQtyInBaseUnit` | `QUAN(15)` |  |
| `DeliveredQuantityInBaseUnit` | `QUAN(18)` |  |
| `OpenDemandQuantity` | `QUAN(21)` |  |
| `AssignedQuantityInBaseUnit` | `QUAN(13)` |  |
| `NormalAssignedQuantityInBsUnt` | `QUAN(13)` |  |
| `PreviewAssignedQuantityInBsUnt` | `DEC(12)` |  |
| `ARunTmpAssignedQuantityInBsUnt` | `DEC(12)` |  |
| `ARunPhysSupAssgdQtyInBsUnt` | `QUAN(13)` |  |
| `SupAssgmtReservedQtyInBaseUnit` | `QUAN(13)` |  |
| `FixedQuantityInBaseUnit` | `QUAN(13)` |  |
| `OnHoldQuantityInBaseUnit` | `QUAN(13)` |  |
| `SimulationRdyForRelQtyInBsUnt` | `QUAN(13)` |  |
| `ARunCancDteSupDlyTmeHrznCode` | `CHAR(2)` |  |
| `BaseUnit` | `UNIT(3)` | Base Unit of Measure |
| `CalendarYear` | `NUMC(4)` | Calendar Year |
| `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `CalendarMonthName` | `CHAR(60)` | Short Text for Fixed Values |
| `CalendarWeek` | `CHAR(63)` |  |
| `CalendarDay` | `NUMC(2)` | Calendar Day |
| `Product` | `CHAR(40)` | Material Number |
| `ProductGroup` | `CHAR(9)` | Material Group |
| `ProductType` | `CHAR(4)` | Material Type |
| `CrossPlantConfigurableProduct` | `CHAR(40)` | Cross-Plant Configurable Material |
| `Plant` | `CHAR(4)` | Plant |
| `PlantCountry` | `CHAR(3)` | Country/Region Key |
| `PlantRegion` | `CHAR(3)` | Region (State, Province, County) |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `Country` | `CHAR(3)` | Country/Region Key |
| `Region` | `CHAR(3)` | Region (State, Province, County) |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `Division` | `CHAR(2)` | Division |
| `SalesDistrict` | `CHAR(6)` | Sales District |
| `SalesOffice` | `CHAR(4)` | Sales Office |
| `SalesGroup` | `CHAR(3)` | Sales Group |
| `SoldToParty` | `CHAR(10)` | Customer Number |
| `SoldToPartyCountry` | `CHAR(3)` | Country/Region Key |
| `SoldToPartyRegion` | `CHAR(3)` | Region (State, Province, County) |
| `ShipToParty` | `CHAR(10)` | Customer Number |
| `ShipToCountry` | `CHAR(3)` | Country/Region Key |
| `CustomerRegion` | `CHAR(3)` | Region (State, Province, County) |
| `CompanyCode` | `CHAR(4)` | Company Code to Be Billed |
| `StorageLocation` | `CHAR(4)` | Storage Location |
| `SupplyProtectionName` | `CHAR(60)` | Name |
| `SupAssgmtAggrgQtyUnit` | `UNIT(3)` | Base Unit of Measure |
| `NetPriceAmount` | `CURR(11)` | Net Price |
| `DocumentCurrency` | `CUKY(5)` | SD Document Currency |
| `RequirementSegment` | `CHAR(40)` | Requirement Segment |
| `DisplayCurrency` | `CUKY(5)` | Display Currency |
| `TotActualAmtInDisplayCurrency` | `CURR(19)` | Net Value in Display Currency |
| `FashionCancelDate` | `DATS(8)` | Cancellation Date |
| `ProductSeasonYear` | `CHAR(4)` | Season Year |
| `ProductSeason` | `CHAR(10)` | Season |
| `ProductCollection` | `CHAR(10)` | Fashion Collection |
| `ProductTheme` | `CHAR(10)` | Fashion Theme |
| `ProductCharacteristic1` | `CHAR(18)` | Characteristic Value 1 |
| `ProductCharacteristic2` | `CHAR(18)` | Characteristic Value 2 |
| `ProductCharacteristic3` | `CHAR(18)` | Characteristic Value 3 |
