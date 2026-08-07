---
name: I_BUDGETINGTYPE
description: Budget Type
app_component: CO-OM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETINGTYPE')/$value
semantic_en: Budget Type
tags:
  - CO
  - budget
  - CO-OM
  - CO-OM-2CL
  - component:CO-OM-2CL
  - interface-view
  - lob:controlling
  - metadata-only
---
# I_BUDGETINGTYPE

**Budget Type**

| Property | Value |
|---|---|
| App Component | `CO-OM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETINGTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BudgetingType` |  | |  |  | `CHAR(8)` | Budget Type (Subcategory) |
| `PubSecBudgetReleaseStatus` |  | |  |  | `CHAR(1)` | Budget Release Status |
| `PubSecBudgetIsConsumable` |  | |  |  | `CHAR(1)` | Consumable Budget |
