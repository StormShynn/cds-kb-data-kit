---
name: I_ARUNANLYTSTOTSUPCUBE
description: Total Supply of all Doc Types - Cube
app_component: LO-RFM-ARN
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSTOTSUPCUBE')/$value
semantic_en: Total Supply of all Doc Types - Cube
tags:
  - LO
  - component:LO-RFM-ARN
  - interface-view
  - LO-RFM
  - LO-RFM-ARN
  - lob:logistics general
  - metadata-only
---
# I_ARUNANLYTSTOTSUPCUBE

**Total Supply of all Doc Types - Cube**

| Property | Value |
|---|---|
| App Component | `LO-RFM-ARN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSTOTSUPCUBE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Product` | `CHAR(40)` | Material for Stock Mamangement |
| `Plant` | `CHAR(4)` | Plant |
| `Batch` | `CHAR(10)` | Batch Number (Stock Identifier) |
| `StorageLocation` | `CHAR(4)` | Storage Location |
| `SupplyNumber` | `CHAR(12)` |  |
| `SupplyItem` | `CHAR(6)` |  |
| `SupplyScheduleLine` | `CHAR(4)` |  |
| `ProductAvailabilityDate` | `DATS(8)` |  |
| `AssignedSupplyType` | `CHAR(1)` |  |
| `RequestedDeliveryDate` | `DATS(8)` |  |
| `TotalQuantity` | `QUAN(25)` |  |
| `OpenSupplyQuantity` | `QUAN(25)` |  |
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
| `ProductGroup` | `CHAR(9)` | Material Group |
| `ProductType` | `CHAR(4)` | Material Type |
| `SupAssgmtSource` | `CHAR(1)` |  |
| `CrossPlantConfigurableProduct` | `CHAR(40)` | Cross-Plant Configurable Material |
| `PurchasingOrganization` | `CHAR(4)` | Purchasing Organization |
| `PurchasingGroup` | `CHAR(3)` | Purchasing Group |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `Division` | `CHAR(2)` | Division |
| `SalesDistrict` | `CHAR(6)` | Sales District |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `Customer` | `CHAR(10)` | Customer Number |
| `SupAssgmtAggrgQtyUnit` | `UNIT(3)` | Base Unit of Measure |
| `NetPriceAmount` | `CURR(11)` |  |
| `DocumentCurrency` | `CUKY(5)` | Currency Key |
| `StockSegment` | `CHAR(40)` | Stock Segment |
