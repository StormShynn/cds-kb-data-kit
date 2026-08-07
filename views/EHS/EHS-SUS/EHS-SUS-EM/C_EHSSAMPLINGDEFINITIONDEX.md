---
name: C_EHSSAMPLINGDEFINITIONDEX
description: EHS Sampling Definition
app_component: EHS-SUS-EM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSSAMPLINGDEFINITIONDEX')/$value
semantic_en: EHS Sampling Definition
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-EM
  - consumption-view
  - EHS-SUS
  - EHS-SUS-EM
  - metadata-only
---
# C_EHSSAMPLINGDEFINITIONDEX

**EHS Sampling Definition**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-EM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EHSSAMPLINGDEFINITIONDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SamplingDefinitionUUID` |  | |  |  | `RAW(16)` | NodeID |
| `SamplingDefinitionName` |  | |  |  | `CHAR(132)` | Sampling Definition Name |
| `DataUsagePeriodicity` |  | |  |  | `CHAR(3)` |  |
| `SamplingDefMigrationSource` |  | |  |  | `CHAR(60)` | Migration Source |
| `EHSSubjectType` |  | |  |  | `CHAR(2)` | Subject Type |
| `EHSSubjectUUID` |  | |  |  | `RAW(16)` | Reference to Subject Type BO Root Node ID |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
