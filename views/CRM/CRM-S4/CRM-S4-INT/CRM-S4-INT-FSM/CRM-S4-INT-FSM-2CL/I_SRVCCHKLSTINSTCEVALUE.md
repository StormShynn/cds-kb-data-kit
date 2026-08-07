---
name: I_SRVCCHKLSTINSTCEVALUE
description: Checklist Instance Values
app_component: CRM-S4-INT-FSM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCCHKLSTINSTCEVALUE')/$value
semantic_en: Checklist Instance Values
keywords:
  - Checklist Instance Value
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
# I_SRVCCHKLSTINSTCEVALUE

**Checklist Instance Values**

| Property | Value |
|---|---|
| App Component | `CRM-S4-INT-FSM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCCHKLSTINSTCEVALUE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceChecklistInstance` |  | |  |  | `CHAR(10)` | Instance ID |
| `SrvcChecklistTemplateElement` |  | |  |  | `NUMC(4)` | Element ID |
| `SrvcChklstInstceElmntOccren` |  | |  |  | `INT4(10)` | Sequence Number |
| `SrvcChklstInstceElmntValueType` |  | |  |  | `CHAR(30)` | Value Type |
| `SrvcChklstInstceElmntSeriesIdx` |  | |  |  | `CHAR(10)` | Series Index |
| `SrvcChklstInstceElmntTblRowIdx` |  | |  |  | `CHAR(10)` | Table Row |
| `SrvcChklstInstceStateElmntIdx` |  | |  |  | `CHAR(10)` | State Element Index |
| `SrvcChklstInstceAttchPickerIdx` |  | |  |  | `CHAR(10)` | Attachment Picker Index |
| `NrOfSvCklInstceStateElements` |  | |  |  | `CHAR(1333)` | State Element Quantity |
| `SrvcChklstInstceElementValue` |  | |  |  | `CHAR(1333)` | Element Value |
| `SrvcChklstInstceElmntDesc` |  | |  |  | `CHAR(1333)` | Element Description |
| `SrvcChklstInstceElmntComment` |  | |  |  | `CHAR(1333)` | Element Comment |
| `SrvcChklstInstceElmntImage` |  | |  |  | `CHAR(1333)` | Element Image |
| `SrvcChklstInstceElmntItem` |  | |  |  | `CHAR(1333)` | Element Item |
| `SrvcChklstLanguage` |  | |  |  | `LANG(1)` | Language |
