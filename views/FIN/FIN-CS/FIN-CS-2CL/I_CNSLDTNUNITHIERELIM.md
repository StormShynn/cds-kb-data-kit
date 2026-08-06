---
name: I_CNSLDTNUNITHIERELIM
description: Hierarchy Elimination for Consldtn Unit
app_component: FIN-CS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNUNITHIERELIM')/$value
semantic_en: Hierarchy Elimination for Consldtn Unit
tags:
  - FIN
  - component:FIN-CS-2CL
  - FIN-CS
  - FIN-CS-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_CNSLDTNUNITHIERELIM

**Hierarchy Elimination for Consldtn Unit**

| Property | Value |
|---|---|
| App Component | `FIN-CS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNUNITHIERELIM')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `ConsolidationUnitHierarchy` | `CHAR(40)` | Consolidation Unit Hierarchy |
| `ValidityStartDate` | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` | `DATS(8)` | Valid To Date |
| `ConsolidationUnit` | `CHAR(18)` | Consolidation Unit |
| `PartnerConsolidationUnit` | `CHAR(18)` | Partner Unit |
| `ConsolidationUnitForElim` | `CHAR(25)` | Consolidation Elimination Member |
