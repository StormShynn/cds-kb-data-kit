---
name: I_EHSLTSTLOCHIERARCHYREVISION
description: Latest Location Hierarchy Revision
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLTSTLOCHIERARCHYREVISION')/$value
semantic_en: Latest Location Hierarchy Revision
tags:
  - EHS
  - component:EHS-SUS-FND-EHS
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - interface-view
  - metadata-only
---
# I_EHSLTSTLOCHIERARCHYREVISION

**Latest Location Hierarchy Revision**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLTSTLOCHIERARCHYREVISION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocHierarchyUUID` |  | |  |  | `RAW(16)` | Location Hierarchy Root Key |
| `RevisionEndDate` |  | |  |  | `DATS(8)` | Revision End Date |
| `RevisionStartDate` |  | |  |  | `DATS(8)` | Revision Start Date |
| `RevisionDescription` |  | |  |  | `CHAR(80)` | Revision Description |
| `EHSLocHierarchyRevisionUUID` |  | |  |  | `RAW(16)` | Location Hierarchy Revision Key |
