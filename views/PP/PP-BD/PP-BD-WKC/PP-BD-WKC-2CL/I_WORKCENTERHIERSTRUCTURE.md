---
name: I_WORKCENTERHIERSTRUCTURE
description: Work Center Hierarchy Structure
app_component: PP-BD-WKC-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERHIERSTRUCTURE')/$value
semantic_en: Work Center Hierarchy Structure
tags:
  - PP
  - component:PP-BD-WKC-2CL
  - interface-view
  - lob:manufacturing
  - PP-BD
  - PP-BD-WKC
  - PP-BD-WKC-2CL
  - metadata-only
---
# I_WORKCENTERHIERSTRUCTURE

**Work Center Hierarchy Structure**

| Property | Value |
|---|---|
| App Component | `PP-BD-WKC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERHIERSTRUCTURE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WrkCtrHierParentType` |  | |  |  | `CHAR(2)` | Object types of the CIM resource |
| `WrkCtrHierParentID` |  | |  |  | `NUMC(8)` | Object ID of the resource |
| `WrkCtrHierChildType` |  | |  |  | `CHAR(2)` | Object types of the CIM resource |
| `WrkCtrHierChildID` |  | |  |  | `NUMC(8)` | Object ID of the resource |
| `WrkCtrHierUpObjType` |  | |  |  | `CHAR(2)` | Type of resource which is superior in the hierarchy |
| `WrkCtrHierUpObjID` |  | |  |  | `NUMC(8)` | ID of superior object in the hierarchy |
