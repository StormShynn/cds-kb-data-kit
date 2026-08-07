---
name: C_ARUNANLYTSTOTDMNDQRY
description: Consumption View for Total Demand
app_component: LO-RFM-ARN
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSTOTDMNDQRY')/$value
semantic_en: Consumption View for Total Demand
tags:
  - LO
  - component:LO-RFM-ARN
  - consumption-view
  - LO-RFM
  - LO-RFM-ARN
  - lob:logistics general
  - metadata-only
---
# C_ARUNANLYTSTOTDMNDQRY

**Consumption View for Total Demand**

| Property | Value |
|---|---|
| App Component | `LO-RFM-ARN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSTOTDMNDQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RequirementDocumentNumber` |  | |  |  | `CHAR(10)` | Sales Document |
| `RequirementDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `RequestedDate` |  | |  |  | `DATS(8)` | Product Availability Date |
| `ProductAvailabilityDate` |  | |  |  | `DATS(8)` | Product Availability Date |
| `RequirementType` |  | |  |  | `CHAR(2)` |  |
| `RequestedDeliveryDate` |  | |  |  | `DATS(8)` | Schedule Line Date |
| `RequestedRqmtQtyInBaseUnit` |  | |  |  | `QUAN(17)` |  |
| `ConfirmedRqmtQtyInBaseUnit` |  | |  |  | `QUAN(15)` |  |
| `AssignedQuantityInBaseUnit` |  | |  |  | `QUAN(13)` |  |
| `SupAssgmtReservedQtyInBaseUnit` |  | |  |  | `QUAN(13)` |  |
| `FixedQuantityInBaseUnit` |  | |  |  | `QUAN(13)` |  |
| `OnHoldQuantityInBaseUnit` |  | |  |  | `QUAN(13)` |  |
| `SimulationRdyForRelQtyInBsUnt` |  | |  |  | `QUAN(13)` |  |
| `DeliveredQuantityInBaseUnit` |  | |  |  | `QUAN(18)` |  |
| `OpenDemandQuantity` |  | |  |  | `QUAN(21)` |  |
| `NormalAssignedQuantityInBsUnt` |  | |  |  | `QUAN(13)` |  |
| `PreviewAssignedQuantityInBsUnt` |  | |  |  | `DEC(12)` |  |
| `ARunPhysSupAssgdQtyInBsUnt` |  | |  |  | `QUAN(13)` |  |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `SupAssgmtAggrgQtyUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `Product` |  | |  |  | `CHAR(40)` | Material Number |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `ProductType` |  | |  |  | `CHAR(4)` | Material Type |
| `RequirementSegment` |  | |  |  | `CHAR(40)` | Requirement Segment |
| `SupplyProtectionName` |  | |  |  | `CHAR(60)` | Name |
| `CrossPlantConfigurableProduct` |  | |  |  | `CHAR(40)` | Cross-Plant Configurable Material |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `PlantCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `PlantRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Customer Number |
| `ShipToCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `CustomerRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Customer Number |
| `SoldToPartyCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `SoldToPartyRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code to Be Billed |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `TotActualAmtInDisplayCurrency` |  | |  |  | `CURR(19)` | Net Value in Display Currency |
| `ARunReqdRqmtQtyFlfmtPercent` |  | |  |  | `DEC(13)` | Ratio of Unconfirmed Sales Order Items as Requested |
| `ARunConfdRqmtQtyFlfmtPercent` |  | |  |  | `DEC(13)` | Ratio of Unconfirmed Sales Order Items as Requested |
| `ARunConfdAsReqdPercent` |  | |  |  | `DEC(13)` | Ratio of Unconfirmed Sales Order Items as Requested |
| `ARunDeliveredQtyFlfmtPercent` |  | |  |  | `DEC(13)` | Ratio of Unconfirmed Sales Order Items as Requested |
| `ARunDeliveredAsConfdPercent` |  | |  |  | `DEC(13)` | Ratio of Unconfirmed Sales Order Items as Requested |
| `ARunOpenDemandQtyFlfmtPercent` |  | |  |  | `DEC(13)` | Ratio of Unconfirmed Sales Order Items as Requested |
| `FashionCancelDate` |  | |  |  | `DATS(8)` | Cancellation Date |
| `ARunCancDteSupDlyTmeHrznCode` |  | |  |  | `CHAR(2)` |  |
| `ProductSeasonYear` |  | |  |  | `CHAR(4)` | Season Year |
| `ProductSeason` |  | |  |  | `CHAR(10)` | Season |
| `ProductCollection` |  | |  |  | `CHAR(10)` | Fashion Collection |
| `ProductTheme` |  | |  |  | `CHAR(10)` | Fashion Theme |
| `ProductCharacteristic1` |  | |  |  | `CHAR(18)` | Characteristic Value 1 |
| `ProductCharacteristic2` |  | |  |  | `CHAR(18)` | Characteristic Value 2 |
| `ProductCharacteristic3` |  | |  |  | `CHAR(18)` | Characteristic Value 3 |
