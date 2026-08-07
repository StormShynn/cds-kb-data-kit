---
name: C_ARUNANLYTSOPENDELIVQUERY
description: Open Deliveries
app_component: LO-RFM-ARN
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSOPENDELIVQUERY')/$value
semantic_en: Open Deliveries
tags:
  - LO
  - bo:salesorder
  - component:LO-RFM-ARN
  - consumption-view
  - LO-RFM
  - LO-RFM-ARN
  - lob:logistics general
  - metadata-only
---
# C_ARUNANLYTSOPENDELIVQUERY

**Open Deliveries**

| Property | Value |
|---|---|
| App Component | `LO-RFM-ARN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ARUNANLYTSOPENDELIVQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DeliveryDocument` |  | |  |  | `CHAR(10)` | Delivery |
| `DeliveryDocumentItem` |  | |  |  | `NUMC(6)` | Delivery Item |
| `RequirementType` |  | |  |  | `CHAR(2)` |  |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `ShippingPoint` |  | |  |  | `CHAR(4)` | Shipping Point / Receiving Point |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DeliveryDocumentType` |  | |  |  | `CHAR(4)` | Delivery Type |
| `HeaderBillingBlockReason` |  | |  |  | `CHAR(2)` | Billing Block in SD Document |
| `DeliveryBlockReason` |  | |  |  | `CHAR(2)` | Delivery Block (Document Header) |
| `DeliveryPriority` |  | |  |  | `NUMC(2)` | Delivery Priority |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-to Party |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `Product` |  | |  |  | `CHAR(40)` | Material Number |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `StockSegment` |  | |  |  | `CHAR(40)` | Stock Segment |
| `RequirementSegment` |  | |  |  | `CHAR(40)` | Requirement Segment |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `ProductAvailabilityDate` |  | |  |  | `DATS(8)` | Material Staging/Availability Date |
| `RequestedDeliveryDate` |  | |  |  | `DATS(8)` | Material Staging/Availability Date |
| `DeliveredQuantityInBaseUnit` |  | |  |  | `QUAN(15)` |  |
| `SupAssgmtAggrgQtyUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
