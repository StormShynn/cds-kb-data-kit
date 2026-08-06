---
name: C_CNDNCONTRSETTLMTCALDP
description: Condition Contract Settlement Calendar
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNDNCONTRSETTLMTCALDP')/$value
semantic_en: Condition Contract Settlement Calendar
tags:
  - LO
  - component:LO-GT-CHB
  - consumption-view
  - contract
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
  - metadata-only
---
# C_CNDNCONTRSETTLMTCALDP

**Condition Contract Settlement Calendar**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNDNCONTRSETTLMTCALDP')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `ConditionContract` | `CHAR(10)` | Condition Contract |
| `SettlmtDate` | `DATS(8)` | Rebates: Settlement Date |
| `SettlmtDateSequentialID` | `NUMC(1)` | Settlement Date - Sequential ID |
| `SettlmtDateCat` | `CHAR(1)` | Rebates: Settlement Date Type |
| `RefSettlmtDate` | `DATS(8)` | Reference Date for a Delta Settlement |
| `RefSettlmtDateSequentialID` | `NUMC(1)` | Reference Settlement Date - Sequential ID |
| `SettlmtExecutionDate` | `DATS(8)` | Settlement Execution Date |
| `SettlementFixedValueDate` | `DATS(8)` | Fixed Value Date |
| `BusVolDateFrom` | `DATS(8)` | Business Volume Date From |
| `BusVolDateTo` | `DATS(8)` | Business Volume Date To |
| `SettlmtDateUsage` | `CHAR(1)` | Settlement Date Usage |
| `CndnContrCalItemUUID` | `RAW(16)` | Condition Contract: Settlement Calendar item GUID |
| `CndnContrSourceCalItemUUID` | `RAW(16)` | External Calendar GUID |
| `CndnContrSemanticCode` | `NUMC(4)` | Semantic Type |
