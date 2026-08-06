---
name: C_ARUNANLYTSSLSCONTRQRY
description: Contract Consumption Quantities
app_component: LO-RFM-ARN
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSSLSCONTRQRY')/$value
semantic_en: Contract Consumption Quantities
tags:
  - LO
  - component:LO-RFM-ARN
  - consumption-view
  - contract
  - LO-RFM
  - LO-RFM-ARN
  - lob:logistics general
  - metadata-only
---
# C_ARUNANLYTSSLSCONTRQRY

**Contract Consumption Quantities**

| Property | Value |
|---|---|
| App Component | `LO-RFM-ARN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSSLSCONTRQRY')/$value) |

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
| `ConfirmedRqmtQtyInBaseUnit` | `QUAN(15)` |  |
| `DeliveredQuantityInBaseUnit` | `QUAN(18)` |  |
| `SalesContractReleasedQuantity` | `QUAN(16)` |  |
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
| `MaterialType` | `CHAR(4)` | Material Type |
| `MaterialGroup` | `CHAR(9)` | Material Group |
| `CrossPlantConfigurableProduct` | `CHAR(40)` | Cross-Plant Configurable Material |
| `Plant` | `CHAR(4)` | Plant |
| `SalesOrganization` | `CHAR(4)` |  |
| `DistributionChannel` | `CHAR(2)` |  |
| `Division` | `CHAR(2)` |  |
| `SalesDistrict` | `CHAR(6)` |  |
| `ContractExpiryDateHorizon` | `NUMC(2)` |  |
| `SupAssgmtContrExpryRnge` | `CHAR(2)` | ARun Contract Expiry Range |
| `Customer` | `CHAR(10)` | Customer Number |
| `CompanyCode` | `CHAR(4)` |  |
| `StorageLocation` | `CHAR(4)` | Storage Location |
| `NetPriceAmount` | `CURR(11)` | Net Price |
| `DocumentCurrency` | `CUKY(5)` | SD Document Currency |
| `SupAssgmtReservedQtyInBaseUnit` | `DEC(13)` | Ratio of Unconfirmed Sales Order Items as Requested |
| `SalesContractReleasedPct` | `DEC(13)` | Ratio of Unconfirmed Sales Order Items as Requested |
| `SalesContractOpenReleasePct` | `DEC(13)` | Ratio of Unconfirmed Sales Order Items as Requested |
| `OpenDemandPercent` | `DEC(13)` | Ratio of Unconfirmed Sales Order Items as Requested |
| `FixedQuantityInBaseUnit` | `QUAN(13)` |  |
| `ReadyForReleaseQtyInBaseUnit` | `QUAN(13)` |  |
| `ARunPhysSupAssgdQtyInBsUnt` | `QUAN(13)` |  |
| `ProductSeasonYear` | `CHAR(4)` | Season Year |
| `ProductSeason` | `CHAR(10)` | Season |
| `ProductCollection` | `CHAR(10)` | Fashion Collection |
| `ProductTheme` | `CHAR(10)` | Fashion Theme |
| `ProductCharacteristic1` | `CHAR(18)` | Characteristic Value 1 |
| `ProductCharacteristic2` | `CHAR(18)` | Characteristic Value 2 |
| `ProductCharacteristic3` | `CHAR(18)` | Characteristic Value 3 |
