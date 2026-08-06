---
name: C_SITEDEX
description: Site Address Data
app_component: LO-RFM-MD-SIT-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SITEDEX')/$value
semantic_en: Site Address Data
tags:
  - LO
  - bo:plant
  - component:LO-RFM-MD-SIT-2CL
  - consumption-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-SIT
  - LO-RFM-MD-SIT-2CL
  - lob:logistics general
  - metadata-only
---
# C_SITEDEX

**Site Address Data**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-SIT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SITEDEX')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Site` | `CHAR(4)` | Plant |
| `SiteName` | `CHAR(30)` | Site Name |
| `AddressID` | `CHAR(10)` | Address |
| `StreetName` | `CHAR(60)` | Street |
| `HouseNumber` | `CHAR(10)` | House Number |
| `PostalCode` | `CHAR(10)` | City Postal Code |
| `CityName` | `CHAR(40)` | City |
| `Region` | `CHAR(3)` | Region (State, Province, County) |
| `County` | `CHAR(40)` | County |
| `Country` | `CHAR(3)` | Country/Region Key |
