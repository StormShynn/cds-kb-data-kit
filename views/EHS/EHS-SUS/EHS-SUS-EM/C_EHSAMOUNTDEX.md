---
name: C_EHSAMOUNTDEX
description: EHS Data Amount
app_component: EHS-SUS-EM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSAMOUNTDEX')/$value
semantic_en: EHS Data Amount
tags:
  - EHS
  - component:EHS-SUS-EM
  - consumption-view
  - EHS-SUS
  - EHS-SUS-EM
  - metadata-only
---
# C_EHSAMOUNTDEX

**EHS Data Amount**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-EM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSAMOUNTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSAmountUUID` |  | |  |  | `RAW(16)` | NodeID |
| `EHSAmountUTCDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `EHSAmountValue` |  | |  |  | `FLTP(16)` | Amount Value |
| `UnitOfMeasure` |  | |  |  | `UNIT(3)` | Unit of measure |
| `EHSAmountHasWarning` |  | |  |  | `CHAR(1)` | Warning |
| `EHSAmountIsFaulty` |  | |  |  | `CHAR(1)` | Faulty Value |
| `EHSAmountSourceType` |  | |  |  | `CHAR(2)` | Data Source Type |
| `EHSAmountSourceUUID` |  | |  |  | `RAW(16)` | Reference to Source Type BO Root Node ID |
| `EHSAmountExternalSource` |  | |  |  | `CHAR(80)` | External Source |
| `EHSSubjectType` |  | |  |  | `CHAR(2)` | Subject Type |
| `EHSSubjectUUID` |  | |  |  | `RAW(16)` | Reference to Subject Type BO Root Node ID |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
