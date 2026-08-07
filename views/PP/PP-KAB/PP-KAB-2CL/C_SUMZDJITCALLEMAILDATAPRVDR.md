---
name: C_SUMZDJITCALLEMAILDATAPRVDR
description: Summarized JIT Call Email Data Provider
app_component: PP-KAB-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUMZDJITCALLEMAILDATAPRVDR')/$value
semantic_en: Summarized JIT Call Email Data Provider
tags:
  - PP
  - component:PP-KAB-2CL
  - consumption-view
  - lob:manufacturing
  - PP-KAB
  - PP-KAB-2CL
  - metadata-only
---
# C_SUMZDJITCALLEMAILDATAPRVDR

**Summarized JIT Call Email Data Provider**

| Property | Value |
|---|---|
| App Component | `PP-KAB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUMZDJITCALLEMAILDATAPRVDR')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITCallNumber` |  | |  |  | `CHAR(10)` | JIT Call Number |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier's Account Number |
| `OutputPartnerForSumzdJITCall` |  | |  |  | `CHAR(10)` | Output Partner |
| `JITCallProfile` |  | |  |  | `CHAR(4)` | JIT Call Profile |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `PlantName` |  | |  |  | `CHAR(30)` | Plant Name |
