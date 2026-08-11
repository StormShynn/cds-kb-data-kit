---
name: I_GLACCOUNTHIERNODEBYSEMTAG
description: "G/L Account HierNode By Semantic Tag"
app_component: FI-FIO-GL-HIE-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCOUNTHIERNODEBYSEMTAG')/$value
semantic_en: "G/L Account HierNode By Semantic Tag"
tags:
  - FI
  - account
  - component:FI-FIO-GL-HIE-2CL
  - FI-FIO
  - FI-FIO-GL
  - FI-FIO-GL-HIE
  - FI-FIO-GL-HIE-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_GLACCOUNTHIERNODEBYSEMTAG

**G/L Account HierNode By Semantic Tag**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-HIE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCOUNTHIERNODEBYSEMTAG')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GLAccountHierarchy` |  | |  |  | `CHAR(42)` | Hierarchy ID |
| `HierarchyNode` |  | |  |  | `CHAR(50)` | Hierarchy node |
| `SemanticTag` |  | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `HierarchyNodeType` |  | |  |  | `CHAR(30)` | Field Name |
