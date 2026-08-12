---
name: I_SRVCCHKLSTINSTCETEXT
description: "Checklist Instance - Text"
app_component: CRM-S4-INT-FSM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
