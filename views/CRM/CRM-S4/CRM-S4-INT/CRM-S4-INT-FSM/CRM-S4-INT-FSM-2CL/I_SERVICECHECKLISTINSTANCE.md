---
name: I_SERVICECHECKLISTINSTANCE
description: Checklist Instance
app_component: CRM-S4-INT-FSM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SERVICECHECKLISTINSTANCE')/$value
semantic_en: Checklist Instance
keywords:
  - Checklist Instance
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
# I_SERVICECHECKLISTINSTANCE

**Checklist Instance**

| Property | Value |
|---|---|
| App Component | `CRM-S4-INT-FSM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SERVICECHECKLISTINSTANCE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `ServiceChecklistInstance` | `CHAR(10)` | Instance ID |
| `ServiceChecklistTemplate` | `CHAR(10)` | Template ID |
| `SrvcChklstLanguage` | `LANG(1)` | Language |
| `SrvcChklstInstceStatus` | `CHAR(1)` | Instance Status |
| `SrvcChklstInstceDeltnReason` | `CHAR(2)` | Checklist Instance Deletion Reason |
| `SrvcChklstCreationDateTime` | `DEC(21)` | Created At |
| `SrvcChklstCreatedByUser` | `CHAR(12)` | Created By |
| `SrvcChklstChangedDateTime` | `DEC(21)` | Last Changed At |
| `SrvcChklstChangedByUser` | `CHAR(12)` | Last Changed By |
| `FSMChecklistRequest` | `CHAR(40)` | Request ID |
| `SrvcChklstInstceLinkedObject` | `CHAR(40)` | Linked Object ID |
| `SrvcChklstInstceLinkdObjType` | `CHAR(20)` | Linked Object's Obj. Type |
| `FSMChecklistInstanceUUID` | `RAW(16)` | FSM Instance ID |
| `SrvcChklstInstceSourceSystem` | `CHAR(2)` | Source System |
| `FSMChklstInstanceResponsible` | `CHAR(20)` | FSM Checklist Instance Responsible |
