---
name: I_SRVCCHKLSTTMPLTEXT
description: Checklist Template - Text
app_component: CRM-S4-INT-FSM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCCHKLSTTMPLTEXT')/$value
semantic_en: Checklist Template - Text
tags:
  - CRM
  - component:CRM-S4-INT-FSM-2CL
  - CRM-S4
  - CRM-S4-INT
  - CRM-S4-INT-FSM
  - CRM-S4-INT-FSM-2CL
  - interface-view
  - metadata-only
---
# I_SRVCCHKLSTTMPLTEXT

**Checklist Template - Text**

| Property | Value |
|---|---|
| App Component | `CRM-S4-INT-FSM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCCHKLSTTMPLTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceChecklistTemplate` |  | |  |  | `CHAR(10)` | Template ID |
| `SrvcChklstLanguage` |  | |  |  | `LANG(1)` | Language |
| `SrvcChklstTmplName` |  | |  |  | `CHAR(128)` | Template Name |
| `SrvcChklstTmplDescription` |  | |  |  | `CHAR(150)` | FSM Template Description |
| `SrvcChklstTmplCategoryName` |  | |  |  | `CHAR(1333)` | FSM Category Name |
| `SrvcChklstTmplTagsString` |  | |  |  | `CHAR(1333)` | Template Tags |
