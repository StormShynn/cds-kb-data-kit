---
name: I_SRVCCHECKLISTTEMPLATEENHCD
description: Checklist Template Enhanced
app_component: CRM-S4-INT-FSM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCCHECKLISTTEMPLATEENHCD')/$value
semantic_en: Checklist Template Enhanced
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
# I_SRVCCHECKLISTTEMPLATEENHCD

**Checklist Template Enhanced**

| Property | Value |
|---|---|
| App Component | `CRM-S4-INT-FSM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCCHECKLISTTEMPLATEENHCD')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceChecklistTemplate` |  | |  |  | `CHAR(10)` | Template ID |
| `SrvcChklstTmplStatus` |  | |  |  | `CHAR(1)` | Template Status |
| `SrvcChklstTmplCategory` |  | |  |  | `CHAR(10)` | Checklist Template Category ID |
| `SrvcChklstCreationDateTime` |  | |  |  | `DEC(21)` | Created At |
| `SrvcChklstCreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `SrvcChklstChangedDateTime` |  | |  |  | `DEC(21)` | Last Changed At |
| `SrvcChklstChangedByUser` |  | |  |  | `CHAR(12)` | Last Changed By |
| `FSMChecklistTemplateUUID` |  | |  |  | `RAW(16)` | FSM Template ID |
| `FSMChecklistCategoryUUID` |  | |  |  | `RAW(16)` | FSM Category ID |
| `SrvcChklstTmplVersion` |  | |  |  | `INT1(3)` | Version |
| `SrvcChklstLanguage` |  | |  |  | `LANG(1)` | Language |
