---
name: I_GLACCOUNTHIERARCHYSTDVH
description: General Ledger Account Hierarchy
app_component: FI-GL-GL-N-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCOUNTHIERARCHYSTDVH')/$value
semantic_en: General Ledger Account Hierarchy
tags:
  - FI
  - account
  - component:FI-GL-GL-N-2CL
  - FI-GL
  - FI-GL-GL
  - FI-GL-GL-N
  - FI-GL-GL-N-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_GLACCOUNTHIERARCHYSTDVH

**General Ledger Account Hierarchy**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-N-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCOUNTHIERARCHYSTDVH')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `GLAccountHierarchy` | `CHAR(42)` | G/L Account Hierarchy |
| `ValidityEndDate` | `DATS(8)` | Valid To Date |
| `ValidityStartDate` | `DATS(8)` | Valid-From Date |
