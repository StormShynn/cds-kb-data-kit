---
name: C_CHANGERECORDCHARCDEX
description: Change Record Characteristics Extraction
app_component: PLM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHANGERECORDCHARCDEX')/$value
semantic_en: Change Record Characteristics Extraction
tags:
  - PLM
  - component:PLM-CR-2CL
  - consumption-view
  - PLM-CR
  - PLM-CR-2CL
  - metadata-only
---
# C_CHANGERECORDCHARCDEX

**Change Record Characteristics Extraction**

| Property | Value |
|---|---|
| App Component | `PLM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHANGERECORDCHARCDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeRecordReferenceUUID` |  | |  |  | `RAW(16)` | DB Key |
| `ChangeRecordUUID` |  | |  |  | `RAW(16)` | DB Key |
| `Characteristic` |  | |  |  | `CHAR(30)` | Characteristic Name |
| `CharcDataType` |  | |  |  | `CHAR(4)` | Data type of characteristic |
| `CharcInternalID` |  | |  |  | `NUMC(10)` | Characteristic Internal ID |
