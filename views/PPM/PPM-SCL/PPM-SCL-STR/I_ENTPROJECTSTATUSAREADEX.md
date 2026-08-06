---
name: I_ENTPROJECTSTATUSAREADEX
description: Data Extraction for Ent Proj Status Area
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTPROJECTSTATUSAREADEX')/$value
semantic_en: Data Extraction for Ent Proj Status Area
tags:
  - PPM
  - bo:project
  - component:PPM-SCL-STR
  - interface-view
  - PPM-SCL
  - PPM-SCL-STR
  - metadata-only
---
# I_ENTPROJECTSTATUSAREADEX

**Data Extraction for Ent Proj Status Area**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTPROJECTSTATUSAREADEX')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `StatusAreaUUID` | `RAW(16)` | Entity Guid |
| `ProjectUUID` | `RAW(16)` | Entity Guid |
| `StatusArea` | `CHAR(4)` | Status Area Category |
| `StatusAreaStatus` | `CHAR(2)` | Status Area Status |
| `StatusTrend` | `CHAR(2)` | Status Area Trend |
| `StatusAreaNote` | `STRI(5000)` | Comments |
| `CreatedByUser` | `CHAR(12)` | Name of Person Who Created Object |
| `CreationDateTime` | `DEC(15)` | Timestamp of Object Creation |
| `LastChangedByUser` | `CHAR(12)` | Name of Person Who Changed Object |
| `LastChangeDateTime` | `DEC(15)` | Timestamp of Last Object Change |
