---
name: I_COMMITMENTITEMHIERARCHYNODE
description: "Commitment Item Hierarchy Node"
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMMITMENTITEMHIERARCHYNODE')/$value
semantic_en: "Commitment Item Hierarchy Node"
tags:
  - PSM
  - component:PSM
  - interface-view
  - metadata-only
---
# I_COMMITMENTITEMHIERARCHYNODE

**Commitment Item Hierarchy Node**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMMITMENTITEMHIERARCHYNODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `CommitmentItemHierarchy` |  | |  |  | `CHAR(40)` | Commitment Item Hierarchy |
| `HierarchyNode` |  | |  |  | `CHAR(50)` | Hierarchy node |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Commitment Item Validity End Date |
| `ParentNode` |  | |  |  | `CHAR(50)` | Hierarchy parent node |
| `HierarchyVersion` |  | |  |  | `NUMC(15)` | Hierarchy version |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Commitment Item Validity Start Date |
| `CommitmentItemFiscalYear` |  | |  |  | `NUMC(4)` |  |
| `CommitmentItem` |  | |  |  | `CHAR(24)` | Commitment Item |
| `SequenceNumber` |  | |  |  | `CHAR(56)` |  |
| `HierarchyNodeSequence` |  | |  |  | `NUMC(6)` | Hierarchy Sequence Number |
| `HierarchyNodeLevel` |  | |  |  | `NUMC(6)` | Hierarchy Level |
| `NodeType` |  | |  |  | `CHAR(1)` | Hierarchy node type |
