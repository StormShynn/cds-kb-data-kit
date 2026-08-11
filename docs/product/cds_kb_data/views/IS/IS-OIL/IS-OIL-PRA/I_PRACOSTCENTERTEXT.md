---
name: I_PRACOSTCENTERTEXT
description: "PRA Cost Center - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRACOSTCENTERTEXT')/$value
semantic_en: "PRA Cost Center - Text"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - metadata-only
---
# I_PRACOSTCENTERTEXT

**PRA Cost Center - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRACOSTCENTERTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid To Date |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CostCenterName` |  | |  |  | `CHAR(20)` | Cost Center Name |
| `CostCenterDescription` |  | |  |  | `CHAR(40)` | Description of Cost Center |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
