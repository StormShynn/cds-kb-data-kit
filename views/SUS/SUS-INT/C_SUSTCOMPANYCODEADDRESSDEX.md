---
name: C_SUSTCOMPANYCODEADDRESSDEX
description: This CDS view is used by SAP Product Footprint Management for the data extraction of a relevant company code address. This view provides the necessary address detail data based on the company code.
app_component: SUS-INT
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUSTCOMPANYCODEADDRESSDEX')/$value
semantic_en: This CDS view is used by SAP Product Footprint Management for the data extraction of a relevant company code address. This view provides the necessary address detail data based on the company code.
tags:
  - SUS
  - bo:material
  - component:SUS-INT
  - consumption-view
  - product
  - SUS-INT
  - metadata-only
---
# C_SUSTCOMPANYCODEADDRESSDEX

**This CDS view is used by SAP Product Footprint Management for the data extraction of a relevant company code address. This view provides the necessary address detail data based on the company code.**

| Property | Value |
|---|---|
| App Component | `SUS-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUSTCOMPANYCODEADDRESSDEX')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CompanyCode` | `CHAR(4)` | Company Code |
| `AddressID` | `CHAR(10)` | Address |
| `Country` | `CHAR(3)` | Country/Region Key |
| `Region` | `CHAR(3)` | Region (State, Province, County) |
| `CityName` | `CHAR(40)` | City |
| `PostalCode` | `CHAR(10)` | City Postal Code |
| `StreetName` | `CHAR(60)` | Street |
| `HouseNumber` | `CHAR(10)` | House Number |
