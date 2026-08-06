---
name: I_JOINTVENTURE
description: Master Data for Joint Venture
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOINTVENTURE')/$value
semantic_en: Master Data for Joint Venture
tags:
  - IS
  - bo:businesspartner
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - master-data
  - metadata-only
---
# I_JOINTVENTURE

**Master Data for Joint Venture**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOINTVENTURE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CompanyCode` | `CHAR(4)` | Company Code |
| `JointVenture` | `CHAR(6)` | Joint Venture |
| `JointVentureType` | `CHAR(1)` | Venture Type |
| `Operator` | `CHAR(10)` | Operator for Non-Operated Venture |
| `TaxCode` | `CHAR(2)` | Tax on Sales/Purchases Code |
| `JointVentureClass` | `CHAR(2)` | Venture Class |
| `JntVentureOperatingAgmt` | `CHAR(6)` | Joint Operating Agreement |
