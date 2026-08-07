---
name: I_CNSLDTNSEGMENTHIERARCHYVH
description: Consolidation Segment Hierarchy
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNSEGMENTHIERARCHYVH')/$value
semantic_en: Consolidation Segment Hierarchy
tags:
  - FIN
  - bo:salesorder
  - component:FIN-CS-MD-2CL
  - FIN-CS
  - FIN-CS-MD
  - FIN-CS-MD-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_CNSLDTNSEGMENTHIERARCHYVH

**Consolidation Segment Hierarchy**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNSEGMENTHIERARCHYVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationSegmentHierarchy` |  | |  |  | `CHAR(40)` | Consolidation Segment Hierarchy |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Validity End Date |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Validity Start Date |
| `ConsolidationSegmentHierText` |  | |  |  | `CHAR(50)` | Consolidation Hierarchy Description |
