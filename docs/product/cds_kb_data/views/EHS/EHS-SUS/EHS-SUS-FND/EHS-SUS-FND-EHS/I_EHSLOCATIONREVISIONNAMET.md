---
name: I_EHSLOCATIONREVISIONNAMET
description: "EHS Location Revision - Text"
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONREVISIONNAMET')/$value
semantic_en: "EHS Location Revision - Text"
tags:
  - EHS
  - component:EHS-SUS-FND-EHS
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - interface-view
  - metadata-only
---
# I_EHSLOCATIONREVISIONNAMET

**EHS Location Revision - Text**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONREVISIONNAMET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `RevisionEndDate` |  | |  |  | `DATS(8)` | Revision End Date |
| `Language` |  | |  |  | `LANG(1)` | Language |
| `EHSLocationRevisionNameUUID` |  | |  |  | `RAW(16)` | EHS Location - Revision Name UUID |
| `EHSLocationRevisionUUID` |  | |  |  | `RAW(16)` | EHS Location - Revision UUID |
| `RevisionStartDate` |  | |  |  | `DATS(8)` | Revision Start Date |
| `CreationDateTime` |  | |  |  | `DEC(21)` | Created On |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `LastChangeDateTime` |  | |  |  | `DEC(21)` | Last Changed On |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Last Change By |
| `EHSLocationName` |  | |  |  | `CHAR(60)` | Location |
| `EHSLocationType` |  | |  |  | `CHAR(21)` | Location Type |
| `EHSLocationStatus` |  | |  |  | `CHAR(2)` | Location Status |
| `EHSLocationAuthorizationGroup` |  | |  |  | `CHAR(21)` | Location Authorization Group |
| `Plant` |  | |  |  | `CHAR(4)` | Plant ID |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
