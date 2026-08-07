---
name: I_PRACOSTCENTER
description: Production Revenue Accounting Cost Center
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRACOSTCENTER')/$value
semantic_en: Production Revenue Accounting Cost Center
tags:
  - IS
  - account
  - bo:material
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - product
  - metadata-only
---
# I_PRACOSTCENTER

**Production Revenue Accounting Cost Center**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRACOSTCENTER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid To Date |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `CostCtrResponsiblePersonName` |  | |  |  | `CHAR(20)` | Person Responsible |
| `CostCtrResponsibleUser` |  | |  |  | `CHAR(12)` | User Responsible |
| `CostCenterCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `Department` |  | |  |  | `CHAR(12)` | Department |
| `CostingSheet` |  | |  |  | `CHAR(6)` | Costing Sheet |
