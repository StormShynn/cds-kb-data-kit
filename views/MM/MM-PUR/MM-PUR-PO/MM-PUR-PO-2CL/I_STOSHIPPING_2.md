---
name: I_STOSHIPPING_2
description: "Shipping Data for Stock Transport Order"
app_component: MM-PUR-PO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOSHIPPING_2')/$value
semantic_en: "Shipping Data for Stock Transport Order"
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
# I_STOSHIPPING_2

**Shipping Data for Stock Transport Order**

| Property | Value |
|---|---|
| App Component | `MM-PUR-PO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOSHIPPING_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `StockTransportOrder` |  | |  |  | `CHAR(10)` | Stock Transport Order |
| `StockTransportOrderItem` |  | |  |  | `NUMC(5)` | Stock Transport Order Item |
| `ShippingCondition` |  | |  |  | `CHAR(2)` | Shipping Conditions |
| `ShippingPoint` |  | |  |  | `CHAR(4)` | Shipping Point / Receiving Point |
| `Route` |  | |  |  | `CHAR(6)` | Route |
| `LoadingGroup` |  | |  |  | `CHAR(4)` | Loading Group |
| `TransportationGroup` |  | |  |  | `CHAR(4)` | Transportation Group |
| `DeliveryPriority` |  | |  |  | `NUMC(2)` | Delivery Priority |
| `UnloadingPointName` |  | |  |  | `CHAR(25)` | Unloading Point |
| `DeliveryCreationDate` |  | |  |  | `DATS(8)` | Delivery Creation Date |
| `PlannedDeliveryDuration` |  | |  |  | `DEC(3)` | Planned Delivery Time in Days |
| `ShippingType` |  | |  |  | `CHAR(2)` | Shipping Type |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Customer Number |
| `StockTransportOrderType` |  | |  |  | `CHAR(4)` | Purchasing Document Type |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
