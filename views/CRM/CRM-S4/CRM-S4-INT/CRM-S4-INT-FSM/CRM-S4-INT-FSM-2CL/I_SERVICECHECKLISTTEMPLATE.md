---
name: I_SERVICECHECKLISTTEMPLATE
description: Checklist Template
app_component: CRM-S4-INT-FSM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SERVICECHECKLISTTEMPLATE')/$value
semantic_en: Checklist Template
keywords:
  - Checklist Template
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
# I_SERVICECHECKLISTTEMPLATE

**Checklist Template**

| Property | Value |
|---|---|
| App Component | `CRM-S4-INT-FSM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SERVICECHECKLISTTEMPLATE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `ServiceChecklistTemplate` | `CHAR(10)` | Template ID |
| `SrvcChklstTmplStatus` | `CHAR(1)` | Template Status |
| `SrvcChklstTmplCategory` | `CHAR(10)` | Checklist Template Category ID |
| `SrvcChklstCreationDateTime` | `DEC(21)` | Created At |
| `SrvcChklstCreatedByUser` | `CHAR(12)` | Created By |
| `SrvcChklstChangedDateTime` | `DEC(21)` | Last Changed At |
| `SrvcChklstChangedByUser` | `CHAR(12)` | Last Changed By |
| `FSMChecklistTemplateUUID` | `RAW(16)` | FSM Template ID |
| `FSMChecklistCategoryUUID` | `RAW(16)` | FSM Category ID |
| `FSMAccount` | `CHAR(10)` | FSM Account ID |
| `FSMCompany` | `CHAR(10)` | FSM Company ID |
| `FSMChecklistTemplateGroupUUID` | `RAW(16)` | FSM Checklist Template Group UUID |
| `FSMChecklistRequest` | `CHAR(40)` | Request ID |
| `SrvcChklstTmplVersion` | `INT1(3)` | Version |
| `SrvcChklstLanguage` | `LANG(1)` | Language |
