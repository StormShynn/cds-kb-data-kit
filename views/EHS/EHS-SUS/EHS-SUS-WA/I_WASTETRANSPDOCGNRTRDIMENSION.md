---
name: I_WASTETRANSPDOCGNRTRDIMENSION
description: Waste Analytics Transportation Document Generator Dimension
app_component: EHS-SUS-WA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTETRANSPDOCGNRTRDIMENSION')/$value
semantic_en: Waste Analytics Transportation Document Generator Dimension
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
# I_WASTETRANSPDOCGNRTRDIMENSION

**Waste Analytics Transportation Document Generator Dimension**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-WA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTETRANSPDOCGNRTRDIMENSION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EnvrmtWasteGnrtrID` |  | |  |  | `CHAR(20)` | Waste Generator ID |
| `EnvrmtWasteGnrtrUUID` |  | |  |  | `RAW(16)` | Location |
| `EnvrmtWasteGnrtrName` |  | |  |  | `CHAR(60)` |  |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region |
| `EHSLocationType` |  | |  |  | `CHAR(21)` | Location Type |
| `EHSLocationStatus` |  | |  |  | `CHAR(2)` | Location Status |
| `EHSLocationAuthorizationGroup` |  | |  |  | `CHAR(21)` | Location Authorization Group |
| `Plant` |  | |  |  | `CHAR(4)` | Plant ID |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
