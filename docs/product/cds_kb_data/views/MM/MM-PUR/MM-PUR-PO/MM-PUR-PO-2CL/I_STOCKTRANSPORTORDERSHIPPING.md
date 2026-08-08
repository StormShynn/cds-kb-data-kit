---
name: I_STOCKTRANSPORTORDERSHIPPING
description: "Stock Transport Order Shipping Data"
app_component: MM-PUR-PO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOCKTRANSPORTORDERSHIPPING')/$value
semantic_en: "Stock Transport Order Shipping Data"
tags:
  - MM
  - bo:inventory
  - component:MM-PUR-PO-2CL
  - interface-view
  - lob:sourcing & procurement
  - MM-PUR
  - MM-PUR-PO
  - MM-PUR-PO-2CL
  - order
  - stock
  - metadata-only
---
# I_STOCKTRANSPORTORDERSHIPPING

**Stock Transport Order Shipping Data**

| Property | Value |
|---|---|
| App Component | `MM-PUR-PO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOCKTRANSPORTORDERSHIPPING')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseOrder` |  | |  |  | `CHAR(10)` | Stock Transport Order |
| `PurchaseOrderItem` |  | |  |  | `NUMC(5)` | Stock Transport Order Item |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-to Party |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Customer Number |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `ShippingCondition` |  | |  |  | `CHAR(2)` | Shipping Conditions |
| `ShippingPoint` |  | |  |  | `CHAR(4)` | Shipping Point / Receiving Point |
| `Route` |  | |  |  | `CHAR(6)` | Route |
| `LoadingGroup` |  | |  |  | `CHAR(4)` | Loading Group |
| `TransportationGroup` |  | |  |  | `CHAR(4)` | Transportation Group |
| `DeliveryPriority` |  | |  |  | `NUMC(2)` | Delivery Priority |
| `ShippingType` |  | |  |  | `CHAR(2)` | Shipping Type |
| `UnloadingPointName` |  | |  |  | `CHAR(25)` | Unloading Point |
| `DeliveryCreationDate` |  | |  |  | `DATS(8)` | Delivery Creation Date |
| `PlannedDeliveryDuration` |  | |  |  | `DEC(3)` | Planned Delivery Time in Days |
