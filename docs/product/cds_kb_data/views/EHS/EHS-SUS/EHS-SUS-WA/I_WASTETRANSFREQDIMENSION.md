---
name: I_WASTETRANSFREQDIMENSION
description: "Waste Transfer Request Dimension"
app_component: EHS-SUS-WA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTETRANSFREQDIMENSION')/$value
semantic_en: "Waste Transfer Request Dimension"
tags:
  - EHS
  - component:EHS-SUS-WA
  - EHS-SUS
  - EHS-SUS-WA
  - interface-view
  - metadata-only
---
# I_WASTETRANSFREQDIMENSION

**Waste Transfer Request Dimension**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-WA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTETRANSFREQDIMENSION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WasteTransferRequestNumber` |  | |  |  | `CHAR(20)` | Number of Waste Transfer Request |
| `WasteStreamPtOfGnrtnLocUUID` |  | |  |  | `RAW(16)` | Waste Stream - Point of Generation UUID |
| `EHSLocationID` |  | |  |  | `CHAR(20)` | Location ID |
| `WasteStreamPtOfGnrtnLocName` |  | |  |  | `CHAR(60)` | Location |
| `WasteTransfReqStatus` |  | |  |  | `CHAR(2)` | Status of Waste Transfer Request |
| `WasteTransfReqStatusName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `WasteStreamUUID` |  | |  |  | `RAW(16)` | Waste Stream UUID |
| `EnvrmtWasteGnrtrHasCurUsrAssgd` |  | |  |  | `INT1(3)` |  |
