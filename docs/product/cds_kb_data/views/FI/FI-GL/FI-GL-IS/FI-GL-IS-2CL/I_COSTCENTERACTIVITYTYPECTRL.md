---
name: I_COSTCENTERACTIVITYTYPECTRL
description: "Cost Center Activity Type Control Data"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTCENTERACTIVITYTYPECTRL')/$value
semantic_en: "Cost Center Activity Type Control Data"
tags:
  - FI
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_COSTCENTERACTIVITYTYPECTRL

**Cost Center Activity Type Control Data**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTCENTERACTIVITYTYPECTRL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `CostCollector` |  | |  |  | `CHAR(23)` | Cost Collector Key |
| `CostCtrActivityTypeCategory` |  | |  |  | `CHAR(1)` | Activity Type Category |
| `CostCtrActivityTypeQtyUnit` |  | |  |  | `UNIT(3)` | Activity Unit |
| `OutputQuantityFactor` |  | |  |  | `DEC(5)` | Output factor |
| `CostCtrActivityTypeOutpQtyUnit` |  | |  |  | `UNIT(3)` | Output Unit |
| `ControllingObject` |  | |  |  | `CHAR(22)` | Object Number |
| `ActlPostgCostCenterActyTypeCat` |  | |  |  | `CHAR(1)` | Variant Activity Type Category for Actual Postings |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
