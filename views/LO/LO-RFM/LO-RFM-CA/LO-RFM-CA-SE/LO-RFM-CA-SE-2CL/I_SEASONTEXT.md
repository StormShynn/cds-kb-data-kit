---
name: I_SEASONTEXT
description: Season - Text
app_component: LO-RFM-CA-SE-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEASONTEXT')/$value
semantic_en: Season - Text
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
# I_SEASONTEXT

**Season - Text**

| Property | Value |
|---|---|
| App Component | `LO-RFM-CA-SE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEASONTEXT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `SeasonInternalIdentifier` | `RAW(16)` | Season Internal Unique Identifier |
| `Language` | `LANG(1)` | Language Key |
| `ProductSeasonText` | `CHAR(20)` | Name of Season, Collection, or Theme |
| `LongText` | `CHAR(132)` | Text Line |
| `CreatedByUser` | `CHAR(12)` | User Who Created the Object |
| `CreationDate` | `DATS(8)` | Date on Which the Object Was Created |
| `CreationTime` | `TIMS(6)` | Time at Which the Object Was Created |
| `LastChangedByUser` | `CHAR(12)` | Last User to Change the Object |
| `LastChangeDate` | `DATS(8)` | Date on Which the Object Was Last Changed |
| `LastChangeTime` | `TIMS(6)` | Time at Which the Object Was Last Changed |
