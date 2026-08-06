---
name: I_ARUNANLYTSSUPASSGMTCUBE
description: Assignment Results - Cube
app_component: LO-RFM-ARN
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSSUPASSGMTCUBE')/$value
semantic_en: Assignment Results - Cube
tags:
  - LO
  - component:LO-RFM-ARN
  - interface-view
  - LO-RFM
  - LO-RFM-ARN
  - lob:logistics general
  - metadata-only
---
# I_ARUNANLYTSSUPASSGMTCUBE

**Assignment Results - Cube**

| Property | Value |
|---|---|
| App Component | `LO-RFM-ARN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSSUPASSGMTCUBE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Plant` | `CHAR(4)` | Plant |
| `Material` | `CHAR(40)` | Material Number |
| `StorageLocation` | `CHAR(4)` | Storage Location |
| `Batch` | `CHAR(10)` | Batch Number |
| `RequirementType` | `CHAR(2)` | Requirement Type |
| `RequirementDocumentNumber` | `CHAR(10)` | Purchasing requirement document |
| `RequirementDocumentItem` | `CHAR(6)` |  |
| `SupProtTimeBucketUUID` | `RAW(16)` |  |
| `AssignedSupplyType` | `CHAR(1)` | ARun Stock Source |
| `SupplyNumber` | `CHAR(12)` |  |
| `SupplyItem` | `CHAR(6)` |  |
| `SupplyScheduleLine` | `CHAR(4)` |  |
| `RequestedDate` | `DATS(8)` | Requested date |
| `ProductAvailabilityDate` | `DATS(8)` | Material Staging/Availability Date |
| `SupplyDeliveryDate` | `DATS(8)` | Confirmed Delivery Date for Future Receipts |
| `RequestedDeliveryDate` | `DATS(8)` | Schedule Line Date |
| `ARunSupDlyHrznInWeeks` | `CHAR(2)` |  |
| `SupAssgmtSource` | `CHAR(1)` | ARun Stock Source |
| `CalendarYear` | `NUMC(4)` | Calendar Year |
| `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `CalendarMonthName` | `CHAR(60)` | Short Text for Fixed Values |
| `CalendarWeek` | `CHAR(63)` |  |
| `CalendarDay` | `NUMC(2)` | Calendar Day |
| `AssignedQuantityInBaseUnit` | `QUAN(13)` | Assigned Quantity by ARun |
| `NormalAssignedQuantityInBsUnt` | `QUAN(13)` | Assigned Quantity by ARun |
| `PreviewAssignedQuantityInBsUnt` | `DEC(12)` |  |
| `ARunTmpAssignedQuantityInBsUnt` | `DEC(12)` |  |
| `BaseUnit` | `UNIT(3)` | Base Unit of Measure |
| `MaterialGroup` | `CHAR(9)` | Material Group |
| `MaterialType` | `CHAR(4)` | Material Type |
| `CrossPlantConfigurableProduct` | `CHAR(40)` | Cross-Plant Configurable Material |
| `SupplyProtectionName` | `CHAR(60)` | Name |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `Division` | `CHAR(2)` | Division |
| `SalesDistrict` | `CHAR(6)` | Sales District |
| `Customer` | `CHAR(10)` | Customer Number |
| `CompanyCode` | `CHAR(4)` | Company Code to Be Billed |
| `SupAssgmtAggrgQtyUnit` | `UNIT(3)` | Base Unit of Measure |
| `NetPriceAmount` | `CURR(11)` | Net Price |
| `DocumentCurrency` | `CUKY(5)` | SD Document Currency |
| `RequirementSegment` | `CHAR(40)` | Requirement Segment |
