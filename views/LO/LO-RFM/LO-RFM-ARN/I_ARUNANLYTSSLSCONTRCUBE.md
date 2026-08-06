---
name: I_ARUNANLYTSSLSCONTRCUBE
description: Contract Details - Cube
app_component: LO-RFM-ARN
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSSLSCONTRCUBE')/$value
semantic_en: Contract Details - Cube
tags:
  - LO
  - component:LO-RFM-ARN
  - contract
  - interface-view
  - LO-RFM
  - LO-RFM-ARN
  - lob:logistics general
  - metadata-only
---
# I_ARUNANLYTSSLSCONTRCUBE

**Contract Details - Cube**

| Property | Value |
|---|---|
| App Component | `LO-RFM-ARN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSSLSCONTRCUBE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `RequirementDocumentNumber` | `CHAR(10)` | Sales Document |
| `RequirementDocumentItem` | `NUMC(6)` | Sales Document Item |
| `RequestedDate` | `DATS(8)` | Product Availability Date |
| `ProductAvailabilityDate` | `DATS(8)` | Product Availability Date |
| `RequirementType` | `CHAR(2)` |  |
| `RequestedDeliveryDate` | `DATS(8)` | Schedule Line Date |
| `RequestedRqmtQtyInBaseUnit` | `QUAN(17)` |  |
| `OrderQuantityInBaseUnit` | `QUAN(18)` |  |
| `ConfirmedRqmtQtyInBaseUnit` | `QUAN(15)` |  |
| `DeliveredQuantityInBaseUnit` | `QUAN(18)` |  |
| `OpenForAssignmentQtyInBsUnt` | `QUAN(18)` |  |
| `SalesContractReleasedQuantity` | `QUAN(16)` |  |
| `OpenReleasedQuantity` | `QUAN(17)` |  |
| `OpenDemandQuantity` | `QUAN(20)` |  |
| `AssignedQuantityInBaseUnit` | `QUAN(13)` |  |
| `NormalAssignedQuantityInBsUnt` | `QUAN(13)` |  |
| `PreviewAssignedQuantityInBsUnt` | `DEC(12)` |  |
| `ARunTmpAssignedQuantityInBsUnt` | `DEC(12)` |  |
| `BaseUnit` | `UNIT(3)` | Base Unit of Measure |
| `CalendarYear` | `NUMC(4)` | Calendar Year |
| `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `CalendarMonthName` | `CHAR(60)` | Short Text for Fixed Values |
| `CalendarWeek` | `CHAR(63)` |  |
| `CalendarDay` | `NUMC(2)` | Calendar Day |
| `Material` | `CHAR(40)` | Material Number |
| `MaterialGroup` | `CHAR(9)` | Material Group |
| `MaterialType` | `CHAR(4)` | Material Type |
| `CrossPlantConfigurableProduct` | `CHAR(40)` | Cross-Plant Configurable Material |
| `Plant` | `CHAR(4)` | Plant |
| `SalesOrganization` | `CHAR(4)` |  |
| `DistributionChannel` | `CHAR(2)` |  |
| `Division` | `CHAR(2)` |  |
| `SalesDistrict` | `CHAR(6)` |  |
| `Customer` | `CHAR(10)` | Customer Number |
| `CompanyCode` | `CHAR(4)` |  |
| `StorageLocation` | `CHAR(4)` | Storage Location |
| `SupAssgmtAggrgQtyUnit` | `UNIT(3)` | Base Unit of Measure |
| `NetPriceAmount` | `CURR(11)` | Net Price |
| `DocumentCurrency` | `CUKY(5)` | SD Document Currency |
| `AgrmtValdtyEndDate` | `DATS(8)` | Valid-To Date (Outline Agreements, Product Proposals) |
| `ContractExpiryDateHorizonDays` | `INT4(10)` |  |
| `ContractExpiryDateHorizon` | `NUMC(2)` |  |
| `SupAssgmtContrExpryRnge` | `CHAR(2)` | ARun Contract Expiry Range |
| `FixedQuantityInBaseUnit` | `QUAN(13)` |  |
| `SupAssgmtReservedQtyInBaseUnit` | `QUAN(13)` |  |
| `ReadyForReleaseQtyInBaseUnit` | `QUAN(13)` |  |
| `InboundAssignedQuantityInBsUnt` | `QUAN(13)` |  |
| `ARunPhysSupAssgdQtyInBsUnt` | `QUAN(13)` |  |
| `ProductSeasonYear` | `CHAR(4)` | Season Year |
| `ProductSeason` | `CHAR(10)` | Season |
| `ProductCollection` | `CHAR(10)` | Fashion Collection |
| `ProductTheme` | `CHAR(10)` | Fashion Theme |
| `ProductCharacteristic1` | `CHAR(18)` | Characteristic Value 1 |
| `ProductCharacteristic2` | `CHAR(18)` | Characteristic Value 2 |
| `ProductCharacteristic3` | `CHAR(18)` | Characteristic Value 3 |
