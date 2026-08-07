---
name: C_ARUNANLYTSSUPDMNDOVWQRY
description: Overview of Supply and Demand Query
app_component: LO-RFM-ARN
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSSUPDMNDOVWQRY')/$value
semantic_en: Overview of Supply and Demand Query
tags:
  - LO
  - component:LO-RFM-ARN
  - consumption-view
  - LO-RFM
  - LO-RFM-ARN
  - lob:logistics general
  - metadata-only
---
# C_ARUNANLYTSSUPDMNDOVWQRY

**Overview of Supply and Demand Query**

| Property | Value |
|---|---|
| App Component | `LO-RFM-ARN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSSUPDMNDOVWQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RequirementDocumentNumber` |  | |  |  | `CHAR(10)` | Sales Document |
| `RequirementDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `SupProtTimeBucketUUID` |  | |  |  | `RAW(16)` |  |
| `ProductAvailabilityDate` |  | |  |  | `DATS(8)` | Product Availability Date |
| `RequirementType` |  | |  |  | `CHAR(2)` |  |
| `SupplyNumber` |  | |  |  | `CHAR(12)` |  |
| `SupplyItem` |  | |  |  | `CHAR(5)` |  |
| `SupplyScheduleLine` |  | |  |  | `CHAR(4)` |  |
| `AssignedSupplyType` |  | |  |  | `CHAR(1)` |  |
| `Product` |  | |  |  | `CHAR(40)` | Material Number |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `RequestedDeliveryDate` |  | |  |  | `DATS(8)` | Schedule Line Date |
| `SupAssgmtSource` |  | |  |  | `CHAR(1)` |  |
| `RequestedRqmtQtyInBaseUnit` |  | |  |  | `QUAN(17)` |  |
| `ConfirmedRqmtQtyInBaseUnit` |  | |  |  | `QUAN(15)` |  |
| `DeliveredQuantityInBaseUnit` |  | |  |  | `QUAN(18)` |  |
| `OpenDemandQuantity` |  | |  |  | `QUAN(21)` |  |
| `AssignedQuantityInBaseUnit` |  | |  |  | `QUAN(13)` |  |
| `NormalAssignedQuantityInBsUnt` |  | |  |  | `QUAN(13)` |  |
| `PreviewAssignedQuantityInBsUnt` |  | |  |  | `DEC(12)` |  |
| `ARunTmpAssignedQuantityInBsUnt` |  | |  |  | `DEC(12)` |  |
| `OpenSupplyQuantity` |  | |  |  | `QUAN(25)` |  |
| `AssignedSupplyQtyInBaseUnit` |  | |  |  | `QUAN(25)` |  |
| `NormalSupplyQtyInBaseUnit` |  | |  |  | `QUAN(25)` |  |
| `PreviewSupplyQtyInBaseUnit` |  | |  |  | `QUAN(25)` |  |
| `ARunTmpAssgdSupQtyInBaseUnit` |  | |  |  | `QUAN(25)` |  |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarMonthName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `CalendarWeek` |  | |  |  | `CHAR(63)` |  |
| `CalendarDay` |  | |  |  | `NUMC(2)` | Calendar Day |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `ProductType` |  | |  |  | `CHAR(4)` | Material Type |
| `CrossPlantConfigurableProduct` |  | |  |  | `CHAR(40)` | Cross-Plant Configurable Material |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code to Be Billed |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Customer Number |
| `SoldToPartyCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `SoldToPartyRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Customer Number |
| `ShipToCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `CustomerRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `PlantCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `NetPriceAmount` |  | |  |  | `CURR(11)` | Net Price |
| `DocumentCurrency` |  | |  |  | `CUKY(5)` | SD Document Currency |
