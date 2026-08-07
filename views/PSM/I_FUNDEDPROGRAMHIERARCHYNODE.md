---
name: I_FUNDEDPROGRAMHIERARCHYNODE
description: "Funded Program Hierarchy Node"
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDEDPROGRAMHIERARCHYNODE')/$value
semantic_en: "Funded Program Hierarchy Node"
tags:
  - PSM
  - component:PSM
  - interface-view
  - metadata-only
---
# I_FUNDEDPROGRAMHIERARCHYNODE

**Funded Program Hierarchy Node**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDEDPROGRAMHIERARCHYNODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `FundedProgramHierarchy` |  | |  |  | `CHAR(40)` | Funded Program Hierarchy |
| `HierarchyNode` |  | |  |  | `CHAR(50)` | Hierarchy node |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Funded Program Validity End Date |
| `ParentNode` |  | |  |  | `CHAR(50)` | Hierarchy parent node |
| `HierarchyVersion` |  | |  |  | `NUMC(15)` | Hierarchy version |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Funded Program Validity Start Date |
| `FundedProgram` |  | |  |  | `CHAR(24)` | Funded Program |
| `HierarchyNodeSequence` |  | |  |  | `NUMC(6)` | Hierarchy Sequence Number |
| `HierarchyNodeLevel` |  | |  |  | `NUMC(6)` | Hierarchy Level |
| `NodeType` |  | |  |  | `CHAR(1)` | Hierarchy node type |
