---
name: I_BUDGETCOSTCENTER
description: Budget Carrying Cost Center
app_component: CO-OM-CCA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETCOSTCENTER')/$value
semantic_en: Budget Carrying Cost Center
tags:
  - CO
  - budget
  - CO-OM
  - CO-OM-CCA
  - CO-OM-CCA-2CL
  - component:CO-OM-CCA-2CL
  - interface-view
  - lob:controlling
  - lob:cross_application components
  - metadata-only
---
# I_BUDGETCOSTCENTER

**Budget Carrying Cost Center**

| Property | Value |
|---|---|
| App Component | `CO-OM-CCA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETCOSTCENTER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `BudgetCarryingCostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid To Date |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `CostCenterName` |  | |  |  | `CHAR(20)` | Cost Center Name |
