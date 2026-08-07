---
name: C_CHANGERECORDCLASSDEX
description: "Change Record Class Extraction"
app_component: PLM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHANGERECORDCLASSDEX')/$value
semantic_en: "Change Record Class Extraction"
tags:
  - PLM
  - bo:salesorganization
  - component:PLM-CR-2CL
  - consumption-view
  - PLM-CR
  - PLM-CR-2CL
  - metadata-only
---
# C_CHANGERECORDCLASSDEX

**Change Record Class Extraction**

| Property | Value |
|---|---|
| App Component | `PLM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHANGERECORDCLASSDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeRecordReferenceUUID` |  | |  |  | `RAW(16)` | DB Key |
| `ChangeRecordUUID` |  | |  |  | `RAW(16)` | DB Key |
| `ClassInternalID` |  | |  |  | `NUMC(10)` | Internal Class Number |
| `Class` |  | |  |  | `CHAR(18)` | Class number |
| `ClassType` |  | |  |  | `CHAR(3)` | Class Type |
