---
name: C_CHANGERECORDITEMEXTDEX
description: Data Extraction for Change Record Item
app_component: PLM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHANGERECORDITEMEXTDEX')/$value
semantic_en: Data Extraction for Change Record Item
tags:
  - PLM
  - component:PLM-CR-2CL
  - consumption-view
  - PLM-CR
  - PLM-CR-2CL
  - metadata-only
---
# C_CHANGERECORDITEMEXTDEX

**Data Extraction for Change Record Item**

| Property | Value |
|---|---|
| App Component | `PLM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHANGERECORDITEMEXTDEX')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `ChangeRecordReferenceUUID` | `RAW(16)` | NodeID |
| `ChangeRecordItemProcgStatus` | `CHAR(2)` | Item Processing Status |
| `ChgRecdItmDSgntr` | `CHAR(2)` | Digital Singature for Object reference |
| `ChgRecdReasonForChange` | `CHAR(40)` | Reason for Change |
| `ChangeNumber` | `CHAR(12)` | Change Number |
