---
name: I_ENVRMTWASTETRANSPDOCMATLDIMN
description: "Waste Transport Document Material"
app_component: EHS-SUS-WA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENVRMTWASTETRANSPDOCMATLDIMN')/$value
semantic_en: "Waste Transport Document Material"
tags:
  - EHS
  - bo:purchaseorder
  - component:EHS-SUS-WA
  - document
  - EHS-SUS
  - EHS-SUS-WA
  - interface-view
  - material
  - metadata-only
---
# I_ENVRMTWASTETRANSPDOCMATLDIMN

**Waste Transport Document Material**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-WA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENVRMTWASTETRANSPDOCMATLDIMN')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EnvWstTranspDocMatlAssgdUUID` |  | |  |  | `RAW(16)` | Waste Transportation Document Material Assigned |
| `EnvrmtWasteTranspDocUUID` |  | |  |  | `RAW(16)` | Waste Transportation Document UUID |
| `EnvrmtWasteTranspDocStatus` |  | |  |  | `CHAR(3)` | Waste Transportation Document Status |
| `EnvrmtWasteTranspDocType` |  | |  |  | `CHAR(10)` | Waste Transportation Document Type ID |
| `EHSLocationAuthorizationGroup` |  | |  |  | `CHAR(21)` | Location Authorization Group |
| `Plant` |  | |  |  | `CHAR(4)` | Plant ID |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region |
| `Region` |  | |  |  | `CHAR(3)` | Region |
