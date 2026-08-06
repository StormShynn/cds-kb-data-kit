---
name: I_WBSELEMENTBASICDATASTDVH
description: Basic data for Work Breakdown Structure Element
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WBSELEMENTBASICDATASTDVH')/$value
semantic_en: Basic data for Work Breakdown Structure Element
tags:
  - PPM
  - bo:wbs
  - component:PPM-SCL-STR
  - interface-view
  - PPM-SCL
  - PPM-SCL-STR
  - metadata-only
---
# I_WBSELEMENTBASICDATASTDVH

**Basic data for Work Breakdown Structure Element**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WBSELEMENTBASICDATASTDVH')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `WBSElementInternalID` | `NUMC(8)` | WBS Element |
| `WBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `WBSDescription` | `CHAR(40)` | Work Breakdown Structure Element Name |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `ResponsibleCostCenter` | `CHAR(10)` | Responsible Cost Center |
| `Plant` | `CHAR(4)` | Plant |
| `ProjectType` | `CHAR(2)` | Project Type |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `ProjectInternalID` | `NUMC(8)` | Project (internal) |
