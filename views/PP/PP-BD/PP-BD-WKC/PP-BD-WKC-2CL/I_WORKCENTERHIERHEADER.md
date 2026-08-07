---
name: I_WORKCENTERHIERHEADER
description: Work Center Hierarchy Header
app_component: PP-BD-WKC-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERHIERHEADER')/$value
semantic_en: Work Center Hierarchy Header
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
# I_WORKCENTERHIERHEADER

**Work Center Hierarchy Header**

| Property | Value |
|---|---|
| App Component | `PP-BD-WKC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERHIERHEADER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WrkCtrHierObjType` |  | |  |  | `CHAR(2)` | Object types of the CIM resource |
| `WrkCtrHierObjID` |  | |  |  | `NUMC(8)` | Object ID of the resource |
| `WrkCtrHierName` |  | |  |  | `CHAR(10)` | Name of Hierarchy |
| `WrkCtrHierPlant` |  | |  |  | `CHAR(4)` | Plant |
| `WorkCenterGroupType` |  | |  |  | `CHAR(10)` | Work Center Group Type |
| `IsDeleted` |  | |  |  | `CHAR(1)` | Checkbox |
| `ShiftReportType` |  | |  |  | `CHAR(10)` | Shift Report Type |
| `ShiftNoteType` |  | |  |  | `CHAR(2)` | Shift Note Type |
| `CreationDate` |  | |  |  | `DATS(8)` | Date Record Created On |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | User Who Created Record |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
