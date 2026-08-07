---
name: C_EHSLOCATIONFORLOCIDQ
description: EHS Locations - Query
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCATIONFORLOCIDQ')/$value
semantic_en: EHS Locations - Query
tags:
  - EHS
  - component:EHS-SUS-FND-EHS
  - consumption-view
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - metadata-only
---
# C_EHSLOCATIONFORLOCIDQ

**EHS Locations - Query**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSLOCATIONFORLOCIDQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | EHS Location - Root UUID |
| `RevisionEndDate` |  | |  |  | `DATS(8)` | Revision End Date |
| `EHSLocationName` |  | |  |  | `CHAR(60)` | Location |
| `RevisionStartDate` |  | |  |  | `DATS(8)` | Revision Start Date |
| `EHSLocationType` |  | |  |  | `CHAR(21)` | Location Type |
| `EHSLocationTypeText` |  | |  |  | `CHAR(40)` | Location Type Name |
| `EHSLocationStatus` |  | |  |  | `CHAR(2)` | Location Status |
| `Plant` |  | |  |  | `CHAR(4)` | Plant ID |
| `PlantName` |  | |  |  | `CHAR(30)` | Plant Name |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region |
| `Region` |  | |  |  | `CHAR(3)` | Region |
| `EHSLocationID` |  | |  |  | `CHAR(20)` | Location ID |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `NumberOfLocations` |  | |  |  | `INT4(10)` | Number of Locations |
