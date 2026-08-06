---
name: I_BILLOFOPERATIONSPROFILE
description: Bill of Operations Profile
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BILLOFOPERATIONSPROFILE')/$value
semantic_en: Bill of Operations Profile
tags:
  - PP
  - bo:companycode
  - component:PP-VDM-MD-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-MD
  - PP-VDM-MD-2CL
  - metadata-only
---
# I_BILLOFOPERATIONSPROFILE

**Bill of Operations Profile**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BILLOFOPERATIONSPROFILE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `BillOfOperationsApplication` | `CHAR(1)` | Application of the task list |
| `BillOfOperationsProfile` | `CHAR(7)` | Profile |
| `OperationControlKey` | `CHAR(4)` | Control key for internal activities |
| `OperationAutoIncrementNumber` | `NUMC(4)` | Operation Increment |
| `OperationRelationshipType` | `CHAR(1)` | Key: View of relationships |
| `ChangeRule` | `CHAR(1)` | Change Rule |
