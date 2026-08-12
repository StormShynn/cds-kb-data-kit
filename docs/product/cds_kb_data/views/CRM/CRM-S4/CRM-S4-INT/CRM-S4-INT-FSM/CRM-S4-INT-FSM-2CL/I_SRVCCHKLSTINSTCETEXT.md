---
name: I_SRVCCHKLSTINSTCETEXT
description: "Checklist Instance - Text"
app_component: CRM-S4-INT-FSM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCCHKLSTINSTCETEXT')/$value
semantic_en: "Checklist Instance - Text"
semantic_vi: "Checklist Instance - Text — CDS view cơ bản (transactional data) dựa trên crmd_fsm_in_hdrt."
keywords:
  - "checklist"
  - "instance"
  - "text"
  - "service"
  - "srvc"
  - "chklst"
  - "language"
  - "instce"
  - "description"
  - "unfinished"
  - "expl"
tags:
  - CRM
  - component:CRM-S4-INT-FSM-2CL
  - CRM-S4
  - CRM-S4-INT
  - CRM-S4-INT-FSM
  - CRM-S4-INT-FSM-2CL
  - interface-view
---
# I_SRVCCHKLSTINSTCETEXT

**Checklist Instance - Text**

| Property | Value |
|---|---|
| App Component | `CRM-S4-INT-FSM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCCHKLSTINSTCETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceChecklistInstance` | ✓ | |  | `instance_id` | `CHAR(10)` | Instance ID |
| `SrvcChklstLanguage` | ✓ | |  | `spras` | `LANG(1)` | Language |
| `SrvcChklstInstceDescription` |  | |  | `description` | `CHAR(1333)` | Description |
| `SvCklInstceUnfinishedExplText` |  | |  | `unfinished_exp` | `CHAR(1333)` | Unfinished Explanation |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCCHKLSTINSTCETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCCHKLSTINSTCETEXT')/$value)*

```abap
@EndUserText.label: 'Checklist Instance - Text'
@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #CHECK

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel:{
    modelingPattern: #NONE,
    supportedCapabilities : [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
    usageType: {
        serviceQuality: #B,
        sizeCategory: #L,
        dataClass: #TRANSACTIONAL
    },
    dataCategory: #TEXT
}


define view entity I_SrvcChklstInstceText
  as select from crmd_fsm_in_hdrt
{
  key instance_id    as ServiceChecklistInstance,
      @Semantics.language:true
  key spras          as SrvcChklstLanguage,
      @Semantics.text:true
      description    as SrvcChklstInstceDescription,
      unfinished_exp as SvCklInstceUnfinishedExplText
}
```
