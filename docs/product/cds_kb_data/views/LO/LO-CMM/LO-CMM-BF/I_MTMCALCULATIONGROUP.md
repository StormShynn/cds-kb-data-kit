---
name: I_MTMCALCULATIONGROUP
description: "Mark To Market Calculation Group"
app_component: LO-CMM-BF
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MTMCALCULATIONGROUP')/$value
semantic_en: "Mark To Market Calculation Group"
tags:
  - LO
  - component:LO-CMM-BF
  - interface-view
  - LO-CMM
  - LO-CMM-BF
  - lob:logistics general
  - lob:sourcing & procurement
  - metadata-only
---
# I_MTMCALCULATIONGROUP

**Mark To Market Calculation Group**

| Property | Value |
|---|---|
| App Component | `LO-CMM-BF` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MTMCALCULATIONGROUP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MTMCalculationGroup` |  | |  |  | `CHAR(1)` | MtM Calculation Group |
| `ConditionApplication` |  | |  |  | `CHAR(2)` | Application |
| `PricingProcedure` |  | |  |  | `CHAR(6)` | Procedure (Pricing, Output Control, Acct. Det., Costing,...) |
| `ConditionType` |  | |  |  | `CHAR(4)` | Leading Condition within a calculation group |
