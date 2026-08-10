---
name: I_ENVWSTTRANSPDOCWASTELOCATION
description: "Waste Transportation Documents Location"
app_component: EHS-SUS-WA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENVWSTTRANSPDOCWASTELOCATION')/$value
semantic_en: "Waste Transportation Documents Location"
tags:
  - EHS
  - bo:purchaseorder
  - component:EHS-SUS-WA
  - document
  - EHS-SUS
  - EHS-SUS-WA
  - interface-view
  - metadata-only
---
# I_ENVWSTTRANSPDOCWASTELOCATION

**Waste Transportation Documents Location**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-WA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENVWSTTRANSPDOCWASTELOCATION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EnvrmtWasteGnrtrUUID` |  | |  |  | `RAW(16)` | Location |
| `EHSLocationID` |  | |  |  | `CHAR(20)` | Location ID |
| `EHSLocationPhone` |  | |  |  | `CHAR(30)` | Telephone Number |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region |
| `Region` |  | |  |  | `CHAR(3)` | Region |
| `CityName` |  | |  |  | `CHAR(40)` | City |
| `StreetName` |  | |  |  | `CHAR(60)` | Street Address |
| `HouseNumber` |  | |  |  | `CHAR(10)` | House Number |
| `PostalCode` |  | |  |  | `CHAR(10)` | City Postal Code |
| `EHSLocationAuthorizationGroup` |  | |  |  | `CHAR(21)` | Location Authorization Group |
| `Plant` |  | |  |  | `CHAR(4)` | Plant ID |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `EHSLocationType` |  | |  |  | `CHAR(21)` | Location Type |
| `EHSLocationStatus` |  | |  |  | `CHAR(2)` | Location Status |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `EHSLocationIsAssigned` |  | |  |  | `INT1(3)` |  |
