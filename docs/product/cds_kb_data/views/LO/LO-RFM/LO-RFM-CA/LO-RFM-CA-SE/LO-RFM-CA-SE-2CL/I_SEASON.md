---
name: I_SEASON
description: "Season"
app_component: LO-RFM-CA-SE-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEASON')/$value
semantic_en: "Season"
tags:
  - LO
  - bo:salesorder
  - component:LO-RFM-CA-SE-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-CA
  - LO-RFM-CA-SE
  - LO-RFM-CA-SE-2CL
  - lob:cross_application components
  - lob:logistics general
  - metadata-only
---
# I_SEASON

**Season**

| Property | Value |
|---|---|
| App Component | `LO-RFM-CA-SE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEASON')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SeasonInternalIdentifier` |  | |  |  | `RAW(16)` | Season Internal Unique Identifier |
| `ProductSeasonYear` |  | |  |  | `CHAR(4)` | Season Year |
| `ProductSeason` |  | |  |  | `CHAR(10)` | Season |
| `ProductCollection` |  | |  |  | `CHAR(10)` | Fashion Collection |
| `ProductTheme` |  | |  |  | `CHAR(10)` | Fashion Theme |
| `ProductSeasonValidFrom` |  | |  |  | `DATS(8)` | Valid From Date |
| `ProductSeasonValidTo` |  | |  |  | `DATS(8)` | Valid To Date |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | User Who Created the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Date on Which the Object Was Created |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time at Which the Object Was Created |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Last User to Change the Object |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Date on Which the Object Was Last Changed |
| `LastChangeTime` |  | |  |  | `TIMS(6)` | Time at Which the Object Was Last Changed |
| `SeasonLevel` |  | |  |  | `CHAR(1)` | Season Level |
| `SeasonYearParent` |  | |  |  | `CHAR(4)` | Season Year Parent |
| `SeasonParent` |  | |  |  | `CHAR(10)` | Season Parent |
| `CollectionParent` |  | |  |  | `CHAR(10)` | Collection Parent |
| `ThemeParent` |  | |  |  | `CHAR(10)` | Theme Parent |
