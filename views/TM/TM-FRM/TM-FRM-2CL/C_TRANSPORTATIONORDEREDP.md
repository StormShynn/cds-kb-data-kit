---
name: C_TRANSPORTATIONORDEREDP
description: Transportation Order Email Data Provider
app_component: TM-FRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TRANSPORTATIONORDEREDP')/$value
semantic_en: Transportation Order Email Data Provider
keywords:
  - Transportation Order Email Data Provider
tags:
  - TM
  - bo:purchaseorder
  - component:TM-FRM-2CL
  - consumption-view
  - order
  - TM-FRM
  - TM-FRM-2CL
  - metadata-only
---
# C_TRANSPORTATIONORDEREDP

**Transportation Order Email Data Provider**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TRANSPORTATIONORDEREDP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationOrderUUID` |  | |  |  | `RAW(16)` | Transportation Order UUID |
| `TransportationOrder` |  | |  |  | `CHAR(20)` | Transportation Order |
| `TransportationOrderCatDesc` |  | |  |  | `CHAR(60)` | Transportation Order Category Description |
| `TranspShipperFullName` |  | |  |  | `CHAR(80)` | Full Name of Person |
| `TranspShipperCityName` |  | |  |  | `CHAR(40)` | City |
| `TranspShipperPostalCode` |  | |  |  | `CHAR(10)` | City Postal Code |
| `TranspShipperStreetName` |  | |  |  | `CHAR(60)` | Street |
| `TranspShipperHouseNumber` |  | |  |  | `CHAR(10)` | House Number |
| `ShipperCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `ShipperRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `ShipperNormalizedAddressID` |  | |  |  | `CHAR(10)` | Address Number |
| `TransportationOrderCategory` |  | |  |  | `CHAR(2)` | Transportation Order Category |
| `TransportationOrderType` |  | |  |  | `CHAR(4)` | Transportation Order Type |
| `TranspPurgOrg` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `TranspPurgGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `TranspOrdResponsiblePerson` |  | |  |  | `CHAR(12)` | Person Responsible |
| `TransportationMode` |  | |  |  | `CHAR(2)` | Transportation Mode |
