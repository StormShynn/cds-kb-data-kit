---
name: I_PRAOWNER
description: "PRA Owner"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAOWNER')/$value
semantic_en: "PRA Owner"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - metadata-only
---
# I_PRAOWNER

**PRA Owner**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAOWNER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PRAOwner` |  | |  |  | `CHAR(10)` | PRA owner |
| `PRAOwnerName` |  | |  |  | `CHAR(80)` | Name of Owner |
| `AffiliatedCompanyCode` |  | |  |  | `CHAR(4)` | Affiliated Company Code |
| `PRALegalForm` |  | |  |  | `CHAR(2)` | Entity Code |
| `AuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `SupplierAccountGroup` |  | |  |  | `CHAR(4)` | Supplier Account Group |
