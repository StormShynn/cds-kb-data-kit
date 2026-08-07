---
name: I_CNSLDTNPRFTCTRHIERELIM
description: Hierarchy Elimination for Profit Center
app_component: FIN-CS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNPRFTCTRHIERELIM')/$value
semantic_en: Hierarchy Elimination for Profit Center
tags:
  - FIN
  - bo:companycode
  - component:FIN-CS-2CL
  - FIN-CS
  - FIN-CS-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_CNSLDTNPRFTCTRHIERELIM

**Hierarchy Elimination for Profit Center**

| Property | Value |
|---|---|
| App Component | `FIN-CS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNPRFTCTRHIERELIM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationPrftCtrHierarchy` |  | |  |  | `CHAR(42)` | Consolidation Profit Center Hierarchy |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid To Date |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `ConsolidationPrftCtrForElim` |  | |  |  | `CHAR(25)` | Consolidation Elimination Member |
