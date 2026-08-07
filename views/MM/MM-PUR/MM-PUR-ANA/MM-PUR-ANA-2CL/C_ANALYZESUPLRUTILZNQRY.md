---
name: C_ANALYZESUPLRUTILZNQRY
description: Suppliers Utilization
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ANALYZESUPLRUTILZNQRY')/$value
semantic_en: Suppliers Utilization
tags:
  - MM
  - component:MM-PUR-ANA-2CL
  - consumption-view
  - lob:sourcing & procurement
  - MM-PUR
  - MM-PUR-ANA
  - MM-PUR-ANA-2CL
  - supplier
  - metadata-only
---
# C_ANALYZESUPLRUTILZNQRY

**Suppliers Utilization**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ANALYZESUPLRUTILZNQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `NmbrOfAvailableSuppliers` |  | |  |  | `INT8(19)` |  |
| `NumberOfContracts` |  | |  |  | `INT8(19)` |  |
| `NmbrOfSuplrWithOutContracts` |  | |  |  | `INT8(19)` |  |
