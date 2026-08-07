---
name: I_BUDGETGLACCTHIERGROUPT
description: Budget GL Account Hierarchy Group - Text
app_component: CO-OM-CCA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETGLACCTHIERGROUPT')/$value
semantic_en: Budget GL Account Hierarchy Group - Text
tags:
  - CO
  - account
  - budget
  - CO-OM
  - CO-OM-CCA
  - CO-OM-CCA-2CL
  - component:CO-OM-CCA-2CL
  - interface-view
  - lob:controlling
  - lob:cross_application components
  - metadata-only
---
# I_BUDGETGLACCTHIERGROUPT

**Budget GL Account Hierarchy Group - Text**

| Property | Value |
|---|---|
| App Component | `CO-OM-CCA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETGLACCTHIERGROUPT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GLAccountHierNodeSemanticKey` |  | |  |  | `CHAR(63)` | Budget G/L Account Hierarchy Semantic Key |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `GLAccountHierarchy` |  | |  |  | `CHAR(42)` | Hierarchy ID |
| `HierarchyNode` |  | |  |  | `CHAR(50)` | Hierarchy node |
| `HierarchyNodeText` |  | |  |  | `CHAR(50)` | Hierarchy node description |
