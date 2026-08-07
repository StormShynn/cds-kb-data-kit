---
name: I_WASTEDISPOSALCHNLDIMENSION
description: "Waste Analytics Disposal Channel Dimension"
app_component: EHS-SUS-WA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTEDISPOSALCHNLDIMENSION')/$value
semantic_en: "Waste Analytics Disposal Channel Dimension"
tags:
  - EHS
  - bo:purchaseorder
  - component:EHS-SUS-WA
  - EHS-SUS
  - EHS-SUS-WA
  - interface-view
  - metadata-only
---
# I_WASTEDISPOSALCHNLDIMENSION

**Waste Analytics Disposal Channel Dimension**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-WA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTEDISPOSALCHNLDIMENSION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WasteDisposalChannelNumber` |  | |  |  | `CHAR(20)` | Disposal Channel Number |
| `EnvrmtWasteGnrtrUUID` |  | |  |  | `RAW(16)` | Waste Generator UUID |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region |
| `EHSLocationType` |  | |  |  | `CHAR(21)` | Location Type |
| `EHSLocationStatus` |  | |  |  | `CHAR(2)` | Location Status |
| `EHSLocationAuthorizationGroup` |  | |  |  | `CHAR(21)` | Location Authorization Group |
| `Plant` |  | |  |  | `CHAR(4)` | Plant ID |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
